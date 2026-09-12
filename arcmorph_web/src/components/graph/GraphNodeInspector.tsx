import React, { useState } from 'react';
import { GraphNode } from '../../data/architectureTopologyData';

interface GraphNodeInspectorProps {
  node: GraphNode | null;
  onClose: () => void;
  onSelectNode: (nodeId: string) => void;
  onOpenDecouplingModal: () => void;
}

export const GraphNodeInspector: React.FC<GraphNodeInspectorProps> = ({
  node,
  onClose,
  onSelectNode,
  onOpenDecouplingModal
}) => {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [codeOpen, setCodeOpen] = useState(false);

  if (!node) {
    return (
      <aside
        className="position-absolute end-0 top-0 bottom-0 border-start border-dark d-flex flex-column"
        style={{
          width: '340px',
          backgroundColor: 'rgba(11, 15, 25, 0.95)',
          backdropFilter: 'blur(12px)',
          zIndex: 30,
          boxShadow: '-4px 0 25px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="p-3 border-bottom border-dark d-flex align-items-center justify-content-between">
          <h6 className="mb-0 fw-bold text-white d-flex align-items-center gap-2">
            <i className="ti ti-info-circle text-info"></i> Inspector
          </h6>
          <button type="button" className="btn btn-sm btn-link text-muted p-0" onClick={onClose}>
            <i className="ti ti-x fs-16"></i>
          </button>
        </div>
        <div className="p-4 text-center text-muted my-auto">
          <i className="ti ti-hand-click fs-36 mb-2 d-block text-secondary opacity-50"></i>
          <p className="fs-13 mb-1 text-white">No node selected</p>
          <small className="fs-12 text-muted">Click any node on the graph to inspect properties, callers, dependencies & decoupling recipes.</small>
        </div>
      </aside>
    );
  }

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'Critical': return 'badge bg-danger-subtle text-danger border border-danger';
      case 'High': return 'badge bg-warning-subtle text-warning border border-warning';
      case 'Medium': return 'badge bg-info-subtle text-info border border-info';
      default: return 'badge bg-success-subtle text-success border border-success';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'table': return 'ti ti-database text-info';
      case 'form': return 'ti ti-file-code text-success';
      case 'gateway': return 'ti ti-api-app text-warning';
      case 'worker': return 'ti ti-cpu text-warning';
      case 'core': return 'ti ti-atom-2 text-danger';
      case 'state': return 'ti ti-git-fork text-primary';
      default: return 'ti ti-server text-info';
    }
  };

  return (
    <aside
      className="position-absolute end-0 top-0 bottom-0 border-start border-dark d-flex flex-column animate__animated animate__fadeInRight"
      style={{
        width: '350px',
        backgroundColor: 'rgba(11, 15, 25, 0.96)',
        backdropFilter: 'blur(16px)',
        zIndex: 30,
        boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.6)',
        overflowY: 'auto'
      }}
    >
      {/* Top Header */}
      <div className="p-3 border-bottom border-dark d-flex align-items-center justify-content-between sticky-top" style={{ backgroundColor: '#0b0f19' }}>
        <div className="d-flex align-items-center gap-2">
          <h6 className="mb-0 fw-bold text-white fs-14">Inspector</h6>
          <span className="badge bg-secondary-subtle text-light border border-secondary fs-10 text-uppercase">
            {node.cluster}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-link text-muted p-1 hover-light"
          onClick={onClose}
          title="Close Inspector"
        >
          <i className="ti ti-x fs-18"></i>
        </button>
      </div>

      {/* Accordion Container */}
      <div className="p-3 d-flex flex-column gap-3 flex-grow-1">
        {/* Main Details Section */}
        <div className="border border-dark rounded bg-black-subtle p-3">
          <div
            className="d-flex align-items-center justify-content-between cursor-pointer mb-2"
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            <span className="fw-bold fs-13 text-light d-flex align-items-center gap-1">
              <i className="ti ti-adjustments-horizontal text-cyan"></i> Details
            </span>
            <i className={`ti ti-chevron-${detailsOpen ? 'up' : 'down'} text-muted fs-14`}></i>
          </div>

          {detailsOpen && (
            <div className="mt-2 pt-2 border-top border-dark">
              {/* Name */}
              <div className="mb-3">
                <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-1">Name</span>
                <span className="fw-bold fs-14 text-white font-monospace text-break d-flex align-items-center gap-1">
                  <i className={getTypeIcon(node.type)}></i>
                  {node.name}
                </span>
                {node.file && (
                  <small className="text-muted fs-10 text-break d-block mt-1 font-monospace">
                    {node.file}
                  </small>
                )}
              </div>

              {/* Quick Metrics */}
              <div className="row g-2 mb-3 text-center">
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-10 d-block">Complexity</span>
                    <span className="fw-bold fs-12 text-info">{node.complexity}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-10 d-block">LOC</span>
                    <span className="fw-bold fs-12 text-light">{node.loc.toLocaleString()}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted fs-10 d-block">Risk</span>
                    <span className={`fs-10 fw-bold ${getRiskBadgeColor(node.risk)}`}>{node.risk}</span>
                  </div>
                </div>
              </div>

              {/* Upstream Caller Forms */}
              <div className="mb-3">
                <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-2 d-flex align-items-center justify-content-between">
                  <span>Upstream Caller Forms</span>
                  <span className="badge rounded-pill bg-dark text-cyan">{node.upstream.length}</span>
                </span>
                {node.upstream.length > 0 ? (
                  <div className="d-flex flex-column gap-1">
                    {node.upstream.map((caller, idx) => (
                      <button
                        key={`${caller.id}-${idx}`}
                        type="button"
                        className="btn btn-sm btn-dark text-start p-2 d-flex align-items-center justify-content-between text-truncate border border-dark hover-border-cyan"
                        onClick={() => onSelectNode(caller.id)}
                        title={`Focus on ${caller.name}`}
                      >
                        <span className="d-flex align-items-center gap-2 fs-12 text-light text-truncate font-monospace">
                          <i className={getTypeIcon(caller.type)}></i>
                          {caller.name}
                        </span>
                        <i className="ti ti-arrow-up-right text-cyan fs-12"></i>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-2 text-muted fs-11 text-center bg-dark rounded border border-dark">
                    Root / External Entry Point
                  </div>
                )}
              </div>

              {/* Downstream Dependencies */}
              <div className="mb-3">
                <span className="text-muted fs-11 text-uppercase fw-semibold d-block mb-2 d-flex align-items-center justify-content-between">
                  <span>Downstream Dependencies</span>
                  <span className="badge rounded-pill bg-dark text-info">{node.downstream.length}</span>
                </span>
                {node.downstream.length > 0 ? (
                  <div className="d-flex flex-column gap-1">
                    {node.downstream.map((dep, idx) => (
                      <button
                        key={`${dep.id}-${idx}`}
                        type="button"
                        className="btn btn-sm btn-dark text-start p-2 d-flex align-items-center justify-content-between text-truncate border border-dark hover-border-info"
                        onClick={() => onSelectNode(dep.id)}
                        title={`Focus on ${dep.name}`}
                      >
                        <span className="d-flex align-items-center gap-2 fs-12 text-light text-truncate font-monospace">
                          <i className={getTypeIcon(dep.type)}></i>
                          {dep.name}
                        </span>
                        <i className="ti ti-arrow-down-right text-info fs-12"></i>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-2 text-muted fs-11 text-center bg-dark rounded border border-dark">
                    Terminal Leaf Node
                  </div>
                )}
              </div>

              {/* Code Snippet Accordion */}
              {node.codeSnippet && (
                <div className="mb-3">
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer py-1 text-muted fs-11 text-uppercase fw-semibold"
                    onClick={() => setCodeOpen(!codeOpen)}
                  >
                    <span>Source Signature Preview</span>
                    <i className={`ti ti-chevron-${codeOpen ? 'up' : 'down'} fs-12`}></i>
                  </div>
                  {codeOpen && (
                    <pre className="p-2 rounded bg-dark border border-secondary font-monospace fs-11 text-info mt-1 mb-0" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                      {node.codeSnippet}
                    </pre>
                  )}
                </div>
              )}

              {/* Generate Decoupling Plan Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="btn w-100 fw-bold py-2 fs-13 d-flex align-items-center justify-content-center gap-2 shadow"
                  style={{
                    background: 'linear-gradient(135deg, #00f2fe 0%, #0575e6 100%)',
                    color: '#050811',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0, 242, 254, 0.35)'
                  }}
                  onClick={onOpenDecouplingModal}
                >
                  <i className="ti ti-sparkles fs-15"></i> Generate Decoupling Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
