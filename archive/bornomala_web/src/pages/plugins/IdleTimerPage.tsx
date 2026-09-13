import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const IdleTimerPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Idle Timer" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-header">
<h4 className="card-title">Idle Timer Plugin</h4>
</div>
<div className="card-body">

<div className="alert alert-danger d-none idle-alert" role="alert">Your session has expired. Please move your mouse to resume your activity.</div>
<p className="text-muted">The Idle Timer plugin allows you to monitor user activity on the page. Idle is defined as a lack of mouse movement, scrolling, or keyboard input.</p>
<div className="text-center p-3 h-200">
<i className="ti ti-fingerprint fs-36 mb-3 d-inline-block mx-auto"></i>
<h3 className="fst-italic">Please stay idle for 5 seconds</h3>
</div>
<p className="mb-0">
                                        You can instantiate the timer either statically or on a specific element. Element-bound timers will only track activity within that element, whereas global timers will monitor activity on the entire page. To set up page-level activity, you
                                        can initialize the timer on
                                        <code>document</code>
                                        ,
                                        <code>document.documentElement</code>
                                        , or
                                        <code>document.body</code>
                                        . The initialization returns a jQuery object, allowing for method chaining.
                                    </p>
<div className="toast-container position-fixed top-0 end-0 p-3">

<div aria-atomic="true" aria-live="assertive" className="toast shadow-lg text-bg-success border-success" id="backToast" role="alert">
<div className="toast-header text-bg-success border-success">
<strong className="me-auto">Welcome Back</strong>
<small>Now</small>
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body fst-italic">We missed you! Welcome back!</div>
</div>

<div aria-atomic="true" aria-live="assertive" className="toast shadow-lg text-bg-warning border-warning" id="liveToast" role="alert">
<div className="toast-header text-bg-warning border-warning">
<img alt="..." className="rounded me-2" height={20} src="assets/images/logo-sm.png"/>
<strong className="me-auto">Idle Alert</strong>
<small>Just now</small>
<button aria-label="Close" className="btn-close" data-bs-dismiss="toast" type="button"></button>
</div>
<div className="toast-body fst-italic">You've been inactive for too long. Please interact with the page to continue.</div>
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
