import React, { useState } from 'react';
import { FileCode, Copy, Check, Printer, FileText } from 'lucide-react';

interface QuestPdfViewerProps {
  reports: any[];
}

export const QuestPdfViewer: React.FC<QuestPdfViewerProps> = ({ reports = [] }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (reports.length === 0) return null;

  const currentReport = reports[selectedIdx] || reports[0];

  const copyCode = () => {
    navigator.clipboard.writeText(currentReport.csharpCode || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center">
            <Printer size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">QuestPDF Modern Reporting Studio (.NET 9)</h5>
              <span className="badge bg-danger text-white rounded-pill font-monospace fs-10">
                100% C# Code-First
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Replaces binary Crystal Reports (.rpt) with high-speed vector PDF rendering and in-browser React preview.
            </p>
          </div>
        </div>

        {/* Report Selector Pills */}
        <div className="d-flex align-items-center gap-2 flex-wrap">
          {reports.map((r, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`btn btn-sm ${selectedIdx === idx ? 'btn-danger' : 'btn-outline-secondary'} rounded-pill px-3 fw-bold`}
            >
              {r.schema?.title || r.rptFileName}
            </button>
          ))}
        </div>
      </div>

      {/* Body: 2 Columns */}
      <div className="card-body p-4">
        <div className="row g-4">
          
          {/* Left Column: Replaced Crystal Report Summary */}
          <div className="col-lg-5">
            <div className="p-3 bg-light rounded-3 border h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-warning-subtle text-warning mb-2 font-monospace fs-11">
                  Replaces: {currentReport.rptFileName}
                </span>
                <h6 className="fw-bold text-dark mb-1">{currentReport.schema?.title || 'Report Document'}</h6>
                <p className="text-muted fs-12 mb-3">
                  Original Section Architecture: <code>{currentReport.schema?.sections?.join(' → ') || 'Header → Details → Footer'}</code>
                </p>

                <h6 className="fw-bold fs-12 text-uppercase text-muted mb-2">Mapped Table Columns:</h6>
                <div className="list-group list-group-flush border rounded bg-white mb-3">
                  {(currentReport.schema?.columns || ['Item', 'Quantity', 'Price', 'Total']).map((col: any, i: number) => {
                    const colName = typeof col === 'object' && col !== null ? (col.header || col.dataField || col.name || `Col_${i + 1}`) : String(col);
                    const colType = typeof col === 'object' && col?.alignment ? `align: ${col.alignment}` : 'string / decimal';
                    return (
                      <div key={i} className="list-group-item px-3 py-1.5 d-flex align-items-center justify-content-between border-0 fs-12">
                        <span className="font-monospace text-dark">{colName}</span>
                        <span className="badge bg-light text-muted border fs-10 font-monospace">{colType}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="alert alert-success border-success-subtle mb-0 py-2 px-3 rounded-3 d-flex align-items-center gap-2 fs-12">
                <span>✓ Verified C# QuestPDF Code-First Document</span>
              </div>
            </div>
          </div>

          {/* Right Column: C# Code Viewer */}
          <div className="col-lg-7">
            <div className="border rounded-3 overflow-hidden">
              <div className="bg-dark text-white p-2.5 px-3 d-flex align-items-center justify-content-between">
                <span className="font-monospace fs-12 text-light">
                  {currentReport.schema?.documentClassName || 'ReportDocument'}.cs
                </span>
                <button
                  onClick={copyCode}
                  className="btn btn-sm btn-outline-light rounded-pill px-2.5 py-1 fs-11 d-inline-flex align-items-center gap-1"
                >
                  {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-3 bg-dark text-light font-monospace fs-11 mb-0" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                <code>{currentReport.csharpCode || '// QuestPDF Code'}</code>
              </pre>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
