import React, { useState } from 'react';
import { Compass, BookOpen, Layers, GitBranch, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

interface ReverseEngineeringStrategyViewerProps {
  projectName: string;
}

export const ReverseEngineeringStrategyViewer: React.FC<ReverseEngineeringStrategyViewerProps> = ({
  projectName
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Phase 1: Semantic AST Deconstruction & Inventory',
      subtitle: 'Extracting UI Controls & C# Logic Without Modifying Legacy Code',
      badge: 'Completed Automatically',
      badgeClass: 'bg-success',
      points: [
        'Parse every .aspx/.cshtml file into a normalized AST control inventory (Textboxes, Dropdowns, GridViews, Validators).',
        'Analyze C# code-behind event handlers (btnSave_Click, Page_Load) to isolate business transactions from UI postbacks.',
        'Extract embedded SQL statements and ADO.NET Stored Procedure calls.'
      ]
    },
    {
      step: 2,
      title: 'Phase 2: Database Modernization & EF Core 9 Code-First',
      subtitle: 'Converting .BAK Database Schemas into Modern C# 13 Entities',
      badge: 'Database Layer',
      badgeClass: 'bg-primary',
      points: [
        'Restore or parse .BAK headers to map all relational tables, foreign keys, indexes, and primary keys.',
        'Generate Entity Framework Core 9 Code-First entities with audit fields (CreatedAtUtc, UpdatedAtUtc, IsDeleted).',
        'Configure AppDbContext with Fluent API relationships and global soft-delete query filters.'
      ]
    },
    {
      step: 3,
      title: 'Phase 3: Clean Architecture & MediatR CQRS Backend (.NET 9)',
      subtitle: 'Transforming Spaghetti Code-Behind into Vertical Slice CQRS',
      badge: 'API & Business Logic',
      badgeClass: 'bg-info',
      points: [
        'Organize features into Vertical Slices: Features/{FeatureName}/Commands and Features/{FeatureName}/Queries.',
        'Implement MediatR handlers with FluentValidation pipelines and Serilog structured logging.',
        'Expose OpenAPI 3.1 REST endpoints with JWT bearer authentication and granular Action-Level RBAC.'
      ]
    },
    {
      step: 4,
      title: 'Phase 4: Crystal Reports (.rpt) Replacement with QuestPDF',
      subtitle: 'Zero-Dependency C# Code-First Vector PDF Document Engine',
      badge: 'Reporting Layer',
      badgeClass: 'bg-warning',
      points: [
        'Decompile binary .rpt formulas and dataset schemas into QuestPDF IDocument implementations.',
        'Render pixel-perfect PDF reports using C# Fluent API (.Header(), .Content(), .Footer()).',
        'Stream binary PDF vectors directly to the browser for instant React in-browser preview with print/download.'
      ]
    },
    {
      step: 5,
      title: 'Phase 5: React 19 Frontend with Paces Design System',
      subtitle: 'Building Modern Responsive UI with React Hook Form + TanStack Query',
      badge: 'Frontend Layer',
      badgeClass: 'bg-purple',
      points: [
        'Scaffold React 19 pages using Paces Bootstrap 5 skins (Datatables, Dropzones, Modals, Tabs).',
        'Replace ASP.NET ViewState with React Hook Form + Zod client validation.',
        'Connect TanStack Query (React Query v5) to ASP.NET Core 9 Web APIs for optimistic updates and caching.'
      ]
    },
    {
      step: 6,
      title: 'Phase 6: Strangler Fig Deployment with YARP Reverse Proxy',
      subtitle: 'Zero-Downtime Incremental Production Migration',
      badge: 'DevOps & Deployment',
      badgeClass: 'bg-secondary',
      points: [
        'Deploy YARP (Yet Another Reverse Proxy) in front of legacy IIS and the new .NET 9 + React service.',
        'Route modernized routes (e.g. /students, /reports) to the new React app while legacy routes remain intact.',
        'Migrate feature by feature until 100% of legacy WebForms pages are decommissioned.'
      ]
    }
  ];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
            <Compass size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Enterprise Reverse-Engineering & Modernization Strategy Guide</h5>
              <span className="badge bg-primary text-white rounded-pill font-monospace fs-10">
                Industry Best Practice
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              The 6-Phase Microsoft & Industry Standard Blueprint for modernizing {projectName} from legacy ASP.NET WebForms to .NET 9 + React 19.
            </p>
          </div>
        </div>
      </div>

      {/* Step Grid */}
      <div className="card-body p-4">
        <div className="row g-3 mb-4">
          {steps.map((s) => (
            <div key={s.step} className="col-md-4 col-sm-6">
              <div
                onClick={() => setActiveStep(s.step)}
                className={`card p-3 h-100 rounded-3 border cursor-pointer transition ${
                  activeStep === s.step ? 'border-primary bg-primary-subtle shadow-sm' : 'hover-bg-light'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className={`badge ${s.badgeClass} rounded-pill font-monospace fs-10 text-white`}>
                    Step {s.step}
                  </span>
                  <span className="text-muted fs-11 font-monospace">{s.badge}</span>
                </div>
                <h6 className="fw-bold text-dark fs-13 mb-1">{s.title.split(':')[1] || s.title}</h6>
                <small className="text-muted fs-11">{s.subtitle}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Details */}
        {steps.filter(s => s.step === activeStep).map((s) => (
          <div key={s.step} className="border rounded-4 p-4 bg-light">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
              <div>
                <span className={`badge ${s.badgeClass} text-white font-monospace rounded-pill fs-11 mb-1`}>
                  {s.badge}
                </span>
                <h5 className="fw-bold text-dark mb-0">{s.title}</h5>
                <p className="text-muted fs-13 mb-0">{s.subtitle}</p>
              </div>
            </div>

            <div className="vstack gap-2.5">
              {s.points.map((pt, pIdx) => (
                <div key={pIdx} className="d-flex align-items-start gap-2.5 bg-white p-3 rounded-3 border">
                  <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="fs-13 text-dark">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};
