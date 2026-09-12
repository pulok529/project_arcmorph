import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ListGroupPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="List Group" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Basic Example</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
<ul className="list-group">
<li className="list-group-item">Dropbox Cloud Storage</li>
<li className="list-group-item">Slack Team Collaboration</li>
<li className="list-group-item">Microsoft Windows OS</li>
<li className="list-group-item">Zendesk Customer Support</li>
<li className="list-group-item">Stripe Payment Integration</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Active Items</h4>
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
                                        to a
                                        <code>.list-group-item</code>
                                        to indicate the current active selection.
                                    </p>
<ul className="list-group">
<li className="list-group-item active">GitHub Repository</li>
<li className="list-group-item">Figma Design Tool</li>
<li className="list-group-item">Notion Workspace</li>
<li className="list-group-item">Trello Task Manager</li>
<li className="list-group-item">DigitalOcean Cloud</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Disabled Items</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p>
                                        Add
                                        <code>.disabled</code>
                                        to a
                                        <code>.list-group-item</code>
                                        to make it
                                        <em>appear</em>
                                        disabled.
                                    </p>
<ul className="list-group">
<li aria-disabled className="list-group-item disabled">Dropbox Cloud Storage</li>
<li className="list-group-item">Slack Team Collaboration</li>
<li className="list-group-item">Microsoft Windows OS</li>
<li className="list-group-item">Zendesk Customer Support</li>
<li className="list-group-item">Stripe Payment Integration</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Links and Buttons</h4>
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
                                        <code>&lt;a&gt;</code>
                                        s or
                                        <code>&lt;button&gt;</code>
                                        s to create
                                        <em>actionable</em>
                                        list group items with hover, disabled, and active states by adding
                                        <code>.list-group-item-action</code>
                                        .
                                    </p>
<div className="list-group">
<a className="list-group-item list-group-item-action active" href="#">Stripe Payment Integration</a>
<a className="list-group-item list-group-item-action" href="#">Dropbox Cloud Service</a>
<button className="list-group-item list-group-item-action" type="button">Slack Communication</button>
<button className="list-group-item list-group-item-action" type="button">Notion Productivity App</button>
<a className="list-group-item list-group-item-action disabled" href="#" tabIndex={-1}>Zendesk Support Tool</a>
</div>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Flush</h4>
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
                                        <code>.list-group-flush</code>
                                        to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
                                    </p>
<ul className="list-group list-group-flush">
<li className="list-group-item">Slack Collaboration Tool</li>
<li className="list-group-item">Dropbox Cloud Storage</li>
<li className="list-group-item">Notion Workspace Organizer</li>
<li className="list-group-item">Zendesk Customer Support</li>
<li className="list-group-item">Stripe Payment Processor</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Horizontal</h4>
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
                                        <code>.list-group-horizontal</code>
                                        to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant
                                        <code>.list-group-horizontal-&amp;#123;sm|md|lg|xl&amp;#125;</code>
                                        to make a list group horizontal starting at that breakpoint’s
                                        <code>min-width</code>
                                        .
                                    </p>
<ul className="list-group list-group-horizontal mb-3">
<li className="list-group-item">Slack</li>
<li className="list-group-item">Notion</li>
<li className="list-group-item">Dropbox</li>
</ul>
<ul className="list-group list-group-horizontal-sm mb-3">
<li className="list-group-item">Figma</li>
<li className="list-group-item">Stripe</li>
<li className="list-group-item">Zendesk</li>
</ul>
<ul className="list-group list-group-horizontal-md">
<li className="list-group-item">Trello</li>
<li className="list-group-item">Asana</li>
<li className="list-group-item">ClickUp</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Contextual Classes</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Use contextual classes to style list items with a stateful background and color.</p>
<ul className="list-group">
<li className="list-group-item">Dapibus ac facilisis in</li>
<li className="list-group-item list-group-item-primary">A simple primary list group item</li>
<li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
<li className="list-group-item list-group-item-success">A simple success list group item</li>
<li className="list-group-item list-group-item-danger">A simple danger list group item</li>
<li className="list-group-item list-group-item-warning">A simple warning list group item</li>
<li className="list-group-item list-group-item-info">A simple info list group item</li>
<li className="list-group-item list-group-item-light">A simple light list group item</li>
<li className="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Contextual Classes with Link</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Use contextual classes to style list items with a stateful background and color.</p>
<div className="list-group">
<a className="list-group-item list-group-item-action" href="#">Darius ac facilities in</a>
<a className="list-group-item list-group-item-action list-group-item-primary" href="#">A simple primary list group item</a>
<a className="list-group-item list-group-item-action list-group-item-secondary" href="#">A simple secondary list group item</a>
<a className="list-group-item list-group-item-action list-group-item-success" href="#">A simple success list group item</a>
<a className="list-group-item list-group-item-action list-group-item-danger" href="#">A simple danger list group item</a>
<a className="list-group-item list-group-item-action list-group-item-warning" href="#">A simple warning list group item</a>
<a className="list-group-item list-group-item-action list-group-item-info" href="#">A simple info list group item</a>
<a className="list-group-item list-group-item-action list-group-item-light" href="#">A simple light list group item</a>
<a className="list-group-item list-group-item-action list-group-item-dark" href="#">A simple dark list group item</a>
</div>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom Content</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</p>
<div className="list-group">
<a className="list-group-item list-group-item-action active" href="#">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2">List group item heading</h5>
<small>3 days ago</small>
</div>
<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small>Donec id elit non mi porta.</small>
</a>
<a className="list-group-item list-group-item-action" href="#">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2">List group item heading</h5>
<small className="text-muted">3 days ago</small>
</div>
<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small className="text-muted">Donec id elit non mi porta.</small>
</a>
<a className="list-group-item list-group-item-action" href="#">
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2">List group item heading</h5>
<small className="text-muted">3 days ago</small>
</div>
<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small className="text-muted">Donec id elit non mi porta.</small>
</a>
</div>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">With Badges</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.</p>
<ul className="list-group">
<li className="list-group-item d-flex justify-content-between align-items-center">
                                            Gmail Notifications
                                            <span className="badge bg-primary rounded-pill">14</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
                                            Unprocessed Orders
                                            <span className="badge bg-success rounded-pill">2</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
                                            Urgent Tickets
                                            <span className="badge bg-danger rounded-pill">99+</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
                                            Completed Transactions
                                            <span className="badge bg-success rounded-pill">20+</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-center">
                                            Invoices Awaiting Approval
                                            <span className="badge bg-warning rounded-pill">12</span>
</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Checkboxes and Radios</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without
                                        <code>&lt;label&gt;</code>
                                        s, but please remember to include an
                                        <code>aria-label</code>
                                        attribute and value for accessibility.
                                    </p>
<ul className="list-group">
<li className="list-group-item">
<input className="form-check-input me-1" id="newsletterCheckbox" type="checkbox" defaultValue=""/>
<label className="form-check-label" htmlFor="newsletterCheckbox">Subscribe to newsletter</label>
</li>
<li className="list-group-item">
<input className="form-check-input me-1" id="termsCheckbox" type="checkbox" defaultValue=""/>
<label className="form-check-label" htmlFor="termsCheckbox">Accept terms and conditions</label>
</li>
</ul>
<ul className="list-group mt-2">
<li className="list-group-item">
<input defaultChecked className="form-check-input me-1" id="emailRadio" name="notificationOptions" type="radio" defaultValue=""/>
<label className="form-check-label" htmlFor="emailRadio">Notify by Email</label>
</li>
<li className="list-group-item">
<input className="form-check-input me-1" id="smsRadio" name="notificationOptions" type="radio" defaultValue=""/>
<label className="form-check-label" htmlFor="smsRadio">Notify by SMS</label>
</li>
</ul>
</div>

</div>

</div>

<div className="col-xl-4">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Numbered</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Numbers are generated by
                                        <code>counter-reset</code>
                                        on the
                                        <code>&lt;ol&gt;</code>
                                        , and then styled and placed with a
                                        <code>::before</code>
                                        psuedo-element on the
                                        <code>&lt;li&gt;</code>
                                        with
                                        <code>counter-increment</code>
                                        and
                                        <code>content</code>
                                        .
                                    </p>
<ol className="list-group list-group-numbered">
<li className="list-group-item d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Admin Dashboard Pro</div>
                                                A premium admin dashboard with modern UI components.
                                            </div>
<span className="badge bg-primary rounded-pill">865</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Vue Admin Lite</div>
                                                Clean and minimal admin panel built with Vue.js.
                                            </div>
<span className="badge bg-primary rounded-pill">140</span>
</li>
<li className="list-group-item d-flex justify-content-between align-items-start">
<div className="ms-2 me-auto">
<div className="fw-bold">Angular Admin Panel</div>
                                                Lightweight and powerful Angular-based admin template.
                                            </div>
<span className="badge bg-primary rounded-pill">85</span>
</li>
</ol>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
