import React, { useState } from 'react';
import { Card } from './common/Card';
import { MermaidViewer } from './common/MermaidViewer';
import { Compass, ShieldCheck, Database, Cpu, Printer, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Layers, Lock, GitBranch } from 'lucide-react';

interface GlobalSystem {
  id: string;
  title: string;
  icon: any;
  badge: string;
  oldSystem: {
    title: string;
    items: string[];
    risk: string;
  };
  newSystem: {
    title: string;
    items: string[];
    benefit: string;
  };
  betterProcessAdvice: {
    headline: string;
    description: string;
    roi: string;
  };
  mermaidDiagram: string;
}

const GLOBAL_SYSTEMS: GlobalSystem[] = [
  {
    id: 'dynamic-nav',
    title: '1. Dynamic Navigation & 5-Bit RBAC Permission Matrix',
    icon: Compass,
    badge: 'Core Infrastructure',
    oldSystem: {
      title: 'Legacy ASP.NET WebForms Nav',
      items: [
        'tbl_Menu table storing hardcoded physical ASPX paths (/Academic/StudentAdmissionEntry.aspx).',
        'MasterPage.master executes synchronous ADO.NET SQL query on every single page load.',
        'No granular in-page permissions (only hides sidebar link; direct URL navigation was vulnerable).',
        'Sidebar flashes blank for 500ms on every navigation hop.'
      ],
      risk: 'High latency, broken links when migrating to REST URLs, and security vulnerabilities due to URL guessing.'
    },
    newSystem: {
      title: 'Modern .NET 9 + React 19 SWR Navigation Hub',
      items: [
        'Normalized tbl_MenuTree with hierarchical parent-child nodes, icon tokens, and permission keys.',
        'Fast REST API endpoint /api/v1/navigation/menus served with memory caching (< 5ms response).',
        'React Sidebar renders instantly from localStorage using Stale-While-Revalidate (SWR).',
        'Paired with .NET 9 policy enforcement [Authorize(Policy = "Student.View")].'
      ],
      benefit: 'Zero UI flickering, 100% type-safe routing, and strict server-side policy enforcement.'
    },
    betterProcessAdvice: {
      headline: 'Proactive Advisory: Adopt 5-Bit Standardized Entity Permission Bitmasks',
      description: 'Instead of creating separate permission rows for every button, assign each entity 5 standard permission bits: [View, Create, Edit, Delete, Export]. Store this in a single integer bitmask in SQL for lightning-fast bitwise evaluation in both C# and React.',
      roi: 'Reduces permission DB rows by 80% and accelerates authorization checks to sub-millisecond speeds.'
    },
    mermaidDiagram: `flowchart TD
    subgraph Legacy ["Legacy Flow (Flash & Slow)"]
        L1["Page Load"] --> L2["SQL Query tbl_Menu"]
        L2 --> L3["asp:Menu Repeater Render"]
        L3 --> L4["500ms Blank Flash"]
    end
    subgraph Modern ["Modern SWR Flow (Instant)"]
        M1["App Mount"] --> M2["Instant Render from Local Cache (0ms)"]
        M2 --> M3["Silent Background Revalidation (/api/v1/navigation/menus)"]
        M3 --> M4["[Authorize(Policy)] Protected API Endpoints"]
    end`
  },
  {
    id: 'auth-jwt',
    title: '2. Stateless JWT Authentication & Refresh Token Rotation',
    icon: Lock,
    badge: 'Security Tier',
    oldSystem: {
      title: 'ASP.NET SessionState & FormAuthentication Tickets',
      items: [
        'Session["UserID"] in-memory session variables on single server IIS worker process.',
        'Session timeout drops user without warning, losing unsubmitted form inputs.',
        'Zero API support for mobile apps or third-party integrations.'
      ],
      risk: 'Fails in load-balanced or containerized environments; poor mobile developer experience.'
    },
    newSystem: {
      title: 'Stateless ASP.NET Core 9 JWT Bearer + Refresh Tokens',
      items: [
        'Short-lived 15-minute Access Tokens + HttpOnly Secure Refresh Tokens in Redis/MS SQL.',
        'Axios interceptor silently renews access token 60 seconds prior to expiry.',
        'ClaimsPrincipal contains UserID, TenantID, Roles, and Bitmask Permissions.'
      ],
      benefit: '100% Cloud-Native & Docker ready; seamless multi-device sessions without unexpected logouts.'
    },
    betterProcessAdvice: {
      headline: 'Proactive Advisory: Implement OpenID Connect (OIDC) / OAuth2 Provider Gateway',
      description: 'Upgrade the backend to support standard OAuth2 Authorization Code flow with PKCE. This prepares your application for Google/Microsoft Single Sign-On (SSO) with zero disruption.',
      roi: 'Future-proof enterprise identity integration and compliance with ISO 27001 / SOC2.'
    },
    mermaidDiagram: `sequenceDiagram
    autonumber
    actor User as React 19 Frontend
    participant API as ASP.NET Core 9 API Gateway
    participant DB as MS SQL 2022 / Redis
    User->>API: POST /api/v1/auth/login
    API->>DB: Validate Argon2id Hash
    DB-->>API: User Verified
    API-->>User: Return JWT (15min) + HttpOnly Cookie (7d)
    User->>API: Authenticated Request (Bearer Header)
    API-->>User: 200 OK Response`
  },
  {
    id: 'stored-procedures',
    title: '3. Stored Procedures & ADO.NET Transition to EF Core 9 / Dapper',
    icon: Cpu,
    badge: 'Data Access Layer',
    oldSystem: {
      title: 'Monolithic Stored Procedures with Dynamic SQL & Temp Tables',
      items: [
        '500+ Stored Procedures (e.g. sp_GetStudentAcademicSummary) containing core business logic.',
        'ADO.NET SqlDataReader mapping strings by ordinal index (reader["StudentName"].ToString()).',
        'NullReferenceExceptions and runtime type mismatches when DB columns change.'
      ],
      risk: 'Untestable business logic buried in database; zero version control for SP changes.'
    },
    newSystem: {
      title: 'Hybrid CQRS: EF Core 9 for Commands + Dapper for Complex Reporting Queries',
      items: [
        'Strongly-typed Dapper queries for high-performance read projections (300% faster than WebForms).',
        'EF Core 9 with compiled queries and change-tracking for transactional mutations.',
        'FluentValidation validates incoming request payloads before reaching the database.'
      ],
      benefit: 'Compile-time type safety, automated migration scripts, and 5x query throughput.'
    },
    betterProcessAdvice: {
      headline: 'Proactive Advisory: Use Vertical Slices (Feature Folders) with MediatR Handlers',
      description: 'Group Queries, Commands, DTOs, and Validators into cohesive Feature Folders (e.g. Features/Students/CreateStudent/) instead of traditional 3-tier horizontal silos.',
      roi: 'Reduces cross-file cognitive overhead by 60% and enables true microservices extraction.'
    },
    mermaidDiagram: `flowchart LR
    Req["API Request"] --> Dispatcher{"MediatR Pipeline"}
    Dispatcher -->|Query (Read)| Dapper["Dapper Micro-ORM (High Speed)"]
    Dispatcher -->|Command (Write)| EF["EF Core 9 Unit of Work"]
    Dapper --> SQL[("MS SQL 2022")]
    EF --> SQL`
  },
  {
    id: 'questpdf-engine',
    title: '4. Crystal Reports (.rpt) Replacement via QuestPDF Vector Engine',
    icon: Printer,
    badge: 'Reporting Tier',
    oldSystem: {
      title: 'Legacy Crystal Reports 13 Runtime',
      items: [
        'Physical .rpt binary files requiring 32-bit/64-bit MSI runtimes on Windows IIS.',
        'CrystalReportViewer control causes ActiveX / pop-up blocker issues in Chrome/Edge.',
        'Slow generation times (2-5 seconds per admit card batch) with high memory consumption.'
      ],
      risk: 'Crystal Reports cannot run in Linux Docker containers; expensive proprietary licensing.'
    },
    newSystem: {
      title: 'QuestPDF .NET 9 Fluent C# Vector Engine',
      items: [
        '100% C# code-first layout engine (runs seamlessly in Linux Docker containers).',
        'Generates vector PDF documents at 100+ pages per second with sub-50MB RAM usage.',
        'Interactive in-browser React PDF viewer component with instant zoom, pagination, and print.'
      ],
      benefit: 'Docker Linux native, zero licensing fees, and instant sub-second PDF generation.'
    },
    betterProcessAdvice: {
      headline: 'Proactive Advisory: Stream PDFs Directly into In-Memory Blob URLs',
      description: 'Stream the generated PDF directly as an ArrayBuffer into a browser Blob URL rendered inside an iframe or pdf.js canvas. This avoids saving temporary PDF files on the server disk and eliminates file cleanup cron jobs.',
      roi: 'Zero server disk I/O, infinite scalability, and instant document previews.'
    },
    mermaidDiagram: `flowchart LR
    Req["React <PdfViewerModal>"] -->|GET /api/v1/reports/admitcard?id=123| API["ASP.NET Core 9 WebAPI"]
    API -->|Fetch Structured DTO| DB[("MS SQL 2022")]
    API -->|Render Vector Document (35ms)| QPDF["QuestPDF .NET 9 Engine"]
    QPDF -->|Stream PDF Stream to Response| Req`
  },
  {
    id: 'database-interceptors',
    title: '5. Database Soft-Delete, UTC Audit Interceptors & EF Core 9',
    icon: Database,
    badge: 'Persistence Tier',
    oldSystem: {
      title: 'Destructive Hard Deletes & Unstandardized Timestamps',
      items: [
        'Hard DELETE FROM queries permanently destroying historical data and breaking reporting queries.',
        'Local server timestamps (GETDATE()) causing timezone errors across distributed branches.',
        'Manual audit columns (sometimes created, often missing on child tables).',
        'No concurrency conflict detection (last write wins overwriting data).'
      ],
      risk: 'Permanent loss of audit history, broken historical accounting ledgers, and data collision bugs.'
    },
    newSystem: {
      title: 'EF Core 9 Auditable Interceptor & Global Query Filters',
      items: [
        'All domain entities inherit from BaseAuditableEntity (CreatedAtUtc, CreatedBy, LastModifiedAtUtc, IsDeleted).',
        'SaveChangesAsync interceptor automatically stamps UTC times and user identities on every insert/update.',
        'Global Query Filters (modelBuilder.Entity<T>().HasQueryFilter(e => !e.IsDeleted)) prevent deleted data leaks.'
      ],
      benefit: 'Guaranteed 100% audit trail compliance, zero accidental data loss, and point-in-time recovery.'
    },
    betterProcessAdvice: {
      headline: 'Proactive Advisory: Enable Row-Level Concurrency Tokens with [Timestamp] RowVersion',
      description: 'Add a byte[] RowVersion column to critical financial and grading tables. EF Core 9 uses this as an optimistic concurrency token to reject concurrent edits with a friendly conflict message.',
      roi: 'Prevents concurrent write overwrites in multi-user environments without complex pessimistic DB locks.'
    },
    mermaidDiagram: `flowchart TD
    App["Entity Mutation (e.g. Student Updated)"] --> SaveChanges["dbContext.SaveChangesAsync()"]
    SaveChanges --> Interceptor["AuditableEntitySaveChangesInterceptor"]
    Interceptor --> SetAudit["Set LastModifiedAtUtc = DateTime.UtcNow\\nSet LastModifiedBy = currentUser.Id"]
    SetAudit --> SqlUpdate["Execute UPDATE tbl_StudentInfo SET ..."]
    SqlUpdate --> DB[("MS SQL 2022")]`
  }
];

interface GlobalSystemExplorerProps {
  projectId: string;
  projectName: string;
}

export const GlobalSystemExplorer: React.FC<GlobalSystemExplorerProps> = ({ projectId, projectName }) => {
  const [activeTab, setActiveTab] = useState<string>('dynamic-nav');

  const activeSystem = GLOBAL_SYSTEMS.find(s => s.id === activeTab) || GLOBAL_SYSTEMS[0];
  const IconComponent = activeSystem.icon;

  return (
    <div className="mb-4">
      <Card
        title="🌐 Global Infrastructure & Non-Page Modernization Explorer"
        subtitle="Compare Legacy Architectures vs Modern .NET 9 / React 19 Systems with Proactive 'Better Process' Engineering Advisories (Pillar 3.2)."
        badge={<span className="badge bg-primary rounded-pill font-monospace">5 Core Global Systems</span>}
      >
        {/* Navigation Tabs */}
        <div className="d-flex align-items-center gap-2 overflow-auto pb-3 mb-3 border-bottom flex-nowrap">
          {GLOBAL_SYSTEMS.map((sys) => {
            const TabIcon = sys.icon;
            const isActive = activeTab === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveTab(sys.id)}
                className={`btn btn-sm text-nowrap rounded-pill px-3 py-1.5 fs-12 d-inline-flex align-items-center gap-1.5 transition ${
                  isActive ? 'btn-primary shadow-sm fw-bold' : 'btn-light border text-muted'
                }`}
              >
                <TabIcon size={14} />
                <span>{sys.title.split('.')[1]?.trim() || sys.title}</span>
              </button>
            );
          })}
        </div>

        {/* System Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="p-2.5 bg-primary-subtle text-primary rounded-circle">
              <IconComponent size={24} />
            </div>
            <div>
              <h5 className="fw-bold mb-0 text-dark">{activeSystem.title}</h5>
              <span className="badge bg-secondary-subtle text-secondary font-monospace fs-11 mt-1">
                Tier: {activeSystem.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Box */}
        <div className="row g-3 mb-4">
          {/* Old Legacy Box */}
          <div className="col-md-6">
            <div className="card h-100 border border-danger-subtle bg-danger-subtle bg-opacity-10 rounded-3 shadow-none p-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="badge bg-danger rounded-pill px-2 py-1 fs-11">🔴 OLD LEGACY SYSTEM</div>
                <h6 className="fw-bold text-danger mb-0">{activeSystem.oldSystem.title}</h6>
              </div>
              <ul className="fs-13 ps-3 mb-3 text-secondary">
                {activeSystem.oldSystem.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <div className="mt-auto p-2 bg-white rounded-2 border border-danger-subtle d-flex align-items-start gap-2 fs-12 text-danger">
                <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
                <div><strong>Architecture Risk:</strong> {activeSystem.oldSystem.risk}</div>
              </div>
            </div>
          </div>

          {/* Modern Solution Box */}
          <div className="col-md-6">
            <div className="card h-100 border border-success-subtle bg-success-subtle bg-opacity-10 rounded-3 shadow-none p-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="badge bg-success rounded-pill px-2 py-1 fs-11">🟢 MODERNIZED SYSTEM</div>
                <h6 className="fw-bold text-success mb-0">{activeSystem.newSystem.title}</h6>
              </div>
              <ul className="fs-13 ps-3 mb-3 text-secondary">
                {activeSystem.newSystem.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <div className="mt-auto p-2 bg-white rounded-2 border border-success-subtle d-flex align-items-start gap-2 fs-12 text-success">
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" />
                <div><strong>Engineering Benefit:</strong> {activeSystem.newSystem.benefit}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Proactive "Better Process" Advisory Ribbon */}
        <div className="card border-0 bg-primary-subtle rounded-3 p-3 mb-4 border-start border-4 border-primary">
          <div className="d-flex align-items-start gap-3">
            <div className="p-2 bg-primary text-white rounded-circle flex-shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge bg-primary text-white font-monospace fs-10 text-uppercase">Rule 3.2 Advisory</span>
                <h6 className="fw-bold text-primary mb-0">{activeSystem.betterProcessAdvice.headline}</h6>
              </div>
              <p className="fs-13 text-dark mb-2">{activeSystem.betterProcessAdvice.description}</p>
              <div className="badge bg-white text-primary border border-primary-subtle font-monospace fs-11 px-2 py-1">
                ⚡ ROI Impact: {activeSystem.betterProcessAdvice.roi}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visual Mermaid Architecture Flowchart */}
        <MermaidViewer
          chart={activeSystem.mermaidDiagram}
          title={`${activeSystem.title} Visual Architecture Flow`}
        />
      </Card>
    </div>
  );
};
