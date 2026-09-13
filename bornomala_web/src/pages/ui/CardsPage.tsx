import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const CardsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Cards" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-sm-6 col-lg-3">

<div className="card">
<div className="card-body">
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
<a className="btn btn-sm btn-primary" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">

<div className="card">
<div className="card-body">
<h5 className="card-title mb-2">Basic Card with Title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
<a className="btn btn-sm btn-primary" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">

<div className="card text-bg-primary border-0">
<div className="card-body">
<h5 className="card-title mb-2">Card with Background Color</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
<a className="btn btn-sm btn-light" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">

<div className="card text-bg-success bg-gradient">
<div className="card-body">
<h5 className="card-title mb-2">Card with Background Gradient</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
<a className="btn btn-sm btn-light" href="#!">Button</a>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-md-4">
<div className="card">
<h5 className="card-header">Card with Header</h5>
<div className="card-body">
<h5 className="card-title mb-2">Special title treatment</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-sm btn-primary" href="#!">Go somewhere</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card">
<div className="card-header d-block">
<h5 className="card-title mb-1">Card with Sub Header</h5>
<h6 className="card-subtitle text-body-secondary">Card subtitle</h6>
</div>
<div className="card-body">
<blockquote className="card-bodyquote mb-0">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

</blockquote>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card">
<div className="card-header bg-light-subtle">Featured Card Title</div>
<div className="card-body">
<a className="btn btn-sm btn-primary" href="#!">Go somewhere</a>
</div>
<div className="card-footer border-top border-light text-muted">2 days ago</div>
</div>

</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="mb-4 mt-3">Advanced Card</h4>
</div>

</div>
<div className="row">
<div className="col-md-4">
<div className="card">
<div className="card-header">
<h5 className="card-title">Card with Action Tools</h5>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
<a className="card-action-item" data-action="card-refresh" href="#!">
<i className="ti ti-refresh align-middle"></i>
</a>
<a className="card-action-item" data-action="card-close" href="#!">
<i className="ti ti-x align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-sm btn-primary" href="#!">Go somewhere</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card text-bg-primary border-0">
<div className="card-header">
<h5 className="card-title">Card with Action Tools &amp; Background Colors</h5>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
<a className="card-action-item" data-action="card-refresh" href="#!">
<i className="ti ti-refresh align-middle"></i>
</a>
<a className="card-action-item" data-action="card-close" href="#!">
<i className="ti ti-x align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-sm btn-light" href="#!">Go somewhere</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card card-filled">
<div className="card-header">
<h5 className="card-title">Card with Action Tools</h5>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
<a className="card-action-item" data-action="code-collapse" href="#!">
<i className="ti ti-code align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-sm btn-primary" href="#!">Go somewhere</a>
</div>

<div className="code-body">
<pre>
                                    <code className="language-markup">
                                        &lt;nav aria-label="breadcrumb"&gt;
                                            &lt;ol className="breadcrumb bg-light bg-opacity-50 p-2 mb-2"&gt;
                                                &lt;li className="breadcrumb-item active" aria-current="page"&gt;Home&lt;/li&gt;
                                            &lt;/ol&gt;
                                        &lt;/nav&gt;
                                    </code>
                                </pre>

</div>

</div>

</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="mb-4 mt-3">Bordered Card</h4>
</div>

</div>
<div className="row">
<div className="col-md-4">
<div className="card border border-primary">
<div className="card-body">
<h5 className="card-title mb-2">Card with Colored Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary btn-sm" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card border-primary border border-dashed">
<div className="card-body">
<h5 className="card-title mb-2 text-primary">Card with Simple Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary btn-sm" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card border-primary border-2">
<div className="card-body">
<h5 className="card-title mb-2 text-primary">Card with Double Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary btn-sm" href="#!">Button</a>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-md-4">
<div className="card card-bordered">
<div className="card-body">
<h5 className="card-title mb-2">Card with Start Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-dark btn-sm" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card border-primary card-bordered">
<div className="card-body">
<h5 className="card-title mb-2 text-primary">Card with Colored Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary btn-sm" href="#!">Button</a>
</div>

</div>

</div>

<div className="col-md-4">
<div className="card border-info card-bordered">
<div className="card-body">
<h5 className="card-title mb-2">Card with Colored Border</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-info btn-sm" href="#!">Button</a>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="mb-4 mt-3">Horizontal Card</h4>
</div>

</div>
<div className="row">
<div className="col-lg-6">
<div className="card">
<div className="row g-0 align-items-center">
<div className="col-md-4">
<img alt="..." className="img-fluid rounded-start" src="assets/images/stock/small-1.jpg"/>
</div>
<div className="col-md-8">
<div className="card-body">
<h5 className="card-title mb-2">Card with Horizontal Mode</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p className="card-text">
<small className="text-muted">Last updated 3 mins ago</small>
</p>
</div>

</div>

</div>

</div>

</div>

<div className="col-lg-6">
<div className="card">
<div className="row g-0 align-items-center">
<div className="col-md-8">
<div className="card-body">
<h5 className="card-title mb-2">Card with Horizontal Mode</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p className="card-text">
<small className="text-muted">Last updated 3 mins ago</small>
</p>
</div>

</div>

<div className="col-md-4">
<img alt="..." className="img-fluid rounded-end" src="assets/images/stock/small-2.jpg"/>
</div>

</div>

</div>

</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="mb-4 mt-3">Stretched Link</h4>
</div>

</div>
<div className="row">
<div className="col-sm-6 col-lg-3">
<div className="card">
<img alt="..." className="card-img-top" src="assets/images/stock/small-3.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card with stretched link</h5>
<a className="btn btn-primary mt-2 stretched-link" href="#">Go somewhere</a>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">
<div className="card">
<img alt="..." className="card-img-top" src="assets/images/stock/small-4.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">
<a className="text-primary stretched-link" href="#">Card with stretched link</a>
</h5>
<p className="card-text">Some quick example text to build on the card up the bulk of the card's content.</p>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">
<div className="card">
<img alt="..." className="card-img-top" src="assets/images/stock/small-5.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card with stretched link</h5>
<a className="btn btn-primary mt-2 stretched-link" href="#">Go somewhere</a>
</div>

</div>

</div>

<div className="col-sm-6 col-lg-3">
<div className="card">
<img alt="..." className="card-img-top" src="assets/images/stock/small-6.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">
<a className="text-primary stretched-link" href="#">Card with stretched link</a>
</h5>
<p className="card-text">Some quick example text to build on the card up the bulk of the card's content.</p>
</div>

</div>

</div>

</div>
<div className="row">
<div className="col-12">
<h4 className="mb-4 mt-3">Card Group</h4>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card-group mb-3">
<div className="card d-block">
<img alt="Card image cap" className="card-img-top" src="assets/images/stock/small-8.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p className="card-text">
<small className="text-muted">Last updated 3 mins ago</small>
</p>
</div>
</div>
<div className="card d-block">
<img alt="Card image cap" className="card-img-top" src="assets/images/stock/small-9.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
<p className="card-text">
<small className="text-muted">Last updated 3 mins ago</small>
</p>
</div>
</div>
<div className="card d-block">
<img alt="Card image cap" className="card-img-top" src="assets/images/stock/small-10.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
<p className="card-text">
<small className="text-muted">Last updated 3 mins ago</small>
</p>
</div>
</div>
</div>

</div>

</div>
<div className="card-group">
<div className="card">
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
<div className="card-footer">
<small className="text-body-secondary">Last updated 3 mins ago</small>
</div>
</div>
<div className="card">
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
</div>
<div className="card-footer">
<small className="text-body-secondary">Last updated 3 mins ago</small>
</div>
</div>
<div className="card">
<div className="card-body">
<h5 className="card-title mb-2">Card title</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
</div>
<div className="card-footer">
<small className="text-body-secondary">Last updated 3 mins ago</small>
</div>
</div>
</div>
<div className="row">
<div className="col-12">
<h4 className="my-4">Navigation with Card</h4>
</div>

</div>
<div className="row">
<div className="col-xl-6">
<div className="card text-center">
<div className="card-header">
<ul className="nav nav-tabs card-header-tabs">
<li className="nav-item">
<a aria-current="true" className="nav-link active" href="#">Active</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
<a aria-disabled className="nav-link disabled">Disabled</a>
</li>
</ul>
</div>
<div className="card-body">
<h5 className="card-title mb-2">Special title treatment</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary" href="#">Go somewhere</a>
</div>
</div>
</div>
<div className="col-xl-6">
<div className="card text-center">
<div className="card-header">
<ul className="nav nav-pills card-header-pills">
<li className="nav-item">
<a className="nav-link active" href="#">Active</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
<a aria-disabled className="nav-link disabled">Disabled</a>
</li>
</ul>
</div>
<div className="card-body">
<h5 className="card-title mb-2">Special title treatment</h5>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a className="btn btn-primary" href="#">Go somewhere</a>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
};
