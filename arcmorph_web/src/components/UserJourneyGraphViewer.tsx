import React, { useState, useEffect } from 'react';
import { Card } from './common/Card';
import { MermaidViewer } from './common/MermaidViewer';
import { GitFork, ArrowRight, CheckCircle, FileText, Layers, Printer, Shield, Copy, Check } from 'lucide-react';

interface UserJourneyGraphViewerProps {
  projectId: string;
  projectName: string;
}

export const UserJourneyGraphViewer: React.FC<UserJourneyGraphViewerProps> = ({ projectId, projectName }) => {
  const [journey, setJourney] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!projectId) return;
    setLoading(true);
    fetch(`/api/projects/${projectId}/user-journey-graph`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setJourney(data.journey);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [projectId]);

  const handleCopyMermaid = () => {
    if (!journey?.mermaidGraph) return;
    navigator.clipboard.writeText(journey.mermaidGraph);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <Card title="Visual User Journey Flowcharts" subtitle="Building multi-path workflow graph...">
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </Card>
    );
  }

  const nodes = journey?.nodes || [];
  const edges = journey?.edges || [];

  return (
    <div className="mb-4">
      <Card
        title="🗺️ Visual User Journey & Multi-Path Navigation Flowchart"
        subtitle="Deconstructs application user flows from authentication through data entry to report generation."
        badge={<span className="badge bg-primary rounded-pill font-monospace">{nodes.length} Nodes • {edges.length} Transitions</span>}
        actions={
          <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={handleCopyMermaid}>
            {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy Mermaid Chart
          </button>
        }
      >
        {/* Critical E2E Workflow Pipeline */}
        <div className="p-3 bg-light rounded-3 border mb-4">
          <small className="text-uppercase text-muted fw-bold fs-11 d-block mb-2">⭐ Primary End-to-End Business Pipeline</small>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-dark">
              <span>🔐 Authentication</span>
            </div>
            <ArrowRight size={14} className="text-primary" />
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-dark">
              <span>📊 Dashboard</span>
            </div>
            <ArrowRight size={14} className="text-primary" />
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-primary">
              <span>🎓 Student Admission</span>
            </div>
            <ArrowRight size={14} className="text-primary" />
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-success">
              <span>💳 Fee Collection</span>
            </div>
            <ArrowRight size={14} className="text-primary" />
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-info">
              <span>📝 Marks Entry</span>
            </div>
            <ArrowRight size={14} className="text-primary" />
            <div className="p-2 px-3 bg-white border rounded-pill shadow-sm d-flex align-items-center gap-1.5 fs-12 fw-semibold text-warning">
              <span>📄 QuestPDF Reports</span>
            </div>
          </div>
        </div>

        {/* Node & Transition Flow Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-5">
            <h6 className="fw-bold text-dark fs-13 mb-2">Workflow Navigation Nodes</h6>
            <div className="list-group list-group-flush border rounded-3 overflow-hidden" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {nodes.map((node: any, idx: number) => (
                <div key={idx} className="list-group-item d-flex justify-content-between align-items-center p-2.5">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-light text-primary border rounded-circle p-1.5">
                      <FileText size={14} />
                    </span>
                    <div>
                      <div className="fw-semibold text-dark fs-13">{node.label}</div>
                      <small className="text-muted font-monospace">{node.route}</small>
                    </div>
                  </div>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill font-monospace fs-11">
                    {node.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-7">
            <h6 className="fw-bold text-dark fs-13 mb-2">Visual Navigation Graph</h6>
            {journey?.mermaidGraph && (
              <MermaidViewer
                chart={journey.mermaidGraph}
                title="Application Journey Flowchart"
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
