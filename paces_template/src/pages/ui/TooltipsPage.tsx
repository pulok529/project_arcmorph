import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const TooltipsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Tooltips" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Basic</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Hover over the links below to see tooltips.</p>
<p className="mb-0">
                                        Powerful admin features like
                                        <a className="fw-medium" data-bs-title="Manage your dashboard easily" data-bs-toggle="tooltip" href="#">custom dashboards</a>
                                        and UI components help you build scalable web applications efficiently. This template includes pre-built pages, clean layouts, and reusable code blocks to boost your development workflow. From user management to analytics and settings,
                                        everything is modular and developer-friendly. Create modern admin panels with
                                        <a className="fw-medium" data-bs-title="Built with Bootstrap 5" data-bs-toggle="tooltip" href="#">responsive design</a>
                                        and seamless UX. Get started quickly with a professional-grade
                                        <a className="fw-medium" data-bs-title="Tailored for developers" data-bs-toggle="tooltip" href="#">UI toolkit</a>
                                        and supercharge your app with
                                        <a className="fw-medium" data-bs-title="Includes charts, tables, forms and more" data-bs-toggle="tooltip" href="#">powerful components</a>
                                        and flexible layouts.
                                    </p>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Disabled Elements</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Elements with the
                                        <code>disabled</code>
                                        attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper
                                        <code>&lt;div&gt;</code>
                                        or
                                        <code>&lt;span&gt;</code>
                                        , ideally made keyboard-focusable using
                                        <code>tabIndex={0}</code>
                                        , and override the
                                        <code>pointer-events</code>
                                        on the disabled element.
                                    </p>
<span className="d-inline-block" data-bs-title="Disabled tooltip" data-bs-toggle="tooltip" tabIndex={0}>
<button className="btn btn-primary pe-none" disabled type="button">Disabled Button</button>
</span>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Hover Elements</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Elements with the
                                        <code>disabled</code>
                                        attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper
                                        <code>&lt;div&gt;</code>
                                        or
                                        <code>&lt;span&gt;</code>
                                        , ideally made keyboard-focusable using
                                        <code>tabIndex={0}</code>
                                        , and override the
                                        <code>pointer-events</code>
                                        on the disabled element.
                                    </p>
<button className="btn btn-primary" data-bs-title="Tooltip appears on hover only" data-bs-toggle="tooltip" data-bs-trigger="hover" type="button">Hover to See Info</button>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Four Directions</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-info" data-bs-placement="top" data-bs-title="Tooltip on top" data-bs-toggle="tooltip" type="button">Tooltip ontop</button>
<button className="btn btn-info" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" data-bs-toggle="tooltip" type="button">Tooltip on bottom</button>
<button className="btn btn-info" data-bs-placement="left" data-bs-title="Tooltip on left" data-bs-toggle="tooltip" type="button">Tooltip on left</button>
<button className="btn btn-info" data-bs-placement="right" data-bs-title="Tooltip on right" data-bs-toggle="tooltip" type="button">Tooltip on right</button>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">HTML Tags</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">And with custom HTML added:</p>
<button className="btn btn-secondary" data-bs-html="true" data-bs-title="&lt;em&gt;New&lt;/em&gt; &lt;u&gt;Tooltip&lt;/u&gt; &lt;b&gt;with&lt;/b&gt; &lt;i&gt;HTML&lt;/i&gt; &lt;br&gt;Custom message here!" data-bs-toggle="tooltip" type="button">Tooltip with HTML</button>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Color Tooltips</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        We set a custom class with ex.
                                        <code>data-bs-custom-className="primary-tooltip"</code>
                                        to scope our background-color primary appearance and use it to override a local CSS variable.
                                    </p>
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-primary" data-bs-custom-className="tooltip-primary" data-bs-placement="top" data-bs-title="This is a primary tooltip with a custom style." data-bs-toggle="tooltip" type="button">Primary tooltip</button>
<button className="btn btn-danger" data-bs-custom-className="tooltip-danger" data-bs-placement="top" data-bs-title="This is a danger tooltip with a custom warning message." data-bs-toggle="tooltip" type="button">Danger tooltip</button>
<button className="btn btn-info" data-bs-custom-className="tooltip-info" data-bs-placement="top" data-bs-title="This is an info tooltip that provides extra details." data-bs-toggle="tooltip" type="button">Info tooltip</button>
<button className="btn btn-success" data-bs-custom-className="tooltip-success" data-bs-placement="top" data-bs-title="This is a success tooltip to indicate completion." data-bs-toggle="tooltip" type="button">Success tooltip</button>
<button className="btn btn-secondary" data-bs-custom-className="tooltip-secondary" data-bs-placement="top" data-bs-title="This is a secondary tooltip that gives additional information." data-bs-toggle="tooltip" type="button">
                                            Secondary tooltip
                                        </button>
<button className="btn btn-warning" data-bs-custom-className="tooltip-warning" data-bs-placement="top" data-bs-title="This is a warning tooltip to alert you." data-bs-toggle="tooltip" type="button">Warning tooltip</button>
<button className="btn btn-dark" data-bs-custom-className="tooltip-dark" data-bs-placement="top" data-bs-title="This is a dark tooltip with important information." data-bs-toggle="tooltip" type="button">Dark tooltip</button>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
