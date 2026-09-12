import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { GraphNode, GraphEdge, ClusterType } from '../../data/architectureTopologyData';

interface ArchitectureGraphCanvas2DProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string) => void;
  blastRadius: number;
  searchQuery: string;
  isPhysicsRunning: boolean;
  clusterFilter: ClusterType;
}

interface Particle {
  edgeId: string;
  sourceId: string;
  targetId: string;
  progress: number;
  speed: number;
}

export const ArchitectureGraphCanvas2D: React.FC<ArchitectureGraphCanvas2DProps> = ({
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

  // Camera state
  const cameraRef = useRef({ x: 0, y: 0, zoom: 1 });
  const isDraggingCamera = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Node drag state
  const draggedNodeRef = useRef<GraphNode | null>(null);
  const hoveredNodeRef = useRef<GraphNode | null>(null);

  // Mutable nodes for physics simulation
  const simNodesRef = useRef<GraphNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const pulsePhaseRef = useRef<number>(0);

  // Filter nodes based on cluster
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

  // Initialize simulation coordinates in a radial layout
  useEffect(() => {
    const width = containerRef.current?.clientWidth || 1200;
    const height = containerRef.current?.clientHeight || 800;
    const cx = width / 2;
    const cy = height / 2;

    const count = filteredNodes.length;
    simNodesRef.current = filteredNodes.map((n, i) => {
      if (n.type === 'core') {
        return {
          ...n,
          x: cx,
          y: cy,
          vx: 0,
          vy: 0,
          radius: 65,
          color: '#ef4444'
        };
      }
      // Radial ring layout
      const angle = ((i - 1) / Math.max(1, count - 1)) * Math.PI * 2;
      const dist = 220 + (i % 3) * 80;
      return {
        ...n,
        x: cx + Math.cos(angle) * dist + (Math.random() - 0.5) * 40,
        y: cy + Math.sin(angle) * dist + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        radius: n.type === 'table' ? 32 : 36,
        color:
          n.type === 'form' ? '#10b981' :
          n.type === 'service' ? '#00f2fe' :
          n.type === 'table' ? '#3b82f6' :
          n.type === 'worker' ? '#f59e0b' :
          n.type === 'gateway' ? '#8b5cf6' : '#94a3b8'
      };
    });

    // Initialize flowing particles
    particlesRef.current = filteredEdges.map(e => ({
      edgeId: e.id,
      sourceId: e.source,
      targetId: e.target,
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.008
    }));
  }, [filteredNodes, filteredEdges]);

  // If search query matches a node, focus camera on it
  useEffect(() => {
    if (!searchQuery) return;
    const q = searchQuery.toLowerCase();
    const match = simNodesRef.current.find(n => n.name.toLowerCase().includes(q));
    if (match && match.x !== undefined && match.y !== undefined) {
      onSelectNode(match.id);
      const width = containerRef.current?.clientWidth || 1200;
      const height = containerRef.current?.clientHeight || 800;
      cameraRef.current = {
        x: width / 2 - match.x * 1.4,
        y: height / 2 - match.y * 1.4,
        zoom: 1.4
      };
    }
  }, [searchQuery, onSelectNode]);

  // Main Render & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isMounted = true;

    const render = () => {
      if (!isMounted) return;
      pulsePhaseRef.current += 0.03;

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // Physics step if running
      if (isPhysicsRunning) {
        const simNodes = simNodesRef.current;
        const nodeMap = new Map(simNodes.map(n => [n.id, n]));

        // Repulsion between all nodes
        for (let i = 0; i < simNodes.length; i++) {
          const n1 = simNodes[i];
          if (n1.fx !== undefined && n1.fx !== null) continue;

          for (let j = i + 1; j < simNodes.length; j++) {
            const n2 = simNodes[j];
            const dx = (n1.x || 0) - (n2.x || 0);
            const dy = (n1.y || 0) - (n2.y || 0);
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < 320) {
              const force = (320 - dist) / (dist * 18);
              const fx = (dx / dist) * force;
              const fy = (dy / dist) * force;
              n1.vx = (n1.vx || 0) + fx;
              n1.vy = (n1.vy || 0) + fy;
              if (n2.fx === undefined || n2.fx === null) {
                n2.vx = (n2.vx || 0) - fx;
                n2.vy = (n2.vy || 0) - fy;
              }
            }
          }

          // Central Gravity pull towards center
          const cdx = cx - (n1.x || 0);
          const cdy = cy - (n1.y || 0);
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy) || 1;
          n1.vx = (n1.vx || 0) + (cdx / cdist) * 0.04;
          n1.vy = (n1.vy || 0) + (cdy / cdist) * 0.04;
        }

        // Spring attraction along edges
        for (const edge of filteredEdges) {
          const src = nodeMap.get(edge.source);
          const tgt = nodeMap.get(edge.target);
          if (!src || !tgt) continue;

          const dx = (tgt.x || 0) - (src.x || 0);
          const dy = (tgt.y || 0) - (src.y || 0);
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const targetDist = src.type === 'core' || tgt.type === 'core' ? 240 : 160;
          const force = (dist - targetDist) * 0.008;

          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (src.fx === undefined || src.fx === null) {
            src.vx = (src.vx || 0) + fx;
            src.vy = (src.vy || 0) + fy;
          }
          if (tgt.fx === undefined || tgt.fx === null) {
            tgt.vx = (tgt.vx || 0) - fx;
            tgt.vy = (tgt.vy || 0) - fy;
          }
        }

        // Apply velocity with damping
        for (const n of simNodes) {
          if (n.type === 'core') {
            n.x = cx;
            n.y = cy;
            continue;
          }
          if (n.fx !== undefined && n.fx !== null) {
            n.x = n.fx;
            n.y = n.fy !== undefined && n.fy !== null ? n.fy : n.y;
            n.vx = 0;
            n.vy = 0;
            continue;
          }
          n.vx = (n.vx || 0) * 0.88;
          n.vy = (n.vy || 0) * 0.88;
          n.x = (n.x || 0) + (n.vx || 0);
          n.y = (n.y || 0) + (n.vy || 0);
        }
      }

      // Update flowing particles
      for (const p of particlesRef.current) {
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;
      }

      // CLEAR CANVAS
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      // Cyber Grid Background
      ctx.save();
      const zoom = cameraRef.current.zoom;
      const panX = cameraRef.current.x;
      const panY = cameraRef.current.y;
      ctx.translate(panX, panY);
      ctx.scale(zoom, zoom);

      ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      const startX = -panX / zoom - 200;
      const endX = (width - panX) / zoom + 200;
      const startY = -panY / zoom - 200;
      const endY = (height - panY) / zoom + 200;

      for (let x = Math.floor(startX / gridSize) * gridSize; x < endX; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
        ctx.stroke();
      }
      for (let y = Math.floor(startY / gridSize) * gridSize; y < endY; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
        ctx.stroke();
      }

      const simNodes = simNodesRef.current;
      const nodeMap = new Map(simNodes.map(n => [n.id, n]));

      // 1. DRAW CORE PULSING RADIANCE
      const coreNode = simNodes.find(n => n.type === 'core');
      if (coreNode && coreNode.x !== undefined && coreNode.y !== undefined) {
        const pulse = Math.sin(pulsePhaseRef.current) * 8;
        const grad = ctx.createRadialGradient(
          coreNode.x, coreNode.y, 10,
          coreNode.x, coreNode.y, 220 + pulse
        );
        grad.addColorStop(0, 'rgba(0, 242, 254, 0.35)');
        grad.addColorStop(0.4, 'rgba(0, 242, 254, 0.12)');
        grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(coreNode.x, coreNode.y, 220 + pulse, 0, Math.PI * 2);
        ctx.fill();

        // Concentric Orbital Rings around core
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(coreNode.x, coreNode.y, 110, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(coreNode.x, coreNode.y, 175, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 2. DRAW DIRECTED EDGES
      for (const edge of filteredEdges) {
        const src = nodeMap.get(edge.source);
        const tgt = nodeMap.get(edge.target);
        if (!src || !tgt || src.x === undefined || src.y === undefined || tgt.x === undefined || tgt.y === undefined) continue;

        const isHighlighted =
          selectedNodeId && (blastRadiusNodes.has(src.id) && blastRadiusNodes.has(tgt.id));
        const isDimmed = selectedNodeId && !isHighlighted;

        ctx.strokeStyle = isHighlighted ? '#00f2fe' : isDimmed ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 242, 254, 0.22)';
        ctx.lineWidth = isHighlighted ? 2.5 : 1.2;

        ctx.beginPath();
        ctx.moveTo(src.x, src.y);
        ctx.lineTo(tgt.x, tgt.y);
        ctx.stroke();

        // Arrowhead
        const angle = Math.atan2(tgt.y - src.y, tgt.x - src.x);
        const arrowDist = (tgt.radius || 30) + 6;
        const ax = tgt.x - Math.cos(angle) * arrowDist;
        const ay = tgt.y - Math.sin(angle) * arrowDist;

        ctx.fillStyle = isHighlighted ? '#00f2fe' : isDimmed ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 242, 254, 0.4)';
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax - Math.cos(angle - Math.PI / 7) * 10, ay - Math.sin(angle - Math.PI / 7) * 10);
        ctx.lineTo(ax - Math.cos(angle + Math.PI / 7) * 10, ay - Math.sin(angle + Math.PI / 7) * 10);
        ctx.closePath();
        ctx.fill();
      }

      // 3. DRAW ANIMATED FLOW PARTICLES
      for (const p of particlesRef.current) {
        const src = nodeMap.get(p.sourceId);
        const tgt = nodeMap.get(p.targetId);
        if (!src || !tgt || src.x === undefined || src.y === undefined || tgt.x === undefined || tgt.y === undefined) continue;

        const px = src.x + (tgt.x - src.x) * p.progress;
        const py = src.y + (tgt.y - src.y) * p.progress;

        ctx.fillStyle = '#00f2fe';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. DRAW SATELLITE & CORE NODES
      for (const node of simNodes) {
        if (node.x === undefined || node.y === undefined) continue;

        const isSelected = node.id === selectedNodeId;
        const isHovered = node.id === hoveredNodeRef.current?.id;
        const isInBlast = selectedNodeId ? blastRadiusNodes.has(node.id) : true;
        const alpha = isInBlast ? 1.0 : 0.15;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (node.type === 'core') {
          // Central Core Orb
          const r = node.radius || 65;
          const coreGrad = ctx.createRadialGradient(node.x - 10, node.y - 10, 5, node.x, node.y, r);
          coreGrad.addColorStop(0, '#00f2fe');
          coreGrad.addColorStop(0.6, '#0284c7');
          coreGrad.addColorStop(1, '#082f49');

          ctx.fillStyle = coreGrad;
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = isSelected ? 30 : 18;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Core Border
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.stroke();

          // Core Multi-line Label
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Legacy Monolithic', node.x, node.y - 8);
          ctx.fillText('ERP Modules', node.x, node.y + 8);
        } else {
          // Rounded Pill / Satellite Card
          const text = node.name;
          ctx.font = '12px "JetBrains Mono", Menlo, monospace';
          const textMetrics = ctx.measureText(text);
          const pillWidth = Math.max(textMetrics.width + 34, 120);
          const pillHeight = 32;
          const px = node.x - pillWidth / 2;
          const py = node.y - pillHeight / 2;
          const radius = 8;

          // Pill Background
          ctx.fillStyle = isSelected ? 'rgba(15, 23, 42, 0.96)' : 'rgba(11, 15, 25, 0.9)';
          ctx.beginPath();
          ctx.roundRect(px, py, pillWidth, pillHeight, radius);
          ctx.fill();

          // Pill Border with Neon Glow
          const borderClr = node.color || '#00f2fe';
          ctx.strokeStyle = isSelected ? '#00f2fe' : borderClr;
          ctx.lineWidth = isSelected ? 2.5 : isHovered ? 2 : 1.2;
          if (isSelected || isHovered) {
            ctx.shadowColor = borderClr;
            ctx.shadowBlur = 15;
          }
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Left Icon Dot
          ctx.fillStyle = borderClr;
          ctx.beginPath();
          ctx.arc(px + 12, node.y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Label Text
          ctx.fillStyle = isSelected ? '#ffffff' : '#f1f5f9';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, px + 22, node.y);

          // Selection Reticle Crosshair
          if (isSelected) {
            ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.strokeRect(px - 6, py - 6, pillWidth + 12, pillHeight + 12);
            ctx.setLineDash([]);
          }
        }

        ctx.restore();
      }

      ctx.restore();
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

  // Handle Resize
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

  // Coordinate transforms
  const screenToWorld = useCallback((sx: number, sy: number) => {
    const zoom = cameraRef.current.zoom;
    return {
      x: (sx - cameraRef.current.x) / zoom,
      y: (sy - cameraRef.current.y) / zoom
    };
  }, []);

  // Hit test for nodes
  const findNodeAt = useCallback((worldX: number, worldY: number): GraphNode | null => {
    for (let i = simNodesRef.current.length - 1; i >= 0; i--) {
      const node = simNodesRef.current[i];
      if (node.x === undefined || node.y === undefined) continue;

      if (node.type === 'core') {
        const dist = Math.hypot(worldX - node.x, worldY - node.y);
        if (dist <= (node.radius || 65)) return node;
      } else {
        const w = 140;
        const h = 36;
        if (
          worldX >= node.x - w / 2 &&
          worldX <= node.x + w / 2 &&
          worldY >= node.y - h / 2 &&
          worldY <= node.y + h / 2
        ) {
          return node;
        }
      }
    }
    return null;
  }, []);

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    const world = screenToWorld(sx, sy);

    const hit = findNodeAt(world.x, world.y);
    if (hit) {
      draggedNodeRef.current = hit;
      hit.fx = hit.x;
      hit.fy = hit.y;
      onSelectNode(hit.id);
    } else {
      isDraggingCamera.current = true;
      dragStart.current = { x: sx - cameraRef.current.x, y: sy - cameraRef.current.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;

    if (draggedNodeRef.current) {
      const world = screenToWorld(sx, sy);
      draggedNodeRef.current.fx = world.x;
      draggedNodeRef.current.fy = world.y;
      draggedNodeRef.current.x = world.x;
      draggedNodeRef.current.y = world.y;
    } else if (isDraggingCamera.current) {
      cameraRef.current.x = sx - dragStart.current.x;
      cameraRef.current.y = sy - dragStart.current.y;
    } else {
      const world = screenToWorld(sx, sy);
      hoveredNodeRef.current = findNodeAt(world.x, world.y);
      if (canvasRef.current) {
        canvasRef.current.style.cursor = hoveredNodeRef.current ? 'pointer' : 'grab';
      }
    }
  };

  const handleMouseUp = () => {
    if (draggedNodeRef.current) {
      // Release fixed position
      draggedNodeRef.current.fx = null;
      draggedNodeRef.current.fy = null;
      draggedNodeRef.current = null;
    }
    isDraggingCamera.current = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.min(Math.max(cameraRef.current.zoom * zoomFactor, 0.4), 3.0);

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;

    // Zoom towards cursor
    cameraRef.current.x = sx - (sx - cameraRef.current.x) * (newZoom / cameraRef.current.zoom);
    cameraRef.current.y = sy - (sy - cameraRef.current.y) * (newZoom / cameraRef.current.zoom);
    cameraRef.current.zoom = newZoom;
  };

  return (
    <div ref={containerRef} className="w-100 h-100 position-relative overflow-hidden" style={{ backgroundColor: '#050811' }}>
      <canvas
        ref={canvasRef}
        className="w-100 h-100 d-block"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      />
      {/* Zoom / Pan Help Badge */}
      <div
        className="position-absolute start-50 bottom-0 translate-middle-x mb-3 px-3 py-1 rounded-pill border border-dark fs-11 text-muted pointer-events-none"
        style={{ backgroundColor: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(8px)', zIndex: 10 }}
      >
        <i className="ti ti-hand-grab me-1"></i> Drag to Pan • Wheel to Zoom • Drag Nodes to Reposition • Click to Inspect
      </div>
    </div>
  );
};
