import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const AccountSettingsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Account Settings" category="Users" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<article className="card overflow-hidden mb-0">
<div className="position-relative card-side-img overflow-hidden" style={{ minHeight: '300px', backgroundImage: 'url(assets/images/profile-bg.jpg)' }}>
<div className="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex align-items-center flex-column justify-content-center">
<h3 className="text-white mb-0 fst-italic">
                                            "Designing the future, one template at a time"
                                            <a href="#!"><i className="ti ti-edit"></i></a>
</h3>
<button className="btn btn-sm btn-danger mt-2" type="button">Change Background</button>
</div>
</div>
</article>
</div>

</div>
<div className="px-3 mt-n4">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-body">
<form>

<h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
<i className="ti ti-user-circle fs-lg"></i>
                                                Personal Info
                                            </h5>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="firstname">First Name</label>
<input className="form-control" id="firstname" placeholder="Enter first name" type="text"/>
</div>
</div>
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="lastname">Last Name</label>
<input className="form-control" id="lastname" placeholder="Enter last name" type="text"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="jobtitle">Job Title</label>
<input className="form-control" id="jobtitle" placeholder="e.g. UI Developer, Designer" type="text"/>
</div>
</div>
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="phone">Phone Number</label>
<input className="form-control" id="phone" placeholder="+1 234 567 8901" type="text"/>
</div>
</div>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="userbio">Bio</label>
<textarea className="form-control" id="userbio" placeholder="Write something about yourself..." rows={4}></textarea>
</div>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="useremail">Email Address</label>
<input className="form-control" id="useremail" placeholder="Enter email" type="email"/>
<span className="form-text fs-xs fst-italic text-muted">
<a className="link-reset" href="#">Click here to change your email</a>
</span>
</div>
</div>
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="userpassword">Password</label>
<input className="form-control" id="userpassword" placeholder="Enter new password" type="password"/>
<span className="form-text fs-xs fst-italic text-muted">
<a className="link-reset" href="#">Click here to change your password</a>
</span>
</div>
</div>
</div>
<div className="mb-4">
<label className="form-label" htmlFor="profilephoto">Profile Photo</label>
<input className="form-control" id="profilephoto" type="file"/>
</div>

<h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
<i className="ti ti-map-pin fs-lg"></i>
                                                Address Info
                                            </h5>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="address-line1">Address Line 1</label>
<input className="form-control" id="address-line1" placeholder="Street, Apartment, Unit, etc." type="text"/>
</div>
</div>
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="address-line2">Address Line 2</label>
<input className="form-control" id="address-line2" placeholder="Optional" type="text"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-4">
<div className="mb-3">
<label className="form-label" htmlFor="city">City</label>
<input className="form-control" id="city" placeholder="City" type="text"/>
</div>
</div>
<div className="col-md-4">
<div className="mb-3">
<label className="form-label" htmlFor="state">State / Province</label>
<input className="form-control" id="state" placeholder="State or Province" type="text"/>
</div>
</div>
<div className="col-md-4">
<div className="mb-3">
<label className="form-label" htmlFor="zipcode">Postal / ZIP Code</label>
<input className="form-control" id="zipcode" placeholder="Postal Code" type="text"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="country">Country</label>
<input className="form-control" id="country" placeholder="Country" type="text"/>
</div>
</div>
</div>

<h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
<i className="ti ti-building fs-lg"></i>
                                                Company Info
                                            </h5>
<div className="row">
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="companyname">Company Name</label>
<input className="form-control" id="companyname" placeholder="Enter company name" type="text"/>
</div>
</div>
<div className="col-md-6">
<div className="mb-3">
<label className="form-label" htmlFor="cwebsite">Website</label>
<input className="form-control" id="cwebsite" placeholder="https://yourcompany.com/" type="text"/>
</div>
</div>
</div>

<h5 className="mb-3 text-uppercase bg-light-subtle p-1 border-dashed border rounded border-light d-flex justify-content-center align-items-center gap-1">
<i className="ti ti-world fs-lg"></i>
                                                Social
                                            </h5>
<div className="row g-3">
<div className="col-md-6">
<label className="form-label" htmlFor="social-fb">Facebook</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
</svg>
</span>
<input className="form-control" id="social-fb" placeholder="Facebook URL" type="text"/>
</div>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="social-tw">Twitter X</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
</svg>
</span>
<input className="form-control" id="social-tw" placeholder="@username" type="text"/>
</div>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="social-insta">Instagram</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
<path d="M16.5 7.5v.01"></path>
</svg>
</span>
<input className="form-control" id="social-insta" placeholder="Instagram URL" type="text"/>
</div>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="social-lin">LinkedIn</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M8 11v5"></path>
<path d="M8 8v.01"></path>
<path d="M12 16v-5"></path>
<path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
<path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
</svg>
</span>
<input className="form-control" id="social-lin" placeholder="LinkedIn Profile" type="text"/>
</div>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="social-gh">GitHub</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
</svg>
</span>
<input className="form-control" id="social-gh" placeholder="GitHub Username" type="text"/>
</div>
</div>
<div className="col-md-6">
<label className="form-label" htmlFor="social-sky">Dribbble</label>
<div className="input-group">
<span className="input-group-text">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-brand-dribbble" fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width={2} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
<path d="M9 3.6c5 6 7 10.5 7.5 16.2"></path>
<path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path>
<path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path>
</svg>
</span>
<input className="form-control" id="social-sky" placeholder="@username" type="text"/>
</div>
</div>
</div>

<div className="text-end mt-4">
<button className="btn btn-success" type="submit">Save Changes</button>
</div>
</form>
</div>

</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
