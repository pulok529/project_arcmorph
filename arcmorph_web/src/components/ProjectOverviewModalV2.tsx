import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  FolderGit2,
  ChevronRight,
  ChevronDown,
  FileCode,
  Layers,
  Database,
  Cpu,
  Boxes,
  Layout,
  Table,
  FileText,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  FolderHeart,
  Globe,
  Activity,
  Code2,
  Minimize2,
  Maximize2,
  Copy,
  Check,
  Zap,
  Info,
  GraduationCap,
  Users,
  Wallet,
  DollarSign,
  Briefcase,
  ShieldCheck,
  Settings,
  FolderCode,
  LayoutGrid,
  FileSpreadsheet,
  FileBarChart,
  FolderOpen,
  Folder,
  PanelLeftClose,
  PanelLeftOpen,
  BookOpen
} from 'lucide-react';
import { ReportCanvasPreview } from './ReportCanvasPreview';
import { ReportCodedDesignViewer } from './ReportCodedDesignViewer';

interface ProjectOverviewModalV2Props {
  projectId: string;
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectOverviewModalV2: React.FC<ProjectOverviewModalV2Props> = ({
  projectId,
  projectName,
  isOpen,
  onClose
}) => {
  const [activeSystem, setActiveSystem] = useState<'system1' | 'system2'>('system2');
  const [overviewData, setOverviewData] = useState<any>(null);
  const [loadingTree, setLoadingTree] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFunctionDetail, setSelectedFunctionDetail] = useState<any>(null);
  const [showTreeSidebar, setShowTreeSidebar] = useState<boolean>(true);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['sys1_root', 'sys2_root', 'sys1_mod_Academic', 'sys2_mod_Academic']));
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // In-Memory Client Caches for 0ms instant file switching
  const [fileDetailsCache, setFileDetailsCache] = useState<{ [key: string]: any }>({});
  const [groupDetailsCache, setGroupDetailsCache] = useState<{ [key: string]: any }>({});

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchOverviewTree();
    }
  }, [isOpen, projectId]);

  const fetchOverviewTree = async () => {
    try {
      setLoadingTree(true);
      const res = await fetch(`/api/projects/${projectId}/project-overview-tree-v2`);
      const data = await res.json();
      if (data.success) {
        setOverviewData(data);
        if (data.initialFileDetail) {
          setSelectedFile(data.initialFileDetail);
          setFileDetailsCache(prev => ({ ...prev, [data.initialFileDetail.filePath || data.initialFileDetail.fileName]: data.initialFileDetail }));
        }
      }
    } catch (err) {
      console.error('Error fetching overview tree v2:', err);
    } finally {
      setLoadingTree(false);
    }
  };

  // Fetch file detail on-demand when clicked
  const handleSelectFile = async (node: any) => {
    if (!node) return;
    const filePath = node.filePath || (node.data ? node.data.filePath : null) || node.name;
    const fileKey = filePath || node.id;

    // Check client-side cache first (0ms)
    if (fileDetailsCache[fileKey]) {
      setSelectedFile(fileDetailsCache[fileKey]);
      setActiveTab('tab1');
      return;
    }

    try {
      setLoadingDetail(true);
      const res = await fetch(`/api/projects/${projectId}/file-overview-detail-v2?filePath=${encodeURIComponent(filePath)}&fileId=${node.id}`);
      const data = await res.json();
      if (data.success && data.fileDetail) {
        setSelectedFile(data.fileDetail);
        setFileDetailsCache(prev => ({ ...prev, [fileKey]: data.fileDetail }));
        setActiveTab('tab1');
      } else if (node.data) {
        setSelectedFile(node.data);
        setActiveTab('tab1');
      }
    } catch (e) {
      console.error('Error fetching file detail v2:', e);
      if (node.data) setSelectedFile(node.data);
    } finally {
      setLoadingDetail(false);
    }
  };

  // Fetch entity group detail on demand
  const handleSelectGroup = async (groupNode: any) => {
    if (!groupNode) return;
    const entName = groupNode.entityName;
    const groupKey = `group_${entName}`;

    if (groupDetailsCache[groupKey]) {
      setSelectedFile(groupDetailsCache[groupKey]);
      setActiveTab('tab1');
      return;
    }

    try {
      setLoadingDetail(true);
      const res = await fetch(`/api/projects/${projectId}/file-overview-detail-v2?entityName=${encodeURIComponent(entName)}`);
      const data = await res.json();
      if (data.success && data.files) {
        const groupObj = {
          isGroup: true,
          entityName: entName,
          files: data.files,
          fileName: `${entName} Operational Hub`,
          fileType: 'group',
          metadata: {
            logicalSummary: `Consolidated Operational Action Hub for ${entName}. Contains ${data.files.length} physical files across UI, BLL, DAL, DAO, and Crystal Reports.`
          }
        };
        setSelectedFile(groupObj);
        setGroupDetailsCache(prev => ({ ...prev, [groupKey]: groupObj }));
        setActiveTab('tab1');
      }
    } catch (e) {
      console.error('Error fetching group detail v2:', e);
    } finally {
      setLoadingDetail(false);
    }
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Determine current active tree
  const activeTree = useMemo(() => {
    if (!overviewData) return null;
    return activeSystem === 'system1' ? overviewData.system1Tree : overviewData.system2Tree;
  }, [overviewData, activeSystem]);

  // Detected file type for polymorphic inspector
  const detectedFileType = useMemo(() => {
    if (!selectedFile) return 'cs';
    if (selectedFile.isGroup) return 'group';
    const ft = (selectedFile.fileType || '').toLowerCase();
    const fn = (selectedFile.fileName || '').toLowerCase();
    if (ft === 'aspx.cs' || fn.endsWith('.aspx.cs')) return 'aspx.cs';
    if (ft === 'aspx' || fn.endsWith('.aspx') || fn.endsWith('.ascx')) return 'aspx';
    if (ft === 'rpt' || fn.endsWith('.rpt')) return 'rpt';
    if (ft === 'xsd' || fn.endsWith('.xsd')) return 'xsd';
    if (ft === 'config' || fn.endsWith('.config') || fn.endsWith('.asax')) return 'config';
    return 'cs';
  }, [selectedFile]);

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1055
      }}
    >
      <div
        className="modal-dialog modal-fullscreen p-2 p-md-3"
        style={{ margin: 0, maxWidth: '100vw', height: '100vh' }}
      >
        <div
          className="modal-content border-0 rounded-4 shadow-2xl d-flex flex-column overflow-hidden"
          style={{
            height: '100%',
            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
          }}
        >
          {/* MODAL HEADER */}
          <div
            className="modal-header py-2.5 px-4 text-white d-flex align-items-center justify-content-between flex-nowrap border-0"
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Left: Title & Version 2 Pill */}
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-white/20 p-2 shadow-inner"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h5 className="modal-title fw-bold text-white mb-0 fs-16">
                    {projectName} — Architecture & Entity Studio
                  </h5>
                  <span className="badge bg-amber-400 text-slate-900 fw-bold rounded-pill px-2.5 py-0.5 fs-11 shadow-sm" style={{ background: '#fbbf24', color: '#0f172a' }}>
                    v2 Type-Aware Studio
                  </span>
                </div>
                <small className="text-white/80 fs-12 font-monospace">
                  Grounded 100% in Physical Source Files & Database [EducationDB]
                </small>
              </div>
            </div>

            {/* Middle: System 1 / System 2 Switcher Badges */}
            <div className="d-flex align-items-center gap-2 bg-black/20 p-1 rounded-pill border border-white/15 shadow-inner">
              <button
                onClick={() => {
                  setActiveSystem('system1');
                  setActiveTab('tab1');
                }}
                className={`btn btn-sm rounded-pill px-3 py-1 fs-12 fw-bold transition-all d-flex align-items-center gap-1.5 ${
                  activeSystem === 'system1'
                    ? 'bg-white text-indigo-700 shadow-md font-bold'
                    : 'text-white/85 hover:text-white'
                }`}
                style={activeSystem === 'system1' ? { color: '#4f46e5' } : {}}
              >
                <Layers size={13} />
                <span>System 1: Architecture Layers</span>
              </button>

              <button
                onClick={() => {
                  setActiveSystem('system2');
                  setActiveTab('tab1');
                }}
                className={`btn btn-sm rounded-pill px-3 py-1 fs-12 fw-bold transition-all d-flex align-items-center gap-1.5 ${
                  activeSystem === 'system2'
                    ? 'bg-white text-indigo-700 shadow-md font-bold'
                    : 'text-white/85 hover:text-white'
                }`}
                style={activeSystem === 'system2' ? { color: '#4f46e5' } : {}}
              >
                <FolderHeart size={13} />
                <span>System 2: Entity Hubs (UI-Grouped)</span>
              </button>
            </div>

            {/* Right: Locked Close (X) Button */}
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center shadow-sm"
                style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  color: '#4f46e5',
                  transition: 'all 0.2s ease'
                }}
                title="Close Studio (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MODAL BODY (TWO-PANEL WORKSPACE) */}
          <div className="modal-body p-0 d-flex flex-grow-1 overflow-hidden bg-body-tertiary">
            
            {/* LEFT PANEL: TREEVIEW NAVIGATION (SMOOTH SLIDING TRANSITION) */}
            <div
              className="d-flex flex-column border-end flex-shrink-0 bg-body"
              style={{
                width: showTreeSidebar ? '380px' : '0px',
                minWidth: showTreeSidebar ? '380px' : '0px',
                maxWidth: showTreeSidebar ? '380px' : '0px',
                opacity: showTreeSidebar ? 1 : 0,
                boxShadow: showTreeSidebar ? '4px 0 12px rgba(0,0,0,0.03)' : 'none',
                overflow: 'hidden',
                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out',
                visibility: showTreeSidebar ? 'visible' : 'hidden',
                pointerEvents: showTreeSidebar ? 'auto' : 'none'
              }}
            >
              <div style={{ width: '380px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Tree Search & Collapse Header */}
                <div className="p-3 border-bottom bg-body-secondary">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fs-12 fw-bold text-body text-uppercase tracking-wider d-flex align-items-center gap-1.5">
                      {activeSystem === 'system1' ? <Layers size={14} className="text-indigo-600" /> : <FolderHeart size={14} className="text-purple-600" />}
                      <span>{activeSystem === 'system1' ? 'Layered Architecture' : 'UI Entity Hierarchy'}</span>
                    </span>
                    <button
                      onClick={() => setShowTreeSidebar(false)}
                      className="btn btn-sm btn-outline-secondary rounded-pill px-2.5 py-0.5 fs-11 d-flex align-items-center gap-1 shadow-sm"
                      title="Collapse Tree Navigation"
                    >
                      <PanelLeftClose size={13} />
                      <span>Hide</span>
                    </button>
                  </div>

                  <div className="position-relative">
                    <Search
                      size={14}
                      className="position-absolute top-50 start-0 translate-middle-y ms-2.5 text-slate-400"
                    />
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-pill ps-4 pe-4 fs-12 border-slate-200 shadow-inner"
                      placeholder="Filter files, classes, entities..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="btn btn-link p-0 position-absolute top-50 end-0 translate-middle-y me-2.5 text-slate-400 hover:text-slate-600 fs-12"
                      >
                        <X size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Tree Nodes Scroll Area */}
                <div className="flex-grow-1 overflow-auto p-2.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {loadingTree ? (
                    <div className="text-center py-5">
                      <div className="spinner-border spinner-border-sm text-indigo-600 mb-2" role="status" style={{ color: '#4f46e5' }} />
                      <p className="fs-12 text-muted mb-0">Loading hierarchy tree...</p>
                    </div>
                  ) : activeTree ? (
                    <TreeNodeRenderer
                      node={activeTree}
                      level={0}
                      expandedNodes={expandedNodes}
                      toggleNode={toggleNode}
                      selectedFile={selectedFile}
                      onSelectFile={handleSelectFile}
                      onSelectGroup={handleSelectGroup}
                      searchQuery={searchQuery}
                    />
                  ) : (
                    <div className="text-center py-4 text-muted fs-12">No tree data found.</div>
                  )}
                </div>

                {/* Tree Footer / Summary */}
                <div className="p-2.5 px-3 border-top bg-body-secondary fs-11 text-muted d-flex justify-content-between align-items-center">
                  <span>Indexed: <strong>{overviewData?.totalMajorFiles || 2165}</strong> Files</span>
                  <span className="badge bg-indigo-50 text-indigo-700 border border-indigo-200">
                    EducationDB
                  </span>
                </div>
              </div>
            </div>

            {/* DOCKED SLIM RAIL WHEN COLLAPSED (SMOOTH SLIDING TRANSITION) */}
            <div
              onClick={() => setShowTreeSidebar(true)}
              className="d-flex flex-column align-items-center py-3 px-1 border-end bg-body hover:bg-body-secondary flex-shrink-0 cursor-pointer"
              style={{
                width: !showTreeSidebar ? '38px' : '0px',
                minWidth: !showTreeSidebar ? '38px' : '0px',
                maxWidth: !showTreeSidebar ? '38px' : '0px',
                opacity: !showTreeSidebar ? 1 : 0,
                overflow: 'hidden',
                borderColor: !showTreeSidebar ? 'var(--app-card-border)' : 'transparent',
                boxShadow: !showTreeSidebar ? '2px 0 8px rgba(0,0,0,0.02)' : 'none',
                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out',
                visibility: !showTreeSidebar ? 'visible' : 'hidden',
                pointerEvents: !showTreeSidebar ? 'auto' : 'none'
              }}
              title="Click to Open Tree Navigation"
            >
              <div style={{ width: '38px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button
                  className="btn btn-sm btn-indigo p-1 rounded-2 mb-3 shadow-sm"
                  style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.3)' }}
                >
                  <PanelLeftOpen size={16} />
                </button>
                <span
                  className="fs-11 fw-bold text-muted tracking-wider text-uppercase"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Tree Navigation
                </span>
              </div>
            </div>

            {/* RIGHT PANEL: TYPE-AWARE POLYMORPHIC INSPECTOR */}
            <div className="d-flex flex-column flex-grow-1 overflow-hidden bg-body-tertiary">
              
              {loadingDetail ? (
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <div className="spinner-border text-primary mb-3" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <h6 className="fw-bold text-body">Loading Type-Aware AST Inspector...</h6>
                  <p className="fs-12 text-muted">Parsing metadata, SQL commands, and relations from physical disk.</p>
                </div>
              ) : selectedFile ? (
                <div className="d-flex flex-column h-100 overflow-hidden">
                  
                  {/* File Inspector Top Banner */}
                  <div className="p-3 px-4 bg-body border-bottom shadow-sm d-flex align-items-center justify-content-between flex-wrap gap-2">
                    
                    {/* Left: Show Tree Button (when collapsed) + File Info */}
                    <div className="d-flex align-items-center gap-3">
                      {!showTreeSidebar && (
                        <button
                          onClick={() => setShowTreeSidebar(true)}
                          className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1.5 fs-12 fw-bold d-flex align-items-center gap-1.5 shadow-sm"
                          title="Open Tree Navigation Sidebar"
                        >
                          <PanelLeftOpen size={15} />
                          <span>Show Tree</span>
                        </button>
                      )}

                      <div
                        className="rounded-3 p-2.5 d-flex align-items-center justify-content-center shadow-sm"
                        style={{
                          background:
                            detectedFileType === 'aspx'
                              ? 'linear-gradient(135deg, #10b981, #059669)'
                              : detectedFileType === 'aspx.cs'
                              ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                              : detectedFileType === 'rpt'
                              ? 'linear-gradient(135deg, #f43f5e, #e11d48)'
                              : detectedFileType === 'xsd'
                              ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                              : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                          color: '#ffffff'
                        }}
                      >
                        {detectedFileType === 'aspx' ? (
                          <Layout size={20} />
                        ) : detectedFileType === 'aspx.cs' ? (
                          <FileCode size={20} />
                        ) : detectedFileType === 'rpt' ? (
                          <FileBarChart size={20} />
                        ) : detectedFileType === 'xsd' ? (
                          <Table size={20} />
                        ) : (
                          <Boxes size={20} />
                        )}
                      </div>

                      <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <h5 className="fw-bold text-body mb-0 fs-16 font-monospace">
                            {selectedFile.fileName || selectedFile.name}
                          </h5>
                          <span
                            className="badge rounded-pill px-2.5 py-0.5 fs-11 font-monospace shadow-xs"
                            style={{
                              background:
                                detectedFileType === 'aspx'
                                  ? '#dcfce7'
                                  : detectedFileType === 'aspx.cs'
                                  ? '#fef3c7'
                                  : detectedFileType === 'rpt'
                                  ? '#ffe4e6'
                                  : detectedFileType === 'xsd'
                                  ? '#e0e7ff'
                                  : '#dbeafe',
                              color:
                                detectedFileType === 'aspx'
                                  ? '#166534'
                                  : detectedFileType === 'aspx.cs'
                                  ? '#92400e'
                                  : detectedFileType === 'rpt'
                                  ? '#9f1239'
                                  : detectedFileType === 'xsd'
                                  ? '#3730a3'
                                  : '#1e40af'
                            }}
                          >
                            {detectedFileType.toUpperCase()}
                          </span>
                          {selectedFile.category && (
                            <span className="badge bg-slate-100 text-slate-700 border border-slate-200 rounded-pill px-2 py-0.5 fs-11">
                              {selectedFile.category}
                            </span>
                          )}
                          {selectedFile.module && (
                            <span className="badge bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-pill px-2 py-0.5 fs-11">
                              Module: {selectedFile.module}
                            </span>
                          )}
                        </div>

                        <div className="fs-12 text-muted font-monospace mt-0.5">
                          {selectedFile.filePath || 'Physical Repository File'}
                        </div>
                      </div>
                    </div>

                    {/* Copy Code / Action Button */}
                    <div className="d-flex align-items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(selectedFile.metadata?.completeCodeWithComments || selectedFile.metadata?.questPdfCSharpCode || '// Code')}
                        className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1.5 fs-12 d-flex align-items-center gap-1.5 shadow-xs"
                      >
                        {copiedCode ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                        <span>{copiedCode ? 'Copied Code!' : 'Copy Code'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Polymorphic Tabs Bar */}
                  <div className="px-4 bg-body border-bottom d-flex gap-4 fs-13 fw-bold">
                    {detectedFileType === 'cs' && (
                      <>
                        <TabButton id="tab1" label="1. Structure & Properties" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label={`2. Logical Methods (${selectedFile.metadata?.methods?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab3" label={`3. Database SQL Commands (${selectedFile.metadata?.dbCommands?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab4" label="4. Cross-References Graph" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab5" label="5. Complete C# Code" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}

                    {detectedFileType === 'aspx' && (
                      <>
                        <TabButton id="tab1" label={`1. UI Controls Inventory (${selectedFile.metadata?.uiControls?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label="2. Page Form Blueprint" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab3" label="3. Page Redirections Flow" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab4" label="4. Interactive Wireframe Mockup" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab5" label="5. ASPX Source Markup" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}

                    {detectedFileType === 'aspx.cs' && (
                      <>
                        <TabButton id="tab1" label={`1. UI Event Lifecycle (${selectedFile.metadata?.eventHandlers?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label="2. UI-to-Backend Binding Flow" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab3" label="3. User Alerts & Redirects" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab4" label="4. Code-Behind C#" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}

                    {detectedFileType === 'rpt' && (
                      <>
                        <TabButton id="tab1" label="1. 📄 Visual Report Preview (Archetype Design)" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label="2. 📐 Decompiled RPT Coded Design & AST" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab3" label="3. 🔄 Data Feeding Pipeline & SQL/SP" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab4" label={`4. 📊 Bound DataSet Schema (${selectedFile.metadata?.boundDataSet?.dataTables?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab5" label="5. 🕸️ Inflow & Outflow Graph" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}

                    {detectedFileType === 'xsd' && (
                      <>
                        <TabButton id="tab1" label={`1. DataTables & Columns (${selectedFile.metadata?.dataTables?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label="2. Relationships & Constraints" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab3" label="3. Connected Reports & DAL" active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab4" label="4. Schema XML View" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}

                    {detectedFileType === 'group' && (
                      <>
                        <TabButton id="tab1" label={`Operational Files (${selectedFile.files?.length || 0})`} active={activeTab} onClick={setActiveTab} />
                        <TabButton id="tab2" label="Consolidated Architecture" active={activeTab} onClick={setActiveTab} />
                      </>
                    )}
                  </div>

                  {/* TAB CONTENT AREA */}
                  <div className="flex-grow-1 overflow-auto p-4">
                    
                    {/* TYPE 1: PURE C# CLASS TABS */}
                    {detectedFileType === 'cs' && (
                      <>
                        {activeTab === 'tab1' && (
                          <div className="d-flex flex-column gap-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4">
                              <h6 className="fw-bold text-body mb-2">Class Architecture & Logical Summary</h6>
                              <p className="fs-13 text-body-secondary mb-3">{selectedFile.metadata?.logicalSummary}</p>
                              <div className="row g-3">
                                <div className="col-md-4">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">Declared Class</small>
                                    <strong className="fs-13 font-monospace text-indigo-600">{selectedFile.metadata?.declaredClass}</strong>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">Namespace</small>
                                    <strong className="fs-13 font-monospace text-body">{selectedFile.metadata?.namespace || 'Bornomala'}</strong>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">Inherits From</small>
                                    <strong className="fs-13 font-monospace text-body">{selectedFile.metadata?.baseClass || 'System.Object'}</strong>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card border-0 shadow-sm rounded-4 p-4">
                              <h6 className="fw-bold text-body mb-3">Class Properties & DTO Fields ({selectedFile.metadata?.properties?.length || 0})</h6>
                              {selectedFile.metadata?.properties && selectedFile.metadata.properties.length > 0 ? (
                                <div className="table-responsive">
                                  <table className="table table-hover table-bordered align-middle fs-13 mb-0">
                                    <thead>
                                      <tr>
                                        <th style={{ width: '80px' }}>Access</th>
                                        <th style={{ width: '160px' }}>Data Type</th>
                                        <th>Property Name</th>
                                        <th>Database Field Purpose</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {selectedFile.metadata.properties.map((p: any, idx: number) => (
                                        <tr key={idx}>
                                          <td><span className="badge bg-slate-100 text-slate-600 font-monospace">public</span></td>
                                          <td><span className="badge bg-blue-50 text-blue-700 font-monospace">{p.type}</span></td>
                                          <td><strong className="font-monospace text-body">{p.name}</strong></td>
                                          <td className="text-muted">{p.description}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <div className="alert alert-light border text-muted fs-13 mb-0">
                                  No explicit public properties declared (Pure service / business logic provider).
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {activeTab === 'tab2' && (
                          <div className="d-flex flex-column gap-3">
                            <h6 className="fw-bold text-body mb-1">Logical Operations & Public Methods ({selectedFile.metadata?.methods?.length || 0})</h6>
                            {selectedFile.metadata?.methods?.map((m: any, idx: number) => (
                              <div key={idx} className="card border-0 shadow-sm rounded-4 p-3.5">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-indigo-50 text-indigo-700 font-monospace px-2 py-1">
                                      {m.returnType}
                                    </span>
                                    <h6 className="fw-bold text-body mb-0 font-monospace fs-14">{m.name}</h6>
                                  </div>
                                  <button
                                    onClick={() => setSelectedFunctionDetail({ ...m, fileName: selectedFile.fileName })}
                                    className="btn btn-sm btn-primary rounded-pill px-3 py-1 fs-12 fw-bold d-flex align-items-center gap-1 shadow-sm"
                                    style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', border: 'none' }}
                                  >
                                    <Eye size={13} />
                                    <span>View Function Details</span>
                                  </button>
                                </div>
                                <p className="fs-13 text-body-secondary mb-2">{m.description}</p>
                                <div className="p-2.5 rounded-3 bg-slate-900 text-slate-200 font-monospace fs-12 overflow-auto" style={{ maxHeight: '120px' }}>
                                  <pre className="mb-0"><code>{m.code}</code></pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === 'tab3' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Database Commands & SQL Operations ({selectedFile.metadata?.dbCommands?.length || 0})</h6>
                            {selectedFile.metadata?.dbCommands && selectedFile.metadata.dbCommands.length > 0 ? (
                              <div className="d-flex flex-column gap-3">
                                {selectedFile.metadata.dbCommands.map((cmd: any, idx: number) => (
                                  <div key={idx} className="p-3.5 rounded-3 border bg-body-tertiary">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                      <span className="badge bg-purple-100 text-purple-800 font-monospace">{cmd.queryType}</span>
                                      <span className="badge bg-slate-200 text-slate-700 font-monospace">Target Table: {cmd.mainTable}</span>
                                    </div>
                                    <div className="p-2.5 rounded-2 bg-slate-900 text-emerald-400 font-monospace fs-12 overflow-auto mb-2">
                                      <code>{cmd.queryText}</code>
                                    </div>
                                    <small className="text-muted">Caller: <strong>{cmd.functionName}</strong> • Database: <strong>{cmd.database}</strong></small>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No direct inline SQL queries found in this class.</div>
                            )}
                          </div>
                        )}

                        {activeTab === 'tab4' && (
                          <div className="d-flex flex-column gap-4">
                            {/* Inflow & Outflow Overview Banner */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-white" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)' }}>
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div>
                                  <span className="badge rounded-pill bg-white/20 text-white font-monospace fs-11 px-3 py-1 mb-2">
                                    BIDIRECTIONAL ARCHITECTURE GRAPH
                                  </span>
                                  <h5 className="fw-bold mb-1">Inflow & Outflow Dependency Streams</h5>
                                  <p className="fs-12 text-slate-200 mb-0">
                                    Authentic static analysis of upstream consumers and downstream database & contract dependencies.
                                  </p>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="text-center bg-white/10 rounded-3 p-2.5 px-3">
                                    <div className="fs-18 fw-bold text-emerald-300">
                                      {selectedFile.metadata?.inflow?.totalInflowCount ?? (selectedFile.metadata?.callers?.ui?.length || 0) + (selectedFile.metadata?.callers?.classes?.length || 0)}
                                    </div>
                                    <small className="fs-11 text-slate-300">Inflow Streams</small>
                                  </div>
                                  <div className="text-center bg-white/10 rounded-3 p-2.5 px-3">
                                    <div className="fs-18 fw-bold text-indigo-300">
                                      {selectedFile.metadata?.outflow?.totalOutflowCount ?? (selectedFile.metadata?.usedClasses?.classes?.length || 0) + (selectedFile.metadata?.dbCommands?.length || 0)}
                                    </div>
                                    <small className="fs-11 text-slate-300">Outflow Streams</small>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row g-4">
                              {/* INFLOW COLUMN */}
                              <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-top border-3 border-emerald-500">
                                  <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="fw-bold text-body mb-0 d-flex align-items-center gap-2">
                                      <span className="badge bg-emerald-100 text-emerald-800 rounded-pill px-2.5 py-1 fs-11">INFLOW</span>
                                      <span>Who Calls / Uses This File?</span>
                                    </h6>
                                  </div>
                                  <p className="fs-12 text-muted mb-3">Upstream presentation pages, controllers, and business services driving this file.</p>
                                  
                                  {/* UI Callers */}
                                  <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                                      <strong className="fs-12 text-body">UI Pages Calling This:</strong>
                                      <span className="badge bg-emerald-50 text-emerald-700 border border-emerald-200 fs-10">
                                        {(selectedFile.metadata?.inflow?.uiCallers || selectedFile.metadata?.callers?.ui)?.length || 0} Pages
                                      </span>
                                    </div>
                                    {(selectedFile.metadata?.inflow?.uiCallers || selectedFile.metadata?.callers?.ui)?.length > 0 ? (
                                      <div className="d-flex flex-wrap gap-1.5">
                                        {(selectedFile.metadata?.inflow?.uiCallers || selectedFile.metadata?.callers?.ui).map((u: string, idx: number) => (
                                          <span key={idx} className="badge bg-emerald-50 text-emerald-800 border border-emerald-200 font-monospace fs-11 px-2 py-1">
                                            📄 {u}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-muted fs-12 fst-italic">No direct UI page callers detected</span>
                                    )}
                                  </div>

                                  {/* Business Logic Callers */}
                                  <div className="mb-2">
                                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                                      <strong className="fs-12 text-body">Business Logic & Services:</strong>
                                      <span className="badge bg-slate-100 text-slate-700 border fs-10">
                                        {(selectedFile.metadata?.inflow?.bllCallers || selectedFile.metadata?.callers?.classes)?.length || 0} Classes
                                      </span>
                                    </div>
                                    {(selectedFile.metadata?.inflow?.bllCallers || selectedFile.metadata?.callers?.classes)?.length > 0 ? (
                                      <div className="d-flex flex-wrap gap-1.5">
                                        {(selectedFile.metadata?.inflow?.bllCallers || selectedFile.metadata?.callers?.classes).map((c: string, idx: number) => (
                                          <span key={idx} className="badge bg-slate-100 text-slate-800 border font-monospace fs-11 px-2 py-1">
                                            ⚡ {c}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-muted fs-12 fst-italic">No calling classes detected</span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* OUTFLOW COLUMN */}
                              <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-top border-3 border-indigo-500">
                                  <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="fw-bold text-body mb-0 d-flex align-items-center gap-2">
                                      <span className="badge bg-indigo-100 text-indigo-800 rounded-pill px-2.5 py-1 fs-11">OUTFLOW</span>
                                      <span>What Does This File Call / Use?</span>
                                    </h6>
                                  </div>
                                  <p className="fs-12 text-muted mb-3">Downstream DAL contracts, domain models, database tables, and helpers.</p>
                                  
                                  {/* Downstream Classes */}
                                  <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                                      <strong className="fs-12 text-body">Downstream Classes & Models:</strong>
                                      <span className="badge bg-blue-50 text-blue-700 border border-blue-200 fs-10">
                                        {(selectedFile.metadata?.outflow?.downstreamClasses || selectedFile.metadata?.usedClasses?.classes)?.length || 0} Classes
                                      </span>
                                    </div>
                                    {(selectedFile.metadata?.outflow?.downstreamClasses || selectedFile.metadata?.usedClasses?.classes)?.length > 0 ? (
                                      <div className="d-flex flex-wrap gap-1.5">
                                        {(selectedFile.metadata?.outflow?.downstreamClasses || selectedFile.metadata?.usedClasses?.classes).map((c: string, idx: number) => (
                                          <span key={idx} className="badge bg-blue-50 text-blue-800 border border-blue-200 font-monospace fs-11 px-2 py-1">
                                            📦 {c}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-muted fs-12 fst-italic">Pure entity / zero downstream class calls</span>
                                    )}
                                  </div>

                                  {/* Database Tables */}
                                  <div className="mb-2">
                                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                                      <strong className="fs-12 text-body">Target Database Tables:</strong>
                                      <span className="badge bg-purple-50 text-purple-700 border border-purple-200 fs-10">
                                        {(selectedFile.metadata?.outflow?.databaseTables || [selectedFile.metadata?.mainTargetTable]).filter(Boolean).length} Tables
                                      </span>
                                    </div>
                                    {(selectedFile.metadata?.outflow?.databaseTables?.length > 0 || selectedFile.metadata?.mainTargetTable) ? (
                                      <div className="d-flex flex-wrap gap-1.5">
                                        {Array.from(new Set([...(selectedFile.metadata?.outflow?.databaseTables || []), selectedFile.metadata?.mainTargetTable])).filter(Boolean).map((t: string, idx: number) => (
                                          <span key={idx} className="badge bg-purple-50 text-purple-800 border border-purple-200 font-monospace fs-11 px-2 py-1">
                                            🗄️ {t}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <span className="text-muted fs-12 fst-italic">No direct SQL database table writes detected</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'tab5' && (
                          <div className="card border-0 shadow-sm rounded-4 p-3 bg-slate-900 text-slate-100">
                            <pre className="mb-0 font-monospace fs-12" style={{ lineHeight: '1.6' }}>
                              <code>{selectedFile.metadata?.completeCodeWithComments}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}

                    {/* TYPE 2: ASPX PRESENTATION TABS */}
                    {detectedFileType === 'aspx' && (
                      <>
                        {activeTab === 'tab1' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Visual WebForms Server Controls ({selectedFile.metadata?.uiControls?.length || 0})</h6>
                            {selectedFile.metadata?.uiControls?.length > 0 ? (
                              <div className="table-responsive">
                                <table className="table table-hover table-bordered align-middle fs-13 mb-0">
                                  <thead>
                                    <tr>
                                      <th style={{ width: '180px' }}>Control ID</th>
                                      <th style={{ width: '160px' }}>Control Type</th>
                                      <th>Text / Label</th>
                                      <th>Event Binding</th>
                                      <th>Functional Purpose</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedFile.metadata.uiControls.map((u: any, idx: number) => (
                                      <tr key={idx}>
                                        <td><strong className="font-monospace text-body">{u.id}</strong></td>
                                        <td><span className="badge bg-emerald-50 text-emerald-800 border border-emerald-200 font-monospace">{u.type}</span></td>
                                        <td>{u.text || '—'}</td>
                                        <td><span className="badge bg-slate-100 text-slate-700 font-monospace">{u.eventHandler}</span></td>
                                        <td className="text-muted">{u.purpose}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No server controls parsed in this markup.</div>
                            )}
                          </div>
                        )}

                        {activeTab === 'tab2' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Page Form Blueprint & Layout Map</h6>
                            <div className="p-3 rounded-3 bg-body-tertiary border mb-3">
                              <small className="text-muted d-block mb-1">MasterPage Reference</small>
                              <strong className="fs-13 font-monospace text-body">{selectedFile.metadata?.masterPage || 'None'}</strong>
                            </div>
                            <p className="fs-13 text-body-secondary mb-0">{selectedFile.metadata?.logicalSummary}</p>
                          </div>
                        )}

                        {activeTab === 'tab3' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Page Redirections & Outflow Navigation</h6>
                            {selectedFile.metadata?.outflowPages?.length > 0 ? (
                              <div className="d-flex flex-wrap gap-2">
                                {selectedFile.metadata.outflowPages.map((p: string, idx: number) => (
                                  <span key={idx} className="badge bg-indigo-50 text-indigo-700 border border-indigo-200 p-2 fs-12 font-monospace d-flex align-items-center gap-1.5">
                                    <ArrowRight size={13} />
                                    <span>{p}</span>
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No outgoing page redirections found in this markup.</div>
                            )}
                          </div>
                        )}

                        {activeTab === 'tab4' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Interactive Wireframe Card Mockup</h6>
                            <div className="p-4 rounded-4 border bg-body-tertiary">
                              <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold text-body mb-0">{selectedFile.fileName.replace('.aspx', '')} Management</h6>
                                <span className="badge bg-primary">WebForms Form</span>
                              </div>
                              <div className="row g-3 mb-3">
                                {selectedFile.metadata?.uiControls?.slice(0, 6).map((u: any, idx: number) => (
                                  <div key={idx} className="col-md-6">
                                    <label className="form-label fs-12 fw-bold text-muted mb-1">{u.id}</label>
                                    <input type="text" className="form-control form-control-sm" placeholder={u.purpose} disabled />
                                  </div>
                                ))}
                              </div>
                              <div className="d-flex gap-2">
                                <button className="btn btn-primary btn-sm rounded-pill px-4" disabled>Submit Action</button>
                                <button className="btn btn-outline-secondary btn-sm rounded-pill px-3" disabled>Reset</button>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'tab5' && (
                          <div className="card border-0 shadow-sm rounded-4 p-3 bg-slate-900 text-slate-100">
                            <pre className="mb-0 font-monospace fs-12" style={{ lineHeight: '1.6' }}>
                              <code>{selectedFile.metadata?.completeCodeWithComments}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}

                    {/* TYPE 3: ASPX CODE-BEHIND TABS */}
                    {detectedFileType === 'aspx.cs' && (
                      <>
                        {activeTab === 'tab1' && (
                          <div className="d-flex flex-column gap-3">
                            <h6 className="fw-bold text-body mb-1">UI Event Handlers & Page Lifecycle ({selectedFile.metadata?.eventHandlers?.length || 0})</h6>
                            {selectedFile.metadata?.eventHandlers?.map((h: any, idx: number) => (
                              <div key={idx} className="card border-0 shadow-sm rounded-4 p-3.5">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-amber-100 text-amber-900 font-monospace">{h.eventType}</span>
                                    <strong className="font-monospace fs-14 text-body">{h.name}</strong>
                                  </div>
                                  <span className="badge bg-slate-100 text-slate-700 font-monospace fs-11">{h.parameters}</span>
                                </div>
                                <p className="fs-13 text-body-secondary mb-2">{h.description}</p>
                                <div className="p-2.5 rounded-3 bg-slate-900 text-slate-200 font-monospace fs-12 overflow-auto" style={{ maxHeight: '140px' }}>
                                  <pre className="mb-0"><code>{h.code}</code></pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === 'tab2' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">UI-to-Backend Service Binding Invocations</h6>
                            {selectedFile.metadata?.serviceInvocations?.length > 0 ? (
                              <div className="d-flex flex-column gap-2">
                                {selectedFile.metadata.serviceInvocations.map((s: any, idx: number) => (
                                  <div key={idx} className="p-3 rounded-3 bg-body-tertiary border d-flex align-items-center justify-content-between">
                                    <span className="font-monospace fw-bold text-indigo-600">{s.signature}</span>
                                    <span className="badge bg-indigo-50 text-indigo-700">BLL Service</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No external BLL service invocations parsed.</div>
                            )}
                          </div>
                        )}

                        {activeTab === 'tab3' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Client Feedback Messages & Alerts</h6>
                            {selectedFile.metadata?.alertMessages?.length > 0 ? (
                              <div className="d-flex flex-column gap-2">
                                {selectedFile.metadata.alertMessages.map((msg: string, idx: number) => (
                                  <div key={idx} className="p-3 rounded-3 bg-emerald-50 border border-emerald-200 text-emerald-900 fs-13">
                                    💬 "{msg}"
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No client alert messages parsed.</div>
                            )}
                          </div>
                        )}

                        {activeTab === 'tab4' && (
                          <div className="card border-0 shadow-sm rounded-4 p-3 bg-slate-900 text-slate-100">
                            <pre className="mb-0 font-monospace fs-12" style={{ lineHeight: '1.6' }}>
                              <code>{selectedFile.metadata?.completeCodeWithComments}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}

                    {/* TYPE 4: CRYSTAL REPORT TABS */}
                    {detectedFileType === 'rpt' && (
                      <>
                        {/* TAB 1: VISUAL REPORT PREVIEW (AUTHENTIC VECTOR ARCHETYPE RENDER) */}
                        {activeTab === 'tab1' && (
                          <ReportCanvasPreview
                            fileName={selectedFile.fileName}
                            metadata={selectedFile.metadata}
                          />
                        )}

                        {/* TAB 2: DECOMPILED RPT CODED DESIGN SPECIFICATION & AST EXPLORER */}
                        {activeTab === 'tab2' && (
                          <ReportCodedDesignViewer
                            fileName={selectedFile.fileName}
                            metadata={selectedFile.metadata}
                          />
                        )}

                        {/* TAB 3: DATA FEEDING QUERY / SP */}
                        {activeTab === 'tab3' && (
                          <div className="d-flex flex-column gap-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <h6 className="fw-bold text-body mb-0">Data Feeding Pipeline (ReportViewer &rarr; BLL &rarr; DAL &rarr; SQL/SP)</h6>
                                <span className="badge bg-indigo-100 text-indigo-800 font-monospace px-3 py-1">
                                  {selectedFile.metadata?.feedingDataPipeline?.queryType || 'SELECT / CRUD'}
                                </span>
                              </div>

                              <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">Calling ReportViewer Page</small>
                                    <strong className="fs-13 font-monospace text-rose-600">
                                      📄 {selectedFile.metadata?.feedingDataPipeline?.callingViewerPage || 'ReportViewer.aspx'}
                                    </strong>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">BLL Service Invocation</small>
                                    <strong className="fs-13 font-monospace text-indigo-600">
                                      ⚙️ {selectedFile.metadata?.feedingDataPipeline?.bllMethod || 'Service.GetData()'}
                                    </strong>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">DAL Data Access Method</small>
                                    <strong className="fs-13 font-monospace text-emerald-600">
                                      🗄️ {selectedFile.metadata?.feedingDataPipeline?.dalMethod || 'DAL.LoadData()'}
                                    </strong>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="p-3 rounded-3 bg-body-tertiary border">
                                    <small className="text-muted d-block mb-1">Target Database & Tables</small>
                                    <div className="d-flex flex-wrap gap-1 mt-1">
                                      {selectedFile.metadata?.feedingDataPipeline?.targetTables?.map((t: string, tIdx: number) => (
                                        <span key={tIdx} className="badge bg-slate-200 text-slate-800 font-monospace fs-11">{t}</span>
                                      )) || <span className="badge bg-slate-200 text-slate-800 font-monospace fs-11">EducationDB</span>}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Raw SQL Query or Stored Procedure */}
                              <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="fw-bold text-body fs-13 mb-0">Extracted SQL Query / Stored Procedure (SP) Command</h6>
                                <button
                                  onClick={() => copyToClipboard(selectedFile.metadata?.feedingDataPipeline?.queryText || '-- SQL Query')}
                                  className="btn btn-outline-secondary btn-sm rounded-pill px-2.5 py-1 fs-11 d-flex align-items-center gap-1"
                                >
                                  <Copy size={12} />
                                  <span>Copy Query</span>
                                </button>
                              </div>

                              <div className="p-3.5 rounded-3 bg-slate-900 text-emerald-400 font-monospace fs-12 overflow-auto" style={{ maxHeight: '280px', lineHeight: '1.6' }}>
                                <pre className="mb-0 text-wrap">
                                  <code>{selectedFile.metadata?.feedingDataPipeline?.queryText || 'SELECT * FROM tblReport'}</code>
                                </pre>
                              </div>

                              {selectedFile.metadata?.feedingDataPipeline?.parameters && (
                                <div className="mt-3 p-3 rounded-3 bg-amber-50 border border-amber-200 text-amber-900 fs-12">
                                  <strong>SQL Parameters:</strong> <span className="font-monospace">{selectedFile.metadata?.feedingDataPipeline?.parameters}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* TAB 4: BOUND DATASET SCHEMA */}
                        {activeTab === 'tab4' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <h6 className="fw-bold text-body mb-0">Bound ADO.NET DataSet Schema & Columns</h6>
                              <span className="badge bg-indigo-50 text-indigo-700 border font-monospace px-2.5 py-1">
                                {selectedFile.metadata?.boundDataSet?.schemaFileName || 'dsReport.xsd'}
                              </span>
                            </div>

                            {selectedFile.metadata?.boundDataSet?.dataTables?.map((dt: any, idx: number) => (
                              <div key={idx} className="mb-4">
                                <div className="p-2.5 bg-body-tertiary border rounded-3 mb-2 d-flex align-items-center justify-content-between">
                                  <strong className="fs-13 font-monospace text-indigo-600">Table [{dt.tableName}]</strong>
                                  <span className="badge bg-slate-200 text-slate-700 fs-11">{dt.columns?.length || dt.columnCount || 0} Columns</span>
                                </div>

                                <div className="table-responsive">
                                  <table className="table table-hover table-bordered align-middle fs-13 mb-0">
                                    <thead>
                                      <tr>
                                        <th style={{ width: '50px' }}>#</th>
                                        <th>Column / Field Name</th>
                                        <th>Data Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {dt.columns?.map((c: any, cIdx: number) => (
                                        <tr key={cIdx}>
                                          <td className="text-muted text-center fs-11">{cIdx + 1}</td>
                                          <td><strong className="font-monospace text-body">{c.name}</strong></td>
                                          <td><span className="badge bg-indigo-50 text-indigo-700 font-monospace">{c.dataType}</span></td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )) || (
                              <div className="alert alert-light border text-muted fs-13 mb-0">No DataTable columns mapped.</div>
                            )}
                          </div>
                        )}

                        {/* TAB 5: INFLOW & OUTFLOW GRAPH */}
                        {activeTab === 'tab5' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Inflow & Outflow Dependency Matrix</h6>
                            <div className="row g-3">
                              <div className="col-md-6">
                                <div className="p-3.5 rounded-3 bg-body-tertiary border h-100">
                                  <h6 className="fw-bold text-rose-600 fs-13 mb-2">Upstream Presentation Inflow (Callers)</h6>
                                  <div className="d-flex flex-column gap-1.5">
                                    {selectedFile.metadata?.inflow?.uiCallers?.length > 0 ? (
                                      selectedFile.metadata?.inflow?.uiCallers.map((c: string, idx: number) => (
                                        <span key={idx} className="badge bg-rose-50 text-rose-800 border border-rose-200 p-2 fs-12 font-monospace text-start">
                                          📄 {c}
                                        </span>
                                      ))
                                    ) : (
                                      <span className="badge bg-rose-50 text-rose-800 border border-rose-200 p-2 fs-12 font-monospace text-start">
                                        📄 {selectedFile.metadata?.feedingDataPipeline?.callingViewerPage || 'ReportViewer.aspx'}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="p-3.5 rounded-3 bg-body-tertiary border h-100">
                                  <h6 className="fw-bold text-emerald-600 fs-13 mb-2">Downstream Data Outflow (Tables & Services)</h6>
                                  <div className="d-flex flex-column gap-1.5">
                                    <span className="badge bg-emerald-50 text-emerald-800 border border-emerald-200 p-2 fs-12 font-monospace text-start">
                                      🗄️ {selectedFile.metadata?.boundDataSet?.schemaFileName || 'DataSet Schema'}
                                    </span>
                                    {selectedFile.metadata?.feedingDataPipeline?.targetTables?.map((t: string, idx: number) => (
                                      <span key={idx} className="badge bg-slate-100 text-slate-800 border p-2 fs-12 font-monospace text-start">
                                        🗃️ {t} (Database Table)
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* TYPE 5: DATASET SCHEMA TABS */}
                    {detectedFileType === 'xsd' && (
                      <>
                        {activeTab === 'tab1' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">XML DataSet DataTables & Columns</h6>
                            {selectedFile.metadata?.dataTables?.map((dt: any, idx: number) => (
                              <div key={idx} className="mb-4">
                                <h6 className="fw-bold text-indigo-600 font-monospace mb-2">Table: [{dt.tableName}]</h6>
                                <div className="table-responsive">
                                  <table className="table table-hover table-bordered align-middle fs-13 mb-0">
                                    <thead>
                                      <tr>
                                        <th>Column Name</th>
                                        <th>XML Data Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {dt.columns?.map((c: any, cIdx: number) => (
                                        <tr key={cIdx}>
                                          <td><strong className="font-monospace text-body">{c.name}</strong></td>
                                          <td><span className="badge bg-slate-100 text-slate-700 font-monospace">{c.dataType}</span></td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === 'tab2' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Relationships & Constraints</h6>
                            <p className="fs-13 text-body-secondary mb-0">Strongly-typed XML Schema constraints mapped to physical table [{selectedFile.metadata?.targetTable}].</p>
                          </div>
                        )}

                        {activeTab === 'tab3' && (
                          <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h6 className="fw-bold text-body mb-3">Connected Crystal Reports</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {selectedFile.metadata?.connectedReports?.map((r: string, idx: number) => (
                                <span key={idx} className="badge bg-indigo-50 text-indigo-700 border border-indigo-200 p-2 fs-12 font-monospace">
                                  📊 {r}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'tab4' && (
                          <div className="card border-0 shadow-sm rounded-4 p-3 bg-slate-900 text-slate-100">
                            <pre className="mb-0 font-monospace fs-12" style={{ lineHeight: '1.6' }}>
                              <code>{selectedFile.metadata?.completeCodeWithComments}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}

                    {/* TYPE 6: CONSOLIDATED ENTITY GROUP VIEW */}
                    {detectedFileType === 'group' && (
                      <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h6 className="fw-bold text-body mb-3">Consolidated Files in [{selectedFile.entityName}] Hub</h6>
                        <div className="table-responsive">
                          <table className="table table-hover table-bordered align-middle fs-13 mb-0">
                            <thead>
                              <tr>
                                <th>File Name</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Relative Path</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedFile.files?.map((f: any, idx: number) => (
                                <tr key={idx} style={{ cursor: 'pointer' }} onClick={() => handleSelectFile(f)}>
                                  <td><strong className="text-indigo-600 font-monospace">{f.fileName}</strong></td>
                                  <td><span className="badge bg-slate-100 text-slate-700 font-monospace">{f.fileType}</span></td>
                                  <td><span className="badge bg-blue-50 text-blue-700 font-monospace">{f.category}</span></td>
                                  <td className="text-muted font-monospace fs-12">{f.filePath}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                  <FolderGit2 size={48} className="mb-3 text-slate-300" />
                  <h6 className="fw-bold text-slate-600">Select a File to Inspect</h6>
                  <p className="fs-12">Click any node in the left hierarchy tree to inspect its type-aware architecture.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FUNCTION DETAILS CHILD MODAL */}
      {selectedFunctionDetail && (
        <div
          className="modal fade show d-block"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            zIndex: 1065
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 rounded-4 shadow-2xl overflow-hidden">
              <div className="modal-header py-3 px-4 text-white border-0" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                <div>
                  <h6 className="modal-title fw-bold text-white mb-0 font-monospace fs-15">
                    Function: {selectedFunctionDetail.name}
                  </h6>
                  <small className="text-white/80 fs-11">File: {selectedFunctionDetail.fileName}</small>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFunctionDetail(null)}
                  className="btn btn-light btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '28px', height: '28px' }}
                >
                  <X size={16} />
                </button>
              </div>
              <div className="modal-body p-4" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                <div className="mb-3">
                  <strong className="fs-12 text-muted d-block mb-1">Business Logic Goal:</strong>
                  <p className="fs-13 text-body bg-body-tertiary p-3 rounded-3 border mb-0">{selectedFunctionDetail.description}</p>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="p-2.5 rounded-3 bg-body-tertiary border">
                      <small className="text-muted d-block mb-0.5">Return Type</small>
                      <strong className="fs-12 font-monospace text-indigo-600">{selectedFunctionDetail.returnType}</strong>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-2.5 rounded-3 bg-body-tertiary border">
                      <small className="text-muted d-block mb-0.5">Parameters</small>
                      <strong className="fs-12 font-monospace text-body">{selectedFunctionDetail.parameters}</strong>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <strong className="fs-12 text-muted d-block mb-1">Source Code:</strong>
                  <div className="p-3 rounded-3 bg-slate-900 text-slate-100 font-monospace fs-12 overflow-auto" style={{ maxHeight: '250px' }}>
                    <pre className="mb-0"><code>{selectedFunctionDetail.code}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Tab Button Component
const TabButton: React.FC<{ id: string; label: string; active: string; onClick: (id: string) => void }> = ({
  id,
  label,
  active,
  onClick
}) => {
  const isActive = active === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={`btn btn-link px-1 py-3 text-decoration-none transition-all position-relative ${
        isActive ? 'text-primary fw-bold' : 'text-body-secondary hover:text-body'
      }`}
      style={{
        borderBottom: isActive ? '2px solid var(--bs-primary)' : '2px solid transparent',
        marginBottom: '-1px'
      }}
    >
      {label}
    </button>
  );
};

// Helper Recursive TreeNodeRenderer Component with Semantic Icons & Smooth Expand Animation
const TreeNodeRenderer: React.FC<{
  node: any;
  level: number;
  expandedNodes: Set<string>;
  toggleNode: (id: string) => void;
  selectedFile: any;
  onSelectFile: (node: any) => void;
  onSelectGroup: (node: any) => void;
  searchQuery: string;
}> = ({
  node,
  level,
  expandedNodes,
  toggleNode,
  selectedFile,
  onSelectFile,
  onSelectGroup,
  searchQuery
}) => {
  if (!node) return null;
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedFile && (selectedFile.id === node.id || selectedFile.filePath === node.filePath || selectedFile.fileName === node.name);

  // Filter logic
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    const matchesName = (node.name || '').toLowerCase().includes(q);
    const matchesChild = node.children && node.children.some((c: any) => (c.name || '').toLowerCase().includes(q));
    if (!matchesName && !matchesChild) return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      toggleNode(node.id);
    }
    if (node.type === 'entity_group') {
      onSelectGroup(node);
    } else if (node.type === 'file' || node.filePath || node.data) {
      onSelectFile(node);
    }
  };

  const getIcon = () => {
    const nameLower = (node.name || '').toLowerCase();
    const type = node.type || '';
    const fileType = (node.fileType || '').toLowerCase();
    const iconKey = node.icon || '';

    // 1. Solution Root
    if (type === 'project_root' || nameLower.includes('solution')) {
      return <FolderGit2 size={16} className="text-indigo-600 flex-shrink-0" />;
    }

    // 2. Modules
    if (type === 'module') {
      if (nameLower.includes('academic') || nameLower.includes('school') || nameLower.includes('student')) {
        return <GraduationCap size={16} className="text-indigo-600 flex-shrink-0" />;
      }
      if (nameLower.includes('hrm') || nameLower.includes('employee') || nameLower.includes('staff')) {
        return <Users size={16} className="text-teal-600 flex-shrink-0" />;
      }
      if (nameLower.includes('account') || nameLower.includes('fee') || nameLower.includes('ledger') || nameLower.includes('finance')) {
        return <Wallet size={16} className="text-amber-600 flex-shrink-0" />;
      }
      if (nameLower.includes('global') || nameLower.includes('master')) {
        return <ShieldCheck size={16} className="text-purple-600 flex-shrink-0" />;
      }
      return <Globe size={16} className="text-blue-600 flex-shrink-0" />;
    }

    // 3. Entity Groups (UI folders or Hubs)
    if (type === 'entity_group' || iconKey === 'FolderHeart') {
      return <FolderHeart size={15} className="text-purple-600 flex-shrink-0" />;
    }

    // 4. Categories & Subcategories
    if (type === 'category' || type === 'subcategory') {
      if (nameLower.includes('libcode') || nameLower.includes('code') || iconKey === 'Code2') {
        return <Code2 size={15} className="text-blue-600 flex-shrink-0" />;
      }
      if (nameLower.includes('bll') || iconKey === 'Cpu') {
        return <Cpu size={14} className="text-blue-600 flex-shrink-0" />;
      }
      if (nameLower.includes('dal') || iconKey === 'Database') {
        return <Database size={14} className="text-cyan-600 flex-shrink-0" />;
      }
      if (nameLower.includes('dao') || nameLower.includes('model') || iconKey === 'Boxes') {
        return <Boxes size={14} className="text-purple-600 flex-shrink-0" />;
      }
      if (nameLower.includes('ui') || nameLower.includes('webform') || nameLower.includes('presentation') || iconKey === 'Layout') {
        return <LayoutGrid size={15} className="text-emerald-600 flex-shrink-0" />;
      }
      if (nameLower.includes('mastersetup') || iconKey === 'Sliders') {
        return <Sliders size={14} className="text-emerald-600 flex-shrink-0" />;
      }
      if (nameLower.includes('operation') || iconKey === 'Activity' || iconKey === 'ShieldCheck') {
        return <Activity size={14} className="text-emerald-600 flex-shrink-0" />;
      }
      if (nameLower.includes('report') || nameLower.includes('document') || iconKey === 'FileSpreadsheet') {
        return <FileSpreadsheet size={15} className="text-rose-600 flex-shrink-0" />;
      }
      if (nameLower.includes('crystal') || iconKey === 'FileText') {
        return <FileText size={14} className="text-rose-600 flex-shrink-0" />;
      }
      if (nameLower.includes('dataset') || nameLower.includes('schema') || iconKey === 'Table') {
        return <Table size={14} className="text-indigo-600 flex-shrink-0" />;
      }
      if (nameLower.includes('config') || iconKey === 'Settings') {
        return <Settings size={14} className="text-slate-600 flex-shrink-0" />;
      }
      return <FolderOpen size={14} className="text-slate-600 flex-shrink-0" />;
    }

    // 5. Leaf Physical Files
    if (fileType === 'aspx') {
      return <Layout size={14} className="text-emerald-600 flex-shrink-0" />;
    }
    if (fileType === 'aspx.cs') {
      return <FileCode size={14} className="text-amber-600 flex-shrink-0" />;
    }
    if (fileType === 'rpt') {
      return <FileBarChart size={14} className="text-rose-600 flex-shrink-0" />;
    }
    if (fileType === 'xsd') {
      return <Table size={14} className="text-indigo-600 flex-shrink-0" />;
    }
    if (fileType === 'config' || fileType === 'asax') {
      return <Settings size={14} className="text-slate-600 flex-shrink-0" />;
    }
    if (node.category === 'DAO' || iconKey === 'Boxes') {
      return <Boxes size={14} className="text-purple-600 flex-shrink-0" />;
    }
    if (node.category === 'DAL' || iconKey === 'Database') {
      return <Database size={14} className="text-cyan-600 flex-shrink-0" />;
    }
    if (node.category === 'BLL' || iconKey === 'Cpu') {
      return <Cpu size={14} className="text-blue-600 flex-shrink-0" />;
    }

    return <FileCode size={14} className="text-slate-500 flex-shrink-0" />;
  };

  const isMaster = level <= 1;
  const isCategory = level === 2;
  const isNestedCodeBehind = (node.fileType || '').toLowerCase() === 'aspx.cs' || (node.name || '').endsWith('.aspx.cs');

  return (
    <div className="user-select-none mb-0.5">
      <div
        onClick={handleClick}
        className={`d-flex align-items-center justify-content-between gap-1.5 py-1 px-2 rounded-2 transition-all ${
          isSelected
            ? 'bg-indigo-50 text-indigo-900 fw-bold border-start border-3 border-indigo-600 shadow-xs'
            : isMaster
            ? 'hover:bg-slate-100 text-slate-800 fw-bold'
            : isCategory
            ? 'hover:bg-slate-100 text-slate-700 fw-semibold'
            : 'hover:bg-slate-100 text-slate-600'
        }`}
        style={{
          paddingLeft: '6px',
          cursor: 'pointer',
          fontSize: isMaster ? '12.5px' : '11.5px',
          lineHeight: '1.45',
          background: isSelected ? undefined : (level === 0 ? 'rgba(238, 242, 255, 0.4)' : undefined),
          transition: 'all 0.15s ease-in-out'
        }}
      >
        <div className="d-flex align-items-center gap-1.5 text-truncate flex-grow-1">
          {hasChildren ? (
            <span
              className="text-slate-400 d-inline-flex align-items-center justify-content-center transition-transform p-0.5 hover:text-slate-600 rounded"
              style={{
                width: '14px',
                height: '14px',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <ChevronRight size={13} />
            </span>
          ) : (
            <span style={{ width: '14px' }} />
          )}

          {getIcon()}

          <span
            className={`text-truncate flex-grow-1 ${isNestedCodeBehind ? 'fst-italic text-slate-500 font-monospace' : ''}`}
            title={node.name}
            style={{ fontWeight: isSelected ? '700' : (isMaster ? '700' : isCategory ? '600' : '500') }}
          >
            {node.name}
          </span>
        </div>

        {/* Count Badge on Parent Nodes */}
        {hasChildren && (
          <span
            className={`badge rounded-pill fs-10 px-1.5 ${
              isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 border border-slate-200'
            }`}
            style={{ fontSize: '10px', padding: '1px 5px', flexShrink: 0 }}
          >
            {node.children.length}
          </span>
        )}
      </div>

      {/* Stepped Child Branch Container with Connecting Tree Line */}
      {hasChildren && isExpanded && (
        <div
          className="tree-branch-container position-relative"
          style={{
            borderLeft: '1.5px solid #cbd5e1',
            marginLeft: `${Math.min(level * 8 + 13, 28)}px`,
            paddingLeft: '6px',
            marginTop: '2px',
            marginBottom: '3px',
            animation: 'fadeIn 0.15s ease-in-out'
          }}
        >
          {node.children.map((child: any) => (
            <TreeNodeRenderer
              key={child.id || child.name}
              node={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
              selectedFile={selectedFile}
              onSelectFile={onSelectFile}
              onSelectGroup={onSelectGroup}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};
