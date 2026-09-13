import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const VideosPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Videos" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Responsive embed video 21:9</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">

<div className="ratio ratio-21x9">
<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Responsive embed video 1:1</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">

<div className="ratio ratio-1x1">
<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Responsive embed video 16:9</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">

<div className="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Responsive embed video 4:3</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">

<div className="ratio ratio-4x3">
<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
