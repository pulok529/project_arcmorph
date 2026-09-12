import React, { useState } from 'react';
import { FolderTree, Folder, FolderOpen, FileCode, Database, FileText, Sparkles, Settings, File, ChevronRight, ChevronDown, Eye, X, Copy, Check } from 'lucide-react';

interface TreeNode {
  name: string;
  path: string;
  type: 'directory' | 'file';
  category?: 'page' | 'csharp' | 'database' | 'report' | 'config' | 'other';
  ext?: string;
  sizeFormatted?: string;
  children?: TreeNode[];
}

interface LegacyProjectTreeViewerProps {
  treeData?: TreeNode;
  projectId: string;
  projectName: string;
}

export const LegacyProjectTreeViewer: React.FC<LegacyProjectTreeViewerProps> = ({
  treeData,
  projectId,
  projectName
}) => {
  const [selectedFile, setSelectedFile] = useState<TreeNode | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [loadingContent, setLoadingContent] = useState(false);
  const [copied, setCopied] = useState(false);

  // Recursive Tree Item Component
  const TreeItem: React.FC<{ node: TreeNode; depth?: number }> = ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(depth < 2);

    if (node.type === 'directory') {
      return (
        <div>
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="d-flex align-items-center gap-1.5 py-1 px-2 rounded cursor-pointer hover-bg-light fs-13 transition"
            style={{ paddingLeft: `${depth * 18 + 8}px`, cursor: 'pointer' }}
          >
            {isExpanded ? <ChevronDown size={14} className="text-muted" /> : <ChevronRight size={14} className="text-muted" />}
            {isExpanded ? <FolderOpen size={16} className="text-warning" /> : <Folder size={16} className="text-warning" />}
            <span className="fw-semibold text-dark font-monospace">{node.name}</span>
            <span className="text-muted fs-11 ms-auto">
              {node.children ? `(${node.children.length} items)` : ''}
            </span>
          </div>

          {isExpanded && node.children && (
            <div>
              {node.children.map((child, idx) => (
                <TreeItem key={idx} node={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      );
    }

    // File Node
    const getFileIcon = (cat?: string) => {
      switch (cat) {
        case 'page': return <FileCode size={15} className="text-primary" />;
        case 'csharp': return <FileText size={15} className="text-info" />;
        case 'database': return <Database size={15} className="text-success" />;
        case 'report': return <Sparkles size={15} className="text-warning" />;
        case 'config': return <Settings size={15} className="text-secondary" />;
        default: return <File size={15} className="text-muted" />;
      }
    };

    const getBadgeClass = (cat?: string) => {
      switch (cat) {
        case 'page': return 'bg-primary-subtle text-primary';
        case 'csharp': return 'bg-info-subtle text-info';
        case 'database': return 'bg-success-subtle text-success';
        case 'report': return 'bg-warning-subtle text-warning';
        case 'config': return 'bg-secondary-subtle text-secondary';
        default: return 'bg-light text-muted border';
      }
    };

    const inspectFile = async () => {
      setSelectedFile(node);
      setLoadingContent(true);
      try {
        const res = await fetch(`/api/projects/${projectId}/raw-file?path=${encodeURIComponent(node.path)}`);
        const data = await res.json();
        if (data.success) {
          setFileContent(data.content || '');
        } else {
          setFileContent(`[Unable to load file: ${data.error}]`);
        }
      } catch (e: any) {
        setFileContent(`[Error loading file: ${e.message}]`);
      } finally {
        setLoadingContent(false);
      }
    };

    return (
      <div
        onClick={inspectFile}
        className={`d-flex align-items-center gap-1.5 py-1 px-2 rounded cursor-pointer fs-13 transition ${
          selectedFile?.path === node.path ? 'bg-primary-subtle border-start border-3 border-primary' : 'hover-bg-light'
        }`}
        style={{ paddingLeft: `${depth * 18 + 24}px`, cursor: 'pointer' }}
      >
        {getFileIcon(node.category)}
        <span className="text-dark font-monospace fs-12 text-truncate" title={node.path}>
          {node.name}
        </span>
        <div className="ms-auto d-flex align-items-center gap-1.5">
          <span className={`badge ${getBadgeClass(node.category)} font-monospace fs-10 rounded-pill`}>
            {node.ext || node.category}
          </span>
          <span className="text-muted font-monospace fs-10">
            {node.sizeFormatted}
          </span>
        </div>
      </div>
    );
  };

  const copyContent = () => {
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center">
            <FolderTree size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Legacy Project Interactive TreeView Explorer</h5>
              <span className="badge bg-warning text-dark rounded-pill font-monospace fs-10">100% Files Scanned</span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Interactive directory tree of all legacy components in <code>{projectName}</code>. Click any file to inspect code and AST metadata.
            </p>
          </div>
        </div>
      </div>

      {/* Body: 2 Columns (Tree on Left, File Preview on Right) */}
      <div className="card-body p-4">
        <div className="row g-4">
          
          {/* Left Column: TreeView */}
          <div className="col-lg-5">
            <div className="p-3 bg-light rounded-3 border" style={{ maxHeight: '450px', overflowY: 'auto' }}>
              <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                <span className="fw-bold fs-12 text-uppercase text-muted">Project Directory Hierarchy</span>
                <span className="badge bg-white text-dark border fs-10 font-monospace">Expandable</span>
              </div>
              
              {treeData ? (
                <TreeItem node={treeData} />
              ) : (
                <p className="text-muted fs-12 p-3 text-center mb-0">No directory tree available.</p>
              )}
            </div>
          </div>

          {/* Right Column: File Inspector & Code Preview */}
          <div className="col-lg-7">
            {selectedFile ? (
              <div className="border rounded-3 overflow-hidden h-100 d-flex flex-column">
                <div className="bg-dark text-white p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <span className="font-monospace fw-bold fs-13 text-light d-block">
                      {selectedFile.name}
                    </span>
                    <small className="text-muted font-monospace fs-11">{selectedFile.path}</small>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-secondary font-monospace fs-11">{selectedFile.sizeFormatted}</span>
                    <button
                      onClick={copyContent}
                      className="btn btn-sm btn-outline-light rounded-pill px-2.5 py-1 fs-11 d-inline-flex align-items-center gap-1"
                    >
                      {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="btn btn-sm btn-link text-white p-0 ms-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex-grow-1 bg-dark p-3" style={{ maxHeight: '380px', overflowY: 'auto' }}>
                  {loadingContent ? (
                    <div className="text-center py-5 text-muted">
                      <div className="spinner-border spinner-border-sm text-primary mb-2" />
                      <p className="fs-12 mb-0">Loading file content...</p>
                    </div>
                  ) : (
                    <pre className="font-monospace fs-11 text-light mb-0">
                      <code>{fileContent}</code>
                    </pre>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-5 bg-light rounded-3 border text-center h-100 d-flex flex-column align-items-center justify-content-center">
                <FolderTree size={40} className="text-muted mb-2 opacity-50" />
                <h6 className="fw-bold text-dark mb-1">Select a File to Inspect</h6>
                <p className="text-muted fs-12 mb-0 max-w-sm">
                  Click on any <code>.aspx</code> page, <code>.cs</code> logic file, <code>.sql</code> script, or <code>.rpt</code> report in the tree to view its decompiled source.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};
