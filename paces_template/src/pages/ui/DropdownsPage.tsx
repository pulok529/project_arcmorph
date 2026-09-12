import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const DropdownsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Dropdowns" category="Base UI" />

      <div className="module-content-body">
<div className="row">

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Single Button Dropdowns</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Any single
                                        <code>.btn</code>
                                        can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either
                                        <code>&lt;button&gt;</code>
                                        elements:
                                    </p>
<div className="row">
<div className="col-auto">

<div className="dropdown">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton" type="button">Choose Option</button>
<div aria-labelledby="dropdownMenuButton" className="dropdown-menu">
<a className="dropdown-item" href="#">Profile Settings</a>
<a className="dropdown-item" href="#">Notifications</a>
<a className="dropdown-item" href="#">Logout</a>
</div>
</div>
</div>
<div className="col-auto">

<div className="dropdown">
<a aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownMenuLink" role="button">Quick Actions</a>
<div aria-labelledby="dropdownMenuLink" className="dropdown-menu">
<a className="dropdown-item" href="#">Create New</a>
<a className="dropdown-item" href="#">Upload File</a>
<a className="dropdown-item" href="#">View Reports</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Menu Alignment</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.dropdown-menu-end</code>
                                        to a
                                        <code>.dropdown-menu</code>
                                        to right align the dropdown menu.
                                    </p>
<div className="dropdown">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" type="button">Right-aligned menu</button>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom Dropdown Arrow</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Any single
                                        <code>.btn</code>
                                        can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either
                                        <code>&lt;button&gt;</code>
                                        elements:
                                    </p>
<div className="row">
<div className="col-auto">

<div className="dropdown">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" id="dropdownMenuButton1" type="button">Without Arrow</button>
<div aria-labelledby="dropdownMenuButton1" className="dropdown-menu">
<a className="dropdown-item" href="#">Download Report</a>
<a className="dropdown-item" href="#">View Analytics</a>
<a className="dropdown-item" href="#">Export Data</a>
</div>
</div>
</div>
<div className="col-auto">

<div className="dropdown">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-outline-primary dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" id="dropdownMenuButton2" type="button">
                                                    Custom Icon
                                                    <i className="ti ti-chevron-down ms-1"></i>
</button>
<div aria-labelledby="dropdownMenuButton2" className="dropdown-menu">
<a className="dropdown-item" href="#">Edit Profile</a>
<a className="dropdown-item" href="#">Account Settings</a>
<a className="dropdown-item" href="#">Sign Out</a>
</div>
</div>
</div>
</div>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Split Button Dropdowns</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of
                                        <code>.dropdown-toggle-split</code>
                                        for proper spacing around the dropdown caret.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<div className="btn-group">

<button className="btn btn-primary" type="button">Primary</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle dropdown-toggle-split drop-arrow-none" data-bs-toggle="dropdown" type="button">
<i className="ti ti-chevron-down"></i>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

<div className="btn-group">

<button className="btn btn-light" type="button">Secondary</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle dropdown-toggle-split drop-arrow-none" data-bs-toggle="dropdown" type="button">
<i className="ti ti-chevron-down"></i>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

<div className="btn-group">

<button className="btn btn-soft-success" type="button">Success</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-soft-success dropdown-toggle dropdown-toggle-split drop-arrow-none" data-bs-toggle="dropdown" type="button">
<i className="ti ti-chevron-down"></i>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

<div className="btn-group">

<button className="btn btn-info" type="button">Info</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropdown</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Variant</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">The best part is you can do this with any button variant, too:</p>
<div className="d-flex flex-wrap gap-2">
<div className="btn-group">

<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">Primary</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Create New</a>
<a className="dropdown-item" href="#">Save Changes</a>
<a className="dropdown-item" href="#">Publish Now</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">View Drafts</a>
</div>
</div>

<div className="btn-group">

<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" type="button">Secondary</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Settings</a>
<a className="dropdown-item" href="#">Preferences</a>
<a className="dropdown-item" href="#">Account Info</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Logout</a>
</div>
</div>

<div className="btn-group">

<button aria-expanded={false} aria-haspopup="true" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" type="button">Success</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Mark as Complete</a>
<a className="dropdown-item" href="#">Download Report</a>
<a className="dropdown-item" href="#">Submit Review</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Archive Task</a>
</div>
</div>

</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Sizing</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
<div className="d-flex flex-wrap gap-2">

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light btn-lg dropdown-toggle" data-bs-toggle="dropdown" type="button">Large button</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
<div className="btn-group">
<button className="btn btn-light btn-lg" type="button">Large button</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropdown</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown" type="button">Small button</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
<div className="btn-group">
<button className="btn btn-light btn-sm" type="button">Small button</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropdown</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dropup Variation</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Trigger dropdown menus above elements by adding
                                        <code>.dropup</code>
                                        to the parent element.
                                    </p>
<div className="d-flex flex-wrap gap-2">

<div className="btn-group dropup">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" type="button">Dropup</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Upload File</a>
<a className="dropdown-item" href="#">Sync Data</a>
<a className="dropdown-item" href="#">Import from CSV</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Advanced Settings</a>
</div>
</div>

<div className="btn-group dropup">
<button className="btn btn-light" type="button">Split dropup</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropdown</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">New Task</a>
<a className="dropdown-item" href="#">Assign User</a>
<a className="dropdown-item" href="#">Set Deadline</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Project Settings</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dropstart Variation</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Trigger dropdown menus to the left of the elements by adding
                                        <code>.dropstart</code>
                                        to the parent element.
                                    </p>
<div className="d-flex flex-wrap gap-2">

<div className="btn-group dropstart">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Dropstart</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>

<div className="btn-group">
<div className="btn-group dropstart" role="group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropstart</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
<button className="btn btn-secondary" type="button">Split dropstart</button>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dropend Variation</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Trigger dropdown menus to the right of the elements by adding
                                        <code>.dropend</code>
                                        to the parent element.
                                    </p>
<div className="d-flex flex-wrap gap-2">

<div className="btn-group dropend">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">Dropend</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">View Profile</a>
<a className="dropdown-item" href="#">Message User</a>
<a className="dropdown-item" href="#">Report Issue</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Block User</a>
</div>
</div>

<div className="btn-group dropend">
<button className="btn btn-primary" type="button">Split Dropend</button>
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle-split dropdown-toggle" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropright</span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">New Invoice</a>
<a className="dropdown-item" href="#">Send Reminder</a>
<a className="dropdown-item" href="#">Duplicate</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Delete Invoice</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Active Item</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.active</code>
                                        to item in the dropdown to
                                        <strong>style them as active</strong>
                                        .
                                    </p>

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Active Item</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Regular link</a>
<a className="dropdown-item active" href="#">Active link</a>
<a className="dropdown-item" href="#">Another link</a>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Disabled Item</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.disabled</code>
                                        to items in the dropdown to
                                        <strong>style them as disabled</strong>
                                        .
                                    </p>

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">Disabled</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Regular link</a>
<a className="dropdown-item disabled" href="#" tabIndex={-1}>Disabled link</a>
<a className="dropdown-item" href="#">Another link</a>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Headers</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Add a header to label sections of actions in any dropdown menu.</p>

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Header</button>
<div className="dropdown-menu">
<h6 className="dropdown-header">Dropdown header</h6>
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dark Dropdowns</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Opt into darker dropdowns to match a dark navbar or custom style by adding
                                        <code>.dropdown-menu-dark</code>
                                        onto an existing
                                        <code>.dropdown-menu</code>
                                        . No changes are required to the dropdown items.
                                    </p>
<div className="dropdown">
<button aria-expanded={false} className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" type="button">Dark Dropdown</button>
<ul className="dropdown-menu" data-bs-theme="dark">
<li>
<a className="dropdown-item active" href="#">Dashboard</a>
</li>
<li><a className="dropdown-item" href="#">My Orders</a></li>
<li>
<a className="dropdown-item" href="#">Billing Settings</a>
</li>
<li>
<hr className="dropdown-divider"/>
</li>
<li><a className="dropdown-item" href="#">Logout</a></li>
</ul>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Centered Dropdowns</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Make the dropdown menu centered below the toggle with
                                        <code>.dropdown-center</code>
                                        on the parent element.
                                    </p>
<div className="hstack gap-2">
<div className="dropdown-center">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Centered dropdown</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Action</a>
</li>
<li>
<a className="dropdown-item" href="#">Action two</a>
</li>
<li>
<a className="dropdown-item" href="#">Action three</a>
</li>
</ul>
</div>
<div className="dropup-center dropup">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Centered dropup</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Action</a>
</li>
<li>
<a className="dropdown-item" href="#">Action two</a>
</li>
<li>
<a className="dropdown-item" href="#">Action three</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dropdown Options</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>data-bs-offset</code>
                                        or
                                        <code>data-bs-reference</code>
                                        to change the location of the dropdown.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<div className="dropdown">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-offset="10,20" data-bs-toggle="dropdown" type="button">Offset</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Profile Settings</a>
</li>
<li>
<a className="dropdown-item" href="#">Privacy Settings</a>
</li>
<li>
<a className="dropdown-item" href="#">Notification Preferences</a>
</li>
</ul>
</div>
<div className="btn-group">
<button className="btn btn-secondary" type="button">Reference</button>
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-reference="parent" data-bs-toggle="dropdown" type="button">
<span className="visually-hidden">Toggle Dropdown</span>
</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Manage Subscription</a>
</li>
<li>
<a className="dropdown-item" href="#">Account Preferences</a>
</li>
<li>
<a className="dropdown-item" href="#">Help &amp; Support</a>
</li>
<li>
<hr className="dropdown-divider"/>
</li>
<li>
<a className="dropdown-item" href="#">Log Out</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Auto Close Behavior</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the
                                        <code>autoClose</code>
                                        option to change this behavior of the dropdown.
                                    </p>
<div className="hstack gap-2">
<div className="btn-group">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-auto-close="true" data-bs-toggle="dropdown" type="button">Default dropdown</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
</ul>
</div>
<div className="btn-group">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-auto-close="inside" data-bs-toggle="dropdown" type="button">Clickable inside</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
</ul>
</div>
<div className="btn-group">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" type="button">Clickable outside</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
</ul>
</div>
<div className="btn-group">
<button aria-expanded={false} className="btn btn-secondary dropdown-toggle" data-bs-auto-close="false" data-bs-toggle="dropdown" type="button">Manual close</button>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
<li>
<a className="dropdown-item" href="#">Menu item</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Text</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional sizing styles to constrain the menu width.</p>

<div className="btn-group">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">Text Dropdown</button>
<div className="dropdown-menu p-3 text-muted" style={{ maxWidth: '200px' }}>
<p>Some example text that's free-flowing within the dropdown menu.</p>
<p className="mb-0">And this is more example text.</p>
</div>
</div>
</div>
</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Forms</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require.</p>

<div className="dropdown">
<button aria-expanded={false} aria-haspopup="true" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">Form</button>
<div className="dropdown-menu">
<form className="px-4 py-3">
<div className="mb-3">
<label className="form-label" htmlFor="exampleDropdownFormEmail1">Email address</label>
<input className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" type="email"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="exampleDropdownFormPassword1">Password</label>
<input className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" type="password"/>
</div>
<div className="mb-2">
<div className="form-check">
<input className="form-check-input" id="dropdownCheck" type="checkbox"/>
<label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
</div>
</div>
<button className="btn btn-primary" type="submit">Sign in</button>
</form>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">New around here? Sign up</a>
<a className="dropdown-item" href="#">Forgot password?</a>
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
