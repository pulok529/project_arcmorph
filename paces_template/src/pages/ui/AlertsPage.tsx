import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const AlertsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Alerts" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title mb-0">Default Alert</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="alert alert-primary" role="alert">This is a primary alert—something important you should know!</div>
<div className="alert alert-secondary" role="alert">This is a secondary alert—some additional context.</div>
<div className="alert alert-success" role="alert">Success! Your operation was completed successfully.</div>
<div className="alert alert-danger" role="alert">Error! Something went wrong—please try again.</div>
<div className="alert alert-warning" role="alert">Warning! Please double-check your inputs.</div>
<div className="alert alert-info" role="alert">Info: Here's something you might find useful.</div>
<div className="alert alert-light" role="alert">Light alert—just a subtle notification.</div>
<div className="alert alert-dark mb-0" role="alert">Dark alert—use for general-purpose messages.</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dismissing Alert with Solid Colors</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="alert alert-primary text-bg-primary alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Heads up! This is a primary alert with important information.</div>
</div>
<div className="alert alert-secondary text-bg-secondary alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Notice: This is a secondary alert with supporting details.</div>
</div>
<div className="alert alert-success text-bg-success alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Success! Your action was completed successfully.</div>
</div>
<div className="alert alert-danger text-bg-danger alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Error! Something went wrong—please try again later.</div>
</div>
<div className="alert alert-warning text-bg-warning alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Warning! Please review your input before proceeding.</div>
</div>
<div className="alert alert-info text-bg-info alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Info: Here’s something you might find helpful.</div>
</div>
<div className="alert alert-light text-bg-light alert-dismissible" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>Note: This is a light alert with a subtle message.</div>
</div>
<div className="alert alert-dark text-bg-dark alert-dismissible mb-0" role="alert">
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="alert" type="button"></button>
<div>Notice: This dark alert is great for general messages.</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Link Color</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="alert alert-primary" role="alert">
                                        Need more info? Check out
                                        <a className="alert-link" href="#">this primary link</a>
                                        for important details.
                                    </div>
<div className="alert alert-secondary" role="alert">
                                        Here's a secondary message with
                                        <a className="alert-link" href="#">a helpful link</a>
                                        for additional context.
                                    </div>
<div className="alert alert-success" role="alert">
                                        Operation successful! View the results
                                        <a className="alert-link" href="#">by clicking here</a>
                                        .
                                    </div>
<div className="alert alert-danger" role="alert">
                                        Something went wrong. Learn more
                                        <a className="alert-link" href="#">through this alert link</a>
                                        .
                                    </div>
<div className="alert alert-warning" role="alert">
                                        Heads up! You might want to check
                                        <a className="alert-link" href="#">this warning link</a>
                                        .
                                    </div>
<div className="alert alert-info" role="alert">
                                        Here’s some information that may help—click
                                        <a className="alert-link" href="#">this link</a>
                                        to read more.
                                    </div>
<div className="alert alert-light" role="alert">
                                        Just a light reminder with
                                        <a className="alert-link" href="#">a gentle link</a>
                                        to explore.
                                    </div>
<div className="alert alert-dark mb-0" role="alert">
                                        This is a general dark alert. Find out more
                                        <a className="alert-link" href="#">by clicking here</a>
                                        .
                                    </div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Additional Content</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="alert alert-success p-3" role="alert">
<h4 className="alert-heading">Great job!</h4>
<p>You’ve successfully read this important alert message. The text is intentionally a bit longer to demonstrate how spacing behaves in this kind of layout.</p>
<hr className="border-success border-opacity-25"/>
<p className="mb-0">Use margin utilities to keep your content clean and organized.</p>
</div>
<div className="alert alert-secondary p-3 d-flex" role="alert">
<i className="ti ti-alarm-snooze fs-1 me-2"></i>
<div>
<h4 className="alert-heading">Heads up!</h4>
<p>This alert message gives additional information with a longer message to show content spacing within an alert.</p>
<hr className="border-secondary border-opacity-25"/>
<p className="mb-0">Apply spacing classes wisely to maintain structure and clarity.</p>
</div>
</div>
<div className="alert alert-danger d-flex p-3 mb-0" role="alert">
<i className="ti ti-phone-ringing fs-1 me-2"></i>
<div>
<h4 className="alert-heading">Notice!</h4>
<p>You’ve just read through a primary alert message. The extra length helps show how well the layout handles content spacing.</p>
<button className="btn btn-danger btn-sm" type="button">Got it</button>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Custom Alerts</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="alert alert-primary alert-dismissible border border-primary" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>A primary alert with a full border!</div>
</div>
<div className="alert alert-secondary alert-bordered alert-dismissible border-start border-secondary" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>A secondary alert with a left border only!</div>
</div>
<div className="alert alert-dark alert-bordered alert-dismissible border-bottom border-dark" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>A dark alert with a bottom border!</div>
</div>
<div className="alert alert-success alert-dismissible border-2 border border-dashed border-success" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>A success alert with a dashed border!</div>
</div>
<div className="alert alert-danger alert-dismissible border-2 border-danger" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<div>A danger alert with a thick border!</div>
</div>
<div className="alert alert-warning d-flex align-items-center" role="alert">
<div>A warning alert with a custom close button!</div>
<button aria-label="Close" className="ms-auto btn btn-sm btn-warning btn-icon rounded-circle" data-bs-dismiss="alert" type="button">
<i className="ti ti-x fs-xl"></i>
</button>
</div>
<div className="alert alert-info alert-dismissible d-flex align-items-center gap-2" role="alert">
<button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
<i className="ti ti-alert-octagon fs-xl"></i>
                                        An info alert with a custom icon!
                                    </div>
<div className="alert alert-light border-2 d-flex align-items-center p-3 mb-0" role="alert">
<i className="ti ti-phone-ringing text-success fs-2 me-3"></i>
<div>
<h4 className="alert-heading">Notice!</h4>
<p className="m-0">You’ve just read through a primary alert message. The extra length helps show how well the layout handles content spacing.</p>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Live Alert</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div id="liveAlertPlaceholder"></div>
<button className="btn btn-primary" id="liveAlertBtn" type="button">Show live alert</button>
</div>

</div>
</div>
</div>

      </div>
    </div>
  );
};
