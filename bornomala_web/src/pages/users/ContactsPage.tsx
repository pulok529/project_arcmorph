import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ContactsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Contacts" category="Users" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-12">
<form className="card border p-3">
<div className="row gap-3">

<div className="col-lg-4">
<div className="app-search">
<input className="form-control" placeholder="Search contact name..." type="text"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
</div>
<div className="col">
<div className="d-flex flex-wrap align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0">
<option selected>Designation</option>
<option defaultValue="Backend Engineer">Backend Engineer</option>
<option defaultValue="Content Strategist">Content Strategist</option>
<option defaultValue="Full Stack Developer">Full Stack Developer</option>
<option defaultValue="Data Scientist">Data Scientist</option>
</select>
<i className="ti ti-user-check app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0">
<option selected>Location</option>
<option defaultValue="Canada">Canada</option>
<option defaultValue="Italy">Italy</option>
<option defaultValue="Japan">Japan</option>
<option defaultValue="Egypt">Egypt</option>
</select>
<i className="ti ti-map-pin app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0">
<option selected>Department</option>
<option defaultValue="Engineering">Engineering</option>
<option defaultValue="Marketing">Marketing</option>
<option defaultValue="Development">Development</option>
<option defaultValue="Data">Data</option>
</select>
<i className="ti ti-stack-2 app-search-icon text-muted"></i>
</div>

<button className="btn btn-secondary" type="submit">Apply</button>

<div aria-label="Layout toggle button group" className="ms-auto flex-shrink-0" role="group">
<input defaultChecked className="btn-check" id="btnradio1" name="btnradio" type="radio"/>
<label className="btn btn-soft-primary btn-icon" htmlFor="btnradio1">
<i className="ti ti-apps fs-lg"></i>
</label>
<input className="btn-check" id="btnradio2" name="btnradio" type="radio"/>
<label className="btn btn-soft-primary btn-icon" htmlFor="btnradio2">
<i className="ti ti-list-check fs-lg"></i>
</label>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
<div className="row">

<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">

<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-1.jpg" width={72}/>

<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Sophia Carter</a>
<img alt="UK" className="ms-1 rounded" height={16} src="assets/images/flags/gb.svg"/>
</h5>

<span className="text-muted fs-xs">Lead UI/UX Designer</span><br/>
<span className="badge bg-secondary my-1">Admin</span><br/>

<span className="text-muted">@Founder | <a className="text-decoration-none text-danger" href="#">sophiacarter.com</a></span>

<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>

<hr className="my-3 border-dashed"/>

<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">134</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">29.8k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">1125</h5>
<span className="text-muted">Followings</span>
</div>
</div>

<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 1 hour ago</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-2.jpg" width={72}/>
<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Daniel Lee</a>
<img alt="US" className="ms-1 rounded" height={16} src="assets/images/flags/us.svg"/>
</h5>
<span className="text-muted fs-xs">Product Manager</span><br/>
<span className="badge bg-success my-1">Verified</span><br/>
<span className="text-muted">@danielpm | <a className="text-decoration-none text-danger" href="#">daniellee.com</a></span>
<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>
<hr className="my-3 border-dashed"/>
<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">98</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">12.5k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">860</h5>
<span className="text-muted">Followings</span>
</div>
</div>
<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 2 hours ago</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-3.jpg" width={72}/>
<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Maria Rodriguez</a>
<img alt="Spain" className="ms-1 rounded" height={16} src="assets/images/flags/es.svg"/>
</h5>
<span className="text-muted fs-xs">Marketing Head</span><br/>
<span className="badge bg-info my-1">Team Lead</span><br/>
<span className="text-muted">@maria | <a className="text-decoration-none text-danger" href="#">mariaworks.es</a></span>
<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>
<hr className="my-3 border-dashed"/>
<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">205</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">18.4k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">1432</h5>
<span className="text-muted">Followings</span>
</div>
</div>
<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 3 hours ago</div>
</div>
</div>
</div>

<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">
<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-4.jpg" width={72}/>
<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Liam Zhang</a>
<img alt="China" className="ms-1 rounded" height={16} src="assets/images/flags/cn.svg"/>
</h5>
<span className="text-muted fs-xs">Frontend Developer</span><br/>
<span className="badge bg-warning my-1">Contributor</span><br/>
<span className="text-muted">@liamdev | <a className="text-decoration-none text-danger" href="#">liamzhang.cn</a></span>
<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>
<hr className="my-3 border-dashed"/>
<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">67</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">9.3k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">540</h5>
<span className="text-muted">Followings</span>
</div>
</div>
<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 10 mins ago</div>
</div>
</div>

</div>

<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">

<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-7.jpg" width={72}/>

<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Ethan Wright</a>
<img alt="Canada" className="ms-1 rounded" height={16} src="assets/images/flags/ca.svg"/>
</h5>

<span className="text-muted fs-xs">Senior Backend Engineer</span><br/>
<span className="badge bg-primary my-1">Moderator</span><br/>

<span className="text-muted">@DevOps | <a className="text-decoration-none text-danger" href="#">ethanwright.dev</a></span>

<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>

<hr className="my-3 border-dashed"/>

<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">89</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">16.4k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">734</h5>
<span className="text-muted">Followings</span>
</div>
</div>

<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 45 mins ago</div>
</div>
</div>
</div>
<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">

<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-8.jpg" width={72}/>

<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Isabella Moretti</a>
<img alt="Italy" className="ms-1 rounded" height={16} src="assets/images/flags/it.svg"/>
</h5>

<span className="text-muted fs-xs">Content Strategist</span><br/>
<span className="badge bg-danger my-1">Top Creator</span><br/>

<span className="text-muted">@isamoretti | <a className="text-decoration-none text-danger" href="#">moretti.io</a></span>

<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>

<hr className="my-3 border-dashed"/>

<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">162</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">24.7k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">921</h5>
<span className="text-muted">Followings</span>
</div>
</div>

<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 2 hours ago</div>
</div>
</div>
</div>
<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">

<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-9.jpg" width={72}/>

<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Kenji Tanaka</a>
<img alt="Japan" className="ms-1 rounded" height={16} src="assets/images/flags/jp.svg"/>
</h5>

<span className="text-muted fs-xs">Full Stack Developer</span><br/>
<span className="badge bg-info my-1">Contributor</span><br/>

<span className="text-muted">@kenjicode | <a className="text-decoration-none text-danger" href="#">kenjitanaka.dev</a></span>

<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>

<hr className="my-3 border-dashed"/>

<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">113</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">13.9k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">678</h5>
<span className="text-muted">Followings</span>
</div>
</div>

<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 30 mins ago</div>
</div>
</div>
</div>
<div className="col-md-6 col-xxl-3">
<div className="card">
<div className="card-body text-center">

<img alt="avatar" className="rounded-circle" height={72} src="assets/images/users/user-10.jpg" width={72}/>

<h5 className="mb-0 mt-2 d-flex align-items-center justify-content-center">
<a className="link-reset" href="apps-users-profile.html">Amira El-Sayed</a>
<img alt="Egypt" className="ms-1 rounded" height={16} src="assets/images/flags/eg.svg"/>
</h5>

<span className="text-muted fs-xs">Data Scientist</span><br/>
<span className="badge bg-warning my-1">Analyst</span><br/>

<span className="text-muted">@amira.codes | <a className="text-decoration-none text-danger" href="#">amira-ai.tech</a></span>

<div className="mt-3">
<button className="btn btn-primary btn-sm me-1">Message</button>
<button className="btn btn-outline-secondary btn-sm">Follow</button>
</div>

<hr className="my-3 border-dashed"/>

<div className="d-flex justify-content-between text-center">
<div>
<h5 className="mb-0">176</h5>
<span className="text-muted">Posts</span>
</div>
<div>
<h5 className="mb-0">21.1k</h5>
<span className="text-muted">Followers</span>
</div>
<div>
<h5 className="mb-0">998</h5>
<span className="text-muted">Followings</span>
</div>
</div>

<hr className="mt-3 border-dashed"/>
<div className="text-end text-muted fs-xs"><i className="ti ti-refresh me-1"></i> Updated 20 mins ago</div>
</div>
</div>
</div>
</div>
<ul className="pagination pagination-rounded pagination-boxed justify-content-center">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item active"><a className="page-link" href="#!">1</a></li>
<li className="page-item"><a className="page-link" href="#!">2</a></li>
<li className="page-item"><a className="page-link" href="#!">3</a></li>
<li className="page-item"><a className="page-link" href="#!">4</a></li>
<li className="page-item"><a className="page-link" href="#!">5</a></li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>

      </div>
    </div>
  );
};
