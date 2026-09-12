import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const PlaceholdersPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Placeholders" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Placeholders</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.</p>
<div className="row">
<div className="col-md-5">
<div className="card border shadow-none mb-md-0">

<img alt="..." className="card-img-top" src="assets/images/stock/small-1.jpg"/>
<div className="card-body">
<h5 className="card-title mb-2">Card Title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a className="btn btn-primary" href="#">Go somewhere</a>
</div>

</div>

</div>

<div className="col-md-5">
<div aria-hidden={true} className="card border shadow-none mb-0">
<svg aria-label="Placeholder" className="card-img-top" preserveAspectRatio="xMidYMid slice" role="img" style={{ aspectRatio: '16 / 10' }} viewBox="0 0 16 10" width="100%" xmlns="http://www.w3.org/2000/svg">
<title>Placeholder</title>
<rect fill="#20c997" height={10} width={16}></rect>
</svg>
<div className="card-body">
<h5 className="card-title mb-2 placeholder-glow">
<span className="placeholder col-6"> </span>
</h5>
<p className="card-text placeholder-glow">
<span className="placeholder col-7"></span>
<span className="placeholder col-4"></span>
<span className="placeholder col-4"></span>
<span className="placeholder col-6"></span>
<span className="placeholder col-3"></span>
</p>
<a aria-disabled className="btn btn-primary disabled placeholder col-6">
<span className="invisible">Read Only</span>
</a>
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
<h4 className="card-title">Color</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        By default, the
                                        <code>placeholder</code>
                                        uses
                                        <code>currentColor</code>
                                        . This can be overriden with a custom color or utility class.
                                    </p>
<span className="placeholder col-12"></span>
<span className="placeholder col-12 bg-primary"></span>
<span className="placeholder col-12 bg-secondary"></span>
<span className="placeholder col-12 bg-success"></span>
<span className="placeholder col-12 bg-danger"></span>
<span className="placeholder col-12 bg-warning"></span>
<span className="placeholder col-12 bg-info"></span>
<span className="placeholder col-12 bg-light"></span>
<span className="placeholder col-12 bg-dark"></span>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Width</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        You can change the
                                        <code>width</code>
                                        through grid column classes, width utilities, or inline styles.
                                    </p>
<span className="placeholder col-6"></span>
<span className="placeholder w-75"></span>
<span className="placeholder" style={{ width: '25%' }}></span>
<span className="placeholder" style={{ width: '10%' }}></span>
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
<p className="text-muted">
                                        The size of
                                        <code>.placeholder</code>
                                        s are based on the typographic style of the parent element. Customize them with sizing modifiers:
                                        <code>.placeholder-lg</code>
                                        ,
                                        <code>.placeholder-sm</code>
                                        , or
                                        <code>.placeholder-xs</code>
                                        .
                                    </p>
<span className="placeholder col-12 placeholder-lg"></span>
<span className="placeholder col-12"></span>
<span className="placeholder col-12 placeholder-sm"></span>
<span className="placeholder col-12 placeholder-xs"></span>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">How it works</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Create placeholders with the
                                        <code>.placeholder</code>
                                        class and a grid column class (e.g.,
                                        <code>.col-6</code>
                                        ) to set the
                                        <code>width</code>
                                        . They can replace the text inside an element or as be added as a modifier class to an existing component.
                                    </p>
<p aria-hidden={true}>
<span className="placeholder col-6"></span>
</p>
<a aria-hidden={true} className="btn btn-primary disabled placeholder col-4" href="#"></a>
</div>

</div>

</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Animation</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<p className="text-muted">
                                        Animate placehodlers with
                                        <code>.placeholder-glow</code>
                                        or
                                        <code>.placeholder-wave</code>
                                        to better convey the perception of something being
                                        <em>actively</em>
                                        loaded.
                                    </p>
<p className="placeholder-glow">
<span className="placeholder col-12"></span>
</p>
<p className="placeholder-wave mb-0">
<span className="placeholder col-12"></span>
</p>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
