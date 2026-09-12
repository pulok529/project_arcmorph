import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const TablesCustomPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Custom Tables" category="Tables" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card" data-table="">
<div className="card-header">
<h4 className="card-title">Custom Table with Search</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the parent container of the table and the search input container.
                                        <br/>
                                        Then, add
                                        <code>data-table-search</code>
                                        to the search input element to enable search functionality.
                                    </span>
</div>
<div className="card-header">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th data-column="price">Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="">
<div className="card-header">
<h4 className="card-title">Custom table with checkbox select</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the attribute
                                        <code>data-table</code>
                                        to the parent container of the table, and use
                                        <code>data-table-select-all</code>
                                        on the checkbox input in the table header to enable select all functionality.
                                    </span>
</div>
<div className="card-header border-light">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th data-column="price">Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="">
<div className="card-header">
<h4 className="card-title">Custom table with delete buttons</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the attribute
                                        <code>data-table</code>
                                        to the parent container of the table.
                                        <br/>
                                        For single row deletion, add
                                        <code>data-table-delete-row</code>
                                        to the delete button inside the row.
                                        <br/>
                                        For multiple row deletion, add
                                        <code>data-table-select-all</code>
                                        to the header checkbox and
                                        <code>data-table-delete-selected</code>
                                        to the bulk delete button.
                                    </span>
</div>
<div className="card-header border-light">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th>Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with pagination</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To set the number of rows per page, add
                                        <code>data-table-rows-per-page="5"</code>
                                        (default 10) on the same container.
                                        <br/>
                                        To enable pagination, add the
                                        <code>data-table-pagination</code>
                                        attribute to the pagination element.
                                        <br/>
                                        To set rows per page dynamically, add the
                                        <code>data-table-set-rows-per-page</code>
                                        attribute to a
                                        <code>&lt;select&gt;</code>
                                        element with numeric options.
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th>Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-end align-items-center">
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with pagination info</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To set the number of rows per page, add
                                        <code>data-table-rows-per-page="5"</code>
                                        to the same container (default is 10).
                                        <br/>
                                        To enable pagination, add the
                                        <code>data-table-pagination</code>
                                        attribute to the pagination element.
                                        <br/>
                                        To show pagination info, add the
                                        <code>data-table-pagination-info</code>
                                        attribute to the info element.
                                        <br/>
                                        By default, it displays:
                                        <code>Showing 1 to ... entries</code>
                                        . You can customize it by setting
                                        <code>data-table-pagination-info="products"</code>
                                        to show:
                                        <code>Showing 1 to ... products</code>
                                        .
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th>Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with filters</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To enable filtering, add the
                                        <code>data-table-filter="filter-name"</code>
                                        attribute to a
                                        <code>&lt;select&gt;</code>
                                        element with options that match the values in the target column.
                                        <br/>
                                        Also, add
                                        <code>data-column="filter-name"</code>
                                        to the corresponding column header to link the filter to that column.
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="category">
<option defaultValue="All">Category</option>
<option defaultValue="Electronics">Electronics</option>
<option defaultValue="Fashion">Fashion</option>
<option defaultValue="Home">Home</option>
<option defaultValue="Sports">Sports</option>
<option defaultValue="Beauty">Beauty</option>
</select>
<i className="ti ti-category app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="status">
<option defaultValue="">Status</option>
<option defaultValue="Published">Published</option>
<option defaultValue="Pending">Pending</option>
<option defaultValue="Out of Stock">Out of Stock</option>
</select>
<i className="ti ti-box app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th data-column="category">Category</th>
<th>Stock</th>
<th>Price</th>
<th>Orders</th>
<th>Rating</th>
<th data-column="status">Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with range filters</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To enable filtering, add the
                                        <code>data-table-range-filter="filter-name"</code>
                                        attribute to a
                                        <code>&lt;select&gt;</code>
                                        element with options that match the values in the target column.
                                        <br/>
                                        Also, add
                                        <code>data-column="filter-name"</code>
                                        to the corresponding column header to link the filter to that column.
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-range-filter="price">
<option defaultValue="">Price Range</option>
<option defaultValue="0-50">$0 - $50</option>
<option defaultValue="51-150">$51 - $150</option>
<option defaultValue="151-500">$151 - $500</option>
<option defaultValue="500+">$500+</option>
</select>
<i className="ti ti-currency-dollar app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-range-filter="date">
<option defaultValue="All">Date Range</option>
<option defaultValue="Today">Today</option>
<option defaultValue="Last 7 Days">Last 7 Days</option>
<option defaultValue="Last 30 Days">Last 30 Days</option>
<option defaultValue="This Year">This Year</option>
</select>
<i className="ti ti-calendar app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th>Category</th>
<th>Stock</th>
<th data-column="price">Price</th>
<th>Orders</th>
<th>Rating</th>
<th>Status</th>
<th data-column="date">Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with sort</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To enable sorting, add
                                        <code>data-table-sort</code>
                                        on header of column.
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="category">
<option defaultValue="All">Category</option>
<option defaultValue="Electronics">Electronics</option>
<option defaultValue="Fashion">Fashion</option>
<option defaultValue="Home">Home</option>
<option defaultValue="Sports">Sports</option>
<option defaultValue="Beauty">Beauty</option>
</select>
<i className="ti ti-category app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="status">
<option defaultValue="">Status</option>
<option defaultValue="Published">Published</option>
<option defaultValue="Pending">Pending</option>
<option defaultValue="Out of Stock">Out of Stock</option>
</select>
<i className="ti ti-box app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-range-filter="price">
<option defaultValue="">Price Range</option>
<option defaultValue="0-50">$0 - $50</option>
<option defaultValue="51-150">$51 - $150</option>
<option defaultValue="151-500">$151 - $500</option>
<option defaultValue="500+">$500+</option>
</select>
<i className="ti ti-currency-dollar app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th>Product</th>
<th>SKU</th>
<th data-table-sort="">Category</th>
<th data-table-sort="">Stock</th>
<th data-column="price" data-table-sort="">Price</th>
<th data-table-sort="">Orders</th>
<th>Rating</th>
<th data-table-sort="">Status</th>
<th data-column="date" data-table-sort="">Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Custom table with sort (for complex cell)</h4>
</div>
<div className="card-header border-0">
<span className="text-muted">
                                        Add the
                                        <code>data-table</code>
                                        attribute to the container of the table.
                                        <br/>
                                        To enable sorting, add
                                        <code>data-table-sort="sort-name"</code>
                                        to the header cell of the column.
                                        <br/>
                                        Also, add
                                        <code>data-sort="sort-name"</code>
                                        to the element inside each corresponding table cell that should be used for sorting.
                                    </span>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="category">
<option defaultValue="All">Category</option>
<option defaultValue="Electronics">Electronics</option>
<option defaultValue="Fashion">Fashion</option>
<option defaultValue="Home">Home</option>
<option defaultValue="Sports">Sports</option>
<option defaultValue="Beauty">Beauty</option>
</select>
<i className="ti ti-category app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="status">
<option defaultValue="">Status</option>
<option defaultValue="Published">Published</option>
<option defaultValue="Pending">Pending</option>
<option defaultValue="Out of Stock">Out of Stock</option>
</select>
<i className="ti ti-box app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-range-filter="price">
<option defaultValue="">Price Range</option>
<option defaultValue="0-50">$0 - $50</option>
<option defaultValue="51-150">$51 - $150</option>
<option defaultValue="151-500">$151 - $500</option>
<option defaultValue="500+">$500+</option>
</select>
<i className="ti ti-currency-dollar app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th data-table-sort="product">Product</th>
<th>SKU</th>
<th data-column="category">Category</th>
<th>Stock</th>
<th data-column="price">Price</th>
<th>Orders</th>
<th data-table-sort="rating">Rating</th>
<th data-column="status">Status</th>
<th>Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>
<div className="row">
<div className="col-12">
<div className="card" data-table="" data-table-rows-per-page="5">
<div className="card-header">
<h4 className="card-title">Complete Custom Table</h4>
</div>
<div className="card-header border-light justify-content-between">
<div className="d-flex gap-2">
<div className="app-search">
<input className="form-control" data-table-search="" placeholder="Search product name..." type="search"/>
<i className="ti ti-search app-search-icon text-muted"></i>
</div>
<button className="btn btn-danger d-none" data-table-delete-selected>Delete</button>
</div>
<div className="d-flex align-items-center gap-2">
<span className="me-2 fw-semibold">Filter By:</span>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="category">
<option defaultValue="All">Category</option>
<option defaultValue="Electronics">Electronics</option>
<option defaultValue="Fashion">Fashion</option>
<option defaultValue="Home">Home</option>
<option defaultValue="Sports">Sports</option>
<option defaultValue="Beauty">Beauty</option>
</select>
<i className="ti ti-category app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-filter="status">
<option defaultValue="">Status</option>
<option defaultValue="Published">Published</option>
<option defaultValue="Pending">Pending</option>
<option defaultValue="Out of Stock">Out of Stock</option>
</select>
<i className="ti ti-box app-search-icon text-muted"></i>
</div>

<div className="app-search">
<select className="form-select form-control my-1 my-md-0" data-table-range-filter="price">
<option defaultValue="">Price Range</option>
<option defaultValue="0-50">$0 - $50</option>
<option defaultValue="51-150">$51 - $150</option>
<option defaultValue="151-500">$151 - $500</option>
<option defaultValue="500+">$500+</option>
</select>
<i className="ti ti-currency-dollar app-search-icon text-muted"></i>
</div>

<div>
<select className="form-select form-control my-1 my-md-0" data-table-set-rows-per-page="">
<option defaultValue="5">5</option>
<option defaultValue="10">10</option>
<option defaultValue="15">15</option>
<option defaultValue="20">20</option>
</select>
</div>
</div>
</div>
<div className="table-responsive">
<table className="table table-custom table-centered table-select table-hover w-100 mb-0">
<thead className="bg-light align-middle bg-opacity-25 thead-sm">
<tr className="text-uppercase fs-xxs">
<th className="ps-3" style={{ width: '1%' }}>
<input className="form-check-input form-check-input-light fs-14 mt-0" data-table-select-all="" type="checkbox" defaultValue="option"/>
</th>
<th data-table-sort="product">Product</th>
<th>SKU</th>
<th data-column="category" data-table-sort="">Category</th>
<th data-table-sort="">Stock</th>
<th data-column="price" data-table-sort="">Price</th>
<th data-table-sort="">Orders</th>
<th data-table-sort="rating">Rating</th>
<th data-column="status" data-table-sort="">Status</th>
<th data-table-sort="">Published</th>
<th className="text-center" style={{ width: '1%' }}>Actions</th>
</tr>
</thead>
<tbody>

<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/1.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Wireless Earbuds</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: My Furniture</p>
</div>
</div>
</td>
<td>WB-10245</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">56</h5>
</td>
<td>$59.99</td>
<td>124</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(87)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">12:24 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/2.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Smart LED Desk Lamp</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: BrightLite</p>
</div>
</div>
</td>
<td>SL-89012</td>
<td>Home &amp; Office</td>
<td>
<h5 className="fs-base mb-0 fw-medium">32</h5>
</td>
<td>$39.49</td>
<td>78</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(54)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    22 Apr, 2025
                                                    <small className="text-muted">09:45 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/3.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Men's Running Shoes</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ActiveWear Co.</p>
</div>
</div>
</td>
<td>RS-20450</td>
<td>Fashion</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$89.00</td>
<td>231</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(142)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">03:10 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/4.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Fitness Tracker Watch</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitPulse</p>
</div>
</div>
</td>
<td>FT-67123</td>
<td>Fitness</td>
<td>
<h5 className="fs-base mb-0 fw-medium">78</h5>
</td>
<td>$49.95</td>
<td>198</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(89)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">10:12 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/5.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Gaming Mouse RGB</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: HyperClick</p>
</div>
</div>
</td>
<td>GM-72109</td>
<td>Gaming</td>
<td>
<h5 className="fs-base mb-0 fw-medium">120</h5>
</td>
<td>$29.99</td>
<td>243</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(102)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    19 Apr, 2025
                                                    <small className="text-muted">05:56 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/6.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Modern Lounge Chair</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: UrbanLiving</p>
</div>
</div>
</td>
<td>FC-31220</td>
<td>Furniture</td>
<td>
<h5 className="fs-base mb-0 fw-medium">24</h5>
</td>
<td>$199.00</td>
<td>38</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(27)</a>
</span>
</td>
<td>
<span className="badge badge-soft-danger fs-xxs">Out of Stock</span>
</td>
<td>
                                                    18 Apr, 2025
                                                    <small className="text-muted">11:30 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/7.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Plush Toy Bear</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Softies</p>
</div>
</div>
</td>
<td>TY-00788</td>
<td>Toys</td>
<td>
<h5 className="fs-base mb-0 fw-medium">150</h5>
</td>
<td>$15.99</td>
<td>305</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(120)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    17 Apr, 2025
                                                    <small className="text-muted">04:21 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/8.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">55" Ultra HD Smart TV</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: ViewMaster</p>
</div>
</div>
</td>
<td>TV-5588</td>
<td>Electronics</td>
<td>
<h5 className="fs-base mb-0 fw-medium">64</h5>
</td>
<td>$499.00</td>
<td>142</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(88)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    25 Apr, 2025
                                                    <small className="text-muted">10:10 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/9.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Apple iMac 24" M3</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: Apple</p>
</div>
</div>
</td>
<td>IMAC-M3-24</td>
<td>Computers</td>
<td>
<h5 className="fs-base mb-0 fw-medium">18</h5>
</td>
<td>$1,399.00</td>
<td>29</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(16)</a>
</span>
</td>
<td>
<span className="badge badge-soft-warning fs-xxs">Pending</span>
</td>
<td>
                                                    24 Apr, 2025
                                                    <small className="text-muted">02:14 PM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
<tr>
<td className="ps-3">
<input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" defaultValue="option"/>
</td>
<td>
<div className="d-flex">
<div className="avatar-md me-3">
<img alt="Product" className="img-fluid rounded" src="assets/images/products/10.png"/>
</div>
<div>
<h5 className="mb-1">
<a className="link-reset" data-sort="product" href="#!">Smart Watch Pro X2</a>
</h5>
<p className="text-muted mb-0 fs-xs">by: FitTech</p>
</div>
</div>
</td>
<td>SWPX2-GL</td>
<td>Wearables</td>
<td>
<h5 className="fs-base mb-0 fw-medium">85</h5>
</td>
<td>$149.50</td>
<td>197</td>
<td>
<span className="text-warning">
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star-filled"></i>
<i className="ti ti-star"></i>
</span>
<span className="ms-1">
<a className="link-reset fw-semibold" data-sort="rating" href="#!">(65)</a>
</span>
</td>
<td>
<span className="badge badge-soft-success fs-xxs">Published</span>
</td>
<td>
                                                    23 Apr, 2025
                                                    <small className="text-muted">08:00 AM</small>
</td>
<td>
<div className="d-flex justify-content-center gap-1">
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-eye fs-lg"></i>
</a>
<a className="btn btn-light btn-icon btn-sm rounded-circle" href="#">
<i className="ti ti-edit fs-lg"></i>
</a>
<a className="btn btn-danger btn-icon btn-sm rounded-circle" data-table-delete-row="" href="#">
<i className="ti ti-trash fs-lg"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="card-footer border-0">
<div className="d-flex justify-content-between align-items-center">
<div data-table-pagination-info="products"></div>
<div data-table-pagination=""></div>
</div>
</div>
</div>
</div>

</div>

      </div>
    </div>
  );
};
