import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const TourPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Interactive Tour" category="Plugins" />

      <div className="module-content-body">
<div className="row justify-content-center">
<div className="col-lg-5">
<div className="text-center mt-4 mb-5">
<div className="auth-brand text-center mb-4">
<a className="logo-dark" href="index.html">
<img alt="dark logo" height={32} src="assets/images/logo-black.png"/>
</a>
<a className="logo-light" href="index.html">
<img alt="logo" height={32} src="assets/images/logo.png"/>
</a>
</div>
<h5 className="fs-lg mb-2">Versatile &amp; Scalable Admin Panel Template</h5>
<p className="text-muted fs-sm">
                                    Build modern web applications faster with our feature-rich admin panel. Compatible with multiple frameworks and packed with diverse demos, it offers seamless customization and a consistent UI across all your projects.
                                </p>

<div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
<button className="btn btn-primary" id="tourTrigger">
<i className="ti ti-player-play me-1"></i>
                                        Start Guided Tour
                                    </button>
<a className="btn btn-dark" data-tg-order="1" data-tg-title="Getting Started" data-tg-tour="Click here to get started and explore our framework-rich admin panel. 🚀" href="#">
<i className="ti ti-compass me-1"></i>
                                        Discover Features
                                    </a>
<a className="btn btn-danger" data-tg-order="2" data-tg-title="Buy Now" data-tg-tour="Ready to supercharge your project? Click here to purchase the template!" href="#!">
<i className="ti ti-shopping-cart me-1"></i>
                                        Get the Template
                                    </a>
</div>
</div>
</div>

</div>
<div className="container" data-tg-order="3" data-tg-title="Core Features" data-tg-tour="Learn more about the versatile services and modules we provide to enhance development.">
<div className="row">
<div className="col-xl-3">
<div className="card border-0 p-2 card-h-100">
<div className="card-body pb-0">
<div className="avatar-xl mb-3">
<span className="avatar-title text-bg-secondary rounded-circle fs-22">
<i className="ti ti-device-desktop"></i>
</span>
</div>
<h4 className="fw-semibold mb-2">Multiple Frameworks</h4>
<p className="text-muted mb-3">Support for Bootstrap, Tailwind, React, Vue, Angular, Laravel, and more — use what suits your stack.</p>
</div>
<div className="card-footer border-0 pt-0">
<a className="link-primary fw-semibold" href="#">
                                            Know more
                                            <i className="ti ti-arrow-right ms-1 align-middle"></i>
</a>
</div>
</div>
</div>
<div className="col-xl-3">
<div className="card border-0 p-2 card-h-100">
<div className="card-body pb-0">
<div className="avatar-xl mb-3">
<span className="avatar-title text-bg-secondary rounded-circle fs-22">
<i className="ti ti-layout"></i>
</span>
</div>
<h4 className="fw-semibold mb-2">Multiple Demos</h4>
<p className="text-muted mb-3">Choose from a variety of pre-built demos to match your use case — from CRM to SaaS dashboards.</p>
</div>
<div className="card-footer border-0 pt-0">
<a className="link-primary fw-semibold" href="#">
                                            Know more
                                            <i className="ti ti-arrow-right ms-1 align-middle"></i>
</a>
</div>
</div>
</div>
<div className="col-xl-3">
<div className="card border-0 p-2 card-h-100">
<div className="card-body pb-0">
<div className="avatar-xl mb-3">
<span className="avatar-title text-bg-secondary rounded-circle fs-22">
<i className="ti ti-brush"></i>
</span>
</div>
<h4 className="fw-semibold mb-2">Customizable UI</h4>
<p className="text-muted mb-3">Easily tailor colors, layouts, and components to match your branding and requirements.</p>
</div>
<div className="card-footer border-0 pt-0">
<a className="link-primary fw-semibold" href="#">
                                            Know more
                                            <i className="ti ti-arrow-right ms-1 align-middle"></i>
</a>
</div>
</div>
</div>
<div className="col-xl-3">
<div className="card border-0 p-2 card-h-100">
<div className="card-body pb-0">
<div className="avatar-xl mb-3">
<span className="avatar-title text-bg-secondary rounded-circle fs-22">
<i className="ti ti-rocket"></i>
</span>
</div>
<h4 className="fw-semibold mb-2">High Performance</h4>
<p className="text-muted mb-3">Optimized for speed and efficiency, our admin panel ensures a seamless experience for developers and users alike.</p>
</div>
<div className="card-footer border-0 pt-0">
<a className="link-primary fw-semibold" href="#">
                                            Know more
                                            <i className="ti ti-arrow-right ms-1 align-middle"></i>
</a>
</div>
</div>
</div>
</div>

</div>

      </div>
    </div>
  );
};
