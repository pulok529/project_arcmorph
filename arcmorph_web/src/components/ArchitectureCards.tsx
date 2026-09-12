import React from 'react';
import { Layers, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface ArchitectureCardsProps {
  detectedTech: string[];
  selectedArch: string;
  onSelectArch: (archKey: string) => void;
  chosenTheme: string;
}

export const ArchitectureCards: React.FC<ArchitectureCardsProps> = ({
  detectedTech,
  selectedArch,
  onSelectArch,
  chosenTheme
}) => {
  const architectures = [
    {
      id: 'dotnet9',
      name: 'Option 1: Native C# .NET 9 Evolution',
      badge: 'Recommended Standard',
      isPrimary: true,
      backend: '.NET 9 ASP.NET Core Web API (Clean Architecture + MediatR CQRS)',
      database: 'MS SQL Server 2022 + EF Core 9 (Code-First Migrations) & Dapper',
      reporting: '100% C# Code-First QuestPDF Engine + React PDF Viewer',
      frontend: `React 19 + TypeScript (paces/3_react_template - Theme: '${chosenTheme}')`,
      description: 'Preserves 100% of your existing C# business rules while moving to high-speed cloud-native .NET 9.'
    },
    {
      id: 'python_fastapi',
      name: 'Option 2: Python Enterprise Stack',
      badge: 'High AI / Data Suitability',
      isPrimary: false,
      backend: 'Python FastAPI / Django Ninja (Async Pydantic v2 + Dependency Injection)',
      database: 'PostgreSQL / MS SQL 2022 + SQLAlchemy 2.0 & Alembic Migrations',
      reporting: 'WeasyPrint / ReportLab PDF Service + React Viewer',
      frontend: `React 19 + TypeScript (paces/3_react_template - Theme: '${chosenTheme}')`,
      description: 'Ideal if you plan to integrate Python AI agents, machine learning pipelines, or data science models.'
    },
    {
      id: 'node_nestjs',
      name: 'Option 3: TypeScript / Node Enterprise Stack',
      badge: 'Fullstack TypeScript',
      isPrimary: false,
      backend: 'NestJS / Fastify (Modular Architecture + Class-Validator)',
      database: 'PostgreSQL / MS SQL 2022 + Prisma ORM (Type-Safe Client)',
      reporting: '@react-pdf/renderer Serverless PDF Worker',
      frontend: `React 19 + TypeScript (paces/3_react_template - Theme: '${chosenTheme}')`,
      description: 'Single-language TypeScript codebase across both frontend and backend for rapid developer velocity.'
    },
    {
      id: 'go_fiber',
      name: 'Option 4: Go High-Performance Stack',
      badge: 'Ultra-Low Latency',
      isPrimary: false,
      backend: 'Go (Fiber / Gin) + Hexagonal Architecture',
      database: 'PostgreSQL / MS SQL 2022 + GORM / sqlc',
      reporting: 'Maroto Go PDF Generator + React Viewer',
      frontend: `React 19 + TypeScript (paces/3_react_template - Theme: '${chosenTheme}')`,
      description: 'Extreme throughput, microsecond API latency, and tiny memory footprint.'
    }
  ];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <Layers size={18} className="text-primary" />
            <h5 className="fw-bold mb-0 text-dark">Target Modern Architecture Blueprints</h5>
          </div>
          <p className="text-muted fs-13 mb-0">
            Select your preferred target modernization stack. All 4 blueprints are fully standardized and generated.
          </p>
        </div>

        <div className="d-flex align-items-center gap-1.5 flex-wrap">
          <span className="text-muted fs-12 me-1">Detected Legacy:</span>
          {detectedTech.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="badge bg-secondary-subtle text-secondary font-monospace fs-11">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Grid of 4 Architecture Cards */}
      <div className="card-body p-4">
        <div className="row g-3">
          {architectures.map((arch) => {
            const isSelected = selectedArch === arch.id;
            return (
              <div key={arch.id} className="col-lg-6">
                <div
                  onClick={() => onSelectArch(arch.id)}
                  className={`card h-100 rounded-3 cursor-pointer transition border-2 ${
                    isSelected
                      ? 'border-primary bg-primary-subtle shadow-sm'
                      : 'border bg-white hover-border-primary'
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body p-3.5 d-flex flex-column justify-content-between">
                    
                    <div>
                      {/* Top title & Badge */}
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-bold mb-0 text-dark">{arch.name}</h6>
                        <span className={`badge ${arch.isPrimary ? 'bg-success text-white' : 'bg-secondary text-white'} rounded-pill fs-10 font-monospace`}>
                          {arch.badge}
                        </span>
                      </div>

                      <p className="text-muted fs-12 mb-3">{arch.description}</p>

                      {/* Tech specifications list */}
                      <div className="vstack gap-1.5 fs-12 mb-3">
                        <div className="d-flex align-items-start gap-2">
                          <span className="text-muted fw-semibold" style={{ minWidth: '70px' }}>Backend:</span>
                          <span className="text-dark font-monospace fs-11">{arch.backend}</span>
                        </div>
                        <div className="d-flex align-items-start gap-2">
                          <span className="text-muted fw-semibold" style={{ minWidth: '70px' }}>Database:</span>
                          <span className="text-dark font-monospace fs-11">{arch.database}</span>
                        </div>
                        <div className="d-flex align-items-start gap-2">
                          <span className="text-muted fw-semibold" style={{ minWidth: '70px' }}>Reports:</span>
                          <span className="text-dark font-monospace fs-11">{arch.reporting}</span>
                        </div>
                        <div className="d-flex align-items-start gap-2">
                          <span className="text-muted fw-semibold" style={{ minWidth: '70px' }}>Frontend:</span>
                          <span className="text-primary font-monospace fs-11">{arch.frontend}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Button */}
                    <div className="pt-2 border-top d-flex align-items-center justify-content-between">
                      <span className="text-muted fs-11">
                        {isSelected ? '✓ Currently Selected Architecture' : 'Click to select this target stack'}
                      </span>
                      <button
                        type="button"
                        className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill px-3 fw-bold`}
                      >
                        {isSelected ? 'Selected' : 'Choose Stack'}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
