import React, { useState, useEffect } from 'react';
import { Card } from './common/Card';
import { ShieldCheck, Lock, Users, Code, Copy, Check, Menu, ChevronRight } from 'lucide-react';

interface RbacNavigationMatrixViewerProps {
  projectId: string;
  projectName: string;
}

export const RbacNavigationMatrixViewer: React.FC<RbacNavigationMatrixViewerProps> = ({ projectId, projectName }) => {
  const [rbacData, setRbacData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'matrix' | 'menus' | 'csharp' | 'react'>('matrix');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;
    setLoading(true);
    fetch(`/api/projects/${projectId}/rbac-navigation`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setRbacData(data.rbac);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [projectId]);

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  if (loading) {
    return (
      <Card title="Dynamic Navigation & RBAC Permission Matrix" subtitle="Compiling role policies...">
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </Card>
    );
  }

  const matrix = rbacData?.permissionMatrix || [];
  const menuStructure = rbacData?.menuStructure || [];
  const roles = rbacData?.roles || [];

  return (
    <div className="mb-4">
      <Card
        title="🛡️ Dynamic Navigation & RBAC User Permission Matrix"
        subtitle="Modernized role policies, dynamic sidebar hierarchies, and frontend/backend security hooks."
        badge={<span className="badge bg-primary rounded-pill font-monospace">{roles.length} Roles • {matrix.length} Policies</span>}
      >
        {/* Navigation Tabs */}
        <div className="d-flex flex-wrap gap-2 mb-3 border-bottom pb-3">
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'matrix' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('matrix')}
          >
            📋 Role Permission Matrix
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'menus' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('menus')}
          >
            📂 Dynamic Sidebar Menus
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'csharp' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('csharp')}
          >
            ⚙️ .NET 9 RBAC Policies
          </button>
          <button
            className={`btn btn-sm rounded-pill fw-bold px-3 ${activeTab === 'react' ? 'btn-primary' : 'btn-light border'}`}
            onClick={() => setActiveTab('react')}
          >
            ⚛️ React 19 Permission Hook
          </button>
        </div>

        {/* Tab 1: Role Permission Matrix */}
        {activeTab === 'matrix' && (
          <div className="table-responsive border rounded-3" style={{ maxHeight: '350px', overflowY: 'auto' }}>
            <table className="table table-hover align-middle mb-0 fs-13">
              <thead className="table-light sticky-top">
                <tr>
                  <th>Permission Key</th>
                  <th>Module</th>
                  <th className="text-center">Super Admin</th>
                  <th className="text-center">Principal</th>
                  <th className="text-center">Teacher</th>
                  <th className="text-center">Accountant</th>
                  <th className="text-center">Student</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row: any, idx: number) => (
                  <tr key={idx}>
                    <td className="fw-bold font-monospace text-dark">{row.permission}</td>
                    <td>
                      <span className="badge bg-secondary-subtle text-secondary rounded-pill">{row.module}</span>
                    </td>
                    <td className="text-center">{row.superAdmin ? <span className="badge bg-success font-monospace">ALLOW</span> : <span className="badge bg-light text-muted">DENY</span>}</td>
                    <td className="text-center">{row.principal ? <span className="badge bg-success font-monospace">ALLOW</span> : <span className="badge bg-light text-muted">DENY</span>}</td>
                    <td className="text-center">{row.teacher ? <span className="badge bg-success font-monospace">ALLOW</span> : <span className="badge bg-light text-muted">DENY</span>}</td>
                    <td className="text-center">{row.accountant ? <span className="badge bg-success font-monospace">ALLOW</span> : <span className="badge bg-light text-muted">DENY</span>}</td>
                    <td className="text-center">{row.student ? <span className="badge bg-success font-monospace">ALLOW</span> : <span className="badge bg-light text-muted">DENY</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Dynamic Sidebar Menus */}
        {activeTab === 'menus' && (
          <div className="row g-3">
            {menuStructure.map((menu: any, idx: number) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="border rounded-3 p-3 bg-light h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-1.5">
                      <Menu size={15} className="text-primary" /> {menu.title}
                    </h6>
                    {menu.badge && <span className="badge bg-primary-subtle text-primary font-monospace">{menu.badge}</span>}
                  </div>
                  <div className="list-group list-group-flush fs-12">
                    {menu.children?.map((child: any, cIdx: number) => (
                      <div key={cIdx} className="list-group-item bg-transparent px-0 py-1.5 d-flex justify-content-between align-items-center">
                        <span className="text-dark font-monospace">{child.title}</span>
                        <span className="badge bg-info-subtle text-info font-monospace fs-10">{child.permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: .NET 9 RBAC Policies */}
        {activeTab === 'csharp' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted font-monospace">ASP.NET Core 9 Authorization Policies</small>
              <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={() => handleCopy(rbacData?.csharpPolicyCode, 'csharp')}>
                {copiedTab === 'csharp' ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy
              </button>
            </div>
            <pre className="p-3 bg-dark text-light rounded-3 font-monospace fs-12 mb-0" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {rbacData?.csharpPolicyCode}
            </pre>
          </div>
        )}

        {/* Tab 4: React 19 Permission Hook */}
        {activeTab === 'react' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted font-monospace">React 19 Custom Hook: usePermission.ts</small>
              <button className="btn btn-sm btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-1" onClick={() => handleCopy(rbacData?.reactHookCode, 'react')}>
                {copiedTab === 'react' ? <Check size={13} className="text-success" /> : <Copy size={13} />} Copy
              </button>
            </div>
            <pre className="p-3 bg-dark text-light rounded-3 font-monospace fs-12 mb-0" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              {rbacData?.reactHookCode}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
};
