import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const WidgetsSocialPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Social" category="Widgets" />

      <div className="module-content-body">
<div className="container-xxl">
<div className="row">
<div className="col-xxl-6">
<div className="card">
<div className="card-body">
<h5 className="mb-2">What's on your mind?</h5>

<form action="#">
<textarea className="form-control" placeholder="Share your thoughts..." rows={3}></textarea>
<div className="d-flex pt-2 justify-content-between align-items-center">
<div className="d-flex gap-1">
<a className="btn btn-sm btn-icon btn-light" href="#">
<i className="ti ti-user fs-md"></i>
</a>
<a className="btn btn-sm btn-icon btn-light" href="#">
<i className="ti ti-map-pin fs-md"></i>
</a>
<a className="btn btn-sm btn-icon btn-light" href="#">
<i className="ti ti-camera fs-md"></i>
</a>
<a className="btn btn-sm btn-icon btn-light" href="#">
<i className="ti ti-mood-smile fs-md"></i>
</a>
</div>
<button className="btn btn-dark btn-sm" type="submit">Post</button>
</div>
</form>
</div>

</div>

<div className="card">
<div className="card-body text-center">

<h1 className="mb-2">🏆</h1>
<h4 className="mb-1 fw-semibold">Congratulations, David Dev! 🎉</h4>

<p className="text-muted fst-italic mb-3">
                                            Congratulations! You’ve reached
                                            <strong>5,000 subscribers</strong>
                                            ! Your community is growing fast!
                                        </p>

<div className="d-flex justify-content-center mb-3">
<div className="me-4 text-center">
<h6 className="mb-0">Posts</h6>
<span className="fw-bold">250</span>
</div>
<div className="me-4 text-center">
<h6 className="mb-0">Likes</h6>
<span className="fw-bold">15,200</span>
</div>
<div className="text-center">
<h6 className="mb-0">Subscribers</h6>
<span className="fw-bold">5,000</span>
</div>
</div>

<button className="btn btn-sm btn-outline-success me-2">
<i className="ti ti-share me-1"></i>
                                            Share Achievement
                                        </button>
<a className="btn btn-sm btn-primary" href="#!">
<i className="ti ti-user me-1"></i>
                                            View Profile
                                        </a>
</div>
</div>
<div className="card">
<div className="card-body pb-2">
<div className="d-flex align-items-center mb-2">
<img alt="Generic placeholder image" className="me-2 avatar-md rounded-circle" src="assets/images/users/user-10.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">Sophia Martinez</a>
</h5>
<p className="text-muted mb-0">
<small>about 5 minutes ago</small>
</p>
</div>
<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>
<p>Story inspired by the beauty of changing seasons — a nature-themed animation coming soon!</p>
<div className="row g-1">

<div className="col-md-6">
<img alt="Tall Image" className="img-fluid w-100 h-100 rounded" src="assets/images/gallery/10.jpg" style={{ aspectRatio: '3/4', objectFit: 'cover' }}/>
</div>

<div className="col-md-6 d-flex flex-column gap-1">
<img alt="Top Right" className="img-fluid w-100 rounded" src="assets/images/gallery/2.jpg" style={{ aspectRatio: '4/3', objectFit: 'cover' }}/>
<img alt="Bottom Right" className="img-fluid w-100 rounded" src="assets/images/gallery/3.jpg" style={{ aspectRatio: '4/3', objectFit: 'cover' }}/>
</div>
</div>
<div className="mt-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Like
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>
</div>
<div className="card">
<div className="card-body pb-2">
<div className="d-flex align-items-center mb-2">
<img alt="Generic placeholder image" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-4.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">Liam Anderson</a>
</h5>
<p className="text-muted mb-0">
<small>about 30 minutes ago</small>
</p>
</div>
<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>
<div className="fs-16 text-center mt-3 mb-4 fst-italic">
<i className="ti ti-quote fs-20"></i>
                                            Spent the weekend exploring the local trails! Captured some amazing nature shots and can’t wait to post them soon. 🌿📸
                                        </div>
<div className="bg-light-subtle mx-n3 p-3 border-top border-bottom border-dashed">
<div className="d-flex align-items-start">
<img alt="Generic placeholder image" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-5.jpg"/>
<div className="w-100">
<h5 className="mt-0 mb-1">
<a className="link-reset" href="#!">Ethan Reynolds</a>
<small className="text-muted fw-normal float-end">20 minutes ago</small>
</h5>
                                                    Loved your recent project! Really curious to see how you implemented the animations.
                                                    <br/>
<a className="text-muted font-13 d-inline-block mt-2" href="#!">
<i className="ti ti-corner-up-left"></i>
                                                        Reply
                                                    </a>
<div className="d-flex align-items-start mt-3">
<a className="pe-2" href="#">
<img alt="Generic placeholder image" className="avatar-sm rounded-circle" src="assets/images/users/user-6.jpg"/>
</a>
<div className="w-100">
<h5 className="mt-0 mb-1">
<a className="link-reset" href="#!">Mia Thompson</a>
<small className="text-muted fw-normal float-end">12 minutes ago</small>
</h5>
                                                            I created something similar in Angular last month — would love to swap tips!
                                                        </div>
</div>
</div>
</div>
<div className="d-flex align-items-start mt-3">
<a className="pe-2" href="#">
<img alt="Generic placeholder image" className="rounded-circle" height={31} src="assets/images/users/user-3.jpg"/>
</a>
<div className="w-100">
<input className="form-control form-control-sm" id="simpleinput" placeholder="Add a comment..." type="text"/>
</div>
</div>
</div>
<div className="mt-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="off">
<span className="d-none align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Likes (45)
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>

</div>

<div className="card">
<div className="card-body">

<div className="d-flex align-items-center mb-3">
<img alt="Profile photo of Anika Roy" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-2.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">Anika Roy</a>
</h5>
<p className="text-muted mb-0">
<small>Posted 2 hours ago</small>
</p>
</div>

<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>

<h5 className="mb-2">
                                            🌿 Save the Date:
                                            <strong>Nature Photography Workshop 2025</strong>
</h5>
<p className="text-muted mb-2">Join fellow creatives and outdoor enthusiasts for an inspiring weekend of nature photography tips, live field sessions, and community networking.</p>
<ul className="list-unstyled mb-3">
<li className="pb-2">
<strong>Date:</strong>
                                                Saturday, 14th September 2025
                                            </li>
<li className="pb-2">
<strong>Time:</strong>
                                                10:00 AM – 4:00 PM
                                            </li>
<li>
<strong>Location:</strong>
                                                Green Valley National Park (Meeting point to be shared)
                                            </li>
</ul>

<div className="d-flex gap-2">
<button className="btn btn-sm btn-outline-primary">
<i className="ti ti-bell me-1"></i>
                                                Interested
                                            </button>
<button className="btn btn-sm btn-primary">
<i className="ti ti-user-plus me-1"></i>
                                                Join Now
                                            </button>
</div>
</div>
</div>
<div className="card">
<div className="card-body pb-2">
<div className="d-flex align-items-center mb-2">
<img alt="Profile photo of Anika Roy" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-1.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">David Dev</a>
</h5>
<p className="text-muted mb-0">
<small>Posted 2 hours ago</small>
</p>
</div>
<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>
<p>Sharing a couple of timelapses from my recent Iceland trip. Let me know which one you like most!</p>
<div className="row g-2">
<div className="col-md-6">
<div className="ratio ratio-16x9 rounded overflow-hidden">
<iframe allowFullScreen src="https://player.vimeo.com/video/1084537"></iframe>
</div>
</div>
<div className="col-md-6">
<div className="ratio ratio-16x9 rounded overflow-hidden">
<iframe allowFullScreen src="https://player.vimeo.com/video/76979871"></iframe>
</div>
</div>
</div>
<div className="mt-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Like
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>

</div>

<div className="card">
<div className="card-body">

<div className="d-flex align-items-center mb-2">
<img alt="Profile photo of David Kim" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-6.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">David Kim</a>
</h5>
<p className="text-muted mb-0">
<small>Posted 10 hours ago</small>
</p>
</div>

<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>

<h5 className="mb-3">🔥 Quick Poll: What’s your go-to front-end framework in 2025?</h5>
<p className="text-muted">We’re gathering developer preferences for our next project. Cast your vote below! 💻</p>

<form>
<div className="form-check mb-1">
<input className="form-check-input" id="optionReact" name="framework_poll" type="radio"/>
<label className="form-check-label" htmlFor="optionReact">React (Meta)</label>
</div>
<div className="form-check mb-1">
<input className="form-check-input" id="optionVue" name="framework_poll" type="radio"/>
<label className="form-check-label" htmlFor="optionVue">Vue.js (Evan You)</label>
</div>
<div className="form-check mb-1">
<input className="form-check-input" id="optionAngular" name="framework_poll" type="radio"/>
<label className="form-check-label" htmlFor="optionAngular">Angular (Google)</label>
</div>
<div className="form-check mb-3">
<input className="form-check-input" id="optionSvelte" name="framework_poll" type="radio"/>
<label className="form-check-label" htmlFor="optionSvelte">Svelte (Emerging Favorite)</label>
</div>
<button className="btn btn-sm btn-primary" type="submit">Submit Vote</button>
</form>
</div>
</div>
<div className="card">

<div className="card-body pb-2 d-flex align-items-center">
<img className="avatar-md rounded-circle me-2" src="assets/images/users/user-6.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Sarah Mitchell</a></h5>
<small className="text-muted">Posted 4 hours ago</small>
</div>
<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i>Edit</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-trash me-2"></i>Delete</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="px-3 pb-3">
<div className="border rounded-3 p-3 bg-light-subtle">
<h5 className="fw-bold mb-1">🌟 Hiring: Front-End Developer</h5>
<p className="text-muted mb-3">Our team is growing! Looking for a talented developer experienced with modern JS frameworks.</p>
<ul className="list-unstyled mb-3">
<li><strong>Role:</strong> Front-End Developer</li>
<li><strong>Skills:</strong> React, Vue, ESBuild, Tailwind</li>
<li><strong>Location:</strong> Remote (Worldwide)</li>
</ul>
<button className="btn btn-primary w-100 rounded-pill">Apply Now</button>
</div>
</div>

<div className="card-footer border-0 pt-0 d-flex gap-3">
<div>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="off">
<span className="d-none align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Saved!
                                                </span>
<span className="align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Save
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>
</div>

<div className="card">

<div className="card-body pb-0 d-flex align-items-center">
<img className="avatar-md rounded-circle me-2" src="assets/images/users/user-3.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Daniel Carter</a></h5>
<small className="text-muted">6 hours ago</small>
</div>
<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i>Edit</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-trash me-2"></i>Delete</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="p-3 pb-1">
<p className="text-muted mb-2">Found this helpful tool for UI designers — bookmarking it for future projects!</p>
<a className="d-block border border-light rounded-4 text-reset overflow-hidden shadow-sm" href="#!">
<div className="d-flex">
<img className="img-fluid" src="assets/images/gallery/7.jpg" style={{ width: '140px', objectFit: 'cover' }}/>
<div className="p-3">
<h6 className="fw-bold mb-1">UI Component Library Explorer</h6>
<p className="small text-muted mb-0">Browse, compare and preview hundreds of UI components for modern frameworks.</p>
</div>
</div>
</a>
</div>

<div className="card-footer border-0 pt-3 d-flex gap-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                            Reply
                                        </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                Liked!
                                            </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                Like
                                            </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                            Share
                                        </a>
</div>
</div>

<div className="card">

<div className="card-body pb-0 d-flex align-items-center">
<img className="avatar-md rounded-circle me-2" src="assets/images/users/user-10.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Evelyn Brooks</a></h5>
<small className="text-muted">Just now</small>
</div>
<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="px-3 pb-3 pt-2">
<div className="bg-primary bg-opacity-10 text-primary rounded-3 p-4 text-center">
<h1 className="display-6 mb-0">🌤️</h1>
<h3 className="fw-bold mb-2">23°C</h3>
<p className="mb-0 fst-italic">Clear skies in <strong>Vancouver</strong></p>
</div>
<p className="mt-3 text-muted text-center">Perfect weather for a walk by the water today 🌊✨</p>
</div>

<div className="card-footer border-0 pt-0 d-flex justify-content-center gap-2">
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="off">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                Liked!
                                            </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                Like
                                            </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#"><i className="ti ti-corner-up-left me-1"></i>Comment</a>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#"><i className="ti ti-share me-1"></i>Share</a>
</div>
</div>

<div className="card">

<div className="card-body pb-2 d-flex align-items-center">
<img className="avatar-sm rounded-circle me-2" src="assets/images/users/user-8.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Emma Wilson</a></h5>
<small className="text-muted">3 hours ago</small>
</div>
<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="px-3">
<h5 className="fw-bold mb-1 mt-3">🎧 Song of the Day</h5>
<p className="text-muted mb-2">Found this calming track for focus sessions — highly recommend giving it a listen.</p>

<div className="bg-light-subtle rounded-4 p-3 shadow-sm">
<div className="d-flex align-items-center">
<img className="rounded me-3" src="assets/images/gallery/5.jpg" style={{ height: '60px', width: '60px', objectFit: 'cover' }}/>
<div className="flex-grow-1">
<div className="fw-semibold">Dreamscape Horizon</div>
<small className="text-muted">By SynthWaves</small>

<audio className="w-100 mt-2" controls style={{ height: '32px' }}>
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
                                                        Your browser does not support the audio element.
                                                    </audio>
</div>
</div>
</div>
</div>

<div className="card-footer border-0 d-flex gap-3">
<div>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Like
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>
</div>

</div>

<div className="col-xxl-6">
<div className="card">
<div className="card-body">
<div className="d-flex align-items-center mb-3">
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0">Create a Post</h5>
<span className="text-muted fs-xs">Share updates with your network</span>
</div>
</div>

<form action="#">
<div className="position-relative">
<textarea className="form-control rounded-3" placeholder="Write something meaningful..." rows={3}></textarea>
</div>
<div className="d-flex justify-content-between align-items-center mt-3">

<div className="d-flex gap-2">
<button className="btn btn-light btn-sm d-flex align-items-center gap-1 px-2" type="button">
<i className="ti ti-user fs-md"></i>
<span className="d-none d-sm-inline">Tag</span>
</button>
<button className="btn btn-light btn-sm d-flex align-items-center gap-1 px-2" type="button">
<i className="ti ti-map-pin fs-md"></i>
<span className="d-none d-sm-inline">Location</span>
</button>
<button className="btn btn-light btn-sm d-flex align-items-center gap-1 px-2" type="button">
<i className="ti ti-camera fs-md"></i>
<span className="d-none d-sm-inline">Photo</span>
</button>
<button className="btn btn-light btn-sm d-flex align-items-center gap-1 px-2" type="button">
<i className="ti ti-mood-smile fs-md"></i>
<span className="d-none d-sm-inline">Feeling</span>
</button>
</div>

<button className="btn btn-primary btn-sm px-3" type="submit">Publish</button>
</div>
</form>
</div>
</div>

<div className="card overflow-hidden">

<div className="bg-primary-subtle text-primary py-3 px-4 position-relative">
<h4 className="fw-bold mb-0">Achievement Unlocked</h4>
<span className="position-absolute top-50 end-0 translate-middle-y text-bg-warning fw-semibold px-2 py-1 rounded-start"> 🏅 Level Up </span>
</div>

<div className="card-body text-center py-4">
<div className="mb-3">
<h1 className="display-6 mb-0">💡</h1>
</div>
<h4 className="fw-semibold mb-1">Impressive Progress, David Dev!</h4>
<p className="text-muted mb-4">You’ve just reached <strong>Milestone Tier 3</strong> for your outstanding activity. Keep up the great momentum!</p>

<div className="d-flex justify-content-center gap-2 mb-4">
<div className="px-3 py-2 rounded border border-dashed">
<h6 className="mb-0 text-muted">Achievements</h6>
<div className="fw-bold fs-5">28</div>
</div>
<div className="px-3 py-2 rounded border border-dashed">
<h6 className="mb-0 text-muted">Followers</h6>
<div className="fw-bold fs-5">7,840</div>
</div>
<div className="px-3 py-2 rounded border border-dashed">
<h6 className="mb-0 text-muted">Score</h6>
<div className="fw-bold fs-5">1,920</div>
</div>
</div>

<div className="d-flex justify-content-center gap-2">
<button className="btn btn-outline-primary btn-sm">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </button>
<a className="btn btn-success btn-sm" href="#!">
<i className="ti ti-user me-1"></i>
                                                Profile
                                            </a>
</div>
</div>
</div>
<div className="card">
<div className="card-body pb-2">
<div className="d-flex align-items-center mb-2">
<img alt="Generic placeholder image" className="me-2 avatar-md rounded-circle" src="assets/images/users/user-10.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">Sophia Martinez</a>
</h5>
<p className="text-muted mb-0">
<small>about 5 minutes ago</small>
</p>
</div>
<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>
<p>Story inspired by the beauty of changing seasons — a nature-themed animation coming soon!</p>
<div className="row g-2">
<div className="col-12">
<img className="img-fluid w-100 rounded-3" src="assets/images/gallery/5.jpg" style={{ height: '260px', objectFit: 'cover' }}/>
</div>
<div className="col-6">
<img className="img-fluid w-100 rounded-3" src="assets/images/gallery/7.jpg" style={{ height: '150px', objectFit: 'cover' }}/>
</div>
<div className="col-6">
<img className="img-fluid w-100 rounded-3" src="assets/images/gallery/8.jpg" style={{ height: '150px', objectFit: 'cover' }}/>
</div>
</div>
<div className="mt-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Like
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>
</div>
<div className="card overflow-hidden">

<div className="card-body pb-0">
<div className="d-flex align-items-center">
<img alt="User" className="avatar-md rounded-circle me-2" src="assets/images/users/user-4.jpg"/>
<div className="flex-grow-1">
<h5 className="m-0">
<a className="link-reset" href="#!">Liam Anderson</a>
</h5>
<p className="text-muted mb-0">
<small>30 minutes ago</small>
</p>
</div>

<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i>Edit</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-trash me-2"></i>Delete</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-pin me-2"></i>Pin</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="border-start border-3 border-primary ps-3 mt-3 mb-4">
<p className="text-muted mb-0 fst-italic fs-15">
<i className="ti ti-quote me-2 fs-20 opacity-75"></i>
                                                Discovering peaceful nature trails today — captured some beautiful shots I can't wait to share. 🌲✨
                                            </p>
</div>
</div>

<div className="bg-light-subtle px-3 py-3 border-top">

<div className="d-flex align-items-start mb-3">
<img alt="User" className="avatar-sm rounded-circle me-3" src="assets/images/users/user-5.jpg"/>
<div className="flex-grow-1">
<div className="d-flex justify-content-between">
<h6 className="fw-semibold mb-0 fs-sm"><a className="link-reset" href="#!">Ethan Reynolds</a></h6>
<small className="text-muted">20 minutes ago</small>
</div>
<p className="mb-1 text-muted">This sounds amazing! Excited to see the photos — the last set you shared was incredible.</p>
<a className="small text-muted" href="#!"> <i className="ti ti-corner-up-left me-1"></i>Reply </a>

<div className="d-flex align-items-start mt-3 ps-4 border-start">
<img alt="User" className="avatar-sm rounded-circle me-3" src="assets/images/users/user-6.jpg"/>
<div className="flex-grow-1">
<div className="d-flex justify-content-between">
<h6 className="fw-semibold fs-sm mb-0"><a className="link-reset" href="#!">Mia Thompson</a></h6>
<small className="text-muted">12 minutes ago</small>
</div>
<p className="mb-0 text-muted">I hiked there last month! Those trails are perfect for photography — can't wait to see your shots!</p>
</div>
</div>
</div>
</div>

<div className="d-flex align-items-center mt-3">
<img alt="User" className="avatar-sm rounded-circle me-2" src="assets/images/users/user-3.jpg"/>
<input className="form-control form-control-sm rounded-pill" placeholder="Write a comment..." type="text"/>
</div>
</div>

<div className="p-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                            Reply
                                        </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                Liked!
                                            </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                Like
                                            </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                            Share
                                        </a>
</div>
</div>

<div className="card overflow-hidden">

<div className="position-relative">
<img alt="Event Banner" className="img-fluid w-100" src="assets/images/gallery/2.jpg" style={{ height: '180px', objectFit: 'cover' }}/>
<span className="badge bg-primary position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill"> 📸 Photography Event </span>

<div className="dropdown position-absolute top-0 end-0 m-3">
<a className="text-white" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i>Edit</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-trash me-2"></i>Delete</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-pin me-2"></i>Pin</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="card-body">

<div className="d-flex align-items-center mb-3">
<img alt="User" className="avatar-md rounded-circle me-2" src="assets/images/users/user-2.jpg"/>
<div>
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Anika Roy</a></h5>
<small className="text-muted">2 hours ago</small>
</div>
</div>

<h4 className="fw-bold mb-2">Nature Photography Workshop 2025</h4>
<p className="text-muted">A weekend event designed for photographers and outdoor lovers to learn, collaborate, and capture stunning nature moments together.</p>

<div className="row g-2 mb-3">
<div className="col-12 col-md-4">
<div className="bg-light-subtle border border-light-subtle border-dashed rounded-3 p-3 h-100">
<small className="text-muted text-uppercase fw-bold">Date</small>
<div className="fw-semibold mt-1">14 September 2025</div>
</div>
</div>
<div className="col-12 col-md-4">
<div className="bg-light-subtle border border-light-subtle border-dashed rounded-3 p-3 h-100">
<small className="text-muted text-uppercase fw-bold">Time</small>
<div className="fw-semibold mt-1">10:00 AM – 4:00 PM</div>
</div>
</div>
<div className="col-12 col-md-4">
<div className="bg-light-subtle border border-light-subtle border-dashed rounded-3 p-3 h-100">
<small className="text-muted text-uppercase fw-bold">Location</small>
<div className="fw-semibold mt-1">Green Valley National Park</div>
</div>
</div>
</div>

<div className="d-flex justify-content-center gap-2 mt-2">
<button className="btn btn-outline-primary btn-sm"><i className="ti ti-bell me-1"></i> Remind Me</button>
<button className="btn btn-primary btn-sm"><i className="ti ti-user-plus me-1"></i> Register</button>
</div>
</div>
</div>

<div className="card">
<div className="card-body pb-2">
<div className="d-flex align-items-center mb-2">
<img alt="Profile photo of Anika Roy" className="me-2 avatar-sm rounded-circle" src="assets/images/users/user-1.jpg"/>
<div className="w-100">
<h5 className="m-0">
<a className="link-reset" href="#!">David Dev</a>
</h5>
<p className="text-muted mb-0">
<small>Posted 2 hours ago</small>
</p>
</div>
<div className="dropdown ms-auto">
<a className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<div className="dropdown-menu dropdown-menu-end">
<a className="dropdown-item" href="#">
<i className="ti ti-edit me-2"></i>
                                                        Edit Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-trash me-2"></i>
                                                        Delete Post
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-share me-2"></i>
                                                        Share
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-pin me-2"></i>
                                                        Pin to Top
                                                    </a>
<a className="dropdown-item" href="#">
<i className="ti ti-flag me-2"></i>
                                                        Report Post
                                                    </a>
</div>
</div>
</div>
<p>Sharing a couple of timelapses from my recent Iceland trip. Let me know which one you like most!</p>
<div className="ratio ratio-16x9 rounded overflow-hidden">
<iframe allowFullScreen src="https://player.vimeo.com/video/1084537"></iframe>
</div>
<div className="mt-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                                Reply
                                            </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                    Liked!
                                                </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                    Like
                                                </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                                Share
                                            </a>
</div>
</div>

</div>

<div className="card">

<div className="card-body pb-0">
<div className="d-flex align-items-center">

<img alt="User" className="avatar-sm rounded-circle me-2" src="assets/images/users/user-6.jpg"/>

<div className="flex-grow-1">
<h5 className="fw-semibold mb-0">
<a className="link-reset" href="#!">David Kim</a>
</h5>
<small className="text-muted">10 hours ago</small>
</div>

<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-edit me-2"></i>Edit Post</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-trash me-2"></i>Delete Post</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-pin me-2"></i>Pin to Top</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report Post</a>
</li>
</ul>
</div>
</div>

<div className="mt-3">
<span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-2">📊 Community Poll</span>
<h5 className="fw-bold mb-1">Choose your favorite front-end framework in 2025</h5>
<p className="text-muted mb-2">Your vote helps us decide what to adopt for our next UI toolkit update.</p>
</div>
</div>

<div className="px-3 pb-3">
<div className="bg-light-subtle p-3 ps-4 rounded-3 border">

<form className="poll-form">
<div className="form-check mb-2 p-2 card-bg rounded-3 shadow-sm">
<input className="form-check-input" id="pollReact" name="poll" type="radio"/>
<label className="form-check-label fw-semibold" htmlFor="pollReact"> React (Meta) </label>
</div>
<div className="form-check mb-2 p-2 card-bg rounded-3 shadow-sm">
<input className="form-check-input" id="pollVue" name="poll" type="radio"/>
<label className="form-check-label fw-semibold" htmlFor="pollVue"> Vue.js (Evan You) </label>
</div>
<div className="form-check mb-2 p-2 card-bg rounded-3 shadow-sm">
<input className="form-check-input" id="pollAngular" name="poll" type="radio"/>
<label className="form-check-label fw-semibold" htmlFor="pollAngular"> Angular (Google) </label>
</div>
<div className="form-check mb-3 p-2 card-bg rounded-3 shadow-sm">
<input className="form-check-input" id="pollSvelte" name="poll" type="radio"/>
<label className="form-check-label fw-semibold" htmlFor="pollSvelte"> Svelte (Emerging Favorite) </label>
</div>

<button className="btn btn-primary w-100 rounded-pill" type="submit">Submit Vote</button>
</form>
</div>
</div>
</div>

<div className="card">

<div className="card-body pb-0 d-flex align-items-center">
<img className="avatar-sm rounded-circle me-2" src="assets/images/users/user-7.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Ava Thompson</a></h5>
<small className="text-muted">1 hour ago</small>
</div>
<div className="dropdown">
<a className="text-muted" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="p-3 pb-0">
<div className="rounded-4 overflow-hidden shadow-sm">
<img className="img-fluid w-100" src="assets/images/gallery/8.jpg" style={{ height: '260px', objectFit: 'cover' }}/>
</div>
</div>

<div className="px-3 py-2">
<p className="mb-2 text-muted">Dropping my favorite shot from yesterday's sunset hike. 🌅 Nature always surprises me.</p>
</div>

<div className="p-2">
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-corner-up-left me-1"></i>
                                            Reply
                                        </a>
<span className="btn btn-sm fs-sm btn-link text-muted" data-toggler="on">
<span className="align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
                                                Liked!
                                            </span>
<span className="d-none align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
                                                Like
                                            </span>
</span>
<a className="btn btn-sm fs-sm btn-link text-muted" href="#!">
<i className="ti ti-share me-1"></i>
                                            Share
                                        </a>
</div>
</div>

<div className="card overflow-hidden">

<div className="position-relative">
<img className="img-fluid w-100" src="assets/images/gallery/12.jpg" style={{ height: '200px', objectFit: 'cover', filter: 'brightness(0.5)' }}/>
<div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-4">
<i className="ti ti-quote fs-1 opacity-75 mb-2"></i>
<h4 className="fw-bold mb-1">“Creativity is intelligence having fun.”</h4>
<p className="small mb-0 opacity-75">A reminder to keep exploring, learning, and building.</p>
</div>

<div className="dropdown position-absolute top-0 end-0 m-3">
<a className="text-white" data-bs-toggle="dropdown" href="#">
<i className="ti ti-dots-vertical fs-lg"></i>
</a>
<ul className="dropdown-menu dropdown-menu-end">
<li>
<a className="dropdown-item" href="#"><i className="ti ti-share me-2"></i>Share</a>
</li>
<li>
<a className="dropdown-item" href="#"><i className="ti ti-flag me-2"></i>Report</a>
</li>
</ul>
</div>
</div>

<div className="card-body d-flex align-items-center">
<img className="avatar-md rounded-circle me-2" src="assets/images/users/user-4.jpg"/>
<div className="flex-grow-1">
<h5 className="fw-semibold mb-0"><a className="link-reset" href="#!">Noah Carter</a></h5>
<small className="text-muted">Shared an inspiration</small>
</div>
<span className="text-muted fs-xl" data-toggler="off">
<span className="d-none align-middle" data-toggler-on="">
<i className="ti ti-heart-filled text-danger"></i>
</span>
<span className="align-middle" data-toggler-off="">
<i className="ti ti-heart text-muted"></i>
</span>
</span>
</div>
</div>

</div>

</div>

</div>

      </div>
    </div>
  );
};
