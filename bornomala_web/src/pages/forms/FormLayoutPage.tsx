import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormLayoutPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Layouts" category="Forms" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-header">
<h4 className="card-title">Basic Form</h4>
</div>
<div className="card-body">
<div className="row g-4 align-items-center">
<div className="col-sm-6 border-end border-dashed">
<div className="p-4">
<h4 className="mb-1 fw-bold text-uppercase">Sign in</h4>
<p className="text-muted mb-4">Let’s get you signed in. Enter your email and password to continue.</p>
<form>
<div className="mb-3">
<label className="form-label" htmlFor="userEmail">
                                                            Email address
                                                            <span className="text-danger">*</span>
</label>
<div className="input-group">
<input className="form-control" id="userEmail" placeholder="you@example.com" required type="email"/>
</div>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="userPassword">
                                                            Password
                                                            <span className="text-danger">*</span>
</label>
<div className="input-group">
<input className="form-control" id="userPassword" placeholder="••••••••" required type="password"/>
</div>
</div>
<div className="d-flex flex-wrap justify-content-between">
<div className="form-check fs-sm">
<input className="form-check-input form-check-input-light" id="rememberMe1" type="checkbox"/>
<label className="form-check-label fw-semibold fst-italic text-muted fs-base" htmlFor="rememberMe1">Keep me signed in</label>
</div>
<button className="btn btn-primary rounded-pill" type="submit">
<strong>Log in</strong>
</button>
</div>
</form>
</div>
</div>
<div className="col-sm-6 text-center">
<div className="avatar avatar-xl mx-auto">
<span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fw-bold">
<i className="ti ti-user-hexagon text-secondary fs-28 fill-secondary"></i>
</span>
</div>
<h4 className="mt-3">Don't Have an Account Yet?</h4>
<p className="text-muted mb-3">Join us today and unlock access to personalized features, updates, and more!</p>
<a className="link-primary text-decoration-underline fw-semibold link-offset-3" href="auth-sign-up.html">Create Your Account</a>
</div>
</div>

</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Modal Form</h4>
</div>
<div className="card-body">
<div className="text-center">
<a className="btn btn-primary" data-bs-toggle="modal" href="#modal-form">Form in simple modal box</a>
</div>
<div aria-hidden={true} className="modal fade" id="modal-form">
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-body">
<div className="row g-4 align-items-center">
<div className="col-sm-6 border-end border-dashed">
<div className="p-4">
<h4 className="mb-1 fw-bold text-uppercase">Sign in</h4>
<p className="text-muted mb-4">Let’s get you signed in. Enter your email and password to continue.</p>
<form>
<div className="mb-3">
<label className="form-label" htmlFor="userEmail1">
                                                                            Email address
                                                                            <span className="text-danger">*</span>
</label>
<div className="input-group">
<input className="form-control" id="userEmail1" placeholder="you@example.com" required type="email"/>
</div>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="userPassword1">
                                                                            Password
                                                                            <span className="text-danger">*</span>
</label>
<div className="input-group">
<input className="form-control" id="userPassword1" placeholder="••••••••" required type="password"/>
</div>
</div>
<div className="d-flex flex-wrap justify-content-between">
<div className="form-check fs-sm">
<input className="form-check-input form-check-input-light" id="rememberMe" type="checkbox"/>
<label className="form-check-label fw-semibold fst-italic text-muted fs-base" htmlFor="rememberMe">Keep me signed in</label>
</div>
<button className="btn btn-primary rounded-pill" type="submit">
<strong>Log in</strong>
</button>
</div>
</form>
</div>
</div>
<div className="col-sm-6 text-center">
<div className="avatar avatar-xl mx-auto">
<span className="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold">
<i className="ti ti-user-hexagon text-purple fs-28 fill-purple"></i>
</span>
</div>
<h4 className="mt-3">Don't Have an Account Yet?</h4>
<p className="text-muted mb-3">Join us today and unlock access to personalized features, updates, and more!</p>
<a className="link-primary text-decoration-underline fw-semibold link-offset-3" href="auth-sign-up.html">Create Your Account</a>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
<div className="card">
<div className="card-header">
<h4 className="card-title">Basic Example</h4>
</div>
<div className="card-body">
<form>
<div className="mb-3">
<label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
<input aria-describedby="emailHelp" className="form-control" id="exampleInputEmail1" placeholder="Enter email" type="email"/>
<small className="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="exampleInputPassword1">Password</label>
<input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password"/>
</div>
<div className="mb-3">
<div className="form-check">
<input className="form-check-input" id="checkmeout0" type="checkbox"/>
<label className="form-check-label" htmlFor="checkmeout0">Check me out !</label>
</div>
</div>
<button className="btn btn-primary" type="submit">Submit</button>
</form>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Horizontal Form</h4>
</div>
<div className="card-body">
<form className="form-horizontal">
<div className="row mb-3">
<label className="col-3 col-form-label" htmlFor="inputEmail3">Email</label>
<div className="col-9">
<input className="form-control" id="inputEmail3" placeholder="Email" type="email"/>
</div>
</div>
<div className="row mb-3">
<label className="col-3 col-form-label" htmlFor="inputPassword3">Password</label>
<div className="col-9">
<input className="form-control" id="inputPassword3" placeholder="Password" type="password"/>
</div>
</div>
<div className="row mb-3">
<label className="col-3 col-form-label" htmlFor="inputPassword5">Re Password</label>
<div className="col-9">
<input className="form-control" id="inputPassword5" placeholder="Retype Password" type="password"/>
</div>
</div>
<div className="row mb-3 justify-content-end">
<div className="col-9">
<div className="form-check">
<input className="form-check-input" id="checkmeout" type="checkbox"/>
<label className="form-check-label" htmlFor="checkmeout">Check me out !</label>
</div>
</div>
</div>
<div className="justify-content-end row">
<div className="col-9">
<button className="btn btn-info" type="submit">Sign in</button>
</div>
</div>
</form>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Horizontal Form Label Sizing</h4>
</div>
<div className="card-body">
<form>
<div className="mb-2 row">
<label className="col-sm-2 col-form-label col-form-label-sm" htmlFor="colFormLabelSm">Email</label>
<div className="col-sm-10">
<input className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" type="email"/>
</div>
</div>
<div className="mb-2 row">
<label className="col-sm-2 col-form-label" htmlFor="colFormLabel">Email</label>
<div className="col-sm-10">
<input className="form-control" id="colFormLabel" placeholder="col-form-label" type="email"/>
</div>
</div>
<div className="row">
<label className="col-sm-2 col-form-label col-form-label-lg" htmlFor="colFormLabelLg">Email</label>
<div className="col-sm-10">
<input className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" type="email"/>
</div>
</div>
</form>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Inline Form</h4>
</div>
<div className="card-body">
<form className="row row-cols-lg-auto g-3 align-items-center">
<div className="col-12">
<label className="visually-hidden" htmlFor="staticEmail2">Email</label>
<input className="form-control-plaintext" id="staticEmail2" readOnly type="text" defaultValue="email@example.com"/>
</div>
<div className="col-12">
<label className="visually-hidden" htmlFor="inputPassword2">Password</label>
<input className="form-control" id="inputPassword2" placeholder="Password" type="password"/>
</div>
<div className="col-12">
<button className="btn btn-primary" type="submit">Confirm identity</button>
</div>
</form>
<h6 className="fs-base mt-3">Auto-sizing</h6>
<form>
<div className="row gy-2 gx-2 align-items-center">
<div className="col-auto">
<label className="visually-hidden" htmlFor="inlineFormInput">Name</label>
<input className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" type="text"/>
</div>
<div className="col-auto">
<label className="visually-hidden" htmlFor="inlineFormInputGroup">Username</label>
<div className="input-group mb-2">
<div className="input-group-text">@</div>
<input className="form-control" id="inlineFormInputGroup" placeholder="Username" type="text"/>
</div>
</div>
<div className="col-auto">
<div className="form-check mb-2">
<input className="form-check-input" id="autoSizingCheck" type="checkbox"/>
<label className="form-check-label" htmlFor="autoSizingCheck">Remember me</label>
</div>
</div>
<div className="col-auto">
<button className="btn btn-primary mb-2" type="submit">Submit</button>
</div>
</div>
</form>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Form Row</h4>
</div>
<div className="card-body">
<form>
<div className="row g-2">
<div className="mb-3 col-md-6">
<label className="form-label" htmlFor="inputEmail4">Email</label>
<input className="form-control" id="inputEmail4" placeholder="Email" type="email"/>
</div>
<div className="mb-3 col-md-6">
<label className="form-label" htmlFor="inputPassword4">Password</label>
<input className="form-control" id="inputPassword4" placeholder="Password" type="password"/>
</div>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="inputAddress">Address</label>
<input className="form-control" id="inputAddress" placeholder="1234 Main St" type="text"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="inputAddress2">Address 2</label>
<input className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" type="text"/>
</div>
<div className="row g-2">
<div className="mb-3 col-md-6">
<label className="form-label" htmlFor="inputCity">City</label>
<input className="form-control" id="inputCity" type="text"/>
</div>
<div className="mb-3 col-md-4">
<label className="form-label" htmlFor="inputState">State</label>
<select className="form-select" id="inputState">
<option>Choose</option>
<option>Option 1</option>
<option>Option 2</option>
<option>Option 3</option>
</select>
</div>
<div className="mb-3 col-md-2">
<label className="form-label" htmlFor="inputZip">Zip</label>
<input className="form-control" id="inputZip" type="text"/>
</div>
</div>
<div className="mb-2">
<div className="form-check">
<input className="form-check-input" id="customCheck11" type="checkbox"/>
<label className="form-check-label" htmlFor="customCheck11">Check this custom checkbox</label>
</div>
</div>
<button className="btn btn-primary" type="submit">Sign in</button>
</form>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Floating Labels</h4>
</div>

<div className="card-body">
<form action="#">
<div className="row g-3">

<div className="col-lg-6">
<div className="form-floating">
<input className="form-control" id="usernameInput" placeholder="Enter username" type="text"/>
<label htmlFor="usernameInput">Username</label>
</div>
</div>

<div className="col-lg-6">
<div className="form-floating">
<input className="form-control" id="fullnameInput" placeholder="Enter full name" type="text"/>
<label htmlFor="fullnameInput">Full Name</label>
</div>
</div>

<div className="col-lg-4">
<div className="form-floating">
<input className="form-control" id="phoneInput" placeholder="Enter phone number" type="tel"/>
<label htmlFor="phoneInput">Phone Number</label>
</div>
</div>

<div className="col-lg-4">
<div className="form-floating">
<input className="form-control" id="dobInput" type="date"/>
<label htmlFor="dobInput">Date of Birth</label>
</div>
</div>

<div className="col-lg-4">
<div className="form-floating">
<select aria-label="Select gender" className="form-select" id="genderSelect">
<option selected>Choose...</option>
<option defaultValue="1">Male</option>
<option defaultValue="2">Female</option>
<option defaultValue="3">Other</option>
</select>
<label htmlFor="genderSelect">Gender</label>
</div>
</div>

<div className="col-lg-8">
<div className="form-floating">
<input className="form-control" id="addressInput" placeholder="Enter your address" type="text"/>
<label htmlFor="addressInput">Street Address</label>
</div>
</div>

<div className="col-lg-4">
<div className="form-floating">
<select aria-label="Select state" className="form-select" id="stateSelect">
<option selected>Choose...</option>
<option defaultValue="1">California</option>
<option defaultValue="2">Texas</option>
<option defaultValue="3">Florida</option>
</select>
<label htmlFor="stateSelect">State</label>
</div>
</div>

<div className="col-lg-6">
<div className="form-floating">
<input className="form-control" id="websiteInput" placeholder="Enter website URL" type="url"/>
<label htmlFor="websiteInput">Website (optional)</label>
</div>
</div>

<div className="col-lg-6">
<div className="form-floating">
<textarea className="form-control" id="bioTextarea" placeholder="Tell us about yourself" style={{ height: '100px' }}></textarea>
<label htmlFor="bioTextarea">Short Bio</label>
</div>
</div>

<div className="col-lg-12">
<button className="btn btn-success" type="submit">Create Account</button>
</div>
</div>
</form>
</div>
</div>
</div>

</div>

      </div>
    </div>
  );
};
