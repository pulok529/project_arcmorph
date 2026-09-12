import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  DATASETS_MAP,
  FORM_DEPENDENCY_DATASET,
  ARCMORPH_PLATFORM_DATASET,
  PROJECT_TOPOLOGY_DATASETS,
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
  const projectId = id || 'proj_arcmorph_2026';

  // Project Selection: 'arcmorph' | 'bornomala'
  const [selectedProjectKey, setSelectedProjectKey] = useState<'arcmorph' | 'bornomala'>('arcmorph');
  const [projectMenuOpen, setProjectMenuOpen] = useState<boolean>(false);

  // Active View Tab: 'form_dependency' | 'database_erd' | 'user_journey'
  const [activeView, setActiveView] = useState<'form_dependency' | 'database_erd' | 'user_journey'>('form_dependency');

  // Selected Node
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('arcmorph-core');

  // Filter & Search
  const [clusterFilter, setClusterFilter] = useState<ClusterType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [blastRadius, setBlastRadius] = useState<number>(2);

  // View & Physics options
  const [is3D, setIs3D] = useState<boolean>(false);
  const [isPhysicsRunning, setIsPhysicsRunning] = useState<boolean>(true);
  const [inspectorOpen, setInspectorOpen] = useState<boolean>(true);
  const [decouplingModalOpen, setDecouplingModalOpen] = useState<boolean>(false);

  // Active dataset based on selected project and view tab
  const currentDataset = useMemo(() => {
    if (selectedProjectKey === 'arcmorph') {
      return ARCMORPH_PLATFORM_DATASET;
    }
    const projDatasets = PROJECT_TOPOLOGY_DATASETS[selectedProjectKey];
    if (projDatasets && projDatasets[activeView]) {
      return projDatasets[activeView];
    }
    return DATASETS_MAP[activeView] || FORM_DEPENDENCY_DATASET;
  }, [selectedProjectKey, activeView]);

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
    setSelectedNodeId(selectedProjectKey === 'arcmorph' ? 'arcmorph-core' : 'form-student-admission');
    setClusterFilter('All');
    setSearchQuery('');
    setBlastRadius(2);
    setIsPhysicsRunning(true);
  };

  const handleProjectSwitch = (key: 'arcmorph' | 'bornomala') => {
    setSelectedProjectKey(key);
    setSelectedNodeId(key === 'arcmorph' ? 'arcmorph-core' : 'form-student-admission');
    setClusterFilter('All');
    setProjectMenuOpen(false);
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
        {/* Left: Brand & Dynamic Project Selector */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="btn btn-sm btn-outline-dark text-light border-secondary d-flex align-items-center gap-1">
            <i className="ti ti-arrow-left"></i>
            <span className="d-none d-sm-inline">Dashboard</span>
          </Link>

          <div className="d-flex align-items-center gap-2">
            <img src="/assets/images/logo-sm.svg" alt="ArcMorph" style={{ height: '24px' }} />
            <span className="fw-bold fs-15 text-white tracking-wide">
              ArcMorph <span className="text-cyan fw-normal">Topology</span>
            </span>
          </div>

          {/* Dynamic Project Selector Dropdown */}
          <div className="position-relative">
            <button
              type="button"
              className="btn btn-sm btn-dark border-cyan text-cyan d-flex align-items-center gap-1.5 fs-12 font-monospace shadow-sm"
              onClick={() => setProjectMenuOpen(!projectMenuOpen)}
              title="Switch Target Analyzed Project"
            >
              <i className="ti ti-folder-check"></i>
              <span>{selectedProjectKey === 'arcmorph' ? 'ArcMorph Platform 2.0 (Active)' : 'Bornomala ERP (Legacy Monolith)'}</span>
              <i className="ti ti-chevron-down fs-10"></i>
            </button>

            {projectMenuOpen && (
              <div 
                className="dropdown-menu show shadow-lg border border-secondary p-1 fs-12 bg-dark rounded"
                style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 1050, minWidth: 280 }}
              >
                <div className="px-2 py-1 text-muted text-uppercase fs-10 fw-bold border-bottom border-secondary">
                  Target Analyzed Project
                </div>
                <button
                  type="button"
                  className={`dropdown-item py-2 px-2 rounded mb-1 text-light d-flex align-items-center justify-content-between ${selectedProjectKey === 'arcmorph' ? 'active bg-cyan text-dark fw-bold' : ''}`}
                  onClick={() => handleProjectSwitch('arcmorph')}
                >
                  <div>
                    <div className="fw-bold">ArcMorph Platform 2.0</div>
                    <small className={selectedProjectKey === 'arcmorph' ? 'text-dark opacity-75' : 'text-muted'}>Microservices, Qwen Orchestrator & Vault</small>
                  </div>
                  <span className="badge bg-success-subtle text-success fs-10">Active</span>
                </button>

                <button
                  type="button"
                  className={`dropdown-item py-2 px-2 rounded text-light d-flex align-items-center justify-content-between ${selectedProjectKey === 'bornomala' ? 'active bg-cyan text-dark fw-bold' : ''}`}
                  onClick={() => handleProjectSwitch('bornomala')}
                >
                  <div>
                    <div className="fw-bold">Bornomala Monolith ERP</div>
                    <small className={selectedProjectKey === 'bornomala' ? 'text-dark opacity-75' : 'text-muted'}>ASP.NET WebForms & MSSQL Monolith</small>
                  </div>
                  <span className="badge bg-warning-subtle text-warning fs-10">Legacy</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Center: Perspective Tabs */}
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
              if (selectedProjectKey === 'bornomala') setSelectedNodeId('tbl-student-erd');
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
              if (selectedProjectKey === 'bornomala') setSelectedNodeId('form-student-admission');
            }}
          >
            <i className="ti ti-binary-tree"></i> System Dependencies
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
              if (selectedProjectKey === 'bornomala') setSelectedNodeId('uj-admission-form');
            }}
          >
            <i className="ti ti-git-fork"></i> Journey State Machine
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
            className="rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold fs-12 border border-cyan"
            style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' }}
            title="Logged in as SuperAdmin"
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

export default ArchitectureGraphPage;
