import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const AccordionsPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Accordions" category="Base UI" />

      <div className="module-content-body">
<div className="row">
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Default Accordions</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
<button aria-controls="collapseOne" aria-expanded={true} className="accordion-button" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">Accordion Item #1</button>
</h2>
<div aria-labelledby="headingOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong>
                                                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
<button aria-controls="collapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">Accordion Item #2</button>
</h2>
<div aria-labelledby="headingTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button aria-controls="collapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">Accordion Item #3</button>
</h2>
<div aria-labelledby="headingThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
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
<h4 className="card-title">Flush Accordions</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion accordion-flush" id="accordionFlushExample">
<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingOne">
<button aria-controls="flush-collapseOne" aria-expanded={false} className="accordion-button" data-bs-target="#flush-collapseOne" data-bs-toggle="collapse" type="button">Accordion Item #1</button>
</h2>
<div aria-labelledby="flush-headingOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" id="flush-collapseOne">
<div className="accordion-body">
<p className="m-0">
                                                        Placeholder content for this accordion, which is intended to demonstrate the
                                                        <code>.accordion-flush</code>
                                                        class. This is the first item's accordion body.
                                                    </p>
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingTwo">
<button aria-controls="flush-collapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#flush-collapseTwo" data-bs-toggle="collapse" type="button">Accordion Item #2</button>
</h2>
<div aria-labelledby="flush-headingTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseTwo">
<div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the
                                                    <code>.accordion-flush</code>
                                                    class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingThree">
<button aria-controls="flush-collapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#flush-collapseThree" data-bs-toggle="collapse" type="button">Accordion Item #3</button>
</h2>
<div aria-labelledby="flush-headingThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseThree">
<div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the
                                                    <code>.accordion-flush</code>
                                                    class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look
                                                    in a real-world application.
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
<h4 className="card-title">Always Open Accordions</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion" id="accordionPanelsStayOpenExample">
<div className="accordion-item">
<h2 className="accordion-header" id="panelsStayOpen-headingOne">
<button aria-controls="panelsStayOpen-collapseOne" aria-expanded={true} className="accordion-button" data-bs-target="#panelsStayOpen-collapseOne" data-bs-toggle="collapse" type="button">Accordion Item #1</button>
</h2>
<div aria-labelledby="panelsStayOpen-headingOne" className="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong>
                                                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
<button aria-controls="panelsStayOpen-collapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#panelsStayOpen-collapseTwo" data-bs-toggle="collapse" type="button">Accordion Item #2</button>
</h2>
<div aria-labelledby="panelsStayOpen-headingTwo" className="accordion-collapse collapse" id="panelsStayOpen-collapseTwo">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="panelsStayOpen-headingThree">
<button aria-controls="panelsStayOpen-collapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#panelsStayOpen-collapseThree" data-bs-toggle="collapse" type="button">Accordion Item #3</button>
</h2>
<div aria-labelledby="panelsStayOpen-headingThree" className="accordion-collapse collapse" id="panelsStayOpen-collapseThree">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
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
<h4 className="card-title">Accordion Without Arrow</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion accordion-arrow-none" id="withoutarrowaccordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="withoutarrowheadingOne">
<button aria-controls="withoutarrowcollapseOne" aria-expanded={true} className="accordion-button" data-bs-target="#withoutarrowcollapseOne" data-bs-toggle="collapse" type="button">Accordion Item #1</button>
</h2>
<div aria-labelledby="withoutarrowheadingOne" className="accordion-collapse collapse show" data-bs-parent="#withoutarrowaccordionExample" id="withoutarrowcollapseOne">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong>
                                                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="withoutarrowheadingTwo">
<button aria-controls="withoutarrowcollapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#withoutarrowcollapseTwo" data-bs-toggle="collapse" type="button">Accordion Item #2</button>
</h2>
<div aria-labelledby="withoutarrowheadingTwo" className="accordion-collapse collapse" data-bs-parent="#withoutarrowaccordionExample" id="withoutarrowcollapseTwo">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="withoutarrowheadingThree">
<button aria-controls="withoutarrowcollapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#withoutarrowcollapseThree" data-bs-toggle="collapse" type="button">Accordion Item #3</button>
</h2>
<div aria-labelledby="withoutarrowheadingThree" className="accordion-collapse collapse" data-bs-parent="#withoutarrowaccordionExample" id="withoutarrowcollapseThree">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
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
<h4 className="card-title">Bordered Accordions</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion accordion-bordered" id="BorderedaccordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="BorderedheadingOne">
<button aria-controls="BorderedcollapseOne" aria-expanded={true} className="accordion-button" data-bs-target="#BorderedcollapseOne" data-bs-toggle="collapse" type="button">Accordion Item #1</button>
</h2>
<div aria-labelledby="BorderedheadingOne" className="accordion-collapse collapse show" data-bs-parent="#BorderedaccordionExample" id="BorderedcollapseOne">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong>
                                                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="BorderedheadingTwo">
<button aria-controls="BorderedcollapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#BorderedcollapseTwo" data-bs-toggle="collapse" type="button">Accordion Item #2</button>
</h2>
<div aria-labelledby="BorderedheadingTwo" className="accordion-collapse collapse" data-bs-parent="#BorderedaccordionExample" id="BorderedcollapseTwo">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="BorderedheadingThree">
<button aria-controls="BorderedcollapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#BorderedcollapseThree" data-bs-toggle="collapse" type="button">Accordion Item #3</button>
</h2>
<div aria-labelledby="BorderedheadingThree" className="accordion-collapse collapse" data-bs-parent="#BorderedaccordionExample" id="BorderedcollapseThree">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
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
<h4 className="card-title">Custom Icon Accordion</h4>
<div className="card-action">
<a className="card-action-item" data-action="card-toggle" href="#!">
<i className="ti ti-chevron-up align-middle"></i>
</a>
</div>
</div>
<div className="card-body">
<div className="accordion accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="CustomIconheadingOne">
<button aria-controls="CustomIconcollapseOne" aria-expanded={true} className="accordion-button" data-bs-target="#CustomIconcollapseOne" data-bs-toggle="collapse" type="button">
                                                    Accordion item with custom icons
                                                    <i className="ti ti-plus accordion-icon accordion-icon-on"></i>
<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
</button>
</h2>
<div aria-labelledby="CustomIconheadingOne" className="accordion-collapse collapse show" data-bs-parent="#CustomIconaccordionExample" id="CustomIconcollapseOne">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong>
                                                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="CustomIconheadingTwo">
<button aria-controls="CustomIconcollapseTwo" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#CustomIconcollapseTwo" data-bs-toggle="collapse" type="button">
                                                    Accordion item with custom icons
                                                    <i className="ti ti-plus accordion-icon accordion-icon-on"></i>
<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
</button>
</h2>
<div aria-labelledby="CustomIconheadingTwo" className="accordion-collapse collapse" data-bs-parent="#CustomIconaccordionExample" id="CustomIconcollapseTwo">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
                                                </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="CustomIconheadingThree">
<button aria-controls="CustomIconcollapseThree" aria-expanded={false} className="accordion-button collapsed" data-bs-target="#CustomIconcollapseThree" data-bs-toggle="collapse" type="button">
                                                    Accordion item with custom icons
                                                    <i className="ti ti-plus accordion-icon accordion-icon-on"></i>
<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
</button>
</h2>
<div aria-labelledby="CustomIconheadingThree" className="accordion-collapse collapse" data-bs-parent="#CustomIconaccordionExample" id="CustomIconcollapseThree">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong>
                                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                                    modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                                    <code>.accordion-body</code>
                                                    , though the transition does limit overflow.
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
