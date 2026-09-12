import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const TreeViewPage: React.FC = () => {
  // Tree 1: Basic Treeview
  const [tree1Open, setTree1Open] = useState<Record<string, boolean>>({
    't1-1': true,
    't1-1-3': true,
    't1-2': false,
    't1-2-4': true,
    't1-3': false,
    't1-4': false
  });
  const [tree1Selected, setTree1Selected] = useState<string>('t1-1-1');

  // Tree 2: Custom Icons & Clickable Nodes
  const [tree2Open, setTree2Open] = useState<Record<string, boolean>>({
    't2-1': true,
    't2-1-3': true
  });

  // Tree 3: Checkable Tree
  const [tree3Open, setTree3Open] = useState<Record<string, boolean>>({
    't3-1': true,
    't3-1-3': true,
    't3-2': true
  });
  const [tree3Checked, setTree3Checked] = useState<Record<string, boolean>>({
    't3-1-1': true,
    't3-1-4': true,
    't3-2-1': true
  });

  // Tree 4: Context Menu
  const [tree4Open, setTree4Open] = useState<Record<string, boolean>>({
    't4-1': true,
    't4-1-3': true,
    't4-1-6': true,
    't4-2': false
  });
  const [contextAction, setContextAction] = useState<string | null>(null);

  // Tree 5: Drag & Drop
  const [tree5Open, setTree5Open] = useState<Record<string, boolean>>({
    't5-1': true,
    't5-1-2': true,
    't5-1-3': false,
    't5-2': false,
    't5-3': false
  });

  // Tree 6: Ajax Data
  const [tree6Open, setTree6Open] = useState<Record<string, boolean>>({
    't6-1': true,
    't6-1-1': true
  });
  const [tree6Loading, setTree6Loading] = useState(false);

  const toggleOpen = (setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>, id: string) => {
    setter(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCheck = (id: string) => {
    setTree3Checked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Tree View" breadcrumbs={[{ label: 'Plugins' }, { label: 'Tree View', active: true }]} />

      <div className="row">
        <div className="col-12">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Note:</strong> Pure React-driven Tree View suite providing fully interactive hierarchical tree structures, custom icons, checkboxes, context actions, and drag-and-drop aesthetics.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>

        {/* Card 1: Basic Treeview */}
        <div className="col-md-6">
          <Card title="Basic Treeview">
            <div className="treeview-container py-2">
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree1Open, 't1-1')}>
                    <i className={`ti ti-chevron-${tree1Open['t1-1'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder-filled text-warning me-2 fs-md"></i>
                    <span className="fw-medium">Dashboard</span>
                  </div>
                  {tree1Open['t1-1'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1">
                        <span 
                          className={`badge ${tree1Selected === 't1-1-1' ? 'bg-primary text-white' : 'text-body'} cursor-pointer px-2 py-1`}
                          onClick={() => setTree1Selected('t1-1-1')}
                        >
                          <i className="ti ti-file-text me-1 text-muted"></i> Overview
                        </span>
                      </li>
                      <li className="py-1 ps-2 cursor-pointer text-muted" onClick={() => setTree1Selected('t1-1-2')}>
                        <i className="ti ti-file-text me-1"></i> Analytics
                      </li>
                      <li>
                        <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree1Open, 't1-1-3')}>
                          <i className={`ti ti-chevron-${tree1Open['t1-1-3'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                          <i className="ti ti-folder-open text-warning me-2"></i>
                          <span>Reports</span>
                        </div>
                        {tree1Open['t1-1-3'] && (
                          <ul className="list-unstyled ps-4">
                            <li className="py-1 text-muted text-decoration-line-through">
                              <i className="ti ti-file me-1"></i> Archived Report
                            </li>
                            <li className="py-1 text-primary">
                              <i className="ti ti-file-text me-1"></i> Current Report
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="py-1 ps-2 cursor-pointer text-muted">
                        <i className="ti ti-settings me-1"></i> Settings
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mt-2">
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree1Open, 't1-2')}>
                    <i className={`ti ti-chevron-${tree1Open['t1-2'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder-filled text-warning me-2 fs-md"></i>
                    <span className="fw-medium">Users</span>
                  </div>
                  {tree1Open['t1-2'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1 text-muted"><i className="ti ti-user me-1"></i> New Users</li>
                      <li className="py-1 text-muted"><i className="ti ti-user-check me-1 text-success"></i> Active Users</li>
                      <li className="py-1 text-muted"><i className="ti ti-user-x me-1 text-danger"></i> Banned Users</li>
                    </ul>
                  )}
                </li>

                <li className="mt-2">
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree1Open, 't1-3')}>
                    <i className={`ti ti-chevron-${tree1Open['t1-3'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder-filled text-warning me-2 fs-md"></i>
                    <span className="fw-medium">Files</span>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          {/* Card 2: Custom Icons & Clickable Nodes */}
          <Card title="Custom Icons & Clickable Nodes">
            <div className="treeview-container py-2">
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree2Open, 't2-1')}>
                    <i className={`ti ti-chevron-${tree2Open['t2-1'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder text-warning me-2"></i>
                    <span className="fw-semibold">Main Category</span>
                  </div>
                  {tree2Open['t2-1'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1">
                        <span className="badge bg-primary-subtle text-primary px-2 py-1 cursor-pointer">
                          <i className="ti ti-star-filled text-warning me-1"></i> Favorite Item
                        </span>
                      </li>
                      <li className="py-1 text-success cursor-pointer">
                        <i className="ti ti-file-text me-1"></i> Documentation Files
                      </li>
                      <li>
                        <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree2Open, 't2-1-3')}>
                          <i className={`ti ti-chevron-${tree2Open['t2-1-3'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                          <i className="ti ti-folder-open text-warning me-2"></i>
                          <span>Project Resources</span>
                        </div>
                        {tree2Open['t2-1-3'] && (
                          <ul className="list-unstyled ps-4">
                            <li className="py-1 text-muted"><i className="ti ti-ban text-danger me-1"></i> Restricted Access</li>
                            <li className="py-1 text-danger"><i className="ti ti-file-type-pdf me-1"></i> Final Report.pdf</li>
                          </ul>
                        )}
                      </li>
                      <li className="py-1 text-danger"><i className="ti ti-user text-danger me-1"></i> Team Member Info</li>
                    </ul>
                  )}
                </li>
                <li className="mt-2 ps-2">
                  <a href="#buy" className="text-info text-decoration-none">
                    <i className="ti ti-link me-1"></i> Buy <span className="text-danger fw-semibold fst-italic">MyAdmin</span> - Click here
                  </a>
                </li>
              </ul>
            </div>
          </Card>

          {/* Card 3: Checkable Tree */}
          <Card title="Checkable Tree">
            <div className="treeview-container py-2">
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center py-1">
                    <i className={`ti ti-chevron-${tree3Open['t3-1'] ? 'down' : 'right'} text-muted me-1 fs-sm cursor-pointer`} onClick={() => toggleOpen(setTree3Open, 't3-1')}></i>
                    <input type="checkbox" className="form-check-input me-2 mt-0" checked={!!tree3Checked['t3-1']} onChange={() => toggleCheck('t3-1')} />
                    <span className="fw-medium cursor-pointer" onClick={() => toggleOpen(setTree3Open, 't3-1')}>Sample Nodes with Checkboxes</span>
                  </div>
                  {tree3Open['t3-1'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1 d-flex align-items-center">
                        <input type="checkbox" className="form-check-input me-2 mt-0" checked={!!tree3Checked['t3-1-1']} onChange={() => toggleCheck('t3-1-1')} />
                        <span className="text-primary"><i className="ti ti-check me-1"></i> Item initially selected</span>
                      </li>
                      <li className="py-1 d-flex align-items-center">
                        <input type="checkbox" className="form-check-input me-2 mt-0" checked={!!tree3Checked['t3-1-2']} onChange={() => toggleCheck('t3-1-2')} />
                        <span className="text-danger"><i className="ti ti-database me-1"></i> Custom feedback icon</span>
                      </li>
                      <li className="py-1 d-flex align-items-center">
                        <input type="checkbox" className="form-check-input me-2 mt-0" checked={!!tree3Checked['t3-1-4']} onChange={() => toggleCheck('t3-1-4')} />
                        <span className="text-warning"><i className="ti ti-alert-triangle me-1"></i> Document with a warning icon</span>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mt-2">
                  <div className="d-flex align-items-center py-1">
                    <i className={`ti ti-chevron-${tree3Open['t3-2'] ? 'down' : 'right'} text-muted me-1 fs-sm cursor-pointer`} onClick={() => toggleOpen(setTree3Open, 't3-2')}></i>
                    <input type="checkbox" className="form-check-input me-2 mt-0" checked={!!tree3Checked['t3-2-1']} onChange={() => toggleCheck('t3-2-1')} />
                    <span className="fw-medium">Additional Category</span>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          {/* Card 4: Context Menu */}
          <Card title="Context Menu" subtitle="Right-click or click action icons on any tree item to access options like create, rename, edit, copy, cut, and more.">
            <div className="treeview-container py-2">
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center justify-content-between py-1 cursor-pointer bg-light rounded px-2" onClick={() => toggleOpen(setTree4Open, 't4-1')}>
                    <div className="d-flex align-items-center">
                      <i className={`ti ti-chevron-${tree4Open['t4-1'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                      <i className="ti ti-folder-filled text-warning me-2"></i>
                      <span className="fw-medium">Parent Node</span>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-light border py-0 px-2" onClick={(e) => { e.stopPropagation(); setContextAction('Parent Node Options'); }}>
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                    </div>
                  </div>
                  {tree4Open['t4-1'] && (
                    <ul className="list-unstyled ps-4 pt-1">
                      <li className="py-1 text-primary d-flex align-items-center justify-content-between">
                        <span><i className="ti ti-file-text me-1"></i> Initially selected</span>
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-xs btn-outline-secondary py-0 px-1" title="Edit"><i className="ti ti-edit"></i></button>
                          <button className="btn btn-xs btn-outline-secondary py-0 px-1" title="Copy"><i className="ti ti-copy"></i></button>
                          <button className="btn btn-xs btn-outline-danger py-0 px-1" title="Delete"><i className="ti ti-trash"></i></button>
                        </div>
                      </li>
                      <li className="py-1 text-danger d-flex align-items-center justify-content-between">
                        <span><i className="ti ti-database me-1"></i> Custom Icon</span>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              {contextAction && (
                <div className="alert alert-info py-1 px-2 mt-2 mb-0 fs-xs">
                  Action triggered: <strong>{contextAction}</strong>
                </div>
              )}
            </div>
          </Card>

          {/* Card 5: Drag & Drop */}
          <Card title="Drag & Drop">
            <div className="treeview-container py-2">
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree5Open, 't5-1')}>
                    <i className={`ti ti-chevron-${tree5Open['t5-1'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder-filled text-success me-2"></i>
                    <span className="fw-medium">Main Category (Draggable)</span>
                  </div>
                  {tree5Open['t5-1'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1 cursor-grab text-muted border-bottom border-dashed py-1">
                        <i className="ti ti-arrows-sort me-1 text-muted"></i> Dashboard (Drag to Reorder)
                      </li>
                      <li className="py-1 cursor-grab text-muted border-bottom border-dashed py-1">
                        <i className="ti ti-arrows-sort me-1 text-muted"></i> Reports (Drag to Reorder)
                      </li>
                      <li className="py-1 cursor-grab text-muted py-1">
                        <i className="ti ti-arrows-sort me-1 text-muted"></i> User Management
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mt-2">
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree5Open, 't5-2')}>
                    <i className={`ti ti-chevron-${tree5Open['t5-2'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-folder-filled text-primary me-2"></i>
                    <span className="fw-medium">Archives</span>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          {/* Card 6: Ajax Data */}
          <Card title="Ajax Data">
            <div className="treeview-container py-2">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted fs-sm">Simulated dynamic remote JSON endpoint:</span>
                <button 
                  className="btn btn-xs btn-outline-primary"
                  onClick={() => {
                    setTree6Loading(true);
                    setTimeout(() => setTree6Loading(false), 600);
                  }}
                >
                  {tree6Loading ? <span className="spinner-border spinner-border-sm me-1"></span> : <i className="ti ti-refresh me-1"></i>}
                  Reload Ajax Tree
                </button>
              </div>
              <ul className="list-unstyled mb-0 ps-2">
                <li>
                  <div className="d-flex align-items-center py-1 cursor-pointer" onClick={() => toggleOpen(setTree6Open, 't6-1')}>
                    <i className={`ti ti-chevron-${tree6Open['t6-1'] ? 'down' : 'right'} text-muted me-1 fs-sm`}></i>
                    <i className="ti ti-cloud-download text-primary me-2"></i>
                    <span className="fw-medium">Remote Server Files</span>
                  </div>
                  {tree6Open['t6-1'] && (
                    <ul className="list-unstyled ps-4">
                      <li className="py-1 text-muted"><i className="ti ti-file-code me-1 text-success"></i> remote_api_schema.json</li>
                      <li className="py-1 text-muted"><i className="ti ti-file-database me-1 text-info"></i> server_cluster_metrics.db</li>
                      <li className="py-1 text-muted"><i className="ti ti-file-text me-1 text-warning"></i> production_logs.log</li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default TreeViewPage;
