import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PasswordMeterPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Password Meter" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Progress Bar</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>

<div className="card-body">

<input className="form-control mb-2" placeholder="Password" type="password"/>
<div className="password-bar mb-2"></div>
<p className="text-muted fs-xs mb-0">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</p>
</div>
</div>

</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Password Condition</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>

<div className="card-body">

<div>
<label className="form-label" htmlFor="password-input">Magic Password ✨ (Click Here)</label>
<input className="form-control" id="password-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Enter password" type="password"/>
<div className="form-text">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
<div className="password-box collapse bg-light-subtle border border-light mt-2 rounded">
<div className="p-3">
<h5 className="fs-sm mb-2">Password Recipe:</h5>
<p className="invalid fs-xs mb-2" id="pass-length">
                                                    Minimum
                                                    <b>8 characters</b>
</p>
<p className="invalid fs-xs mb-2" id="pass-lower">
                                                    At
                                                    <b>lowercase</b>
                                                    letter (a-z)
                                                </p>
<p className="invalid fs-xs mb-2" id="pass-upper">
                                                    At least
                                                    <b>uppercase</b>
                                                    letter (A-Z)
                                                </p>
<p className="invalid fs-xs mb-0" id="pass-number">
                                                    A least
                                                    <b>number</b>
                                                    (0-9)
                                                </p>
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
