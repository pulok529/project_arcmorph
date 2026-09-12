import React from 'react';
import { ClusterType } from '../../data/architectureTopologyData';

interface GraphControlSidebarProps {
  clusterFilter: ClusterType;
  onClusterFilterChange: (cluster: ClusterType) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  blastRadius: number;
  onBlastRadiusChange: (radius: number) => void;
  is3D: boolean;
  onToggle3D: () => void;
  isPhysicsRunning: boolean;
  onTogglePhysics: () => void;
  onResetView: () => void;
  nodeCount: number;
  edgeCount: number;
}

export const GraphControlSidebar: React.FC<GraphControlSidebarProps> = ({
  clusterFilter,
  onClusterFilterChange,
  searchQuery,
  onSearchQueryChange,
  blastRadius,
  onBlastRadiusChange,
  is3D,
  onToggle3D,
  isPhysicsRunning,
  onTogglePhysics,
  onResetView,
  nodeCount,
  edgeCount
}) => {
  const clusters: ClusterType[] = [
    'All',
    'Academic',
    'Accounts',
    'Attendance',
    'Examination',
    'HRM',
    'Database',
    'Infrastructure',
    'Core'
  ];

  return (
    <div
      className="position-absolute start-0 top-0 bottom-0 border-end border-dark d-flex flex-column p-3"
      style={{
        width: '280px',
        backgroundColor: 'rgba(11, 15, 25, 0.94)',
        backdropFilter: 'blur(16px)',
        zIndex: 20,
        boxShadow: '4px 0 25px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-dark">
        <div>
          <h6 className="mb-0 fw-bold text-white d-flex align-items-center gap-2">
            <i className="ti ti-chart-dots-3 text-cyan"></i> Graph Controls
          </h6>
          <small className="text-muted fs-11">
            {nodeCount} Nodes • {edgeCount} Edges
          </small>
        </div>
        <div className="dropdown">
          <button className="btn btn-sm btn-link text-muted p-0" type="button">
            <i className="ti ti-dots-vertical fs-16"></i>
          </button>
        </div>
      </div>

      <div className="d-flex flex-column gap-3 flex-grow-1 overflow-y-auto">
        {/* 2D / 3D Switcher Toggle Card */}
        <div className="p-2 rounded border border-dark bg-black-subtle">
          <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-2">Rendering Mode</span>
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              className={`btn btn-sm ${!is3D ? 'btn-info fw-bold text-dark' : 'btn-dark text-muted border-dark'}`}
              onClick={() => is3D && onToggle3D()}
            >
              <i className="ti ti-layout-grid me-1"></i> 2D Canvas
            </button>
            <button
              type="button"
              className={`btn btn-sm ${is3D ? 'btn-info fw-bold text-dark' : 'btn-dark text-muted border-dark'}`}
              onClick={() => !is3D && onToggle3D()}
            >
              <i className="ti ti-cube me-1"></i> 3D Galaxy
            </button>
          </div>
        </div>

        {/* Cluster Filter */}
        <div>
          <label className="form-label text-muted fs-11 text-uppercase fw-semibold mb-1">
            Cluster Filter
          </label>
          <select
            className="form-select form-select-sm bg-dark text-light border-secondary fs-12"
            value={clusterFilter}
            onChange={(e) => onClusterFilterChange(e.target.value as ClusterType)}
          >
            {clusters.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All Clusters (Full Monolith)' : `${c} Domain`}
              </option>
            ))}
          </select>
        </div>

        {/* Node Search */}
        <div>
          <label className="form-label text-muted fs-11 text-uppercase fw-semibold mb-1">
            Node Search
          </label>
          <div className="input-group input-group-sm">
            <span className="input-group-text bg-dark border-secondary text-muted">
              <i className="ti ti-search fs-12"></i>
            </span>
            <input
              type="text"
              className="form-control bg-dark border-secondary text-light fs-12"
              placeholder="Search Node..."
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="btn btn-dark border-secondary text-muted"
                onClick={() => onSearchQueryChange('')}
              >
                <i className="ti ti-x fs-10"></i>
              </button>
            )}
          </div>
        </div>

        {/* Blast Radius Sensitivity Slider */}
        <div className="p-3 rounded border border-dark bg-black-subtle">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-muted fs-11 text-uppercase fw-semibold">Blast Radius Sensitivity</span>
            <span className="badge rounded-pill bg-info text-dark font-monospace fw-bold fs-11">
              Hop {blastRadius}
            </span>
          </div>
          <input
            type="range"
            className="form-range"
            min="1"
            max="5"
            step="1"
            value={blastRadius}
            onChange={(e) => onBlastRadiusChange(Number(e.target.value))}
            style={{ accentColor: '#00f2fe' }}
          />
          <div className="d-flex justify-content-between text-muted fs-10 mt-1 font-monospace">
            <span>Direct (1)</span>
            <span>Broad (3)</span>
            <span>Systemic (5)</span>
          </div>
        </div>

        {/* Simulation Physics Controls */}
        <div className="p-3 rounded border border-dark bg-black-subtle">
          <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-2">Simulation Physics</span>
          <div className="d-flex gap-2">
            <button
              type="button"
              className={`btn btn-sm flex-grow-1 ${isPhysicsRunning ? 'btn-outline-warning' : 'btn-outline-success'}`}
              onClick={onTogglePhysics}
            >
              <i className={`ti ti-${isPhysicsRunning ? 'player-pause' : 'player-play'} me-1`}></i>
              {isPhysicsRunning ? 'Pause Physics' : 'Resume Physics'}
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={onResetView}
              title="Reset View"
            >
              <i className="ti ti-refresh"></i>
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-auto pt-3 border-top border-dark">
          <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-2">Node Type Legend</span>
          <div className="d-flex flex-column gap-1 fs-11">
            <div className="d-flex align-items-center gap-2 text-light">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#ef4444', boxShadow: '0 0 6px #ef4444' }}></span>
              <span>Monolith Core System</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-light">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#00f2fe', boxShadow: '0 0 6px #00f2fe' }}></span>
              <span>Backend Service</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-light">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#10b981', boxShadow: '0 0 6px #10b981' }}></span>
              <span>ASPX Web Form</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-light">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#3b82f6', boxShadow: '0 0 6px #3b82f6' }}></span>
              <span>SQL Database Table</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-light">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#f59e0b', boxShadow: '0 0 6px #f59e0b' }}></span>
              <span>Worker / Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
