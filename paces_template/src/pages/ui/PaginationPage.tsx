import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PaginationPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Pagination" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Default Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Use
                                        <code>.pagination</code>
                                        inside
                                        <code>&lt;nav&gt;</code>
                                        for accessible, easy-to-click page links.
                                    </p>
<nav aria-label="Page navigation example">
<ul className="pagination mb-0">
<li className="page-item">
<a className="page-link" href="#">Previous</a>
</li>
<li className="page-item">
<a className="page-link" href="#">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#">Next</a>
</li>
</ul>
</nav>
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
<p className="text-muted fs-sm">
                                        Align pagination using flexbox utilities, such as
                                        <code>.justify-content-center</code>
                                        to center it.
                                    </p>
<nav aria-label="Page navigation example">
<ul className="pagination justify-content-center">
<li className="page-item disabled">
<a className="page-link" href="#!" tabIndex={-1}>Previous</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">Next</a>
</li>
</ul>
</nav>
<nav aria-label="Page navigation example">
<ul className="pagination justify-content-end">
<li className="page-item disabled">
<a className="page-link" href="#!" tabIndex={-1}>Previous</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">Next</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom Color Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Add classes like
                                        <code>.pagination-primary</code>
                                        ,
                                        <code>.pagination-info</code>
                                        , or
                                        <code>.pagination-secondary</code>
                                        to customize pagination color.
                                    </p>
<nav>
<ul className="pagination pagination-boxed pagination-info">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<i className="ti ti-chevron-left align-middle fs-lg"></i>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<i className="ti ti-chevron-right align-middle fs-lg"></i>
</a>
</li>
</ul>
</nav>
<nav>
<ul className="pagination pagination-boxed pagination-secondary mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<i className="ti ti-arrow-left align-middle fs-lg"></i>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<i className="ti ti-arrow-right align-middle fs-lg"></i>
</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Disabled and active states</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Add
                                        <code>.disabled</code>
                                        and
                                        <code>tabIndex={-1}</code>
                                        to
                                        <code>.page-item</code>
                                        to make it non-interactive.
                                    </p>
<nav aria-label="...">
<ul className="pagination mb-0">
<li className="page-item disabled">
<a className="page-link" href="#" tabIndex={-1}>Previous</a>
</li>
<li className="page-item">
<a className="page-link" href="#">1</a>
</li>
<li aria-current="page" className="page-item active">
<a className="page-link" href="#">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#">Next</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom Icon Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Add icons like
                                        <code>&lt;i className="YOUR ICON"&gt;&lt;/i&gt;</code>
                                        or SVGs inside
                                        <code>.page-link</code>
                                        for custom pagination arrows.
                                    </p>
<nav>
<ul className="pagination pagination-boxed">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<i className="ti ti-chevron-left align-middle fs-lg"></i>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<i className="ti ti-chevron-right align-middle fs-lg"></i>
</a>
</li>
</ul>
</nav>
<nav>
<ul className="pagination pagination-boxed mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<i className="ti ti-arrow-left align-middle fs-lg"></i>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<i className="ti ti-arrow-right align-middle fs-lg"></i>
</a>
</li>
</ul>
</nav>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Sizing</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Use
                                        <code>.pagination-lg</code>
                                        or
                                        <code>.pagination-sm</code>
                                        to change pagination size.
                                    </p>
<nav>
<ul className="pagination pagination-lg">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
</nav>
<nav>
<ul className="pagination pagination-sm mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Boxed Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Use
                                        <code>.pagination-boxed</code>
                                        with
                                        <code>.pagination</code>
                                        to give pagination items a boxed appearance.
                                    </p>
<nav>
<ul className="pagination pagination-boxed">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
<ul className="pagination pagination-lg pagination-boxed">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
<ul className="pagination pagination-sm pagination-boxed mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Rounded Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Use
                                        <code>.pagination-rounded</code>
                                        with
                                        <code>.pagination</code>
                                        to create rounded pagination links.
                                    </p>
<nav>
<ul className="pagination pagination-rounded pagination-boxed mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<span aria-hidden={true}>«</span>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<span aria-hidden={true}>»</span>
</a>
</li>
</ul>
</nav>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Soft Pagination</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Use
                                        <code>.pagination-soft-**</code>
                                        with
                                        <code>.pagination</code>
                                        for a soft-colored pagination style.
                                    </p>
<nav>
<ul className="pagination pagination-soft-danger pagination-boxed mb-0">
<li className="page-item">
<a aria-label="Previous" className="page-link" href="#!">
<i className="ti ti-chevron-left align-middle fs-lg"></i>
</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">1</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">2</a>
</li>
<li className="page-item active">
<a className="page-link" href="#!">3</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">4</a>
</li>
<li className="page-item">
<a className="page-link" href="#!">5</a>
</li>
<li className="page-item">
<a aria-label="Next" className="page-link" href="#!">
<i className="ti ti-chevron-right align-middle fs-lg"></i>
</a>
</li>
</ul>
</nav>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
