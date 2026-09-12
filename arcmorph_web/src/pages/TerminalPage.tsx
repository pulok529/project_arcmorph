import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { ProjectSummary } from '../types';

interface LogMessage {
  id: number;
  time: string;
  source: string;
  level: 'info' | 'warn' | 'success' | 'cmd' | 'engine';
  text: string;
}

export const TerminalPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get('project') || 'proj_1788642109465';

  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeStage, setActiveStage] = useState('Standby');
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const sampleScript: Array<{ stage: string; percent: number; level: LogMessage['level']; source: string; text: string }> = [
    { stage: 'Archive Extraction', percent: 5, level: 'cmd', source: 'EXTRACTOR', text: 'Spawning multi-archive decompression worker for project directory...' },
    { stage: 'Cataloging Assets', percent: 12, level: 'info', source: 'CATALOGER', text: 'Allocating directory tree: /project, /database, /reports, /config' },
    { stage: 'Cataloging Assets', percent: 18, level: 'success', source: 'CATALOGER', text: 'Cataloged: 1,288 C# source files, 443 ASPX web forms, 196 Crystal Reports (.rpt)' },
    { stage: 'AI Model Connection', percent: 25, level: 'engine', source: 'AI_ROUTER', text: 'Connecting local intelligence cluster: qwen2.5-coder-14b (Context: 32k) connected via Ollama' },
    { stage: 'AI Model Connection', percent: 32, level: 'engine', source: 'VISION_HUB', text: 'Connecting visual geometry validator: gemma-3-4b-vision initialized for Playwright screen analysis' },
    { stage: 'Roslyn AST Tracer', percent: 45, level: 'info', source: 'ROSLYN_TRACER', text: 'Compiling syntax trees... 1,288 classes parsed. Extracted 4,120 methods and 18 BLL/DAL interfaces' },
    { stage: 'Database DDL Reconstruction', percent: 55, level: 'info', source: 'MSSQL_DECOMPILER', text: 'Parsed 68 tables, 142 foreign keys, 310 stored procedures into EF Core 9 DbContext' },
    { stage: 'SonarQube & NDepend Audit', percent: 68, level: 'warn', source: 'NDEPEND', text: 'Technical debt index calculated: High coupling between UI code-behind and SQL queries. 82 cyclomatic hotspots detected' },
    { stage: 'LlamaIndex Vectorizer', percent: 78, level: 'info', source: 'LLAMA_INDEX', text: 'Vectorizing AST embeddings into in-memory index for deep semantic domain query' },
    { stage: 'Clean Architecture Synthesis', percent: 88, level: 'success', source: 'COMPILER', text: 'Synthesizing CQRS slices: Commands, Queries, Handlers, and DTO mappings generated' },
    { stage: 'Playwright Vision Gate', percent: 95, level: 'success', source: 'PLAYWRIGHT', text: 'Traversing 443 simulated views: 0 X/Y layout collisions verified across desktop, tablet, and mobile' },
    { stage: 'Finalization', percent: 100, level: 'success', source: 'ARCMORPH', text: 'SUCCESS: Modernization pipeline complete. All 24 cockpit widgets populated and ready.' }
  ];

  // Auto-start if requested or load persisted logs
  useEffect(() => {
    // Check if logs already exist for this project
    const storedLogs = localStorage.getItem(`ARCMORPH_LOGS_${projectId}`);
    if (storedLogs) {
      try {
        const parsed = JSON.parse(storedLogs);
        if (parsed.length > 0) {
          setLogs(parsed);
          setProgress(100);
          setActiveStage('Completed');
          return;
        }
      } catch {
        // fallback
      }
    }

    // Run simulated telemetry stream
    setIsRunning(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < sampleScript.length) {
        const item = sampleScript[step];
        const newLog: LogMessage = {
          id: Date.now() + step,
          time: new Date().toLocaleTimeString(),
          source: item.source,
          level: item.level,
          text: item.text
        };

        setLogs(prev => {
          const updated = [...prev, newLog];
          localStorage.setItem(`ARCMORPH_LOGS_${projectId}`, JSON.stringify(updated));
          return updated;
        });

        setProgress(item.percent);
        setActiveStage(item.stage);
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);

        // Update project status to COMPLETED
        try {
          const stored = localStorage.getItem('ARCMORPH_PROJECTS');
          if (stored) {
            const projects: ProjectSummary[] = JSON.parse(stored);
            const target = projects.find(p => p.id === projectId);
            if (target) {
              target.status = 'COMPLETED';
              localStorage.setItem('ARCMORPH_PROJECTS', JSON.stringify(projects));
            }
          }
        } catch {
          // fallback
        }
      }
    }, 600);

    return () => clearInterval(interval);
  }, [projectId]);

  // Auto-scroll terminal
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleRestart = () => {
    localStorage.removeItem(`ARCMORPH_LOGS_${projectId}`);
    setLogs([]);
    setProgress(0);
    setActiveStage('Standby');
    navigate(`/terminal?project=${projectId}&t=${Date.now()}`);
  };

  return (
    <div className="container-fluid pb-5">
      <PageHeader
        title="Live Process Engine & Terminal"
        category="Telemetry Console"
        breadcrumbs={[{ label: 'Home' }, { label: 'Terminal', active: true }]}
      />

      {/* Process Header & Progress Bar */}
      <div className="card border-0 shadow-sm mb-3" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
        <div className="card-body p-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
            <div className="d-flex align-items-center gap-2">
              <span className={`badge ${isRunning ? 'bg-info text-dark' : 'bg-success text-dark'} fw-bold px-2 py-1 fs-12`}>
                <i className={`ti ${isRunning ? 'ti-loader' : 'ti-circle-check'} me-1`}></i>
                {isRunning ? 'RUNNING' : 'COMPLETED'}
              </span>
              <h5 className="text-light fw-bold mb-0">Project Analysis Stream: {projectId}</h5>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button onClick={handleRestart} className="btn btn-sm btn-outline-secondary fs-12">
                <i className="ti ti-refresh me-1"></i> Restart Stream
              </button>
              {progress === 100 && (
                <Link
                  to={`/projects/${projectId}`}
                  className="btn btn-sm fw-bold px-3 fs-12 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #10b981 100%)', color: '#0b0f19', border: 'none' }}
                >
                  <i className="ti ti-layout-grid me-1"></i> Open Project Cockpit &rarr;
                </Link>
              )}
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between fs-12 text-muted mb-1">
            <span>Current Stage: <span className="text-info fw-bold">{activeStage}</span></span>
            <span>Progress: <span className="text-light fw-bold">{progress}%</span></span>
          </div>

          <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.08)' }}>
            <div
              className={`progress-bar ${isRunning ? 'progress-bar-striped progress-bar-animated' : ''}`}
              style={{
                width: `${progress}%`,
                background: progress === 100 ? '#10b981' : 'linear-gradient(90deg, #00f2fe, #3b82f6)'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="card border-0 shadow-lg" style={{ background: '#080c14', border: '1px solid rgba(0, 242, 254, 0.25)', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Terminal Window Chrome */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-dark" style={{ background: '#0f172a' }}>
          <div className="d-flex align-items-center gap-2">
            <span className="rounded-circle" style={{ width: 10, height: 10, background: '#ef4444', display: 'inline-block' }}></span>
            <span className="rounded-circle" style={{ width: 10, height: 10, background: '#f59e0b', display: 'inline-block' }}></span>
            <span className="rounded-circle" style={{ width: 10, height: 10, background: '#10b981', display: 'inline-block' }}></span>
            <span className="ms-2 fs-12 text-muted font-monospace">arcmorph@core-engine:~/${projectId}</span>
          </div>

          <div className="d-flex align-items-center gap-3 fs-11 text-muted">
            <span><i className="ti ti-cpu text-info me-1"></i> qwen2.5-coder-14b</span>
            <span><i className="ti ti-eye text-success me-1"></i> gemma-3-4b</span>
            <span><i className="ti ti-activity text-warning me-1"></i> Roslyn AST</span>
          </div>
        </div>

        {/* Terminal Log Lines */}
        <div className="p-3 font-monospace fs-13 overflow-auto" style={{ height: '520px', color: '#e2e8f0', lineHeight: '1.6' }}>
          <div className="text-cyan mb-2">
            =========================================================================================<br />
            &nbsp;&nbsp;🚀 ARCMORPH REVERSE-ENGINEERING & MODERNIZATION PIPELINE ACTIVE<br />
            &nbsp;&nbsp;Target Architecture: .NET 9 Clean Architecture + React 19 + MS SQL 2022<br />
            =========================================================================================
          </div>

          {logs.map((log) => {
            let color = '#e2e8f0';
            let badgeColor = 'rgba(255,255,255,0.1)';
            if (log.level === 'cmd') { color = '#38bdf8'; badgeColor = 'rgba(56, 189, 248, 0.15)'; }
            if (log.level === 'success') { color = '#4ade80'; badgeColor = 'rgba(74, 222, 128, 0.15)'; }
            if (log.level === 'warn') { color = '#facc15'; badgeColor = 'rgba(250, 204, 21, 0.15)'; }
            if (log.level === 'engine') { color = '#c084fc'; badgeColor = 'rgba(192, 132, 252, 0.15)'; }

            return (
              <div key={log.id} className="d-flex align-items-start gap-2 mb-1">
                <span className="text-muted fs-11" style={{ minWidth: '70px' }}>[{log.time}]</span>
                <span
                  className="badge font-monospace px-1.5 py-0.5 fs-10"
                  style={{ background: badgeColor, color, border: `1px solid ${color}40`, minWidth: '100px', textAlign: 'center' }}
                >
                  {log.source}
                </span>
                <span style={{ color }}>{log.text}</span>
              </div>
            );
          })}

          {isRunning && (
            <div className="d-flex align-items-center gap-2 text-info mt-2">
              <span className="spinner-border spinner-border-sm" role="status"></span>
              <span className="fs-12">Streaming AST extraction and decompilation feeds...</span>
            </div>
          )}

          <div ref={terminalBottomRef} />
        </div>

        {/* Terminal Bottom Controls */}
        <div className="p-2 px-3 bg-dark border-top border-dark d-flex align-items-center justify-content-between fs-12">
          <span className="text-muted">Status: <strong className="text-light">{activeStage}</strong></span>
          <span className="text-muted">Total Events: <strong className="text-info">{logs.length}</strong></span>
        </div>
      </div>
    </div>
  );
};
export default TerminalPage;
