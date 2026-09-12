import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PermissionsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Permissions" category="Users" />

      <div className="module-content-body">
<div className="row">
<div className="col-xxl-12">
<div className="card" data-table="" data-table-rows-per-page="8">
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search permissions..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th data-table-sort="">Name</th>
<th>Assign To</th>
<th data-table-sort="">Created Date</th>
<th data-table-sort="">Users</th>
<th className="text-center">Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>User Management</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
</td>
<td>
                                                    24 Jun 2025,
                                                    <span className="text-muted">6:43 am</span>
</td>
<td>12</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Content Management</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-danger-subtle text-danger badge-label fs-xxs fw-semibold">Developer</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">Analyst</span>
<span className="badge bg-secondary-subtle text-secondary badge-label fs-xxs fw-semibold">Support</span>
<span className="badge bg-warning-subtle text-warning badge-label fs-xxs fw-semibold">Trial</span>
</td>
<td>
                                                    21 Feb 2025,
                                                    <span className="text-muted">11:05 am</span>
</td>
<td>5</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Financial Management</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">Analyst</span>
</td>
<td>
                                                    24 Jun 2025,
                                                    <span className="text-muted">5:30 pm</span>
</td>
<td>8</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Reporting</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">Analyst</span>
</td>
<td>
                                                    21 Feb 2025,
                                                    <span className="text-muted">5:20 pm</span>
</td>
<td>6</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Payroll</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">Analyst</span>
</td>
<td>
                                                    20 Jun 2025,
                                                    <span className="text-muted">6:05 pm</span>
</td>
<td>4</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Disputes Management</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-danger-subtle text-danger badge-label fs-xxs fw-semibold">Developer</span>
<span className="badge bg-secondary-subtle text-secondary badge-label fs-xxs fw-semibold">Support</span>
</td>
<td>
                                                    24 Jun 2025,
                                                    <span className="text-muted">5:20 pm</span>
</td>
<td>7</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Audit Logs</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
</td>
<td>
                                                    23 Jun 2025,
                                                    <span className="text-muted">4:00 pm</span>
</td>
<td>9</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>API Access</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-warning-subtle text-warning badge-label fs-xxs fw-semibold">Trial</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">DevOps</span>
</td>
<td>
                                                    22 Jun 2025,
                                                    <span className="text-muted">2:35 pm</span>
</td>
<td>3</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Notification Center</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-info-subtle text-info badge-label fs-xxs fw-semibold">Support</span>
</td>
<td>
                                                    22 Jun 2025,
                                                    <span className="text-muted">8:45 am</span>
</td>
<td>2</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
<tr>
<td>Access Logs</td>
<td>
<span className="badge bg-primary-subtle text-primary badge-label fs-xxs fw-semibold">Administrator</span>
<span className="badge bg-secondary-subtle text-secondary badge-label fs-xxs fw-semibold">Support</span>
</td>
<td>
                                                    19 Jun 2025,
                                                    <span className="text-muted">6:10 pm</span>
</td>
<td>5</td>
<td className="text-center">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="permissions"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
};
