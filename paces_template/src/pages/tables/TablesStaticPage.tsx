import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const TablesStaticPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Static Tables" category="Tables" />

      <div className="module-content-body">
<div className="row justify-content-center">
<div className="col-12">
<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Basic Table</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#overview" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add the base class
                                        <code>.table</code>
                                        to any
                                        <code>&lt;table&gt;</code>
                                        , then extend with our optional modifier classes or custom styles.
                                    </p>
<div className="table-responsive">
<table className="table align-middle mb-0">
<thead className="fs-xs">
<tr>
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Wireless Headphones</td>
<td>Electronics</td>
<td>$99.00</td>
<td>120</td>
<td>4.5 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td>
<button className="btn btn-sm btn-primary">Edit</button>
<button className="btn btn-sm btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>Running Shoes</td>
<td>Footwear</td>
<td>$59.99</td>
<td>80</td>
<td>4.2 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td>
<button className="btn btn-sm btn-primary">Edit</button>
<button className="btn btn-sm btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>Smartwatch</td>
<td>Wearables</td>
<td>$129.00</td>
<td>0</td>
<td>4.0 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Out of Stock</span>
</td>
<td>
<button className="btn btn-sm btn-primary">Edit</button>
<button className="btn btn-sm btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>Gaming Mouse</td>
<td>Accessories</td>
<td>$39.50</td>
<td>250</td>
<td>4.7 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td>
<button className="btn btn-sm btn-primary">Edit</button>
<button className="btn btn-sm btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>Office Chair</td>
<td>Furniture</td>
<td>$149.00</td>
<td>35</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td>
<button className="btn btn-sm btn-primary">Edit</button>
<button className="btn btn-sm btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Custom Table</h4>
<span className="badge badge-label badge-soft-success fs-xxs">Exclusive</span>
</div>
<div className="card-body p-0">
<div className="ps-3 pt-3">
<p className="text-muted">
                                            Add the base classes
                                            <code>.table</code>
                                            and
                                            <code>.table-custom</code>
                                            to any
                                            <code>&lt;table&gt;</code>
                                            element to apply custom styling, including spacing for the first and last table cells.
                                        </p>
</div>
<div className="table-responsive">
<table className="table table-custom align-middle mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>4K Monitor</td>
<td>Electronics</td>
<td>$349.00</td>
<td>30</td>
<td>4.8 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Standing Desk</td>
<td>Furniture</td>
<td>$499.00</td>
<td>10</td>
<td>4.4 ★</td>
<td>
<span className="badge badge-label badge-soft-info">New</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Variants of Table</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#variants" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">Use contextual classes to color tables, table rows or individual cells.</p>
<div className="table-responsive">
<table className="table align-middle mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr className="table-primary">
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td className="table-warning">4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td className="table-info">$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-center table-light">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>4K Monitor</td>
<td>Electronics</td>
<td>$349.00</td>
<td className="table-danger">30</td>
<td>4.8 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td className="table-dark">Standing Desk</td>
<td>Furniture</td>
<td>$499.00</td>
<td>10</td>
<td>4.4 ★</td>
<td>
<span className="badge badge-label badge-soft-info">New</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Striped Rows</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#striped-rows" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>.table-striped</code>
                                        to add zebra-striping to any table row within the
                                        <code>&lt;tbody&gt;</code>
                                        .
                                    </p>
<div className="table-responsive">
<table className="table table-striped align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Striped Columns</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#striped-columns" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Use
                                        <code>.table-striped-columns</code>
                                        to add zebra-striping to any table column.
                                    </p>
<div className="table-responsive">
<table className="table table-striped-columns align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Hoverable Rows</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#hoverable-rows" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.table-hover</code>
                                        to enable a hover state on table rows within a
                                        <code>&lt;tbody&gt;</code>
</p>
<div className="table-responsive">
<table className="table table-hover align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Active Tables</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#active-tables" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Highlight a table row or cell by adding a
                                        <code>.table-active</code>
                                        class.
                                    </p>
<div className="table-responsive">
<table className="table align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr className="table-active">
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td className="table-active">$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Bordered Tables</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#bordered-tables" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.table-bordered</code>
                                        for borders on all sides of the table and cells.
                                    </p>
<div className="table-responsive">
<table className="table table-bordered align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-center">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Tables without Borders</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#tables-without-borders" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.table-borderless</code>
                                        for a table without borders.
                                    </p>
<div className="table-responsive">
<table className="table table-borderless align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Small Tables</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#small-tables" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add
                                        <code>.table-sm</code>
                                        to make any
                                        <code>.table</code>
                                        more compact by cutting all cell
                                        <code>padding</code>
                                        in half.
                                    </p>
<div className="table-responsive">
<table className="table table-sm align-middle mb-0">
<thead className="align-middle">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Table Group Dividers</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#table-group-dividers" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Add a thicker border, darker between table groups—
                                        <code>&lt;thead&gt;</code>
                                        ,
                                        <code>&lt;tbody&gt;</code>
                                        , and
                                        <code>&lt;tfoot&gt;</code>
                                        —with
                                        <code>.table-group-divider</code>
                                        . Customize the color by changing the
                                        <code>border-top-color</code>
                                        (which we don’t currently provide a utility class for at this time).
                                    </p>
<div className="table-responsive">
<table className="table align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody className="table-group-divider">
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Nesting</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#nesting" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">Border styles, active styles, and table variants are not inherited by nested tables.</p>
<div className="table-responsive">
<table className="table align-middle mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>

<tr>
<td className="p-3" colSpan={7}>
<table className="table table-sm mb-0">
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Variant</th>
<th>Color</th>
<th>SKU</th>
<th>Stock</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mini</td>
<td>Black</td>
<td>SPK-M-BLK</td>
<td>80</td>
</tr>
<tr>
<td>Standard</td>
<td>Blue</td>
<td>SPK-S-BLU</td>
<td>120</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Table Head</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#table-head" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        Similar to tables and dark tables, use the modifier classes
                                        <code>.table-light</code>
                                        or
                                        <code>.table-dark</code>
                                        to make
                                        <code>&lt;thead&gt;</code>
                                        s appear light or dark gray.
                                    </p>
<div className="table-responsive">
<table className="table table-custom table-hover align-middle mb-0">
<thead className="align-middle table-dark">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

<div className="card">
<div className="card-header justify-content-between">
<h4 className="card-title">Captions</h4>
<a className="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold" href="https://getbootstrap.com/docs/5.3/content/tables/#captions" target="_blank">
                                        View Docs
                                        <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
</a>
</div>
<div className="card-body">
<p className="text-muted">
                                        A
                                        <code>&lt;caption&gt;</code>
                                        functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.
                                    </p>
<div className="table-responsive">
<table className="table table-hover align-middle mb-0">
<caption>
                                                List of Ecommerce Products
                                            </caption>
<thead className="align-middle thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product Name</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Rating</th>
<th>Status</th>
<th style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Speaker</td>
<td>Audio</td>
<td>$49.00</td>
<td>200</td>
<td>4.6 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Leather Wallet</td>
<td>Accessories</td>
<td>$29.99</td>
<td>150</td>
<td>4.3 ★</td>
<td>
<span className="badge badge-label badge-soft-success">Active</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
<tr>
<td>Fitness Tracker</td>
<td>Wearables</td>
<td>$89.00</td>
<td>60</td>
<td>4.1 ★</td>
<td>
<span className="badge badge-label badge-soft-warning">Limited Stock</span>
</td>
<td className="text-end">
<div className="dropdown text-muted">
<a aria-expanded={false} className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#!">
<i className="ti ti-eye me-1"></i>
                                                                    View
                                                                </a>
<a className="dropdown-item" href="#!">
<i className="ti ti-edit me-1"></i>
                                                                    Edit
                                                                </a>
<a className="dropdown-item text-danger" href="#!">
<i className="ti ti-trash me-1"></i>
                                                                    Delete
                                                                </a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
