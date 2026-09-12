import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const RolesPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Roles" category="Users" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="d-flex align-items-sm-center flex-sm-row flex-column my-3">
<div className="flex-grow-1">
<h4 className="fs-xl mb-1">Manage Roles</h4>
<p className="text-muted mb-0">Manage roles for smoother operations and secure access.</p>
</div>
<div className="text-end">
<a className="btn btn-success" data-bs-target="#addRoleModal" data-bs-toggle="modal" href="#!"> <i className="ti ti-plus me-1"></i> Add New Role </a>
</div>
</div>
<div className="row">
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="position-absolute top-0 end-0" style={{ width: '180px' }}>
<img alt="auth-card-bg" className="auth-card-bg-img" src="assets/images/auth-card-bg.svg"/>
</div>
<div className="card-body d-flex flex-column justify-content-between">
<div className="d-flex mb-4">
<div className="flex-shrink-0">
<div className="avatar-xl rounded bg-primary-subtle d-flex align-items-center justify-content-center">
<i className="ti ti-shield-lock fs-24 text-primary"></i>
</div>
</div>
<div className="ms-3">
<h5 className="mb-1">Security Officer</h5>
<p className="text-muted mb-0 fs-base">Handles platform safety and protocol reviews.</p>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="text-muted fs-xl" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-2"></i>
                                                                    View
                                                                </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                                    Edit
                                                                </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                                    Remove
                                                                </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled mb-3">
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Daily Risk Assessment</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Manage Security Logs</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Control Access Rights</li>
<li className="d-flex align-items-center"><i className="ti ti-check fs-lg text-success me-2"></i> Emergency Protocols</li>
</ul>
<p className="mb-2 text-muted">Total 4 users</p>
<div className="avatar-group avatar-group-sm mb-3">
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-7.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-8.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-9.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-10.jpg"/>
</div>
</div>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs"><i className="ti ti-clock me-1"></i> Updated 1 hour ago</span>
<a className="btn btn-sm btn-outline-primary rounded-pill" href="apps-users-role-details.html">Details</a>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="position-absolute top-0 end-0" style={{ width: '180px' }}>
<img alt="auth-card-bg" className="auth-card-bg-img" src="assets/images/auth-card-bg.svg"/>
</div>
<div className="card-body d-flex flex-column justify-content-between">
<div className="d-flex mb-4">
<div className="flex-shrink-0">
<div className="avatar-xl rounded bg-primary-subtle d-flex align-items-center justify-content-center">
<i className="ti ti-briefcase fs-24 text-primary"></i>
</div>
</div>
<div className="ms-3">
<h5 className="mb-1">Project Manager</h5>
<p className="text-muted mb-0 fs-base">Coordinates planning and team delivery timelines.</p>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="text-muted fs-xl" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-2"></i>
                                                                    View
                                                                </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                                    Edit
                                                                </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                                    Remove
                                                                </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled mb-3">
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Timeline Tracking</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Task Assignments</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Budget Control</li>
<li className="d-flex align-items-center"><i className="ti ti-check fs-lg text-success me-2"></i> Stakeholder Reporting</li>
</ul>
<p className="mb-2 text-muted">Total 5 users</p>
<div className="avatar-group avatar-group-sm mb-3">
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-2.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-5.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-6.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-1.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-8.jpg"/></div>
</div>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs"><i className="ti ti-clock me-1"></i> Updated 2 hours ago</span>
<a className="btn btn-sm btn-outline-primary rounded-pill" href="apps-users-role-details.html">Details</a>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="position-absolute top-0 end-0" style={{ width: '180px' }}>
<img alt="auth-card-bg" className="auth-card-bg-img" src="assets/images/auth-card-bg.svg"/>
</div>
<div className="card-body d-flex flex-column justify-content-between">
<div className="d-flex mb-4">
<div className="flex-shrink-0">
<div className="avatar-xl rounded bg-primary-subtle d-flex align-items-center justify-content-center">
<i className="ti ti-code fs-24 text-primary"></i>
</div>
</div>
<div className="ms-3">
<h5 className="mb-1">Developer</h5>
<p className="text-muted mb-0 fs-base">Builds and maintains the platform core features.</p>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="text-muted fs-xl" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-2"></i>
                                                                    View
                                                                </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                                    Edit
                                                                </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                                    Remove
                                                                </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled mb-3">
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Codebase Maintenance</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> API Integration</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Unit Testing</li>
<li className="d-flex align-items-center"><i className="ti ti-check fs-lg text-success me-2"></i> Feature Deployment</li>
</ul>
<p className="mb-2 text-muted">Total 6 users</p>
<div className="avatar-group avatar-group-sm mb-3">
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-3.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-4.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-9.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-10.jpg"/></div>
<div className="avatar avatar-sm" data-bs-placement="top" data-bs-toggle="tooltip" title="2 More">
<span className="avatar-title text-bg-primary rounded-circle fw-bold"> +2 </span>
</div>
</div>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs"><i className="ti ti-clock me-1"></i> Updated 3 hours ago</span>
<a className="btn btn-sm btn-outline-primary rounded-pill" href="apps-users-role-details.html">Details</a>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="position-absolute top-0 end-0" style={{ width: '180px' }}>
<img alt="auth-card-bg" className="auth-card-bg-img" src="assets/images/auth-card-bg.svg"/>
</div>
<div className="card-body d-flex flex-column justify-content-between">
<div className="d-flex mb-4">
<div className="flex-shrink-0">
<div className="avatar-xl rounded bg-primary-subtle d-flex align-items-center justify-content-center">
<i className="ti ti-headset fs-24 text-primary"></i>
</div>
</div>
<div className="ms-3">
<h5 className="mb-1">Support Lead</h5>
<p className="text-muted mb-0 fs-base">Oversees customer support and service quality.</p>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="text-muted fs-xl" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-2"></i>
                                                                    View
                                                                </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                                    Edit
                                                                </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                                    Remove
                                                                </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled mb-3">
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Respond to Tickets</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> Live Chat Supervision</li>
<li className="d-flex align-items-center mb-2"><i className="ti ti-check fs-lg text-success me-2"></i> FAQ Updates</li>
<li className="d-flex align-items-center"><i className="ti ti-check fs-lg text-success me-2"></i> Support Metrics Review</li>
</ul>
<p className="mb-2 text-muted">Total 3 users</p>
<div className="avatar-group avatar-group-sm mb-3">
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-1.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-5.jpg"/></div>
<div className="avatar"><img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-7.jpg"/></div>
</div>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs"><i className="ti ti-clock me-1"></i> Updated 30 min ago</span>
<a className="btn btn-sm btn-outline-primary rounded-pill" href="apps-users-role-details.html">Details</a>
</div>
</div>
</div>
</div>
</div>

<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="8">
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search users..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="roles">
<option defaultValue="All">Role</option>
<option defaultValue="Security Officer">Security Officer</option>
<option defaultValue="Project Manager">Project Manager</option>
<option defaultValue="Developer">Developer</option>
<option defaultValue="Support Lead">Support Lead</option>
</select>
<i className="ti ti-user-hexagon app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="status">
<option defaultValue="All">Status</option>
<option defaultValue="Active">Active</option>
<option defaultValue="Inactive">Inactive</option>
<option defaultValue="Suspended">Suspended</option>
</select>
<i className="ti ti-user-check app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
<button className="btn btn-secondary" data-bs-target="#addUserModal" data-bs-toggle="modal" type="button">Add User</button>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" id="select-all-files" type="checkbox" defaultValue="option"/>
</th>
<th data-table-sort="">ID</th>
<th data-table-sort="user">User</th>
<th data-column="roles" data-table-sort="">Role</th>
<th data-table-sort="">Last Updated</th>
<th data-column="status" data-table-sort="">Status</th>
<th className="text-center">Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00123</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-5.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Nathan Young</a>
</h5>
<p className="text-muted fs-xs mb-0">nathan@companymail.com</p>
</div>
</div>
</td>
<td>Project Manager</td>
<td>
                                                            18 Apr, 2025
                                                            <small className="text-muted">9:45 AM</small>
</td>
<td>
<span className="badge bg-warning-subtle text-warning badge-label">Inactive</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00145</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-3.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Leah Kim</a>
</h5>
<p className="text-muted fs-xs mb-0">leah@wavehub.io</p>
</div>
</div>
</td>
<td>Developer</td>
<td>
                                                            21 Apr, 2025
                                                            <small className="text-muted">3:15 PM</small>
</td>
<td>
<span className="badge bg-success-subtle text-success badge-label">Active</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00162</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-1.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Sophie Lee</a>
</h5>
<p className="text-muted fs-xs mb-0">sophie@infrakit.io</p>
</div>
</div>
</td>
<td>Support Lead</td>
<td>
                                                            19 Apr, 2025
                                                            <small className="text-muted">10:00 AM</small>
</td>
<td>
<span className="badge bg-danger-subtle text-danger badge-label">Suspended</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00178</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-2.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">David Tran</a>
</h5>
<p className="text-muted fs-xs mb-0">david@devsync.com</p>
</div>
</div>
</td>
<td>Developer</td>
<td>
                                                            22 Apr, 2025
                                                            <small className="text-muted">8:15 AM</small>
</td>
<td>
<span className="badge bg-success-subtle text-success badge-label">Active</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00189</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-4.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Isabella Moore</a>
</h5>
<p className="text-muted fs-xs mb-0">isabella@tracklog.com</p>
</div>
</div>
</td>
<td>Security Officer</td>
<td>
                                                            20 Apr, 2025
                                                            <small className="text-muted">2:45 PM</small>
</td>
<td>
<span className="badge bg-success-subtle text-success badge-label">Active</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00203</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-6.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Daniel Cooper</a>
</h5>
<p className="text-muted fs-xs mb-0">daniel@cloudops.dev</p>
</div>
</div>
</td>
<td>Support Lead</td>
<td>
                                                            15 Apr, 2025
                                                            <small className="text-muted">11:20 AM</small>
</td>
<td>
<span className="badge bg-warning-subtle text-warning badge-label">Inactive</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00215</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-8.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Ava Thompson</a>
</h5>
<p className="text-muted fs-xs mb-0">ava@digitalsphere.io</p>
</div>
</div>
</td>
<td>Developer</td>
<td>
                                                            23 Apr, 2025
                                                            <small className="text-muted">4:25 PM</small>
</td>
<td>
<span className="badge bg-success-subtle text-success badge-label">Active</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00228</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-9.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Mason Carter</a>
</h5>
<p className="text-muted fs-xs mb-0">mason@buildzone.io</p>
</div>
</div>
</td>
<td>Security Officer</td>
<td>
                                                            17 Apr, 2025
                                                            <small className="text-muted">6:10 PM</small>
</td>
<td>
<span className="badge bg-danger-subtle text-danger badge-label">Suspended</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 file-item-check mt-0" type="checkbox"/>
</td>
<td>
<h5 className="m-0">
<a className="link-reset" href="#">#USR00239</a>
</h5>
</td>
<td>
<div className="d-flex align-items-center gap-2">
<div className="avatar avatar-sm">
<img alt="" className="img-fluid rounded-circle" src="assets/images/users/user-10.jpg"/>
</div>
<div>
<h5 className="fs-base mb-0">
<a className="link-reset" data-sort="user" href="#">Chloe Adams</a>
</h5>
<p className="text-muted fs-xs mb-0">chloe@infraops.io</p>
</div>
</div>
</td>
<td>Project Manager</td>
<td>
                                                            11 Apr, 2025
                                                            <small className="text-muted">1:30 PM</small>
</td>
<td>
<span className="badge bg-warning-subtle text-warning badge-label">Inactive</span>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-default btn-icon btn-sm" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="roles"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>

</div>

</div>

</div>

</div>
<div aria-hidden={true} aria-labelledby="addRoleModalLabel" className="modal fade" id="addRoleModal" tabIndex={-1}>
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="addRoleModalLabel">Add New Role</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<form id="addRoleForm">
<div className="modal-body">
<div className="row g-3">
<div className="col-md-6">
<label className="form-label" htmlFor="roleName">Role Name</label>
<input className="form-control" id="roleName" placeholder="e.g. Developer, Project Manager" required type="text"/>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="roleDescription">Description</label>
<input className="form-control" id="roleDescription" placeholder="Brief description" required type="text"/>
</div>
<div className="col-12">
<label className="form-label" htmlFor="roleResponsibilities">Key Responsibilities</label>
<textarea className="form-control" id="roleResponsibilities" placeholder="Enter responsibilities separated by commas or lines" required rows={4}></textarea>
<small className="text-muted">Example: Codebase Maintenance, API Integration, Unit Testing</small>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="roleUsers">Assign Users</label>
<select className="form-select" id="roleUsers" multiple>
<option defaultValue="1">John Doe</option>
<option defaultValue="2">Sarah Smith</option>
<option defaultValue="3">Michael Brown</option>
<option defaultValue="4">Emma Wilson</option>
</select>
<small className="text-muted">Hold Ctrl (Windows) or Cmd (Mac) to select multiple users</small>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="roleIcon">Role Icon</label>
<input className="form-control" id="roleIcon" placeholder="e.g. ti ti-shield, ti ti-briefcase" type="text"/>
<small className="text-muted">Use icon class from your icon library</small>
</div>
</div>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Cancel</button>
<button className="btn btn-primary" type="submit">Add Role</button>
</div>
</form>
</div>
</div>
</div>
<div aria-hidden={true} aria-labelledby="addUserModalLabel" className="modal fade" id="addUserModal" tabIndex={-1}>
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="addUserModalLabel">Add New User</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<form id="addUserForm">
<div className="modal-body">
<div className="row g-3">
<div className="col-md-6">
<label className="form-label" htmlFor="userFullName">Full Name</label>
<input className="form-control" id="userFullName" placeholder="Enter full name" required type="text"/>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="userEmail">Email Address</label>
<input className="form-control" id="userEmail" placeholder="Enter email" required type="email"/>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="userRole">Role</label>
<select className="form-select" id="userRole" required>
<option defaultValue="">Select role</option>
<option defaultValue="Project Manager">Project Manager</option>
<option defaultValue="Developer">Developer</option>
<option defaultValue="Support Lead">Support Lead</option>
<option defaultValue="Security Officer">Security Officer</option>
</select>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="userStatus">Status</label>
<select className="form-select" id="userStatus" required>
<option defaultValue="">Select status</option>
<option defaultValue="Active">Active</option>
<option defaultValue="Inactive">Inactive</option>
<option defaultValue="Suspended">Suspended</option>
</select>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="userAvatar">User Avatar</label>
<input accept="image/*" className="form-control" id="userAvatar" type="file"/>
<small className="text-muted">Optional: Upload avatar image</small>
</div>
</div>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Cancel</button>
<button className="btn btn-primary" type="submit">Add User</button>
</div>
</form>
</div>
</div>
</div>

      </div>
    </div>
  );
};
