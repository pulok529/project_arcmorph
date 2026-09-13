import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const ModalsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Modals" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Bootstrap Modals</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">A rendered modal with header, body, and set of actions in the footer.</p>

<div aria-hidden={true} aria-labelledby="standard-modalLabel" className="modal fade" id="standard-modal" role="dialog" tabIndex={-1}>
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="standard-modalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5>Text in a modal</h5>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<hr/>
<h5>Overflowing text to show scroll behavior</h5>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Save changes</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} aria-labelledby="myLargeModalLabel" className="modal fade" id="bs-example-modal-lg" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
</div>

</div>

</div>

<div aria-hidden={true} aria-labelledby="mySmallModalLabel" className="modal fade" id="bs-example-modal-sm" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-sm">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="mySmallModalLabel">Small modal</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
</div>

</div>

</div>


<div aria-hidden={true} aria-labelledby="fullWidthModalLabel" className="modal fade" id="full-width-modal" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-full-width">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="fullWidthModalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5>Text in a modal</h5>
<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<hr/>
<h5>Overflowing text to show scroll behavior</h5>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Save changes</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} aria-labelledby="scrollableModalTitle" className="modal fade" id="scrollable-modal" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-dialog-scrollable" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="scrollableModalTitle">Modal title</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p className="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
</div>
<div className="modal-footer">
<button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Save changes</button>
</div>
</div>

</div>

</div>

<div className="d-flex flex-wrap gap-2">

<button className="btn btn-primary" data-bs-target="#standard-modal" data-bs-toggle="modal" type="button">Standard Modal</button>

<button className="btn btn-info" data-bs-target="#bs-example-modal-lg" data-bs-toggle="modal" type="button">Large Modal</button>

<button className="btn btn-success" data-bs-target="#bs-example-modal-sm" data-bs-toggle="modal" type="button">Small Modal</button>

<button className="btn btn-primary" data-bs-target="#full-width-modal" data-bs-toggle="modal" type="button">Full Width Modal</button>

<button className="btn btn-secondary" data-bs-target="#scrollable-modal" data-bs-toggle="modal" type="button">Scrollable Modal</button>
</div>
</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Modal Position</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Specify the position for the modal. You can display modal at top, bottom, or center of page by specifying classes
                                        <code>modal-top</code>
                                        ,
                                        <code>modal-bottom</code>
                                        and
                                        <code>modal-dialog-centered</code>
                                        respectively.
                                    </p>

<div aria-hidden={true} className="modal fade" id="top-modal" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-top">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="topModalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5 className="mt-0">Text in a modal</h5>
<p className="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Save changes</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} className="modal fade" id="bottom-modal" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-bottom">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="bottomModalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5 className="mt-0">Text in a modal</h5>
<p className="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
<div className="modal-footer">
<button className="btn btn-light" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Save changes</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} className="modal fade" id="centermodal" role="dialog" tabIndex={-1}>
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="myCenterModalLabel">Center modal</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5 className="mt-0">Overflowing text to show scroll behavior</h5>
<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<p className="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
</div>
</div>

</div>

</div>

<div className="d-flex flex-wrap gap-2">

<button className="btn btn-secondary" data-bs-target="#top-modal" data-bs-toggle="modal" type="button">Top Modal</button>

<button className="btn btn-secondary" data-bs-target="#bottom-modal" data-bs-toggle="modal" type="button">Bottom Modal</button>

<button className="btn btn-secondary" data-bs-target="#centermodal" data-bs-toggle="modal" type="button">Center modal</button>
</div>
</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Multiple Modal</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">Display a series of modals one by one to guide your users on multiple aspects or take step wise input.</p>

<div aria-hidden={true} aria-labelledby="multiple-oneModalLabel" className="modal fade" id="multiple-one" role="dialog" tabIndex={-1}>
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="multiple-oneModalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5 className="mt-0">Text in a modal</h5>
<p className="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
<div className="modal-footer">
<button className="btn btn-primary" data-bs-dismiss="modal" data-bs-target="#multiple-two" data-bs-toggle="modal" type="button">Next</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} aria-labelledby="multiple-twoModalLabel" className="modal fade" id="multiple-two" role="dialog" tabIndex={-1}>
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h4 className="modal-title" id="multiple-twoModalLabel">Modal Heading</h4>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<h5 className="mt-0">Text in a modal</h5>
<p className="mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
<div className="modal-footer">
<button className="btn btn-primary" data-bs-dismiss="modal" type="button">Close</button>
</div>
</div>

</div>

</div>

<div className="d-flex flex-wrap gap-2">

<button className="btn btn-primary" data-bs-target="#multiple-one" data-bs-toggle="modal" type="button">Multiple Modal</button>
</div>
</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Toggle Between Modals</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Toggle between multiple modals with some clever placement of the
                                        <code>data-bs-target</code>
                                        and
                                        <code>data-bs-toggle</code>
                                        attributes.
                                    </p>

<div aria-hidden={true} aria-labelledby="exampleModalToggleLabel" className="modal fade" id="exampleModalToggle" tabIndex={-1}>
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">Show a second modal and hide this one with the button below.</div>
<div className="modal-footer">
<button className="btn btn-primary" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
</div>
</div>

</div>

</div>


<div aria-hidden={true} aria-labelledby="exampleModalToggleLabel2" className="modal fade" id="exampleModalToggle2" tabIndex={-1}>
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">Hide this modal and show the first with the button below.</div>
<div className="modal-footer">
<button className="btn btn-primary" data-bs-dismiss="modal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
</div>
</div>

</div>

</div>

<a className="btn btn-secondary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Fullscreen Modal</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a
                                        <code>.modal-dialog</code>
</p>
<div className="hstack gap-2 flex-wrap">

<button className="btn btn-primary" data-bs-target="#fullscreeexampleModal" data-bs-toggle="modal" type="button">Fullscreen Modal</button>

<button className="btn btn-primary" data-bs-target="#exampleModalFullscreenSm" data-bs-toggle="modal" type="button">Full Screen Below sm</button>

<button className="btn btn-primary" data-bs-target="#exampleModalFullscreenMd" data-bs-toggle="modal" type="button">Full Screen Below md</button>

<button className="btn btn-primary" data-bs-target="#exampleModalFullscreenLg" data-bs-toggle="modal" type="button">Full Screen Below lg</button>

<button className="btn btn-primary" data-bs-target="#exampleModalFullscreenXl" data-bs-toggle="modal" type="button">Full Screen Below xl</button>

<button className="btn btn-primary" data-bs-target="#exampleModalFullscreenXxl" data-bs-toggle="modal" type="button">Full Screen Below xxl</button>
</div>

<div aria-hidden={true} aria-labelledby="fullscreeexampleModalLabel" className="modal fade" id="fullscreeexampleModal" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="fullscreeexampleModalLabel">Full Screen Modal</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>

<div aria-hidden={true} aria-labelledby="exampleModalFullscreenSmLabel" className="modal fade" id="exampleModalFullscreenSm" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen-sm-down">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>

<div aria-hidden={true} aria-labelledby="exampleModalFullscreenMdLabel" className="modal fade" id="exampleModalFullscreenMd" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen-md-down">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>

<div aria-hidden={true} aria-labelledby="exampleModalFullscreenLgLabel" className="modal fade" id="exampleModalFullscreenLg" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen-lg-down">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>

<div aria-hidden={true} aria-labelledby="exampleModalFullscreenXlLabel" className="modal fade" id="exampleModalFullscreenXl" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen-sm-down">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>

<div aria-hidden={true} aria-labelledby="exampleModalFullscreenXxlLabel" className="modal fade" id="exampleModalFullscreenXxl" tabIndex={-1}>
<div className="modal-dialog modal-fullscreen-xxl-down">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">...</div>
<div className="modal-footer">
<a className="btn btn-light" data-bs-dismiss="modal" href="#!">Close</a>
<button className="btn btn-primary" type="button">Save Changes</button>
</div>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Static Backdrop</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
<div className="d-flex flex-wrap gap-2">

<button className="btn btn-info" data-bs-target="#staticBackdrop" data-bs-toggle="modal" type="button">Static Backdrop</button>
</div>


<div aria-hidden={true} aria-labelledby="staticBackdropLabel" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="staticBackdrop" tabIndex={-1}>
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>

<div className="modal-body">
<p className="m-0">I will not close if you click outside me. Don't even try to press escape key.</p>
</div>
<div className="modal-footer">
<button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Understood</button>
</div>

</div>

</div>

</div>

</div>

</div>

</div>

<div className="col-xl-12">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Varying Modal Content</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Have a bunch of buttons that all trigger the same modal with slightly different contents? Use
                                        <code>event.relatedTarget</code>
                                        and
                                        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank">
                                            HTML
                                            <code>data-bs-*</code>
                                            attributes
                                        </a>
                                        to vary the contents of the modal depending on which button was clicked.
                                    </p>
<div className="hstack gap-2 flex-wrap">
<button className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-whatever="@mdo" type="button">Open modal for @mdo</button>
<button className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-whatever="@fat" type="button">Open modal for @fat</button>
<button className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-whatever="@getbootstrap" type="button">Open modal for @getbootstrap</button>
</div>
<div aria-hidden={true} aria-labelledby="exampleModalLabel" className="modal fade" id="exampleModal" tabIndex={-1}>
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel">New message</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div className="modal-body">
<form>
<div className="mb-3">
<label className="col-form-label" htmlFor="recipient-name">Recipient:</label>
<input className="form-control" id="recipient-name" type="text"/>
</div>
<div className="mb-3">
<label className="col-form-label" htmlFor="message-text">Message:</label>
<textarea className="form-control" id="message-text"></textarea>
</div>
</form>
</div>
<div className="modal-footer">
<button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
<button className="btn btn-primary" type="button">Send message</button>
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
