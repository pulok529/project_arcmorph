import React, { useState } from 'react';
import { FolderTree, Folder, FolderOpen, FileCode, Database, FileText, Sparkles, Layers, ChevronRight, ChevronDown, Eye, X, Copy, Check, Server, ArrowRight } from 'lucide-react';

interface GeneratedSpecsTreeViewerProps {
  treeData?: any;
  projectName: string;
}

export const GeneratedSpecsTreeViewer: React.FC<GeneratedSpecsTreeViewerProps> = ({
  treeData,
  projectName
}) => {
  const [selectedFile, setSelectedFile] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'markdown' | 'json' | 'react' | 'csharp'>('markdown');
  const [copied, setCopied] = useState(false);

  // Fallback tree data if empty
  const defaultTree = {
    name: '03_MODERNIZATION_SPECIFICATIONS',
    type: 'directory',
    children: [
      {
        name: '01_Admissions_And_Students',
        type: 'directory',
        children: [
          {
            name: 'AdmissionPage_spec.md',
            type: 'file',
            specType: 'page_spec',
            sizeFormatted: '14.2 KB',
            data: {
              fileName: 'AdmissionPage_spec',
              module: '01_Admissions_And_Students',
              mdSpec: `# 📄 Reverse-Engineering Specification: AdmissionPage.tsx\n\n**Module:** \`01_Admissions_And_Students\`  \n**Legacy Origin:** \`Admission.aspx\`  \n**Total Controls Deconstructed:** **26 Controls (HiddenFields, TextBoxes, DropDownLists, GridViews, AJAX Extenders)**\n\n## 🎯 1. Business Goal & Purpose\nProvides end-to-end student admission registration, class assignments, session mappings, and tuition fee rule bindings.\n\n## 🧩 2. Complete UI Element Inventory (26 Controls)\n- \`<asp:HiddenField>\`: \`studentIdHiddenField\` (Primary key tracker)\n- \`<asp:TextBox>\`: \`admissionDtTextBox\`, \`studentCodeTextBox\`, \`studentNameTextBox\`, \`rollNoTextBox\`, \`startDtTextBox\`\n- \`<asp:DropDownList>\`: \`schoolClassDropDownList\`, \`departmentDropDownList\`, \`classSectionDropDownList\`, \`sessionDropDownList\`, \`shiftDropDownList\`, \`admissionDropDownList\`\n- \`<asp:Button>\`: \`submiButton\` (Triggers SaveAdmissionInfo transaction)\n- \`<asp:ImageButton>\`: \`admissionListImageButton\`, \`ImageButton1\`, \`endImageButton\`\n- \`<asp:LinkButton>\`: \`stuCodeLinkButton\`\n- \`<asp:GridView>\`: \`feeRuleGridView\`, \`loadGridView\`\n- \`<asp:CheckBox>\`: \`yesCheckBox\`, \`mainCheckBox\`, \`optionalCheckBox\`\n- \`<asp:CalendarExtender>\`: \`admissionDtTextBox_CalendarExtender\`\n\n## ⚙️ 3. C# Code Logic & Business Flow\n- **Primary Key Finder:** \`aClsPrimaryKeyFind.PrimaryKeyMax("AdmissionId", "tblAdmissionInfo")\` $\\rightarrow$ Modernized to SQL Server IDENTITY / UUIDv7\n- **Save Method:** Validates inputs, saves to \`[dbo].[tblAdmissionInfo]\`, and dispatches fee rules to \`[dbo].[tblFeeMapStudent]\`.\n\n## 🔄 4. Data Flow & Downstream Consumers\n- **Target Tables:** \`tblAdmissionInfo\`, \`tblStudentInfo\`, \`tblFeeMapStudent\`\n- **Utilized By:** \`StudentProfile.aspx\`, \`AttendanceEntry.aspx\`, \`FeesCollection.aspx\`, \`AdmissionSummaryReport.rpt\``,
              jsonSpec: {
                pageName: 'AdmissionPage',
                legacySource: 'Admission.aspx',
                module: '01_Admissions_And_Students',
                totalControls: 26
              }
            }
          }
        ]
      },
      {
        name: '08_Database_And_DAL_BLL_DAO',
        type: 'directory',
        children: [
          {
            name: 'AdmissionBLL_logic_spec.md',
            type: 'file',
            specType: 'logic_spec',
            sizeFormatted: '9.8 KB',
            data: {
              fileName: 'AdmissionBLL_logic_spec',
              module: '08_Database_And_DAL_BLL_DAO',
              mdSpec: `# ⚙️ Logic Specification: AdmissionBLL.cs\n\n**Module:** \`08_Database_And_DAL_BLL_DAO\`  \n**Layer:** **Business Logic Layer (BLL)**  \n**Modern Target:** \`Application/Features/Admissions/AdmissionService.cs\`\n\n## 🎯 1. Architectural Goal\nEncapsulates business rules, primary key generation, and transactional boundaries for student admissions.\n\n## 🛠️ 2. Deconstructed Methods\n- \`SaveAdmissionInfo(AdmissionInfo info)\`: Validates model, computes Max+1 ID, and commits via DAL.\n- \`SaveDataForFeeMap(FeeMapStudent feeMap)\`: Iterates student fee rules and executes bulk insert into \`tblFeeMapStudent\`.\n\n## 🗄️ 3. Database Operations\n- **Tables:** \`tblAdmissionInfo\`, \`tblFeeMapStudent\`, \`tblStudentInfo\`\n- **Primary Key Generation:** \`aClsPrimaryKeyFind.PrimaryKeyMax\` $\\rightarrow$ Modernized to EF Core 9 Code-First sequence.`
            }
          }
        ]
      }
    ]
  };

  const root = treeData && treeData.children && treeData.children.length > 0 ? treeData : defaultTree;

  // Auto-select first file on load if none selected
  React.useEffect(() => {
    if (!selectedFile && root.children?.[0]?.children?.[0]) {
      setSelectedFile(root.children[0].children[0]);
    }
  }, [treeData]);

  // Recursive Tree Node Item
  const TreeNodeItem: React.FC<{ node: any; depth?: number }> = ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    if (node.type === 'directory') {
      return (
        <div>
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="d-flex align-items-center gap-1.5 py-1.5 px-2 rounded cursor-pointer hover-bg-light fs-13 transition"
            style={{ paddingLeft: `${depth * 16 + 8}px`, cursor: 'pointer' }}
          >
            {isExpanded ? <ChevronDown size={14} className="text-muted" /> : <ChevronRight size={14} className="text-muted" />}
            {isExpanded ? <FolderOpen size={16} className="text-primary" /> : <Folder size={16} className="text-primary" />}
            <span className="fw-bold text-dark font-monospace fs-12">{node.name}</span>
            <span className="badge bg-light text-muted font-monospace fs-10 ms-auto">
              {node.children ? `${node.children.length} specs` : ''}
            </span>
          </div>

          {isExpanded && node.children && (
            <div>
              {node.children.map((child: any, idx: number) => (
                <TreeNodeItem key={idx} node={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      );
    }

    const isSelected = selectedFile?.name === node.name;

    return (
      <div
        onClick={() => setSelectedFile(node)}
        className={`d-flex align-items-center gap-2 py-1 px-2 rounded cursor-pointer transition fs-12 font-monospace ${
          isSelected ? 'bg-primary-subtle text-primary fw-bold' : 'hover-bg-light text-dark'
        }`}
        style={{ paddingLeft: `${depth * 16 + 18}px`, cursor: 'pointer' }}
      >
        <FileText size={14} className={node.specType === 'logic_spec' ? 'text-warning' : 'text-info'} />
        <span className="text-truncate" style={{ maxWidth: '210px' }}>{node.name}</span>
        <span className="text-muted fs-10 ms-auto">{node.sizeFormatted}</span>
      </div>
    );
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const specData = selectedFile?.data || {};

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
            <Layers size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Generated Modernization Specifications TreeView</h5>
              <span className="badge bg-success text-white rounded-pill font-monospace fs-10">
                Module-by-Module Output
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Module folders containing deep reverse-engineering specifications for 100% of UI controls, C# logic, data lifecycle flows, and database tables.
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="card-body p-0">
        <div className="row g-0">
          
          {/* Left: Interactive TreeView Explorer */}
          <div className="col-lg-4 border-end p-3" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <div className="d-flex align-items-center justify-content-between mb-3 px-2 pb-2 border-bottom">
              <span className="fw-bold fs-12 text-muted text-uppercase font-monospace">
                📁 Specifications Tree
              </span>
              <span className="badge bg-secondary-subtle text-secondary font-monospace fs-10">
                {root.children?.length || 0} Modules
              </span>
            </div>

            <div className="vstack gap-1">
              {root.children?.map((mod: any, idx: number) => (
                <TreeNodeItem key={idx} node={mod} depth={0} />
              ))}
            </div>
          </div>

          {/* Right: Code & Markdown Inspector Drawer */}
          <div className="col-lg-8 p-4">
            {selectedFile ? (
              <div>
                
                {/* File Title Bar */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3 pb-3 border-bottom">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <FileText size={18} className="text-primary" />
                      <h6 className="fw-bold mb-0 text-dark font-monospace">{selectedFile.name}</h6>
                      <span className="badge bg-primary-subtle text-primary font-monospace fs-10">
                        {selectedFile.specType === 'logic_spec' ? 'C# BLL/DAL Logic' : 'UI Page Spec'}
                      </span>
                    </div>
                    <small className="text-muted fs-12 font-monospace">
                      Module: <strong className="text-dark">{specData.module || 'Root'}</strong> • Size: {selectedFile.sizeFormatted}
                    </small>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      onClick={() => copyContent(specData.mdSpec || '')}
                      className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 fs-12 d-inline-flex align-items-center gap-1.5"
                    >
                      {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                    </button>
                  </div>
                </div>

                {/* View Switcher Tabs */}
                <ul className="nav nav-pills gap-1 mb-3">
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveTab('markdown')}
                      className={`nav-link py-1 px-3 fs-12 rounded-pill ${activeTab === 'markdown' ? 'active fw-bold' : ''}`}
                    >
                      Formatted Markdown Specification
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveTab('json')}
                      className={`nav-link py-1 px-3 fs-12 rounded-pill ${activeTab === 'json' ? 'active fw-bold' : ''}`}
                    >
                      Raw JSON DTO
                    </button>
                  </li>
                  {specData.jsonSpec?.reactComponentCode && (
                    <li className="nav-item">
                      <button
                        onClick={() => setActiveTab('react')}
                        className={`nav-link py-1 px-3 fs-12 rounded-pill ${activeTab === 'react' ? 'active fw-bold' : ''}`}
                      >
                        React 19 Component
                      </button>
                    </li>
                  )}
                </ul>

                {/* Tab 1: Formatted Markdown View */}
                {activeTab === 'markdown' && (
                  <div className="bg-light p-4 rounded-4 border fs-13" style={{ maxHeight: '460px', overflowY: 'auto' }}>
                    <pre className="text-dark font-sans mb-0" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                      {specData.mdSpec || 'No markdown content available.'}
                    </pre>
                  </div>
                )}

                {/* Tab 2: Raw JSON DTO View */}
                {activeTab === 'json' && (
                  <pre className="bg-dark text-light p-3 rounded-4 font-monospace fs-12 mb-0" style={{ maxHeight: '460px', overflowY: 'auto' }}>
                    <code>{JSON.stringify(specData.jsonSpec || {}, null, 2)}</code>
                  </pre>
                )}

                {/* Tab 3: React Component View */}
                {activeTab === 'react' && (
                  <pre className="bg-dark text-light p-3 rounded-4 font-monospace fs-12 mb-0" style={{ maxHeight: '460px', overflowY: 'auto' }}>
                    <code>{specData.jsonSpec?.reactComponentCode || '// React component ready'}</code>
                  </pre>
                )}

              </div>
            ) : (
              <div className="text-center py-5 text-muted">
                <FileCode size={40} className="text-muted mb-2" />
                <h6>Select a specification file from the tree to view details.</h6>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};
