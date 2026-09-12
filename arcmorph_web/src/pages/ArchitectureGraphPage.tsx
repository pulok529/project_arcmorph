import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  DATASETS_MAP,
  FORM_DEPENDENCY_DATASET,
  GraphNode,
  ClusterType
} from '../data/architectureTopologyData';
import { ArchitectureGraphCanvas2D } from '../components/graph/ArchitectureGraphCanvas2D';
import { ArchitectureGraphCanvas3D } from '../components/graph/ArchitectureGraphCanvas3D';
import { GraphControlSidebar } from '../components/graph/GraphControlSidebar';
import { GraphNodeInspector } from '../components/graph/GraphNodeInspector';
import { DecouplingPlanModal } from '../components/graph/DecouplingPlanModal';

export const ArchitectureGraphPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id || 'proj_1788642109465';

  // Active View Tab: 'form_dependency' | 'database_erd' | 'user_journey'
  const [activeView, setActiveView] = useState<'form_dependency' | 'database_erd' | 'user_journey'>('form_dependency');

  // Selected Node
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('form-student-admission');

  // Filter & Search
  const [clusterFilter, setClusterFilter] = useState<ClusterType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [blastRadius, setBlastRadius] = useState<number>(2);

  // View & Physics options
  const [is3D, setIs3D] = useState<boolean>(false);
  const [isPhysicsRunning, setIsPhysicsRunning] = useState<boolean>(true);
  const [inspectorOpen, setInspectorOpen] = useState<boolean>(true);
  const [decouplingModalOpen, setDecouplingModalOpen] = useState<boolean>(false);

  // Active dataset
  const currentDataset = useMemo(() => {
    return DATASETS_MAP[activeView] || FORM_DEPENDENCY_DATASET;
  }, [activeView]);

  // Selected node object
  const selectedNode = useMemo(() => {
    if (!selectedNodeId) return null;
    return currentDataset.nodes.find(n => n.id === selectedNodeId) || null;
  }, [selectedNodeId, currentDataset]);

  const handleSelectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setInspectorOpen(true);
  };

  const handleResetView = () => {
    setSelectedNodeId(null);
    setClusterFilter('All');
    setSearchQuery('');
    setBlastRadius(2);
    setIsPhysicsRunning(true);
  };

  return (
    <div className="vh-100 vw-100 d-flex flex-column overflow-hidden" style={{ backgroundColor: '#050811', color: '#e2e8f0' }}>
      {/* TOP NAVIGATION BAR */}
      <header
        className="px-3 py-2 border-bottom border-dark d-flex align-items-center justify-content-between flex-shrink-0"
        style={{
          backgroundColor: 'rgba(11, 15, 25, 0.96)',
          backdropFilter: 'blur(16px)',
          zIndex: 40,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Left: Brand & Back to Project */}
        <div className="d-flex align-items-center gap-3">
          <Link to={`/projects/${projectId}`} className="btn btn-sm btn-outline-dark text-light border-secondary d-flex align-items-center gap-1">
            <i className="ti ti-arrow-left"></i>
            <span className="d-none d-sm-inline">Back to Cockpit</span>
          </Link>

          <div className="d-flex align-items-center gap-2">
            <img src="/assets/images/logo-sm.svg" alt="ArcMorph" style={{ height: '24px' }} />
            <span className="fw-bold fs-15 text-white tracking-wide">
              ArcMorph <span className="text-cyan fw-normal">Topology</span>
            </span>
          </div>

          <span className="badge bg-dark text-cyan border border-cyan-subtle font-monospace fs-11 d-none d-md-inline">
            Bornomala Monolith ERP
          </span>
        </div>

        {/* Center: Perspective Tabs matching reference image */}
        <div className="d-flex align-items-center gap-1 p-1 rounded border border-dark bg-black-subtle">
          <button
            type="button"
            className={`btn btn-sm fs-12 d-flex align-items-center gap-2 ${
              activeView === 'database_erd'
                ? 'btn-info fw-bold text-dark shadow-sm'
                : 'btn-dark text-muted border-0'
            }`}
            onClick={() => {
              setActiveView('database_erd');
              setSelectedNodeId('tbl-student-erd');
            }}
          >
            <i className="ti ti-database"></i> Database ERD
          </button>

          <button
            type="button"
            className={`btn btn-sm fs-12 d-flex align-items-center gap-2 ${
              activeView === 'form_dependency'
                ? 'btn-info fw-bold text-dark shadow-sm'
                : 'btn-dark text-muted border-0'
            }`}
            onClick={() => {
              setActiveView('form_dependency');
              setSelectedNodeId('form-student-admission');
            }}
          >
            <i className="ti ti-binary-tree"></i> Form Dependency Tree
          </button>

          <button
            type="button"
            className={`btn btn-sm fs-12 d-flex align-items-center gap-2 ${
              activeView === 'user_journey'
                ? 'btn-info fw-bold text-dark shadow-sm'
                : 'btn-dark text-muted border-0'
            }`}
            onClick={() => {
              setActiveView('user_journey');
              setSelectedNodeId('uj-admission-form');
            }}
          >
            <i className="ti ti-git-fork"></i> User Journey State Machine
          </button>
        </div>

        {/* Right Actions */}
        <div className="d-flex align-items-center gap-2">
          {/* 2D / 3D Quick Toggle */}
          <button
            type="button"
            className={`btn btn-sm ${is3D ? 'btn-cyan text-dark fw-bold' : 'btn-outline-info'}`}
            onClick={() => setIs3D(!is3D)}
            title="Toggle 2D / 3D Mode"
          >
            <i className={`ti ti-${is3D ? 'cube' : 'layout-grid'} me-1`}></i>
            {is3D ? '3D Active' : '2D Active'}
          </button>

          {/* Toggle Inspector Button */}
          <button
            type="button"
            className={`btn btn-sm ${inspectorOpen ? 'btn-info text-dark' : 'btn-outline-secondary'}`}
            onClick={() => setInspectorOpen(!inspectorOpen)}
            title="Toggle Inspector Drawer"
          >
            <i className="ti ti-layout-sidebar-right"></i>
          </button>

          {/* User Profile Avatar */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold fs-12"
            style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' }}
            title="Logged in as Admin"
          >
            A
          </div>
        </div>
      </header>

      {/* MAIN BODY WORKSPACE */}
      <div className="flex-grow-1 position-relative overflow-hidden">
        {/* Left Controls Sidebar */}
        <GraphControlSidebar
          clusterFilter={clusterFilter}
          onClusterFilterChange={setClusterFilter}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          blastRadius={blastRadius}
          onBlastRadiusChange={setBlastRadius}
          is3D={is3D}
          onToggle3D={() => setIs3D(!is3D)}
          isPhysicsRunning={isPhysicsRunning}
          onTogglePhysics={() => setIsPhysicsRunning(!isPhysicsRunning)}
          onResetView={handleResetView}
          nodeCount={currentDataset.nodes.length}
          edgeCount={currentDataset.edges.length}
        />

        {/* Graph Canvas: 2D or 3D */}
        <div className="w-100 h-100">
          {is3D ? (
            <ArchitectureGraphCanvas3D
              nodes={currentDataset.nodes}
              edges={currentDataset.edges}
              selectedNodeId={selectedNodeId}
              onSelectNode={handleSelectNode}
              blastRadius={blastRadius}
              searchQuery={searchQuery}
              isPhysicsRunning={isPhysicsRunning}
              clusterFilter={clusterFilter}
            />
          ) : (
            <ArchitectureGraphCanvas2D
              nodes={currentDataset.nodes}
              edges={currentDataset.edges}
              selectedNodeId={selectedNodeId}
              onSelectNode={handleSelectNode}
              blastRadius={blastRadius}
              searchQuery={searchQuery}
              isPhysicsRunning={isPhysicsRunning}
              clusterFilter={clusterFilter}
            />
          )}
        </div>

        {/* Right Inspector Panel */}
        {inspectorOpen && (
          <GraphNodeInspector
            node={selectedNode}
            onClose={() => setInspectorOpen(false)}
            onSelectNode={handleSelectNode}
            onOpenDecouplingModal={() => setDecouplingModalOpen(true)}
          />
        )}
      </div>

      {/* Decoupling Blueprint Modal */}
      <DecouplingPlanModal
        node={selectedNode}
        isOpen={decouplingModalOpen}
        onClose={() => setDecouplingModalOpen(false)}
      />
    </div>
  );
};
