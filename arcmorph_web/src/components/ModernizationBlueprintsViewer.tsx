import React, { useState } from 'react';
import { FileText, Copy, Check, Download, Sparkles, BookOpen, Layers, Code, ShieldCheck, Database, Route, Terminal, Scale, HelpCircle } from 'lucide-react';

interface BlueprintFile {
  id: string;
  name: string;
  title: string;
  content: string;
  sizeFormatted: string;
}

interface ModernizationBlueprintsViewerProps {
  blueprints?: BlueprintFile[];
  projectName: string;
}

export const ModernizationBlueprintsViewer: React.FC<ModernizationBlueprintsViewerProps> = ({
  blueprints = [],
  projectName
}) => {
  const [activeTab, setActiveTab] = useState<string>(blueprints[0]?.id || '01');
  const [copied, setCopied] = useState(false);

  // Fallback default blueprints if not yet compiled
  const defaultBlueprints: BlueprintFile[] = [
    {
      id: '01',
      name: '01_NEW_PROJECT_FLOW.md',
      title: '1. New Project Flow',
      sizeFormatted: '8.4 KB',
      content: `# 🔄 Modern Project Flow & Decoupled Architecture\n\n**Target Ecosystem:** .NET 9 Web API + React 19 + MS SQL 2022 + QuestPDF\n\n## 🏗️ 1. Modern Execution Flow\nStateless REST APIs with TanStack React Query caching replacing legacy synchronous WebForms postbacks.`
    },
    {
      id: '02',
      name: '02_SOFTWARE_REQUIREMENTS_SPECIFICATION.md',
      title: '2. Software Requirements (SRS)',
      sizeFormatted: '18.2 KB',
      content: `# 📄 Software Requirements Specification (SRS)\n\n**Standard:** IEEE 830 Formatted Specification\n\n## 🎯 1. Functional & Non-Functional Requirements\nComplete specifications of user stories, acceptance criteria, and action-level RBAC matrices.`
    },
    {
      id: '03',
      name: '03_USER_JOURNEYS_AND_NAVIGATION.md',
      title: '3. Modern User Journeys & Route Map',
      sizeFormatted: '12.6 KB',
      content: `# 🗺️ Modern User Journeys & Route Navigation Map\n\nComplete step-by-step page transitions, breadcrumb paths, modal dialogues, and instant client-side typeahead search dropdowns.`
    },
    {
      id: '04',
      name: '04_MODERN_DATABASE_DESIGN_EFCORE9.md',
      title: '4. Modern Database Design & EF Core 9',
      sizeFormatted: '24.1 KB',
      content: `# 🗄️ Modern Database Design & EF Core 9 Models\n\nNormalized SQL Server 2022 schema, EF Core 9 Code-First entities, soft-delete global query filters, and UTC audit fields.`
    },
    {
      id: '05',
      name: '05_CLEAN_ARCHITECTURE_SPECIFICATION.md',
      title: '5. Clean Architecture Specification',
      sizeFormatted: '14.8 KB',
      content: `# 🏛️ Clean Architecture & MediatR CQRS Specification\n\n.NET 9 Web API Clean Architecture blueprint with MediatR feature slices, FluentValidation, and Serilog structured logging.`
    },
    {
      id: '06',
      name: '06_MASTER_AUTONOMOUS_BUILDER_PROMPT.md',
      title: '6. Master Autonomous AI Builder Prompt',
      sizeFormatted: '9.2 KB',
      content: `# 🤖 Master Autonomous AI Builder Prompt\n\nZero-hallucination master prompt engineered for Antigravity / Claude Code to scaffold and generate the complete modern codebase.`
    },
    {
      id: '07',
      name: '07_LEGACY_USER_ACTION_AND_BEHAVIORAL_MAP.md',
      title: '7. Legacy User Action & Blocker Map',
      sizeFormatted: '16.5 KB',
      content: `# 🧭 Legacy User Action & Pre-Condition Remediation Map\n\nModule-by-module breakdown of UI actions, post-submit routes, and prerequisite blocker navigation remediation.`
    },
    {
      id: '08',
      name: '08_LEGACY_VS_MODERN_TRANSITION_MATRIX.md',
      title: '8. Legacy vs Modern Transition Matrix',
      sizeFormatted: '11.0 KB',
      content: `# ⚖️ Legacy vs Modern Behavioral Transition Matrix\n\nSide-by-side comparison table of what the user used to do in legacy WebForms vs what they will do in modern .NET 9 + React 19.`
    }
  ];

  const filesList = blueprints.length > 0 ? blueprints : defaultBlueprints;
  const currentFile = filesList.find(f => f.id === activeTab) || filesList[0];

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTabIcon = (id: string) => {
    switch (id) {
      case '01': return <Route size={14} className="me-1" />;
      case '02': return <BookOpen size={14} className="me-1" />;
      case '03': return <Layers size={14} className="me-1" />;
      case '04': return <Database size={14} className="me-1" />;
      case '05': return <Code size={14} className="me-1" />;
      case '06': return <Terminal size={14} className="me-1 text-primary" />;
      case '07': return <HelpCircle size={14} className="me-1 text-warning" />;
      case '08': return <Scale size={14} className="me-1 text-success" />;
      default: return <FileText size={14} className="me-1" />;
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
            <Sparkles size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">8 Modernization Engineering Blueprints</h5>
              <span className="badge bg-success text-white rounded-pill font-monospace fs-11">
                Production-Ready Specifications
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Standardized engineering documents required to construct the modern .NET 9 + React 19 + MS SQL 2022 solution.
            </p>
          </div>
        </div>

        {/* Copy & Download Controls */}
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => copyContent(currentFile?.content || '')}
            className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1.5 fs-12 d-inline-flex align-items-center gap-1.5"
          >
            {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy Blueprint Markdown'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Switcher Strip */}
      <div className="card-body border-bottom p-3 bg-light-subtle">
        <div className="d-flex align-items-center gap-1.5 overflow-x-auto pb-1">
          {filesList.map(file => (
            <button
              key={file.id}
              onClick={() => setActiveTab(file.id)}
              className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 transition text-nowrap d-inline-flex align-items-center ${
                activeTab === file.id ? 'btn-success fw-bold shadow-sm' : 'btn-outline-secondary bg-white'
              }`}
            >
              {getTabIcon(file.id)}
              <span>{file.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Markdown Content Viewer */}
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <FileText size={18} className="text-success" />
            <strong className="text-dark font-monospace fs-13">{currentFile?.name}</strong>
          </div>
          <span className="badge bg-light text-muted font-monospace fs-11">
            Size: {currentFile?.sizeFormatted}
          </span>
        </div>

        <div className="bg-light p-4 rounded-4 border fs-13" style={{ maxHeight: '520px', overflowY: 'auto' }}>
          <pre className="text-dark font-sans mb-0" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {currentFile?.content}
          </pre>
        </div>
      </div>
    </div>
  );
};
