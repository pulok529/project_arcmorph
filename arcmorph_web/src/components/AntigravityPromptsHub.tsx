import React, { useState } from 'react';
import { Bot, Copy, Check, Terminal } from 'lucide-react';

interface AntigravityPromptsHubProps {
  prompts: Array<{
    title: string;
    fileName: string;
    content: string;
  }>;
}

export const AntigravityPromptsHub: React.FC<AntigravityPromptsHubProps> = ({ prompts = [] }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copyPrompt = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center">
            <Bot size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Antigravity AI Execution Prompts Hub</h5>
              <span className="badge bg-info text-white rounded-pill font-monospace fs-10">
                Agent Execution Ready
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Copy these structured prompts directly into Antigravity or Claude to autonomously build your frontend, backend, and reports.
            </p>
          </div>
        </div>

        <span className="badge bg-primary-subtle text-primary rounded-pill font-monospace fs-12 px-3 py-1.5">
          {prompts.length} Execution Prompts
        </span>
      </div>

      {/* Prompts List */}
      <div className="card-body p-4">
        <div className="vstack gap-3">
          {prompts.map((p, idx) => (
            <div key={idx} className="card border rounded-3 shadow-none overflow-hidden">
              
              <div className="card-header bg-light py-2.5 px-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary rounded-circle p-0 d-flex align-items-center justify-content-center font-monospace" style={{ width: '22px', height: '22px' }}>
                    {idx + 1}
                  </span>
                  <span className="fw-bold fs-13 text-dark">{p.title}</span>
                  <span className="text-muted font-monospace fs-11">({p.fileName})</span>
                </div>

                <button
                  onClick={() => copyPrompt(p.content, idx)}
                  className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center gap-1.5 fw-bold"
                >
                  {copiedIdx === idx ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedIdx === idx ? 'Copied to Clipboard!' : 'Copy Prompt'}</span>
                </button>
              </div>

              <div className="card-body p-3 bg-dark text-light">
                <pre className="font-monospace fs-11 text-light mb-0" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  <code>{p.content}</code>
                </pre>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
