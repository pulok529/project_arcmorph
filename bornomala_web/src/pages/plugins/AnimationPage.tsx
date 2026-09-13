import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const AnimationPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Animation" category="Plugins" />

      <div className="module-content-body">
<div className="row">
<div className="col-12">
<div className="card">
<div className="card-header">
<h4 className="card-title">Animate.css</h4>
</div>
<div className="card-body">
<p className="text-muted">
                                        A cross-browser library of CSS animations. Animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.
                                    </p>
<div className="row g-lg-4">
<div className="col-sm-4">
<div className="card card-top-sticky overflow-hidden">
<div className="card-body">
<div className="animate__animated" id="animation_box">
<img alt="user" className="img-fluid rounded" src="assets/images/blog/blog-1.jpg"/>
</div>
<p className="mt-3 text-muted text-center mb-0">Example box for animation effect.</p>
</div>
</div>
</div>
<div className="col-lg-8">
<div className="alert alert-info">Click any of the buttons below to see the animation effect applied to the box on the left.</div>
<div className="accordion" id="animationAccordion">

<div className="accordion-item">
<h2 className="accordion-header" id="headingAttention">
<button className="accordion-button" data-bs-target="#collapseAttention" data-bs-toggle="collapse" type="button">Attention Seekers</button>
</h2>
<div className="accordion-collapse collapse show" data-bs-parent="#animationAccordion" id="collapseAttention">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="bounce" href="#">bounce</a>
<a className="btn btn-light animation_select" data-animation="flash" href="#">flash</a>
<a className="btn btn-light animation_select" data-animation="pulse" href="#">pulse</a>
<a className="btn btn-light animation_select" data-animation="rubberBand" href="#">rubberBand</a>
<a className="btn btn-light animation_select" data-animation="shakeX" href="#">shakeX</a>
<a className="btn btn-light animation_select" data-animation="shakeY" href="#">shakeY</a>
<a className="btn btn-light animation_select" data-animation="headShake" href="#">headShake</a>
<a className="btn btn-light animation_select" data-animation="swing" href="#">swing</a>
<a className="btn btn-light animation_select" data-animation="tada" href="#">tada</a>
<a className="btn btn-light animation_select" data-animation="wobble" href="#">wobble</a>
<a className="btn btn-light animation_select" data-animation="jello" href="#">jello</a>
<a className="btn btn-light animation_select" data-animation="heartBeat" href="#">heartBeat</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingBounceIn">
<button className="accordion-button collapsed" data-bs-target="#collapseBounceIn" data-bs-toggle="collapse" type="button">Bouncing Entrances</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseBounceIn">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="bounceIn" href="#">bounceIn</a>
<a className="btn btn-light animation_select" data-animation="bounceInDown" href="#">bounceInDown</a>
<a className="btn btn-light animation_select" data-animation="bounceInLeft" href="#">bounceInLeft</a>
<a className="btn btn-light animation_select" data-animation="bounceInRight" href="#">bounceInRight</a>
<a className="btn btn-light animation_select" data-animation="bounceInUp" href="#">bounceInUp</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingFadeIn">
<button className="accordion-button collapsed" data-bs-target="#collapseFadeIn" data-bs-toggle="collapse" type="button">Fading Entrances</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseFadeIn">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="fadeIn" href="#">fadeIn</a>
<a className="btn btn-light animation_select" data-animation="fadeInDown" href="#">fadeInDown</a>
<a className="btn btn-light animation_select" data-animation="fadeInLeft" href="#">fadeInLeft</a>
<a className="btn btn-light animation_select" data-animation="fadeInRight" href="#">fadeInRight</a>
<a className="btn btn-light animation_select" data-animation="fadeInUp" href="#">fadeInUp</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingFadeOut">
<button className="accordion-button collapsed" data-bs-target="#collapseFadeOut" data-bs-toggle="collapse" type="button">Fading Exits</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseFadeOut">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="fadeOut" href="#">fadeOut</a>
<a className="btn btn-light animation_select" data-animation="fadeOutDown" href="#">fadeOutDown</a>
<a className="btn btn-light animation_select" data-animation="fadeOutLeft" href="#">fadeOutLeft</a>
<a className="btn btn-light animation_select" data-animation="fadeOutRight" href="#">fadeOutRight</a>
<a className="btn btn-light animation_select" data-animation="fadeOutUp" href="#">fadeOutUp</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingFlip">
<button className="accordion-button collapsed" data-bs-target="#collapseFlip" data-bs-toggle="collapse" type="button">Flippers</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseFlip">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="flip" href="#">flip</a>
<a className="btn btn-light animation_select" data-animation="flipInX" href="#">flipInX</a>
<a className="btn btn-light animation_select" data-animation="flipInY" href="#">flipInY</a>
<a className="btn btn-light animation_select" data-animation="flipOutX" href="#">flipOutX</a>
<a className="btn btn-light animation_select" data-animation="flipOutY" href="#">flipOutY</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingLightSpeed">
<button className="accordion-button collapsed" data-bs-target="#collapseLightSpeed" data-bs-toggle="collapse" type="button">Light Speed</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseLightSpeed">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="lightSpeedInLeft" href="#">lightSpeedInLeft</a>
<a className="btn btn-light animation_select" data-animation="lightSpeedInRight" href="#">lightSpeedInRight</a>
<a className="btn btn-light animation_select" data-animation="lightSpeedOutLeft" href="#">lightSpeedOutLeft</a>
<a className="btn btn-light animation_select" data-animation="lightSpeedOutRight" href="#">lightSpeedOutRight</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingRotate">
<button className="accordion-button collapsed" data-bs-target="#collapseRotate" data-bs-toggle="collapse" type="button">Rotate</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseRotate">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="rotateIn" href="#">rotateIn</a>
<a className="btn btn-light animation_select" data-animation="rotateInDownLeft" href="#">rotateInDownLeft</a>
<a className="btn btn-light animation_select" data-animation="rotateInDownRight" href="#">rotateInDownRight</a>
<a className="btn btn-light animation_select" data-animation="rotateInUpLeft" href="#">rotateInUpLeft</a>
<a className="btn btn-light animation_select" data-animation="rotateInUpRight" href="#">rotateInUpRight</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingZoom">
<button className="accordion-button collapsed" data-bs-target="#collapseZoom" data-bs-toggle="collapse" type="button">Zoom</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseZoom">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="zoomIn" href="#">zoomIn</a>
<a className="btn btn-light animation_select" data-animation="zoomInDown" href="#">zoomInDown</a>
<a className="btn btn-light animation_select" data-animation="zoomInLeft" href="#">zoomInLeft</a>
<a className="btn btn-light animation_select" data-animation="zoomInRight" href="#">zoomInRight</a>
<a className="btn btn-light animation_select" data-animation="zoomInUp" href="#">zoomInUp</a>
<a className="btn btn-light animation_select" data-animation="zoomOut" href="#">zoomOut</a>
<a className="btn btn-light animation_select" data-animation="zoomOutDown" href="#">zoomOutDown</a>
<a className="btn btn-light animation_select" data-animation="zoomOutLeft" href="#">zoomOutLeft</a>
<a className="btn btn-light animation_select" data-animation="zoomOutRight" href="#">zoomOutRight</a>
<a className="btn btn-light animation_select" data-animation="zoomOutUp" href="#">zoomOutUp</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingSlide">
<button className="accordion-button collapsed" data-bs-target="#collapseSlide" data-bs-toggle="collapse" type="button">Sliding</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseSlide">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="slideInDown" href="#">slideInDown</a>
<a className="btn btn-light animation_select" data-animation="slideInLeft" href="#">slideInLeft</a>
<a className="btn btn-light animation_select" data-animation="slideInRight" href="#">slideInRight</a>
<a className="btn btn-light animation_select" data-animation="slideInUp" href="#">slideInUp</a>
<a className="btn btn-light animation_select" data-animation="slideOutDown" href="#">slideOutDown</a>
<a className="btn btn-light animation_select" data-animation="slideOutLeft" href="#">slideOutLeft</a>
<a className="btn btn-light animation_select" data-animation="slideOutRight" href="#">slideOutRight</a>
<a className="btn btn-light animation_select" data-animation="slideOutUp" href="#">slideOutUp</a>
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingSpecial">
<button className="accordion-button collapsed" data-bs-target="#collapseSpecial" data-bs-toggle="collapse" type="button">Special</button>
</h2>
<div className="accordion-collapse collapse" data-bs-parent="#animationAccordion" id="collapseSpecial">
<div className="accordion-body d-flex flex-wrap gap-2">
<a className="btn btn-light animation_select" data-animation="hinge" href="#">hinge</a>
<a className="btn btn-light animation_select" data-animation="jackInTheBox" href="#">jackInTheBox</a>
<a className="btn btn-light animation_select" data-animation="rollIn" href="#">rollIn</a>
<a className="btn btn-light animation_select" data-animation="rollOut" href="#">rollOut</a>
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

      </div>
    </div>
  );
};
