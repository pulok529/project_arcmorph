import React, { useState, useEffect, useMemo } from 'react';
import { MermaidViewer } from './common/MermaidViewer';
import {
  X,
  FolderGit2,
  Layers,
  Globe,
  Code2,
  Cpu,
  Database,
  Boxes,
  Layout,
  Sliders,
  Activity,
  Eye,
  FileSpreadsheet,
  FileText,
  Table,
  ShieldCheck,
  Settings,
  Key,
  FolderHeart,
  PlusCircle,
  Edit3,
  FileCode,
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  Sparkles,
  Copy,
  Check,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Info,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Users,
  Wallet,
  FileBarChart,
  LayoutGrid,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

interface TreeNode {
  id: string;
  name: string;
  type: 'project_root' | 'module' | 'category' | 'subcategory' | 'entity_group' | 'file';
  fileType?: string;
  icon?: string;
  filePath?: string;
  category?: string;
  module?: string;
  entityName?: string;
  groupFileSummary?: any[];
  files?: any[];
  data?: any;
  children?: TreeNode[];
}

interface ProjectOverviewModalProps {
  projectId: string;
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectOverviewModal: React.FC<ProjectOverviewModalProps> = ({
  projectId,
  projectName,
  isOpen,
  onClose
}) => {
  const [systemMode, setSystemMode] = useState<'sys1' | 'sys2'>('sys1');
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [fileDetailsCache, setFileDetailsCache] = useState<Record<string, any>>({});
  const [groupDetailsCache, setGroupDetailsCache] = useState<Record<string, any[]>>({});
  const [treeDataSys1, setTreeDataSys1] = useState<TreeNode | null>(null);
  const [treeDataSys2, setTreeDataSys2] = useState<TreeNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [activeGroupFileIndex, setActiveGroupFileIndex] = useState<number>(0);
  const [activeInspectorTab, setActiveInspectorTab] = useState<'operations' | 'class_flow' | 'db_commands' | 'code' | 'flowcharts'>('operations');
  const [codeViewMode, setCodeViewMode] = useState<'collapsible' | 'full'>('collapsible');
  const [collapsedChunks, setCollapsedChunks] = useState<Record<string, boolean>>({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedFunctionCode, setCopiedFunctionCode] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; node: TreeNode } | null>(null);
  const [selectedFunctionDetail, setSelectedFunctionDetail] = useState<any | null>(null);

  // Fetch Lightweight Tree Data (<2MB)
  useEffect(() => {
    if (!isOpen || !projectId) return;
    setLoading(true);
    fetch(`/api/projects/${projectId}/project-overview-tree`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setTreeDataSys1(data.system1Tree);
          setTreeDataSys2(data.system2Tree);

          // Prime cache with initial file detail if provided
          if (data.initialFileDetail) {
            setFileDetailsCache(prev => ({
              ...prev,
              [data.initialFileDetail.filePath]: data.initialFileDetail,
              [data.initialFileDetail.fileName]: data.initialFileDetail
            }));
          }

          // Default select first file in system 1
          const firstLeaf = findFirstLeaf(data.system1Tree);
          if (firstLeaf) setSelectedNode(firstLeaf);

          // Auto expand root & first level modules
          const initialExpanded: Record<string, boolean> = {
            sys1_root: true,
            sys2_root: true,
            sys1_mod_Academic: true,
            sys2_mod_Academic: true,
            sys1_Academic_ui: true,
            sys2_Academic_ui: true
          };
          setExpandedNodes(initialExpanded);
        }
      })
      .catch(err => console.error('Failed to load overview tree:', err))
      .finally(() => setLoading(false));
  }, [isOpen, projectId]);

  // On-Demand File Detail Fetching when selectedNode changes
  useEffect(() => {
    if (!selectedNode || !projectId) return;

    if (selectedNode.type === 'file') {
      const pathKey = selectedNode.filePath || selectedNode.data?.filePath || selectedNode.name.replace(' [Code-Behind]', '').replace(' [UI Page]', '');
      if (pathKey && !fileDetailsCache[pathKey]) {
        setLoadingDetail(true);
        fetch(`/api/projects/${projectId}/file-overview-detail?filePath=${encodeURIComponent(pathKey)}`)
          .then(res => res.json())
          .then(data => {
            if (data.success && data.fileDetail) {
              setFileDetailsCache(prev => ({
                ...prev,
                [pathKey]: data.fileDetail,
                [data.fileDetail.filePath]: data.fileDetail,
                [data.fileDetail.fileName]: data.fileDetail
              }));
            }
          })
          .catch(err => console.error('Error loading file detail:', err))
          .finally(() => setLoadingDetail(false));
      }
    } else if (selectedNode.type === 'entity_group') {
      const groupKey = `${selectedNode.module || ''}_${selectedNode.entityName || ''}`;
      if (selectedNode.entityName && !groupDetailsCache[groupKey]) {
        setLoadingDetail(true);
        fetch(`/api/projects/${projectId}/file-overview-detail?entityName=${encodeURIComponent(selectedNode.entityName)}&module=${encodeURIComponent(selectedNode.module || '')}`)
          .then(res => res.json())
          .then(data => {
            if (data.success && data.files) {
              setGroupDetailsCache(prev => ({ ...prev, [groupKey]: data.files }));
              data.files.forEach((f: any) => {
                setFileDetailsCache(prev => ({ ...prev, [f.filePath]: f, [f.fileName]: f }));
              });
            }
          })
          .catch(err => console.error('Error loading group detail:', err))
          .finally(() => setLoadingDetail(false));
      }
    }
  }, [selectedNode, projectId, fileDetailsCache, groupDetailsCache]);

  // Find first file leaf
  const findFirstLeaf = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;
    if (node.type === 'file' || node.type === 'entity_group') return node;
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        const found = findFirstLeaf(child);
        if (found) return found;
      }
    }
    return null;
  };

  // Active Tree
  const currentTree = systemMode === 'sys1' ? treeDataSys1 : treeDataSys2;

  // Active File Node from selection (handling Group pagination for System 2)
  const activeFileItem = useMemo(() => {
    if (!selectedNode) return null;
    if (selectedNode.type === 'entity_group') {
      const groupKey = `${selectedNode.module || ''}_${selectedNode.entityName || ''}`;
      const cachedGroup = groupDetailsCache[groupKey];
      if (cachedGroup && cachedGroup.length > 0) {
        const idx = Math.min(Math.max(0, activeGroupFileIndex), cachedGroup.length - 1);
        return cachedGroup[idx];
      }
      if (selectedNode.files && selectedNode.files.length > 0) {
        const idx = Math.min(Math.max(0, activeGroupFileIndex), selectedNode.files.length - 1);
        return selectedNode.files[idx];
      }
      return selectedNode.data || null;
    }
    const pathKey = selectedNode.filePath || selectedNode.data?.filePath || selectedNode.name.replace(' [Code-Behind]', '').replace(' [UI Page]', '');
    if (pathKey && fileDetailsCache[pathKey]) {
      return fileDetailsCache[pathKey];
    }
    if (selectedNode.data) return selectedNode.data;
    return null;
  }, [selectedNode, activeGroupFileIndex, fileDetailsCache, groupDetailsCache]);

  // Group files list if group selected
  const groupFiles = useMemo(() => {
    if (selectedNode?.type === 'entity_group') {
      const groupKey = `${selectedNode.module || ''}_${selectedNode.entityName || ''}`;
      if (groupDetailsCache[groupKey]) {
        return groupDetailsCache[groupKey];
      }
      if (selectedNode.groupFileSummary) {
        return selectedNode.groupFileSummary;
      }
      if (selectedNode.files) {
        return selectedNode.files;
      }
    }
    return [];
  }, [selectedNode, groupDetailsCache]);

  // Handle tree node click
  const handleNodeClick = (node: TreeNode, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (node.children && node.children.length > 0 && node.type !== 'entity_group') {
      setExpandedNodes(prev => ({ ...prev, [node.id]: !prev[node.id] }));
    }
    if (node.type === 'file' || node.type === 'entity_group') {
      setSelectedNode(node);
      setActiveGroupFileIndex(0);
    }
  };

  // Toggle node expand/collapse specifically via chevron
  const toggleNodeExpand = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  // Handle Right Click Context Menu
  const handleContextMenu = (e: React.MouseEvent, node: TreeNode) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedNode(node);
    setActiveGroupFileIndex(0);
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      node
    });
  };

  // Close context menu on global click
  useEffect(() => {
    const closeMenu = () => setContextMenu(null);
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  // Copy code helper
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Copy function code helper
  const handleCopyFunctionCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFunctionCode(true);
    setTimeout(() => setCopiedFunctionCode(false), 2000);
  };

  // Toggle chunk collapse
  const toggleChunk = (chunkId: string) => {
    setCollapsedChunks(prev => ({ ...prev, [chunkId]: !prev[chunkId] }));
  };

  // Helper to render icon by name
  const renderIcon = (iconName?: string, className: string = 'me-1.5') => {
    const props = { size: 15, className };
    switch (iconName) {
      case 'FolderGit2': return <FolderGit2 {...props} className={`${className} text-primary`} />;
      case 'GraduationCap': return <GraduationCap {...props} className={`${className} text-indigo-600`} />;
      case 'Users': return <Users {...props} className={`${className} text-teal-600`} />;
      case 'Wallet': return <Wallet {...props} className={`${className} text-amber-600`} />;
      case 'Layers': return <Layers {...props} className={`${className} text-info`} />;
      case 'Globe': return <Globe {...props} className={`${className} text-success`} />;
      case 'Code2': return <Code2 {...props} className={`${className} text-primary`} />;
      case 'Cpu': return <Cpu {...props} className={`${className} text-primary`} />;
      case 'Database': return <Database {...props} className={`${className} text-info`} />;
      case 'Boxes': return <Boxes {...props} className={`${className} text-purple-600`} />;
      case 'Layout': return <Layout {...props} className={`${className} text-success`} />;
      case 'LayoutGrid': return <LayoutGrid {...props} className={`${className} text-success`} />;
      case 'Sliders': return <Sliders {...props} className={`${className} text-primary`} />;
      case 'Activity': return <Activity {...props} className={`${className} text-success`} />;
      case 'Eye': return <Eye {...props} className={`${className} text-info`} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} className={`${className} text-danger`} />;
      case 'FileText': return <FileText {...props} className={`${className} text-danger`} />;
      case 'FileBarChart': return <FileBarChart {...props} className={`${className} text-danger`} />;
      case 'Table': return <Table {...props} className={`${className} text-primary`} />;
      case 'ShieldCheck': return <ShieldCheck {...props} className={`${className} text-purple-600`} />;
      case 'Settings': return <Settings {...props} className={`${className} text-secondary`} />;
      case 'Key': return <Key {...props} className={`${className} text-warning`} />;
      case 'FolderHeart': return <FolderHeart {...props} className={`${className} text-danger`} />;
      case 'PlusCircle': return <PlusCircle {...props} className={`${className} text-success`} />;
      case 'Edit3': return <Edit3 {...props} className={`${className} text-warning`} />;
      default: return <FileCode {...props} className={`${className} text-muted`} />;
    }
  };

  // Recursive Tree Node Renderer with Search Filter & .aspx -> .aspx.cs Nesting
  const renderTreeNode = (node: TreeNode, depth: number = 0): React.ReactNode => {
    const isExpanded = expandedNodes[node.id] || !!searchTerm;
    const isSelected = selectedNode?.id === node.id;
    const hasChildren = node.children && node.children.length > 0;
    const isNestedCodeBehind = node.fileType === 'aspx.cs' || (node.name || '').endsWith('.aspx.cs');
    const isMaster = depth <= 1;
    const isCategory = depth === 2;

    // Filter check
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchesSelf = node.name.toLowerCase().includes(term);
      const matchesChildren = node.children?.some(c => checkDeepMatch(c, term));
      if (!matchesSelf && !matchesChildren) return null;
    }

    return (
      <div key={node.id} className="tree-node-wrapper mb-0.5">
        <div
          onClick={(e) => handleNodeClick(node, e)}
          onContextMenu={(e) => handleContextMenu(e, node)}
          style={{
            paddingLeft: '6px',
            paddingRight: '8px',
            fontSize: isMaster ? '12.5px' : '11.5px',
            lineHeight: '1.45',
            background: isSelected ? undefined : (depth === 0 ? 'rgba(238, 242, 255, 0.4)' : undefined)
          }}
          className={`d-flex align-items-center justify-content-between py-1 px-2 rounded-2 cursor-pointer transition select-none ${
            isSelected
              ? 'bg-primary text-white shadow-sm fw-bold'
              : isMaster
              ? 'text-dark fw-bold hover-bg-light'
              : isCategory
              ? 'text-dark fw-semibold hover-bg-light'
              : 'text-secondary hover-bg-light'
          }`}
        >
          <div className="d-flex align-items-center gap-1.5 text-truncate flex-grow-1">
            {hasChildren && node.type !== 'entity_group' ? (
              <span
                onClick={(e) => toggleNodeExpand(node.id, e)}
                className="text-muted p-0.5 hover-bg-light rounded cursor-pointer transition-transform d-inline-flex align-items-center justify-content-center"
                style={{
                  width: '14px',
                  height: '14px',
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                title={isExpanded ? 'Collapse' : 'Expand'}
              >
                <ChevronRight size={13} />
              </span>
            ) : (
              <span style={{ width: '14px' }} />
            )}

            {renderIcon(node.icon, isSelected ? 'text-white me-1' : (isNestedCodeBehind ? 'text-warning me-1' : 'me-1'))}

            <span
              className={`font-monospace text-truncate flex-grow-1 ${isNestedCodeBehind ? 'fst-italic text-secondary' : ''}`}
              title={node.name}
              style={{ fontWeight: isSelected ? '700' : (isMaster ? '700' : isCategory ? '600' : '500') }}
            >
              {node.name}
            </span>
          </div>

          {node.type === 'entity_group' && (
            <span className={`badge rounded-pill fs-10 px-1.5 ms-1 ${
              isSelected ? 'bg-white text-dark' : 'bg-danger-subtle text-danger'
            }`} style={{ fontSize: '10px', padding: '1px 5px' }}>
              Group ({node.files?.length || 1})
            </span>
          )}

          {hasChildren && node.type !== 'entity_group' && (
            <span className={`badge rounded-pill fs-10 px-1.5 ${
              isSelected ? 'bg-white text-dark' : 'bg-light text-muted border'
            }`} style={{ fontSize: '10px', padding: '1px 5px' }}>
              {node.children?.length}
            </span>
          )}
        </div>

        {/* Stepped Child Branch Container with Connecting Tree Line */}
        {hasChildren && isExpanded && (
          <div
            className="tree-children-container position-relative"
            style={{
              borderLeft: '1.5px solid #cbd5e1',
              marginLeft: `${Math.min(depth * 8 + 13, 28)}px`,
              paddingLeft: '6px',
              marginTop: '2px',
              marginBottom: '3px',
              animation: 'fadeIn 0.15s ease-in-out'
            }}
          >
            {node.children?.map(child => renderTreeNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const checkDeepMatch = (node: TreeNode, term: string): boolean => {
    if (node.name.toLowerCase().includes(term)) return true;
    return node.children?.some(c => checkDeepMatch(c, term)) || false;
  };

  if (!isOpen) return null;

  const isAspxFile = activeFileItem?.fileType === 'aspx' || (activeFileItem?.metadata?.uiControls && activeFileItem.metadata.uiControls.length > 0);
  const isPureClass = !isAspxFile && activeFileItem?.fileType !== 'aspx.cs' && activeFileItem?.category !== 'Report' && activeFileItem?.fileType !== 'rpt';

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 1055 }}>
      <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '96vw', height: '94vh', margin: '3vh auto' }}>
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden d-flex flex-column h-100 bg-white">
          
          {/* ========================================================================= */}
          {/* 1. MODAL HEADER & SYSTEM 1 / SYSTEM 2 ARCHITECTURE SWITCHER               */}
          {/* ========================================================================= */}
          <div className="modal-header px-3 py-2 bg-light border-bottom d-flex align-items-center justify-content-between flex-nowrap gap-3" style={{ minHeight: '58px' }}>
            <div className="d-flex align-items-center gap-2.5 flex-shrink-0">
              {sidebarCollapsed && (
                <button
                  onClick={() => setSidebarCollapsed(false)}
                  className="btn btn-primary btn-xs rounded-pill shadow-sm d-flex align-items-center gap-1.5 px-2.5 py-1 me-1"
                  title="Expand TreeView"
                >
                  <Menu size={13} />
                  <span className="fs-11 font-monospace fw-bold">Show Tree</span>
                </button>
              )}

              <div className="bg-primary text-white p-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h5 className="modal-title fw-bold text-dark mb-0 font-monospace fs-15">
                    {projectName} • Deep Architecture Explorer
                  </h5>
                  <span className="badge bg-primary-subtle text-primary font-monospace fs-10 px-2 py-0.5 rounded-pill">
                    Original Legacy Ground Truth (Pillar 11)
                  </span>
                </div>
                <small className="text-muted fs-11 font-monospace">
                  Switchable System 1 (Layered Code) &amp; System 2 (Operational Entity Hubs) with Plain English Logic &amp; Real DB Query Maps.
                </small>
              </div>
            </div>

            {/* Central Segmented System Switcher (System 1 vs System 2) - Compact and Responsive */}
            <div className="bg-white p-1 rounded-pill border shadow-sm d-flex align-items-center gap-1 flex-shrink-0">
              <button
                onClick={() => setSystemMode('sys1')}
                title="System 1: Layered Architecture (LibCode ➔ UI ➔ Reports ➔ Global)"
                className={`btn btn-xs rounded-pill px-3 py-1 font-monospace fs-11 transition d-flex align-items-center gap-1.5 ${
                  systemMode === 'sys1' ? 'btn-primary shadow-sm fw-bold' : 'btn-light text-muted'
                }`}
              >
                <Layers size={13} />
                <span>System 1: Layers</span>
              </button>

              <button
                onClick={() => setSystemMode('sys2')}
                title="System 2: Operational Entity Hubs (Class, Department, Admissions)"
                className={`btn btn-xs rounded-pill px-3 py-1 font-monospace fs-11 transition d-flex align-items-center gap-1.5 ${
                  systemMode === 'sys2' ? 'btn-primary shadow-sm fw-bold' : 'btn-light text-muted'
                }`}
              >
                <FolderHeart size={13} />
                <span>System 2: Entity Hubs</span>
              </button>
            </div>

            {/* Close Button - Cleanly Locked on Far Right Centered */}
            <div className="d-flex align-items-center flex-shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm btn-outline-secondary rounded-pill p-1.5 d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
                aria-label="Close"
                title="Close Explorer"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. MODAL BODY (LEFT TREEVIEW + RIGHT DEEP INSPECTOR)                      */}
          {/* ========================================================================= */}
          <div className="modal-body p-0 d-flex flex-row overflow-hidden flex-grow-1 position-relative">
            
            {/* --------------------------------------------------------------------- */}
            {/* LEFT SIDEBAR: COLLAPSIBLE ANIMATED TREEVIEW                           */}
            {/* --------------------------------------------------------------------- */}
            <div
              style={{
                width: sidebarCollapsed ? '0px' : '360px',
                minWidth: sidebarCollapsed ? '0px' : '360px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: sidebarCollapsed ? 0 : 1,
                visibility: sidebarCollapsed ? 'hidden' : 'visible'
              }}
              className="border-end bg-light d-flex flex-column h-100 overflow-hidden"
            >
              {/* Sidebar Header & Search Bar with generous padding */}
              <div className="border-bottom bg-white d-flex flex-column gap-2" style={{ padding: '10px 14px' }}>
                <div className="d-flex align-items-center justify-content-between ps-1 pe-0.5">
                  <span className="fs-11 fw-bold text-uppercase text-muted font-monospace d-flex align-items-center gap-1.5">
                    <FolderGit2 size={13} className="text-primary" />
                    <span>{systemMode === 'sys1' ? 'System 1 Tree (Layers)' : 'System 2 Tree (Entity Hubs)'}</span>
                  </span>
                  
                  <button
                    onClick={() => setSidebarCollapsed(true)}
                    className="btn btn-xs btn-outline-secondary rounded-pill p-1 d-flex align-items-center"
                    title="Collapse Sidebar"
                  >
                    <Menu size={13} />
                  </button>
                </div>

                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-light border-end-0 text-muted ps-2.5 pe-1.5">
                    <Search size={13} />
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-sm border-start-0 ps-1 fs-11 font-monospace"
                    placeholder="Search files, entities, BLL, DAL..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="btn btn-sm btn-outline-secondary border-start-0 pe-2"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable Tree Container with proper padding */}
              <div className="flex-grow-1 overflow-auto" style={{ padding: '8px 10px' }}>
                {loading ? (
                  <div className="p-4 text-center">
                    <div className="spinner-border spinner-border-sm text-primary mb-2" role="status" />
                    <div className="text-muted fs-11 font-monospace">Parsing AST from physical files...</div>
                  </div>
                ) : currentTree ? (
                  renderTreeNode(currentTree)
                ) : (
                  <div className="p-3 text-muted text-center fs-12">No Tree Available</div>
                )}
              </div>

              {/* Sidebar Footer Info */}
              <div className="p-2 border-top bg-white fs-11 font-monospace text-muted d-flex align-items-center justify-content-between" style={{ padding: '8px 12px' }}>
                <span>Total Modules: <strong>4</strong></span>
                <span className="badge bg-light text-dark border">Right-click for quick jumps</span>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* RIGHT PANEL: 5-TAB MULTI-VIEW DEEP INSPECTOR                          */}
            {/* --------------------------------------------------------------------- */}
            <div className="flex-grow-1 d-flex flex-column h-100 overflow-hidden bg-white">
              
              {activeFileItem ? (
                <>
                  {/* Top Active Node Banner & Group Multi-File Switcher */}
                  <div className="px-4 py-3 bg-light border-bottom">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-2">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span className="badge bg-primary rounded-pill font-monospace fs-11">
                            {selectedNode?.type === 'entity_group' ? 'Operational Entity Hub' : activeFileItem.category}
                          </span>
                          <h6 className="fw-bold text-dark mb-0 font-monospace fs-15">
                            {activeFileItem.fileName}
                          </h6>
                          <span className="text-muted font-monospace fs-11 bg-white px-2 py-0.5 rounded border">
                            {activeFileItem.module}
                          </span>
                          {activeFileItem.fileType === 'aspx.cs' && (
                            <span className="badge bg-warning-subtle text-warning font-monospace fs-10 px-2 py-0.5 rounded-pill">
                              Code-Behind Controller
                            </span>
                          )}
                          {activeFileItem.fileType === 'aspx' && (
                            <span className="badge bg-info-subtle text-info font-monospace fs-10 px-2 py-0.5 rounded-pill">
                              WebForms UI Markup
                            </span>
                          )}
                        </div>
                        <small className="text-muted font-monospace fs-11 d-block">
                          Path: <code>{activeFileItem.filePath}</code> • Type: <strong>{activeFileItem.fileType?.toUpperCase()}</strong>
                        </small>
                      </div>

                      {/* If Entity Group (System 2) is selected: Multi-File Tab Switcher with Back/Forward */}
                      {groupFiles.length > 0 && (
                        <div className="bg-white p-1 rounded-3 border shadow-sm d-flex align-items-center gap-1">
                          <span className="text-muted fs-11 font-monospace px-1 text-uppercase fw-semibold">Group Files:</span>
                          
                          <button
                            disabled={activeGroupFileIndex <= 0}
                            onClick={() => setActiveGroupFileIndex(prev => Math.max(0, prev - 1))}
                            className="btn btn-xs btn-outline-secondary rounded-pill p-1"
                            title="Previous File"
                          >
                            <ArrowLeft size={12} />
                          </button>

                          {groupFiles.map((gf, idx) => (
                            <button
                              key={gf.fileName}
                              onClick={() => setActiveGroupFileIndex(idx)}
                              className={`btn btn-xs rounded-pill px-2.5 py-0.5 font-monospace fs-11 transition ${
                                activeGroupFileIndex === idx
                                  ? 'btn-primary fw-bold shadow-sm'
                                  : 'btn-light text-muted'
                              }`}
                            >
                              {gf.fileName.replace(/\.(aspx|ascx|master|cs)$/i, '')}
                            </button>
                          ))}

                          <button
                            disabled={activeGroupFileIndex >= groupFiles.length - 1}
                            onClick={() => setActiveGroupFileIndex(prev => Math.min(groupFiles.length - 1, prev + 1))}
                            className="btn btn-xs btn-outline-secondary rounded-pill p-1"
                            title="Next File"
                          >
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 5-Tab Navigation Bar */}
                    <div className="nav nav-pills gap-1 pt-1">
                      <button
                        onClick={() => setActiveInspectorTab('operations')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill font-monospace d-flex align-items-center gap-1.5 ${
                          activeInspectorTab === 'operations' ? 'active fw-bold' : 'text-muted'
                        }`}
                      >
                        <FileText size={13} />
                        <span>1. {isAspxFile ? 'UI Elements & Controls' : 'Logical Operations & Signatures'}</span>
                      </button>

                      <button
                        onClick={() => setActiveInspectorTab('class_flow')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill font-monospace d-flex align-items-center gap-1.5 ${
                          activeInspectorTab === 'class_flow' ? 'active fw-bold' : 'text-muted'
                        }`}
                      >
                        <Layers size={13} />
                        <span>2. Flow of Classes &amp; References</span>
                      </button>

                      <button
                        onClick={() => setActiveInspectorTab('db_commands')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill font-monospace d-flex align-items-center gap-1.5 ${
                          activeInspectorTab === 'db_commands' ? 'active fw-bold' : 'text-muted'
                        }`}
                      >
                        <Database size={13} />
                        <span>3. Database Commands &amp; Queries</span>
                      </button>

                      <button
                        onClick={() => setActiveInspectorTab('code')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill font-monospace d-flex align-items-center gap-1.5 ${
                          activeInspectorTab === 'code' ? 'active fw-bold' : 'text-muted'
                        }`}
                      >
                        <Code2 size={13} />
                        <span>4. Deconstructed IDE Code View</span>
                      </button>

                      <button
                        onClick={() => setActiveInspectorTab('flowcharts')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill font-monospace d-flex align-items-center gap-1.5 ${
                          activeInspectorTab === 'flowcharts' ? 'active fw-bold' : 'text-muted'
                        }`}
                      >
                        <Activity size={13} />
                        <span>5. Interactive Flowcharts</span>
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Inspector Tab Content Area */}
                  <div className="flex-grow-1 overflow-auto p-4">
                    
                    {/* ========================================================================= */}
                    {/* TAB 1: LOGICAL OPERATIONS & SIGNATURES / ASPX UI CONTROLS INVENTORY       */}
                    {/* ========================================================================= */}
                    {activeInspectorTab === 'operations' && (
                      <div className="d-flex flex-column gap-4">
                        {/* High-Level File Purpose Summary Card */}
                        <div className="p-3.5 bg-primary-subtle border border-primary-subtle rounded-3">
                          <h6 className="fw-bold text-primary font-monospace fs-13 mb-1 d-flex align-items-center gap-1.5">
                            <Sparkles size={15} />
                            Logical Purpose in Project:
                          </h6>
                          <p className="mb-0 fs-13 text-dark leading-relaxed">
                            {activeFileItem.metadata?.logicalSummary || 'Executes core domain logic for this component.'}
                          </p>
                        </div>

                        {/* CASE A: ASPX Markup UI Controls Table */}
                        {isAspxFile && (
                          <div className="border rounded-3 overflow-hidden shadow-sm">
                            <div className="p-2.5 bg-light border-bottom d-flex align-items-center justify-content-between">
                              <span className="fw-bold font-monospace fs-12 text-dark d-flex align-items-center gap-1.5">
                                <Layout size={14} className="text-info" />
                                ASP.NET WebForms UI Controls &amp; Form Elements ({activeFileItem.metadata?.uiControls?.length || 0})
                              </span>
                              <span className="badge bg-light text-muted border fs-10 font-monospace">
                                Parsed Server-Side Controls &amp; Event Handlers
                              </span>
                            </div>

                            <div className="table-responsive">
                              <table className="table table-hover table-sm mb-0 fs-12 align-middle">
                                <thead className="table-light font-monospace fs-11 text-uppercase text-muted">
                                  <tr>
                                    <th style={{ width: '25%' }}>Control ID</th>
                                    <th style={{ width: '18%' }}>Control Type</th>
                                    <th style={{ width: '25%' }}>Event Handler</th>
                                    <th style={{ width: '32%' }}>Functional Purpose / Label</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activeFileItem.metadata?.uiControls?.map((ctrl: any, idx: number) => (
                                    <tr key={idx}>
                                      <td className="font-monospace fw-bold text-primary">
                                        <code>{ctrl.id}</code>
                                      </td>
                                      <td>
                                        <span className="badge bg-info-subtle text-info font-monospace fs-11">
                                          {ctrl.type}
                                        </span>
                                      </td>
                                      <td className="font-monospace text-muted fs-11">
                                        {ctrl.eventHandler !== 'None' ? (
                                          <span className="badge bg-warning-subtle text-warning font-monospace">
                                            {ctrl.eventHandler}
                                          </span>
                                        ) : (
                                          <span className="text-muted">—</span>
                                        )}
                                      </td>
                                      <td className="text-dark">
                                        {ctrl.purpose}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* CASE B: C# Functions & Methods Inventory (With "View Details" Modal Action) */}
                        {!isAspxFile && (
                          <div className="border rounded-3 overflow-hidden shadow-sm">
                            <div className="p-2.5 bg-light border-bottom d-flex align-items-center justify-content-between">
                              <span className="fw-bold font-monospace fs-12 text-dark d-flex align-items-center gap-1.5">
                                <Cpu size={14} className="text-primary" />
                                Functions &amp; Methods Signature Inventory ({activeFileItem.metadata?.methods?.length || 0})
                              </span>
                              <span className="badge bg-light text-muted border fs-10 font-monospace">
                                Click "View Details" for Full Function Breakdown &amp; SQL
                              </span>
                            </div>

                            <div className="table-responsive">
                              <table className="table table-hover table-sm mb-0 fs-12 align-middle">
                                <thead className="table-light font-monospace fs-11 text-uppercase text-muted">
                                  <tr>
                                    <th style={{ width: '22%' }}>Function / Handler</th>
                                    <th style={{ width: '35%' }}>Logical Purpose</th>
                                    <th style={{ width: '20%' }}>Parameters</th>
                                    <th style={{ width: '10%' }}>Return</th>
                                    <th style={{ width: '13%', textAlign: 'center' }}>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activeFileItem.metadata?.methods?.map((m: any, idx: number) => (
                                    <tr key={idx}>
                                      <td className="font-monospace fw-bold text-primary">
                                        {m.name}
                                      </td>
                                      <td className="text-dark">
                                        {m.description}
                                      </td>
                                      <td className="font-monospace text-muted fs-11">
                                        <code>{m.parameters}</code>
                                      </td>
                                      <td>
                                        <span className="badge bg-secondary-subtle text-secondary font-monospace fs-11">
                                          {m.returnType}
                                        </span>
                                      </td>
                                      <td className="text-center">
                                        <button
                                          onClick={() => setSelectedFunctionDetail(m)}
                                          className="btn btn-xs btn-outline-primary rounded-pill px-2.5 py-1 font-monospace fs-11 d-inline-flex align-items-center gap-1 shadow-sm"
                                          title="Open Function Work, SQL &amp; Source Code"
                                        >
                                          <Search size={11} />
                                          <span>View Details</span>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ========================================================================= */}
                    {/* TAB 2: RESTRUCTURED CATEGORIZED FLOW OF CLASSES & REFERENCES              */}
                    {/* ========================================================================= */}
                    {activeInspectorTab === 'class_flow' && (
                      <div className="row g-3">
                        {/* Panel 1: Dependencies Used by This File (Inbound) */}
                        <div className="col-md-6">
                          <div className="card border h-100 shadow-sm rounded-3">
                            <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center justify-content-between">
                              <span className="d-flex align-items-center gap-1.5">
                                <Boxes size={14} className="text-primary" />
                                Dependencies Used by this File
                              </span>
                              <span className="badge bg-primary-subtle text-primary font-monospace fs-10">
                                Inbound
                              </span>
                            </div>
                            <div className="card-body p-3 d-flex flex-column gap-3">
                              {/* Sub-Category: Classes Used */}
                              <div>
                                <h6 className="fs-12 font-monospace fw-bold text-dark mb-1.5 d-flex align-items-center gap-1">
                                  <span className="text-primary">📦</span> Classes Used ({activeFileItem.metadata?.usedClasses?.classes?.length || 0}):
                                </h6>
                                {activeFileItem.metadata?.usedClasses?.classes && activeFileItem.metadata.usedClasses.classes.length > 0 ? (
                                  <div className="d-flex flex-wrap gap-1.5">
                                    {activeFileItem.metadata.usedClasses.classes.map((cls: string, idx: number) => (
                                      <span key={idx} className="badge bg-primary-subtle text-primary font-monospace fs-11 px-2 py-1 border border-primary-subtle">
                                        {cls}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                    None (Pure entity model with primitive properties)
                                  </div>
                                )}
                              </div>

                              {/* Sub-Category: UI Used */}
                              <div>
                                <h6 className="fs-12 font-monospace fw-bold text-dark mb-1.5 d-flex align-items-center gap-1">
                                  <span className="text-info">🖥️</span> UI Components Used ({activeFileItem.metadata?.usedClasses?.ui?.length || 0}):
                                </h6>
                                {activeFileItem.metadata?.usedClasses?.ui && activeFileItem.metadata.usedClasses.ui.length > 0 ? (
                                  <div className="d-flex flex-wrap gap-1.5">
                                    {activeFileItem.metadata.usedClasses.ui.map((ui: string, idx: number) => (
                                      <span key={idx} className="badge bg-info-subtle text-info font-monospace fs-11 px-2 py-1 border border-info-subtle">
                                        {ui}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                    None
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Panel 2: Where This File Is Referenced (Outbound Callers) */}
                        <div className="col-md-6">
                          <div className="card border h-100 shadow-sm rounded-3">
                            <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center justify-content-between">
                              <span className="d-flex align-items-center gap-1.5">
                                <Activity size={14} className="text-success" />
                                Where This File Is Referenced (Callers)
                              </span>
                              <span className="badge bg-success-subtle text-success font-monospace fs-10">
                                Outbound
                              </span>
                            </div>
                            <div className="card-body p-3 d-flex flex-column gap-3">
                              {/* Sub-Category: Classes Calling This */}
                              <div>
                                <h6 className="fs-12 font-monospace fw-bold text-dark mb-1.5 d-flex align-items-center gap-1">
                                  <span className="text-success">🧠</span> Classes Referencing This ({activeFileItem.metadata?.callers?.classes?.length || 0}):
                                </h6>
                                {activeFileItem.metadata?.callers?.classes && activeFileItem.metadata.callers.classes.length > 0 ? (
                                  <div className="d-flex flex-wrap gap-1.5">
                                    {activeFileItem.metadata.callers.classes.map((cls: string, idx: number) => (
                                      <span key={idx} className="badge bg-success-subtle text-success font-monospace fs-11 px-2 py-1 border border-success-subtle d-flex align-items-center gap-1">
                                        <span>➔</span>
                                        <span>{cls}</span>
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                    None (Root or Standalone Service)
                                  </div>
                                )}
                              </div>

                              {/* Sub-Category: UI Pages Calling This */}
                              <div>
                                <h6 className="fs-12 font-monospace fw-bold text-dark mb-1.5 d-flex align-items-center gap-1">
                                  <span className="text-warning">🌐</span> UI Pages Referencing This ({activeFileItem.metadata?.callers?.ui?.length || 0}):
                                </h6>
                                {activeFileItem.metadata?.callers?.ui && activeFileItem.metadata.callers.ui.length > 0 ? (
                                  <div className="d-flex flex-wrap gap-1.5">
                                    {activeFileItem.metadata.callers.ui.map((ui: string, idx: number) => (
                                      <span key={idx} className="badge bg-warning-subtle text-warning font-monospace fs-11 px-2 py-1 border border-warning-subtle d-flex align-items-center gap-1">
                                        <span>➔</span>
                                        <span>{ui}</span>
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                    None
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* UI Navigation Redirection Flow (Displayed strictly for UI files) */}
                        {(!isPureClass) && (
                          <div className="col-12">
                            <div className="card border shadow-sm rounded-3">
                              <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center gap-1.5">
                                <ExternalLink size={14} className="text-info" />
                                Inter-Page UI Redirection &amp; Transition Flow
                              </div>
                              <div className="card-body p-3">
                                <div className="row g-3">
                                  <div className="col-md-6 border-end">
                                    <h6 className="fs-12 font-monospace fw-bold text-success mb-2">
                                      📥 Inflow (Pages that navigate TO this UI):
                                    </h6>
                                    {activeFileItem.metadata?.inflowPages && activeFileItem.metadata.inflowPages.length > 0 ? (
                                      <ul className="list-unstyled mb-0 d-flex flex-column gap-1 fs-12 font-monospace">
                                        {activeFileItem.metadata.inflowPages.map((inflow: string, idx: number) => (
                                          <li key={idx} className="p-1.5 bg-success-subtle text-success rounded border border-success-subtle d-flex align-items-center gap-1.5">
                                            <span>⬅️</span>
                                            <strong>{inflow}</strong>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                        Direct Entry / Master Navigation Menu
                                      </div>
                                    )}
                                  </div>

                                  <div className="col-md-6">
                                    <h6 className="fs-12 font-monospace fw-bold text-primary mb-2">
                                      📤 Outflow (Pages this UI redirects TO upon action):
                                    </h6>
                                    {activeFileItem.metadata?.outflowPages && activeFileItem.metadata.outflowPages.length > 0 ? (
                                      <ul className="list-unstyled mb-0 d-flex flex-column gap-1 fs-12 font-monospace">
                                        {activeFileItem.metadata.outflowPages.map((outflow: string, idx: number) => (
                                          <li key={idx} className="p-1.5 bg-primary-subtle text-primary rounded border border-primary-subtle d-flex align-items-center gap-1.5">
                                            <span>➡️</span>
                                            <strong>{outflow}</strong>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <div className="p-2 bg-light rounded text-muted fs-11 font-monospace fst-italic">
                                        None (Terminal Form)
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ========================================================================= */}
                    {/* TAB 3: DATABASE COMMANDS & STORED PROCEDURES                              */}
                    {/* ========================================================================= */}
                    {activeInspectorTab === 'db_commands' && (
                      <div className="d-flex flex-column gap-3">
                        <div className="alert alert-info-subtle border-info-subtle rounded-3 p-3 fs-12 font-monospace mb-0 d-flex align-items-center justify-content-between">
                          <span>
                            <strong>Database Execution Registry:</strong> Details the exact SQL queries, Stored Procedures, and mutation commands executed against <strong>EducationDB</strong>.
                          </span>
                          <span className="badge bg-danger text-white fs-11 font-monospace px-2.5 py-1 rounded-pill shadow-sm">
                            🎯 Main Table: <strong>{activeFileItem.metadata?.mainTargetTable || 'tbl_' + activeFileItem.entityName}</strong>
                          </span>
                        </div>

                        {activeFileItem.metadata?.dbCommands && activeFileItem.metadata.dbCommands.length > 0 ? (
                          activeFileItem.metadata.dbCommands.map((cmd: any, idx: number) => (
                            <div key={idx} className="card border shadow-sm rounded-3 overflow-hidden">
                              <div className="card-header bg-light py-2 px-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div className="d-flex align-items-center gap-2">
                                  <span className="badge bg-dark text-white font-monospace fs-11">
                                    {cmd.queryType}
                                  </span>
                                  <span className="font-monospace fw-bold fs-12 text-primary">
                                    Function: {cmd.functionName}
                                  </span>
                                </div>

                                <span className="badge bg-danger text-white fs-11 font-monospace px-2.5 py-1 rounded-pill shadow-sm">
                                  🎯 Target Table: <strong>{cmd.mainTable}</strong>
                                </span>
                              </div>

                              <div className="card-body p-3">
                                {/* Query Box */}
                                <div className="p-2.5 bg-dark text-light rounded-3 font-monospace fs-11 mb-2.5 overflow-auto">
                                  <code>{cmd.queryText}</code>
                                </div>

                                {/* Parameters & Affected Tables */}
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 fs-12 font-monospace">
                                  <div>
                                    <span className="text-muted me-1">Parameters:</span>
                                    <code className="text-primary bg-primary-subtle px-1.5 py-0.5 rounded">{cmd.parameters}</code>
                                  </div>

                                  <div className="d-flex align-items-center gap-1">
                                    <span className="text-muted">Database:</span>
                                    <span className="badge bg-success text-white font-monospace">EducationDB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 bg-light text-center rounded-3 text-muted fs-12 font-monospace">
                            No direct SQL commands executed by this component.
                          </div>
                        )}
                      </div>
                    )}

                    {/* ========================================================================= */}
                    {/* TAB 4: DECONSTRUCTED IDE CODE VIEW                                        */}
                    {/* ========================================================================= */}
                    {activeInspectorTab === 'code' && (
                      <div className="d-flex flex-column gap-3">
                        {/* View Switcher: Collapsible Chunks vs Full Code */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pb-2 border-bottom">
                          <div className="btn-group btn-group-sm">
                            <button
                              onClick={() => setCodeViewMode('collapsible')}
                              className={`btn font-monospace fs-11 ${
                                codeViewMode === 'collapsible' ? 'btn-primary active fw-bold' : 'btn-outline-secondary'
                              }`}
                            >
                              📦 Collapsible Functional Chunks
                            </button>
                            <button
                              onClick={() => setCodeViewMode('full')}
                              className={`btn font-monospace fs-11 ${
                                codeViewMode === 'full' ? 'btn-primary active fw-bold' : 'btn-outline-secondary'
                              }`}
                            >
                              📜 Complete Unified Source Code
                            </button>
                          </div>

                          <button
                            onClick={() => handleCopyCode(activeFileItem.metadata?.completeCodeWithComments || '')}
                            className={`btn btn-sm rounded-pill font-monospace fs-11 d-flex align-items-center gap-1.5 ${
                              copiedCode ? 'btn-success' : 'btn-outline-primary'
                            }`}
                          >
                            {copiedCode ? <Check size={13} /> : <Copy size={13} />}
                            <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Complete Code'}</span>
                          </button>
                        </div>

                        {/* View Mode 1: Collapsible Functional Chunks */}
                        {codeViewMode === 'collapsible' && (
                          <div className="d-flex flex-column gap-2.5">
                            {activeFileItem.metadata?.codeChunks?.map((chunk: any) => {
                              const isCollapsed = collapsedChunks[chunk.id];
                              return (
                                <div key={chunk.id} className="border rounded-3 overflow-hidden shadow-sm">
                                  <div
                                    onClick={() => toggleChunk(chunk.id)}
                                    className="p-2.5 bg-light d-flex align-items-center justify-content-between cursor-pointer hover-bg-light transition"
                                  >
                                    <div className="d-flex align-items-center gap-2">
                                      <span className="text-muted">
                                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                                      </span>
                                      <span className="fw-bold font-monospace fs-12 text-dark">
                                        {chunk.title}
                                      </span>
                                      <span className="text-muted fs-11 font-monospace">
                                        — {chunk.purpose}
                                      </span>
                                    </div>
                                    <span className="badge bg-white text-dark border fs-10 font-monospace">
                                      {isCollapsed ? 'Click to Expand' : 'Active'}
                                    </span>
                                  </div>

                                  {!isCollapsed && (
                                    <div className="p-3 bg-dark text-light overflow-auto font-monospace fs-11" style={{ maxHeight: '350px' }}>
                                      <pre className="mb-0 text-white leading-relaxed">
                                        <code>{chunk.code}</code>
                                      </pre>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* View Mode 2: Full Unified Code */}
                        {codeViewMode === 'full' && (
                          <div className="p-3 bg-dark text-light rounded-3 overflow-auto font-monospace fs-11 shadow-sm" style={{ maxHeight: '550px' }}>
                            <pre className="mb-0 text-white leading-relaxed">
                              <code>{activeFileItem.metadata?.completeCodeWithComments}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ========================================================================= */}
                    {/* TAB 5: INTERACTIVE FLOWCHARTS                                             */}
                    {/* ========================================================================= */}
                    {activeInspectorTab === 'flowcharts' && (
                      <div className="d-flex flex-column gap-4">
                        {/* 1. UX Flowchart */}
                        <div>
                          <h6 className="fw-bold font-monospace fs-13 text-dark mb-2 d-flex align-items-center gap-1.5">
                            <Activity size={15} className="text-primary" />
                            1. User Experience &amp; Screen Navigation Flowchart
                          </h6>
                          <MermaidViewer
                            chart={activeFileItem.metadata?.uxFlowchart || ''}
                            title={`${activeFileItem.fileName} UX Flow`}
                          />
                        </div>

                        {/* 2. Technical Execution Flowchart */}
                        <div>
                          <h6 className="fw-bold font-monospace fs-13 text-dark mb-2 d-flex align-items-center gap-1.5">
                            <Cpu size={15} className="text-success" />
                            2. Technical Execution &amp; Call Stack Flowchart
                          </h6>
                          <MermaidViewer
                            chart={activeFileItem.metadata?.techFlowchart || ''}
                            title={`${activeFileItem.fileName} Technical Call Stack`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-5 text-center text-muted d-flex flex-column align-items-center justify-content-center h-100">
                  <Layout size={40} className="text-muted mb-2 opacity-50" />
                  <h6 className="fw-bold font-monospace">Select a file or entity group from the TreeView</h6>
                  <p className="fs-12 font-monospace">Explore logical operations, class references, database commands, and code chunks.</p>
                </div>
              )}
            </div>

            {/* ========================================================================= */}
            {/* 3. FUNCTION DETAILS CHILD MODAL                                           */}
            {/* ========================================================================= */}
            {selectedFunctionDetail && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', zIndex: 1070 }}
                onClick={() => setSelectedFunctionDetail(null)}
              >
                <div
                  className="modal-content bg-white rounded-4 shadow-lg border-0 overflow-hidden d-flex flex-column"
                  style={{ maxWidth: '850px', width: '92vw', maxHeight: '88vh' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Child Modal Header */}
                  <div className="p-3 bg-light border-bottom d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div className="bg-primary text-white p-1.5 rounded-2 d-flex align-items-center">
                        <Cpu size={16} />
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="fw-bold font-monospace text-dark mb-0 fs-14">
                            Function: {selectedFunctionDetail.name}
                          </h6>
                          <span className="badge bg-secondary-subtle text-secondary font-monospace fs-10">
                            {selectedFunctionDetail.returnType}
                          </span>
                        </div>
                        <small className="text-muted font-monospace fs-11">
                          File: <code>{activeFileItem?.fileName}</code> • Layer: <strong>{activeFileItem?.category}</strong>
                        </small>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedFunctionDetail(null)}
                      className="btn btn-sm btn-outline-secondary rounded-pill p-1.5 d-flex align-items-center justify-content-center"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Child Modal Body */}
                  <div className="p-4 overflow-auto d-flex flex-column gap-3.5">
                    
                    {/* SECTION 1: IN-DEPTH FUNCTION WORK & SIGNATURE BREAKDOWN */}
                    <div className="card border shadow-sm rounded-3">
                      <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center gap-1.5">
                        <Info size={14} className="text-primary" />
                        1. In-Depth Function Purpose &amp; Signature
                      </div>
                      <div className="card-body p-3 d-flex flex-column gap-2.5 fs-12 font-monospace">
                        <div className="p-2 bg-primary-subtle text-primary rounded border border-primary-subtle">
                          <strong>Signature:</strong> <code>public {selectedFunctionDetail.returnType} {selectedFunctionDetail.name}({selectedFunctionDetail.parameters})</code>
                        </div>

                        <div>
                          <strong className="text-dark">Detailed Logical Purpose:</strong>
                          <p className="text-muted mb-0 font-sans-serif mt-1">
                            {selectedFunctionDetail.description}
                          </p>
                        </div>

                        {selectedFunctionDetail.formFields && selectedFunctionDetail.formFields.length > 0 && (
                          <div>
                            <strong className="text-dark">UI Form Controls Accessed:</strong>
                            <div className="d-flex flex-wrap gap-1 mt-1">
                              {selectedFunctionDetail.formFields.map((ff: string, fIdx: number) => (
                                <span key={fIdx} className="badge bg-info-subtle text-info font-monospace fs-10">
                                  {ff}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* SECTION 2: USED DATABASE COMMANDS & SQL QUERIES */}
                    <div className="card border shadow-sm rounded-3">
                      <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center justify-content-between">
                        <span className="d-flex align-items-center gap-1.5">
                          <Database size={14} className="text-success" />
                          2. Used Database Commands &amp; SQL Mutation
                        </span>
                        <span className="badge bg-danger text-white font-monospace fs-10">
                          Target: {activeFileItem?.metadata?.mainTargetTable || 'tbl_' + activeFileItem?.entityName} (EducationDB)
                        </span>
                      </div>
                      <div className="card-body p-3">
                        {selectedFunctionDetail.dbCommands && selectedFunctionDetail.dbCommands.length > 0 ? (
                          selectedFunctionDetail.dbCommands.map((cmd: any, cIdx: number) => (
                            <div key={cIdx} className="d-flex flex-column gap-2">
                              <div className="d-flex align-items-center justify-content-between fs-11 font-monospace">
                                <span className="badge bg-dark text-white">{cmd.queryType}</span>
                                <span className="text-muted">Params: <code>{cmd.parameters}</code></span>
                              </div>
                              <div className="p-2.5 bg-dark text-light rounded-3 font-monospace fs-11 overflow-auto">
                                <code>{cmd.queryText}</code>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-2.5 bg-light rounded text-muted fs-11 font-monospace">
                            Invokes business logic / data access pipeline targeting table <strong>{activeFileItem?.metadata?.mainTargetTable || 'tbl_' + activeFileItem?.entityName}</strong> in <strong>EducationDB</strong>.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* SECTION 3: EXACT SOURCE CODE */}
                    <div className="card border shadow-sm rounded-3">
                      <div className="card-header bg-light py-2 px-3 fw-bold font-monospace fs-12 d-flex align-items-center justify-content-between">
                        <span className="d-flex align-items-center gap-1.5">
                          <Code2 size={14} className="text-warning" />
                          3. Exact Function Source Code
                        </span>
                        <button
                          onClick={() => handleCopyFunctionCode(selectedFunctionDetail.code || '')}
                          className={`btn btn-xs rounded-pill font-monospace fs-10 d-flex align-items-center gap-1 ${
                            copiedFunctionCode ? 'btn-success' : 'btn-outline-primary'
                          }`}
                        >
                          {copiedFunctionCode ? <Check size={11} /> : <Copy size={11} />}
                          <span>{copiedFunctionCode ? 'Copied!' : 'Copy Code'}</span>
                        </button>
                      </div>
                      <div className="card-body p-3 bg-dark text-light font-monospace fs-11 overflow-auto" style={{ maxHeight: '280px' }}>
                        <pre className="mb-0 text-white leading-relaxed">
                          <code>{selectedFunctionDetail.code}</code>
                        </pre>
                      </div>
                    </div>

                  </div>

                  {/* Child Modal Footer */}
                  <div className="p-2.5 bg-light border-top d-flex justify-content-end">
                    <button
                      onClick={() => setSelectedFunctionDetail(null)}
                      className="btn btn-sm btn-secondary rounded-pill px-3 font-monospace fs-11"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Context Menu Popup (Right Click) */}
            {contextMenu && (
              <div
                style={{
                  position: 'fixed',
                  top: `${contextMenu.y}px`,
                  left: `${contextMenu.x}px`,
                  zIndex: 9999
                }}
                className="dropdown-menu show shadow-lg border rounded-3 p-1 font-monospace fs-11"
              >
                <div className="dropdown-header text-truncate py-1 px-2 text-muted fw-bold" style={{ maxWidth: '200px' }}>
                  {contextMenu.node.name}
                </div>
                <div className="dropdown-divider my-1" />
                <button
                  onClick={() => { setActiveInspectorTab('operations'); setContextMenu(null); }}
                  className="dropdown-item py-1 px-2 rounded d-flex align-items-center gap-1.5"
                >
                  <FileText size={13} className="text-primary" />
                  <span>1. Logical Operations &amp; Signatures</span>
                </button>
                <button
                  onClick={() => { setActiveInspectorTab('class_flow'); setContextMenu(null); }}
                  className="dropdown-item py-1 px-2 rounded d-flex align-items-center gap-1.5"
                >
                  <Layers size={13} className="text-info" />
                  <span>2. Flow of Classes &amp; Redirections</span>
                </button>
                <button
                  onClick={() => { setActiveInspectorTab('db_commands'); setContextMenu(null); }}
                  className="dropdown-item py-1 px-2 rounded d-flex align-items-center gap-1.5"
                >
                  <Database size={13} className="text-success" />
                  <span>3. Database Commands &amp; Queries</span>
                </button>
                <button
                  onClick={() => { setActiveInspectorTab('code'); setContextMenu(null); }}
                  className="dropdown-item py-1 px-2 rounded d-flex align-items-center gap-1.5"
                >
                  <Code2 size={13} className="text-warning" />
                  <span>4. Deconstructed IDE Code View</span>
                </button>
                <button
                  onClick={() => { setActiveInspectorTab('flowcharts'); setContextMenu(null); }}
                  className="dropdown-item py-1 px-2 rounded d-flex align-items-center gap-1.5"
                >
                  <Activity size={13} className="text-danger" />
                  <span>5. Interactive Flowcharts</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

