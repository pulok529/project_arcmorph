import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const WidgetsWeatherPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Weather" category="Widgets" />

      <div className="module-content-body">
<div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-2 text-center align-items-center">

<div className="col">
<div className="card">
<div className="card-body">
<h5 className="text-muted fs-13 text-uppercase">Today</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
<i className="ti ti-cloud-rain"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">32°</h3>
</div>
<p className="mb-1 text-muted text-center">Partly Cloudy</p>
<p className="mb-0 text-muted text-center gap-3 d-flex justify-content-center">
<span><i className="ti ti-wind"></i> 15km/h</span>
<span><i className="ti ti-droplet"></i> 37%</span>
</p>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body">
<h5 className="text-muted fs-13 text-uppercase">Saturday</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title bg-warning-subtle text-warning rounded-circle fs-22">
<i className="ti ti-cloud"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">30°</h3>
</div>
<p className="mb-1 text-muted text-center">Cloudy</p>
<p className="mb-0 text-muted text-center gap-3 d-flex justify-content-center">
<span><i className="ti ti-wind"></i> 10km/h</span>
<span><i className="ti ti-droplet"></i> 40%</span>
</p>
</div>
</div>
</div>

<div className="col">
<div className="card border-0 rounded-3 text-white" style={{ backgroundImage: 'url(assets/images/stock/small-7.jpg)', backgroundSize: 'cover' }}>
<div className="card-body bg-gradient bg-secondary bg-opacity-90 rounded-3">
<h5 className="text-white text-opacity-75 fs-13 text-uppercase">Sunday</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-22">
<i className="ti ti-cloud-storm"></i>
</span>
</div>
<h3 className="mb-0 fw-bold text-white">28°</h3>
</div>
<p className="mb-1 text-white text-center">Stormy</p>
<p className="mb-0 text-white text-opacity-75 text-center gap-3 d-flex justify-content-center">
<span><i className="ti ti-wind"></i> 22km/h</span>
<span><i className="ti ti-droplet"></i> 60%</span>
</p>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body">
<h5 className="text-muted fs-13 text-uppercase">Monday</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title bg-info-subtle text-info rounded-circle fs-22">
<i className="ti ti-sun"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">33°</h3>
</div>
<p className="mb-1 text-muted text-center">Sunny</p>
<p className="mb-0 text-muted text-center gap-3 d-flex justify-content-center">
<span><i className="ti ti-wind"></i> 8km/h</span>
<span><i className="ti ti-droplet"></i> 25%</span>
</p>
</div>
</div>
</div>

<div className="col">
<div className="card">
<div className="card-body">
<h5 className="text-muted fs-13 text-uppercase">Tuesday</h5>
<div className="d-flex align-items-center justify-content-center gap-2 my-3">
<div className="avatar-md flex-shrink-0">
<span className="avatar-title bg-success-subtle text-success rounded-circle fs-22">
<i className="ti ti-snowflake"></i>
</span>
</div>
<h3 className="mb-0 fw-bold">23°</h3>
</div>
<p className="mb-1 text-muted text-center">Wind &amp; Chill</p>
<p className="mb-0 text-muted text-center gap-3 d-flex justify-content-center">
<span><i className="ti ti-wind"></i> 20km/h</span>
<span><i className="ti ti-droplet"></i> 45%</span>
</p>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-xl-6">
<div className="card text-bg-primary bg-gradient border-0">
<div className="card-body">
<div className="row align-items-center">

<div className="col-md-4">
<div className="d-flex justify-content-center align-items-center gap-3">
<div>
<i className="ti ti-cloud-rain fs-48"></i>
<h2 className="mt-1 mb-0 text-white">32°</h2>
</div>
<div>
<p className="mb-0">Partly cloudy</p>
<small>15km/h - 37%</small>
</div>
</div>
</div>

<div className="col-md-8 mt-4 mt-md-0 text-center">
<div className="row">
<div className="col">
<h6 className="text-white-50 mb-1">SAT</h6>
<i className="ti ti-cloud fs-32"></i>
<p className="mt-1 mb-0">30°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">SUN</h6>
<i className="ti ti-cloud-storm fs-32"></i>
<p className="mt-1 mb-0">28°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">MON</h6>
<i className="ti ti-sun-high fs-32"></i>
<p className="mt-1 mb-0">33°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">TUE</h6>
<i className="ti ti-sun-high fs-32"></i>
<p className="mt-1 mb-0">33°</p>
</div>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card text-bg-info bg-gradient border-0">
<div className="card-body">
<div className="row align-items-center">

<div className="col-md-4">
<div className="d-flex justify-content-center align-items-center gap-3">
<div>
<i className="ti ti-sun fs-48"></i>
<h2 className="mt-1 mb-0 text-white">27°</h2>
</div>
<div>
<p className="mb-0">Sunny</p>
<small>12km/h - 42%</small>
</div>
</div>
</div>

<div className="col-md-8 mt-4 mt-md-0 text-center">
<div className="row">
<div className="col">
<h6 className="text-white-50 mb-1">SAT</h6>
<i className="ti ti-cloud fs-32"></i>
<p className="mt-1 mb-0">29°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">SUN</h6>
<i className="ti ti-rainbow fs-32"></i>
<p className="mt-1 mb-0">26°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">MON</h6>
<i className="ti ti-cloud-fog fs-32"></i>
<p className="mt-1 mb-0">24°</p>
</div>
<div className="col">
<h6 className="text-white-50 mb-1">TUE</h6>
<i className="ti ti-sun fs-32"></i>
<p className="mt-1 mb-0">35°</p>
</div>
</div>
</div>
</div>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-xxl-4 col-xl-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header border-light justify-content-between">
<h4 className="card-title">Top Cities Weather</h4>
<div className="d-flex align-items-center gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-nowrap table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th data-table-sort="">City</th>
<th data-table-sort="">Temp</th>
<th data-table-sort="">Humidity</th>
<th data-table-sort="">Wind</th>
<th>•••</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">New York</h5>
<span className="text-muted fs-12">Partly Cloudy</span>
</td>
<td>28°C</td>
<td>45%</td>
<td>12 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">London</h5>
<span className="text-muted fs-12">Rainy</span>
</td>
<td>19°C</td>
<td>68%</td>
<td>20 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Dubai</h5>
<span className="text-muted fs-12">Sunny</span>
</td>
<td>38°C</td>
<td>20%</td>
<td>10 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Tokyo</h5>
<span className="text-muted fs-12">Thunderstorm</span>
</td>
<td>25°C</td>
<td>70%</td>
<td>18 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Sydney</h5>
<span className="text-muted fs-12">Windy</span>
</td>
<td>22°C</td>
<td>55%</td>
<td>30 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Paris</h5>
<span className="text-muted fs-12">Cloudy</span>
</td>
<td>21°C</td>
<td>50%</td>
<td>14 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Toronto</h5>
<span className="text-muted fs-12">Snowy</span>
</td>
<td>-3°C</td>
<td>72%</td>
<td>25 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Singapore</h5>
<span className="text-muted fs-12">Humid</span>
</td>
<td>30°C</td>
<td>80%</td>
<td>10 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Berlin</h5>
<span className="text-muted fs-12">Foggy</span>
</td>
<td>16°C</td>
<td>65%</td>
<td>8 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
<tr>
<td>
<h5 className="fs-14 mb-0 fw-normal">Cape Town</h5>
<span className="text-muted fs-12">Clear Sky</span>
</td>
<td>26°C</td>
<td>40%</td>
<td>12 km/h</td>
<td>
<a className="text-muted fs-20" href="#"><i className="ti ti-eye"></i></a>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="cities"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

<div className="col-xxl-4 col-xl-6">
<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Weather by Country</h4>
<div className="dropdown ms-auto">
<a className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-report me-2"></i> View Full Weather Report </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Data </a>
</li>
<li>
<a className="dropdown-item" href="#"> <i className="ti ti-filter me-2"></i> Filter Countries </a>
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
<div className="card-body py-2 px-0">
<div className="px-3" data-simplebar="" style={{ height: '415px' }}>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/us.svg"/>
<span className="fw-semibold fs-16">USA</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">28°C <span className="text-muted fs-12">(Feels 30°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 45% | <i className="ti ti-wind"></i> 12 km/h</div>
</div>
<div className="col-4 text-success fw-semibold text-end"><i className="ti ti-sun"></i> Clear Sky</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/gb.svg"/>
<span className="fw-semibold fs-16">UK</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">19°C <span className="text-muted fs-12">(Feels 17°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 68% | <i className="ti ti-wind"></i> 20 km/h</div>
</div>
<div className="col-4 text-info fw-semibold text-end"><i className="ti ti-cloud-rain"></i> Rainy</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/ae.svg"/>
<span className="fw-semibold fs-16">UAE</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">38°C <span className="text-muted fs-12">(Feels 41°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 20% | <i className="ti ti-wind"></i> 10 km/h</div>
</div>
<div className="col-4 text-warning fw-semibold text-end"><i className="ti ti-sun-high"></i> Sunny</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/jp.svg"/>
<span className="fw-semibold fs-16">Japan</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">25°C <span className="text-muted fs-12">(Feels 26°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 70% | <i className="ti ti-wind"></i> 18 km/h</div>
</div>
<div className="col-4 text-danger fw-semibold text-end"><i className="ti ti-cloud-storm"></i> Stormy</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/au.svg"/>
<span className="fw-semibold fs-16">Australia</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">22°C <span className="text-muted fs-12">(Feels 21°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 55% | <i className="ti ti-wind"></i> 30 km/h</div>
</div>
<div className="col-4 text-primary fw-semibold text-end"><i className="ti ti-wind"></i> Windy</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/ca.svg"/>
<span className="fw-semibold fs-16">Canada</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">14°C <span className="text-muted fs-12">(Feels 12°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 52% | <i className="ti ti-wwind"></i> 15 km/h</div>
</div>
<div className="col-4 text-primary fw-semibold text-end"><i className="ti ti-cloud"></i> Cloudy</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/de.svg"/>
<span className="fw-semibold fs-16">Germany</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">17°C <span className="text-muted fs-12">(Feels 16°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 60% | <i className="ti ti-wind"></i> 9 km/h</div>
</div>
<div className="col-4 text-info fw-semibold text-end"><i className="ti ti-cloud-drizzle"></i> Drizzle</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/fr.svg"/>
<span className="fw-semibold fs-16">France</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">21°C <span className="text-muted fs-12">(Feels 20°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 48% | <i className="ti ti-wind"></i> 14 km/h</div>
</div>
<div className="col-4 text-warning fw-semibold text-end"><i className="ti ti-sun-wind"></i> Partly Sunny</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/br.svg"/>
<span className="fw-semibold fs-16">Brazil</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">30°C <span className="text-muted fs-12">(Feels 35°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 75% | <i className="ti ti-wind"></i> 22 km/h</div>
</div>
<div className="col-4 text-danger fw-semibold text-end"><i className="ti ti-cloud-storm"></i> Thunderstorm</div>
</div>

<div className="row align-items-center g-0 py-2">
<div className="col-4 d-flex align-items-center">
<img className="me-2 rounded-circle" height={26} src="assets/images/flags/sg.svg"/>
<span className="fw-semibold fs-16">Singapore</span>
</div>
<div className="col-4 text-end text-muted">
<div className="fw-semibold">32°C <span className="text-muted fs-12">(Feels 39°)</span></div>
<div className="fw-semibold fs-12"><i className="ti ti-droplet"></i> 83% | <i className="ti ti-wind"></i> 11 km/h</div>
</div>
<div className="col-4 text-success fw-semibold text-end"><i className="ti ti-cloud-rain"></i> Light Rain</div>
</div>
</div>

</div>

</div>

</div>

<div className="col-xxl-4 col-xl-6">
<div className="card overflow-hidden">

<div className="position-relative" style={{ height: '200px', background: 'url(_assets/images/stock/small-6.html) center/cover' }}>

<div className="position-absolute top-0 start-0 bg-dark text-white text-center px-3 py-2 rounded-end-3 mt-3">
<div className="fw-bold">OCT</div>
<div className="fw-bold fs-5">21</div>
</div>

<div className="position-absolute bottom-0 start-0 text-white p-3">
<div className="fs-5">Cloudy</div>
<h2 className="fw-bold">69°</h2>
</div>

<ul className="nav nav-tabs border-0 position-absolute bottom-0 end-0 p-2">
<li className="nav-item">
<button className="nav-link active bg-transparent text-white fw-semibold border-0 border-bottom border-white rounded-0" data-bs-target="#todayTab" data-bs-toggle="tab">Today</button>
</li>
<li className="nav-item">
<button className="nav-link bg-transparent text-white-50 fw-semibold border-0 rounded-0" data-bs-target="#weekTab" data-bs-toggle="tab">Week</button>
</li>
</ul>
</div>

<div className="p-3">
<div className="row text-center">
<div className="col">
<div className="fw-semibold text-muted">Now</div>
<i className="ti ti-cloud fs-2 my-1 d-block"></i>
<div className="fw-semibold">72°</div>
</div>
<div className="col">
<div className="fw-semibold text-muted">2pm</div>
<i className="ti ti-cloud-bolt fs-2 my-1 d-block"></i>
<div className="fw-semibold">74°</div>
</div>
<div className="col">
<div className="fw-semibold text-muted">3pm</div>
<i className="ti ti-sun-high fs-2 my-1 d-block"></i>
<div className="fw-semibold">76°</div>
</div>
<div className="col">
<div className="fw-semibold text-muted">4pm</div>
<i className="ti ti-sun fs-2 my-1 d-block"></i>
<div className="fw-semibold">75°</div>
</div>
<div className="col">
<div className="fw-semibold text-muted">5pm</div>
<i className="ti ti-cloud-rain fs-2 my-1 d-block"></i>
<div className="fw-semibold">71°</div>
</div>
</div>

</div>

</div>

<div className="row">
<div className="col-sm-6">
<div className="card text-white overflow-hidden">
<div style={{ background: 'url(_assets/images/stock/small-4.html) center/cover' }}>
<div className="w-100 h-100 d-flex flex-column justify-content-end p-3 bg-dark bg-gradient bg-opacity-75">
<div className="fw-bold fs-28">78°</div>
<div className="fw-semibold fs-5">Berlin</div>
<div className="text-white-50">Cloudy</div>
</div>
</div>
<div className="d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white text-opacity-75">
<div className="d-flex align-items-center gap-1"><i className="ti ti-wind"></i> <span>12m/s</span></div>
<div className="d-flex align-items-center gap-1"><i className="ti ti-compass"></i> <span>NE</span></div>
</div>
</div>
</div>

<div className="col-sm-6">
<div className="card text-white overflow-hidden">
<div style={{ background: 'url(_assets/images/stock/small-5.html) center/cover' }}>
<div className="w-100 h-100 d-flex flex-column justify-content-end p-3 bg-dark bg-gradient bg-opacity-75">
<div className="fw-bold fs-28">64°</div>
<div className="fw-semibold fs-5">Paris</div>
<div className="text-white-50">Light Rain</div>
</div>
</div>
<div className="d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white text-opacity-75">
<div className="d-flex align-items-center gap-1"><i className="ti ti-wind"></i> <span>8 m/s</span></div>
<div className="d-flex align-items-center gap-1"><i className="ti ti-compass"></i> <span>SW</span></div>
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
