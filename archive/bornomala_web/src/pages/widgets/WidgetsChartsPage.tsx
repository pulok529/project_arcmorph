import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const WidgetsChartsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Charts" category="Widgets" />

      <div className="module-content-body">
<div className="row">

<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="row align-items-center">
<div className="col-6">
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Leads Generated">Leads Generated</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-users"></i>
</span>
</div>

<h3 className="mb-0 fw-bold"><span data-target="48.2">0</span>k</h3>
</div>

<p className="mb-0 text-muted">
<span className="text-success me-2">5.12% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">2.3k Up</span>
</p>
</div>

<div className="col-6">
<div className="text-end">
<div id="leads-generated-chart"></div>
</div>

</div>

</div>

</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="row align-items-center">
<div className="col-6">
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Qualified Leads">Qualified Leads</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-user-check"></i>
</span>
</div>

<h3 className="mb-0 fw-bold"><span data-target="12.8">0</span>k</h3>
</div>

<p className="mb-0 text-muted">
<span className="text-danger me-2">3.45% <i className="ti ti-trending-down ms-1"></i></span>
<span className="text-nowrap">0.4k Down</span>
</p>
</div>

<div className="col-6">
<div className="d-flex justify-content-end">
<div className="text-end" id="qualified-leads-chart"></div>
</div>

</div>

</div>

</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="row align-items-center">
<div className="col-6">
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Deals Closed">Deals Closed</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-briefcase"></i>
</span>
</div>

<h3 className="mb-0 fw-bold"><span data-target="9.75">0</span>k</h3>
</div>

<p className="mb-0 text-muted">
<span className="text-success me-2">2.94% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">1.1k Up</span>
</p>
</div>

<div className="col-6">
<div className="text-end">
<div id="deals-closed-chart"></div>
</div>

</div>

</div>

</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="row align-items-center">
<div className="col-6">
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Revenue Generated">Revenue Generated</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-currency-dollar"></i>
</span>
</div>

<h3 className="mb-0 fw-bold">$<span data-target="5.63">0</span>M</h3>
</div>

<p className="mb-0 text-muted">
<span className="text-success me-2">4.21% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">$32.4k Up</span>
</p>
</div>

<div className="col-6">
<div className="text-end">
<div id="revenue-generated-chart"></div>
</div>

</div>

</div>

</div>

</div>

</div>

</div>
<div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">

<div className="col">
<div className="card">
<div className="card-header d-flex border-0 justify-content-between align-items-center">
<h5 className="card-title mb-0">Total Revenue</h5>
<span className="badge bg-success-subtle text-success">+8.2%</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-1 fw-normal">$<span data-target="1240">0</span>K</h3>
<p className="mb-0 text-muted">This Quarter</p>
</div>
<div className="text-end w-50">
<div id="total-revenue-chart"></div>
</div>

</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header d-flex border-0 justify-content-between align-items-center">
<h5 className="card-title mb-0">Total Expenses</h5>
<span className="badge bg-danger-subtle text-danger">-2.1%</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="text-end w-50">
<div id="total-expenses-chart"></div>
</div>

<div className="text-end ms-3">
<h3 className="mb-1 fw-normal">$<span data-target="840">0</span>K</h3>
<p className="mb-0 text-muted">This Quarter</p>
</div>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header d-flex border-0 justify-content-between align-items-center">
<h5 className="card-title mb-0">Net Profit</h5>
<span className="badge bg-info-subtle text-info">Stable</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-1 fw-normal">$<span data-target="400">0</span>K</h3>
<p className="mb-0 text-muted">This Quarter</p>
</div>
<div className="text-end w-50">
<div id="net-profit-chart"></div>
</div>

</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header d-flex border-0 justify-content-between align-items-center">
<h5 className="card-title mb-0">Cash Flow</h5>
<span className="badge bg-warning-subtle text-warning">+5.6%</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="text-end w-50">
<div id="cash-flow-chart"></div>
</div>

<div className="text-end ms-3">
<h3 className="mb-1 fw-normal">$<span data-target="720">0</span>K</h3>
<p className="mb-0 text-muted">This Quarter</p>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-xxl-3 col-xl-6">
<div className="card card-h-100">
<div className="card-header justify-content-between">
<h4 className="card-title">Project Status Breakdown</h4>
<div className="dropdown ms-auto">
<a className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-eye me-2"></i> View All Status Details </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Status </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-calendar me-2"></i> Change Date Range </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Breakdown </a>
</li>
<li><hr className="dropdown-divider"/></li>
<li>
<a className="dropdown-item text-danger" href="#"> <i className="ti ti-refresh me-2"></i> Reset Status View </a>
</li>
</ul>
</div>
</div>
<div className="card-body pt-0">
<div className="apex-charts" id="project-status-chart"></div>
<div className="row mt-2">
<div className="col">
<div className="d-flex justify-content-between align-items-center p-1">
<div>
<i className="ti ti-circle-filled fs-12 align-middle me-1 text-secondary"></i>
<span className="align-middle fw-semibold">Completed</span>
</div>
<span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-down text-danger"></i> 965</span>
</div>
<div className="d-flex justify-content-between align-items-center p-1">
<div>
<i className="ti ti-circle-filled fs-12 align-middle me-1 text-warning"></i>
<span className="align-middle fw-semibold">In Progress</span>
</div>
<span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-up text-success"></i> 75</span>
</div>
</div>
<div className="col">
<div className="d-flex justify-content-between align-items-center p-1">
<div>
<i className="ti ti-circle-filled fs-12 align-middle me-1 text-secondary"></i>
<span className="align-middle fw-semibold"> Yet to Start</span>
</div>
<span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-up text-success"></i> 102</span>
</div>
<div className="d-flex justify-content-between align-items-center p-1">
<div>
<i className="ti ti-circle-filled fs-12 align-middle me-1 text-danger"></i>
<span className="align-middle fw-semibold">Cancelled</span>
</div>
<span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-down text-danger"></i> 96</span>
</div>
</div>
</div>
</div>
</div>

</div>

<div className="col-xxl-3 col-xl-6 order-xxl-1">
<div className="card card-h-100">
<div className="card-header justify-content-between">
<h4 className="card-title">Store Performance Analytics</h4>
<div>
<a className="btn btn-sm btn-default" href="#"><i className="ti ti-refresh me-1"></i> Refresh</a>
</div>
</div>
<div className="card-body">
<div dir="ltr">
<div className="apex-charts" id="total-sales-chart"></div>
</div>
<div className="text-center">
<span className="badge badge-outline-light text-dark p-1 px-2 rounded-pill fs-12"><i className="ti ti-star-filled text-success me-1"></i> GOOD SALES</span>
</div>
<div className="table-responsive mt-3">
<table className="table table-sm table-nowrap table-borderless table-centered mb-0">
<thead className="bg-light bg-opacity-50 thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Page</th>
<th>Views</th>
<th>B. Rate</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a className="text-muted" href="#!">/dashboard-analytics</a>
</td>
<td>25</td>
<td>87.5%</td>
</tr>
<tr>
<td>
<a className="text-muted" href="#!">/dashboard-crm</a>
</td>
<td>15</td>
<td>21.48%</td>
</tr>
<tr>
<td>
<a className="text-muted" href="#!">/ubold/dashboard</a>
</td>
<td>10</td>
<td>63.59%</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</div>

<div className="col-xxl-6 col-xl-12">
<div className="card card-h-100">
<div className="card-header justify-content-between">
<h4 className="card-title">Projects Performance Overview</h4>
<div className="dropdown ms-auto">
<a className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-chart-histogram me-2"></i> View Detailed Report </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Project </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-calendar me-2"></i> Select Date Range </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export as CSV </a>
</li>
<li>
<hr className="dropdown-divider"/>
</li>
<li>
<a className="dropdown-item text-danger" href="#"> <i className="ti ti-refresh me-2"></i> Reset Analytics </a>
</li>
</ul>
</div>
</div>
<div className="card-body">
<div className="row text-center g-2">
<div className="col">
<div className="border bg-light-subtle border-dashed border-light p-2 rounded">
<h4><span data-target="7,845">0</span></h4>
<p className="mb-0 text-muted">Number of Projects</p>
</div>
</div>
<div className="col">
<div className="border bg-light-subtle border-dashed border-light p-2 rounded">
<h4><span data-target="289">0</span></h4>
<p className="mb-0 text-muted">Active Projects</p>
</div>
</div>
<div className="col">
<div className="border bg-light-subtle border-dashed border-light p-2 rounded">
<h4>$<span data-target="982.5">0</span>k</h4>
<p className="mb-0 text-muted">Revenue</p>
</div>
</div>
<div className="col">
<div className="border bg-light-subtle border-dashed border-light p-2 rounded">
<h4>~<span data-target="12,559">0</span>h</h4>
<p className="mb-0 text-muted">Working Hours</p>
</div>
</div>
</div>
<div dir="ltr">
<div className="apex-charts" id="dash-projects-overviews"></div>
</div>
</div>
</div>

</div>

</div>
<div className="row">
<div className="col-xxl-6">
<div className="card card-h-100">
<div className="card-header border-dashed card-tabs">
<div className="flex-grow-1">
<h4 className="card-title">Sales Report <span className="text-muted fs-base fw-normal">(25822 Orders)</span></h4>
</div>
<ul className="nav nav-tabs nav-justified card-header-tabs nav-bordered">
<li className="nav-item">
<a aria-expanded={false} className="nav-link" data-bs-toggle="tab" href="#!">
<span className="d-md-none d-block">1D</span>
<span className="d-none d-md-block">Today</span>
</a>
</li>
<li className="nav-item">
<a aria-expanded={true} className="nav-link active" data-bs-toggle="tab" href="#!">
<span className="d-md-none d-block">1M</span>
<span className="d-none d-md-block">Monthly</span>
</a>
</li>
<li className="nav-item">
<a aria-expanded={false} className="nav-link" data-bs-toggle="tab" href="#!">
<span className="d-md-none d-block">1Y</span>
<span className="d-none d-md-block">Annual</span>
</a>
</li>
</ul>
</div>
<div className="card-body p-0">
<div className="bg-light bg-opacity-25 border-bottom border-dashed">
<div className="row text-center">
<div className="col-sm-4">
<p className="text-muted mt-3 mb-1">Revenue</p>
<h4 className="mb-3">
<i className="ti ti-wallet text-success me-1"></i>
<span>$<span data-target="78,224.68"></span></span>
</h4>
</div>
<div className="col-sm-4">
<p className="text-muted mt-3 mb-1">Orders</p>
<h4 className="mb-3">
<i className="ti ti-basket text-success me-1"></i>
<span><span data-target="8541"></span></span>
</h4>
</div>
<div className="col-sm-4">
<p className="text-muted mt-3 mb-1">Growth Rate</p>
<h4 className="mb-3">
<i className="ti ti-trending-up text-success me-1"></i>
<span><span data-target="25.3"></span>%</span>
</h4>
</div>
</div>
</div>
<div className="p-3 pt-1">
<div className="dash-item-overlay d-none d-md-block" dir="ltr">
<h5>Today's Earning: $8,975.30</h5>
<p className="text-muted mb-0 mt-2">Property PS007 is not receiving hits. Either your site is not receiving any sessions.</p>
</div>
<div dir="ltr">
<div className="apex-charts" id="sales-report-chart"></div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xxl-6">
<div className="card card-h-100">
<div className="card-header border-0 justify-content-between">
<h4 className="card-title">Financial Overview</h4>
<div className="dropdown ms-auto">
<a className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-refresh me-2"></i> Refresh Data </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-chart-bar me-2"></i> View Analytics </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter Report </a>
</li>
<li>
<hr className="dropdown-divider"/>
</li>
<li>
<a className="dropdown-item text-danger" href="#"> <i className="ti ti-download me-2"></i> Export Data </a>
</li>
</ul>
</div>
</div>
<div className="card-body p-0">
<div className="bg-light bg-opacity-40">
<div className="row text-center">
<div className="col">
<p className="text-muted mt-3 mb-1">Revenue</p>
<h4 className="mb-3">
<span className="ti ti-square-rounded-arrow-down text-success me-1"></span>
<span>$<span data-target="29.56">0</span>k</span>
</h4>
</div>
<div className="col">
<p className="text-muted mt-3 mb-1">Expenses</p>
<h4 className="mb-3">
<span className="ti ti-square-rounded-arrow-up text-danger me-1"></span>
<span>$<span data-target="15.08">0</span>k</span>
</h4>
</div>
<div className="col">
<p className="text-muted mt-3 mb-1">Investment</p>
<h4 className="mb-3">
<span className="ti ti-chart-infographic me-1"></span>
<span>$<span data-target="3.67">0</span>k</span>
</h4>
</div>
<div className="col">
<p className="text-muted mt-3 mb-1">Savings</p>
<h4 className="mb-3">
<span className="ti ti-pig me-1"></span>
<span>$<span data-target="6.72">0</span>k</span>
</h4>
</div>
</div>
</div>
<div className="p-2">
<div dir="ltr">
<div className="apex-charts" id="financial-overview-chart"></div>
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
