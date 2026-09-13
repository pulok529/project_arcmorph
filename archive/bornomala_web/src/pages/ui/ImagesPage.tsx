import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ImagesPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Images" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Shapes</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Avatars with different sizes and shapes.</p>
<div className="row">
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid" src="assets/images/stock/small-1.jpg"/>
<p className="mb-0 mt-2">
<code>.img-fluid</code>
</p>
</div>
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid rounded" src="assets/images/stock/small-2.jpg"/>
<p className="mb-0 mt-2">
<code>.rounded</code>
</p>
</div>
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid rounded" src="assets/images/users/user-2.jpg" width={120}/>
<p className="mb-0 mt-2">
<code>.rounded</code>
</p>
</div>
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid rounded-circle" src="assets/images/users/user-5.jpg" width={120}/>
<p className="mb-0 mt-2">
<code>.rounded-circle</code>
</p>
</div>
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid img-thumbnail" src="assets/images/stock/small-5.jpg"/>
<p className="mb-0 mt-2">
<code>.img-thumbnail</code>
</p>
</div>
<div className="col-sm-2 text-center">

<img alt="image" className="img-fluid rounded-circle img-thumbnail" src="assets/images/users/user-8.jpg" width={120}/>
<p className="mb-0 mt-2">
<code>.rounded-circle .img-thumbnail</code>
</p>
</div>
</div>

</div>

</div>
</div>

<div className="col-xxl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Avatar Sizes</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="row text-center">
<div className="col">

<img alt="image" className="img-fluid avatar-xs rounded" src="assets/images/users/user-2.jpg"/>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
<div className="col">

<div className="avatar-xs mx-auto">
<span className="avatar-title text-bg-primary rounded">xs</span>
</div>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
<div className="col">

<div className="avatar-xs mx-auto">
<span className="avatar-title bg-primary-subtle text-primary rounded">xs</span>
</div>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-sm rounded" src="assets/images/users/user-3.jpg"/>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
<div className="col">

<div className="avatar-sm mx-auto">
<span className="avatar-title text-bg-primary rounded">sm</span>
</div>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
<div className="col">

<div className="avatar-sm mx-auto">
<span className="avatar-title bg-primary-subtle text-primary rounded">sm</span>
</div>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-md rounded" src="assets/images/users/user-4.jpg"/>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
<div className="col">

<div className="avatar-md mx-auto">
<span className="avatar-title text-bg-primary rounded">md</span>
</div>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
<div className="col">

<div className="avatar-md mx-auto">
<span className="avatar-title bg-primary-subtle text-primary rounded">md</span>
</div>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-lg rounded" src="assets/images/users/user-5.jpg"/>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
<div className="col">

<div className="avatar-lg mx-auto">
<span className="avatar-title text-bg-primary rounded">LG</span>
</div>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
<div className="col">

<div className="avatar-lg mx-auto">
<span className="avatar-title bg-primary-subtle text-primary rounded">LG</span>
</div>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-xl rounded" src="assets/images/users/user-6.jpg"/>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
<div className="col">

<div className="avatar-xl mx-auto">
<span className="avatar-title text-bg-primary rounded">XL</span>
</div>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
<div className="col">

<div className="avatar-xl mx-auto">
<span className="avatar-title bg-primary-subtle text-primary rounded">XL</span>
</div>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
</div>

</div>

</div>
</div>

<div className="col-xxl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Avatar Sizes with Rounded</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="row text-center">
<div className="col">

<img alt="image" className="img-fluid avatar-xs rounded-circle" src="assets/images/users/user-7.jpg"/>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
<div className="col">

<div className="avatar-xs mx-auto">
<span className="avatar-title text-bg-info rounded-circle">xs</span>
</div>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
<div className="col">

<div className="avatar-xs mx-auto">
<span className="avatar-title bg-info-subtle text-info rounded-circle">xs</span>
</div>
<p className="mt-2">
<code>.avatar-xs</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-sm rounded-circle" src="assets/images/users/user-8.jpg"/>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
<div className="col">

<div className="avatar-sm mx-auto">
<span className="avatar-title text-bg-info rounded-circle">sm</span>
</div>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
<div className="col">

<div className="avatar-sm mx-auto">
<span className="avatar-title bg-info-subtle text-info rounded-circle">sm</span>
</div>
<p className="mt-2">
<code>.avatar-sm</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-md rounded-circle" src="assets/images/users/user-9.jpg"/>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
<div className="col">

<div className="avatar-md mx-auto">
<span className="avatar-title text-bg-info rounded-circle">md</span>
</div>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
<div className="col">

<div className="avatar-md mx-auto">
<span className="avatar-title bg-info-subtle text-info rounded-circle">md</span>
</div>
<p className="mt-2">
<code>.avatar-md</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-lg rounded-circle" src="assets/images/users/user-10.jpg"/>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
<div className="col">

<div className="avatar-lg mx-auto">
<span className="avatar-title text-bg-info rounded-circle">LG</span>
</div>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
<div className="col">

<div className="avatar-lg mx-auto">
<span className="avatar-title bg-info-subtle text-info rounded-circle">LG</span>
</div>
<p className="mt-2">
<code>.avatar-lg</code>
</p>
</div>
</div>

<div className="row text-center mt-3">
<div className="col">

<img alt="image" className="img-fluid avatar-xl rounded-circle" src="assets/images/users/user-1.jpg"/>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
<div className="col">

<div className="avatar-xl mx-auto">
<span className="avatar-title text-bg-info rounded-circle">XL</span>
</div>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
<div className="col">

<div className="avatar-xl mx-auto">
<span className="avatar-title bg-info-subtle text-info rounded-circle">XL</span>
</div>
<p className="mt-2">
<code>.avatar-xl</code>
</p>
</div>
</div>

</div>

</div>
</div>

<div className="col-xxl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Avatar Groups</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="row">
<div className="col-xl-3">

<div className="avatar-group">
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-4.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-5.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-3.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-8.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-sm" src="assets/images/users/user-2.jpg"/>
</div>
</div>
</div>

<div className="col-xl-3">

<div className="avatar-group">
<div className="avatar avatar-md">
<span className="avatar-title text-bg-danger rounded-circle fw-bold">D</span>
</div>
<div className="avatar avatar-md">
<span className="avatar-title text-bg-primary rounded-circle fw-bold">K</span>
</div>
<div className="avatar avatar-md">
<span className="avatar-title text-bg-secondary rounded-circle fw-bold">H</span>
</div>
<div className="avatar avatar-md">
<span className="avatar-title text-bg-warning rounded-circle fw-bold">L</span>
</div>
<div className="avatar avatar-md">
<span className="avatar-title text-bg-info rounded-circle fw-bold">G</span>
</div>
</div>
</div>

<div className="col-xl-3">

<div className="avatar-group">
<div className="avatar avatar-lg">
<span className="avatar-title bg-danger-subtle text-danger rounded-circle fw-bold shadow">D</span>
</div>
<div className="avatar avatar-lg">
<span className="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow">K</span>
</div>
<div className="avatar avatar-lg">
<span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fw-bold shadow">H</span>
</div>
<div className="avatar avatar-lg">
<span className="avatar-title bg-warning-subtle text-warning rounded-circle fw-bold shadow">L</span>
</div>
<div className="avatar avatar-lg">
<span className="avatar-title bg-info-subtle text-info rounded-circle fw-bold shadow">G</span>
</div>
</div>
</div>

<div className="col-xl-3">

<div className="avatar-group">
<div className="avatar">
<img alt="" className="rounded-circle avatar-xl" src="assets/images/users/user-10.jpg"/>
</div>
<div className="avatar avatar-xl">
<span className="avatar-title text-bg-info rounded-circle fs-xl fw-bold">D</span>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-xl" src="assets/images/users/user-7.jpg"/>
</div>
<div className="avatar">
<img alt="" className="rounded-circle avatar-xl" src="assets/images/users/user-1.jpg"/>
</div>
<div className="avatar avatar-xl">
<span className="avatar-title fs-xl text-bg-danger rounded-circle fw-bold">9+</span>
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
