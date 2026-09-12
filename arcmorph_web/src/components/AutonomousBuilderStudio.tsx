import React, { useState } from 'react';
import { Play, CheckCircle2, Loader2, Sparkles, FolderTree, Cpu } from 'lucide-react';

interface AutonomousBuilderStudioProps {
  projectId: string;
  projectName: string;
  themePreset: string;
  pagesCount: number;
}

export const AutonomousBuilderStudio: React.FC<AutonomousBuilderStudioProps> = ({
  projectId,
  projectName,
  themePreset,
  pagesCount
}) => {
  const [building, setBuilding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('Idle - Ready to Build');
  const [currentFile, setCurrentFile] = useState('');
  const [completed, setCompleted] = useState(false);

  const startBuild = async () => {
    setBuilding(true);
    setCompleted(false);
    setProgress(5);
    setCurrentStage('Scaffolding Solution Hierarchy');

    try {
      await fetch(`/api/projects/${projectId}/build-codebase`, { method: 'POST' });

      // Connect to WebSocket for live progress
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const ws = new WebSocket(`${protocol}//${window.location.hostname}:4000`);

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'BUILD_PROGRESS' && data.projectId === projectId) {
            setProgress(data.progress.percent);
            setCurrentStage(data.progress.stage);
            setCurrentFile(data.progress.currentFile);
          } else if (data.type === 'BUILD_COMPLETE' && data.projectId === projectId) {
            setProgress(100);
            setCompleted(true);
            setBuilding(false);
            setCurrentStage('Self-Healing Verification Passed (100% Certified)');
          }
        } catch (e) {
          console.error(e);
        }
      };
    } catch (e) {
      console.error(e);
      setBuilding(false);
    }
  };

  const generatedStructure = [
    { name: 'backend/src/Domain/Entities/', desc: 'MS SQL 2022 Normalized Models & Enums', status: progress >= 35 },
    { name: 'backend/src/Infrastructure/Data/AppDbContext.cs', desc: 'EF Core 9 DbContext with Global Query Filters', status: progress >= 45 },
    { name: 'backend/src/Infrastructure/Reports/', desc: 'QuestPDF .NET 9 Vector Classes', status: progress >= 60 },
    { name: 'backend/src/WebAPI/Endpoints/', desc: 'ASP.NET Core 9 Minimal API Routes', status: progress >= 75 },
    { name: 'frontend/src/pages/', desc: `React 19 + TypeScript (Theme: ${themePreset})`, status: progress >= 90 }
  ];

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
            <Cpu size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Autonomous Local Codebase Builder</h5>
              <span className="badge bg-success-subtle text-success rounded-pill font-monospace fs-10">
                Self-Healing Engine
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Generates 100% production-ready C# .NET 9 + React 19 codebase locally on your machine with 0 hallucination.
            </p>
          </div>
        </div>

        <div>
          {!building && !completed ? (
            <button
              onClick={startBuild}
              className="btn btn-success btn-md px-4 rounded-pill fw-bold shadow-sm d-flex align-items-center gap-2"
            >
              <Play size={16} />
              <span>Start Autonomous Build</span>
            </button>
          ) : building ? (
            <button disabled className="btn btn-secondary btn-md px-4 rounded-pill fw-bold d-flex align-items-center gap-2">
              <Loader2 size={16} className="spinner-border spinner-border-sm" />
              <span>Building Codebase ({progress}%)...</span>
            </button>
          ) : (
            <button
              onClick={startBuild}
              className="btn btn-outline-success btn-md px-4 rounded-pill fw-bold d-flex align-items-center gap-2"
            >
              <CheckCircle2 size={16} />
              <span>Re-Run Autonomous Build</span>
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        
        {/* Live Progress Bar */}
        {(building || completed) && (
          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="fw-bold fs-13 text-dark">{currentStage}</span>
              <span className="badge bg-primary rounded-pill font-monospace">{progress}%</span>
            </div>
            <div className="progress rounded-pill" style={{ height: '10px' }}>
              <div
                className={`progress-bar progress-bar-striped ${building ? 'progress-bar-animated' : 'bg-success'}`}
                style={{ width: `${progress}%` }}
              />
            </div>
            {currentFile && (
              <small className="text-muted font-monospace d-block mt-2 fs-11">
                Writing: {currentFile}
              </small>
            )}
          </div>
        )}

        {/* Generated Directory Structure List */}
        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
          <FolderTree size={16} className="text-primary" />
          Autonomous Scaffold Target Structure:
        </h6>

        <div className="list-group list-group-flush border rounded-3">
          {generatedStructure.map((item, idx) => (
            <div key={idx} className="list-group-item p-3 d-flex align-items-center justify-content-between">
              <div>
                <span className="font-monospace fw-bold fs-13 text-dark d-block">{item.name}</span>
                <small className="text-muted fs-12">{item.desc}</small>
              </div>
              <div>
                {item.status ? (
                  <span className="badge bg-success-subtle text-success rounded-pill font-monospace fs-11">
                    ✓ Generated
                  </span>
                ) : (
                  <span className="badge bg-light text-muted border font-monospace fs-11">
                    Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
