import React, { useState, useEffect } from 'react';
import { Card } from './common/Card';
import { Layers, Sparkles, Database, FileText, CheckCircle2, ChevronRight, Search, Filter, Printer, ExternalLink, SlidersHorizontal, Eye } from 'lucide-react';

interface EntityCluster {
  rootNoun: string;
  unifiedPageName: string;
  module: string;
  route: string;
  legacyFiles: string[];
  allControls: any[];
  inputs: any[];
  dropdowns: any[];
  buttons: any[];
  grids: any[];
  checkBoxes: any[];
  reports: Array<{
    documentName: string;
    title: string;
    endpoint: string;
  }>;
  hasCreateModal: boolean;
  hasEditModal: boolean;
  hasDataTable: boolean;
  summary: {
    totalLegacyPagesConsolidated: number;
    totalInputsPreserved: number;
    totalButtonsPreserved: number;
    totalGridsPreserved: number;
  };
}

interface EntityClustersResponse {
  totalLegacyPages: number;
  totalConsolidatedEntities: number;
  reductionRatio: string;
  entities: EntityCluster[];
}

interface EntityClustersViewerProps {
  projectId: string;
  projectName: string;
}

export const EntityClustersViewer: React.FC<EntityClustersViewerProps> = ({ projectId, projectName }) => {
  const [data, setData] = useState<EntityClustersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('ALL');
  const [selectedCluster, setSelectedCluster] = useState<EntityCluster | null>(null);

  useEffect(() => {
    if (!projectId) return;
    setLoading(true);
    fetch(`/api/projects/${projectId}/entity-clusters`)
      .then(res => res.json())
      .then(resData => {
        if (resData.success && resData.clusters) {
          setData(resData.clusters);
        }
      })
      .catch(err => console.error('Failed to load entity clusters:', err))
      .finally(() => setLoading(false));
  }, [projectId]);

  if (loading) {
    return (
      <div className="mb-4">
        <Card title="⚡ Entity Clustering & UX Consolidation Hub" subtitle="Analyzing page clusters...">
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-muted mt-2 fs-13">Consolidating legacy 3-page patterns into unified modern React 19 pages...</p>
          </div>
        </Card>
      </div>
    );
  }

  if (!data || !data.entities || data.entities.length === 0) {
    return null;
  }

  const modules = ['ALL', ...Array.from(new Set(data.entities.map(e => e.module)))];

  const filteredEntities = data.entities.filter(e => {
    const matchesSearch = e.rootNoun.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.unifiedPageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.legacyFiles.some(lf => lf.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesModule = selectedModule === 'ALL' || e.module === selectedModule;
    return matchesSearch && matchesModule;
  });

  const totalInputs = data.entities.reduce((acc, curr) => acc + (curr.summary?.totalInputsPreserved || 0), 0);
  const totalButtons = data.entities.reduce((acc, curr) => acc + (curr.summary?.totalButtonsPreserved || 0), 0);
  const totalGrids = data.entities.reduce((acc, curr) => acc + (curr.summary?.totalGridsPreserved || 0), 0);

  return (
    <div className="mb-4">
      <Card
        title="⚡ Entity Clustering & UX Consolidation Engine"
        subtitle="Consolidates bloated legacy 3-page patterns (*Entry.aspx, *Edit.aspx, *View.aspx) into single high-performance React 19 hubs with modal drawers."
        badge={
          <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill font-monospace fs-12 px-3 py-1">
            {data.reductionRatio}
          </span>
        }
      >
        {/* Metric Summary Ribbon */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="p-3 bg-light rounded-3 border text-center">
              <div className="text-muted fs-12 text-uppercase fw-semibold mb-1">Legacy WebForms Pages</div>
              <h3 className="fw-bold text-danger mb-0">{data.totalLegacyPages}</h3>
              <small className="text-muted fs-11">Scattered across separate files</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-primary-subtle border border-primary-subtle rounded-3 text-center">
              <div className="text-primary fs-12 text-uppercase fw-semibold mb-1">Unified Modern Hubs</div>
              <h3 className="fw-bold text-primary mb-0">{data.totalConsolidatedEntities}</h3>
              <small className="text-primary-emphasis fs-11">React 19 Master-Detail Pages</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-success-subtle border border-success-subtle rounded-3 text-center">
              <div className="text-success fs-12 text-uppercase fw-semibold mb-1">Architecture Optimization</div>
              <h3 className="fw-bold text-success mb-0">{data.reductionRatio.split(' ')[0]}</h3>
              <small className="text-success-emphasis fs-11">Maintenance surface eliminated</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-info-subtle border border-info-subtle rounded-3 text-center">
              <div className="text-info-emphasis fs-12 text-uppercase fw-semibold mb-1">Controls Preserved</div>
              <h3 className="fw-bold text-info-emphasis mb-0">{totalInputs + totalButtons + totalGrids}</h3>
              <small className="text-muted fs-11">100% Zero functional regression</small>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2 flex-grow-1" style={{ maxWidth: '400px' }}>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light border-end-0">
                <Search size={14} className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search entity, unified page, or legacy files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Filter size={14} className="text-muted" />
            <select
              className="form-select form-select-sm"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              style={{ width: 'auto' }}
            >
              {modules.map((m, i) => (
                <option key={i} value={m}>
                  {m === 'ALL' ? 'All Modules' : m.replace(/^\d+_/, '').replace(/_/g, ' ')}
                </option>
              ))}
            </select>
            <span className="badge bg-secondary-subtle text-secondary rounded-pill font-monospace fs-11">
              Showing {filteredEntities.length} of {data.totalConsolidatedEntities} Hubs
            </span>
          </div>
        </div>

        {/* Entities Table */}
        <div className="table-responsive border rounded-3" style={{ maxHeight: '420px', overflowY: 'auto' }}>
          <table className="table table-hover align-middle mb-0 fs-13">
            <thead className="table-light sticky-top">
              <tr>
                <th style={{ width: '22%' }}>Unified React 19 Entity Hub</th>
                <th style={{ width: '18%' }}>Module & Route</th>
                <th style={{ width: '28%' }}>Consolidated Legacy Pages</th>
                <th style={{ width: '18%' }}>UX Capabilities & Reports</th>
                <th style={{ width: '14%' }} className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.map((cluster, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="p-1.5 bg-primary-subtle text-primary rounded-2">
                        <Layers size={16} />
                      </div>
                      <div>
                        <div className="fw-bold text-dark">{cluster.unifiedPageName}</div>
                        <small className="text-muted font-monospace fs-11">Entity: {cluster.rootNoun}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border mb-1 d-inline-block">
                      {cluster.module.replace(/^\d+_/, '').replace(/_/g, ' ')}
                    </span>
                    <div className="text-muted font-monospace fs-11">{cluster.route}</div>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-1">
                      {cluster.legacyFiles.map((lf, lIdx) => (
                        <span key={lIdx} className="badge bg-danger-subtle text-danger border border-danger-subtle font-monospace fs-11">
                          {lf}
                        </span>
                      ))}
                    </div>
                    <small className="text-muted fs-11 mt-1 d-block">
                      Preserved: {cluster.summary.totalInputsPreserved} inputs, {cluster.summary.totalButtonsPreserved} buttons, {cluster.summary.totalGridsPreserved} grids
                    </small>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-1">
                      {cluster.hasDataTable && (
                        <span className="badge bg-info-subtle text-info-emphasis border border-info-subtle fs-11">
                          Master-Detail Grid
                        </span>
                      )}
                      {cluster.hasCreateModal && (
                        <span className="badge bg-success-subtle text-success border border-success-subtle fs-11">
                          Create Modal
                        </span>
                      )}
                      {cluster.hasEditModal && (
                        <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle fs-11">
                          Edit Drawer
                        </span>
                      )}
                      {cluster.reports && cluster.reports.length > 0 && (
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle fs-11 d-inline-flex align-items-center gap-1">
                          <Printer size={10} /> {cluster.reports.length} QuestPDF
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-outline-primary rounded-pill px-2.5 py-1 fs-12 d-inline-flex align-items-center gap-1"
                      onClick={() => setSelectedCluster(cluster)}
                    >
                      <Eye size={12} /> Inspect Hub
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal / Drawer for Detailed Cluster Inspection */}
        {selectedCluster && (
          <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-header border-bottom py-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-primary-subtle text-primary rounded-3">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h5 className="modal-title fw-bold text-dark mb-0">{selectedCluster.unifiedPageName}</h5>
                      <small className="text-muted">Entity Hub Architecture Specification • {selectedCluster.module}</small>
                    </div>
                  </div>
                  <button type="button" className="btn-close" onClick={() => setSelectedCluster(null)}></button>
                </div>

                <div className="modal-body p-4">
                  {/* Architectural mapping card */}
                  <div className="card bg-light border-0 rounded-3 p-3 mb-3">
                    <h6 className="fw-bold text-dark mb-2">Modern UI Architecture Pattern:</h6>
                    <ul className="mb-0 fs-13 ps-3 text-secondary">
                      <li><strong>Page Level:</strong> Renders <code>&lt;ReactDataTable&gt;</code> with server-side pagination, search, and sorting.</li>
                      <li><strong>Create Action:</strong> Opens an Offcanvas Drawer (<code>&lt;Modal show={'{'}isCreateOpen{'}'}&gt;</code>) instead of redirecting to <code>*Entry.aspx</code>.</li>
                      <li><strong>Edit Action:</strong> Opens an in-place Edit Modal (<code>&lt;Modal show={'{'}isEditOpen{'}'}&gt;</code>) pre-populated via <code>GET /api/v1/{selectedCluster.rootNoun.toLowerCase()}/:id</code>.</li>
                      <li><strong>Reporting / Print:</strong> Generates instant QuestPDF vector documents via <code>&lt;PdfViewerModal&gt;</code> without Crystal Reports viewer plugins.</li>
                    </ul>
                  </div>

                  {/* Legacy Pages Consolidated */}
                  <div className="mb-3">
                    <label className="fw-bold fs-13 text-dark mb-1">Legacy ASPX Files Consolidated ({selectedCluster.legacyFiles.length}):</label>
                    <div className="d-flex flex-wrap gap-1.5">
                      {selectedCluster.legacyFiles.map((lf, i) => (
                        <span key={i} className="badge bg-danger-subtle text-danger border border-danger-subtle font-monospace fs-12 p-2">
                          {lf}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Controls Breakdown */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <div className="p-3 border rounded-3 bg-white">
                        <div className="fw-bold text-dark fs-13 mb-2">Preserved Inputs & TextBoxes ({selectedCluster.inputs.length})</div>
                        <div className="d-flex flex-wrap gap-1" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                          {selectedCluster.inputs.length > 0 ? (
                            selectedCluster.inputs.map((inp, i) => (
                              <span key={i} className="badge bg-secondary-subtle text-dark font-monospace fs-11">
                                {inp.id || inp.name || `inp_${i}`}
                              </span>
                            ))
                          ) : (
                            <span className="text-muted fs-12">No standalone textboxes</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="p-3 border rounded-3 bg-white">
                        <div className="fw-bold text-dark fs-13 mb-2">Preserved DropDownLists & Selects ({selectedCluster.dropdowns.length})</div>
                        <div className="d-flex flex-wrap gap-1" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                          {selectedCluster.dropdowns.length > 0 ? (
                            selectedCluster.dropdowns.map((ddl, i) => (
                              <span key={i} className="badge bg-info-subtle text-info-emphasis font-monospace fs-11">
                                {ddl.id || ddl.name || `ddl_${i}`}
                              </span>
                            ))
                          ) : (
                            <span className="text-muted fs-12">No dropdown controls</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Associated QuestPDF Reports */}
                  {selectedCluster.reports && selectedCluster.reports.length > 0 && (
                    <div className="mb-2">
                      <label className="fw-bold fs-13 text-dark mb-1">Associated Vector QuestPDF Reports:</label>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedCluster.reports.map((r, i) => (
                          <div key={i} className="p-2 border rounded-3 bg-primary-subtle text-primary d-flex align-items-center gap-2 fs-12">
                            <Printer size={14} />
                            <span className="fw-semibold">{r.title} ({r.documentName}.cs)</span>
                            <span className="badge bg-primary text-white font-monospace fs-10">{r.endpoint}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="modal-footer border-top py-2">
                  <button type="button" className="btn btn-secondary btn-sm rounded-pill" onClick={() => setSelectedCluster(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
