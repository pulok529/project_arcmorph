import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const SortablePage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Sortable List" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Sortables List</h4>
</div>

<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>nested-sortable</code>
                                        classes on the
                                        <code>list-group</code>
                                        element to enable drag-and-drop sorting of hierarchical task items.
                                    </p>
<div className="list-group fw-medium nested-sortable">
<div className="list-group-item">Design Phase</div>
<div className="list-group-item">
                                            Development Phase
                                            <div className="list-group nested-sortable">
<div className="list-group-item">Frontend Implementation</div>
<div className="list-group-item">
                                                    Backend API Setup
                                                    <div className="list-group nested-sortable">
<div className="list-group-item">Authentication Module</div>
<div className="list-group-item">Database Schema</div>
</div>
</div>
</div>
</div>
<div className="list-group-item">
                                            Testing Phase
                                            <div className="list-group nested-sortable">
<div className="list-group-item">Unit Tests</div>
<div className="list-group-item">Integration Tests</div>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Sortables List with Handle</h4>
</div>

<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>nested-sortable-handle</code>
                                        class to list-group class to set a nested list with sortable items.
                                    </p>
<div className="list-group fw-medium nested-sortable-handle">
<div className="list-group-item nested-1">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                            Project Alpha
                                            <div className="list-group nested-sortable-handle">
<div className="list-group-item nested-2">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                    Design Phase
                                                </div>
<div className="list-group-item nested-2">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                    Development Phase
                                                    <div className="list-group nested-sortable-handle">
<div className="list-group-item nested-3">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                            Frontend Module
                                                        </div>
<div className="list-group-item nested-3">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                            Backend Module
                                                        </div>
<div className="list-group-item nested-3">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                            API Integration
                                                        </div>
<div className="list-group-item nested-3">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                            Unit Testing
                                                        </div>
</div>
</div>
<div className="list-group-item nested-2">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                    QA Review
                                                </div>
<div className="list-group-item nested-2">
<i className="ti ti-grip-horizontal align-middle sort-handle"></i>
                                                    Deployment
                                                </div>
</div>
</div>
</div>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Sortable with Icons</h4>
</div>

<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>nested-sortable</code>
                                        class to list-group class to set a nested list with sortable items where icons are given within list-group-item.
                                    </p>
<div className="list-group border-dashed">
<div className="list-group-item">
<div className="d-flex align-items-center gap-2 mb-2">
<div className="avatar-xs flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle">
<i className="ti ti-layout-kanban fs-sm text-primary"></i>
</span>
</div>
<div>
<h5 className="mb-0">Tasks</h5>
</div>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-list-check fs-sm me-2 text-muted"></i>
                                                    To Do
                                                </div>
<div className="list-group-item">
<i className="ti ti-info-circle fs-sm me-2 text-muted"></i>
                                                    In Progress
                                                </div>
<div className="list-group-item">
<i className="ti ti-circle-check fs-sm me-2 text-muted"></i>
                                                    Completed
                                                </div>
</div>
</div>
<div className="list-group-item">
<div className="d-flex align-items-center gap-2 mb-2">
<div className="avatar-xs flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle">
<i className="ti ti-flag fs-sm text-primary"></i>
</span>
</div>
<div>
<h5 className="mb-0">Milestones</h5>
</div>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    Project Kickoff
                                                </div>
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    Phase 1 Completion
                                                </div>
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    Final Delivery
                                                </div>
</div>
</div>
<div className="list-group-item">
<div className="d-flex align-items-center gap-2 mb-2">
<div className="avatar-xs flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle">
<i className="ti ti-users fs-sm text-primary"></i>
</span>
</div>
<div>
<h5 className="mb-0">Teams</h5>
</div>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    Development Team
                                                </div>
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    Design Team
                                                </div>
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    QA Team
                                                </div>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Sortable with Icons with Labels</h4>
</div>

<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>nested-sortable</code>
                                        class with the list-group class to create a nested list with sortable items where icons are placed inside list-group-item.
                                    </p>
<div className="list-group border-dashed">

<div className="list-group-item">
<div className="d-flex align-items-center justify-content-between mb-2">
<div className="d-flex align-items-center gap-2">
<i className="ti ti-layout-kanban fs-4 text-primary"></i>
<h5 className="mb-0 fw-semibold">Strategy</h5>
</div>
<span className="badge bg-primary-subtle text-primary">Phase A</span>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-list-check fs-sm me-2 text-muted"></i>
                                                    Research Topics
                                                </div>
<div className="list-group-item">
<i className="ti ti-info-circle fs-sm me-2 text-muted"></i>
                                                    Analysis in Progress
                                                </div>
<div className="list-group-item">
<i className="ti ti-circle-check fs-sm me-2 text-muted"></i>
                                                    Insights Approved
                                                </div>
</div>
</div>

<div className="list-group-item">
<div className="d-flex align-items-center justify-content-between mb-2">
<div className="d-flex align-items-center gap-2">
<i className="ti ti-flag fs-4 text-primary"></i>
<h5 className="mb-0 fw-semibold">Key Deliverables</h5>
</div>
<span className="badge bg-info-subtle text-info">Phase B</span>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    Initial Draft Release
                                                </div>
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    User Testing Round
                                                </div>
<div className="list-group-item">
<i className="ti ti-flag fs-sm me-2 text-muted"></i>
                                                    Final Launch
                                                </div>
</div>
</div>

<div className="list-group-item">
<div className="d-flex align-items-center justify-content-between mb-2">
<div className="d-flex align-items-center gap-2">
<i className="ti ti-users fs-4 text-primary"></i>
<h5 className="mb-0 fw-semibold">Departments</h5>
</div>
<span className="badge bg-success-subtle text-success">Phase C</span>
</div>
<div className="list-group nested-sortable border-0">
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    Engineering Unit
                                                </div>
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    Creative Studio
                                                </div>
<div className="list-group-item">
<i className="ti ti-user fs-sm me-2 text-muted"></i>
                                                    Quality Assurance
                                                </div>
</div>
</div>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
