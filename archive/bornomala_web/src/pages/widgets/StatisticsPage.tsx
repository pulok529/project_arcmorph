import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const StatisticsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Statistics" category="Widgets" />

      <div className="module-content-body">
<div className="row">

<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between">
<div>
<h5 className="text-muted fs-base text-uppercase" title="Total Orders">Total Orders</h5>
<h3 className="my-2 py-1 fw-semibold"><span data-target="12,540">0</span></h3>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-arrow-up"></i> 3.2%</span>
                                                Since last month
                                            </p>
</div>
<div className="avatar-lg flex-shrink-0">
<span className="avatar-title bg-primary-subtle rounded fs-22">
<i className="ti ti-shopping-cart text-primary"></i>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card bg-info-subtle border-info border-opacity-25 card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between">
<div>
<h5 className="text-muted fs-base text-uppercase" title="New Customers">New Customers</h5>
<h3 className="my-2 py-1 fw-semibold"><span data-target="1,284">0</span></h3>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-arrow-up"></i> 6.1%</span>
                                                Since last month
                                            </p>
</div>
<div className="avatar-lg flex-shrink-0">
<span className="avatar-title text-bg-info rounded-circle fs-22">
<i className="ti ti-users"></i>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card text-bg-primary card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between">
<div>
<h5 className="text-white-50 fs-base text-uppercase" title="Total Revenue">Revenue</h5>
<h3 className="my-2 py-1 fw-semibold text-white">$<span data-target="98.40">0</span>k</h3>
<p className="mb-0 text-white-50">
<span className="text-white me-2"><i className="ti ti-arrow-down"></i> 2.9%</span>
                                                Since last month
                                            </p>
</div>
<div className="avatar-lg flex-shrink-0">
<span className="avatar-title bg-white bg-opacity-25 rounded fs-22">
<i className="ti ti-pig-money text-white"></i>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between">
<div>
<h5 className="text-muted fs-base text-uppercase" title="Conversion Rate">Conversion Rate</h5>
<h3 className="my-2 py-1 fw-semibold"><span data-target="4.76">0</span>%</h3>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-arrow-up"></i> 1.4%</span>
                                                Since last month
                                            </p>
</div>
<div className="avatar-lg flex-shrink-0">
<span className="avatar-title bg-primary-subtle rounded fs-22">
<i className="ti ti-trending-up text-primary"></i>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-body p-0">
<div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0 text-center align-items-center">
<div className="col border-end border-light border-dashed">
<div className="mt-3 mt-md-0 p-3">
<h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Total Projects</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-sm flex-shrink-0">
<span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
<i className="ti ti-briefcase"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="6,847">0</span></h3>
</div>
<p className="mb-0 text-muted">
<span className="text-danger me-2"><i className="ti ti-chevron-down"></i> 9.19%</span>
<span className="text-nowrap">Since last month</span>
</p>
</div>
</div>

<div className="col border-end border-light border-dashed">
<div className="mt-3 mt-md-0 p-3">
<h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Total Tasks</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-sm flex-shrink-0">
<span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
<i className="ti ti-invoice"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="9.6">0</span>k</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-chevron-up"></i> 26.87%</span>
<span className="text-nowrap">Since last month</span>
</p>
</div>
</div>

<div className="col border-end border-light border-dashed">
<div className="mt-3 mt-md-0 p-3">
<h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Avg. Project Earnings</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-sm flex-shrink-0">
<span className="avatar-title bg-warning-subtle text-warning rounded-circle fs-22">
<i className="ti ti-wallet"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">$<span data-target="98.24">0</span>k</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-chevron-up"></i> 3.51%</span>
<span className="text-nowrap">Since last month</span>
</p>
</div>
</div>

<div className="col border-end border-light border-dashed">
<div className="mt-3 mt-md-0 p-3">
<h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Productivity</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-sm flex-shrink-0">
<span className="avatar-title bg-success-subtle text-success rounded-circle fs-22">
<i className="ti ti-trending-up"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="87.84">0</span>%</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-danger me-2"> <i className="ti ti-chevron-down"></i> 1.05%</span>
<span className="text-nowrap">Since last month</span>
</p>
</div>
</div>

<div className="col">
<div className="mt-3 mt-md-0 p-3">
<h5 className="text-muted fs-13 text-uppercase" title="Project Completion Rate">Project Completion</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-sm flex-shrink-0">
<span className="avatar-title bg-info-subtle text-info rounded-circle fs-22">
<i className="ti ti-circle-check"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="72.40">0</span>%</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2"><i className="ti ti-arrow-up"></i> 3.47%</span>
<span className="text-nowrap">Since last month</span>
</p>
</div>
</div>

</div>

</div>

</div>

</div>

</div>
<div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1 g-3 align-items-center">
<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start">
<div className="avatar avatar-lg flex-shrink-0">
<span className="avatar-title border border-3 border-info bg-info bg-opacity-75 text-white rounded-circle fs-24">
<i className="ti ti-clipboard-list"></i>
</span>
</div>
<div className="text-end">
<h4 className="mb-0">28</h4>
<p className="mb-0 text-muted">Active Projects</p>
</div>
</div>
<div className="mt-4">
<div className="d-flex justify-content-between mb-1">
<span className="text-muted fs-xs fw-semibold">PROGRESS</span>
<span className="text-muted">75%</span>
</div>
<div className="progress" style={{ height: '6px' }}>
<div className="progress-bar bg-info" style={{ width: '75%' }}></div>
</div>
</div>
</div>

</div>

</div>

<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start">
<div className="avatar avatar-lg flex-shrink-0">
<span className="avatar-title border border-3 border-success bg-success bg-opacity-75 text-white rounded-circle fs-24">
<i className="ti ti-checklist"></i>
</span>
</div>
<div className="text-end">
<h4 className="mb-0">124</h4>
<p className="mb-0 text-muted">Tasks Completed</p>
</div>
</div>
<div className="mt-4">
<div className="d-flex justify-content-between mb-1">
<span className="text-muted fs-xs fw-semibold">TARGET</span>
<span className="text-muted">88%</span>
</div>
<div className="progress" style={{ height: '6px' }}>
<div className="progress-bar bg-success" style={{ width: '88%' }}></div>
</div>
</div>
</div>

</div>

</div>

<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start">
<div className="avatar avatar-lg flex-shrink-0">
<span className="avatar-title border border-3 border-warning bg-warning bg-opacity-75 text-white rounded-circle fs-24">
<i className="ti ti-clock-hour-4"></i>
</span>
</div>
<div className="text-end">
<h4 className="mb-0">16</h4>
<p className="mb-0 text-muted">Pending Tasks</p>
</div>
</div>
<div className="mt-4">
<div className="d-flex justify-content-between mb-1">
<span className="text-muted fs-xs fw-semibold">DEADLINES</span>
<span className="text-muted">42%</span>
</div>
<div className="progress" style={{ height: '6px' }}>
<div className="progress-bar bg-warning" style={{ width: '42%' }}></div>
</div>
</div>
</div>

</div>

</div>

<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start">
<div className="avatar avatar-lg flex-shrink-0">
<span className="avatar-title border border-3 border-danger bg-danger bg-opacity-75 text-white rounded-circle fs-24">
<i className="ti ti-user-cog"></i>
</span>
</div>
<div className="text-end">
<h4 className="mb-0">9</h4>
<p className="mb-0 text-muted">Project Managers</p>
</div>
</div>
<div className="mt-4">
<div className="d-flex justify-content-between mb-1">
<span className="text-muted fs-xs fw-semibold">ALLOCATED</span>
<span className="text-muted">100%</span>
</div>
<div className="progress" style={{ height: '6px' }}>
<div className="progress-bar bg-danger" style={{ width: '100%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>
<div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">

<div className="col">
<div className="card">
<div className="card-body d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-2 fw-normal"><span data-target="438">0</span></h3>
<p className="mb-0 text-muted">New Subscriptions</p>
</div>
<div className="avatar fs-60 avatar-img-size">
<span className="avatar-title border border-3 border-secondary bg-secondary bg-opacity-75 text-white rounded-circle fs-24">
<i className="ti ti-bell-plus"></i>
</span>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-2 fw-normal"><span data-target="108">0</span></h3>
<p className="mb-0 text-muted">Support Tickets</p>
</div>
<div className="avatar fs-60 avatar-img-size">
<span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-24">
<i className="ti ti-headset"></i>
</span>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-2 fw-normal"><span data-target="3.7">0</span>%</h3>
<p className="mb-0 text-muted">Conversion Rate</p>
</div>
<div className="avatar fs-60 avatar-img-size">
<span className="avatar-title text-bg-light rounded-circle fs-24">
<i className="ti ti-chart-pie"></i>
</span>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body d-flex justify-content-between align-items-center">
<div>
<h3 className="mb-2 fw-normal">+<span data-target="12.4">0</span>%</h3>
<p className="mb-0 text-muted">Revenue Growth</p>
</div>
<div className="avatar fs-60 avatar-img-size">
<span className="avatar-title text-bg-dark rounded-circle fs-24">
<i className="ti ti-trending-up"></i>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-2">

<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex gap-3">
<div className="avatar-lg rounded-circle text-bg-light d-flex align-items-center justify-content-center">
<i className="ti ti-contract fs-xxl"></i>
</div>
<div className="flex-grow-1">
<div className="mb-3 d-flex justify-content-between align-items-center">
<h5 className="fs-xl mb-0">1,230</h5>
<span>
                                                    9.85%
                                                    <i className="ti ti-arrow-up text-success"></i>
</span>
</div>
<p className="text-muted mb-2">Total deals created</p>
<div className="progress progress-sm bg-primary bg-opacity-25 mb-0">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={9.85} className="progress-bar" role="progressbar" style={{ width: '9.85%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>


<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex gap-3">
<div className="avatar-lg rounded-circle text-bg-light d-flex align-items-center justify-content-center">
<i className="ti ti-medal fs-xxl"></i>
</div>
<div className="flex-grow-1">
<div className="mb-3 d-flex justify-content-between align-items-center">
<h5 className="fs-xl mb-0">860</h5>
<span>
                                                    5.20%
                                                    <i className="ti ti-arrow-up text-success"></i>
</span>
</div>
<p className="text-muted mb-2">Deals won</p>
<div className="progress bg-success bg-opacity-25 progress-sm mb-0">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={5.2} className="progress-bar bg-success" role="progressbar" style={{ width: '5.2%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>


<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex gap-3">
<div className="avatar-lg rounded-circle text-bg-light d-flex align-items-center justify-content-center">
<i className="ti ti-x fs-xxl"></i>
</div>
<div className="flex-grow-1">
<div className="mb-3 d-flex justify-content-between align-items-center">
<h5 className="fs-xl mb-0">270</h5>
<span>
                                                    2.45%
                                                    <i className="ti ti-arrow-down text-danger"></i>
</span>
</div>
<p className="text-muted mb-2">Deals lost</p>
<div className="progress bg-danger bg-opacity-25 progress-sm mb-0">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={2.45} className="progress-bar bg-danger" role="progressbar" style={{ width: '2.45%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>


<div className="col">
<div className="card">
<div className="card-body">
<div className="d-flex gap-3">
<div className="avatar-lg rounded-circle text-bg-light d-flex align-items-center justify-content-center">
<i className="ti ti-currency-dollar fs-xxl"></i>
</div>
<div className="flex-grow-1">
<div className="mb-3 d-flex justify-content-between align-items-center">
<h5 className="fs-xl mb-0">$220,000</h5>
<span>Top value</span>
</div>
<p className="text-muted mb-2">Highest deal closed</p>
<div className="progress bg-warning bg-opacity-25 progress-sm mb-0">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} className="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>


<div className="col-lg col-md-auto">
<div className="card">
<div className="card-body">
<div className="d-flex gap-3">
<div className="avatar-lg rounded-circle text-bg-light d-flex align-items-center justify-content-center">
<i className="ti ti-clock fs-xxl"></i>
</div>
<div className="flex-grow-1">
<div className="mb-3 d-flex justify-content-between align-items-center">
<h5 className="fs-xl mb-0">
                                                    15
                                                    <small className="fs-6">days</small>
</h5>
<span>+1.1%</span>
</div>
<p className="text-muted mb-2">Avg. close time</p>
<div className="progress bg-secondary bg-opacity-25 progress-sm mb-0">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={15.1} className="progress-bar bg-secondary" role="progressbar" style={{ width: '15.1%' }}></div>
</div>
</div>
</div>

</div>

</div>

</div>

</div>
<div className="row">

<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="row align-items-center">
<div className="col-6">
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="AI Model Requests">Model Requests</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-cpu"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="78.4">0</span>k</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2">+6.8% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">5.0k Up</span>
</p>
</div>
<div className="col-6 text-end">
<p className="text-muted mb-0">Monthly Target</p>
<h5 className="my-2 fw-semibold">100k</h5>
<span className="badge bg-success-subtle text-success">On Track <i className="ti ti-circle-check ms-1"></i></span>
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
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Successful Inferences">Successful Inferences</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-circle-check"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="95.3">0</span>%</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-danger me-2">-1.2% <i className="ti ti-trending-down ms-1"></i></span>
<span className="text-nowrap">Tiny Drop</span>
</p>
</div>
<div className="col-6 text-end">
<p className="text-muted mb-0">SLA Target</p>
<h5 className="my-2 fw-semibold">98%</h5>
<span className="badge bg-warning-subtle text-warning">Monitor <i className="ti ti-alert-circle ms-1"></i></span>
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
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="Response Time">Response Time</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-clock"></i>
</span>
</div>
<h3 className="mb-0 fw-bold"><span data-target="185">0</span>ms</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2">+3.4% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">Faster</span>
</p>
</div>
<div className="col-6 text-end">
<p className="text-muted mb-0">Latency Target</p>
<h5 className="my-2 fw-semibold">200ms</h5>
<span className="badge bg-success-subtle text-success">Great <i className="ti ti-thumb-up ms-1"></i></span>
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
<h5 className="text-muted fs-sm text-uppercase text-truncate" title="AI Revenue Impact">AI Revenue Impact</h5>
<div className="d-flex align-items-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-light rounded-circle fs-22">
<i className="ti ti-chart-bar"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">$<span data-target="2.84">0</span>M</h3>
</div>
<p className="mb-0 text-muted">
<span className="text-success me-2">+8.9% <i className="ti ti-trending-up ms-1"></i></span>
<span className="text-nowrap">$230k Up</span>
</p>
</div>
<div className="col-6 text-end">
<p className="text-muted mb-0">Quarter Goal</p>
<h5 className="my-2 fw-semibold">$3.5M</h5>
<span className="badge bg-success-subtle text-success">Ahead <i className="ti ti-circle-check ms-1"></i></span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-6">

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-primary solar:cpu-bolt-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1"><span data-target="12.5">0</span>M</h3>
<p className="text-muted">Tokens Processed</p>
<span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 6.4%</span>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-info solar:cloud-plus-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1"><span data-target="284">0</span>k</h3>
<p className="text-muted">API Requests</p>
<span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 4.8%</span>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-warning solar:target-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1"><span data-target="98.6">0</span>%</h3>
<p className="text-muted">Model Accuracy</p>
<span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 1.2%</span>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-secondary solar:clock-circle-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1"><span data-target="210">0</span>ms</h3>
<p className="text-muted">Response Time</p>
<span className="badge fs-12 badge-soft-danger"><i className="ti ti-arrow-badge-down"></i> 3.1%</span>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-success solar:hand-money-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1">$<span data-target="76.4">0</span>k</h3>
<p className="text-muted">Cost Savings</p>
<span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 9.5%</span>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body text-center">
<span className="fs-36 text-danger solar:server-square-cloud-bold-duotone"></span>
<h3 className="fw-bold mt-3 mb-1"><span data-target="62.3">0</span>%</h3>
<p className="text-muted">GPU Utilization</p>
<span className="badge fs-12 badge-soft-warning"><i className="ti ti-arrow-badge-up"></i> 2.7%</span>
</div>
</div>
</div>
</div>
<div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">

<div className="col">
<div className="card">
<div className="card-header justify-content-between border-0">
<h5 className="card-title">Active Subscribers</h5>
<span className="badge badge-soft-success">Monthly</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="avatar fs-60 avatar-img-size flex-shrink-0">
<span className="avatar-title text-bg-dark rounded-circle fs-24">
<i className="ti ti-user-check"></i>
</span>
</div>
<div className="text-end">
<h3 className="mb-2 fw-normal"><span data-target="12,850">12,850</span></h3>
<p className="mb-0 text-muted">Current Active Users</p>
</div>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header justify-content-between border-0">
<h5 className="card-title">MRR (Revenue)</h5>
<span className="badge badge-soft-primary">Monthly</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="avatar fs-60 avatar-img-size flex-shrink-0">
<span className="avatar-title text-bg-primary rounded-circle fs-24">
<i className="ti ti-currency-dollar"></i>
</span>
</div>
<div className="text-end">
<h3 className="mb-2 fw-normal">$<span data-target="245.6">245.6</span>K</h3>
<p className="mb-0 text-muted">Monthly Recurring Revenue</p>
</div>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header justify-content-between border-0">
<h5 className="card-title">Churn Rate</h5>
<span className="badge badge-soft-danger">Monthly</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="avatar fs-60 avatar-img-size flex-shrink-0">
<span className="avatar-title text-bg-danger rounded-circle fs-24">
<i className="ti ti-arrow-back-up"></i>
</span>
</div>
<div className="text-end">
<h3 className="mb-2 fw-normal"><span data-target="3.25">3.25</span>%</h3>
<p className="mb-0 text-muted">Lost Subscribers Rate</p>
</div>
</div>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-header justify-content-between border-0">
<h5 className="card-title">New Signups</h5>
<span className="badge badge-soft-warning">Monthly</span>
</div>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center">
<div className="avatar fs-60 avatar-img-size flex-shrink-0">
<span className="avatar-title text-bg-warning rounded-circle fs-24">
<i className="ti ti-user-plus"></i>
</span>
</div>
<div className="text-end">
<h3 className="mb-2 fw-normal"><span data-target="1,942">1,942</span></h3>
<p className="mb-0 text-muted">New Subscribers Added</p>
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
