import React, { useRef, useEffect, useState } from 'react';
import { Terminal, Copy, Check, ArrowDown, Trash2 } from 'lucide-react';

interface TerminalConsoleProps {
  logs: string[];
  title?: string;
  onClear?: () => void;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({
  logs,
  title = 'Universal Migration Engine Live Terminal',
  onClear
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, autoScroll]);

  const copyLogs = () => {
    navigator.clipboard.writeText(logs.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-4">
      
      {/* Terminal Header */}
      <div className="card-header bg-dark text-white p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex gap-1.5 me-2">
            <span className="rounded-circle bg-danger d-inline-block" style={{ width: 10, height: 10 }}></span>
            <span className="rounded-circle bg-warning d-inline-block" style={{ width: 10, height: 10 }}></span>
            <span className="rounded-circle bg-success d-inline-block" style={{ width: 10, height: 10 }}></span>
          </div>
          <Terminal size={16} className="text-info" />
          <span className="font-monospace fs-12 fw-bold text-light">{title}</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`btn btn-sm ${autoScroll ? 'btn-outline-info' : 'btn-outline-secondary'} rounded-pill px-2.5 py-0.5 fs-11 font-monospace`}
          >
            <ArrowDown size={12} className="me-1" />
            Auto-Scroll
          </button>
          <button
            onClick={copyLogs}
            className="btn btn-sm btn-outline-light rounded-pill px-2.5 py-0.5 fs-11 font-monospace d-inline-flex align-items-center gap-1"
          >
            {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="card-body p-3 bg-dark text-light font-monospace" style={{ minHeight: '380px', maxHeight: '480px', overflowY: 'auto' }}>
        {logs.length === 0 ? (
          <div className="text-muted fs-12 text-center py-5">
            Awaiting reverse-engineering stream logs...
          </div>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} className="fs-12 text-light mb-1 d-flex align-items-start gap-2">
              <span className="text-muted fs-11 user-select-none" style={{ minWidth: 24 }}>{idx + 1}</span>
              <span className="text-break" style={{ color: log.includes('✅') || log.includes('🏆') ? '#4ade80' : log.includes('🚀') ? '#38bdf8' : log.includes('❌') ? '#f87171' : '#e2e8f0' }}>
                {log}
              </span>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

    </div>
  );
};
