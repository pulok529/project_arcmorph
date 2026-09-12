import React, { useState } from 'react';
import { Server, Layout, Database, Printer, Clock, Container, ShieldCheck, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface EnterpriseTechStackViewerProps {
  techStack?: any;
  projectName: string;
  chosenTheme: string;
}

export const EnterpriseTechStackViewer: React.FC<EnterpriseTechStackViewerProps> = ({
  techStack,
  projectName,
  chosenTheme
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTier, setActiveTier] = useState<string>('all');

  const tiers = techStack?.tiers || [
    {
      id: 'frontend',
      number: 1,
      title: 'FRONTEND ARCHITECTURE',
      badge: 'React 19 + TypeScript',
      icon: <Layout size={18} className="text-primary" />,
      items: [
        { label: 'Core Framework', value: 'React 19 (SPA & PWA) with Strict TypeScript' },
        { label: 'Build Tool & Bundler', value: 'Vite 5 (Hot Module Replacement & Tree-Shaking)' },
        { label: 'Routing & Navigation', value: 'React Router v7 (with Granular RoleRouteGuard & Action Guards)' },
        { label: 'UI Design System & Styling', value: `Bootstrap 5.3 + Custom SCSS + 25 Paces Theme Skins (Active: '${chosenTheme}')` },
        { label: 'Iconography', value: 'Tabler Icons + Remix Icons + Lucide React' },
        { label: 'State & Server Sync', value: 'TanStack Query (React Query v5) + Axios HTTP Client' },
        { label: 'UI File Uploads', value: 'FilePond & React Dropzone (Multi-chunk binary upload)' },
        { label: 'Interactive Visuals & Charts', value: 'ApexCharts & ECharts (High-density telemetry & analytics)' },
        { label: 'Alerts & Dialogs', value: 'SweetAlert2 & React-Hot-Toast (Accessible modals)' }
      ]
    },
    {
      id: 'backend',
      number: 2,
      title: 'BACKEND & APIS',
      badge: '.NET 9 (C# 13)',
      icon: <Server size={18} className="text-success" />,
      items: [
        { label: 'Core Framework', value: '.NET 9 ASP.NET Core Web API (Clean Architecture + MediatR CQRS)' },
        { label: 'Language Version', value: 'C# 13 with Nullable Reference Types & Pattern Matching' },
        { label: 'Authentication & Tokens', value: 'JWT Bearer Authentication (ASP.NET Core Identity + Secure Refresh Tokens)' },
        { label: 'Real-Time & WebSockets', value: 'SignalR Core (.NET 9 Hubs for live dashboard push & telemetry)' },
        { label: 'Security & Permissions', value: 'Granular Action-Level RBAC (Role, Module, Action, Tenant DataScope)' },
        { label: 'API Documentation & Contracts', value: 'OpenAPI 3.1 & Scalar / Swagger UI with XML doc comments' },
        { label: 'Resilience & Middleware', value: 'Global Exception Handler, Serilog Structured Logging, Rate Limiting, Request ID' }
      ]
    },
    {
      id: 'reporting',
      number: 3,
      title: 'AI, REPORTING & DOCUMENT GENERATION',
      badge: 'QuestPDF .NET 9',
      icon: <Printer size={18} className="text-warning" />,
      items: [
        { label: 'Legal & Report Engine', value: 'QuestPDF 2024.12 (.NET 9 C# Fluent Code-First Document API, replaces binary .rpt)' },
        { label: 'In-Browser PDF Preview', value: 'React-PDF / PDF.js Vector Engine (Instant client-side rendering with 0 plugins)' },
        { label: 'Barcode & QR Code Engine', value: 'ZXing.Net (.NET 9) with QR Code & Code 128 generators' },
        { label: 'Typography & Internationalization', value: 'TrueType Unicode font embedding & multi-language ligatures' },
        { label: 'Data Push Architecture', value: 'Strongly-typed DTO ViewModels (0 runtime ODBC connection crashes)' }
      ]
    },
    {
      id: 'database',
      number: 4,
      title: 'DATABASES & STORAGE',
      badge: 'MS SQL Server 2022',
      icon: <Database size={18} className="text-info" />,
      items: [
        { label: 'Primary Relational Database', value: 'Microsoft SQL Server 2022 / Azure SQL (v16.0 / Compatibility Level 160)' },
        { label: 'ORM & Data Access', value: 'Entity Framework Core 9 (Code-First Migrations) & Dapper (High-Throughput Reads)' },
        { label: 'Auditing & Soft Deletion', value: 'Global EF Core Query Filters (IsDeleted, CreatedAtUtc, CreatedBy, UpdatedAtUtc)' },
        { label: 'Caching & Distributed State', value: 'Redis 7.2 (StackExchange.Redis + MemoryCache L1/L2)' },
        { label: 'Blob / Document Storage', value: 'MinIO / Azure Blob Storage / AWS S3 (Secure Pre-Signed URL Access)' }
      ]
    },
    {
      id: 'async',
      number: 5,
      title: 'ASYNC WORKERS & BACKGROUND JOBS',
      badge: 'Hangfire & Quartz.NET',
      icon: <Clock size={18} className="text-danger" />,
      items: [
        { label: 'Background Job Engine', value: 'Hangfire / Quartz.NET 3.x (.NET 9 Hosted Background Services)' },
        { label: 'Periodic Schedulers', value: 'Cron-based automated report batch generators & email notifications' },
        { label: 'Event-Driven Messaging', value: 'MassTransit (RabbitMQ / Azure Service Bus messaging pipeline)' }
      ]
    },
    {
      id: 'devops',
      number: 6,
      title: 'DEVOPS, SECURITY & CONTAINERIZATION',
      badge: 'Docker & Microservices',
      icon: <Container size={18} className="text-primary" />,
      items: [
        { label: 'Container Engine', value: 'Docker & Docker Compose (Multi-stage chiseled Ubuntu .NET 9 image)' },
        { label: 'Reverse Proxy & TLS', value: 'Nginx / YARP (Microsoft Yet Another Reverse Proxy)' },
        { label: 'Security Standard', value: 'OWASP Top 10 compliance, Content Security Policy (CSP), Anti-CSRF tokens' }
      ]
    },
    {
      id: 'qa',
      number: 7,
      title: 'TESTING & QUALITY ASSURANCE',
      badge: 'Playwright & xUnit',
      icon: <ShieldCheck size={18} className="text-success" />,
      items: [
        { label: 'E2E Automation Suite', value: 'Playwright E2E Automation (with continuous 1080p Full-HD video recording & trace)' },
        { label: 'Backend Unit & Integration', value: 'xUnit, FluentAssertions, Moq, Testcontainers (MS SQL Server container)' },
        { label: 'Code Quality & Linting', value: 'Roslyn Analyzers (.editorconfig) + ESLint & Prettier' }
      ]
    }
  ];

  const exportAsText = () => {
    let text = `======================================================================\n`;
    text += `  ${(projectName || 'ENTERPRISE').toUpperCase()} SUITE — TARGET TECH STACK SPECIFICATION\n`;
    text += `======================================================================\n\n`;

    tiers.forEach((t: any) => {
      text += `${t.number}. ${t.title} [${t.badge}]\n`;
      t.items.forEach((item: any) => {
        text += `   • ${item.label}: ${item.value}\n`;
      });
      text += `\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTiers = activeTier === 'all' ? tiers : tiers.filter((t: any) => t.id === activeTier);

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <Server size={18} className="text-primary" />
            <h5 className="fw-bold mb-0 text-dark">Target Enterprise Tech Stack Specification</h5>
            <span className="badge bg-primary text-white rounded-pill font-monospace fs-10">7-Tier Architecture</span>
          </div>
          <p className="text-muted fs-13 mb-0">
            Enterprise .NET 9 + MS SQL 2022 + QuestPDF + React 19 (Paces Bootstrap 5) specification matching production standards.
          </p>
        </div>

        <button
          onClick={exportAsText}
          className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold d-inline-flex align-items-center gap-1.5"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied Specification!' : 'Copy Spec Text'}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="card-header bg-light py-2 px-4 border-bottom">
        <ul className="nav nav-pills gap-1">
          <li className="nav-item">
            <button
              onClick={() => setActiveTier('all')}
              className={`nav-link py-1 px-2.5 fs-12 rounded-pill ${activeTier === 'all' ? 'active fw-bold' : ''}`}
            >
              All 7 Tiers
            </button>
          </li>
          {tiers.map((t: any) => (
            <li key={t.id} className="nav-item">
              <button
                onClick={() => setActiveTier(t.id)}
                className={`nav-link py-1 px-2.5 fs-12 rounded-pill ${activeTier === t.id ? 'active fw-bold' : ''}`}
              >
                {t.number}. {t.title.split(' ')[0]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tiers Content (Scrollable Container) */}
      <div className="card-body p-3" style={{ maxHeight: '420px', overflowY: 'auto' }}>
        <div className="vstack gap-3">
          {filteredTiers.map((t: any) => (
            <div key={t.id} className="card border rounded-3 shadow-none overflow-hidden mb-0">
              <div className="card-header bg-light py-2 px-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary rounded-circle p-0 d-flex align-items-center justify-content-center font-monospace" style={{ width: '22px', height: '22px' }}>
                    {t.number}
                  </span>
                  <span className="fw-bold fs-13 text-dark">{t.title}</span>
                </div>
                <span className="badge bg-primary-subtle text-primary font-monospace fs-11">
                  {t.badge}
                </span>
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-sm table-hover align-middle mb-0 fs-12">
                    <tbody>
                      {t.items.map((item: any, itemIdx: number) => (
                        <tr key={itemIdx}>
                          <td className="ps-3 fw-semibold text-muted" style={{ width: '230px' }}>
                            • {item.label}
                          </td>
                          <td className="pe-3 font-monospace text-dark">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
