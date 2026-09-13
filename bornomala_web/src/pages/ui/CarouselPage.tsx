import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const CarouselPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Carousel" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Slides Only</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">
<div className="carousel-inner" role="listbox">
<div className="carousel-item active">

<img alt="First slide" className="d-block img-fluid" src="assets/images/stock/small-1.jpg"/>
</div>
<div className="carousel-item">

<img alt="Second slide" className="d-block img-fluid" src="assets/images/stock/small-2.jpg"/>
</div>
<div className="carousel-item">

<img alt="Third slide" className="d-block img-fluid" src="assets/images/stock/small-3.jpg"/>
</div>
</div>
</div>
</div>

</div>
</div>
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">With Controls</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">

<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleControls">
<div className="carousel-inner" role="listbox">
<div className="carousel-item active">

<img alt="First slide" className="d-block img-fluid" src="assets/images/stock/small-4.jpg"/>
</div>
<div className="carousel-item">

<img alt="Second slide" className="d-block img-fluid" src="assets/images/stock/small-1.jpg"/>
</div>
<div className="carousel-item">

<img alt="Third slide" className="d-block img-fluid" src="assets/images/stock/small-2.jpg"/>
</div>
</div>
<a className="carousel-control-prev" data-bs-slide="prev" href="#carouselExampleControls" role="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" data-bs-slide="next" href="#carouselExampleControls" role="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>

</div>

</div>
<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">With Indicators</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
<div className="carousel-indicators">
<button aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
<button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
<button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
</div>
<div className="carousel-inner" role="listbox">
<div className="carousel-item active">

<img alt="First slide" className="d-block img-fluid" src="assets/images/stock/small-3.jpg"/>
</div>
<div className="carousel-item">

<img alt="Second slide" className="d-block img-fluid" src="assets/images/stock/small-2.jpg"/>
</div>
<div className="carousel-item">

<img alt="Third slide" className="d-block img-fluid" src="assets/images/stock/small-1.jpg"/>
</div>
</div>
<a className="carousel-control-prev" data-bs-slide="prev" href="#carouselExampleIndicators" role="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" data-bs-slide="next" href="#carouselExampleIndicators" role="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>

</div>
</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">With Captions</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleCaption">
<div className="carousel-inner" role="listbox">
<div className="carousel-item active">

<img alt="..." className="d-block img-fluid" src="assets/images/stock/small-1.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h3 className="text-white">First slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
<div className="carousel-item">

<img alt="..." className="d-block img-fluid" src="assets/images/stock/small-3.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h3 className="text-white">Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
<div className="carousel-item">

<img alt="..." className="d-block img-fluid" src="assets/images/stock/small-2.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h3 className="text-white">Third slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
</div>
<a className="carousel-control-prev" data-bs-slide="prev" href="#carouselExampleCaption" role="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" data-bs-slide="next" href="#carouselExampleCaption" role="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>

</div>
</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Crossfade</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel slide carousel-fade" data-bs-ride="carousel" id="carouselExampleFade">
<div className="carousel-inner">
<div className="carousel-item active">

<img alt="First slide" className="d-block img-fluid" src="assets/images/stock/small-1.jpg"/>
</div>
<div className="carousel-item">

<img alt="Second slide" className="d-block img-fluid" src="assets/images/stock/small-2.jpg"/>
</div>
<div className="carousel-item">

<img alt="Third slide" className="d-block img-fluid" src="assets/images/stock/small-3.jpg"/>
</div>
</div>
<a className="carousel-control-prev" data-bs-slide="prev" href="#carouselExampleFade" role="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" data-bs-slide="next" href="#carouselExampleFade" role="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>

</div>
</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Individual Interval</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel slide" data-bs-ride="carousel" id="carouselExampleInterval">
<div className="carousel-inner">
<div className="carousel-item active" data-bs-interval="1000">

<img alt="First slide" className="img-fluid d-block w-100" src="assets/images/stock/small-4.jpg"/>
</div>
<div className="carousel-item" data-bs-interval="2000">

<img alt="Second slide" className="img-fluid d-block w-100" src="assets/images/stock/small-2.jpg"/>
</div>
<div className="carousel-item">

<img alt="Third slide" className="img-fluid d-block w-100" src="assets/images/stock/small-1.jpg"/>
</div>
</div>
<a className="carousel-control-prev" data-bs-slide="prev" href="#carouselExampleInterval" role="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" data-bs-slide="next" href="#carouselExampleInterval" role="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
</div>

</div>
</div>

<div className="col-lg-6">
<div className="card">
<div className="card-header">
<div className="flex-grow-1">
<h4 className="card-title">Dark Variant</h4>
</div>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="carousel carousel-dark slide" id="carouselExampleDark">
<div className="carousel-indicators">
<button aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleDark" type="button"></button>
<button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleDark" type="button"></button>
<button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleDark" type="button"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active" data-bs-interval="10000">

<img alt="Images" className="img-fluid" src="assets/images/stock/small-8.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h4 className="fw-bold">First slide label</h4>
<p>Some representative placeholder content for the first slide.</p>
</div>
</div>
<div className="carousel-item" data-bs-interval="2000">

<img alt="Images" className="img-fluid" src="assets/images/stock/small-9.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h4 className="fw-bold">Second slide label</h4>
<p>Some representative placeholder content for the second slide.</p>
</div>
</div>
<div className="carousel-item">

<img alt="Images" className="img-fluid" src="assets/images/stock/small-10.jpg"/>
<div className="carousel-caption d-none d-md-block">
<h4 className="fw-bold">Third slide label</h4>
<p>Some representative placeholder content for the third slide.</p>
</div>
</div>
</div>
<button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleDark" type="button">
<span aria-hidden={true} className="carousel-control-prev-icon"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleDark" type="button">
<span aria-hidden={true} className="carousel-control-next-icon"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
</div>

</div>
</div>

</div>

      </div>
    </div>
  );
};
