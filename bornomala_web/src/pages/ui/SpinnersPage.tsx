import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const SpinnersPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Spinners" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Border Spinner</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Use border spinners as lightweight loading indicators.</p>
<div className="spinner-border m-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Colors</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use text color utilities like
                                        <code>.text-primary</code>
                                        ,
                                        <code>.text-success</code>
                                        , or
                                        <code>.text-danger</code>
                                        to style the spinner, which inherits its color from
                                        <code>currentColor</code>
                                        .
                                    </p>
<div>
<div className="spinner-border text-primary m-2" role="status"></div>
<div className="spinner-border text-secondary m-2" role="status"></div>
<div className="spinner-border text-success m-2" role="status"></div>
<div className="spinner-border text-danger m-2" role="status"></div>
<div className="spinner-border text-warning m-2" role="status"></div>
<div className="spinner-border text-info m-2" role="status"></div>
<div className="spinner-border text-light m-2" role="status"></div>
<div className="spinner-border text-dark m-2" role="status"></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Alignment</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Bootstrap spinners use
                                        <code>rem</code>
                                        ,
                                        <code>currentColor</code>
                                        , and
                                        <code>inline-flex</code>
                                        for easy sizing and alignment.
                                    </p>
<div className="d-flex align-items-center">
<strong>Loading...</strong>
<div aria-hidden={true} className="spinner-border ms-auto" role="status"></div>
</div>
<div className="d-flex justify-content-center mt-3">
<div className="spinner-border" role="status"></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Buttons Spinner</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="row g-3">
<div className="col-lg-6">
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-primary btn-icon" disabled type="button">
<span aria-hidden={true} className="spinner-border spinner-border-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary btn-icon rounded-circle" disabled type="button">
<span aria-hidden={true} className="spinner-border spinner-border-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" disabled type="button">
<span aria-hidden={true} className="spinner-border spinner-border-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" disabled type="button">
<span aria-hidden={true} className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                    Loading...
                                                </button>
</div>
</div>

<div className="col-lg-6">
<div className="d-flex flex-wrap gap-2">
<button className="btn btn-primary btn-icon" disabled type="button">
<span aria-hidden={true} className="spinner-grow spinner-grow-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary btn-icon rounded-circle" disabled type="button">
<span aria-hidden={true} className="spinner-grow spinner-grow-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" disabled type="button">
<span aria-hidden={true} className="spinner-grow spinner-grow-sm" role="status"></span>
<span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" disabled type="button">
<span aria-hidden={true} className="spinner-grow spinner-grow-sm me-2" role="status"></span>
                                                    Loading...
                                                </button>
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
<h4 className="card-title">Growing Spinner</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Bootstrap spinners use
                                        <code>rem</code>
                                        ,
                                        <code>currentColor</code>
                                        , and
                                        <code>inline-flex</code>
                                        for easy resizing, coloring, and alignment.
                                    </p>
<div className="spinner-grow m-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Color Growing Spinner</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        The grow spinner also uses
                                        <code>currentColor</code>
                                        , so apply classes like
                                        <code>.text-primary</code>
                                        ,
                                        <code>.text-warning</code>
                                        , or
                                        <code>.text-info</code>
                                        to customize its color.
                                    </p>
<div>
<div className="spinner-grow text-primary m-2" role="status"></div>
<div className="spinner-grow text-secondary m-2" role="status"></div>
<div className="spinner-grow text-success m-2" role="status"></div>
<div className="spinner-grow text-danger m-2" role="status"></div>
<div className="spinner-grow text-warning m-2" role="status"></div>
<div className="spinner-grow text-info m-2" role="status"></div>
<div className="spinner-grow text-light m-2" role="status"></div>
<div className="spinner-grow text-dark m-2" role="status"></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Size</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-lg-6">
<div className="spinner-border avatar-lg text-primary m-2" role="status"></div>
<div className="spinner-grow avatar-lg text-secondary m-2" role="status"></div>
</div>

<div className="col-lg-6">
<div className="spinner-border avatar-md text-primary m-2" role="status"></div>
<div className="spinner-grow avatar-md text-secondary m-2" role="status"></div>
</div>

<div className="col-lg-6">
<div className="spinner-border avatar-sm text-primary m-2" role="status"></div>
<div className="spinner-grow avatar-sm text-secondary m-2" role="status"></div>
</div>

<div className="col-lg-6">
<div className="spinner-border spinner-border-sm m-2" role="status"></div>
<div className="spinner-grow spinner-grow-sm m-2" role="status"></div>
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
