import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PopoversPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Popovers" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Simple Popover</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<button className="btn btn-info" data-bs-content="Click here to get support from our team. We're here 24/7 to assist you." data-bs-toggle="popover" title="Need Help?" type="button">Get Support Info</button>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Dismiss on Next Click</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<button className="btn btn-primary" data-bs-content="Get quick tips and tricks to improve your workflow instantly." data-bs-toggle="popover" data-bs-trigger="focus" tabIndex={0} title="Quick Tips" type="button">Show Tips</button>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Hover</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<button className="btn btn-dark" data-bs-content="Discover features you didnâ€™t know existed. Hover to explore more!" data-bs-toggle="popover" data-bs-trigger="hover" tabIndex={0} title="Exciting Features!" type="button">Please Hover Me</button>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Four Directions</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="d-flex flex-wrap gap-2">

<button className="btn btn-primary" data-bs-content="This popover appears above the button. Great for tips or info." data-bs-placement="top" data-bs-toggle="popover" title="Top Popover" type="button">Popover on top</button>

<button className="btn btn-primary" data-bs-content="This popover shows below. Perfect for additional details." data-bs-placement="bottom" data-bs-toggle="popover" title="Bottom Popover" type="button">Popover on bottom</button>

<button className="btn btn-primary" data-bs-content="Slide in from the right to provide quick insights." data-bs-placement="right" data-bs-toggle="popover" title="Right Popover" type="button">Popover on right</button>

<button className="btn btn-primary" data-bs-content="Appears on the left side. Great for tooltips or notes." data-bs-placement="left" data-bs-toggle="popover" title="Left Popover" type="button">Popover on left</button>
</div>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Custom Popovers</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="d-flex flex-wrap gap-2">

<button className="btn btn-primary" data-bs-content="This is a primary-themed popover styled using CSS variables." data-bs-custom-className="popover-primary" data-bs-placement="right" data-bs-title="Primary Popover" data-bs-toggle="popover" type="button">
                                            Primary Popover
                                        </button>

<button className="btn btn-success" data-bs-content="This is a success-themed popover styled using CSS variables." data-bs-custom-className="popover-success" data-bs-placement="right" data-bs-title="Success Popover" data-bs-toggle="popover" type="button">
                                            Success Popover
                                        </button>

<button className="btn btn-danger" data-bs-content="This is a danger-themed popover styled using CSS variables." data-bs-custom-className="popover-danger" data-bs-placement="right" data-bs-title="Danger Popover" data-bs-toggle="popover" type="button">
                                            Danger Popover
                                        </button>

<button className="btn btn-info" data-bs-content="This is an info-themed popover styled using CSS variables." data-bs-custom-className="popover-info" data-bs-placement="right" data-bs-title="Info Popover" data-bs-toggle="popover" type="button">
                                            Info Popover
                                        </button>

<button className="btn btn-dark" data-bs-content="This is a dark-themed popover styled using CSS variables." data-bs-custom-className="popover-dark" data-bs-placement="right" data-bs-title="Dark Popover" data-bs-toggle="popover" type="button">
                                            Dark Popover
                                        </button>

<button className="btn btn-secondary" data-bs-content="This is a secondary-themed popover styled using CSS variables." data-bs-custom-className="popover-secondary" data-bs-placement="right" data-bs-title="Secondary Popover" data-bs-toggle="popover" type="button">
                                            Secondary Popover
                                        </button>
</div>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Disabled Elements</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<span className="d-inline-block" data-bs-content="This button is disabled, but the popover still works." data-bs-placement="top" data-bs-toggle="popover">
<button className="btn btn-primary" disabled style={{ pointerEvents: 'none' }} type="button">Disabled Button</button>
</span>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
