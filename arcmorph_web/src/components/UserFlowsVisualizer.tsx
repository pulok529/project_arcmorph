import React, { useState } from 'react';
import { Route, Users, Database, AlertCircle, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Navigation, Layers, ShieldAlert } from 'lucide-react';

interface WorkflowStep {
  stepNumber: number;
  action: string;
  component: string;
  dataAccessed: string[];
}

interface Precondition {
  prerequisite: string;
  requiredPage: string;
  reason: string;
}

interface UserFlow {
  flowId: string;
  name: string;
  subsystem: string;
  description: string;
  triggerEndpoint: string;
  actors: string[];
  postSubmitRoute: string;
  preconditions: Precondition[];
  steps: WorkflowStep[];
  touchedEntities: string[];
  relatedPage: string;
}

interface UserFlowsVisualizerProps {
  flows: UserFlow[];
  projectName: string;
}

export const UserFlowsVisualizer: React.FC<UserFlowsVisualizerProps> = ({ flows = [], projectName }) => {
  const [selectedFlowId, setSelectedFlowId] = useState<string>(flows[0]?.flowId || '');

  const selectedFlow = flows.find(f => f.flowId === selectedFlowId) || flows[0];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center">
            <Route size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Business User Flows & Journey Synthesizer</h5>
              <span className="badge bg-info text-white rounded-pill font-monospace fs-11">
                {flows.length} Multi-Step Flows
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              End-to-end user journeys deconstructing client actions, business layer validation, database commits, and pre-condition remediation.
            </p>
          </div>
        </div>
      </div>

      <div className="card-body p-0">
        <div className="row g-0">
          
          {/* Left: Flow List Selector */}
          <div className="col-lg-4 border-end p-3" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <div className="d-flex align-items-center justify-content-between mb-3 px-2 pb-2 border-bottom">
              <span className="fw-bold fs-12 text-muted text-uppercase font-monospace">
                🧭 User Journeys
              </span>
              <span className="badge bg-secondary-subtle text-secondary font-monospace fs-10">
                {flows.length} Flows
              </span>
            </div>

            <div className="vstack gap-2">
              {flows.map((flow) => {
                const isSelected = selectedFlow?.flowId === flow.flowId;
                return (
                  <div
                    key={flow.flowId}
                    onClick={() => setSelectedFlowId(flow.flowId)}
                    className={`p-3 rounded-3 cursor-pointer transition border ${
                      isSelected ? 'border-info bg-info-subtle shadow-sm' : 'border-light-subtle bg-white hover-bg-light'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <span className="badge bg-dark-subtle text-dark font-monospace fs-10">
                        {flow.subsystem}
                      </span>
                      <small className="text-muted fs-11 font-monospace">{flow.relatedPage}</small>
                    </div>
                    <h6 className={`fw-bold mb-1 fs-13 ${isSelected ? 'text-info-emphasis' : 'text-dark'}`}>
                      {flow.name}
                    </h6>
                    <p className="text-muted fs-12 mb-2 text-truncate" style={{ maxWidth: '280px' }}>
                      {flow.description}
                    </p>
                    <div className="d-flex align-items-center gap-1 text-muted fs-11">
                      <Users size={12} />
                      <span>{flow.actors.join(', ')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Flow Step-by-Step Timeline Visualizer */}
          <div className="col-lg-8 p-4">
            {selectedFlow ? (
              <div>
                
                {/* Title & Metadata */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-4 pb-3 border-bottom">
                  <div>
                    <span className="badge bg-info text-white font-monospace fs-10 mb-1">
                      {selectedFlow.subsystem} Module
                    </span>
                    <h5 className="fw-bold text-dark mb-1">{selectedFlow.name}</h5>
                    <p className="text-muted fs-13 mb-0">{selectedFlow.description}</p>
                  </div>
                  <div>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle font-monospace px-3 py-1.5 fs-11">
                      {selectedFlow.triggerEndpoint}
                    </span>
                  </div>
                </div>

                {/* Preconditions & Blocker Remediation Alert */}
                {selectedFlow.preconditions && selectedFlow.preconditions.length > 0 && (
                  <div className="alert alert-warning border-warning-subtle rounded-3 p-3 mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <ShieldAlert size={18} className="text-warning" />
                      <strong className="fs-13 text-dark">Pre-Conditions & Blocker Remediation:</strong>
                    </div>
                    <ul className="mb-0 fs-12 text-dark ps-3">
                      {selectedFlow.preconditions.map((p, idx) => (
                        <li key={idx} className="mb-1">
                          <strong>Missing "{p.prerequisite}":</strong> {p.reason} <br />
                          <span className="text-muted">👉 Remediation: Navigate first to </span>
                          <code className="bg-white px-1.5 py-0.5 rounded border text-primary font-monospace">{p.requiredPage}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Step-by-Step Flow Timeline */}
                <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                  <Navigation size={16} className="text-primary" />
                  Ordered Workflow Execution Steps ({selectedFlow.steps.length} Steps)
                </h6>

                <div className="position-relative ps-4 mb-4">
                  {/* Vertical Timeline Line */}
                  <div
                    className="position-absolute bg-primary-subtle"
                    style={{ left: '11px', top: '10px', bottom: '10px', width: '2px' }}
                  />

                  <div className="vstack gap-3">
                    {selectedFlow.steps.map((step) => (
                      <div key={step.stepNumber} className="position-relative">
                        {/* Circle Indicator */}
                        <div
                          className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fs-11 fw-bold"
                          style={{ left: '-29px', top: '2px', width: '22px', height: '22px' }}
                        >
                          {step.stepNumber}
                        </div>

                        <div className="card shadow-none border rounded-3 p-3 bg-white">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="badge bg-secondary-subtle text-secondary font-monospace fs-10">
                              {step.component}
                            </span>
                            <small className="text-muted fs-11">Step {step.stepNumber} of {selectedFlow.steps.length}</small>
                          </div>
                          <p className="text-dark fs-13 mb-2 fw-medium">{step.action}</p>
                          <div className="d-flex align-items-center gap-1.5 flex-wrap">
                            <span className="text-muted fs-11 font-monospace">Touched Entities:</span>
                            {step.dataAccessed.map((da, dIdx) => (
                              <span key={dIdx} className="badge bg-light text-dark border font-monospace fs-10">
                                {da}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Post-Submit Transition */}
                <div className="card bg-success-subtle border border-success-subtle rounded-3 p-3 d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={20} className="text-success" />
                    <div>
                      <strong className="fs-13 text-dark">Success State Transition</strong>
                      <div className="text-muted fs-12">Database committed atomically. Client transitions to:</div>
                    </div>
                  </div>
                  <span className="badge bg-success text-white font-monospace px-3 py-1.5 fs-11">
                    {selectedFlow.postSubmitRoute}
                  </span>
                </div>

              </div>
            ) : (
              <div className="text-center py-5 text-muted">
                <Route size={40} className="text-muted mb-2" />
                <h6>Select a user flow from the left menu to view execution steps.</h6>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
