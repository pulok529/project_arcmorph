import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormBasicElementsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Basic Elements" category="Forms" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-12">
<div className="card">
<div className="card-header">
<h5 className="card-title">Input Textfield Type</h5>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="simpleinput">Simple Input</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="simpleinput" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="floatingInput">Floating Input</label>
</div>
<div className="col-lg-8">
<div className="form-floating">
<input className="form-control" id="floatingInput" placeholder="name" type="text"/>
<label>Name</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="validInput">Valid Input</label>
</div>
<div className="col-lg-8">
<input className="form-control is-valid" id="validInput" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-rounded">Rounded Input</label>
</div>
<div className="col-lg-8">
<input className="form-control rounded-pill" id="example-rounded" placeholder="Rounded Input" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-textarea">Text area</label>
</div>
<div className="col-lg-8">
<textarea className="form-control" id="example-textarea" rows={5}></textarea>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-disable">Disabled</label>
</div>
<div className="col-lg-8">
<input className="form-control" disabled id="example-disable" type="text" defaultValue="Disabled value"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-helping">Helping text</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-helping" placeholder="Helping text" type="text"/>
<small className="form-text text-muted">A block of help text that breaks onto a new line and may extend beyond one line.</small>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Select with Icon</label>
</div>
<div className="col-lg-8">
<div className="app-search">
<select className="form-select form-control" id="discount">
<option selected>Choose Discount</option>
<option defaultValue="No Discount">No Discount</option>
<option defaultValue="Flat Discount">Flat Discount</option>
<option defaultValue="Percentage Discount">Percentage Discount</option>
</select>
<i className="ti ti-discount app-search-icon text-muted"></i>
</div>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Label Input</label>
</div>
<div className="col-lg-8">
<div>
<label className="form-label" htmlFor="labelInputInput1">Label Input</label>
<input className="form-control" id="labelInputInput1" placeholder="name@example.com" type="email"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="SearchInput">Search Style</label>
</div>
<div className="col-lg-8">
<div className="app-search">
<input className="form-control" id="SearchInput" placeholder="Search for something..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="inValidationInput">Invalid Input</label>
</div>
<div className="col-lg-8">
<input className="form-control is-invalid" id="inValidationInput" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-placeholder">Placeholder</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-placeholder" placeholder="placeholder" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-readOnly">readOnly</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-readOnly" readOnly type="text" defaultValue="readOnly value"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-static">Static control</label>
</div>
<div className="col-lg-8">
<input className="form-control-plaintext" id="example-static" readOnly type="text" defaultValue="email@example.com"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Default Select</label>
</div>
<div className="col-lg-8">
<select className="form-select">
<option selected>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</select>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-multiselect">Multiple Select</label>
</div>
<div className="col-lg-8">
<select className="form-control" id="example-multiselect" multiple>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
</div>
</div>
</div>

</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h5 className="card-title">Input Types</h5>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-email">Email</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-email" name="example-email" placeholder="Email" type="email"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="password">Show/Hide Password</label>
</div>
<div className="col-lg-8">
<div className="input-group" data-password="">
<input className="form-control form-password" id="password" placeholder="Enter your password" type="password"/>
<div className="input-group-text password-eye" data-password="false">
<i className="ti ti-eye d-block eye-icon" data-pass="show"></i>
<i className="ti ti-eye-off d-none eye-icon" data-pass="hide"></i>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-time">Time</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-time" name="time" type="time"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-number">Number</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-number" name="number" type="number"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-range">Range</label>
</div>
<div className="col-lg-8">
<input className="form-range" id="example-range" max="100" min="0" name="range" type="range"/>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-password">Password</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-password" type="password" defaultValue="password"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-month">Month</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-month" name="month" type="month"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-week">Week</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-week" name="week" type="week"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2 mb-3">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-color">Color</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-color" name="color" type="color" defaultValue="#3a6c8f"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>
</div>

</div>
</div>
</div>
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h5 className="card-title">Input Group</h5>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Username</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<span className="input-group-text" id="basic-addon1">@</span>
<input aria-describedby="basic-addon1" aria-label="Username" className="form-control" placeholder="Username" type="text"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Amount</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<span className="input-group-text">$</span>
<input aria-label="Amount (to the nearest dollar)" className="form-control" type="text"/>
<span className="input-group-text">.00</span>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Textarea</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<span className="input-group-text">With textarea</span>
<textarea aria-label="With textarea" className="form-control" rows={2}></textarea>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Wrapping</label>
</div>
<div className="col-lg-8">
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">@</span>
<input aria-describedby="addon-wrapping" aria-label="Username" className="form-control" placeholder="Username" type="text"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Input + Button</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<input aria-label="Recipient's username" className="form-control" placeholder="Recipient's username" type="text"/>
<button className="btn btn-dark" type="button">Button</button>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="formFileMultiple01">Multiple Files</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="formFileMultiple01" multiple type="file"/>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Recipient</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<input aria-describedby="basic-addon2" aria-label="Recipient's username" className="form-control" placeholder="Recipient's username" type="text"/>
<span className="input-group-text" id="basic-addon2">@example.com</span>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Email Login</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<input className="form-control" placeholder="Username" type="text"/>
<span className="input-group-text">@</span>
<input className="form-control" placeholder="Server" type="text"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="basic-url">Vanity URL</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
<input aria-describedby="basic-addon3" className="form-control" id="basic-url" type="text"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Dropdown + Input</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">Dropdown</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="%21.html#">Action</a>
<a className="dropdown-item" href="%21.html#">Another action</a>
<a className="dropdown-item" href="%21.html#">Something else here</a>
</div>
<input aria-describedby="basic-addon1" aria-label="" className="form-control" placeholder="" type="text"/>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="inputGroupFile04">File Input</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="inputGroupFile04" type="file"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="inputGroupSelect01">Input Group Select</label>
</div>
<div className="col-lg-8">
<div className="input-group">
<label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
<select className="form-select" id="inputGroupSelect01">
<option selected>Choose...</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</select>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h5 className="card-title">Floating Labels</h5>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Email address</label>
</div>
<div className="col-lg-8">
<div className="form-floating">
<input className="form-control" id="floatingInputEmail" placeholder="name@example.com" type="email"/>
<label htmlFor="floatingInputEmail">Email address</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="floatingTextarea">Comments</label>
</div>
<div className="col-lg-8">
<div className="form-floating">
<textarea className="form-control" id="floatingTextarea" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
<label htmlFor="floatingTextarea">Comments</label>
</div>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="floatingPassword">Password</label>
</div>
<div className="col-lg-8">
<div className="form-floating">
<input className="form-control" id="floatingPassword" placeholder="Password" type="password"/>
<label htmlFor="floatingPassword">Password</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="floatingSelect">Select Menu</label>
</div>
<div className="col-lg-8">
<div className="form-floating">
<select aria-label="Floating label select example" className="form-select" id="floatingSelect">
<option selected>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</select>
<label htmlFor="floatingSelect">Works with selects</label>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h5 className="card-title">Input Sizes</h5>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-input-small">Small</label>
</div>
<div className="col-lg-8">
<input className="form-control form-control-sm" id="example-input-small" name="example-input-small" placeholder=".input-sm" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-input-large">Large</label>
</div>
<div className="col-lg-8">
<input className="form-control form-control-lg" id="example-input-large" name="example-input-large" placeholder=".input-lg" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Large Select</label>
</div>
<div className="col-lg-8">
<select className="form-select form-select-lg">
<option selected>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</select>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-input-normal">Normal</label>
</div>
<div className="col-lg-8">
<input className="form-control" id="example-input-normal" name="example-input-normal" placeholder="Normal" type="text"/>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label" htmlFor="example-gridsize">Grid Sizes</label>
</div>
<div className="col-lg-8">
<div className="row">
<div className="col-sm-4">
<input className="form-control" id="example-gridsize" placeholder=".col-sm-4" type="text"/>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Small Select</label>
</div>
<div className="col-lg-8">
<select className="form-select form-select-sm">
<option selected>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
</select>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h5 className="card-title">Checks, Radios and Switches</h5>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Checkboxes</label>
</div>
<div className="col-lg-8">
<div className="form-check mb-2">
<input className="form-check-input" id="checkDefault" type="checkbox"/>
<label className="form-check-label" htmlFor="checkDefault">Default Checkbox</label>
</div>
<div className="form-check mb-2">
<input className="form-check-input form-check-input-light" id="checkLight" type="checkbox"/>
<label className="form-check-label" htmlFor="checkLight">Light Checkbox</label>
</div>
<div className="mb-2">
<div className="form-check form-check-inline">
<input defaultChecked className="form-check-input" id="checkInline1" type="checkbox"/>
<label className="form-check-label" htmlFor="checkInline1">Inline 1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" id="checkInline2" type="checkbox"/>
<label className="form-check-label" htmlFor="checkInline2">Inline 2</label>
</div>
</div>
<div className="form-check mb-2">
<input className="form-check-input" id="checkIndeterminate" type="checkbox" defaultValue=""/>
<label className="form-check-label" htmlFor="checkIndeterminate">Disabled indeterminate checkbox</label>
</div>
<div className="form-check">
<input defaultChecked className="form-check-input" disabled id="checkCheckedDisabled" type="checkbox" defaultValue=""/>
<label className="form-check-label" htmlFor="checkCheckedDisabled">Disabled defaultChecked checkbox</label>
</div>
<h5 className="mt-3">Sizes</h5>
<div className="form-check fs-lg mb-2">
<input defaultChecked className="form-check-input mt-1" id="checkSize1" type="checkbox"/>
<label className="form-check-label fs-base" htmlFor="checkSize1">I'm 16px Checkbox</label>
</div>
<div className="form-check form-check-secondary fs-xxl mb-2">
<input defaultChecked className="form-check-input mt-1" id="checkSize2" type="checkbox"/>
<label className="form-check-label fs-base" htmlFor="checkSize2">i'm 20px Checkbox</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Switches</label>
</div>
<div className="col-lg-8">
<div className="form-check form-switch mb-2">
<input defaultChecked className="form-check-input" id="switch1" type="checkbox"/>
<label className="form-check-label" htmlFor="switch1">Enabled Switch</label>
</div>
<div className="form-check form-switch mb-2">
<input className="form-check-input" disabled id="switch2" type="checkbox"/>
<label className="form-check-label" htmlFor="switch2">Disabled Switch</label>
</div>
<h5 className="mt-3">Sizes</h5>
<div className="form-check form-switch fs-lg mb-2">
<input defaultChecked className="form-check-input mt-1" id="checkboxSize16" type="checkbox"/>
<label className="form-check-label fs-base" htmlFor="checkboxSize16">I'm 16px Switch</label>
</div>
<div className="form-check form-switch form-check-secondary fs-xxl mb-2">
<input defaultChecked className="form-check-input mt-1" id="checkboxSize20" type="checkbox"/>
<label className="form-check-label fs-base" htmlFor="checkboxSize20">I'm 20px Switch</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Colored Checkboxes</label>
</div>
<div className="col-lg-8">
<div className="d-flex flex-wrap gap-4">
<div>
<div className="form-check form-check-primary mb-2">
<input defaultChecked className="form-check-input" id="checkPrimary" type="checkbox"/>
<label className="form-check-label" htmlFor="checkPrimary">Primary</label>
</div>
<div className="form-check form-check-secondary mb-2">
<input defaultChecked className="form-check-input" id="checkSecondary" type="checkbox"/>
<label className="form-check-label" htmlFor="checkSecondary">Secondary</label>
</div>
<div className="form-check form-check-success mb-2">
<input defaultChecked className="form-check-input" id="checkSuccess" type="checkbox"/>
<label className="form-check-label" htmlFor="checkSuccess">Success</label>
</div>
<div className="form-check form-check-info mb-2">
<input defaultChecked className="form-check-input" id="checkInfo" type="checkbox"/>
<label className="form-check-label" htmlFor="checkInfo">Info</label>
</div>
</div>
<div>
<div className="form-check form-check-warning mb-2">
<input defaultChecked className="form-check-input" id="checkWarning" type="checkbox"/>
<label className="form-check-label" htmlFor="checkWarning">Warning</label>
</div>
<div className="form-check form-check-danger mb-2">
<input defaultChecked className="form-check-input" id="checkDanger" type="checkbox"/>
<label className="form-check-label" htmlFor="checkDanger">Danger</label>
</div>
<div className="form-check form-check-dark">
<input defaultChecked className="form-check-input" id="checkDark" type="checkbox"/>
<label className="form-check-label" htmlFor="checkDark">Dark</label>
</div>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Colored Switches</label>
</div>
<div className="col-lg-8">
<div className="d-flex flex-wrap gap-4">
<div>
<div className="form-check form-check-primary form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchPrimary" type="checkbox"/>
<label className="form-check-label" htmlFor="switchPrimary">Primary</label>
</div>
<div className="form-check form-check-secondary form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchSecondary" type="checkbox"/>
<label className="form-check-label" htmlFor="switchSecondary">Secondary</label>
</div>
<div className="form-check form-check-success form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchSuccess" type="checkbox"/>
<label className="form-check-label" htmlFor="switchSuccess">Success</label>
</div>
<div className="form-check form-check-info form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchInfo" type="checkbox"/>
<label className="form-check-label" htmlFor="switchInfo">Info</label>
</div>
</div>
<div>
<div className="form-check form-check-warning form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchWarning" type="checkbox"/>
<label className="form-check-label" htmlFor="switchWarning">Warning</label>
</div>
<div className="form-check form-check-danger form-switch mb-2">
<input defaultChecked className="form-check-input" id="switchDanger" type="checkbox"/>
<label className="form-check-label" htmlFor="switchDanger">Danger</label>
</div>
<div className="form-check form-check-dark form-switch">
<input defaultChecked className="form-check-input" id="switchDark" type="checkbox"/>
<label className="form-check-label" htmlFor="switchDark">Dark</label>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-lg-6">

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Radios</label>
</div>
<div className="col-lg-8">
<div className="form-check mb-2">
<input defaultChecked className="form-check-input" id="radio1" name="gridRadio" type="radio"/>
<label className="form-check-label" htmlFor="radio1">Option 1</label>
</div>
<div className="form-check mb-2">
<input className="form-check-input" id="radio2" name="gridRadio" type="radio"/>
<label className="form-check-label" htmlFor="radio2">Option 2</label>
</div>
<div className="mb-2">
<div className="form-check form-check-inline">
<input defaultChecked className="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" defaultValue="option1"/>
<label className="form-check-label" htmlFor="inlineRadio1">Inline 1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" defaultValue="option2"/>
<label className="form-check-label" htmlFor="inlineRadio2">Inline 2</label>
</div>
</div>
<div className="form-check form-check-inline">
<input defaultChecked className="form-check-input" disabled id="inlineRadio3" name="disabledRadioOptions" type="radio" defaultValue="option3"/>
<label className="form-check-label" htmlFor="inlineRadio3">Disabled Checked Radio</label>
</div>
<h5 className="mt-3">Sizes</h5>
<div className="mb-2">
<div className="form-check fs-lg form-check-inline">
<input defaultChecked className="form-check-input" id="radioCash" name="paymentMethod" type="radio" defaultValue="cash"/>
<label className="form-check-label fs-base" htmlFor="radioCash">Cash</label>
</div>
<div className="form-check fs-lg form-check-inline">
<input className="form-check-input" id="radioCard" name="paymentMethod" type="radio" defaultValue="card"/>
<label className="form-check-label fs-base" htmlFor="radioCard">Card</label>
</div>
</div>
<div className="mb-2">
<div className="form-check fs-xxl form-check-inline">
<input defaultChecked className="form-check-input" id="radioPickup" name="deliveryOption" type="radio" defaultValue="pickup"/>
<label className="form-check-label fs-base" htmlFor="radioPickup">Pickup</label>
</div>
<div className="form-check fs-xxl form-check-inline">
<input className="form-check-input" id="radioHome" name="deliveryOption" type="radio" defaultValue="home"/>
<label className="form-check-label fs-base" htmlFor="radioHome">Home Delivery</label>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Reverse</label>
</div>
<div className="col-lg-8">
<div className="w-lg-50">
<div className="form-check form-check-reverse mb-2">
<input defaultChecked className="form-check-input" id="reverseCheck1" type="checkbox" defaultValue=""/>
<label className="form-check-label" htmlFor="reverseCheck1">Reverse checkbox</label>
</div>
<div className="form-check form-check-reverse mb-2">
<input className="form-check-input" id="reverseCheck2" type="radio" defaultValue=""/>
<label className="form-check-label" htmlFor="reverseCheck2">Disabled reverse radio</label>
</div>
<div className="form-check form-switch form-check-reverse">
<input defaultChecked className="form-check-input" id="switchCheckReverse" type="checkbox"/>
<label className="form-check-label" htmlFor="switchCheckReverse">Reverse switch checkbox input</label>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Colored Radios</label>
</div>
<div className="col-lg-8">
<div className="d-flex flex-wrap gap-4">
<div>
<div className="form-check form-check-primary mb-2">
<input defaultChecked className="form-check-input" id="radioPrimary" name="radioPrimary" type="radio"/>
<label className="form-check-label" htmlFor="radioPrimary">Primary</label>
</div>
<div className="form-check form-check-secondary mb-2">
<input defaultChecked className="form-check-input" id="radioSecondary" name="radioSecondary" type="radio"/>
<label className="form-check-label" htmlFor="radioSecondary">Secondary</label>
</div>
<div className="form-check form-check-success mb-2">
<input defaultChecked className="form-check-input" id="radioSuccess" name="radioSuccess" type="radio"/>
<label className="form-check-label" htmlFor="radioSuccess">Success</label>
</div>
<div className="form-check form-check-info mb-2">
<input defaultChecked className="form-check-input" id="radioInfo" name="radioInfo" type="radio"/>
<label className="form-check-label" htmlFor="radioInfo">Info</label>
</div>
</div>
<div>
<div className="form-check form-check-warning mb-2">
<input defaultChecked className="form-check-input" id="radioWarning" name="radioWarning" type="radio"/>
<label className="form-check-label" htmlFor="radioWarning">Warning</label>
</div>
<div className="form-check form-check-danger mb-2">
<input defaultChecked className="form-check-input" id="radioDanger" name="radioDanger" type="radio"/>
<label className="form-check-label" htmlFor="radioDanger">Danger</label>
</div>
<div className="form-check form-check-dark">
<input defaultChecked className="form-check-input" id="radioDark" name="radioDark" type="radio"/>
<label className="form-check-label" htmlFor="radioDark">Dark</label>
</div>
</div>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Checkbox Toggle</label>
</div>
<div className="col-lg-8">
<div className="mb-2">
<input className="btn-check" id="btncheck1" type="checkbox"/>
<label className="btn btn-outline-primary" htmlFor="btncheck1">Single Toggle</label>
</div>
<div aria-label="Checkbox toggle group" className="btn-group" role="group">
<input className="btn-check" id="btncheck2" type="checkbox"/>
<label className="btn btn-outline-primary" htmlFor="btncheck2">One</label>
<input className="btn-check" id="btncheck3" type="checkbox"/>
<label className="btn btn-outline-primary" htmlFor="btncheck3">Two</label>
<input className="btn-check" id="btncheck4" type="checkbox"/>
<label className="btn btn-outline-primary" htmlFor="btncheck4">Three</label>
</div>
</div>
</div>
<div className="border-top border-dashed my-3"></div>

<div className="row g-lg-4 g-2">
<div className="col-lg-4">
<label className="col-form-label">Radio Toggle</label>
</div>
<div className="col-lg-8">
<div aria-label="Radio toggle group" className="btn-group" role="group">
<input defaultChecked className="btn-check" id="btnradio1" name="btnradio" type="radio"/>
<label className="btn btn-outline-secondary" htmlFor="btnradio1">Left</label>
<input className="btn-check" id="btnradio2" name="btnradio" type="radio"/>
<label className="btn btn-outline-secondary" htmlFor="btnradio2">Middle</label>
<input className="btn-check" id="btnradio3" name="btnradio" type="radio"/>
<label className="btn btn-outline-secondary" htmlFor="btnradio3">Right</label>
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
    </div>
  );
};
