import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ProgressPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Progress" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Examples</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">A progress bar can be used to show a user how far along he/she is in a process.</p>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={0} className="progress-bar" role="progressbar"></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar" role="progressbar" style={{ width: '25%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
</div>
<div className="progress">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} className="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Height</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        We only set a
                                        <code>height</code>
                                        value on the
                                        <code>.progress</code>
                                        , so if you change that value the inner
                                        <code>.progress-bar</code>
                                        will automatically resize accordingly. Use
                                        <code>.progress-sm</code>
                                        ,
                                        <code>.progress-md</code>
                                        ,
                                        <code>.progress-lg</code>
                                        ,
                                        <code>.progress-xl</code>
                                        classes.
                                    </p>
<div className="progress mb-2" style={{ height: '1px' }}>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }}></div>
</div>
<div className="progress mb-2" style={{ height: '3px' }}>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar" role="progressbar" style={{ width: '25%', height: '20px' }}></div>
</div>
<div className="progress mb-2 progress-sm">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }}></div>
</div>
<div className="progress mb-2 progress-md">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}></div>
</div>
<div className="progress progress-lg mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}></div>
</div>
<div className="progress progress-xl">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={38} className="progress-bar bg-success" role="progressbar" style={{ width: '38%' }}></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Multiple Bars</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Include multiple progress bars in a progress component if you need.</p>
<div className="progress">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={15} className="progress-bar" role="progressbar" style={{ width: '15%' }}></div>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={30} className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }}></div>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={20} className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }}></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Animated Stripes</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        The striped gradient can also be animated. Add
                                        <code>.progress-bar-animated</code>
                                        to
                                        <code>.progress-bar</code>
                                        to animate the stripes right to left via CSS3 animations.
                                    </p>
<div className="progress">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }}></div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Labels</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add labels to your progress bars by placing text within the
                                        <code>.progress-bar</code>
                                        .
                                    </p>
<div className="progress mb-3">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar" role="progressbar" style={{ width: '25%' }}>25%</div>
</div>
<div aria-label="Example with label" aria-valuemax={100} aria-valuemin={0} aria-valuenow={10} className="progress" role="progressbar">
<div className="progress-bar overflow-visible text-dark" style={{ width: '10%' }}>Long label text for the progress bar, set to a dark color</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Backgrounds</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Use background utility classes to change the appearance of individual progress bars.</p>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={65} className="progress-bar bg-dark" role="progressbar" style={{ width: '65%' }}></div>
</div>
<div className="progress">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar bg-secondary" role="progressbar" style={{ width: '50%' }}></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Striped</h4>
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
                                        <code>.progress-bar-striped</code>
                                        to any
                                        <code>.progress-bar</code>
                                        to apply a stripe via CSS gradient over the progress bar’s background color.
                                    </p>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={10} className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }}></div>
</div>
<div className="progress mb-2">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }}></div>
</div>
<div className="progress">
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }}></div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Steps</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="position-relative m-4">
<div className="progress" style={{ height: '2px' }}>
<div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
</div>
<button className="position-absolute top-0 start-0 translate-middle btn btn-icon btn-primary rounded-pill" type="button">1</button>
<button className="position-absolute top-0 start-50 translate-middle btn btn-icon btn-primary rounded-pill" type="button">2</button>
<button className="position-absolute top-0 start-100 translate-middle btn btn-icon btn-light rounded-pill" type="button">3</button>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
