import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const GridPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Grid Options" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-body">
<h4 className="card-title mb-1">Grid Options</h4>
<p className="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
<div className="table-responsive">
<table className="table table-bordered table-striped mb-0">
<thead>
<tr>
<th></th>
<th className="text-center">
                                                        Extra small
                                                        <br/>
<small>&lt;576px</small>
</th>
<th className="text-center">
                                                        Small
                                                        <br/>
<small>≥576px</small>
</th>
<th className="text-center">
                                                        Medium
                                                        <br/>
<small>≥768px</small>
</th>
<th className="text-center">
                                                        Large
                                                        <br/>
<small>≥992px</small>
</th>
<th className="text-center">
                                                        Extra Large
                                                        <br/>
<small>≥1200px</small>
</th>
<th className="text-center">
                                                        Extra Large
                                                        <br/>
<small>≥1400px</small>
</th>
</tr>
</thead>
<tbody>
<tr>
<th className="text-nowrap" scope="row">
                                                        Container
                                                        <code className="fw-normal">max-width</code>
</th>
<td>None (auto)</td>
<td>540px</td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
<td>1320px</td>
</tr>
<tr>
<th className="text-nowrap" scope="row">Class prefix</th>
<td><code>.col-</code></td>
<td><code>.col-sm-</code></td>
<td><code>.col-md-</code></td>
<td><code>.col-lg-</code></td>
<td><code>.col-xl-</code></td>
<td><code>.col-xxl-</code></td>
</tr>
<tr>
<th className="text-nowrap" scope="row"># of columns</th>
<td colSpan={6}>12</td>
</tr>
<tr>
<th className="text-nowrap" scope="row">Gutter width</th>
<td colSpan={6}>1.25rem (0.625rem on left and right)</td>
</tr>
<tr>
<th className="text-nowrap" scope="row">Custom gutters</th>
<td colSpan={6}>Yes</td>
</tr>
<tr>
<th className="text-nowrap" scope="row">Nestable</th>
<td colSpan={6}>Yes</td>
</tr>
<tr>
<th className="text-nowrap" scope="row">Column ordering</th>
<td colSpan={6}>Yes</td>
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
