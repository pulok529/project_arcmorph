import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const BadgesPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Badges" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Basic Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.badge</code>
                                        &amp;
                                        <code>.text-bg-*</code>
                                        classes to make badges.
                                    </p>
<span className="badge badge-default">Default</span>
<span className="badge text-bg-primary">Primary</span>
<span className="badge text-bg-secondary">Secondary</span>
<span className="badge text-bg-success">Success</span>
<span className="badge text-bg-danger">Danger</span>
<span className="badge text-bg-warning">Warning</span>
<span className="badge text-bg-info">Info</span>
<span className="badge text-bg-light">Light</span>
<span className="badge text-bg-dark">Dark</span>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Basic Pill Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.rounded-pill</code>
                                        modifier class to make badges more rounded.
                                    </p>
<span className="badge badge-default rounded-pill">Default</span>
<span className="badge text-bg-primary rounded-pill">Primary</span>
<span className="badge text-bg-secondary rounded-pill">Secondary</span>
<span className="badge text-bg-success rounded-pill">Success</span>
<span className="badge text-bg-danger rounded-pill">Danger</span>
<span className="badge text-bg-warning rounded-pill">Warning</span>
<span className="badge text-bg-info rounded-pill">Info</span>
<span className="badge text-bg-light rounded-pill">Light</span>
<span className="badge text-bg-dark rounded-pill">Dark</span>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Outline Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Using the
                                        <code>.badge-outline-*</code>
                                        to quickly create a bordered badges.
                                    </p>
<span className="badge badge-outline-primary">Primary</span>
<span className="badge badge-outline-secondary">Secondary</span>
<span className="badge badge-outline-success">Success</span>
<span className="badge badge-outline-danger">Danger</span>
<span className="badge badge-outline-warning">Warning</span>
<span className="badge badge-outline-info">Info</span>
<span className="badge badge-outline-dark">Dark</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Outline Pill Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.rounded-pill</code>
                                        modifier class to make badges more rounded.
                                    </p>
<span className="badge badge-outline-primary rounded-pill">Primary</span>
<span className="badge badge-outline-secondary rounded-pill">Secondary</span>
<span className="badge badge-outline-success rounded-pill">Success</span>
<span className="badge badge-outline-danger rounded-pill">Danger</span>
<span className="badge badge-outline-warning rounded-pill">Warning</span>
<span className="badge badge-outline-info rounded-pill">Info</span>
<span className="badge badge-outline-dark rounded-pill">Dark</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Lighten Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.badge-soft--*</code>
                                        modifier class to make badges lighten.
                                    </p>
<span className="badge badge-soft-primary">Primary</span>
<span className="badge badge-soft-secondary">Secondary</span>
<span className="badge badge-soft-success">Success</span>
<span className="badge badge-soft-danger">Danger</span>
<span className="badge badge-soft-warning">Warning</span>
<span className="badge badge-soft-info">Info</span>
<span className="badge badge-soft-dark">Dark</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Lighten Pill Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use the
                                        <code>.badge-soft--*</code>
                                        modifier class to make badges lighten.
                                    </p>
<span className="badge badge-soft-primary rounded-pill">Primary</span>
<span className="badge badge-soft-secondary rounded-pill">Secondary</span>
<span className="badge badge-soft-success rounded-pill">Success</span>
<span className="badge badge-soft-danger rounded-pill">Danger</span>
<span className="badge badge-soft-warning rounded-pill">Warning</span>
<span className="badge badge-soft-info rounded-pill">Info</span>
<span className="badge badge-soft-dark rounded-pill">Dark</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Label Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Using the
                                        <code>.badge-label</code>
                                        to quickly create a square based badges.
                                    </p>
<span className="badge badge-label badge-default">Default</span>
<span className="badge badge-label text-bg-primary">Primary</span>
<span className="badge badge-label text-bg-secondary">Secondary</span>
<span className="badge badge-label text-bg-success">Success</span>
<span className="badge badge-label text-bg-danger">Danger</span>
<span className="badge badge-label text-bg-warning">Warning</span>
<span className="badge badge-label text-bg-info">Info</span>
<span className="badge badge-label text-bg-light">Light</span>
<span className="badge badge-label text-bg-dark">Dark</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Square Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Using the
                                        <code>.badge-square</code>
                                        to quickly create a square based badges.
                                    </p>
<span className="badge badge-square badge-default">0</span>
<span className="badge badge-square text-bg-primary">1</span>
<span className="badge badge-square text-bg-secondary">2</span>
<span className="badge badge-square text-bg-success">3</span>
<span className="badge badge-square text-bg-danger">4</span>
<span className="badge badge-square text-bg-warning">5</span>
<span className="badge badge-square text-bg-info">6</span>
<span className="badge badge-square text-bg-light">7</span>
<span className="badge badge-square text-bg-dark">8</span>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Circle Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Using the
                                        <code>.badge-circle</code>
                                        to quickly create a circle based badges.
                                    </p>
<span className="badge badge-circle badge-default">0</span>
<span className="badge badge-circle text-bg-primary">1</span>
<span className="badge badge-circle text-bg-secondary">2</span>
<span className="badge badge-circle text-bg-success">3</span>
<span className="badge badge-circle text-bg-danger">4</span>
<span className="badge badge-circle text-bg-warning">5</span>
<span className="badge badge-circle text-bg-info">6</span>
<span className="badge badge-circle text-bg-light">7</span>
<span className="badge badge-circle text-bg-dark">8</span>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Positioned</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use utilities to modify a
                                        <code>.badge</code>
                                        and position it in the corner of a link or button.
                                    </p>
<div className="d-flex flex-wrap gap-3">
<button className="btn btn-primary position-relative" type="button">
                                            Inbox
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span className="visually-hidden">unread messages</span>
</span>
</button>
<button className="btn btn-primary position-relative" type="button">
                                            Profile
                                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
<span className="visually-hidden">New alerts</span>
</span>
</button>
<button className="btn btn-success" type="button">
                                            Notifications
                                            <span className="badge text-bg-light ms-1">4</span>
</button>
</div>
</div>

</div>
</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Headings with Badges</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<h1>
                                        h1.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h1>
<h2>
                                        h2.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h2>
<h3>
                                        h3.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h3>
<h4>
                                        h4.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h4>
<h5>
                                        h5.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h5>
<h6>
                                        h6.Example heading
                                        <span className="badge text-bg-primary">New</span>
</h6>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
