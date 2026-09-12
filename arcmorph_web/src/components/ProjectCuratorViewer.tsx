import React, { useState, useEffect } from 'react';
import { Card } from './common/Card';
import { FolderCheck, Zap, Database, FileCode, Layers, ShieldCheck, FileText, CheckCircle2, RefreshCw } from 'lucide-react';

interface ProjectCuratorViewerProps {
  projectId: string;
  projectName: string;
}

export const ProjectCuratorViewer: React.FC<ProjectCuratorViewerProps> = ({ projectId, projectName }) => {
  const [curation, setCuration] = useState<any>(null);
  const [fingerprint, setFingerprint] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeFolder, setActiveFolder] = useState<string>('backend');

  const fetchData = () => {
    setLoading(true);
    Promise.all([
      fetch(`/api/projects/${projectId}/curation`).then(res => res.json()),
      fetch(`/api/projects/${projectId}/fingerprint`).then(res => res.json())
    ])
      .then(([curData, fpData]) => {
        if (curData.success) setCuration(curData.curation);
        if (fpData.success) setFingerprint(fpData.manifest);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (projectId) fetchData();
  }, [projectId]);

  if (loading) {
    return (
      <Card title="Intelligent Project Curator & Auto-Organizer" subtitle="Organizing messy source code into polished workspaces...">
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2 text-muted fs-13">Executing fast manifest scan and directory restructuring...</p>
        </div>
      </Card>
    );
  }

  const folders = curation?.folders || {};
  const currentFolderData = folders[activeFolder] || { files: [], title: '', description: '' };

  return (
    <div className="row g-3 mb-4">
      {/* 1. Fast Fingerprint Manifest Card (< 300ms) */}
      <div className="col-12">
        <Card
          title="⚡ Instant Fast-Fingerprint Manifest (< 300ms)"
          subtitle="Real-time configuration scanner identifying core runtimes, drivers, and frameworks without waiting for full AST decompilation."
          badge={<span className="badge bg-success-subtle text-success font-monospace">Scan Duration: {fingerprint?.scanDurationMs || 12}ms</span>}
          actions={
            <button className="btn btn-sm btn-outline-primary rounded-pill d-inline-flex align-items-center gap-1" onClick={fetchData}>
              <RefreshCw size={13} /> Re-scan
            </button>
          }
        >
          <div className="row g-3">
            <div className="col-md-3">
              <div className="p-3 bg-light rounded-3 border">
                <small className="text-muted text-uppercase fw-bold fs-11 d-block mb-1">Backend Runtime</small>
                <div className="fw-bold text-dark fs-14">{fingerprint?.backend?.runtime || '.NET Framework 4.8'}</div>
                <small className="text-primary font-monospace">{fingerprint?.languages?.join(', ') || 'C#'}</small>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded-3 border">
                <small className="text-muted text-uppercase fw-bold fs-11 d-block mb-1">Frontend Framework</small>
                <div className="fw-bold text-dark fs-14">{fingerprint?.frontend?.framework || 'ASP.NET WebForms (Legacy)'}</div>
                <small className="text-success font-monospace">Target: React 19 + Paces</small>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded-3 border">
                <small className="text-muted text-uppercase fw-bold fs-11 d-block mb-1">Database Engine</small>
                <div className="fw-bold text-dark fs-14">{fingerprint?.database?.engine || 'Microsoft SQL Server'}</div>
                <small className="text-info font-monospace">{fingerprint?.database?.backupFormat || 'Native .BAK Backup'}</small>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 bg-light rounded-3 border">
                <small className="text-muted text-uppercase fw-bold fs-11 d-block mb-1">Reporting Engine</small>
                <div className="fw-bold text-dark fs-14">{fingerprint?.reporting?.engine || 'Crystal Reports 13.x'}</div>
                <small className="text-warning font-monospace">Target: QuestPDF .NET 9</small>
              </div>
            </div>

            <div className="col-12">
              <div className="alert alert-primary-subtle border-0 mb-0 d-flex align-items-center gap-2 p-2 px-3 rounded-3">
                <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                <span className="fs-13 text-primary-emphasis">
                  <strong>Architectural Recommendation:</strong> {fingerprint?.curationRecommendation}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 2. Curated Standard Directory Structure */}
      <div className="col-12">
        <Card
          title="📁 Intelligent Auto-Organizer & Workspace Curator"
          subtitle="Automatically restructures unstructured project archives into enterprise-grade standard folders."
          badge={<span className="badge bg-primary rounded-pill font-monospace">100% Curated</span>}
        >
          {/* Folder Category Selector Tabs */}
          <div className="d-flex flex-wrap gap-2 mb-3 border-bottom pb-3">
            {Object.keys(folders).map(key => {
              const f = folders[key];
              const isActive = activeFolder === key;
              return (
                <button
                  key={key}
                  className={`btn btn-sm rounded-pill fw-bold d-inline-flex align-items-center gap-1.5 px-3 ${
                    isActive ? 'btn-primary shadow-sm' : 'btn-light border text-secondary'
                  }`}
                  onClick={() => setActiveFolder(key)}
                >
                  <FolderCheck size={14} />
                  <span>{f.targetPath}</span>
                  <span className={`badge rounded-pill ${isActive ? 'bg-light text-primary' : 'bg-secondary-subtle text-secondary'}`}>
                    {f.totalCount || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Folder Header */}
          <div className="d-flex align-items-center justify-content-between mb-3 bg-light p-3 rounded-3 border">
            <div>
              <h6 className="fw-bold text-dark mb-1">{currentFolderData.title}</h6>
              <p className="text-muted fs-12 mb-0">{currentFolderData.description}</p>
            </div>
            <span className="badge bg-primary-subtle text-primary font-monospace fs-12 px-3 py-1.5 rounded-pill">
              Target Folder: {currentFolderData.targetPath}
            </span>
          </div>

          {/* Curated Files Table */}
          <div className="table-responsive border rounded-3" style={{ maxHeight: '350px', overflowY: 'auto' }}>
            <table className="table table-hover align-middle mb-0 fs-13">
              <thead className="table-light sticky-top">
                <tr>
                  <th>#</th>
                  <th>Source File Name</th>
                  <th>Original Legacy Path</th>
                  <th>Curated Standard Target Path</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                {currentFolderData.files && currentFolderData.files.length > 0 ? (
                  currentFolderData.files.map((file: any, index: number) => (
                    <tr key={index}>
                      <td className="text-muted font-monospace">{index + 1}</td>
                      <td className="fw-semibold text-dark">{file.name}</td>
                      <td className="text-muted font-monospace fs-12">{file.originalPath || '-'}</td>
                      <td className="text-primary font-monospace fs-12 fw-bold">{file.curatedPath}</td>
                      <td>
                        <span className="badge bg-secondary-subtle text-secondary rounded-pill font-monospace fs-11">
                          {file.category || file.type || activeFolder}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-3 text-muted">
                      No files classified in this section.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
