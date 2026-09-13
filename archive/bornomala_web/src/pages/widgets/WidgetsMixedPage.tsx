import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const WidgetsMixedPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Mixed" category="Widgets" />

      <div className="module-content-body">
<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5">
<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-6.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-primary bg-opacity-90 rounded-3">
<span className="fs-36 solar:wallet-money-bold-duotone"></span>
<p className="text-white text-opacity-75 mb-1 text-uppercase">Savings Target</p>
<h3 className="fw-semibold mb-2 fs-20 text-white">Monthly Budget</h3>
<h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="3200">0</span></h4>
</div>
</div>
</div>

<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-7.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-secondary bg-opacity-90 rounded-3">
<span className="fs-36 solar:airbuds-bold-duotone"></span>
<p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
<h3 className="fw-semibold mb-2 fs-20 text-white">Gadgets Upgrade</h3>
<h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="1800">0</span></h4>
</div>
</div>
</div>

<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-8.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-warning bg-opacity-90 rounded-3">
<span className="fs-36 solar:medal-ribbons-star-bold-duotone"></span>
<p className="text-white text-opacity-75 mb-1 text-uppercase">Milestone</p>
<h3 className="fw-semibold mb-2 fs-20 text-white">Career Growth</h3>
<h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="5000">0</span></h4>
</div>
</div>
</div>

<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-9.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-danger bg-opacity-90 rounded-3">
<span className="fs-36 solar:heart-pulse-bold-duotone"></span>
<p className="text-white text-opacity-75 mb-1 text-uppercase">Health Plan</p>
<h3 className="fw-semibold mb-2 fs-20 text-white">Fitness Training</h3>
<h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="2400">0</span></h4>
</div>
</div>
</div>

<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-10.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-info bg-opacity-90 rounded-3">
<span className="fs-36 solar:lightbulb-bolt-bold-duotone"></span>
<p className="text-white text-opacity-75 mb-1 text-uppercase">Innovation</p>
<h3 className="fw-semibold mb-2 fs-20 text-white">Startup Idea</h3>
<h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="15000">0</span></h4>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-xxl-4 col-xl-6">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start flex-wrap">
<div>
<h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Visitors</h4>
<div className="d-flex align-items-center gap-2 mb-2 py-1">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-secondary rounded-circle">
<i className="ti ti-eye fs-xxl"></i>
</span>
</div>
<h3 className="mb-0"><span data-target="82.3">0</span>M</h3>
<span className="badge fs-13 ms-auto badge-soft-success"> <i className="ti ti-arrow-up"></i> 6.84% </span>
</div>
</div>

<div className="app-search app-search-sm">
<select className="form-select form-control form-select-sm">
<option defaultValue="All">All Time</option>
<option defaultValue="today">Today</option>
<option defaultValue="last_7_days">Last 7 Days</option>
<option defaultValue="last_30_days">Last 30 Days</option>
<option selected defaultValue="last_90_days">Last 90 Days</option>
<option defaultValue="this_month">This Month</option>
<option defaultValue="last_month">Last Month</option>
</select>
<i className="ti ti-calendar app-search-icon text-muted"></i>
</div>
</div>
<div className="d-flex justify-content-between gap-1">
<div style={{ width: '69.4%' }}>
<p className="mb-1 mt-2 text-muted text-uppercase fs-13 fw-medium">Mobile Phone</p>
<h3 className="fw-normal mb-2 fs-xl">69.40%</h3>
<div className="progress progress-lg rounded-0 rounded-start mb-1">
<div aria-valuenow={100} className="progress-bar bg-secondary" role="progressbar" style={{ width: '100%' }}></div>
</div>
<p className="text-muted mb-0">41,927 Sessions</p>
</div>
<div style={{ width: '30.6%' }}>
<p className="mb-1 mt-2 text-muted text-uppercase fs-13 fw-medium">Desktop</p>
<h3 className="fw-normal mb-2 fs-xl">30.60%</h3>
<div className="progress progress-lg rounded-0 rounded-end mb-1">
<div aria-valuenow={100} className="progress-bar bg-info" role="progressbar" style={{ width: '100%' }}></div>
</div>
<p className="text-muted mb-0">18,476 Sessions</p>
</div>
</div>
<div className="table-responsive mb-n2 mt-3">
<table className="table table-sm table-nowrap table-borderless table-centered mb-0">
<thead className="bg-light bg-opacity-50 thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Goal</th>
<th>Completed</th>
<th>Target</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr>
<td>Total Visitors</td>
<td>824,300</td>
<td>1,000,000</td>
<td>82%</td>
</tr>
<tr>
<td>Mobile Traffic</td>
<td>41,927</td>
<td>60,000</td>
<td>69%</td>
</tr>
<tr>
<td>Desktop Traffic</td>
<td>18,476</td>
<td>30,000</td>
<td>61%</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

</div>

<div className="col-xxl-4 col-xl-6">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex justify-content-between align-items-start flex-wrap">
<div>
<h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Subscribers</h4>
<div className="d-flex align-items-center gap-2 mb-2 py-1">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title text-bg-info rounded-circle">
<i className="ti ti-mail fs-xxl"></i>
</span>
</div>
<h3 className="mb-0"><span data-target="55.6">0</span>k</h3>
<span className="badge fs-13 ms-auto badge-soft-success"> <i className="ti ti-arrow-up"></i> 4.87% </span>
</div>
</div>

<div className="app-search app-search-sm">
<select className="form-select form-control form-select-sm">
<option defaultValue="All">All Time</option>
<option defaultValue="today">Today</option>
<option defaultValue="last_7_days">Last 7 Days</option>
<option defaultValue="last_30_days">Last 30 Days</option>
<option selected defaultValue="last_90_days">Last 90 Days</option>
<option defaultValue="this_month">This Month</option>
<option defaultValue="last_month">Last Month</option>
</select>
<i className="ti ti-calendar app-search-icon text-muted"></i>
</div>
</div>

<div className="mt-2 pt-1">
<div className="d-flex justify-content-between">
<h5 className="fs-base mb-2">Email Marketing</h5>
<div>
<span>+ <span data-target="34,920">0</span></span>
<span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 27.41%</span>
</div>
</div>
<div className="progress progress-sm mb-1">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={27.41} className="progress-bar bg-secondary" role="progressbar" style={{ width: '27.41%' }}></div>
</div>
</div>

<div className="mt-3">
<div className="d-flex justify-content-between">
<h5 className="fs-base mb-2">Social Marketing</h5>
<div>
<span>+ <span data-target="58,775">0</span></span>
<span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 46.13%</span>
</div>
</div>
<div className="progress progress-sm mb-1">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={46.13} className="progress-bar bg-info" role="progressbar" style={{ width: '46.13%' }}></div>
</div>
</div>

<div className="mt-3">
<div className="d-flex justify-content-between">
<h5 className="fs-base mb-2">Direct</h5>
<div>
<span>+ <span data-target="33,645">0</span></span>
<span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 26.46%</span>
</div>
</div>
<div className="progress progress-sm mb-1">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={26.46} className="progress-bar bg-success" role="progressbar" style={{ width: '26.46%' }}></div>
</div>
</div>

<div className="p-2 mt-3 border-dashed border rounded">
<div className="d-flex align-items-center">
<div className="avatar-xl flex-shrink-0 me-2">
<span className="avatar-title bg-warning-subtle rounded-circle fs-1">
<i className="ti ti-medal text-warning"></i>
</span>
</div>
<div className="flex-gow-1">
<h5 className="mb-0 fw-semibold">Congratulations !...</h5>
<p className="mb-0 text-muted">You've reached a new subscriber milestone.</p>
</div>
<div className="ms-auto">
<h4 className="fs-16 mt-1 mb-0">29.4k</h4>
<span className="text-muted fw-semibold fs-12">SUBSCRIBERS</span>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xxl-4">
<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">
                                        Top Traffic Sources
                                        <span data-bs-placement="top" data-bs-title="Shows which channels drive the most traffic." data-bs-toggle="tooltip"><i className="ti ti-info-circle text-muted ms-1"></i></span>
</h4>
<div className="dropdown ms-auto">
<a className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-chart-bar me-2"></i> View Detailed Report </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Traffic Data </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Source </a>
</li>
<li>
<hr className="dropdown-divider"/>
</li>
<li>
<a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Remove Widget </a>
</li>
</ul>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col">
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/google.svg"/>
<span className="align-middle fw-semibold fs-md">Google</span>
</div>
<span className="fw-semibold text-muted float-end">87.8k</span>
</div>
<div className="progress-data bg-warning" style={{ width: '72%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/instagram.svg"/>
<span className="align-middle fw-semibold fs-md">Instagram</span>
</div>
<span className="fw-semibold text-muted float-end">42.9k</span>
</div>
<div className="progress-data bg-danger" style={{ width: '30%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={20} src="assets/images/logos/linkedin.svg"/>
<span className="align-middle fw-semibold fs-md">LinkedIn</span>
</div>
<span className="fw-semibold text-muted float-end">58.5k</span>
</div>
<div className="progress-data bg-info" style={{ width: '43%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/dribbble.svg"/>
<span className="align-middle fw-semibold fs-md">Dribbble</span>
</div>
<span className="fw-semibold text-muted float-end">2.85k</span>
</div>
<div className="progress-data bg-secondary" style={{ width: '12%' }}></div>
</div>
<div className="custom-progress">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/messenger.svg"/>
<span className="align-middle fw-semibold fs-md">Messenger</span>
</div>
<span className="fw-semibold text-muted float-end">9.08k</span>
</div>
<div className="progress-data bg-primary" style={{ width: '18%' }}></div>
</div>
</div>
<div className="col">
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={18} src="assets/images/logos/meta.svg"/>
<span className="align-middle fw-semibold fs-md">Meta</span>
</div>
<span className="fw-semibold text-muted float-end">77.7k</span>
</div>
<div className="progress-data bg-primary" style={{ width: '66%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/telegram.svg"/>
<span className="align-middle fw-semibold fs-md">Telegram</span>
</div>
<span className="fw-semibold text-muted float-end">31.5k</span>
</div>
<div className="progress-data bg-success" style={{ width: '46%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={16} src="assets/images/logos/x.svg"/>
<span className="align-middle fw-semibold fs-md">Twitter X</span>
</div>
<span className="fw-semibold text-muted float-end">22.6k</span>
</div>
<div className="progress-data bg-dark" style={{ width: '29%' }}></div>
</div>
<div className="custom-progress mb-3">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={24} src="assets/images/logos/whatsapp.svg"/>
<span className="align-middle fw-semibold fs-md">WhatsApp</span>
</div>
<span className="fw-semibold text-muted float-end">3.1k</span>
</div>
<div className="progress-data bg-danger" style={{ width: '18%' }}></div>
</div>
<div className="custom-progress">
<div className="progress-info d-flex justify-content-between align-items-center">
<div>
<img alt="user-image" className="me-1" height={28} src="assets/images/logos/snapchat.svg"/>
<span className="align-middle fw-semibold fs-md">Snapchat</span>
</div>
<span className="fw-semibold text-muted float-end">5.8k</span>
</div>
<div className="progress-data bg-warning" style={{ width: '9%' }}></div>
</div>
</div>

</div>

</div>

</div>

</div>

</div>
<div className="row">

<div className="col-xl-4">
<div className="card bg-success bg-gradient border-0">
<div className="card-body" style={{ backgroundImage: 'url(assets/images/flower-style.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
<h4 className="text-white">Revenue Overview</h4>
<p className="text-white text-opacity-75">Get a quick snapshot of your company’s financial performance.</p>
<div className="d-flex gap-1">
<a className="btn btn-sm btn-success bg-white bg-opacity-10" href="#!"> <i className="ti ti-chart-bar me-1"></i> Report </a>
<a className="btn btn-sm btn-success bg-white bg-opacity-10" href="#!">
<i className="ti ti-phone"></i>
</a>
<a className="btn btn-sm btn-success bg-white bg-opacity-10" href="#!" target="_blank">
<i className="ti ti-world"></i>
</a>
</div>
</div>
</div>
</div>

<div className="col-xl-4">
<div className="card bg-info bg-gradient border-0">
<div className="card-body" style={{ backgroundImage: 'url(assets/images/flower-style.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
<h4 className="text-white">Customer Insights</h4>
<p className="text-white text-opacity-75">Analyze customer behavior and discover actionable trends.</p>
<div className="d-flex gap-2">
<a className="btn btn-sm btn-info bg-white bg-opacity-10" href="#!"> <i className="ti ti-users me-1"></i> Insights </a>
<a className="btn btn-sm btn-info bg-white bg-opacity-10" href="#!">
<i className="ti ti-mail"></i>
</a>
<a className="btn btn-sm btn-info bg-white bg-opacity-10" href="#!">
<i className="ti ti-message-circle"></i>
</a>
</div>
</div>
</div>
</div>

<div className="col-xl-4">
<div className="card bg-danger bg-gradient border-0">
<div className="card-body" style={{ backgroundImage: 'url(assets/images/flower-style.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
<h4 className="text-white">Performance Alerts</h4>
<p className="text-white text-opacity-75">Stay informed with real-time alerts for key business indicators.</p>
<div className="d-flex gap-2">
<a className="btn btn-sm btn-danger bg-white bg-opacity-10" href="#!"> <i className="ti ti-bell me-1"></i> Alerts </a>
<a className="btn btn-sm btn-danger bg-white bg-opacity-10" href="#!">
<i className="ti ti-share"></i>
</a>
<a className="btn btn-sm btn-danger bg-white bg-opacity-10" href="#!">
<i className="ti ti-layout-dashboard"></i>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex align-items-center mb-4">
<div className="me-3 position-relative">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-5.jpg" width={72}/>
<span className="position-absolute bottom-0 end-0 badge bg-warning rounded-circle p-1 shadow-sm" title="Rating 4.8">
<i className="ti ti-star text-white"></i>
</span>
</div>
<div>
<h5 className="mb-1 d-flex align-items-center">
<a className="link-reset" href="#!">Sophia Carter</a>
<img alt="UK" className="ms-2 rounded-circle" height={16} src="assets/images/flags/gb.svg"/>
</h5>
<p className="text-muted mb-1">Lead UI/UX Designer</p>
<span className="badge text-bg-light badge-label">Admin</span>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-xl"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                            Share
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                            Edit
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-ban me-2"></i>
                                                            Block
                                                        </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                            Delete
                                                        </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled text-muted mb-4">
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-mail"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">sophia@designhub.com</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-phone"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">+44 7911 123456</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-map-pin"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">London, UK</h5>
</div>
</li>
<li>
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-link"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a href="#">www.sophiacarter.com</a>
</h5>
</div>
</li>
</ul>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs">
<i className="ti ti-refresh me-1"></i>
                                            Updated 30 min ago
                                        </span>
<a className="btn btn-soft-primary btn-sm rounded-pill" href="#!">View Profile</a>
</div>
</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex align-items-center mb-4">
<div className="me-3 position-relative">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-6.jpg" width={72}/>
<span className="position-absolute bottom-0 end-0 badge bg-success rounded-circle p-1 shadow-sm" title="Rating 4.5">
<i className="ti ti-star text-white"></i>
</span>
</div>
<div>
<h5 className="mb-1 d-flex align-items-center">
<a className="link-reset" href="#!">Marcus Lee</a>
<img alt="US" className="ms-2 rounded-circle" height={16} src="assets/images/flags/us.svg"/>
</h5>
<p className="text-muted mb-1">Senior Developer</p>
<span className="badge text-bg-light badge-label">Team Lead</span>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-xl"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                            Share
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                            Edit
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-ban me-2"></i>
                                                            Block
                                                        </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                            Delete
                                                        </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled text-muted mb-4">
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-mail"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">marcus@devhub.com</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-phone"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">+1 408-222-9876</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-map-pin"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">Austin, TX</h5>
</div>
</li>
<li>
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-link"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a href="#">www.devhub.com</a>
</h5>
</div>
</li>
</ul>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs">
<i className="ti ti-refresh me-1"></i>
                                            Updated 1 hour ago
                                        </span>
<a className="btn btn-soft-primary btn-sm rounded-pill" href="#!">View Profile</a>
</div>
</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex align-items-center mb-4">
<div className="me-3 position-relative">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-7.jpg" width={72}/>
<span className="position-absolute bottom-0 end-0 badge bg-danger rounded-circle p-1 shadow-sm" title="Rating 3.9">
<i className="ti ti-star text-white"></i>
</span>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Emily Davis</a>
<img alt="US" className="ms-2 rounded-circle" height={16} src="assets/images/flags/us.svg"/>
</h5>
<p className="text-muted mb-1">Marketing Strategist</p>
<span className="badge text-bg-light badge-label">Member</span>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-xl"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                            Share
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                            Edit
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-ban me-2"></i>
                                                            Block
                                                        </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                            Delete
                                                        </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled text-muted mb-4">
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-mail"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">emily@marketboost.com</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-phone"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">+1 212-555-7890</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-map-pin"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">New York, NY</h5>
</div>
</li>
<li>
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-link"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a href="#">www.marketboost.com</a>
</h5>
</div>
</li>
</ul>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs">
<i className="ti ti-refresh me-1"></i>
                                            Updated 10 min ago
                                        </span>
<a className="btn btn-soft-primary btn-sm rounded-pill" href="#!">View Profile</a>
</div>
</div>

</div>

</div>


<div className="col-md-6 col-xxl-3">
<div className="card card-h-100">
<div className="card-body">
<div className="d-flex align-items-center mb-4">
<div className="me-3 position-relative">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-8.jpg" width={72}/>
<span className="position-absolute bottom-0 end-0 badge bg-info rounded-circle p-1 shadow-sm" title="Rating 4.3">
<i className="ti ti-star text-white"></i>
</span>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Daniel Smith</a>
<img alt="US" className="ms-2 rounded-circle" height={16} src="assets/images/flags/ca.svg"/>
</h5>
<p className="text-muted mb-1">Data Analyst</p>
<span className="badge text-bg-light badge-label">Contributor</span>
</div>
<div className="ms-auto">
<div className="dropdown">
<a className="btn btn-icon btn-ghost-light text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-xl"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                            Share
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                            Edit
                                                        </a>
</li>
<li>
<a className="dropdown-item" href="#">
<i className="ti ti-ban me-2"></i>
                                                            Block
                                                        </a>
</li>
<li>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-2"></i>
                                                            Delete
                                                        </a>
</li>
</ul>
</div>
</div>
</div>
<ul className="list-unstyled text-muted mb-4">
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-mail"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">daniel@analyticspro.io</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-phone"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a className="link-reset" href="#">+1 987-654-3210</a>
</h5>
</div>
</li>
<li className="mb-2">
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-map-pin"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">Toronto, Canada</h5>
</div>
</li>
<li>
<div className="d-flex align-items-center gap-2">
<div className="avatar-xs avatar-img-size fs-24">
<span className="avatar-title text-bg-light fs-sm rounded-circle">
<i className="ti ti-link"></i>
</span>
</div>
<h5 className="fs-base mb-0 fw-medium">
<a href="#">www.analyticspro.io</a>
</h5>
</div>
</li>
</ul>
<div className="d-flex justify-content-between align-items-center">
<span className="text-muted fs-xs">
<i className="ti ti-refresh me-1"></i>
                                            Updated 45 min ago
                                        </span>
<a className="btn btn-soft-primary btn-sm rounded-pill" href="#!">View Profile</a>
</div>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-xl-4">
<div className="card">
<div className="card-header">
<h4 className="card-title">Chat</h4>
</div>

<div className="card-body py-0" data-simplebar="" id="chat-container" style={{ height: '360px' }}>

<div className="d-flex align-items-start gap-2 my-3 chat-item">
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-5.jpg"/>
<div>
<div className="chat-message py-2 px-3 bg-warning-subtle rounded">Hey! Are you available for a quick call? 📞</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 08:55 am</div>
</div>
</div>

<div className="d-flex align-items-start gap-2 my-3 text-end chat-item justify-content-end">
<div>
<div className="chat-message py-2 px-3 bg-info-subtle rounded">Sure, give me 5 minutes. Just wrapping something up.</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 08:57 am</div>
</div>
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-2.jpg"/>
</div>

<div className="d-flex align-items-start gap-2 my-3 chat-item">
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-5.jpg"/>
<div>
<div className="chat-message py-2 px-3 bg-warning-subtle rounded">Perfect. Let me know when you're ready 👍</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 08:58 am</div>
</div>
</div>

<div className="d-flex align-items-start gap-2 my-3 text-end chat-item justify-content-end">
<div>
<div className="chat-message py-2 px-3 bg-info-subtle rounded">Ready now. Calling you!</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 09:00 am</div>
</div>
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-2.jpg"/>
</div>

<div className="d-flex align-items-start gap-2 my-3 chat-item">
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-5.jpg"/>
<div>
<div className="chat-message py-2 px-3 bg-warning-subtle rounded">Thanks for your time earlier!</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 09:45 am</div>
</div>
</div>

<div className="d-flex align-items-start gap-2 my-3 text-end chat-item justify-content-end">
<div>
<div className="chat-message py-2 px-3 bg-info-subtle rounded">Of course! It was a productive discussion.</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 09:46 am</div>
</div>
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-2.jpg"/>
</div>

<div className="d-flex align-items-start gap-2 my-3 chat-item">
<img alt="User" className="avatar-md rounded-circle" src="assets/images/users/user-5.jpg"/>
<div>
<div className="chat-message py-2 px-3 bg-warning-subtle rounded">I’ll send over the updated files by noon.</div>
<div className="text-muted fs-xs mt-1"><i className="ti ti-clock"></i> 09:50 am</div>
</div>
</div>
</div>

<div className="card-footer bg-body-secondary border-top border-dashed border-bottom-0">
<div className="d-flex gap-2">
<div className="app-search flex-grow-1">
<input className="form-control bg-light-subtle border-light" placeholder="Enter message..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="message-square"></i>
</div>
<a className="btn btn-primary btn-icon" href="#!"><i className="ti ti-send-2 fs-xl"></i></a>
</div>
</div>
</div>

</div>

<div className="col-xxl-4 col-lg-6">
<div className="card">
<div className="card-header justify-content-between align-items-center">
<h5 className="card-title">Traffic Sources</h5>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!"><i className="ti ti-chevron-up"></i></a>
<a className="card-action-item" data-action="card-refresh" href="#!"><i className="ti ti-refresh"></i></a>
<a className="card-action-item" data-action="card-close" href="#!"><i className="ti ti-x"></i></a>
</div>
</div>
<div className="card-body">
<div className="row mb-2">
<div className="col-lg">
<h3 className="mb-2 fw-bold"><span data-target="8,975">0</span></h3>
<p className="mb-2 fw-semibold text-muted">Right Now</p>
</div>

<div className="col-lg-auto align-self-center">
<ul className="list-unstyled mb-0 lh-lg">
<li>
<i className="ti ti-caret-right-filled fs-lg align-middle text-primary"></i>
<span className="text-muted">Organic</span>
</li>
<li>
<i className="ti ti-caret-right-filled fs-lg align-middle text-success"></i>
<span className="text-muted">Direct</span>
</li>
<li>
<i className="ti ti-caret-right-filled fs-lg align-middle"></i>
<span className="text-muted">Campaign</span>
</li>
</ul>
</div>

</div>

<div className="progress mb-3" style={{ height: '10px' }}>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar" role="progressbar" style={{ width: '25%' }}></div>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }}></div>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={15} className="progress-bar bg-info" role="progressbar" style={{ width: '15%' }}></div>
</div>
<div className="table-responsive">
<table className="table table-sm table-custom table-nowrap table-hover table-centered mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="text-muted">URL</th>
<th className="text-muted text-end">Views</th>
<th className="text-muted text-end">Uniques</th>
</tr>
</thead>
<tbody>
<tr>
<td className="text-decoration-underline">/dashboard</td>
<td className="text-end">9.8k</td>
<td className="text-end">8.5k</td>
</tr>
<tr>
<td className="text-decoration-underline">/ecommerce-index</td>
<td className="text-end">8.2k</td>
<td className="text-end">7.1k</td>
</tr>
<tr>
<td className="text-decoration-underline">/apps/projects-overview</td>
<td className="text-end">7.6k</td>
<td className="text-end">6.2k</td>
</tr>
<tr>
<td className="text-decoration-underline">/pages/contact</td>
<td className="text-end">5.9k</td>
<td className="text-end">4.8k</td>
</tr>
<tr>
<td className="text-decoration-underline">/support/faq</td>
<td className="text-end">5.2k</td>
<td className="text-end">4.3k</td>
</tr>
</tbody>
</table>
</div>

<div className="text-center mt-3">
<a className="link-reset text-decoration-underline fw-semibold link-offset-3" href="#!"> View all Links <i className="ti ti-link"></i> </a>
</div>
</div>

</div>

</div>

<div className="col-xxl-4 col-lg-6">
<div className="card">
<div className="card-header justify-content-between align-items-center">
<h4 className="card-title">Top Countries</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!"><i className="ti ti-chevron-up"></i></a>
<a className="card-action-item" data-action="card-refresh" href="#!"><i className="ti ti-refresh"></i></a>
<a className="card-action-item" data-action="card-close" href="#!"><i className="ti ti-x"></i></a>
</div>
</div>
<div className="card-body">
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="India" className="avatar-xxs rounded" src="assets/images/flags/in.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">India</a> <small className="text-muted">Pop: 1.43B</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">14,217</p>
<p className="badge badge-label fs-xxs badge-soft-success mb-0">+3.2%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="Germany" className="avatar-xxs rounded" src="assets/images/flags/de.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">Germany</a> <small className="text-muted">Pop: 83.2M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">10,412</p>
<p className="badge badge-label fs-xxs badge-soft-success mb-0">+1.5%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="France" className="avatar-xxs rounded" src="assets/images/flags/fr.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">France</a> <small className="text-muted">Pop: 67.5M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">8,934</p>
<p className="badge badge-label fs-xxs badge-soft-danger mb-0">-0.8%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="United States" className="avatar-xxs rounded" src="assets/images/flags/us.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">United States</a> <small className="text-muted">Pop: 339.9M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">18,522</p>
<p className="badge badge-label fs-xxs badge-soft-success mb-0">+2.1%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="United Kingdom" className="avatar-xxs rounded" src="assets/images/flags/gb.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">United Kingdom</a> <small className="text-muted">Pop: 67.3M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">7,614</p>
<p className="badge badge-label fs-xxs badge-soft-danger mb-0">-1.2%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="Canada" className="avatar-xxs rounded" src="assets/images/flags/ca.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">Canada</a> <small className="text-muted">Pop: 39.6M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">6,221</p>
<p className="badge badge-label fs-xxs badge-soft-success mb-0">+0.9%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="Japan" className="avatar-xxs rounded" src="assets/images/flags/jp.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">Japan</a> <small className="text-muted">Pop: 123.3M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">5,785</p>
<p className="badge badge-label fs-xxs badge-soft-warning mb-0">0.0%</p>
</div>
</div>
</div>
<div className="d-flex align-items-center gap-2 mb-3">
<img alt="Australia" className="avatar-xxs rounded" src="assets/images/flags/au.svg"/>
<h5 className="mb-0 fw-medium"><a className="link-reset" href="#!">Australia</a> <small className="text-muted">Pop: 26.8M</small></h5>
<div className="ms-auto">
<div className="d-flex align-items-center gap-3 text-end">
<p className="mb-0 fw-medium">4,918</p>
<p className="badge badge-label fs-xxs badge-soft-success mb-0">+1.1%</p>
</div>
</div>
</div>
<div className="text-center mt-4">
<a className="link-reset text-decoration-underline fw-semibold link-offset-3" href="#!"> View all Countries <i className="ti ti-world"></i> </a>
</div>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-xxl-7">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Channels</h4>
</div>

<div className="card-body">

<div className="d-flex justify-content-between align-items-center mb-1">
<div className="d-flex align-items-center gap-2">
<img alt="Meta" className="avatar-xxs rounded" src="assets/images/logos/meta.svg"/>
<span>Facebook</span>
</div>
<span className="fw-semibold">78%</span>
</div>
<div className="progress progress-md mb-3">
<div className="progress-bar bg-success" style={{ width: '78%' }}></div>
</div>

<div className="d-flex justify-content-between align-items-center mb-1">
<div className="d-flex align-items-center gap-2">
<img alt="Meta" className="avatar-xxs rounded" src="assets/images/logos/instagram.svg"/>
<span>Instagram</span>
</div>
<span className="fw-semibold">54%</span>
</div>
<div className="progress progress-md mb-3">
<div className="progress-bar bg-success" style={{ width: '54%' }}></div>
</div>

<div className="d-flex justify-content-between align-items-center mb-1">
<div className="d-flex align-items-center gap-2">
<img alt="Meta" className="avatar-xxs rounded" src="assets/images/logos/linkedin.svg"/>
<span>LinkedIn</span>
</div>
<span className="fw-semibold">39%</span>
</div>
<div className="progress progress-md mb-3">
<div className="progress-bar bg-success" style={{ width: '39%' }}></div>
</div>

<div className="d-flex justify-content-between align-items-center mb-1">
<div className="d-flex align-items-center gap-2">
<img alt="Meta" className="avatar-xxs rounded" src="assets/images/logos/google.svg"/>
<span>Google Search</span>
</div>
<span className="fw-semibold">22%</span>
</div>
<div className="progress progress-md mb-3">
<div className="progress-bar bg-success" style={{ width: '22%' }}></div>
</div>

<div className="d-flex justify-content-between align-items-center mb-1">
<div className="d-flex align-items-center gap-2">
<img alt="Twitter X" className="avatar-xxs rounded" src="assets/images/logos/x.svg"/>
<span>Twitter / X</span>
</div>
<span className="fw-semibold">31%</span>
</div>
<div className="progress progress-md mb-3">
<div className="progress-bar bg-success" style={{ width: '31%' }}></div>
</div>

<button className="btn btn-primary w-100 mt-2">Download Reports</button>
</div>

</div>

<div className="card bg-secondary bg-gradient border-0">
<div className="card-body" style={{ backgroundImage: 'url(assets/images/flower-style.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
<h5 className="mb-1 text-white fw-semibold">Company Contact</h5>
<p className="text-white text-opacity-75 mb-3">Get in touch with our support team.</p>
<div className="mb-2 text-white text-opacity-75">
<i className="ti ti-mail me-2 text-white"></i>
                                                support@company.com
                                            </div>
<div className="mb-2 text-white text-opacity-75">
<i className="ti ti-phone me-2 text-white"></i>
                                                +1 (234) 567-890
                                            </div>
<a className="btn btn-light w-100" href="mailto:support@company.com"> Contact Support </a>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-body">

<div className="d-flex align-items-center mb-3 text-muted">
<span className="me-1">★</span>
<span><strong>Dane</strong>, Your Project Progress Can <strong>Inspire</strong> Your Team</span>
</div>

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

<p className="mb-1"><strong>5 Team Members</strong> are currently waiting for your update on this project.</p>
<p className="text-muted fs-xs mb-3">Share your progress and the team will be notified instantly.</p>

<button className="btn btn-info w-100 rounded-pill">Update Project</button>
</div>

</div>

<div className="card">
<div className="card-body">

<div className="d-flex justify-content-between align-items-start mb-3">
<div>
<h6 className="fw-semibold mb-1">Project Update Needed</h6>
<span className="text-muted">Your team is waiting for your input</span>
</div>
<span className="badge text-bg-warning fw-semibold">Pending</span>
</div>

<div className="d-flex align-items-center mb-3">
<div className="avatar-group avatar-group-sm me-2">
<div className="avatar">
<img className="rounded-circle avatar-sm" src="assets/images/users/user-2.jpg"/>
</div>
<div className="avatar">
<img className="rounded-circle avatar-sm" src="assets/images/users/user-3.jpg"/>
</div>
<div className="avatar">
<img className="rounded-circle avatar-sm" src="assets/images/users/user-4.jpg"/>
</div>
<div className="avatar">
<img className="rounded-circle avatar-sm" src="assets/images/users/user-5.jpg"/>
</div>
</div>
<small className="text-muted ms-1">+3 more reviewers</small>
</div>

<div className="mb-3">
<p className="mb-1"><strong>Design System Revamp</strong> requires your final approval.</p>
<p className="text-muted fst-italic mb-0">Once approved, the development team will begin implementing the new UI components.</p>
</div>

<div className="mb-3">
<div className="d-flex justify-content-between mb-2">
<small className="text-muted">Progress</small>
<small className="fw-semibold">72%</small>
</div>
<div className="progress progress-md">
<div className="progress-bar bg-success" style={{ width: '72%' }}></div>
</div>
</div>

<button className="btn btn-primary w-100 rounded-pill">Review &amp; Approve</button>
</div>
</div>
</div>

</div>
</div>

<div className="col-xxl-5">
<div className="card">
<div className="card-header">
<h4 className="card-title">Search</h4>
</div>

<div className="card-body">
<h5 className="fs-14 fw-semibold">Sizes</h5>
<div className="app-search app-search-sm">
<input className="form-control form-control-sm" placeholder="Search here..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="search"></i>
</div>
<div className="app-search mt-3">
<input className="form-control" placeholder="Search something here..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="search"></i>
</div>
<div className="app-search app-search-lg mt-3">
<input className="form-control form-control-lg" placeholder="Search here..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="search"></i>
</div>
<h5 className="fs-14 fw-semibold mt-3">Styles</h5>
<div className="app-search">
<input className="form-control" placeholder="Search something here..." type="text"/>
<span className="app-search-icon text-secondary fs-18 solar:magic-stick-3-bold-duotone"></span>
</div>
<div className="app-search input-group mt-3">
<input className="form-control" placeholder="Search here..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="search"></i>
<button className="btn btn-secondary" type="button">Search</button>
</div>
<div className="app-search mt-3">
<input className="form-control border-light bg-body" placeholder="Search something here..." type="text"/>
<i className="app-search-icon text-muted" data-lucide="search"></i>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
