import React, { useState } from 'react';
import { Eye, Code, FileText, CheckCircle2, ArrowRight, Layers, Sparkles, Copy, Check, Server, GitFork } from 'lucide-react';
import { MermaidViewer } from './common/MermaidViewer';

interface ComponentMappingInspectorProps {
  pageSpecs?: any[];
  pages?: any[];
  projectName: string;
  chosenTheme: string;
}

export const ComponentMappingInspector: React.FC<ComponentMappingInspectorProps> = ({
  pageSpecs = [],
  pages = [],
  projectName,
  chosenTheme
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'mapping' | 'graph' | 'reactCode' | 'apiCode'>('preview');
  const [copied, setCopied] = useState(false);

  // Derive specs if not explicitly provided
  const activePage = pages[selectedIdx] || pages[0] || {
    fileName: 'StudentRegistration.aspx',
    summary: { totalInputs: 4, totalButtons: 2, totalGrids: 1 }
  };

  const pageNameRaw = (activePage.fileName || activePage.name || 'Feature').replace(/\.[^/.]+$/, '');

  const perPageMermaidGraph = `flowchart TD
    UI["🌐 ${pageNameRaw}Page.tsx (React 19 + Paces)"]
    API["🛡️ /api/v1/${pageNameRaw.toLowerCase()} (ASP.NET Core 9 Web API)"]
    Handler["⚡ Process${pageNameRaw}Command / Query (MediatR CQRS)"]
    EF["🗄️ EF Core 9 (AppDbContext)"]
    DB[("💾 MS SQL 2022 (tbl_${pageNameRaw})")]

    UI -->|JSON REST Payload| API
    API -->|Dispatch Command| Handler
    Handler -->|Entity Mutation| EF
    EF -->|SQL INSERT/UPDATE| DB
    DB -.->|Return Normalized State| UI`;

  const activeSpec = (pageSpecs && pageSpecs[selectedIdx]?.jsonSpec) || {
    pageName: `${pageNameRaw}Page`,
    legacySource: activePage.fileName || activePage.name || 'LegacyPage.aspx',
    fileGoal: `Provides complete enterprise workflows for ${pageNameRaw}, managing interactive form controls and mutating database records via modern REST API endpoints.`,
    fieldMappings: (activePage.controls || []).map((c: any) => ({
      legacyId: c.id,
      legacyType: c.type || 'asp:TextBox',
      label: c.label || c.id,
      modernTag: '<input className="form-control" />',
      reactBinding: `register('${c.id}')`,
      validation: 'Required field',
      apiField: c.id?.replace(/^(txt|tb|input)_?/i, '')
    })),
    buttonMappings: (activePage.buttons || []).map((b: any) => ({
      legacyId: b.id,
      legacyText: b.text,
      handler: b.handler || 'btn_Click',
      actionGoal: `Triggers REST API Mutation`
    })),
    reactComponentCode: `import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const ${pageNameRaw}Page: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: any) => axios.post('/api/v1/${pageNameRaw.toLowerCase()}', data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['${pageNameRaw.toLowerCase()}'] })
  });

  const onSubmit = (data: any) => mutation.mutate(data);

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-transparent border-bottom p-4">
        <h5 className="fw-bold mb-0 text-dark">${pageNameRaw} Form</h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body p-4">
        {/* Dynamic Controls */}
        <div className="row g-3">
          ${(activePage.controls || []).map((c: any) => `
          <div className="col-md-6">
            <label className="form-label fs-13 fw-semibold">${c.label || c.id}</label>
            <input {...register('${c.id}')} className="form-control" />
          </div>`).join('')}
        </div>
        <div className="mt-4 d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-primary fw-bold">Submit & Save</button>
        </div>
      </form>
    </div>
  );
};`,
    apiEndpointCode: `// ASP.NET Core 9 Minimal API Endpoint (.NET 9)
app.MapPost("/api/v1/${pageNameRaw.toLowerCase()}", async (
    [FromBody] ${pageNameRaw}Dto dto,
    ISender sender,
    CancellationToken ct) =>
{
    var result = await sender.Send(new Process${pageNameRaw}Command(dto), ct);
    return Results.Ok(result);
})
.WithName("Process${pageNameRaw}")
.Produces<ApiResponse>(StatusCodes.Status200OK)
.RequireAuthorization();`
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center">
            <Eye size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Reverse-Engineered Component & Form Mapping Inspector</h5>
              <span className="badge bg-info text-white rounded-pill font-monospace fs-10">
                AST Semantic Bridge
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Inspect every decomposed legacy UI file, its business goals, exact input mapping table, and live modern React component preview.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="text-muted fs-12 font-monospace">Select Page:</span>
          <select
            className="form-select form-select-sm font-monospace fs-12 rounded-pill"
            style={{ width: '240px' }}
            value={selectedIdx}
            onChange={(e) => setSelectedIdx(Number(e.target.value))}
          >
            {pages.map((p, idx) => (
              <option key={idx} value={idx}>
                {p.fileName || p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Goal & Description Banner */}
      <div className="card-body p-4 bg-light border-bottom">
        <div className="d-flex align-items-start gap-3">
          <span className="badge bg-primary rounded-pill font-monospace px-3 py-1 fs-11 mt-1">
            File Goal
          </span>
          <div>
            <h6 className="fw-bold text-dark mb-1">{activeSpec.pageName} ({activeSpec.legacySource})</h6>
            <p className="text-muted fs-13 mb-0">
              {activeSpec.fileGoal}
            </p>
          </div>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="card-header bg-light py-2 px-4 border-bottom">
        <ul className="nav nav-pills gap-1">
          <li className="nav-item">
            <button
              onClick={() => setActiveTab('preview')}
              className={`nav-link py-1 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                activeTab === 'preview' ? 'active fw-bold' : ''
              }`}
            >
              <Eye size={14} />
              <span>Live Modern Component Preview</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab('mapping')}
              className={`nav-link py-1 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                activeTab === 'mapping' ? 'active fw-bold' : ''
              }`}
            >
              <Layers size={14} />
              <span>Legacy-to-Modern Control Mapping Table</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab('graph')}
              className={`nav-link py-1 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                activeTab === 'graph' ? 'active fw-bold' : ''
              }`}
            >
              <GitFork size={14} />
              <span>Visual Data Flow Graph (This Page)</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab('reactCode')}
              className={`nav-link py-1 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                activeTab === 'reactCode' ? 'active fw-bold' : ''
              }`}
            >
              <Code size={14} />
              <span>React 19 Component Code</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab('apiCode')}
              className={`nav-link py-1 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                activeTab === 'apiCode' ? 'active fw-bold' : ''
              }`}
            >
              <Server size={14} />
              <span>ASP.NET Core 9 API Route Code</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Body */}
      <div className="card-body p-4">
        
        {/* 1. Live Modern Component Preview */}
        {activeTab === 'preview' && (
          <div className="border rounded-4 p-4 bg-white shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
              <div>
                <h6 className="fw-bold mb-0 text-dark">{activeSpec.pageName}</h6>
                <small className="text-muted fs-12">Theme skin: <strong className="text-primary text-uppercase">{chosenTheme}</strong></small>
              </div>
              <span className="badge bg-success-subtle text-success rounded-pill font-monospace fs-11">
                ✓ React 19 Interactive Preview
              </span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Interactive preview: Form submission validated with Zod & React Hook Form.'); }}>
              <div className="row g-3">
                {(activeSpec.fieldMappings || []).length === 0 ? (
                  <div className="col-12 text-center py-4 text-muted">
                    No input controls found on this page.
                  </div>
                ) : (
                  (activeSpec.fieldMappings || []).map((f: any, idx: number) => (
                    <div key={idx} className="col-md-6">
                      <label className="form-label fs-13 fw-semibold text-dark">
                        {f.label}
                        <span className="text-danger ms-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control fs-13 rounded-3"
                        placeholder={`Enter ${f.label.toLowerCase()}...`}
                        defaultValue={`Sample ${f.label}`}
                      />
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-light rounded-pill px-4 fs-13">Reset</button>
                <button type="submit" className="btn btn-primary rounded-pill px-4 fs-13 fw-bold">
                  Submit & Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 2. Legacy-to-Modern Control Mapping Table */}
        {activeTab === 'mapping' && (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle mb-0">
              <thead className="table-light fs-12 text-uppercase text-muted">
                <tr>
                  <th>Legacy ASP.NET Control</th>
                  <th>Control Type</th>
                  <th>Modern UI Component</th>
                  <th>Zod / Hook Form Binding</th>
                  <th>REST API DTO Mapping</th>
                </tr>
              </thead>
              <tbody className="fs-13">
                {(activeSpec.fieldMappings || []).length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">No explicit controls mapped.</td>
                  </tr>
                ) : (
                  (activeSpec.fieldMappings || []).map((f: any, idx: number) => (
                    <tr key={idx}>
                      <td className="font-monospace fw-bold text-primary">{f.legacyId}</td>
                      <td>
                        <span className="badge bg-light text-dark border font-monospace fs-11">
                          {f.legacyType}
                        </span>
                      </td>
                      <td>
                        <code className="text-success fs-12">{f.modernTag}</code>
                      </td>
                      <td>
                        <code className="text-info fs-12 font-monospace">{f.reactBinding}</code>
                      </td>
                      <td>
                        <code className="text-primary fs-12 font-monospace">{f.apiField}</code>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* 3. Visual Data Flow Graph (This Page) */}
        {activeTab === 'graph' && (
          <div>
            <div className="alert alert-primary-subtle border-primary-subtle rounded-3 p-3 mb-3 fs-12">
              <strong>Individual Page Architecture Lineage:</strong> Visual flowchart for <code>{pageNameRaw}Page</code> tracing form submit through ASP.NET Core 9 Web API, MediatR CQRS command handler, EF Core 9 Unit of Work, to MS SQL 2022.
            </div>
            <MermaidViewer
              chart={perPageMermaidGraph}
              title={`${pageNameRaw} Page Data Lineage Flowchart`}
            />
          </div>
        )}

        {/* 4. React 19 Component Code */}
        {activeTab === 'reactCode' && (
          <div className="position-relative">
            <pre className="p-4 bg-dark text-light rounded-4 font-monospace fs-12 mb-0 overflow-auto" style={{ maxHeight: '450px' }}>
              {activeSpec.reactComponentCode}
            </pre>
          </div>
        )}

        {/* 5. ASP.NET Core 9 API Route Code */}
        {activeTab === 'apiCode' && (
          <div className="position-relative">
            <pre className="p-4 bg-dark text-light rounded-4 font-monospace fs-12 mb-0 overflow-auto" style={{ maxHeight: '450px' }}>
              {activeSpec.apiEndpointCode}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
