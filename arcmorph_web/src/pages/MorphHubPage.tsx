import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { ProjectSummary } from '../types';

export const MorphHubPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [loading, setLoading] = useState(true);

  // Initialize projects strictly from local storage (clean slate default)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ARCMORPH_PROJECTS');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setProjects(parsed);
          setLoading(false);
          return;
        }
      }
    } catch {
      // fallback
    }

    // Default: Clean slate (empty projects array)
    setProjects([]);
    setLoading(false);
  }, []);

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('Reset workspace to clean slate? All cached project analysis will be cleared.')) return;
    setProjects([]);
    localStorage.removeItem('ARCMORPH_PROJECTS');
  };

  const handleLoadSample = (e: React.MouseEvent) => {
    e.stopPropagation();
    const benchmark: ProjectSummary = {
      id: 'proj_1788642109465',
      name: 'Bornomala School ERP Monolith',
      archive_name: 'Bornomala_Legacy_Release_v4.2.zip',
      created_at: '2026-09-08T14:32:00.000Z',
      status: 'COMPLETED',
      tech_stack: ['.NET Framework 4.0', 'ASP.NET WebForms', 'MS SQL 2019', 'Crystal Reports', 'ADO.NET'],
      stats: {
        total_files: 2165,
        aspx_pages: 443,
        csharp_classes: 1288,
        reports: 196,
        tables: 68
      },
      domain_summary: 'Comprehensive K-12 education enterprise ERP covering admissions, multi-session academics, double-entry finance, student records, and Crystal Reports engine.'
    };
    const updated = [benchmark];
    setProjects(updated);
    localStorage.setItem('ARCMORPH_PROJECTS', JSON.stringify(updated));
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to remove this project and its artifacts?')) return;
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('ARCMORPH_PROJECTS', JSON.stringify(updated));
  };

  const handleAnalyze = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/terminal?project=${id}`);
  };

  return (
    <div className="container-fluid position-relative pb-5">
      <PageHeader
        title="MorphHub Project Repository"
        category="Architecture Management"
        breadcrumbs={[{ label: 'Home' }, { label: 'MorphHub', active: true }]}
      />

      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h4 className="fw-bold text-body mb-1">Active Modernization Repositories</h4>
          <p className="text-body-secondary fs-13 mb-0">Browse, inspect, and analyze ingested legacy systems and target blueprints</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          {projects.length > 0 && (
            <button onClick={handleClearAll} className="btn btn-outline-danger rounded-pill px-3 fs-13">
              <i className="ti ti-trash me-1"></i> Reset Clean Slate
            </button>
          )}
          <Link to="/upload" className="btn btn-outline-info rounded-pill px-3 fs-13">
            <i className="ti ti-plus me-1"></i> Quick Ingestion
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-info" role="status"></div>
          <p className="mt-2 text-body-secondary fs-13">Scanning repository catalog...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="card text-center py-5 border border-dashed border-secondary-subtle shadow-sm">
          <div className="card-body">
            <i className="ti ti-folder-off fs-48 text-body-secondary mb-3 d-block"></i>
            <h5 className="text-body fw-bold">Clean Slate: No Projects Loaded</h5>
            <p className="text-body-secondary fs-13 mb-4">Upload a legacy project archive (.zip / .rar / .7z) or database backup (.bak) to begin automated reverse-engineering.</p>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Link to="/upload" className="btn btn-primary px-4 py-2">
                <i className="ti ti-upload me-1"></i> Upload Project Archive
              </Link>
              <button onClick={handleLoadSample} className="btn btn-outline-secondary px-3 py-2 fs-13">
                <i className="ti ti-database-import me-1"></i> Load Sample Benchmark
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row g-3">
          {projects.map((proj) => {
            const isCompleted = proj.status === 'COMPLETED';
            return (
              <div key={proj.id} className="col-xl-6 col-xxl-4">
                <div className="card h-100 border border-secondary-subtle shadow-sm transition-all">
                  <div className="card-header bg-transparent border-bottom border-secondary-subtle py-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <span className="avatar-xs rounded-circle d-flex align-items-center justify-content-center" style={{ background: 'rgba(0, 242, 254, 0.12)', color: '#00f2fe', width: 32, height: 32 }}>
                        <i className="ti ti-box fs-16"></i>
                      </span>
                      <h5 className="card-title text-body mb-0 fs-15 text-truncate" style={{ maxWidth: '220px' }}>
                        {proj.name}
                      </h5>
                    </div>
                    <span className={`badge ${isCompleted ? 'bg-success-subtle text-success border-success-subtle' : 'bg-warning-subtle text-warning border-warning-subtle'} border px-2 py-1 fs-11`}>
                      <i className={`ti ${isCompleted ? 'ti-check' : 'ti-clock'} me-1`}></i>
                      {proj.status}
                    </span>
                  </div>

                  <div className="card-body p-3">
                    <p className="fs-12 text-body-secondary mb-3 line-clamp-2" style={{ minHeight: '36px' }}>
                      {proj.domain_summary || 'Legacy enterprise monolith ingested for architecture decompilation and clean modern transformation.'}
                    </p>

                    {/* Detected Tech Stack Badges */}
                    <div className="mb-3">
                      <span className="fs-11 text-body-secondary fw-semibold text-uppercase d-block mb-1">Detected Tech Stack:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {(proj.tech_stack || ['.NET Framework 4.0', 'ASP.NET WebForms', 'MS SQL 2019', 'Crystal Reports']).map((tech, i) => (
                          <span key={i} className="badge bg-body-secondary border border-secondary-subtle text-info fs-11">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inventory Metrics */}
                    <div className="row g-2 text-center fs-11 mb-3">
                      <div className="col-4">
                        <div className="p-2 rounded bg-body-tertiary border border-secondary-subtle">
                          <span className="text-body-secondary d-block fs-11 fw-semibold">Files</span>
                          <span className="fw-bold text-body fs-14">{proj.stats?.total_files || 2165}</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-body-tertiary border border-secondary-subtle">
                          <span className="text-body-secondary d-block fs-11 fw-semibold">Classes</span>
                          <span className="fw-bold text-body fs-14">{proj.stats?.csharp_classes || 1288}</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 rounded bg-body-tertiary border border-secondary-subtle">
                          <span className="text-body-secondary d-block fs-11 fw-semibold">Pages</span>
                          <span className="fw-bold text-body fs-14">{proj.stats?.aspx_pages || 443}</span>
                        </div>
                      </div>
                    </div>

                    <div className="fs-11 text-body-secondary mb-0 d-flex align-items-center justify-content-between">
                      <span><i className="ti ti-file-zip me-1"></i>{proj.archive_name}</span>
                      <span><i className="ti ti-calendar me-1"></i>{new Date(proj.created_at || proj.uploadedAt || Date.now()).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="card-footer bg-transparent border-top border-secondary-subtle p-3 d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1 fs-12"
                      onClick={(e) => handleDelete(proj.id, e)}
                    >
                      <i className="ti ti-trash"></i> Delete
                    </button>

                    <div className="d-flex align-items-center gap-2">
                      <Link
                        to={`/projects/${proj.id}/graph`}
                        className="btn btn-sm btn-outline-info d-flex align-items-center gap-1 fs-12"
                        title="Open Interactive Architecture Topology Graph"
                      >
                        <i className="ti ti-chart-dots-3 text-cyan"></i> Topology Graph
                      </Link>

                      {isCompleted ? (
                        <Link
                          to={`/projects/${proj.id}`}
                          className="btn btn-sm fw-bold px-3 d-flex align-items-center gap-1 fs-12 shadow-sm"
                          style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)', color: '#0b0f19', border: 'none' }}
                        >
                          <i className="ti ti-layout-grid"></i> Open Cockpit <i className="ti ti-arrow-right ms-1"></i>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-warning d-flex align-items-center gap-1 fs-12"
                          onClick={(e) => handleAnalyze(proj.id, e)}
                        >
                          <i className="ti ti-player-play"></i> Run Analysis
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sticky Glowing Animated Upload Button */}
      <Link
        to="/upload"
        className="position-fixed shadow-lg d-flex align-items-center justify-content-center gap-2 text-decoration-none fw-bold"
        style={{
          bottom: '30px',
          right: '30px',
          zIndex: 1040,
          background: 'linear-gradient(135deg, #00f2fe 0%, #10b981 100%)',
          color: '#0b0f19',
          padding: '14px 24px',
          borderRadius: '50px',
          boxShadow: '0 0 25px rgba(0, 242, 254, 0.4), 0 10px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        <span className="spinner-grow spinner-grow-sm" style={{ width: 10, height: 10, color: '#0b0f19' }} role="status"></span>
        <i className="ti ti-cloud-upload fs-20"></i>
        <span>Intake Project Archive</span>
      </Link>
    </div>
  );
};

export default MorphHubPage;
