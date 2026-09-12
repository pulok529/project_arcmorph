import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const CollapsePage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Collapse" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Collapse</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p>
<a aria-controls="collapseExample" aria-expanded={false} className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample">Link with href</a>
<button aria-controls="collapseExample" aria-expanded={false} className="btn btn-primary ms-1" data-bs-target="#collapseExample" data-bs-toggle="collapse" type="button">Button with data-bs-target</button>
</p>
<div className="collapse show" id="collapseExample">
<div className="card border border-dashed border-light card-body mb-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
</div>
</div>

</div>

<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Multiple Targets</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="d-flex flex-wrap gap-2 mb-3">
<a aria-controls="multiCollapseExample1" aria-expanded={false} className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button">Toggle first element</a>
<button aria-controls="multiCollapseExample2" aria-expanded={false} className="btn btn-primary" data-bs-target="#multiCollapseExample2" data-bs-toggle="collapse" type="button">Toggle second element</button>
<button aria-controls="multiCollapseExample1 multiCollapseExample2" aria-expanded={false} className="btn btn-primary" data-bs-target=".multi-collapse" data-bs-toggle="collapse" type="button">Toggle both elements</button>
</div>
<div className="row">
<div className="col">
<div className="collapse multi-collapse" id="multiCollapseExample1">
<div className="card border border-dashed border-light card-body mb-0">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
</div>
</div>
<div className="col">
<div className="collapse multi-collapse" id="multiCollapseExample2">
<div className="card border border-dashed border-light card-body mb-0">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
</div>
</div>

</div>

</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Collapse Horizontal</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p>
<button aria-controls="collapseWidthExample" aria-expanded={false} className="btn btn-primary" data-bs-target="#collapseWidthExample" data-bs-toggle="collapse" type="button">Toggle width collapse</button>
</p>
<div style={{ height: '100px' }}>
<div className="collapse collapse-horizontal" id="collapseWidthExample">
<div className="card border border-dashed border-light card-body mb-0" style={{ width: '300px' }}>This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.</div>
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
