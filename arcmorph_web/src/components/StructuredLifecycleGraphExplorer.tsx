import React, { useState, useEffect, useMemo } from 'react';
import { Card } from './common/Card';
import { MermaidViewer } from './common/MermaidViewer';
import { GitFork, Search, Layers, FileCode, ArrowRight, CheckCircle2, ShieldCheck, Database, Table, Sparkles, Filter, Eye, RefreshCw, LogOut, Check, ChevronDown } from 'lucide-react';

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

interface StructuredLifecycleGraphExplorerProps {
  projectId: string;
  projectName: string;
  pages?: any[];
}

export const StructuredLifecycleGraphExplorer: React.FC<StructuredLifecycleGraphExplorerProps> = ({
  projectId,
  projectName,
  pages = []
}) => {
  const [clusters, setClusters] = useState<EntityCluster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('ALL');
  const [selectedEntityName, setSelectedEntityName] = useState<string>('Class');
  const [viewMode, setViewMode] = useState<'entity' | 'global'>('entity');

  useEffect(() => {
    if (!projectId) return;
    setLoading(true);
    fetch(`/api/projects/${projectId}/entity-clusters`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.clusters?.entities) {
          setClusters(data.clusters.entities);
          if (data.clusters.entities.length > 0) {
            // Default to Class if available, or first entity
            const defaultEntity = data.clusters.entities.find((c: any) => c.rootNoun.toLowerCase() === 'class') || data.clusters.entities[0];
            setSelectedEntityName(defaultEntity.rootNoun);
          }
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [projectId]);

  // Extract distinct modules
  const modulesList = useMemo(() => {
    const set = new Set<string>();
    clusters.forEach(c => {
      if (c.module) set.add(c.module);
    });
    return Array.from(set).sort();
  }, [clusters]);

  // Filtered clusters by search term & module
  const filteredClusters = useMemo(() => {
    return clusters.filter(c => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = !term ||
        c.rootNoun.toLowerCase().includes(term) ||
        c.unifiedPageName.toLowerCase().includes(term) ||
        (c.legacyFiles || []).some(f => f.toLowerCase().includes(term));

      if (!matchesSearch) return false;
      if (selectedModule === 'ALL') return true;
      return c.module === selectedModule;
    });
  }, [clusters, searchTerm, selectedModule]);

  // Active cluster
  const activeCluster = useMemo(() => {
    return clusters.find(c => c.rootNoun.toLowerCase() === selectedEntityName.toLowerCase()) || filteredClusters[0] || clusters[0] || {
      rootNoun: 'Class',
      unifiedPageName: 'ClassPage.tsx',
      module: '02_Curriculum_And_Academics',
      route: '/academic/class',
      legacyFiles: ['ClassEntry.aspx', 'ClassView.aspx', 'ClassEdit.aspx'],
      inputs: [{ id: 'txtClassName', label: 'Class Name' }, { id: 'txtNumericValue', label: 'Numeric Value' }],
      dropdowns: [{ id: 'ddlShift', label: 'Shift' }, { id: 'ddlMedium', label: 'Medium' }],
      buttons: [{ id: 'btnSave', text: 'Save' }, { id: 'btnReset', text: 'Reset' }, { id: 'btnViewAll', text: 'View All Classes' }],
      grids: [{ id: 'gvClassList' }],
      reports: [{ documentName: 'ClassSummaryReportDocument', title: 'Class Summary Report', endpoint: '/api/v1/reports/class' }],
      hasCreateModal: true,
      hasEditModal: true,
      hasDataTable: true,
      summary: { totalLegacyPagesConsolidated: 3, totalInputsPreserved: 2, totalButtonsPreserved: 3, totalGridsPreserved: 1 }
    };
  }, [clusters, selectedEntityName, filteredClusters]);

  // Generate the Exact Per-Entity Flow Graph as requested
  const entityMermaidGraph = useMemo(() => {
    const name = activeCluster.rootNoun;
    const inputLabels = (activeCluster.inputs || []).map(i => i.label || i.id).slice(0, 4).join(', ') || `${name} Name, Code`;
    const dropdownLabels = (activeCluster.dropdowns || []).map(d => d.label || d.id).slice(0, 3).join(', ') || 'Academic Year, Department';
    const buttonLabels = (activeCluster.buttons || []).map(b => b.text || b.id).slice(0, 3).join(', ') || 'Save, View All, Reset';
    const legacyFilesList = (activeCluster.legacyFiles || []).join(' • ') || `${name}Entry.aspx, ${name}View.aspx`;

    return `flowchart TD
    subgraph S1 ["1. Authentication & Permission Gate"]
        Login["🔐 User Login"] --> PermCheck{"🛡️ Check RBAC Permission\\n(Policy: ${name}.View / ${name}.Create)"}
        PermCheck -- "❌ Denied" --> DeniedToast["⛔ 403 Forbidden Toast Notification"]
        PermCheck -- "✅ Authorized" --> PageEntry["🌐 Navigate to ${name} Page\\n(Route: ${activeCluster.route})"]
    end

    subgraph S2 ["2. Page Entry & UI Controls Inventory (${name} Form)"]
        PageEntry --> FormBox["📋 ${name} Page Form Controls:\\n• Text Inputs: ${inputLabels}\\n• Dropdowns: ${dropdownLabels}\\n• Action Buttons: ${buttonLabels}\\n• Consolidated Legacy Files: ${legacyFilesList}"]
    end

    subgraph S3 ["3. Dropdown Lookup Data Inflow"]
        LookupDB[("💾 Database Foreign Lookups\\n(tbl_${name}Lookups / Master Tables)")] -->|GET /api/v1/${name.toLowerCase()}/lookups| LookupAPI["⚡ Lookup API Endpoint"]
        LookupAPI -->|Populate Dropdown Options| FormBox
    end

    subgraph S4 ["4. Inter-Page Navigation Actions"]
        FormBox -->|"⚡ Click Button: 'View All'"| ViewGrid["📊 ${name} Data Grid / Table\\n(ReactDataTable with Edit & Delete Rows)"]
    end

    subgraph S5 ["5. Form Submission & Mutation"]
        FormBox -->|"⚡ Click Button: 'Save'"| Validate{"🔎 Validation Check\\n(Zod Client + FluentValidation)"}
        Validate -- "❌ Invalid" --> ErrMsg["⚠️ Display Field Validation Errors"]
        Validate -- "✅ Valid" --> PostAPI["💾 POST /api/v1/${name.toLowerCase()}\\n(MediatR CQRS -> EF Core 9 -> tbl_${name})"]
        PostAPI --> SuccessNotice["✅ Data Saved Successfully\\n• Form Fields Cleared\\n• Toast: '${name} Created Successfully'"]
    end

    subgraph S6 ["6. Edit Operation (Modal / Popup Flow)"]
        ViewGrid -->|"⚡ Click 'Edit' on Data Row"| EditModal["📝 Open Edit Offcanvas / Modal Drawer\\n(Pre-filled with selected ${name} record)"]
        EditModal -->|"⚡ Click 'Update Changes'"| PutAPI["💾 PUT /api/v1/${name.toLowerCase()}/{id}\\n(EF Core 9 Unit of Work)"]
        PutAPI -->|"✅ Update Success"| RefreshGrid["🔄 Close Modal & Invalidate Query (Grid Refreshes)"]
    end

    subgraph S7 ["7. Next Action / Post-Operation Exit Loop"]
        SuccessNotice --> NextChoice{"🔀 Next User Decision"}
        RefreshGrid --> NextChoice
        NextChoice -->|"➕ Repeat Entry"| FormBox
        NextChoice -->|"📊 View Master Records"| ViewGrid
        NextChoice -->|"🚪 Terminate"| Logout["🔒 Secure Logout"]
    end`;
  }, [activeCluster]);

  // Generate the Big Global Side-by-Side Flow with Department Explicitly Included
  const globalSideBySideMermaid = `flowchart TD
    Login["🔐 1. User Authentication (JWT Bearer Auth)"] --> Dash["📊 2. Executive Role-Based Dashboard"]

    subgraph Track1 ["📘 Academic Master, Department & Admissions Track"]
        Dash --> ClassHub["🏛️ 3A. Class Setup\\n(Entry -> Edit Modal -> View Grid)"]
        ClassHub --> DeptHub["🏢 3B. Department / Academic Group Setup\\n(Science, Arts, Commerce, General)"]
        DeptHub --> SectionHub["🚪 3C. Section Mapping\\n(Cascading Class -> Dept -> Section -> Shift -> Capacity)"]
        SectionHub --> StudentAdm["🎓 3D. Student Admission & Registration\\n(Enrollment -> Bio Data -> Photo Upload)"]
        StudentAdm --> Promotion["📈 3E. Student Promotion\\n(Session-to-Session Migration)"]
    end

    subgraph Track2 ["💳 Fees & Financial Accounting Track"]
        Dash --> FeeSetup["💳 4A. Fee Category & Head Setup\\n(Tuition, Transport, Exam Fees)"]
        FeeSetup --> InvoiceGen["📑 4B. Invoice Batch Generation\\n(Automated Billing for Enrolled Students)"]
        StudentAdm -.->|Enrolled Student IDs| InvoiceGen
        InvoiceGen --> FeeCollection["💵 4C. Fee Collection & Payment Receipt\\n(Cash / Bank / Online Gateway)"]
        FeeCollection --> AccountsLedger["📊 4D. Financial Vouchers & General Ledger"]
    end

    subgraph Track3 ["📝 Examination & Grading Track"]
        Dash --> ExamSched["📝 5A. Exam Schedules & Term Setup\\n(1st Term, Mid, Final)"]
        ClassHub -.->|Class Info| ExamSched
        DeptHub -.->|Department Stream| ExamSched
        ExamSched --> SubjectMap["📚 5B. Subject & Marks Weightage\\n(Theory, Practical, MCQ)"]
        SubjectMap --> MarksEntry["✏️ 5C. Teacher Marks Entry\\n(Batch Entry per Section)"]
        StudentAdm -.->|Student Roster| MarksEntry
        MarksEntry --> ResultProc["🧮 5D. GPA & Grade Processing\\n(Automated Pass/Fail & Rank)"]
    end

    subgraph Track4 ["📄 Vector Document Reporting Track"]
        ResultProc --> Tabulation["📄 6A. QuestPDF Tabulation Sheet"]
        ResultProc --> Transcript["📜 6B. Student Transcript / Progress Report"]
        FeeCollection --> MoneyReceipt["🧾 6C. Money Receipt & Daily Collection Report"]
        StudentAdm --> AdmitCard["🪪 6D. Exam Admit Card"]
    end

    subgraph Track5 ["👥 HRM & Staff Administration Track"]
        Dash --> StaffReg["👥 7A. Teacher & Staff Registration"]
        StaffReg --> StaffAttend["⏱️ 7B. Daily Biometric Attendance"]
        StaffAttend --> Payroll["💰 7C. Monthly Salary Payroll Generation"]
    end

    Tabulation --> AuditLog["📋 8. System Convergence Audit & Production Docker Gate"]
    Transcript --> AuditLog
    MoneyReceipt --> AuditLog
    AccountsLedger --> AuditLog
    Payroll --> AuditLog
    AuditLog --> Logout["🚪 Secure Session Termination (Logout)"]`;

  return (
    <div className="mb-4">
      <Card
        title="🔄 Unified Main Page Lifecycle & Side-by-Side Workflow Graph"
        subtitle="Consolidates separate Entry, Edit, View, and Report pages into unified Entity Hubs with detailed lifecycle flowcharts."
        badge={
          <span className="badge bg-primary rounded-pill font-monospace fs-11">
            {clusters.length || 1} Consolidated Main Page Hubs
          </span>
        }
      >
        {/* Top View Mode Switcher */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3 pb-3 border-bottom">
          <div className="nav nav-pills gap-1">
            <button
              onClick={() => setViewMode('entity')}
              className={`nav-link py-1.5 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                viewMode === 'entity' ? 'active fw-bold' : ''
              }`}
            >
              <FileCode size={14} />
              <span>1. Individual Main Page Lifecycle Graph ({activeCluster.rootNoun}: Entry ➔ View ➔ Edit Modal ➔ Submit)</span>
            </button>
            <button
              onClick={() => setViewMode('global')}
              className={`nav-link py-1.5 px-3 fs-12 rounded-pill d-flex align-items-center gap-1.5 ${
                viewMode === 'global' ? 'active fw-bold' : ''
              }`}
            >
              <GitFork size={14} />
              <span>2. Big Global End-to-End Side-by-Side Flow (Class ➔ Dept ➔ Section ➔ Operations)</span>
            </button>
          </div>

          <span className="badge bg-light text-dark border font-monospace fs-11">
            Interactive Mermaid SVG Engine
          </span>
        </div>

        {/* View Mode 1: Individual Entity Hub Lifecycle Graph */}
        {viewMode === 'entity' && (
          <div>
            {/* Search & Selection Controls Row */}
            <div className="p-3 bg-light rounded-3 border mb-3">
              <div className="row g-2 align-items-center mb-2">
                {/* Search Input */}
                <div className="col-md-5">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-white border-end-0">
                      <Search size={14} className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0 fs-12 font-monospace"
                      placeholder="Search Any Main Page (e.g. Class, Dept, Student, Fee, Exam)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Module Dropdown Filter */}
                <div className="col-md-3">
                  <select
                    className="form-select form-select-sm fs-12 font-monospace rounded-pill"
                    value={selectedModule}
                    onChange={(e) => setSelectedModule(e.target.value)}
                  >
                    <option value="ALL">All Modules ({clusters.length})</option>
                    {modulesList.map(mod => (
                      <option key={mod} value={mod}>
                        {mod.replace(/^0\d_/, '').replace(/_/g, ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Direct Dropdown of all 199 Entity Hubs */}
                <div className="col-md-4">
                  <select
                    className="form-select form-select-sm fs-12 font-monospace rounded-pill bg-white border-primary"
                    value={activeCluster.rootNoun}
                    onChange={(e) => setSelectedEntityName(e.target.value)}
                  >
                    {filteredClusters.map(c => (
                      <option key={c.rootNoun} value={c.rootNoun}>
                        Main Page: {c.rootNoun} ({c.legacyFiles?.length || 1} legacy pages)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Scrollable Entity Group Pills List */}
              <div className="d-flex align-items-center gap-1.5 overflow-auto pt-1 pb-1 flex-nowrap">
                <span className="text-muted fs-11 text-uppercase fw-semibold me-1 text-nowrap">Quick Select:</span>
                {filteredClusters.slice(0, 16).map((cluster) => {
                  const isSelected = activeCluster.rootNoun === cluster.rootNoun;
                  return (
                    <button
                      key={cluster.rootNoun}
                      onClick={() => setSelectedEntityName(cluster.rootNoun)}
                      className={`btn btn-xs rounded-pill px-2.5 py-1 fs-11 font-monospace text-nowrap transition ${
                        isSelected ? 'btn-primary shadow-sm fw-bold' : 'btn-outline-secondary'
                      }`}
                    >
                      <span>{cluster.rootNoun}</span>
                      <span className="badge bg-white text-dark ms-1 px-1 rounded-pill fs-10">
                        {cluster.legacyFiles?.length || 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Entity Info Summary Banner */}
            <div className="p-3 bg-white rounded-3 border mb-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 shadow-sm">
              <div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="badge bg-primary rounded-pill font-monospace fs-11">
                    Selected Entity Hub: {activeCluster.rootNoun}
                  </span>
                  <h6 className="fw-bold text-dark mb-0 font-monospace">
                    {activeCluster.unifiedPageName}
                  </h6>
                  <code className="text-primary fs-12 font-monospace bg-primary-subtle px-2 py-0.5 rounded">
                    {activeCluster.route}
                  </code>
                </div>
                <small className="text-muted font-monospace fs-11 d-block">
                  Consolidates <strong>{activeCluster.legacyFiles?.length || 1}</strong> Legacy ASPX Pages: {activeCluster.legacyFiles?.join(', ')}
                </small>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success-subtle text-success fs-11 font-monospace">
                  ✓ Modal Create/Edit Supported
                </span>
                <span className="badge bg-info-subtle text-info fs-11 font-monospace">
                  ✓ ReactDataTable Enabled
                </span>
              </div>
            </div>

            {/* Render Mermaid Lifecycle Diagram */}
            <MermaidViewer
              chart={entityMermaidGraph}
              title={`${activeCluster.rootNoun} Main Page Full Lifecycle Flowchart`}
            />
          </div>
        )}

        {/* View Mode 2: Big Global Side-by-Side Flow */}
        {viewMode === 'global' && (
          <div>
            <div className="alert alert-primary-subtle border-primary-subtle rounded-3 p-3 mb-3 fs-12">
              <strong>Big Global Architecture & Operations Flow:</strong> Complete end-to-end multi-track flow starting from <strong>User Authentication</strong>, branching into parallel operations (<strong>Academic: Class ➔ Department / Group ➔ Section ➔ Student Admission</strong>, <strong>Fees & Accounts</strong>, <strong>Examinations</strong>, <strong>QuestPDF Reports</strong>, <strong>HRM</strong>), converging into <strong>Audit Verification</strong> and <strong>Logout</strong>.
            </div>
            <MermaidViewer
              chart={globalSideBySideMermaid}
              title="Big Global Side-by-Side System Workflow Flowchart (With Department/Group Track)"
            />
          </div>
        )}
      </Card>
    </div>
  );
};
