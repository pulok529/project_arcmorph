import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const BreadcrumbPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Breadcrumb" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Basic</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<nav aria-label="breadcrumb">
<ol className="breadcrumb mb-0 py-2">
<li aria-current="page" className="breadcrumb-item active">Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb mb-0 py-2">
<li className="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" className="breadcrumb-item active">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb mb-0 py-2">
<li className="breadcrumb-item"><a href="#">Home</a></li>
<li className="breadcrumb-item"><a href="#">Library</a></li>
<li aria-current="page" className="breadcrumb-item active">Data</li>
</ol>
</nav>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">With Icons</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
<li aria-current="page" className="breadcrumb-item active">
<i className="ti ti-smart-home me-1"></i>
                                                Home
                                            </li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
<li className="breadcrumb-item">
<a href="#">
<i className="ti ti-smart-home"></i>
                                                    Home
                                                </a>
</li>
<li aria-current="page" className="breadcrumb-item active">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-light bg-opacity-50 p-2 mb-0">
<li className="breadcrumb-item">
<a href="#">
<i className="ti ti-smart-home"></i>
                                                    Home
                                                </a>
</li>
<li className="breadcrumb-item"><a href="#">Library</a></li>
<li aria-current="page" className="breadcrumb-item active">Data</li>
</ol>
</nav>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
