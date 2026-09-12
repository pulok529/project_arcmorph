import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { useTasks, SubagentTask, PipelineTask } from '../context/TaskContext';
import { useModels } from '../context/ModelContext';
import Swal from 'sweetalert2';

interface StagedFile {
  name: string;
  size: string;
  type: string;
  status: 'READY' | 'MORPHING' | 'COMPLETED';
}

interface ConsoleEntry {
  id: string;
  type: 'cmd' | 'output' | 'system' | 'error' | 'success';
  text: string;
  timestamp: string;
}

const INITIAL_STAGED_FILES: StagedFile[] = [
  { name: 'StudentAdmission.aspx', size: '34.2 KB', type: 'ASPX View', status: 'READY' },
  { name: 'StudentAdmission.aspx.cs', size: '58.9 KB', type: 'C# Code-Behind', status: 'READY' },
  { name: 'dbo.tblStudentInfo.sql', size: '12.4 KB', type: 'MSSQL DDL', status: 'READY' },
  { name: 'dbo.tblFeesCollection.sql', size: '18.1 KB', type: 'MSSQL DDL', status: 'READY' },
  { name: 'FeesCollection.aspx', size: '28.6 KB', type: 'ASPX View', status: 'READY' },
  { name: 'AttendanceWorker.cs', size: '42.0 KB', type: 'C# Service', status: 'READY' }
];

export const TerminalPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get('project') || 'proj_1788642109465';

  const { activeTasks, startMorphPipeline, pauseSubagent, stopSubagent } = useTasks();
  const { models, activeModelId } = useModels();

  // Master Terminal State
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([
    {
      id: 'init_1',
      type: 'system',
      text: '========================================================================\n  ARCMORPH REVERSE-ENGINEERING & CODE CONVERSION CLI (v2.4.0)\n  Host: core-engine | Context: .NET 9 Clean Architecture + React 19\n  Type "help" or "docs" for command syntax manual.\n========================================================================',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 'init_2',
      type: 'output',
      text: 'Workspace initialized with 6 staged files. Use "upload" to add files, or "* morph" to begin conversion.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  // Staged Files
  const [stagedFiles, setStagedFiles] = useState<StagedFile[]>(INITIAL_STAGED_FILES);

  // Upload Modal State
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newUploadName, setNewUploadName] = useState('');
  const [newUploadType, setNewUploadType] = useState('folder');

  // Solo Expanded Subagent State
  const [soloSubagent, setSoloSubagent] = useState<SubagentTask | null>(null);
  const [isSoloMinimized, setIsSoloMinimized] = useState(false);

  // Docs Modal State
  const [showDocsModal, setShowDocsModal] = useState(false);

  // Selected subagent in right split pane
  const [selectedSubagentId, setSelectedSubagentId] = useState<string>('');

  // Rolling Digits Telemetry Counter
  const [rollingDigits, setRollingDigits] = useState({
    tokensPerSec: 142.8,
    memoryMb: 345,
    cpuPercent: 38.4
  });

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const soloEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Rolling digits animation ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRollingDigits({
        tokensPerSec: Number((130 + Math.random() * 35).toFixed(1)),
        memoryMb: Math.floor(330 + Math.random() * 40),
        cpuPercent: Number((32 + Math.random() * 18).toFixed(1))
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll console
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleEntries]);

  // Auto-scroll solo terminal
  useEffect(() => {
    soloEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [soloSubagent?.logs]);

  // All active subagents across pipeline tasks
  const allSubagents = activeTasks.flatMap((t: PipelineTask) => t.subagents);

  useEffect(() => {
    if (!selectedSubagentId && allSubagents.length > 0) {
      setSelectedSubagentId(allSubagents[0].id);
    }
  }, [allSubagents, selectedSubagentId]);

  const activeSubagent = allSubagents.find((s: SubagentTask) => s.id === selectedSubagentId) || allSubagents[0];

  const appendEntry = (type: ConsoleEntry['type'], text: string) => {
    const entry: ConsoleEntry = {
      id: 'entry_' + Date.now() + Math.random(),
      type,
      text,
      timestamp: new Date().toLocaleTimeString()
    };
    setConsoleEntries(prev => [...prev, entry]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = commandInput.trim();
    if (!rawCmd) return;

    appendEntry('cmd', `$ ${rawCmd}`);
    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);
    setCommandInput('');

    executeCommand(rawCmd);
  };

  const executeCommand = (cmd: string) => {
    const lower = cmd.toLowerCase().trim();

    // 1. Help or docs
    if (lower === 'help' || lower === 'docs' || lower === 'man') {
      setShowDocsModal(true);
      appendEntry(
        'output',
        `+-------------------+---------------------------------------------------------+\n| COMMAND           | DESCRIPTION                                             |\n+-------------------+---------------------------------------------------------+\n| upload            | Opens interactive batch upload for files, folders, zip  |\n| ls or dir         | Lists all files staged in workspace                     |\n| * morph           | Spawns subagents to refactor all staged files           |\n| <f1>, <f2> morph  | Morph selected comma-separated files                   |\n| status            | Displays active subagent workload & telemetry           |\n| models            | View active AI models and orchestrator                  |\n| clear             | Clears terminal screen buffer                           |\n| docs              | Opens graphical command documentation manual            |\n+-------------------+---------------------------------------------------------+`
      );
      return;
    }

    // 2. Upload
    if (lower === 'upload') {
      setShowUploadModal(true);
      appendEntry('system', 'Opening batch file & directory upload dialog...');
      return;
    }

    // 3. ls or dir
    if (lower === 'ls' || lower === 'dir') {
      let fileTable = 'STAGED ASSETS IN WORKSPACE:\n';
      fileTable += '---------------------------------------------------------------\n';
      fileTable += 'NAME                            SIZE       TYPE          STATUS\n';
      fileTable += '---------------------------------------------------------------\n';
      stagedFiles.forEach(f => {
        fileTable += `${f.name.padEnd(32)} ${f.size.padEnd(10)} ${f.type.padEnd(13)} ${f.status}\n`;
      });
      fileTable += '---------------------------------------------------------------';
      appendEntry('output', fileTable);
      return;
    }

    // 4. Wildcard morph: * morph
    if (lower === '* morph' || lower === 'morph *' || lower === 'morph all') {
      const fileNames = stagedFiles.map(f => f.name);
      appendEntry('system', `[DISPATCH] Wildcard match on ${fileNames.length} files. Spawning Roslyn & DDL subagent cluster...`);
      setStagedFiles(prev => prev.map(f => ({ ...f, status: 'MORPHING' })));

      startMorphPipeline(fileNames);
      appendEntry('success', `Pipeline dispatched! Subagents allocated. Real-time telemetry streaming in adjacent pane.`);
      return;
    }

    // 5. Comma separated morph: file1, file2 morph
    if (lower.endsWith('morph')) {
      const targetStr = cmd.slice(0, cmd.lastIndexOf('morph')).trim();
      if (!targetStr) {
        appendEntry('error', 'Usage error: Specify files to morph, e.g. "StudentAdmission.aspx.cs, dbo.tblStudentInfo.sql morph" or "* morph"');
        return;
      }
      const requested = targetStr.split(',').map(s => s.trim()).filter(Boolean);
      appendEntry('system', `[DISPATCH] Target files: [${requested.join(', ')}]. Initializing subagents...`);

      setStagedFiles(prev =>
        prev.map(f => requested.some(r => f.name.toLowerCase().includes(r.toLowerCase())) ? { ...f, status: 'MORPHING' } : f)
      );

      startMorphPipeline(requested);
      appendEntry('success', `Dispatched morph operation for ${requested.length} target files.`);
      return;
    }

    // 6. Clear
    if (lower === 'clear' || lower === 'cls') {
      setConsoleEntries([]);
      return;
    }

    // 7. Status
    if (lower === 'status') {
      appendEntry(
        'output',
        `Active Tasks: ${activeTasks.length} | Subagents: ${allSubagents.length} | Throughput: ${rollingDigits.tokensPerSec} t/s | Memory: ${rollingDigits.memoryMb} MB`
      );
      return;
    }

    // 8. Models
    if (lower === 'models') {
      let modelList = 'REGISTERED AI INTELLIGENCE ENGINES:\n';
      models.forEach((m: any) => {
        const isOrch = m.id === activeModelId ? ' [DEFAULT ORCHESTRATOR]' : '';
        modelList += `- ${m.name} (${(m.provider || m.type || 'LOCAL').toUpperCase()}) | Context: ${m.contextLength || m.contextWindow || '32k'} | Status: ${m.isOnline ? 'ONLINE' : 'OFFLINE'}${isOrch}\n`;
      });
      appendEntry('output', modelList);
      return;
    }

    // Fallback unknown command
    appendEntry('error', `Command not recognized: "${cmd}". Type "help" or "docs" for allowed commands.`);
  };

  const handleBatchUploadConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUploadName.trim()) {
      Swal.fire('File Name Missing', 'Please enter a filename or folder archive name.', 'warning');
      return;
    }

    const newFile: StagedFile = {
      name: newUploadName.trim(),
      size: `${(Math.random() * 40 + 10).toFixed(1)} KB`,
      type: newUploadType === 'folder' ? 'Folder Archive' : newUploadType === 'zip' ? 'ZIP Package' : 'Source File',
      status: 'READY'
    };

    setStagedFiles(prev => [newFile, ...prev]);
    setShowUploadModal(false);
    setNewUploadName('');

    appendEntry('success', `Uploaded & staged: ${newFile.name} (${newFile.size}, ${newFile.type}).`);
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Multi-Agent Master Terminal" category="Telemetry & Execution" />

      <div className="module-content-body">
        {/* Top Operational Bar */}
        <div className="card mb-4 border-dark">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-cyan text-dark fw-bold px-2 py-1 fs-12">MASTER TERMINAL</span>
                <span className="text-light fw-bold">Session: {projectId}</span>
              </div>
              <div className="d-none d-md-flex align-items-center gap-2 fs-12 text-muted">
                <span><i className="ti ti-cpu text-info me-1"></i> qwen2.5-coder-14b</span>
                <span><i className="ti ti-activity text-warning me-1"></i> Roslyn AST</span>
                <span><i className="ti ti-bolt text-success me-1"></i> {rollingDigits.tokensPerSec} t/s</span>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                onClick={() => setShowDocsModal(true)}
              >
                <i className="ti ti-help text-cyan"></i> Command Docs
              </button>
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                onClick={() => setShowUploadModal(true)}
              >
                <i className="ti ti-upload text-cyan"></i> Batch Upload
              </button>
              <button
                type="button"
                className="btn btn-gradient-cyan btn-sm fw-bold d-flex align-items-center gap-1.5"
                onClick={() => executeCommand('* morph')}
              >
                <i className="ti ti-player-play"></i> Run "* morph"
              </button>
            </div>
          </div>
        </div>

        {/* Master-Subagent Split Viewport */}
        <div className="row g-4">
          {/* Left Column: Master Terminal (Editable Console) */}
          <div className="col-xl-7">
            <div className="card h-100 border-dark shadow-lg" style={{ background: '#080c14', borderRadius: '12px', overflow: 'hidden' }}>
              {/* Chrome Header */}
              <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-dark" style={{ background: '#0f172a' }}>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: '#ef4444', display: 'inline-block' }}></span>
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: '#f59e0b', display: 'inline-block' }}></span>
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: '#10b981', display: 'inline-block' }}></span>
                  <span className="ms-2 fs-12 text-muted font-monospace">arcmorph@master-console:~/${projectId}</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-success-subtle text-success fs-10 font-monospace">Interactive Input</span>
                </div>
              </div>

              {/* Console Screen Buffer */}
              <div
                className="p-3 font-monospace fs-13 overflow-auto"
                style={{ height: '480px', color: '#e2e8f0', lineHeight: '1.6' }}
                onClick={() => inputRef.current?.focus()}
              >
                {consoleEntries.map((entry) => {
                  let color = '#e2e8f0';
                  if (entry.type === 'cmd') color = '#38bdf8';
                  if (entry.type === 'system') color = '#00f2fe';
                  if (entry.type === 'success') color = '#4ade80';
                  if (entry.type === 'error') color = '#f87171';

                  return (
                    <div key={entry.id} className="mb-1.5" style={{ color, whiteSpace: 'pre-wrap' }}>
                      {entry.text}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Master Terminal Input Bar (Only Editable Console) */}
              <form onSubmit={handleCommandSubmit} className="p-2 px-3 border-top border-dark d-flex align-items-center gap-2" style={{ background: '#0d1322' }}>
                <span className="text-cyan fw-bold font-monospace fs-14">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control bg-transparent border-0 text-white font-monospace fs-13 shadow-none p-0"
                  placeholder="Type command here (e.g. * morph, upload, ls, help)..."
                  value={commandInput}
                  onChange={e => setCommandInput(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn btn-sm btn-cyan py-0.5 px-2 fs-12 fw-bold">
                  Execute
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Subagent Telemetry Pane with Rolling Digits */}
          <div className="col-xl-5">
            <div className="card h-100 border-dark shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center border-bottom border-dark">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-sitemap text-cyan fs-18"></i>
                  <h6 className="card-title mb-0 text-white fw-bold">Subagent Execution Cluster ({allSubagents.length})</h6>
                </div>
                {/* Live Rolling Digits Pill */}
                <div className="d-flex align-items-center gap-2 font-monospace fs-11 text-cyan bg-dark border border-cyan-subtle px-2 py-0.5 rounded">
                  <span className="spinner-grow spinner-grow-sm text-cyan" style={{ width: 8, height: 8 }} role="status"></span>
                  <span>{rollingDigits.tokensPerSec} t/s</span>
                  <span>•</span>
                  <span>{rollingDigits.memoryMb} MB</span>
                </div>
              </div>

              <div className="card-body p-3 d-flex flex-column gap-3 overflow-y-auto" style={{ maxHeight: '560px' }}>
                {allSubagents.length === 0 ? (
                  <div className="p-4 text-center text-muted">
                    <i className="ti ti-clock-pause fs-36 text-muted mb-2"></i>
                    <p className="mb-0 fs-13">No subagents currently spawned. Run <code className="text-cyan">* morph</code> in the master terminal to launch workers.</p>
                  </div>
                ) : (
                  allSubagents.map((sub: SubagentTask) => {
                    const isSelected = sub.id === (activeSubagent?.id || '');
                    return (
                      <div
                        key={sub.id}
                        className={`p-3 rounded border ${isSelected ? 'border-cyan bg-cyan-subtle' : 'border-dark bg-dark'} transition-all`}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <span className="fw-bold text-white fs-13">{sub.name}</span>
                            <span className={`badge ${sub.status === 'running' ? 'bg-success' : sub.status === 'paused' ? 'bg-warning text-dark' : 'bg-secondary'} fs-10 text-uppercase`}>
                              {sub.status}
                            </span>
                          </div>

                          <div className="d-flex align-items-center gap-1">
                            {sub.status === 'running' ? (
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-warning py-0 px-1.5 fs-11"
                                onClick={() => pauseSubagent(sub.id)}
                                title="Pause Process"
                              >
                                <i className="ti ti-player-pause"></i>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-success py-0 px-1.5 fs-11"
                                onClick={() => pauseSubagent(sub.id)}
                                title="Resume Process"
                              >
                                <i className="ti ti-player-play"></i>
                              </button>
                            )}
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger py-0 px-1.5 fs-11"
                              onClick={() => stopSubagent(sub.id)}
                              title="Stop Process"
                            >
                              <i className="ti ti-player-stop"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-cyan py-0 px-1.5 fs-11"
                              onClick={() => { setSoloSubagent(sub); setIsSoloMinimized(false); }}
                              title="Solo Expand Terminal"
                            >
                              <i className="ti ti-arrows-maximize"></i>
                            </button>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between fs-11 text-muted mb-1 font-monospace">
                          <span>Role: <strong className="text-light">{sub.role}</strong></span>
                          <span>Progress: <strong className="text-cyan">{sub.progress}%</strong></span>
                        </div>

                        <div className="progress mb-2" style={{ height: '4px', background: 'rgba(255,255,255,0.08)' }}>
                          <div
                            className={`progress-bar ${sub.status === 'running' ? 'progress-bar-striped progress-bar-animated' : ''}`}
                            style={{ width: `${sub.progress}%`, background: '#00f2fe' }}
                          ></div>
                        </div>

                        {/* Recent Subagent Log Snippet */}
                        <div className="p-2 rounded bg-black-subtle border border-dark font-monospace fs-11 text-light" style={{ maxHeight: '70px', overflowY: 'auto' }}>
                          {sub.logs.slice(-2).map((l: string, i: number) => (
                            <div key={i} className="text-truncate text-muted">{l}</div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Upload Modal */}
      {showUploadModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-upload text-cyan"></i> Batch File & Directory Ingestion
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowUploadModal(false)}></button>
              </div>
              <form onSubmit={handleBatchUploadConfirm}>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    <label className="form-label fs-12 text-uppercase text-light fw-bold">Upload Type</label>
                    <div className="btn-group w-100" role="group">
                      <button
                        type="button"
                        className={`btn btn-sm ${newUploadType === 'folder' ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-light'}`}
                        onClick={() => setNewUploadType('folder')}
                      >
                        Project Folder
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${newUploadType === 'zip' ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-light'}`}
                        onClick={() => setNewUploadType('zip')}
                      >
                        ZIP / Archive
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${newUploadType === 'files' ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-light'}`}
                        onClick={() => setNewUploadType('files')}
                      >
                        Individual Files
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-12 text-uppercase text-light fw-bold">Target Path / Identifier</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light fs-13 font-monospace"
                      placeholder="e.g. Bornomala.Accounts.zip or StudentController.cs"
                      value={newUploadName}
                      onChange={e => setNewUploadName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="p-3 rounded border border-dashed border-secondary text-center">
                    <i className="ti ti-file-upload fs-28 text-cyan d-block mb-1"></i>
                    <span className="fs-12 text-muted">Simulate batch upload by submitting. Files will stage immediately into the terminal environment.</span>
                  </div>
                </div>
                <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowUploadModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gradient-cyan btn-sm fw-bold">
                    Stage Files to Terminal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Command Documentation Modal */}
      {showDocsModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-book text-cyan"></i> Master Terminal Command Manual
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowDocsModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="table-responsive">
                  <table className="table table-dark table-hover align-middle fs-13 mb-0">
                    <thead>
                      <tr className="text-muted text-uppercase fs-11 border-bottom border-secondary">
                        <th>Command Syntax</th>
                        <th>Functionality</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">upload</code></td>
                        <td>Opens batch upload modal for folders, files, or zip archives</td>
                        <td><code className="text-light">upload</code></td>
                      </tr>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">ls / dir</code></td>
                        <td>Lists all staged files with sizes, types, and morph status</td>
                        <td><code className="text-light">ls</code></td>
                      </tr>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">* morph</code></td>
                        <td>Wildcard: Spawns parallel subagents for all staged files</td>
                        <td><code className="text-light">* morph</code></td>
                      </tr>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">&lt;f1&gt;, &lt;f2&gt; morph</code></td>
                        <td>Morphs specific files separated by commas</td>
                        <td><code className="text-light">StudentAdmission.aspx.cs, dbo.tblStudentInfo.sql morph</code></td>
                      </tr>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">status</code></td>
                        <td>Prints real-time subagent workload, memory, and tokens/s</td>
                        <td><code className="text-light">status</code></td>
                      </tr>
                      <tr className="border-bottom border-dark">
                        <td><code className="text-cyan fw-bold">models</code></td>
                        <td>Inspects registered local and cloud AI models</td>
                        <td><code className="text-light">models</code></td>
                      </tr>
                      <tr>
                        <td><code className="text-cyan fw-bold">clear</code></td>
                        <td>Clears screen output buffer of master terminal</td>
                        <td><code className="text-light">clear</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer border-top border-secondary px-4 py-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowDocsModal(false)}>
                  Close Manual
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solo Expanded Subagent Dedicated Window */}
      {soloSubagent && !isSoloMinimized && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.88)', backdropFilter: 'blur(10px)', zIndex: 1070 }}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg" style={{ height: '80vh' }}>
              <div className="modal-header border-bottom border-secondary px-4 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-cyan text-dark fw-bold fs-11">SOLO DEDICATED STREAM</span>
                  <h5 className="modal-title fw-bold text-white mb-0">{soloSubagent.name} ({soloSubagent.role})</h5>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setIsSoloMinimized(true)}
                    title="Minimize to Corner"
                  >
                    <i className="ti ti-minus"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setSoloSubagent(null)}
                    title="Close Dedicated View"
                  >
                    <i className="ti ti-x"></i>
                  </button>
                </div>
              </div>

              {/* Solo Terminal Logs Buffer */}
              <div className="modal-body p-4 font-monospace fs-13 overflow-auto d-flex flex-column gap-1" style={{ background: '#080c14', color: '#4ade80' }}>
                <div className="text-cyan mb-2">
                  === SOLO DEDICATED STREAM: {soloSubagent.name} (Started: {soloSubagent.startTime}) ===
                </div>
                {soloSubagent.logs.map((log, idx) => (
                  <div key={idx} className="text-light">{log}</div>
                ))}
                <div ref={soloEndRef} />
              </div>

              <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3 fs-12 text-muted font-monospace">
                  <span>Status: <strong className="text-success">{soloSubagent.status.toUpperCase()}</strong></span>
                  <span>Tokens Processed: <strong className="text-light">{soloSubagent.tokensProcessed.toLocaleString()}</strong></span>
                </div>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => pauseSubagent(soloSubagent.id)}
                  >
                    {soloSubagent.status === 'running' ? 'Pause Stream' : 'Resume Stream'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => { stopSubagent(soloSubagent.id); setSoloSubagent(null); }}
                  >
                    Stop & Terminate Subagent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solo Minimized Floating Pill */}
      {soloSubagent && isSoloMinimized && (
        <div
          className="position-fixed bottom-0 end-0 m-4 p-3 rounded shadow-lg border border-cyan bg-dark text-light cursor-pointer d-flex align-items-center gap-3"
          style={{ zIndex: 1080 }}
          onClick={() => setIsSoloMinimized(false)}
        >
          <span className="spinner-grow spinner-grow-sm text-cyan" role="status"></span>
          <div>
            <div className="fw-bold fs-12 text-white">{soloSubagent.name} (Minimized)</div>
            <small className="text-muted font-monospace fs-10">Click to maximize solo stream</small>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary py-0 px-1"
            onClick={(e) => { e.stopPropagation(); setSoloSubagent(null); }}
          >
            <i className="ti ti-x"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default TerminalPage;
