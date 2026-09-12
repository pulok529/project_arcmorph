import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Copy,
  Check,
  Layers,
  Sparkles,
  Layout,
  Table,
  Cpu,
  Database,
  Printer,
  ChevronRight,
  Maximize2,
  Sliders,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface ReportCodedDesignViewerProps {
  fileName: string;
  metadata: any;
}

export const ReportCodedDesignViewer: React.FC<ReportCodedDesignViewerProps> = ({
  fileName,
  metadata
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'dsl' | 'questpdf' | 'companion_cs' | 'ast_explorer'>('dsl');
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedSectionIdx, setSelectedSectionIdx] = useState<number>(0);

  const cleanName = fileName.replace(/\.rpt$/i, '').replace(/^rpt/i, '').replace(/([A-Z])/g, ' $1').trim() || 'ACADEMIC REPORT';
  const archetype = metadata?.reportArchetype || 'transcript';
  const isLandscape = archetype === 'tabulation' || archetype === 'attendance' || archetype === 'routine';

  const dslCode = metadata?.crystalDslCode || `// Decompiled Crystal Reports Design Specification for ${fileName}\n// Archetype: [${archetype.toUpperCase()}]\n`;
  const questPdfCode = metadata?.questPdfCSharpCode || `// QuestPDF .NET 9 Document implementation for ${fileName}\n`;
  const companionCsCode = metadata?.companionCsCode || `// Legacy CrystalDecisions ReportClass code-behind for ${fileName}\n// Class: ${fileName.replace(/\.rpt$/i, '')}\n`;
  const boundDataSetName = metadata?.boundDataSet?.schemaFileName || 'dsResult.xsd';
  const primaryTable = metadata?.boundDataSet?.dataTables?.[0];
  const schemaColumns = primaryTable?.columns || [];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getActiveCode = () => {
    switch (activeSubTab) {
      case 'dsl':
        return dslCode;
      case 'questpdf':
        return questPdfCode;
      case 'companion_cs':
        return companionCsCode;
      default:
        return dslCode;
    }
  };

  const sections = metadata?.layoutBands || [
    { band: 'Report Header (Section1)', items: ['School Name & Logo', `Report Title: ${cleanName}`, 'Session Banner'] },
    { band: 'Page Header (Section2)', items: ['Parameter Filter Grid', 'Tabular Column Headers'] },
    { band: 'Group Header (Section3)', items: ['Class / Department Group Criterion'] },
    { band: 'Details Section (Section4)', items: ['Data Records & Line Items'] },
    { band: 'Group Footer (Section5)', items: ['Subtotals & Record Count'] },
    { band: 'Report Footer (Section6)', items: ['Grand Totals & 3 Signatures'] },
    { band: 'Page Footer (Section7)', items: ['Page N of M', 'Print Timestamp', 'Copyright'] }
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {/* Top Banner & Mode Switcher */}
      <div className="d-flex align-items-center justify-content-between p-3 rounded-4 card border shadow-sm flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className="badge bg-indigo-100 text-indigo-800 font-monospace px-3 py-1.5 fs-12 d-flex align-items-center gap-1.5">
            <Code2 size={13} />
            <span>CODED DESIGN: {archetype.toUpperCase().replace('_', ' ')}</span>
          </span>
          <span className="badge bg-slate-100 text-slate-700 font-monospace border px-2.5 py-1.5 fs-12">
            Page: {isLandscape ? 'Landscape (16838 x 11906 twips)' : 'Portrait (11906 x 16838 twips)'}
          </span>
          <span className="badge bg-emerald-50 text-emerald-700 border border-emerald-200 font-monospace px-2.5 py-1.5 fs-12">
            Schema: {boundDataSetName}
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => handleCopy(getActiveCode())}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1 fs-12 d-flex align-items-center gap-1.5 shadow-sm"
          >
            {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />}
            <span>{copied ? 'Copied Code!' : 'Copy Code'}</span>
          </button>
        </div>
      </div>

      {/* SUB-TABS NAVIGATION */}
      <div className="d-flex align-items-center gap-1.5 border-bottom pb-2 flex-wrap">
        <button
          onClick={() => setActiveSubTab('dsl')}
          className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-semibold d-flex align-items-center gap-1.5 ${
            activeSubTab === 'dsl' ? 'btn-primary shadow-sm text-white' : 'btn-outline-secondary border'
          }`}
        >
          <Code2 size={14} />
          <span>1. Decompiled RPT Design DSL (Geometry & Fields)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('questpdf')}
          className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-semibold d-flex align-items-center gap-1.5 ${
            activeSubTab === 'questpdf' ? 'btn-primary shadow-sm text-white' : 'btn-outline-secondary border'
          }`}
        >
          <Sparkles size={14} />
          <span>2. Modern .NET 9 QuestPDF C# Vector Class</span>
        </button>

        <button
          onClick={() => setActiveSubTab('companion_cs')}
          className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-semibold d-flex align-items-center gap-1.5 ${
            activeSubTab === 'companion_cs' ? 'btn-primary shadow-sm text-white' : 'btn-outline-secondary border'
          }`}
        >
          <FileCode size={14} />
          <span>3. Companion C# ReportClass Wrapper ({fileName.replace(/\.rpt$/i, '')}.cs)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ast_explorer')}
          className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-semibold d-flex align-items-center gap-1.5 ${
            activeSubTab === 'ast_explorer' ? 'btn-primary shadow-sm text-white' : 'btn-outline-secondary border'
          }`}
        >
          <Layers size={14} />
          <span>4. Section AST & Coordinate Bounds Explorer</span>
        </button>
      </div>

      {/* CODE VIEW AREA: DECOMPILED CRYSTAL DSL */}
      {activeSubTab === 'dsl' && (
        <div className="card border-0 shadow-sm rounded-4 bg-slate-900 text-slate-100 overflow-hidden">
          <div className="p-3 bg-slate-800 border-bottom border-slate-700 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-indigo-500 text-white font-monospace fs-11">CRYSTAL DESIGN SPECIFICATION DSL</span>
              <span className="font-monospace fs-12 text-slate-300">{cleanName}_DesignSpecification.cs</span>
            </div>
            <span className="fs-11 text-slate-400 font-monospace">7 Section Bands • Twip Geometry (1440 = 1in)</span>
          </div>
          <div className="p-3.5 overflow-auto" style={{ maxHeight: '650px' }}>
            <pre className="mb-0 font-monospace fs-12 text-emerald-400" style={{ lineHeight: '1.65' }}>
              <code>{dslCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* CODE VIEW AREA: MODERN QUESTPDF C# */}
      {activeSubTab === 'questpdf' && (
        <div className="card border-0 shadow-sm rounded-4 bg-slate-900 text-slate-100 overflow-hidden">
          <div className="p-3 bg-slate-800 border-bottom border-slate-700 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-purple-500 text-white font-monospace fs-11">QUESTPDF .NET 9 VECTOR ENGINE</span>
              <span className="font-monospace fs-12 text-slate-300">{metadata?.docClassName || 'ReportDocument'}.cs</span>
            </div>
            <span className="fs-11 text-slate-400 font-monospace">IDocument Fluent API • Zero ActiveX</span>
          </div>
          <div className="p-3.5 overflow-auto" style={{ maxHeight: '650px' }}>
            <pre className="mb-0 font-monospace fs-12 text-indigo-300" style={{ lineHeight: '1.65' }}>
              <code>{questPdfCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* CODE VIEW AREA: COMPANION C# WRAPPER */}
      {activeSubTab === 'companion_cs' && (
        <div className="card border-0 shadow-sm rounded-4 bg-slate-900 text-slate-100 overflow-hidden">
          <div className="p-3 bg-slate-800 border-bottom border-slate-700 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-amber-500 text-white font-monospace fs-11">LEGACY CRYSTALDECISIONS REPORTCLASS</span>
              <span className="font-monospace fs-12 text-slate-300">{fileName.replace(/\.rpt$/i, '')}.cs</span>
            </div>
            <span className="fs-11 text-slate-400 font-monospace">Physical Legacy Code-Behind on Disk</span>
          </div>
          <div className="p-3.5 overflow-auto" style={{ maxHeight: '650px' }}>
            <pre className="mb-0 font-monospace fs-12 text-slate-300" style={{ lineHeight: '1.65' }}>
              <code>{companionCsCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* INTERACTIVE AST & GEOMETRY BOUNDS EXPLORER */}
      {activeSubTab === 'ast_explorer' && (
        <div className="row g-3">
          {/* Section List */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <h6 className="fw-bold text-body mb-3 d-flex align-items-center gap-2">
                <Layers size={16} className="text-primary" />
                <span>Section Hierarchy Tree ({sections.length} Bands)</span>
              </h6>
              <div className="d-flex flex-column gap-2">
                {sections.map((s: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSectionIdx(idx)}
                    className={`p-3 rounded-3 text-start border transition-all ${
                      selectedSectionIdx === idx
                        ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-sm'
                        : 'bg-body-secondary border text-body hover:bg-body'
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <strong className="fs-13 font-monospace">{s.band || `Section ${idx + 1}`}</strong>
                      <span className="badge bg-slate-200 text-slate-700 font-monospace fs-10">
                        {idx === 0 ? '2160 twips' : idx === 1 ? '1440 twips' : idx === 3 ? '360 twips' : idx === 5 ? '2400 twips' : '480 twips'}
                      </span>
                    </div>
                    <small className="text-muted d-block text-truncate fs-11">
                      {Array.isArray(s.items) ? s.items.join(' • ') : s.items}
                    </small>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section Detail & Field Coordinates */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                <div>
                  <h6 className="fw-bold text-body mb-0 font-monospace">
                    {sections[selectedSectionIdx]?.band || `Section ${selectedSectionIdx + 1}`}
                  </h6>
                  <small className="text-muted">Coordinate bounds and field bindings in 1440 Twips/Inch</small>
                </div>
                <span className="badge bg-purple-100 text-purple-800 font-monospace px-2.5 py-1">
                  Band Index: {selectedSectionIdx}
                </span>
              </div>

              {/* Twip Geometry Metrics */}
              <div className="row g-2 mb-3">
                <div className="col-4">
                  <div className="p-2.5 rounded-3 bg-body-secondary border text-center">
                    <small className="text-muted d-block fs-10">Height</small>
                    <strong className="font-monospace fs-12 text-body">
                      {selectedSectionIdx === 0 ? '2,160 twips (1.50 in)' : selectedSectionIdx === 1 ? '1,440 twips (1.00 in)' : selectedSectionIdx === 3 ? '360 twips (0.25 in)' : selectedSectionIdx === 5 ? '2,400 twips (1.67 in)' : '480 twips (0.33 in)'}
                    </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2.5 rounded-3 bg-body-secondary border text-center">
                    <small className="text-muted d-block fs-10">Can Grow</small>
                    <strong className="font-monospace fs-12 text-indigo-700">
                      {selectedSectionIdx === 3 ? 'TRUE (Dynamic)' : 'FALSE (Fixed)'}
                    </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2.5 rounded-3 bg-body-secondary border text-center">
                    <small className="text-muted d-block fs-10">Keep Together</small>
                    <strong className="font-monospace fs-12 text-emerald-700">
                      {selectedSectionIdx === 2 || selectedSectionIdx === 5 ? 'TRUE (Atomic)' : 'FALSE'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Bound Objects Table */}
              <h6 className="fw-bold fs-12 text-uppercase text-body mb-2">Bound Report Objects in Band:</h6>
              <div className="table-responsive">
                <table className="table table-bordered table-sm align-middle fs-12 mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Object Name / Type</th>
                      <th>Binding / Value</th>
                      <th>Bounds (X, Y, W, H)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSectionIdx === 0 ? (
                      <>
                        <tr><td><strong className="font-monospace text-body">picLogo [BlobField]</strong></td><td><code className="text-purple-700">{'{tblRptImage.RptImage}'}</code></td><td className="font-monospace fs-11">240, 120, 1200, 1200</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtSchoolName [Text]</strong></td><td><span>BORNOMALA SCHOOL & COLLEGE</span></td><td className="font-monospace fs-11">1560, 120, 8880, 480</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtAddress [Text]</strong></td><td><span>South Banasree, Main Road, Dhaka</span></td><td className="font-monospace fs-11">1560, 620, 8880, 300</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtTitle [Text]</strong></td><td><span className="fw-bold text-body">{cleanName.toUpperCase()}</span></td><td className="font-monospace fs-11">2880, 1020, 6240, 380</td></tr>
                      </>
                    ) : selectedSectionIdx === 1 ? (
                      <>
                        <tr><td><strong className="font-monospace text-body">boxScope [BoxObject]</strong></td><td><span>Parameter Filter Scope Box</span></td><td className="font-monospace fs-11">240, 60, 10200, 720</td></tr>
                        <tr><td><strong className="font-monospace text-body">hdrIndex [Text]</strong></td><td><span># Column Header</span></td><td className="font-monospace fs-11">240, 950, 480, 320</td></tr>
                        <tr><td><strong className="font-monospace text-body">hdrDescription [Text]</strong></td><td><span>Primary Description Header</span></td><td className="font-monospace fs-11">760, 950, 4200, 320</td></tr>
                        <tr><td><strong className="font-monospace text-body">hdrScore [Text]</strong></td><td><span>Score / Value Header</span></td><td className="font-monospace fs-11">7980, 950, 2400, 320</td></tr>
                      </>
                    ) : selectedSectionIdx === 3 ? (
                      <>
                        <tr><td><strong className="font-monospace text-body">fldRecordNo [SpecialVar]</strong></td><td><code>SpecialVar.RecordNumber</code></td><td className="font-monospace fs-11">240, 40, 480, 280</td></tr>
                        {schemaColumns.slice(0, 3).map((c: any, cIdx: number) => (
                          <tr key={cIdx}>
                            <td><strong className="font-monospace text-body">fld_{c.name} [DatabaseField]</strong></td>
                            <td><code className="text-indigo-700">{`{${primaryTable?.tableName || 'dsResult'}.${c.name}}`}</code></td>
                            <td className="font-monospace fs-11">{760 + (cIdx * 2400)}, 40, 2300, 280</td>
                          </tr>
                        ))}
                      </>
                    ) : selectedSectionIdx === 5 ? (
                      <>
                        <tr><td><strong className="font-monospace text-body">txtTeacherSign [Text]</strong></td><td><span>Class Teacher Signature Line</span></td><td className="font-monospace fs-11">480, 1850, 2400, 300</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtOfficerSign [Text]</strong></td><td><span>Verified Officer Signature Line</span></td><td className="font-monospace fs-11">4200, 1850, 2400, 300</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtPrincipalSign [Text]</strong></td><td><span>Headmaster / Principal Line</span></td><td className="font-monospace fs-11">7920, 1850, 2400, 300</td></tr>
                      </>
                    ) : (
                      <>
                        <tr><td><strong className="font-monospace text-body">txtPrintDate [FormulaField]</strong></td><td><code>{'{@FormattedPrintDateTime}'}</code></td><td className="font-monospace fs-11">240, 120, 4200, 280</td></tr>
                        <tr><td><strong className="font-monospace text-body">txtCopyright [Text]</strong></td><td><span>Copyright © Creatrix</span></td><td className="font-monospace fs-11">4800, 120, 4200, 280</td></tr>
                        <tr><td><strong className="font-monospace text-body">fldPageNo [FormulaField]</strong></td><td><code>{'{@PageNumberFormat}'}</code></td><td className="font-monospace fs-11">8240, 120, 2200, 280</td></tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
