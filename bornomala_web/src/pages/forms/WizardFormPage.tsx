import { PageHeader } from '../../components/common/PageHeader';
import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { FormInput } from '../../components/forms/FormInput';

export const WizardFormPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <PageHeader title="Form Wizard" category="Forms" />
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="mb-0">Multi-Step Form Wizard</h4>
        </div>
      </div>

      <Card>
        <Card.Header>
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
              <button 
                className={`nav-link fw-bold ${step === 1 ? 'active' : ''}`}
                onClick={() => setStep(1)}
              >
                <i className="ti ti-user me-1"></i> 1. Account Info
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link fw-bold ${step === 2 ? 'active' : ''}`}
                onClick={() => setStep(2)}
              >
                <i className="ti ti-building me-1"></i> 2. Business Profile
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link fw-bold ${step === 3 ? 'active' : ''}`}
                onClick={() => setStep(3)}
              >
                <i className="ti ti-check me-1"></i> 3. Confirmation
              </button>
            </li>
          </ul>
        </Card.Header>

        <Card.Body className="p-4">
          {step === 1 && (
            <div>
              <h5 className="fw-bold mb-3">Personal & Account Details</h5>
              <div className="row g-3">
                <div className="col-md-6"><FormInput label="Full Name" placeholder="John Doe" /></div>
                <div className="col-md-6"><FormInput label="Work Email" type="email" placeholder="john@company.com" /></div>
                <div className="col-md-6"><FormInput label="Phone Number" placeholder="+1 (555) 000-0000" /></div>
                <div className="col-md-6"><FormInput label="Timeline / Date" type="date" /></div>
              </div>
              <div className="mt-4 text-end">
                <Button variant="primary" onClick={() => setStep(2)}>
                  Next: Business Profile <i className="ti ti-arrow-right ms-1"></i>
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h5 className="fw-bold mb-3">Company & Verification</h5>
              <div className="row g-3">
                <div className="col-md-6"><FormInput label="Company Name" placeholder="Acme Technologies" /></div>
                <div className="col-md-6"><FormInput label="Website URL" placeholder="https://acme.com" /></div>
                <div className="col-12">
                  <div className="border border-2 border-dashed rounded p-4 text-center bg-light bg-opacity-50">
                    <i className="ti ti-upload fs-1 text-primary mb-2"></i>
                    <h5>Drag & drop business verification documents</h5>
                    <p className="text-muted fs-sm">PDF, DOCX, ZIP up to 25MB</p>
                    <Button variant="outline-primary" size="sm">Browse Files</Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => setStep(1)}>
                  <i className="ti ti-arrow-left me-1"></i> Previous
                </Button>
                <Button variant="primary" onClick={() => setStep(3)}>
                  Next: Confirmation <i className="ti ti-arrow-right ms-1"></i>
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h5 className="fw-bold mb-3">Review & Submit</h5>
              <div className="alert alert-info d-flex align-items-center gap-2">
                <i className="ti ti-info-circle fs-3"></i>
                <div>Please confirm your information before finalizing registration.</div>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" defaultChecked />
                <label className="form-check-label fw-medium" htmlFor="termsCheck">
                  I accept all terms and conditions
                </label>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => setStep(2)}>
                  <i className="ti ti-arrow-left me-1"></i> Previous
                </Button>
                <Button variant="success" onClick={() => alert('Wizard completed successfully!')}>
                  <i className="ti ti-check me-1"></i> Complete & Submit
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
