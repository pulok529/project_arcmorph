import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const NotificationsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Notifications" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-6">
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
<p className="text-muted">Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
<div className="p-3">

<div aria-atomic="true" aria-live="assertive" className="toast fade show" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small>11 mins ago</small>
<button aria-label="Close" className="ms-2 btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">Hello, world! This is a toast message.</div>
</div>

</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Placement</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the
                                        <code>.toast</code>
                                        .
                                    </p>
<div className="p-3">
<div aria-atomic="true" aria-live="polite" className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>

<div aria-atomic="true" aria-live="assertive" className="toast fade show" data-bs-toggle="toast" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small>11 mins ago</small>
<button aria-label="Close" className="ms-2 btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">Hello, world! This is a toast message.</div>
</div>

</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Placement</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the
                                        <code>.toast</code>
                                        .
                                    </p>
<form>
<div className="mb-3">
<label htmlFor="selectToastPlacement">Toast placement</label>
<select className="form-select mt-2" id="selectToastPlacement">
<option selected defaultValue="">Select a position...</option>
<option defaultValue="top-0 start-0">Top left</option>
<option defaultValue="top-0 start-50 translate-middle-x">Top center</option>
<option defaultValue="top-0 end-0">Top right</option>
<option defaultValue="top-50 start-0 translate-middle-y">Middle left</option>
<option defaultValue="top-50 start-50 translate-middle">Middle center</option>
<option defaultValue="top-50 end-0 translate-middle-y">Middle right</option>
<option defaultValue="bottom-0 start-0">Bottom left</option>
<option defaultValue="bottom-0 start-50 translate-middle-x">Bottom center</option>
<option defaultValue="bottom-0 end-0">Bottom right</option>
</select>
</div>
</form>
<div aria-atomic="true" aria-live="polite" className="bg-light position-relative bd-example-toasts" style={{ minHeight: '294px' }}>
<div className="toast-container position-absolute p-3" id="toastPlacement">
<div className="toast show">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small>11 mins ago</small>
</div>
<div className="toast-body">Hello, world! This is a toast message.</div>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Live Toast</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Click the button below to show a toast (positioned with our utilities in the Toop Right corner) that has been hidden by default.</p>
<button className="btn btn-primary" id="liveToastBtn" type="button">Show live toast</button>
<div className="toast-container position-fixed top-0 end-0 p-3">
<div aria-atomic="true" aria-live="assertive" className="toast" id="liveToast" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small>11 mins ago</small>
<button aria-label="Close" className="btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">Hello, world! This is a toast message.</div>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Translucent</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the elements under a toast.</p>
<div className="p-3 bg-light bg-opacity-50">

<div aria-atomic="true" aria-live="assertive" className="toast fade show" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small>11 mins ago</small>
<button aria-label="Close" className="ms-2 btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">Hello, world! This is a toast message.</div>
</div>

</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Stacking</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>
<div className="p-3">
<div aria-atomic="true" aria-live="polite" style={{ position: 'relative', minHeight: '200px' }}>

<div className="toast-container" style={{ position: 'absolute', top: '0', right: '0' }}>

<div aria-atomic="true" aria-live="assertive" className="toast fade show" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small className="text-muted">just now</small>
<button aria-label="Close" className="ms-2 btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">See? Just like this.</div>
</div>

<div aria-atomic="true" aria-live="assertive" className="toast fade show" role="alert">
<div className="toast-header">
<img alt="brand-logo" className="me-1" height={16} src="assets/images/logo-sm.png"/>
<strong className="me-auto fw-bold text-body">BRAND</strong>
<small className="text-muted">2 seconds ago</small>
<button aria-label="Close" className="ms-2 btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body">Heads up, toasts will stack automatically</div>
</div>

</div>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom content</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div aria-atomic="true" aria-live="assertive" className="toast show align-items-center mb-2" role="alert">
<div className="d-flex">
<div className="toast-body">Hello, world! This is a toast message.</div>
<button aria-label="Close" className="btn-close me-2 m-auto" data-bs-dismiss="toast" type="button"></button>
</div>
</div>
<div aria-atomic="true" aria-live="assertive" className="toast show align-items-center text-white bg-primary border-0 mb-2" role="alert">
<div className="d-flex">
<div className="toast-body">Hello, world! This is a toast message.</div>
<button aria-label="Close" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" type="button"></button>
</div>
</div>
<div aria-atomic="true" aria-live="assertive" className="toast show mb-2" role="alert">
<div className="toast-body">
                                            Hello, world! This is a toast message.
                                            <div className="mt-2 pt-2 border-top">
<button className="btn btn-primary btn-sm" type="button">Take action</button>
<button className="btn btn-secondary btn-sm" data-bs-dismiss="toast" type="button">Close</button>
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
