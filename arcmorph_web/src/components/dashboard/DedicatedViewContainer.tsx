import React from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Layers,
  Sparkles,
  LayoutGrid,
  ChevronDown,
  FolderOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ViewOption {
  id: string;
  title: string;
  category: string;
}

export interface DedicatedViewContainerProps {
  title: string;
  category: string;
  description?: string;
  badge?: string;
  currentViewId: string;
  viewOptions: ViewOption[];
  projectId: string;
  onBack: () => void;
  onSelectView: (viewId: string) => void;
  onOpenOverviewV1: () => void;
  onOpenOverviewV2: () => void;
  children: React.ReactNode;
}

export const DedicatedViewContainer: React.FC<DedicatedViewContainerProps> = ({
  title,
  category,
  description,
  badge,
  currentViewId,
  viewOptions,
  projectId,
  onBack,
  onSelectView,
  onOpenOverviewV1,
  onOpenOverviewV2,
  children
}) => {
  return (
    <div className="d-flex flex-column gap-3 pb-5">
      {/* Sticky Top Workbench Control Bar */}
      <div
        className="card border-0 shadow-sm rounded-4 p-3 bg-white sticky-top mb-1"
        style={{
          zIndex: 1020,
          border: '1px solid #e2e8f0',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          {/* Left: Breadcrumbs & Return Button */}
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <button
              onClick={onBack}
              className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 shadow-sm"
              title="Return to Executive Widget Hub (Esc)"
            >
              <ArrowLeft size={14} />
              <span>Back to Dashboard</span>
            </button>

            <span className="text-muted">/</span>

            <span className="badge bg-slate-100 text-slate-700 font-monospace fs-11 px-2.5 py-1">
              {category}
            </span>

            <ChevronRight size={14} className="text-muted" />

            {/* Quick Switch Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-sm btn-light rounded-pill px-3 py-1.5 fs-13 fw-bold dropdown-toggle d-flex align-items-center gap-1.5 border"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <LayoutGrid size={14} className="text-indigo-600" />
                <span className="text-slate-900">{title}</span>
                <ChevronDown size={13} className="text-muted ms-1" />
              </button>
              <ul
                className="dropdown-menu shadow-lg border-0 rounded-3 p-2"
                style={{ maxHeight: '380px', overflowY: 'auto', minWidth: '280px' }}
              >
                <li className="dropdown-header text-uppercase fs-11 fw-bold text-muted px-2 py-1">
                  Switch Modernization Studio
                </li>
                {viewOptions.map((opt) => (
                  <li key={opt.id}>
                    <button
                      onClick={() => onSelectView(opt.id)}
                      className={`dropdown-item rounded-2 py-1.5 px-2.5 fs-12 d-flex align-items-center justify-content-between ${
                        opt.id === currentViewId ? 'bg-indigo-50 text-indigo-700 fw-bold' : 'text-slate-700'
                      }`}
                    >
                      <span>{opt.title}</span>
                      <span className="badge bg-slate-100 text-slate-500 fs-10 font-monospace ms-2">
                        {opt.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {badge && (
              <span className="badge bg-indigo-50 text-indigo-700 border border-indigo-200 font-monospace fs-11 px-2.5 py-1">
                {badge}
              </span>
            )}
          </div>

          {/* Right: Quick Action Modals & Links */}
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={onOpenOverviewV2}
              className="btn btn-primary btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1.5 px-3 py-1.5 text-white"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none'
              }}
              title="Open Overview v2 (Type-Aware Polymorphic Studio & UI Entity Hubs)"
            >
              <Layers size={14} className="text-white" />
              <span className="fw-bold">🚀 Overview v2</span>
              <span className="badge bg-white text-indigo-700 rounded-pill fs-10 ms-1 font-monospace" style={{ backgroundColor: '#ffffff', color: '#4338ca', padding: '2px 7px' }}>Studio</span>
            </button>

            <button
              onClick={onOpenOverviewV1}
              className="btn btn-warning btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1.5 px-3 py-1.5 text-white"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                border: 'none'
              }}
              title="Open Architecture & Operational Entity TreeView Explorer (v1)"
            >
              <Sparkles size={14} className="text-white" />
              <span className="fw-bold">Overview v1</span>
            </button>

            <Link
              to={`/project/${projectId}/files`}
              className="btn btn-light btn-sm rounded-pill fw-bold border px-3 py-1.5 d-inline-flex align-items-center gap-1.5 text-slate-700"
            >
              <FolderOpen size={14} />
              <span>Files</span>
            </Link>
          </div>
        </div>

        {description && (
          <div className="mt-2 pt-2 border-top border-slate-100 fs-12 text-slate-600">
            {description}
          </div>
        )}
      </div>

      {/* Main Studio Content Body */}
      <div className="w-100">
        {children}
      </div>
    </div>
  );
};
