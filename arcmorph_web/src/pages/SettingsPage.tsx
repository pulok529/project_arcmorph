import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useModels, ModelEntity } from '../context/ModelContext';
import { useSessionLock } from '../context/SessionLockContext';
import { useTheme } from '../context/ThemeContext';
import Swal from 'sweetalert2';

export const SettingsPage: React.FC = () => {
  const { toggleCustomizer } = useTheme();
  const { models, activeModelId, setActiveModelId, addModel, removeModel, toggleModelStatus } = useModels();
  const { lockTimeoutMinutes, setLockTimeoutMinutes, pin, updatePin, clientIp } = useSessionLock();

  const [showAddModelModal, setShowAddModelModal] = useState(false);
  const [newModelName, setNewModelName] = useState('');
  const [newModelEndpoint, setNewModelEndpoint] = useState('http://localhost:11434/v1');
  const [newModelType, setNewModelType] = useState<'local' | 'cloud' | 'mcp'>('local');
  const [newModelContext, setNewModelContext] = useState('32k');
  const [newModelVram, setNewModelVram] = useState('4.2 GB');

  const [testPinInput, setTestPinInput] = useState('');
  const [newPinInput, setNewPinInput] = useState('');

  const handleAddModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModelName.trim()) {
      Swal.fire('Model Name Required', 'Please enter a name for the model.', 'warning');
      return;
    }

    addModel({
      name: newModelName.trim(),
      type: newModelType,
      status: 'online',
      contextWindow: newModelContext,
      vram: newModelVram,
      latency: '~25ms',
      endpoint: newModelEndpoint
    });

    Swal.fire({
      title: 'Model Registered',
      text: `${newModelName} added to active intelligence registry.`,
      icon: 'success',
      confirmButtonColor: '#00f2fe',
      background: '#0b0f19',
      color: '#f8fafc'
    });

    setShowAddModelModal(false);
    setNewModelName('');
  };

  const handleLaunchCustomizer = () => {
    toggleCustomizer();
  };

  const handleUpdatePin = () => {
    if (newPinInput.length < 4) {
      Swal.fire('Invalid PIN', 'PIN must be at least 4 digits.', 'warning');
      return;
    }
    updatePin(newPinInput);
    Swal.fire({
      title: 'PIN Updated',
      text: 'New lock screen security PIN configured.',
      icon: 'success',
      confirmButtonColor: '#00f2fe',
      background: '#0b0f19',
      color: '#f8fafc'
    });
    setNewPinInput('');
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="System, Models & Security Settings" category="Administration" />

      <div className="module-content-body">
        {/* Top Quick Actions Card */}
        <div className="card mb-4 border-dark">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div>
              <h6 className="mb-0 fw-bold text-white">Central Operational Settings</h6>
              <small className="text-muted">
                Manage local and cloud AI inference endpoints, Paces visual styles, and security lockouts.
              </small>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-dark border-cyan text-cyan d-flex align-items-center gap-1.5"
                onClick={handleLaunchCustomizer}
              >
                <i className="ti ti-palette"></i> Launch Paces Customizer
              </button>
              <button
                type="button"
                className="btn btn-gradient-cyan btn-sm fw-bold d-flex align-items-center gap-1.5"
                onClick={() => setShowAddModelModal(true)}
              >
                <i className="ti ti-plus"></i> Add AI Model Endpoint
              </button>
            </div>
          </div>
        </div>

        {/* Model Management Hub */}
        <div className="card mb-4 border-dark">
          <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
            <div className="d-flex align-items-center gap-2">
              <i className="ti ti-cpu text-cyan fs-18"></i>
              <h6 className="card-title mb-0 text-white fw-bold">Intelligence & Local Model Registry</h6>
            </div>
            <span className="badge bg-dark text-info border border-secondary fs-11">
              Active Orchestrator: {models.find((m: ModelEntity) => m.id === activeModelId)?.name || 'Default'}
            </span>
          </div>

          <div className="card-body p-0 table-responsive">
            <table className="table table-hover table-dark mb-0 align-middle fs-13">
              <thead>
                <tr className="text-muted text-uppercase fs-11 border-bottom border-secondary">
                  <th className="ps-3">Model Name / Architecture</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Context Window</th>
                  <th>VRAM / Memory</th>
                  <th>Inference Latency</th>
                  <th className="text-end pe-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m: ModelEntity) => {
                  const isActive = m.id === activeModelId;
                  return (
                    <tr key={m.id} className="border-bottom border-dark">
                      <td className="ps-3">
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className={`rounded p-1.5 ${isActive ? 'bg-cyan-subtle text-cyan' : 'bg-dark text-muted'} border border-secondary`}
                          >
                            <i className="ti ti-brain fs-16"></i>
                          </div>
                          <div>
                            <div className="fw-bold text-white d-flex align-items-center gap-1.5">
                              {m.name}
                              {isActive && (
                                <span className="badge bg-cyan text-dark fs-10 fw-bold">ORCHESTRATOR</span>
                              )}
                            </div>
                            <small className="text-muted font-monospace">{m.endpoint || 'Local Ollama IPC'}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        {(() => {
                          const mType = m.type || m.provider || 'local';
                          const mStatus = m.status || (m.isOnline ? 'online' : 'offline');
                          const mContext = m.contextWindow || m.contextLength || '32k';
                          const mLatency = m.latency || m.speedRating || '~30ms';
                          const mVram = m.vram || '4.2 GB';
                          return (
                            <>
                              <span className={`badge ${mType === 'local' ? 'bg-info-subtle text-info border border-info-subtle' : mType === 'cloud' ? 'bg-warning-subtle text-warning border border-warning-subtle' : 'bg-secondary text-light'} fs-11`}>
                                {mType.toUpperCase()}
                              </span>
                            </>
                          );
                        })()}
                      </td>
                      <td>
                        {(() => {
                          const mStatus = m.status || (m.isOnline ? 'online' : 'offline');
                          return (
                            <span
                              className={`badge ${mStatus === 'online' ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger'} cursor-pointer`}
                              onClick={() => toggleModelStatus(m.id)}
                              title="Click to toggle status"
                            >
                              <i className={`ti ${mStatus === 'online' ? 'ti-circle-check' : 'ti-circle-x'} me-1`}></i>
                              {mStatus.toUpperCase()}
                            </span>
                          );
                        })()}
                      </td>
                      <td className="font-monospace text-light">{m.contextWindow || m.contextLength || '32k'}</td>
                      <td className="font-monospace text-light">{m.vram || '4.2 GB'}</td>
                      <td className="font-monospace text-success">{m.latency || m.speedRating || '~25ms'}</td>
                      <td className="text-end pe-3">
                        <div className="d-inline-flex gap-1">
                          {!isActive && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-cyan fs-11"
                              onClick={() => setActiveModelId(m.id)}
                            >
                              Set Orchestrator
                            </button>
                          )}
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger fs-11"
                            onClick={() => removeModel(m.id)}
                            title="Remove Model"
                          >
                            <i className="ti ti-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Lock Screen Settings */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-dark">
              <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-lock text-cyan fs-18"></i>
                  <h6 className="card-title mb-0 text-white fw-bold">Inactivity Lockout Watchdog</h6>
                </div>
                <span className="badge bg-dark text-cyan border border-cyan-subtle fs-10">Real-Time Daemon</span>
              </div>
              <div className="card-body p-4">
                <p className="fs-13 text-muted mb-3">
                  When idle, ArcMorph activates the Cybernetic Lock Screen to prevent unauthorized terminal inputs while preserving background subagents.
                </p>

                <div className="mb-4">
                  <label className="form-label fs-12 text-uppercase text-light fw-bold">Inactivity Timeout Duration</label>
                  <select
                    className="form-select bg-dark border-secondary text-light fs-13"
                    value={lockTimeoutMinutes}
                    onChange={(e) => setLockTimeoutMinutes(Number(e.target.value))}
                  >
                    <option value={3}>3 Minutes (Default Security)</option>
                    <option value={5}>5 Minutes</option>
                    <option value={10}>10 Minutes</option>
                    <option value={15}>15 Minutes</option>
                    <option value={0}>Disabled (Never Lock)</option>
                  </select>
                </div>

                <div className="p-3 rounded bg-dark border border-secondary d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-muted fs-11 d-block text-uppercase">Client Machine Address</span>
                    <strong className="text-cyan font-monospace fs-14">{clientIp}</strong>
                  </div>
                  <span className="badge bg-success-subtle text-success border border-success-subtle fs-11">
                    <i className="ti ti-wifi me-1"></i> Authorized Local Loopback
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 border-dark">
              <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-key text-warning fs-18"></i>
                  <h6 className="card-title mb-0 text-white fw-bold">Lock Screen PIN Code</h6>
                </div>
                <span className="badge bg-warning-subtle text-warning fs-10">Master PIN: {pin}</span>
              </div>
              <div className="card-body p-4">
                <p className="fs-13 text-muted mb-3">
                  Quick unlock PIN used on the Cybernetic Lock Screen dialpad (Default: <code className="text-cyan">1234</code>).
                </p>

                <div className="mb-3">
                  <label className="form-label fs-12 text-uppercase text-light fw-bold">Configure New PIN (4-6 Digits)</label>
                  <div className="input-group">
                    <input
                      type="password"
                      maxLength={6}
                      className="form-control bg-dark border-secondary text-light fs-14 font-monospace"
                      placeholder="Enter new 4-6 digit PIN"
                      value={newPinInput}
                      onChange={(e) => setNewPinInput(e.target.value.replace(/\D/g, ''))}
                    />
                    <button
                      type="button"
                      className="btn btn-gradient-cyan fw-bold fs-13"
                      onClick={handleUpdatePin}
                    >
                      Update PIN
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded bg-dark border border-secondary">
                  <small className="text-muted d-block mb-1">
                    <i className="ti ti-info-circle text-info me-1"></i> Continuous Execution Guarantee:
                  </small>
                  <small className="text-light fs-12">
                    Locking the screen or backgrounding the tab will <strong>never</strong> interrupt or terminate active subagents, OCR pipelines, or decompilation workers.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Model Modal */}
      {showAddModelModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-cpu text-cyan"></i> Register AI Model Endpoint
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowAddModelModal(false)}></button>
              </div>
              <form onSubmit={handleAddModel}>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    <label className="form-label fs-12 text-uppercase text-light fw-bold">Model Identifier / Name</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light fs-13"
                      placeholder="e.g. llama-3.3-70b-instruct or mistral-large"
                      value={newModelName}
                      onChange={e => setNewModelName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-12 text-uppercase text-light fw-bold">Category</label>
                    <select
                      className="form-select bg-dark border-secondary text-light fs-13"
                      value={newModelType}
                      onChange={e => setNewModelType(e.target.value as any)}
                    >
                      <option value="local">Local Model (Ollama / vLLM / GGUF)</option>
                      <option value="cloud">Cloud API (Claude / OpenAI / DeepSeek)</option>
                      <option value="mcp">MCP Agent Protocol Endpoint</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-12 text-uppercase text-light fw-bold">API Endpoint / Socket</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light fs-13 font-monospace"
                      value={newModelEndpoint}
                      onChange={e => setNewModelEndpoint(e.target.value)}
                    />
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">Context Window</label>
                      <input
                        type="text"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        value={newModelContext}
                        onChange={e => setNewModelContext(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label fs-12 text-uppercase text-light fw-bold">VRAM Footprint</label>
                      <input
                        type="text"
                        className="form-control bg-dark border-secondary text-light fs-13"
                        value={newModelVram}
                        onChange={e => setNewModelVram(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowAddModelModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gradient-cyan btn-sm fw-bold">
                    Add to Registry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
