import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { GraphNode, GraphEdge, ClusterType } from '../../data/architectureTopologyData';

interface ArchitectureGraphCanvas3DProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string) => void;
  blastRadius: number;
  searchQuery: string;
  isPhysicsRunning: boolean;
  clusterFilter: ClusterType;
}

interface Node3D extends GraphNode {
  x3: number;
  y3: number;
  z3: number;
  projX?: number;
  projY?: number;
  projScale?: number;
  screenRadius?: number;
}

export const ArchitectureGraphCanvas3D: React.FC<ArchitectureGraphCanvas3DProps> = ({
  nodes,
  edges,
  selectedNodeId,
  onSelectNode,
  blastRadius,
  searchQuery,
  isPhysicsRunning,
  clusterFilter
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 3D Camera & Rotation State
  const rotXRef = useRef<number>(0.35);
  const rotYRef = useRef<number>(0.5);
  const zoomRef = useRef<number>(550);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const nodes3DRef = useRef<Node3D[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const autoRotateRef = useRef<boolean>(true);

  // Filter nodes
  const filteredNodes = useMemo(() => {
    if (clusterFilter === 'All') return nodes;
    return nodes.filter(n => n.cluster === clusterFilter || n.type === 'core');
  }, [nodes, clusterFilter]);

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  const filteredEdges = useMemo(() => {
    return edges.filter(e => filteredNodeIds.has(e.source) && filteredNodeIds.has(e.target));
  }, [edges, filteredNodeIds]);

  // Compute blast radius reachable nodes via BFS
  const blastRadiusNodes = useMemo(() => {
    if (!selectedNodeId) return new Set<string>();
    const visited = new Set<string>([selectedNodeId]);
    let currentLevel = [selectedNodeId];

    for (let hop = 0; hop < blastRadius; hop++) {
      const nextLevel: string[] = [];
      for (const curr of currentLevel) {
        for (const edge of edges) {
          if (edge.source === curr && !visited.has(edge.target)) {
            visited.add(edge.target);
            nextLevel.push(edge.target);
          }
          if (edge.target === curr && !visited.has(edge.source)) {
            visited.add(edge.source);
            nextLevel.push(edge.source);
          }
        }
      }
      currentLevel = nextLevel;
    }
    return visited;
  }, [selectedNodeId, blastRadius, edges]);

  // Initialize 3D Spherical Coordinates
  useEffect(() => {
    const count = filteredNodes.length;
    nodes3DRef.current = filteredNodes.map((n, i) => {
      if (n.type === 'core') {
        return {
          ...n,
          x3: 0,
          y3: 0,
          z3: 0,
          radius: 50,
          color: '#00f2fe'
        };
      }

      // Golden spiral distribution on an ellipsoid galaxy
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radiusDist = 240 + (i % 3) * 60;

      const x = radiusDist * Math.sin(phi) * Math.cos(theta);
      const y = (radiusDist * Math.sin(phi) * Math.sin(theta)) * 0.65; // flattened galaxy disc
      const z = radiusDist * Math.cos(phi);

      return {
        ...n,
        x3: x,
        y3: y,
        z3: z,
        radius: 20,
        color:
          n.type === 'form' ? '#10b981' :
          n.type === 'service' ? '#00f2fe' :
          n.type === 'table' ? '#3b82f6' :
          n.type === 'worker' ? '#f59e0b' :
          n.type === 'gateway' ? '#8b5cf6' : '#94a3b8'
      };
    });
  }, [filteredNodes]);

  // Main 3D Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isMounted = true;

    const render = () => {
      if (!isMounted) return;

      if (autoRotateRef.current && !isDraggingRef.current && isPhysicsRunning) {
        rotYRef.current += 0.003;
      }

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // CLEAR
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      const cosX = Math.cos(rotXRef.current);
      const sinX = Math.sin(rotXRef.current);
      const cosY = Math.cos(rotYRef.current);
      const sinY = Math.sin(rotYRef.current);
      const focalLength = zoomRef.current;

      const nodes3D = nodes3DRef.current;
      const nodeMap = new Map<string, Node3D>();

      // 1. PROJECT 3D NODES TO 2D SCREEN
      for (const node of nodes3D) {
        // Y-axis rotation
        let x1 = node.x3 * cosY + node.z3 * sinY;
        let y1 = node.y3;
        let z1 = -node.x3 * sinY + node.z3 * cosY;

        // X-axis rotation
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Perspective division
        const distance = focalLength + z2;
        const scale = distance > 10 ? focalLength / distance : 0.01;

        node.projX = cx + x2 * scale;
        node.projY = cy + y2 * scale;
        node.projScale = scale;
        node.screenRadius = Math.max((node.radius || 20) * scale, 4);

        nodeMap.set(node.id, node);
      }

      // Sort by Z depth (furthest first)
      const sortedNodes = [...nodes3D].sort((a, b) => (b.projScale || 0) - (a.projScale || 0));

      // 2. DRAW 3D AMBIENT GALAXY ORBITAL RINGS
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 8]);
      for (const r of [160, 280, 400]) {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const rx = r * Math.cos(a);
          const rz = r * Math.sin(a);
          const x1 = rx * cosY + rz * sinY;
          const z1 = -rx * sinY + rz * cosY;
          const y2 = -z1 * sinX;
          const z2 = z1 * cosX;
          const scale = focalLength / (focalLength + z2);
          const px = cx + x1 * scale;
          const py = cy + y2 * scale;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.restore();

      // 3. DRAW 3D EDGES
      for (const edge of filteredEdges) {
        const src = nodeMap.get(edge.source);
        const tgt = nodeMap.get(edge.target);
        if (!src || !tgt || src.projX === undefined || tgt.projX === undefined) continue;

        const isHighlighted =
          selectedNodeId && (blastRadiusNodes.has(src.id) && blastRadiusNodes.has(tgt.id));
        const isDimmed = selectedNodeId && !isHighlighted;

        const edgeAlpha = isHighlighted ? 0.9 : isDimmed ? 0.05 : 0.25;
        ctx.strokeStyle = isHighlighted ? '#00f2fe' : `rgba(0, 242, 254, ${edgeAlpha})`;
        ctx.lineWidth = isHighlighted ? 2.5 : Math.max(1, 1.5 * ((src.projScale || 1) + (tgt.projScale || 1)) / 2);

        ctx.beginPath();
        ctx.moveTo(src.projX, src.projY || 0);
        ctx.lineTo(tgt.projX, tgt.projY || 0);
        ctx.stroke();
      }

      // 4. DRAW 3D NODES
      for (const node of sortedNodes) {
        if (node.projX === undefined || node.projY === undefined) continue;

        const isSelected = node.id === selectedNodeId;
        const isInBlast = selectedNodeId ? blastRadiusNodes.has(node.id) : true;
        const alpha = isInBlast ? 1.0 : 0.15;
        const r = node.screenRadius || 12;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (node.type === 'core') {
          // Central Core 3D Sun
          const grad = ctx.createRadialGradient(node.projX - r * 0.3, node.projY - r * 0.3, r * 0.1, node.projX, node.projY, r);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.3, '#00f2fe');
          grad.addColorStop(0.7, '#0284c7');
          grad.addColorStop(1, '#082f49');

          ctx.fillStyle = grad;
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = isSelected ? 35 : 20;
          ctx.beginPath();
          ctx.arc(node.projX, node.projY, r * 1.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Legacy ERP Core', node.projX, node.projY);
        } else {
          // 3D Orbital Satellite Sphere
          const borderClr = node.color || '#00f2fe';
          const grad = ctx.createRadialGradient(
            node.projX - r * 0.3,
            node.projY - r * 0.3,
            r * 0.1,
            node.projX,
            node.projY,
            r
          );
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.4, borderClr);
          grad.addColorStop(1, '#050811');

          ctx.fillStyle = grad;
          if (isSelected) {
            ctx.shadowColor = borderClr;
            ctx.shadowBlur = 20;
          }
          ctx.beginPath();
          ctx.arc(node.projX, node.projY, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.strokeStyle = isSelected ? '#ffffff' : borderClr;
          ctx.lineWidth = isSelected ? 2.5 : 1;
          ctx.stroke();

          // Text Label if scale is reasonably big
          if ((node.projScale || 1) > 0.6 || isSelected) {
            ctx.font = '10px "JetBrains Mono", Menlo, monospace';
            ctx.fillStyle = isSelected ? '#ffffff' : '#94a3b8';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(node.name, node.projX, node.projY + r + 4);
          }
        }

        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isMounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [filteredEdges, isPhysicsRunning, selectedNodeId, blastRadiusNodes]);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse Handlers for 3D Orbiting
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    // Hit test for node selection
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let clickedNode: Node3D | null = null;
    for (const node of nodes3DRef.current) {
      if (node.projX === undefined || node.projY === undefined) continue;
      const dist = Math.hypot(mx - node.projX, my - node.projY);
      if (dist <= (node.screenRadius || 15) + 6) {
        clickedNode = node;
        break;
      }
    }

    if (clickedNode) {
      onSelectNode(clickedNode.id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    rotYRef.current += dx * 0.006;
    rotXRef.current = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, rotXRef.current + dy * 0.006));

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.08 : 0.92;
    zoomRef.current = Math.max(250, Math.min(1200, zoomRef.current * factor));
  };

  return (
    <div ref={containerRef} className="w-100 h-100 position-relative overflow-hidden" style={{ backgroundColor: '#050811' }}>
      <canvas
        ref={canvasRef}
        className="w-100 h-100 d-block cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      />
      {/* 3D Orbit Controls Overlay */}
      <div
        className="position-absolute start-50 bottom-0 translate-middle-x mb-3 px-3 py-1 rounded-pill border border-dark fs-11 text-muted pointer-events-none"
        style={{ backgroundColor: 'rgba(11, 15, 25, 0.85)', backdropFilter: 'blur(8px)', zIndex: 10 }}
      >
        <i className="ti ti-3d-rotate me-1 text-cyan"></i> 3D Galaxy View: Drag to Orbit 360° • Wheel to Zoom • Click Node to Inspect
      </div>
    </div>
  );
};
