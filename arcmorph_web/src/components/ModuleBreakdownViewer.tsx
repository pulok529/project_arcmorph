import React, { useState } from 'react';
import { Layers, FileCode, FileText, Database, Sparkles, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface ModuleBreakdownViewerProps {
  modules?: any[];
  pages?: any[];
  projectName: string;
  chosenTheme: string;
}

export const ModuleBreakdownViewer: React.FC<ModuleBreakdownViewerProps> = ({
  modules = [],
  pages = [],
  projectName,
  chosenTheme
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0]?.id || 'mod_1');

  if (modules.length === 0 && pages.length === 0) return null;

  const currentModule = modules.find(m => m.id === activeModuleId) || modules[0] || {
    name: 'Main Business Module',
    pages: pages,
    csharp: [],
    reports: [],
    database: []
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
            <Layers size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Module-by-Module Legacy Project Anatomy</h5>
              <span className="badge bg-primary text-white rounded-pill font-monospace fs-10">
                {modules.length || 1} Functional Modules
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Deep analysis of every business module, decomposing legacy WebForms, C# handlers, and queries into modern React components.
            </p>
          </div>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      {modules.length > 1 && (
        <div className="card-header bg-light py-2 px-4 border-bottom">
          <ul className="nav nav-pills gap-1 flex-nowrap overflow-auto">
            {modules.map((m: any) => (
              <li key={m.id} className="nav-item">
                <button
                  onClick={() => setActiveModuleId(m.id)}
                  className={`nav-link py-1.5 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                    activeModuleId === m.id ? 'active fw-bold' : ''
                  }`}
                >
                  <span>{m.name}</span>
                  <span className="badge bg-white text-dark border rounded-pill fs-10 font-monospace">
                    {m.pages?.length || 0} pgs
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Active Module Details */}
      <div className="card-body p-4">
        
        {/* Module Summary Header */}
        <div className="p-3 bg-light rounded-3 border mb-4 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
          <div>
            <h6 className="fw-bold text-dark mb-0.5">{currentModule.name}</h6>
            <small className="text-muted">
              Contains {currentModule.pages?.length || 0} Pages • {currentModule.csharp?.length || 0} C# Logic Files • {currentModule.reports?.length || 0} Reports
            </small>
          </div>
          <span className="badge bg-success-subtle text-success font-monospace fs-11 align-self-start align-self-sm-center">
            ✓ Ready for React Modernization
          </span>
        </div>

        {/* Module Pages List */}
        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
          <FileCode size={16} className="text-primary" />
          Module Pages & Form Controls:
        </h6>

        {(currentModule.pages || []).length === 0 ? (
          <p className="text-muted fs-12 p-3 text-center mb-0">No standalone pages in this module.</p>
        ) : (
          <div className="row g-3">
            {(currentModule.pages || []).map((page: any, idx: number) => (
              <div key={idx} className="col-lg-6">
                <div className="card border rounded-3 shadow-none h-100 hover-border-primary transition">
                  <div className="card-body p-3">
                    
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2 text-truncate">
                        <FileCode size={16} className="text-primary" />
                        <span className="font-monospace fw-bold fs-13 text-dark text-truncate" title={page.path || page.fileName}>
                          {page.name || page.fileName}
                        </span>
                      </div>
                      <span className="badge bg-primary-subtle text-primary font-monospace fs-10">
                        {page.type || 'ASPX'}
                      </span>
                    </div>

                    {/* Stats pills */}
                    <div className="d-flex flex-wrap gap-1.5 my-2">
                      <span className="badge bg-light text-dark border fs-11">
                        {page.summary?.totalInputs || 4} Input Fields
                      </span>
                      <span className="badge bg-light text-dark border fs-11">
                        {page.summary?.totalButtons || 2} Actions
                      </span>
                      <span className="badge bg-light text-dark border fs-11">
                        {page.summary?.totalGrids || 1} DataTables
                      </span>
                    </div>

                    <div className="pt-2 border-top d-flex align-items-center justify-content-between fs-11 text-muted">
                      <span>Target Component:</span>
                      <code className="text-primary font-monospace">{page.targetComponent || `${page.name?.replace(/\.[^/.]+$/, '') || 'Page'}.tsx`}</code>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
