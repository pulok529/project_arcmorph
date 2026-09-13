import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ButtonsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Buttons" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Default Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use any of the available
                                        <code>&lt;a&gt;</code>
                                        ,
                                        <code>&lt;button&gt;</code>
                                        , or
                                        <code>&lt;input&gt;</code>
                                        classes
                                        <code>.btn</code>
                                        to quickly create a styled button.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-default" type="button">Default</button>
<button className="btn btn-primary" type="button">Primary</button>
<button className="btn btn-secondary" type="button">Secondary</button>
<button className="btn btn-success" type="button">Success</button>
<button className="btn btn-danger" type="button">Danger</button>
<button className="btn btn-warning" type="button">Warning</button>
<button className="btn btn-info" type="button">Info</button>
<button className="btn btn-light" type="button">Light</button>
<button className="btn btn-dark" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Rounded</h4>
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
                                        <code>.rounded-pill</code>
                                        with a default button to give it pill-shaped rounded corners.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-default rounded-pill" type="button">Default</button>
<button className="btn btn-primary rounded-pill" type="button">Primary</button>
<button className="btn btn-secondary rounded-pill" type="button">Secondary</button>
<button className="btn btn-success rounded-pill" type="button">Success</button>
<button className="btn btn-danger rounded-pill" type="button">Danger</button>
<button className="btn btn-warning rounded-pill" type="button">Warning</button>
<button className="btn btn-info rounded-pill" type="button">Info</button>
<button className="btn btn-light rounded-pill" type="button">Light</button>
<button className="btn btn-dark rounded-pill" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Outline</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.btn-outline-**</code>
                                        classes to quickly create buttons with borders.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-outline-primary" type="button">Primary</button>
<button className="btn btn-outline-secondary" type="button">Secondary</button>
<button className="btn btn-outline-success" type="button">Success</button>
<button className="btn btn-outline-danger" type="button">Danger</button>
<button className="btn btn-outline-warning" type="button">Warning</button>
<button className="btn btn-outline-info" type="button">Info</button>
<button className="btn btn-outline-light" type="button">Light</button>
<button className="btn btn-outline-dark" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Outline Rounded</h4>
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
                                        <code>.rounded-pill</code>
                                        with an outline button to give it pill-shaped rounded corners.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-outline-primary rounded-pill" type="button">Primary</button>
<button className="btn btn-outline-secondary rounded-pill" type="button">Secondary</button>
<button className="btn btn-outline-success rounded-pill" type="button">Success</button>
<button className="btn btn-outline-danger rounded-pill" type="button">Danger</button>
<button className="btn btn-outline-warning rounded-pill" type="button">Warning</button>
<button className="btn btn-outline-info rounded-pill" type="button">Info</button>
<button className="btn btn-outline-light rounded-pill" type="button">Light</button>
<button className="btn btn-outline-dark rounded-pill" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Soft Buttons</h4>
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
                                        <code>btn-soft-**</code>
                                        class with the below-mentioned variation to create a button with the soft background.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-soft-primary" type="button">Primary</button>
<button className="btn btn-soft-secondary" type="button">Secondary</button>
<button className="btn btn-soft-success" type="button">Success</button>
<button className="btn btn-soft-danger" type="button">Danger</button>
<button className="btn btn-soft-warning" type="button">Warning</button>
<button className="btn btn-soft-info" type="button">Info</button>
<button className="btn btn-soft-dark" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Soft Rounded Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>btn-soft-**</code>
                                        class along with
                                        <code>.rounded-pill</code>
                                        to create a softly styled button with rounded corners.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-soft-primary rounded-pill" type="button">Primary</button>
<button className="btn btn-soft-secondary rounded-pill" type="button">Secondary</button>
<button className="btn btn-soft-success rounded-pill" type="button">Success</button>
<button className="btn btn-soft-danger rounded-pill" type="button">Danger</button>
<button className="btn btn-soft-warning rounded-pill" type="button">Warning</button>
<button className="btn btn-soft-info rounded-pill" type="button">Info</button>
<button className="btn btn-soft-dark rounded-pill" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Ghost Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>btn-ghost-**</code>
                                        class to create buttons with a transparent background that highlight with color on hover.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-ghost-primary" type="button">Primary</button>
<button className="btn btn-ghost-secondary" type="button">Secondary</button>
<button className="btn btn-ghost-success" type="button">Success</button>
<button className="btn btn-ghost-danger" type="button">Danger</button>
<button className="btn btn-ghost-warning" type="button">Warning</button>
<button className="btn btn-ghost-info" type="button">Info</button>
<button className="btn btn-ghost-dark" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Ghost Rounded Buttons</h4>
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
                                        <code>btn-ghost-**</code>
                                        with
                                        <code>.rounded-pill</code>
                                        for rounded ghost buttons that highlight on hover.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-ghost-primary rounded-pill" type="button">Primary</button>
<button className="btn btn-ghost-secondary rounded-pill" type="button">Secondary</button>
<button className="btn btn-ghost-success rounded-pill" type="button">Success</button>
<button className="btn btn-ghost-danger rounded-pill" type="button">Danger</button>
<button className="btn btn-ghost-warning rounded-pill" type="button">Warning</button>
<button className="btn btn-ghost-info rounded-pill" type="button">Info</button>
<button className="btn btn-ghost-dark rounded-pill" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Gradient Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.bg-gradient</code>
                                        class to apply a gradient style to buttons.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-default bg-gradient" type="button">Default</button>
<button className="btn btn-primary bg-gradient" type="button">Primary</button>
<button className="btn btn-secondary bg-gradient" type="button">Secondary</button>
<button className="btn btn-success bg-gradient" type="button">Success</button>
<button className="btn btn-danger bg-gradient" type="button">Danger</button>
<button className="btn btn-warning bg-gradient" type="button">Warning</button>
<button className="btn btn-info bg-gradient" type="button">Info</button>
<button className="btn btn-light bg-gradient" type="button">Light</button>
<button className="btn btn-dark bg-gradient" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Gradient Rounded Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.bg-gradient</code>
                                        and
                                        <code>.rounded-pill</code>
                                        classes to apply a gradient style with rounded edges to buttons.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-default rounded-pill bg-gradient" type="button">Default</button>
<button className="btn btn-primary rounded-pill bg-gradient" type="button">Primary</button>
<button className="btn btn-secondary rounded-pill bg-gradient" type="button">Secondary</button>
<button className="btn btn-success rounded-pill bg-gradient" type="button">Success</button>
<button className="btn btn-danger rounded-pill bg-gradient" type="button">Danger</button>
<button className="btn btn-warning rounded-pill bg-gradient" type="button">Warning</button>
<button className="btn btn-info rounded-pill bg-gradient" type="button">Info</button>
<button className="btn btn-light rounded-pill bg-gradient" type="button">Light</button>
<button className="btn btn-dark rounded-pill bg-gradient" type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Sizes</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Want larger or smaller buttons? Use
                                        <code>.btn-lg</code>
                                        or
                                        <code>.btn-sm</code>
                                        to adjust the button size.
                                    </p>
<div className="d-flex flex-wrap align-items-center gap-2">
<button className="btn btn-primary btn-lg" type="button">Large</button>
<button className="btn btn-info" type="button">Normal</button>
<button className="btn btn-success btn-sm" type="button">Small</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Disabled Buttons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>disabled</code>
                                        attribute on a
                                        <code>&lt;button&gt;</code>
                                        to make it inactive and non-interactive.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-info" disabled type="button">Info</button>
<button className="btn btn-success" disabled type="button">Success</button>
<button className="btn btn-danger" disabled type="button">Danger</button>
<button className="btn btn-dark" disabled type="button">Dark</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Block Button</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted font-14">
                                        To create block-level buttons, add the
                                        <code>.d-grid</code>
                                        class to the parent
                                        <code>&lt;div&gt;</code>
                                        .
                                    </p>
<div className="d-grid gap-2">
<button className="btn btn-sm btn-primary" type="button">Block Button</button>
<button className="btn btn-lg btn-success" type="button">Block Button</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Toggle Button</h4>
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
                                        <code>data-bs-toggle="button"</code>
                                        to toggle a button’s
                                        <code>active</code>
                                        state. For pre-toggled buttons, also add
                                        <code>.active</code>
                                        and
                                        <code>aria-pressed="true"</code>
                                        .
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-primary" data-bs-toggle="button" type="button">Toggle button</button>
<button aria-pressed="true" className="btn btn-primary active" data-bs-toggle="button" type="button">Active toggle button</button>
<button className="btn btn-primary" data-bs-toggle="button" disabled type="button">Disabled toggle button</button>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Icon Buttons</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Icon only button. Use it when you want a button with just an icon and no text, ideal for compact UI elements or toolbars.</p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-primary btn-icon" type="button">
<i className="ti ti-star fs-xl"></i>
</button>
<button className="btn btn-secondary btn-icon" type="button">
<i className="ti ti-leaf fs-xl"></i>
</button>
<button className="btn btn-warning btn-icon" type="button">
<i className="ti ti-settings fs-xl"></i>
</button>
<button className="btn btn-soft-info rounded-circle btn-icon" type="button">
<i className="ti ti-bell fs-xl"></i>
</button>
<button className="btn btn-secondary rounded-circle btn-icon" type="button">
<i className="ti ti-rocket fs-xl"></i>
</button>
<button className="btn btn-outline-dark rounded-circle btn-icon" type="button">
<i className="ti ti-plane fs-xl"></i>
</button>
<button className="btn btn-soft-secondary btn-icon" type="button">
<i className="ti ti-microphone fs-xl"></i>
</button>
<button className="btn btn-light" type="button">
<i className="ti ti-hand-stop fs-xl me-1"></i>
                                            Stop
                                        </button>
<button className="btn btn-dark" type="button">
<i className="ti ti-bolt fs-xl me-1"></i>
                                            Boost
                                        </button>
<button className="btn btn-outline-info" type="button">
<i className="ti ti-credit-card fs-xl me-1"></i>
                                            Payment
                                        </button>
<button className="btn btn-danger" type="button">
<i className="ti ti-tools fs-xl me-1"></i>
                                            Tools
                                        </button>
</div>
<div className="d-flex flex-wrap gap-2 mt-3">
<button className="btn btn-sm btn-outline-secondary btn-icon" type="button">
<i className="ti ti-star"></i>
</button>
<button className="btn btn-sm btn-primary btn-icon" type="button">
<i className="ti ti-leaf"></i>
</button>
<button className="btn btn-sm btn-success btn-icon rounded-circle" type="button">
<i className="ti ti-settings"></i>
</button>

<button className="btn btn-outline-secondary btn-icon btn-lg" type="button">
<i className="ti ti-bell fs-xxl"></i>
</button>
<button className="btn btn-primary btn-icon btn-lg rounded-circle" type="button">
<i className="ti ti-rocket fs-xxl"></i>
</button>
<button className="btn btn-success btn-icon btn-lg rounded-circle" type="button">
<i className="ti ti-share fs-xxl"></i>
</button>
<button className="btn btn-info btn-icon btn-lg" type="button">
<i className="ti ti-star fs-xxl"></i>
</button>
<button className="btn btn-warning btn-icon btn-lg" type="button">
<i className="ti ti-alert-octagon fs-xxl"></i>
</button>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Tags</h4>
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
                                        <code>.btn</code>
                                        classes with
                                        <code>&lt;button&gt;</code>
                                        ,
                                        <code>&lt;a&gt;</code>
                                        , or
                                        <code>&lt;input&gt;</code>
                                        elements, though rendering may vary slightly across browsers.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<a className="btn btn-primary" href="#" role="button">Link</a>
<button className="btn btn-primary" type="submit">Button</button>
<input className="btn btn-primary" type="button" defaultValue="Input"/>
<input className="btn btn-primary" type="submit" defaultValue="Submit"/>
<input className="btn btn-primary" type="reset" defaultValue="Reset"/>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Button Group</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Group multiple buttons together by wrapping them with the
                                        <code>.btn</code>
                                        class inside a
                                        <code>.btn-group</code>
                                        container. This helps align buttons side by side with consistent spacing and styling.
                                    </p>
<div className="btn-group mb-2">
<button className="btn btn-light" type="button">Left</button>
<button className="btn btn-light" type="button">Middle</button>
<button className="btn btn-light" type="button">Right</button>
</div>
<br/>
<div className="btn-group mb-2">
<button className="btn btn-light" type="button">1</button>
<button className="btn btn-light" type="button">2</button>
<button className="btn btn-light" type="button">3</button>
<button className="btn btn-light" type="button">4</button>
</div>
<div className="btn-group mb-2">
<button className="btn btn-light" type="button">5</button>
<button className="btn btn-light" type="button">6</button>
<button className="btn btn-light" type="button">7</button>
</div>
<div className="btn-group mb-2">
<button className="btn btn-light" type="button">8</button>
</div>
<br/>
<div className="btn-group mb-2">
<button className="btn btn-light" type="button">1</button>
<button className="btn btn-primary" type="button">2</button>
<button className="btn btn-light" type="button">3</button>
<div className="btn-group">
<button aria-expanded={false} className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" type="button">
                                                Dropdown
                                                <span className="caret"></span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Dropdown link</a>
<a className="dropdown-item" href="#">Dropdown link</a>
</div>
</div>
</div>
<div className="row">
<div className="col-md-3">
<div className="btn-group-vertical mb-2">
<button className="btn btn-light" type="button">Top</button>
<button className="btn btn-light" type="button">Middle</button>
<button className="btn btn-light" type="button">Bottom</button>
</div>
</div>
<div className="col-md-3">
<div className="btn-group-vertical mb-2">
<button className="btn btn-light" type="button">Button 1</button>
<button className="btn btn-light" type="button">Button 2</button>
<button aria-expanded={false} className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" type="button">
                                                    Button 3
                                                    <span className="caret"></span>
</button>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">Dropdown link</a>
<a className="dropdown-item" href="#">Dropdown link</a>
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
