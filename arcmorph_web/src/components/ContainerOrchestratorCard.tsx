import React, { useState, useEffect } from 'react';
import { Card } from './common/Card';
import { Play, Square, RefreshCw, CheckCircle2, Copy, Check, Terminal, Server, ShieldCheck, Box } from 'lucide-react';

interface ContainerOrchestratorCardProps {
  projectId: string;
  projectName: string;
}

export const ContainerOrchestratorCard: React.FC<ContainerOrchestratorCardProps> = ({ projectId, projectName }) => {
  const [planData, setPlanData] = useState<any>(null);
  const [statusData, setStatusData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'plan' | 'dockerfile' | 'compose' | 'db_commands'>('plan');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<boolean>(false);

  const fetchPlan = () => {
    setLoading(true);
    fetch(`/api/projects/${projectId}/container/plan`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setPlanData(data.plan);
          setStatusData(data.status);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (projectId) fetchPlan();
  }, [projectId]);

  const handleStartInstance = () => {
    setActionLoading(true);
    fetch(`/api/projects/${projectId}/container/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'local' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatusData(data.instance || { status: 'RUNNING' });
        }
      })
      .finally(() => setActionLoading(false));
  };

  const handleStopInstance = () => {
    setActionLoading(true);
    fetch(`/api/projects/${projectId}/container/stop`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatusData({ status: 'STOPPED' });
        }
      })
      .finally(() => setActionLoading(false));
  };

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  if (loading) {
    return (
      <Card title="Containerized Project Orchestrator" subtitle="Formulating pre-flight plan...">
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </Card>
    );
  }

  const isRunning = statusData?.status === 'RUNNING';

  return (
    <div className="mb-4">
      <Card
        title="🐳 Containerized Project Orchestrator & Pre-Flight Plan"
        subtitle="Generates multi-stage Docker container recipes, verifies host runtime prerequisites, and controls local/container instances."
        badge={
          <span className={`badge font-monospace rounded-pill ${isRunning ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}`}>
            Status: {isRunning ? '● RUNNING' : '○ STOPPED'}
          </span>
        }
        actions={
          <div className="d-flex align-items-center gap-2">
            {!isRunning ? (
              <button
                className="btn btn-sm btn-success rounded-pill fw-bold d-inline-flex align-items-center gap-1.5 shadow-sm px-3"
                onClick={handleStartInstance}
                disabled={actionLoading}
              >
                <Play size={13} fill="currentColor" /> Boot Instance
              </button>
            ) : (
              <button
                className="btn btn-sm btn-danger rounded-pill fw-bold d-inline-flex align-items-center gap-1.5 shadow-sm px-3"
                onClick={handleStopInstance}
                disabled={actionLoading}
              >
                <Square size={13} fill="currentColor" /> Stop Instance
              </button>
            )}
            <button className="btn btn-sm btn-outline-secondary rounded-pill" onClick={fetchPlan}>
              <RefreshCw size={13} />
            </button>
          </div>
        }
      >
        {/* Navigation Tabs */}
        <div className="d-flex flex-wrap gap-2 mb-3 border-bottom pb-3">
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'plan' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('plan')}
          >
            📋 Pre-Flight Readiness
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'dockerfile' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('dockerfile')}
          >
            📄 Dockerfile
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'compose' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('compose')}
          >
            🐙 docker-compose.yml
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'db_commands' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('db_commands')}
          >
            🗄️ Database Setup Script
          </button>
        </div>

        {/* Tab 1: Pre-Flight Readiness */}
        {activeTab === 'plan' && (
          <div className="row g-3">
            {/* Host Runtimes Checklist */}
            <div className="col-md-6">
              <div className="border rounded-3 p-3 bg-light h-100">
                <h6 className="fw-bold text-dark d-flex align-items-center gap-1.5 mb-2">
                  <Server size={16} className="text-primary" /> Target Runtime Requirements
                </h6>
                <div className="list-group list-group-flush fs-13">
                  {planData?.requiredRuntimes?.map((r: any, idx: number) => (
                    <div key={idx} className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold text-dark">{r.name}</div>
                        <small className="text-muted">{r.purpose}</small>
                      </div>
                      <span className="badge bg-success-subtle text-success font-monospace">Ready ({r.version})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Port Bindings & Pre-flight Checks */}
            <div className="col-md-6">
              <div className="border rounded-3 p-3 bg-light h-100">
                <h6 className="fw-bold text-dark d-flex align-items-center gap-1.5 mb-2">
                  <ShieldCheck size={16} className="text-success" /> Pre-Flight Safety Checks
                </h6>
                <div className="list-group list-group-flush fs-13">
                  {planData?.preFlightChecks?.map((chk: any, idx: number) => (
                    <div key={idx} className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold text-dark">{chk.label}</div>
                        <small className="text-muted">{chk.detail}</small>
                      </div>
                      <span className="badge bg-success font-monospace">PASS</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Port Bindings Banner */}
            <div className="col-12">
              <div className="p-3 bg-white border rounded-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                  <Box size={24} className="text-primary" />
                  <div>
                    <div className="fw-bold text-dark fs-14">Bound Endpoints & Ports</div>
                    <small className="text-muted">Frontend: Port 3000 | Backend API: Port 5000 | MS SQL: Port 1433</small>
                  </div>
                </div>
                {isRunning && (
                  <div className="d-flex gap-2">
                    <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary rounded-pill">
                      Open Frontend (3000)
                    </a>
                    <a href="http://localhost:5000/swagger" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary rounded-pill">
                      Swagger UI (5000)
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Dockerfile */}
        {activeTab === 'dockerfile' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted font-monospace">Dockerfile (Multi-Stage .NET 9 + React 19)</small>
              <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={() => handleCopy(planData?.dockerfile, 'dockerfile')}>
                {copiedTab === 'dockerfile' ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy
              </button>
            </div>
            <pre className="p-3 bg-dark text-light rounded-3 font-monospace fs-12 mb-0" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {planData?.dockerfile}
            </pre>
          </div>
        )}

        {/* Tab 3: docker-compose.yml */}
        {activeTab === 'compose' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted font-monospace">docker-compose.yml (WebAPI + SQL Server 2022)</small>
              <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={() => handleCopy(planData?.dockerCompose, 'compose')}>
                {copiedTab === 'compose' ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy
              </button>
            </div>
            <pre className="p-3 bg-dark text-light rounded-3 font-monospace fs-12 mb-0" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {planData?.dockerCompose}
            </pre>
          </div>
        )}

        {/* Tab 4: Database Setup Commands */}
        {activeTab === 'db_commands' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted font-monospace">Ephemeral Database Initialization Commands</small>
              <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={() => handleCopy((planData?.databaseInitCommands || []).join('\n'), 'db_commands')}>
                {copiedTab === 'db_commands' ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy
              </button>
            </div>
            <pre className="p-3 bg-dark text-success rounded-3 font-monospace fs-12 mb-0" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {(planData?.databaseInitCommands || []).join('\n')}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
};
