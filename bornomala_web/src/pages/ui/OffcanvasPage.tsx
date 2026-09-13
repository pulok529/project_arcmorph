import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const OffcanvasPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Offcanvas" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Offcanvas</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-base">
                                        You can trigger an offcanvas using a link with
                                        <code>href</code>
                                        or a button with
                                        <code>data-bs-target</code>
                                        , but both must include
                                        <code>data-bs-toggle="offcanvas"</code>
                                        .
                                    </p>
<div className="d-flex flex-wrap gap-2">
<a aria-controls="offcanvasExample" className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">Link with href</a>
<button aria-controls="offcanvasExample" className="btn btn-primary" data-bs-target="#offcanvasExample" data-bs-toggle="offcanvas" type="button">Button with data-bs-target</button>
</div>

<div aria-labelledby="offcanvasExampleLabel" className="offcanvas offcanvas-start" id="offcanvasExample" tabIndex={-1}>
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
<ul className="ps-3">
<li className="">At vero eos et accusamus et iusto odio dignissimos</li>
<li className="">Et harum quidem rerum facilis</li>
<li className="">Temporibus autem quibusdam et aut officiis</li>
</ul>
</div>

</div>

</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Offcanvas Backdrop</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-base">
                                        When an offcanvas and its backdrop are visible,
                                        <code>&lt;body&gt;</code>
                                        scrolling is disabled. Use
                                        <code>data-bs-scroll</code>
                                        to enable scrolling and
                                        <code>data-bs-backdrop</code>
                                        to control the backdrop visibility.
                                    </p>
<div className="d-flex flex-wrap gap-2">

<button aria-controls="offcanvasScrolling" className="btn btn-primary" data-bs-target="#offcanvasScrolling" data-bs-toggle="offcanvas" type="button">Enable body scrolling</button>

<button aria-controls="offcanvasWithBackdrop" className="btn btn-primary" data-bs-target="#offcanvasWithBackdrop" data-bs-toggle="offcanvas" type="button">Enable backdrop (default)</button>

<button aria-controls="offcanvasWithBothOptions" className="btn btn-primary" data-bs-target="#offcanvasWithBothOptions" data-bs-toggle="offcanvas" type="button">Enable both scrolling &amp; backdrop</button>
</div>

<div aria-labelledby="offcanvasScrollingLabel" className="offcanvas offcanvas-start" data-bs-backdrop="false" data-bs-scroll="true" id="offcanvasScrolling" tabIndex={-1}>
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
<ul className="ps-3">
<li className="">At vero eos et accusamus et iusto odio dignissimos</li>
<li className="">Et harum quidem rerum facilis</li>
<li className="">Temporibus autem quibusdam et aut officiis</li>
</ul>
</div>

</div>

<div aria-labelledby="offcanvasWithBackdropLabel" className="offcanvas offcanvas-start" id="offcanvasWithBackdrop" tabIndex={-1}>
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
<ul className="ps-3">
<li className="">At vero eos et accusamus et iusto odio dignissimos</li>
<li className="">Et harum quidem rerum facilis</li>
<li className="">Temporibus autem quibusdam et aut officiis</li>
</ul>
</div>

</div>

<div aria-labelledby="offcanvasWithBothOptionsLabel" className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" tabIndex={-1}>
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
<ul className="ps-3">
<li className="">At vero eos et accusamus et iusto odio dignissimos</li>
<li className="">Et harum quidem rerum facilis</li>
<li className="">Temporibus autem quibusdam et aut officiis</li>
</ul>
</div>

</div>

</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Offcanvas Placement</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
<code>.offcanvas-start</code>
                                        positions the offcanvas on the left,
                                        <code>.offcanvas-end</code>
                                        on the right,
                                        <code>.offcanvas-top</code>
                                        displays it from the top, and
                                        <code>.offcanvas-bottom</code>
                                        displays it from the bottom of the viewport.
                                    </p>
<div>
<div className="d-flex flex-wrap gap-2">

<button aria-controls="offcanvasTop" className="btn btn-primary" data-bs-target="#offcanvasTop" data-bs-toggle="offcanvas" type="button">Toggle Top offcanvas</button>

<button aria-controls="offcanvasRight" className="btn btn-primary" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" type="button">Toggle right offcanvas</button>

<button aria-controls="offcanvasBottom" className="btn btn-primary" data-bs-target="#offcanvasBottom" data-bs-toggle="offcanvas" type="button">Toggle bottom offcanvas</button>

<button aria-controls="offcanvasLeft" className="btn btn-primary mt-2 mt-lg-0" data-bs-target="#offcanvasLeft" data-bs-toggle="offcanvas" type="button">Toggle Left offcanvas</button>
</div>

<div aria-labelledby="offcanvasTopLabel" className="offcanvas offcanvas-top" id="offcanvasTop" tabIndex={-1}>
<div className="offcanvas-header">
<h5 id="offcanvasTopLabel">Offcanvas Top</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
</div>

</div>

<div aria-labelledby="offcanvasRightLabel" className="offcanvas offcanvas-end" id="offcanvasRight" tabIndex={-1}>
<div className="offcanvas-header">
<h5 id="offcanvasRightLabel">Offcanvas right</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
</div>

</div>

<div aria-labelledby="offcanvasBottomLabel" className="offcanvas offcanvas-bottom" id="offcanvasBottom" tabIndex={-1}>
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
</div>

</div>

<div aria-labelledby="offcanvasLeftLabel" className="offcanvas offcanvas-start" id="offcanvasLeft" tabIndex={-1}>
<div className="offcanvas-header">
<h5 id="offcanvasLeftLabel">Offcanvas Left</h5>
<button aria-label="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
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
<h4 className="card-title">Dark Offcanvas</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted fs-sm">
                                        Customize the look of offcanvases using utility classes to suit different themes, such as dark navbars. Add
                                        <code>.text-bg-dark</code>
                                        to
                                        <code>.offcanvas</code>
                                        and
                                        <code>.btn-close-white</code>
                                        to
                                        <code>.btn-close</code>
                                        for dark styling.
                                    </p>
<button aria-controls="offcanvasDark" className="btn btn-primary" data-bs-target="#offcanvasDark" data-bs-toggle="offcanvas" type="button">Dark offcanvas</button>
<div aria-labelledby="offcanvasDarkLabel" className="offcanvas offcanvas-start text-bg-dark" id="offcanvasDark" tabIndex={-1}>
<div className="offcanvas-header">
<h5 id="offcanvasDarkLabel">Dark Offcanvas</h5>
<button aria-label="Close" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" type="button"></button>
</div>

<div className="offcanvas-body">
<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
<h5 className="mt-3">List</h5>
<ul className="ps-3">
<li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
<li className="">Neque porro quisquam est, qui dolorem</li>
<li className="">Quis autem vel eum iure qui in ea</li>
</ul>
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
