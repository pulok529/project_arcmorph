import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ColorsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Colors" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-primary rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Primary</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-secondary rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Secondary</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-success rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Success</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-info rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Info</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-warning rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Warning</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-danger rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Danger</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-dark rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Dark</h6>
</div>
</div>
</div>
</div>
<div className="col-md-4 col-xl-2">
<div className="card">
<div className="card-body">
<div className="bg-light rounded" style={{ height: '100px' }}></div>
<div className="mt-3 text-center">
<h6 className="fs-sm mb-0">Light</h6>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Background Colors</h4>
</div>
</div>
<div className="card-body">
<div className="table-responsive">
<table className="table table-bordered table-striped align-middle mb-0">
<thead>
<tr className="text-center">
<th className="align-middle" scope="col">Name</th>
<th className="align-middle" colSpan={2} scope="col">
                                                        Background
                                                        <br/>
                                                        Color
                                                    </th>
<th className="align-middle" colSpan={2} scope="col">
                                                        Background
                                                        <br/>
                                                        Subtle
                                                    </th>
<th className="align-middle" colSpan={2} scope="col">
                                                        Background
                                                        <br/>
                                                        Gradient
                                                    </th>
<th className="align-middle" colSpan={2} scope="col">
                                                        Background
                                                        <br/>
                                                        Opacity
                                                    </th>
</tr>
</thead>
<tbody>
<tr>
<th>Primary</th>
<td style={{ width: '180px' }}>
<code>.bg-primary</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-primary p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-primary-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-primary-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-primary
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-primary bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-primary
                                                            <br/>
                                                            .bg-opacity-25
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-primary bg-opacity-25 p-2"></div>
</td>
</tr>
<tr>
<th>Secondary</th>
<td style={{ width: '180px' }}>
<code>.bg-secondary</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-secondary p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-secondary-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-secondary-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-secondary
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-secondary bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-secondary
                                                            <br/>
                                                            .bg-opacity-50
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-secondary bg-opacity-50 p-2"></div>
</td>
</tr>
<tr>
<th>Success</th>
<td style={{ width: '180px' }}>
<code>.bg-success</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-success p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-success-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-success-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-success
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-success bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-success
                                                            <br/>
                                                            .bg-opacity-75
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-success bg-opacity-75 p-2"></div>
</td>
</tr>
<tr>
<th>Info</th>
<td style={{ width: '180px' }}>
<code>.bg-info</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-info p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-info-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-info-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-info
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-info bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-info
                                                            <br/>
                                                            .bg-opacity-10
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-info bg-opacity-10 p-2"></div>
</td>
</tr>
<tr>
<th>Warning</th>
<td style={{ width: '180px' }}>
<code>.bg-warning</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-warning p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-warning-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-warning-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-warning
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-warning bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-warning
                                                            <br/>
                                                            .bg-opacity-25
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-warning bg-opacity-25 p-2"></div>
</td>
</tr>
<tr>
<th>Danger</th>
<td style={{ width: '180px' }}>
<code>.bg-danger</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-danger p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-danger-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-danger-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-danger
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-danger bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-danger
                                                            <br/>
                                                            .bg-opacity-50
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-danger bg-opacity-50 p-2"></div>
</td>
</tr>
<tr>
<th>Light</th>
<td style={{ width: '180px' }}>
<code>.bg-light</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-light p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-light-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-light-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-light
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-light bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-light
                                                            <br/>
                                                            .bg-opacity-75
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-light bg-opacity-75 p-2"></div>
</td>
</tr>
<tr>
<th>Dark</th>
<td style={{ width: '180px' }}>
<code>.bg-dark</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-dark p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>.bg-dark-subtle</code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-dark-subtle p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-dark
                                                            <br/>
                                                            .bg-gradient
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-dark bg-gradient p-2"></div>
</td>
<td style={{ width: '180px' }}>
<code>
                                                            .bg-dark
                                                            <br/>
                                                            .bg-opacity-10
                                                        </code>
</td>
<td style={{ width: '180px' }}>
<div className="bg-dark bg-opacity-10 p-2"></div>
</td>
</tr>
</tbody>
</table>
</div>

</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card mb-0">
<div className="card-header">
<h4 className="card-title">Text Colors &amp; Link Colors</h4>
</div>
<div className="card-body">
<div className="table-responsive">
<table className="table table-bordered align-middle table-striped mb-0">
<thead>
<tr className="text-center">
<th className="align-middle" scope="col">Name</th>
<th className="align-middle" colSpan={2} scope="col">Text Color</th>
<th className="align-middle" colSpan={2} scope="col">Text Emphasis</th>
<th className="align-middle" colSpan={2} scope="col">Text Opacity</th>
<th className="align-middle" colSpan={2} scope="col">Link Color</th>
</tr>
</thead>
<tbody>
<tr>
<th>Primary</th>
<td>
<code>.text-primary</code>
</td>
<td>
<div className="text-primary">Primary Color Text</div>
</td>
<td>
<code>.text-primary-emphasis</code>
</td>
<td>
<div className="text-primary-emphasis">Primary Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-primary
                                                            <br/>
                                                            .text-opacity-50
                                                        </code>
</td>
<td>
<div className="text-primary text-opacity-50">Primary Color Text</div>
</td>
<td>
<code>.link-primary</code>
</td>
<td>
<a className="link-primary" href="#!">Primary Link</a>
</td>
</tr>
<tr>
<th>Secondary</th>
<td>
<code>.text-secondary</code>
</td>
<td>
<div className="text-secondary">Secondary Color Text</div>
</td>
<td>
<code>.text-secondary-emphasis</code>
</td>
<td>
<div className="text-primary-emphasis">Secondary Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-secondary
                                                            <br/>
                                                            .text-opacity-75
                                                        </code>
</td>
<td>
<div className="text-secondary text-opacity-75">Secondary Color Text</div>
</td>
<td>
<code>.link-secondary</code>
</td>
<td>
<a className="link-secondary" href="#!">Secondary Link</a>
</td>
</tr>
<tr>
<th>Success</th>
<td>
<code>.text-success</code>
</td>
<td>
<div className="text-success">Success Color Text</div>
</td>
<td>
<code>.text-success-emphasis</code>
</td>
<td>
<div className="text-success-emphasis">Success Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-success
                                                            <br/>
                                                            .text-opacity-25
                                                        </code>
</td>
<td>
<div className="text-success text-opacity-25">Success Color Text</div>
</td>
<td>
<code>.link-success</code>
</td>
<td>
<a className="link-success" href="#!">Success Link</a>
</td>
</tr>
<tr>
<th>Info</th>
<td>
<code>.text-info</code>
</td>
<td>
<div className="text-info">Info Color Text</div>
</td>
<td>
<code>.text-info-emphasis</code>
</td>
<td>
<div className="text-info-emphasis">Info Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-info
                                                            <br/>
                                                            .text-opacity-50
                                                        </code>
</td>
<td>
<div className="text-info text-opacity-50">Info Color Text</div>
</td>
<td>
<code>.link-info</code>
</td>
<td>
<a className="link-info" href="#!">Info Link</a>
</td>
</tr>
<tr>
<th>Danger</th>
<td>
<code>.text-danger</code>
</td>
<td>
<div className="text-danger">Danger Color Text</div>
</td>
<td>
<code>.text-danger-emphasis</code>
</td>
<td>
<div className="text-danger-emphasis">Danger Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-danger
                                                            <br/>
                                                            .text-opacity-25
                                                        </code>
</td>
<td>
<div className="text-danger text-opacity-25">Danger Color Text</div>
</td>
<td>
<code>.link-danger</code>
</td>
<td>
<a className="link-danger" href="#!">Danger Link</a>
</td>
</tr>
<tr>
<th>Warning</th>
<td>
<code>.text-warning</code>
</td>
<td>
<div className="text-warning">Warning Color Text</div>
</td>
<td>
<code>.text-warning-emphasis</code>
</td>
<td>
<div className="text-warning-emphasis">Warning Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-warning
                                                            <br/>
                                                            .text-opacity-75
                                                        </code>
</td>
<td>
<div className="text-warning text-opacity-75">Warning Color Text</div>
</td>
<td>
<code>.link-warning</code>
</td>
<td>
<a className="link-warning" href="#!">Warning Link</a>
</td>
</tr>
<tr>
<th>Dark</th>
<td>
<code>.text-dark</code>
</td>
<td>
<div className="text-dark">Dark Color Text</div>
</td>
<td>
<code>.text-dark-emphasis</code>
</td>
<td>
<div className="text-dark-emphasis">Dark Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-dark
                                                            <br/>
                                                            .text-opacity-25
                                                        </code>
</td>
<td>
<div className="text-dark text-opacity-25">Dark Color Text</div>
</td>
<td>
<code>.link-dark</code>
</td>
<td>
<a className="link-dark" href="#!">Dark Link</a>
</td>
</tr>
<tr>
<th>Light</th>
<td>
<code>.text-light</code>
</td>
<td>
<div className="text-light bg-dark">Light Color Text</div>
</td>
<td>
<code>.text-light-emphasis</code>
</td>
<td>
<div className="text-light-emphasis">Light Emphasis Text</div>
</td>
<td>
<code>
                                                            .text-light
                                                            <br/>
                                                            .text-opacity-50
                                                        </code>
</td>
<td>
<div className="text-light text-opacity-50 bg-dark">Light Color Text</div>
</td>
<td>
<code>.link-light</code>
</td>
<td>
<a className="link-light bg-dark" href="#!">Light Link</a>
</td>
</tr>
<tr>
<th>Body</th>
<td>
<code>.text-body</code>
</td>
<td>
<div className="text-body">Body Color Text</div>
</td>
<td>
<code>.text-body-emphasis</code>
</td>
<td>
<div className="text-body-emphasis">Body Emphasis Text</div>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<th>Body</th>
<td>
<code>.text-body-secondary</code>
</td>
<td>
<div className="text-body-secondary">Body Secondary Color</div>
</td>
<td>
<code>.text-body-tertiary</code>
</td>
<td>
<div className="text-body-tertiary">Body Tertiary Text</div>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<th>Black</th>
<td>
<code>.text-black</code>
</td>
<td>
<div className="text-black">Black Color Text</div>
</td>
<td>
<code>.text-black-50</code>
</td>
<td>
<div className="text-black-50">Black 50% Text</div>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<th>White</th>
<td>
<code>.text-white</code>
</td>
<td>
<div className="text-white bg-dark">White Color Text</div>
</td>
<td>
<code>.text-white-50</code>
</td>
<td>
<div className="text-white-50 bg-dark">White 50% Text</div>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="my-4 fw-bold">Border Colors</h4>
</div>

</div>
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h5 className="card-title">Additive(Add) Border</h5>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use border utilities to
                                        <b>add</b>
                                        an element’s borders. Choose from all borders or one at a time.
                                    </p>
<div className="d-flex align-items-start flex-wrap gap-4">
<div className="text-center">
<div className="border avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-top avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-end avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-bottom avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-start avatar-md bg-light bg-opacity-50"></div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h5 className="card-title">Subtractive(Remove) Border</h5>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use border utilities to
                                        <b>remove</b>
                                        an element’s borders. Choose from all borders or one at a time.
                                    </p>
<div className="d-flex align-items-start flex-wrap gap-4">
<div className="text-center">
<div className="border-0 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-top-0 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-end-0 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-bottom-0 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-start-0 avatar-md bg-light bg-opacity-50"></div>
</div>
</div>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h5 className="card-title">Border Color</h5>
</div>
<div className="card-body">
<p className="text-muted">Change the border color using utilities built on our theme colors.</p>
<div className="d-flex align-items-start flex-wrap gap-2">
<div className="text-center">
<div className="border border-primary avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-primary avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-secondary avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-success avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-danger avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-warning avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-info avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-light avatar-md"></div>
</div>
<div className="text-center">
<div className="border border-dark avatar-md bg-light bg-opacity-50"></div>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<h5 className="card-title">Border Width Size</h5>
</div>
<div className="card-body">
<div className="d-flex align-items-start flex-wrap gap-2">
<div className="text-center">
<div className="border-1 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-2 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-3 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-4 avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border-5 avatar-md bg-light bg-opacity-50"></div>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<h5 className="card-title">Border Subtle Color</h5>
</div>
<div className="card-body">
<p className="text-muted">Change the border color using utilities built on our theme colors.</p>
<div className="d-flex align-items-start flex-wrap gap-2">
<div className="text-center">
<div className="border border-primary-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-primary-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-secondary-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-success-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-danger-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-warning-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-info-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
<div className="text-center">
<div className="border border-light-subtle avatar-md"></div>
</div>
<div className="text-center">
<div className="border border-dark-subtle avatar-md bg-light bg-opacity-50"></div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h5 className="card-title">Border Opacity</h5>
</div>
<div className="card-body">
<p className="text-muted">
                                        choose from any of the
                                        <code>.border-opacity</code>
                                        utilities:
                                    </p>
<div className="border border-primary p-2 mb-2">This is default accent border</div>
<div className="border border-primary p-2 mb-2 border-opacity-75">This is 75% opacity accent border</div>
<div className="border border-primary p-2 mb-2 border-opacity-50">This is 50% opacity accent border</div>
<div className="border border-primary p-2 mb-2 border-opacity-25">This is 25% opacity accent border</div>
<div className="border border-primary p-2 border-opacity-10">This is 10% opacity accent border</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
