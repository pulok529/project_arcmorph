import React from 'react';
import { Clock, CheckCircle2, Loader2, StopCircle, PauseCircle } from 'lucide-react';

interface ProgressBarProps {
  progress: number;
  stageName: string;
  timeRemaining?: string | null;
  isCompleted?: boolean;
  isRunning?: boolean;
  isStopped?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  stageName,
  timeRemaining = null,
  isCompleted = false,
  isRunning = false,
  isStopped = false
}) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">
      
      {/* Top Labels */}
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3">
        <div className="d-flex align-items-center gap-2">
          {isCompleted ? (
            <CheckCircle2 size={18} className="text-success" />
          ) : isStopped ? (
            <StopCircle size={18} className="text-danger" />
          ) : isRunning ? (
            <Loader2 size={18} className="spinner-border spinner-border-sm text-primary" />
          ) : (
            <PauseCircle size={18} className="text-muted" />
          )}
          <span className="fw-bold text-dark fs-14">{stageName}</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          {timeRemaining && isRunning && (
            <div className="d-flex align-items-center gap-1.5 text-muted fs-12 font-monospace">
              <Clock size={14} className="text-primary" />
              <span>ETA: <strong>{timeRemaining}</strong></span>
            </div>
          )}
          <span className={`badge ${isCompleted ? 'bg-success' : isStopped ? 'bg-danger' : isRunning ? 'bg-primary' : 'bg-secondary'} rounded-pill font-monospace fs-12 px-3 py-1`}>
            {progress}%
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="progress rounded-pill shadow-inner" style={{ height: 12 }}>
        <div
          className={`progress-bar ${
            isCompleted 
              ? 'bg-success' 
              : isStopped 
              ? 'bg-danger' 
              : isRunning 
              ? 'progress-bar-striped progress-bar-animated bg-primary' 
              : 'bg-secondary'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
};
