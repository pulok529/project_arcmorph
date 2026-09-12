import React from 'react';
import { GraphNode } from '../../data/architectureTopologyData';

interface DecouplingPlanModalProps {
  node: GraphNode | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DecouplingPlanModal: React.FC<DecouplingPlanModalProps> = ({ node, isOpen, onClose }) => {
  if (!isOpen || !node) return null;

  const recipe = node.decouplingRecipe || {
    targetService: `${node.cluster.toLowerCase()}-service (:8080)`,
    apiContract: `POST /api/v1/${node.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}\nPayload: { id, timestamp, metadata }`,
    dbStrategy: 'Decouple relational dependencies using Outbox Pattern & CQRS events.',
    testCoverage: 'Generate Playwright automated test suite against staging API.'
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      node: node.name,
      cluster: node.cluster,
      decouplingPlan: recipe,
      upstreamCallers: node.upstream,
      downstreamDependencies: node.downstream,
      generatedAt: new Date().toISOString()
    }, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `decoupling_plan_${node.name.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
    dl.click();
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1050 }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border shadow-lg" style={{ backgroundColor: '#0b0f19', color: '#e2e8f0', borderColor: 'rgba(0, 242, 254, 0.4)' }}>
          <div className="modal-header border-bottom border-dark px-4 py-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <span className="badge p-2" style={{ background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid #00f2fe' }}>
                <i className="ti ti-scissors fs-16"></i>
              </span>
              <div>
                <h5 className="modal-title mb-0 fw-bold text-white">Microservice Decoupling Blueprint</h5>
                <small className="text-muted">Target Entity: <span className="text-info font-monospace">{node.name}</span></small>
              </div>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="p-3 rounded border border-dark bg-black">
                  <span className="text-muted fs-12 d-block mb-1">Target Microservice Destination</span>
                  <span className="fw-bold fs-14 text-success d-flex align-items-center gap-1">
                    <i className="ti ti-server"></i> {recipe.targetService}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 rounded border border-dark bg-black">
                  <span className="text-muted fs-12 d-block mb-1">Modernization Strategy</span>
                  <span className="fw-bold fs-14 text-info d-flex align-items-center gap-1">
                    <i className="ti ti-arrows-split"></i> Strangler Fig Pattern + Event Sourcing
                  </span>
                </div>
              </div>
            </div>

            {/* API Contract Draft */}
            <div className="mb-4">
              <label className="form-label fs-12 fw-bold text-uppercase text-muted d-flex align-items-center gap-1">
                <i className="ti ti-code"></i> Generated Modern API Contract
              </label>
              <pre className="p-3 rounded border border-dark bg-dark font-monospace fs-12 text-info mb-0" style={{ maxHeight: '160px', overflowY: 'auto' }}>
                {recipe.apiContract}
              </pre>
            </div>

            {/* Database Migration & Event Bus */}
            <div className="mb-4">
              <label className="form-label fs-12 fw-bold text-uppercase text-muted d-flex align-items-center gap-1">
                <i className="ti ti-database"></i> Database Isolation & Migration Strategy
              </label>
              <div className="p-3 rounded border border-dark bg-dark text-light fs-13">
                {recipe.dbStrategy}
              </div>
            </div>

            {/* Playwright Test Coverage */}
            <div>
              <label className="form-label fs-12 fw-bold text-uppercase text-muted d-flex align-items-center gap-1">
                <i className="ti ti-check-circle"></i> Verification & Automated Playwright Test Suite
              </label>
              <div className="p-3 rounded border border-dark bg-dark text-success fs-13 font-monospace">
                {recipe.testCoverage}
              </div>
            </div>
          </div>

          <div className="modal-footer border-top border-dark px-4 py-3 d-flex justify-content-between">
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onClose}>
              Close
            </button>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-info d-flex align-items-center gap-1"
                onClick={handleDownload}
              >
                <i className="ti ti-download"></i> Export Blueprint (JSON)
              </button>
              <button
                type="button"
                className="btn btn-sm fw-bold px-3 d-flex align-items-center gap-1 text-dark"
                style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)', border: 'none' }}
                onClick={() => {
                  alert(`Decoupling workflow dispatched to ArcMorph Multi-Agent Engine for ${node.name}!`);
                  onClose();
                }}
              >
                <i className="ti ti-player-play"></i> Dispatch to AI Refactoring Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
