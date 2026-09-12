import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp, FileCode, Database, FileText, Bot, Archive, Check } from 'lucide-react';

interface DownloadCenterProps {
  projectId: string;
  projectName: string;
  zipAvailable: boolean;
  blueprints?: any;
  reports?: any[];
  dbSchema?: any;
}

export const DownloadCenter: React.FC<DownloadCenterProps> = ({
  projectId,
  projectName,
  zipAvailable,
  blueprints,
  reports = [],
  dbSchema
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const downloadMasterZip = () => {
    window.open(`/api/projects/${projectId}/download/zip`, '_blank');
  };

  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const artifacts = [
    {
      name: 'SYSTEM_TOPOLOGY_BLUEPRINT.md',
      desc: 'System topology, visual ASCII diagrams & sitemaps',
      type: 'Architecture Blueprint',
      icon: <FileText size={18} className="text-primary" />,
      content: blueprints?.topologyMd || `# System Architecture Blueprint - ${projectName}\n`
    },
    {
      name: 'AGENT_GUIDE.md',
      desc: 'Coding guidelines & execution context for Antigravity / Claude',
      type: 'Agent Instructions',
      icon: <Bot size={18} className="text-success" />,
      content: blueprints?.agentGuideMd || `# Agent Execution Guide - ${projectName}\n`
    },
    {
      name: 'AppDbContext.cs',
      desc: 'MS SQL Server 2022 / PostgreSQL EF Core 9 DbContext',
      type: 'Entity Framework Core 9',
      icon: <Database size={18} className="text-info" />,
      content: dbSchema?.dbContextCode || `// EF Core 9 DbContext for ${projectName}\n`
    },
    ...reports.map((r) => ({
      name: `${r.schema?.documentClassName || 'Report'}.cs`,
      desc: `100% C# QuestPDF Document class (replaces ${r.rptFileName || 'legacy .rpt'})`,
      type: 'QuestPDF Engine',
      icon: <FileCode size={18} className="text-warning" />,
      content: r.csharpCode || `// QuestPDF Document for ${r.rptFileName}\n`
    })),
    ...(blueprints?.antigravityPrompts || []).map((p: any) => ({
      name: p.fileName,
      desc: `Autonomous local build execution step (${p.fileName})`,
      type: 'AI Execution Script',
      icon: <Bot size={18} className="text-primary" />,
      content: p.content
    }))
  ];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header Banner */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
            <Archive size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Generated Migration Artifacts Hub</h5>
              <span className="badge bg-success-subtle text-success rounded-pill font-monospace fs-11">
                ✓ 100% Ready
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Download individual modernized code/blueprint files or export the complete Master ZIP archive.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            onClick={downloadMasterZip}
            className="btn btn-primary btn-md px-4 rounded-pill fw-bold shadow-sm d-flex align-items-center gap-2"
          >
            <Download size={16} />
            <span>Download Master ZIP (1-Click)</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-outline-secondary btn-icon rounded-circle"
            title={isOpen ? 'Collapse Artifacts' : 'Expand Artifacts'}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Artifacts Table */}
      {isOpen && (
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-4 fs-12 text-uppercase text-muted">Artifact Name</th>
                  <th className="fs-12 text-uppercase text-muted">Category</th>
                  <th className="fs-12 text-uppercase text-muted">Description</th>
                  <th className="text-end pe-4 fs-12 text-uppercase text-muted">Action</th>
                </tr>
              </thead>
              <tbody>
                {artifacts.map((art, idx) => (
                  <tr key={idx}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-2">
                        {art.icon}
                        <span className="font-monospace fw-bold fs-13 text-dark">{art.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light text-dark border fs-11">{art.type}</span>
                    </td>
                    <td>
                      <span className="text-muted fs-13">{art.desc}</span>
                    </td>
                    <td className="text-end pe-4">
                      <button
                        onClick={() => downloadTextFile(art.name, art.content)}
                        className="btn btn-sm btn-outline-primary rounded-pill px-3 d-inline-flex align-items-center gap-1.5"
                      >
                        <Download size={13} />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
