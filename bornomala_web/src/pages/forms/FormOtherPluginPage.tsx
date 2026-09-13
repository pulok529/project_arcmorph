import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormOtherPluginPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Other Plugins" category="Forms" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-header d-block">
<h4 className="card-title mb-1">Form Inputmask</h4>
<p className="text-muted mb-0">Inputmask is a javascript library that creates an input mask. Inputmask can run against vanilla javascript, jQuery, and jqlite. (Hoverable Inputmask)</p>
</div>
<div className="card-body">

<div className="row g-3">
<div className="col-lg-6">
<h5>Date</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="00/00/0000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="00/00/0000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Hour</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="00:00:00"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="00:00:00" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Date &amp; Hour</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="00/00/0000 00:00:00"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="00/00/0000 00:00:00" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>ZIP Code</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="00000-000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="00000-000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Crazy ZIP Code</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="0-00-00-00"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="0-00-00-00" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Money</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="000.000.000.000.000,00"</code>
                                                ,
                                                <code>data-reverse="true"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="000.000.000.000.000,00" data-reverse="true" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Money 2</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="#.##0,00"</code>
                                                ,
                                                <code>data-reverse="true"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="#.##0,00" data-reverse="true" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Telephone</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="0000-0000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="0000-0000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>Telephone with Area Code</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="(00) 0000-0000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="(00) 0000-0000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>US Telephone</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="(000) 000-0000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="(000) 000-0000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>São Paulo Cellphones</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="(00) 00000-0000"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="(00) 00000-0000" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>CPF</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="000.000.000-00"</code>
                                                ,
                                                <code>data-reverse="true"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="000.000.000-00" data-reverse="true" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>CNPJ</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="00.000.000/0000-00"</code>
                                                ,
                                                <code>data-reverse="true"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="00.000.000/0000-00" data-reverse="true" data-toggle="input-mask" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5>IP Address</h5>
<p className="text-muted mb-0">
                                                Add attribute
                                                <code>data-toggle="input-mask"</code>
<code>data-mask-format="099.099.099.099"</code>
                                                ,
                                                <code>data-reverse="true"</code>
</p>
</div>
<div className="col-lg-6">
<input className="form-control" data-mask-format="099.099.099.099" data-reverse="true" data-toggle="input-mask" type="text"/>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<h4 className="card-title">Typeahead</h4>
</div>
<div className="card-body">
<p className="text-muted mb-2">a flexible JavaScript library that provides a strong foundation for building robust typeaheads</p>
<a className="btn btn-link p-0 fw-semibold" href="https://twitter.github.io/typeahead.js/" target="_blank">
                                        Typeahead on View Official Website
                                        <i className="ti ti-chevron-right ms-1"></i>
</a>
</div>
<div className="card-body">

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Basic</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control typeahead" placeholder="Enter states from USA" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">BloodHound (Suggestion Engine)</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control bloodhound-typeahead" placeholder="Enter states from USA" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Prefetch</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control prefetch-typeahead" placeholder="Enter states from USA" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Default Suggestions</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control default-suggestions-typeahead" placeholder="Default Suggestions" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Custom Template</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control custom-template-typeahead" placeholder="Search For Oscar Winner" type="text"/>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>

<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Multiple Datasets</h5>
</div>
<div className="col-lg-6">
<input autoComplete="off" className="form-control multi-datasets-typeahead" placeholder="NBA and NHL Teams" type="text"/>
</div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Input Touchspin</h4>
</div>
<span className="badge badge-soft-success badge-label py-1 fs-xxs">Exclusive</span>
</div>
<div className="card-body">
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Default Touchspin</h5>
</div>
<div className="col-lg-6">
<div className="input-group" data-touchspin="">
<button className="btn btn-light floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="1"/>
<button className="btn btn-light floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Sizes</h5>
</div>
<div className="col-lg-6">
<div className="input-group input-group-sm" data-touchspin="">
<button className="btn btn-light floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control border-0" max="800000" type="number" defaultValue="0"/>
<button className="btn btn-light floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group input-group-lg mt-2" data-touchspin="">
<button className="btn btn-light floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control border-0" max="800000" type="number" defaultValue="0"/>
<button className="btn btn-light floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Colors</h5>
</div>
<div className="col-lg-6">
<div className="input-group" data-touchspin="">
<button className="btn btn-primary floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-primary floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-secondary floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-secondary floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-info floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-info floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-success floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-success floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-warning floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-warning floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-danger floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-danger floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-dark floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-dark floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-purple floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-purple floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group mt-2" data-touchspin="">
<button className="btn btn-soft-primary floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-soft-primary floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">readOnly</h5>
</div>
<div className="col-lg-6">
<div className="input-group" data-touchspin="">
<button className="btn btn-light floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" readOnly type="number" defaultValue="1"/>
<button className="btn btn-light floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Disabled</h5>
</div>
<div className="col-lg-6">
<div className="input-group" data-touchspin="">
<button className="btn btn-light floating" data-minus="" disabled type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" disabled max="800000" type="number" defaultValue="1"/>
<button className="btn btn-light floating" data-plus="" disabled type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Style</h5>
</div>
<div className="col-lg-6">
<div className="input-group" data-touchspin="">
<button className="btn btn-primary rounded-circle floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-primary rounded-circle floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group rounded-pill mt-2" data-touchspin="">
<button className="btn btn-primary rounded-circle floating" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control form-control-sm border-0" max="800000" type="number" defaultValue="100"/>
<button className="btn btn-primary rounded-circle floating" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group border-0 mt-2" data-touchspin="">
<button className="btn btn-outline-secondary" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control border-secondary" max="100" min="0" type="number" defaultValue="2"/>
<button className="btn btn-outline-secondary" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
<div className="input-group border-0 mt-2" data-touchspin="">
<button className="btn btn-soft-success" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
<input className="form-control border-success-subtle" max="100" min="0" type="number" defaultValue="2"/>
<button className="btn btn-soft-success" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
</div>
</div>
</div>
<div className="my-4 border-top border-dashed"></div>
<div className="row g-3">
<div className="col-lg-6">
<h5 className="fw-semibold mb-1">Vertical Style</h5>
</div>
<div className="col-lg-6">
<div className="input-group input-group-sm" data-touchspin="">
<div className="btn-group-vertical">
<button className="btn btn-soft-success" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
<button className="btn btn-soft-danger" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
</div>
<input className="form-control border-0" max="10" min="0" type="number" defaultValue="1"/>
</div>
<div className="input-group mt-2" data-touchspin="">
<div className="btn-group-vertical">
<button className="btn btn-success" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
<button className="btn btn-danger" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
</div>
<input className="form-control border-0" max="10" min="0" type="number" defaultValue="1"/>
</div>
<div className="input-group input-group-lg mt-2" data-touchspin="">
<div className="btn-group-vertical">
<button className="btn btn-dark" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
<button className="btn btn-dark" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
</div>
<input className="form-control border-0" max="10" min="0" type="number" defaultValue="1"/>
</div>
<div className="input-group mt-2" data-touchspin="">
<input className="form-control border-0" max="10" min="0" type="number" defaultValue="1"/>
<div className="btn-group-vertical">
<button className="btn btn-dark" data-plus="" type="button">
<i className="ti ti-plus"></i>
</button>
<button className="btn btn-dark" data-minus="" type="button">
<i className="ti ti-minus"></i>
</button>
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
