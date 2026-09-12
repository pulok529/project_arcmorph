import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormWizardPage: React.FC = () => {
  const [activeStep1, setActiveStep1] = useState(1);
  const [activeStep2, setActiveStep2] = useState(1);
  const [activeStep3, setActiveStep3] = useState(1);
  const [activeStep4, setActiveStep4] = useState(1);

  const steps = [
    { id: 1, title: 'Student Info', subtitle: 'Personal details', icon: 'ti-user-circle' },
    { id: 2, title: 'Address Info', subtitle: 'Where you live', icon: 'ti-map-pin' },
    { id: 3, title: 'Course Info', subtitle: 'Select your course', icon: 'ti-book' },
    { id: 4, title: 'Parent Info', subtitle: 'Guardian details', icon: 'ti-users' },
    { id: 5, title: 'Documents', subtitle: 'Upload certificates', icon: 'ti-folder-open' },
  ];

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Form Wizard" category="Forms" />

      <div className="module-content-body">
        <div className="row g-4">
          {/* Card 1: Basic Wizard */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Basic Wizard</h4>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs wizard-tabs mb-3" role="tablist">
                  {steps.map((step) => (
                    <li key={step.id} className="nav-item">
                      <button 
                        type="button" 
                        className={`nav-link text-start w-100 ${activeStep1 === step.id ? 'active' : ''}`}
                        onClick={() => setActiveStep1(step.id)}
                      >
                        <span className="d-flex align-items-center">
                          <i className={`ti ${step.icon} fs-32 text-primary`}></i>
                          <span className="flex-grow-1 ms-2">
                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-base">{step.title}</span>
                            <span className="fs-xxs text-muted mb-0">{step.subtitle}</span>
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content pt-2">
                  {activeStep1 === 1 && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name" defaultValue="John Doe" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" defaultValue="john@example.com" />
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-primary" onClick={() => setActiveStep1(2)}>Next: Address Info →</button>
                      </div>
                    </div>
                  )}
                  {activeStep1 === 2 && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Street Address</label>
                        <input type="text" className="form-control" placeholder="123 Main St" defaultValue="123 Silicon Ave" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="City" defaultValue="San Francisco" />
                      </div>
                      <div className="col-12 d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-secondary" onClick={() => setActiveStep1(1)}>← Back</button>
                        <button type="button" className="btn btn-primary" onClick={() => setActiveStep1(3)}>Next: Course Info →</button>
                      </div>
                    </div>
                  )}
                  {activeStep1 >= 3 && (
                    <div className="text-center py-4">
                      <i className="ti ti-circle-check text-success fs-48 mb-2"></i>
                      <h5>Step {activeStep1} Configuration</h5>
                      <p className="text-muted">Fill out remaining step details.</p>
                      <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-secondary" onClick={() => setActiveStep1(activeStep1 - 1)}>← Back</button>
                        {activeStep1 < 5 ? (
                          <button type="button" className="btn btn-primary" onClick={() => setActiveStep1(activeStep1 + 1)}>Next Step →</button>
                        ) : (
                          <button type="button" className="btn btn-success" onClick={() => alert('Basic Wizard Application Submitted!')}>Submit Application</button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Validation Support */}
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Validation Support</h4>
                <span className="badge badge-soft-success badge-label fs-xxs py-1">Exclusive</span>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs wizard-tabs mb-3">
                  {steps.map((step) => (
                    <li key={step.id} className="nav-item">
                      <button 
                        type="button" 
                        className={`nav-link text-start w-100 ${activeStep2 === step.id ? 'active' : ''}`}
                        onClick={() => setActiveStep2(step.id)}
                      >
                        <span className="d-flex align-items-center">
                          <i className={`ti ${step.icon} fs-32 text-info`}></i>
                          <span className="flex-grow-1 ms-2">
                            <span className="mb-0 lh-base d-block fw-semibold text-body fs-base">{step.title}</span>
                            <span className="fs-xxs text-muted mb-0">{step.subtitle}</span>
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="p-3 border rounded">
                  <h6>Step {activeStep2}: Form Validation Active</h6>
                  <p className="text-muted fs-sm">Each step validates required input values before enabling progression to next step.</p>
                  <div className="d-flex justify-content-between mt-3">
                    <button type="button" className="btn btn-secondary" disabled={activeStep2 === 1} onClick={() => setActiveStep2(activeStep2 - 1)}>← Previous</button>
                    <button type="button" className="btn btn-primary" onClick={() => setActiveStep2(activeStep2 < 5 ? activeStep2 + 1 : 1)}>
                      {activeStep2 < 5 ? 'Validate & Next →' : 'Complete Validation'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Progressbar Support */}
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Progressbar Support</h4>
                <span className="badge badge-soft-success badge-label fs-xxs py-1">Exclusive</span>
              </div>
              <div className="card-body">
                <div className="progress mb-4" style={{ height: '6px' }}>
                  <div 
                    className="progress-bar bg-primary progress-bar-striped progress-bar-animated" 
                    style={{ width: `${(activeStep3 / 5) * 100}%`, transition: 'width 0.4s ease' }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-semibold">Step {activeStep3} of 5</span>
                  <span className="badge bg-primary">{Math.round((activeStep3 / 5) * 100)}% Completed</span>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn btn-secondary" disabled={activeStep3 === 1} onClick={() => setActiveStep3(activeStep3 - 1)}>← Previous</button>
                  <button type="button" className="btn btn-primary" onClick={() => setActiveStep3(activeStep3 < 5 ? activeStep3 + 1 : 1)}>
                    {activeStep3 < 5 ? 'Next Step →' : 'Restart Progress'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Vertical Wizard */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Vertical Wizard</h4>
              </div>
              <div className="card-body">
                <div className="row g-4">
                  <div className="col-md-4 border-end">
                    <div className="nav flex-column nav-pills">
                      {steps.map((step) => (
                        <button 
                          key={step.id}
                          type="button" 
                          className={`nav-link text-start mb-2 ${activeStep4 === step.id ? 'active' : ''}`}
                          onClick={() => setActiveStep4(step.id)}
                        >
                          <i className={`ti ${step.icon} me-2 fs-18 align-middle`}></i>
                          {step.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h5>{steps[activeStep4 - 1].title} Details</h5>
                    <p className="text-muted">{steps[activeStep4 - 1].subtitle}</p>
                    <div className="mb-3">
                      <label className="form-label">Sample Field for {steps[activeStep4 - 1].title}</label>
                      <input type="text" className="form-control" placeholder={`Enter ${steps[activeStep4 - 1].title.toLowerCase()} data`} />
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button type="button" className="btn btn-secondary" disabled={activeStep4 === 1} onClick={() => setActiveStep4(activeStep4 - 1)}>← Previous</button>
                      <button type="button" className="btn btn-primary" onClick={() => setActiveStep4(activeStep4 < 5 ? activeStep4 + 1 : 1)}>
                        {activeStep4 < 5 ? 'Next →' : 'Finish'}
                      </button>
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
export default FormWizardPage;
