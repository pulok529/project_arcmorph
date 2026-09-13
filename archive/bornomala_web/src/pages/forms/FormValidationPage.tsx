import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const FormValidationPage: React.FC = () => {
  const [validated1, setValidated1] = useState(false);
  const [validated2, setValidated2] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated1(true);
      setSubmittedMessage('Please correct the highlighted errors before submitting.');
    } else {
      setValidated1(true);
      setSubmittedMessage('Custom styles form submitted successfully!');
    }
  };

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated2(true);
    } else {
      setValidated2(true);
      setSubmittedMessage('Tooltip validation enrollment submitted successfully!');
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Validation" category="Forms" />

      <div className="module-content-body">
        {submittedMessage && (
          <div className={`alert ${submittedMessage.includes('successfully') ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mb-4`} role="alert">
            <i className={`ti ${submittedMessage.includes('successfully') ? 'ti-circle-check' : 'ti-alert-triangle'} me-2`}></i>
            {submittedMessage}
            <button type="button" className="btn-close" onClick={() => setSubmittedMessage('')}></button>
          </div>
        )}

        <div className="row g-4">
          {/* Card 1: Custom styles Validation */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Custom styles Validation</h4>
              </div>
              <div className="card-body">
                <form className={`row g-3 needs-validation ${validated1 ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit1}>
                  <div className="col-md-4">
                    <label className="form-label" htmlFor="validationCustom01">First Name</label>
                    <input className="form-control" id="validationCustom01" required type="text" defaultValue="John" />
                    <div className="valid-feedback">Looks great!</div>
                    <div className="invalid-feedback">First name is required.</div>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" htmlFor="validationCustom02">Last Name</label>
                    <input className="form-control" id="validationCustom02" required type="text" defaultValue="Doe" />
                    <div className="valid-feedback">Looks great!</div>
                    <div className="invalid-feedback">Last name is required.</div>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" htmlFor="validationCustomUsername">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input aria-describedby="inputGroupPrepend" className="form-control" id="validationCustomUsername" placeholder="johndoe123" required type="text" />
                      <div className="invalid-feedback">Please choose a valid username.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="validationCustom03">City</label>
                    <input className="form-control" id="validationCustom03" placeholder="San Francisco" required type="text" />
                    <div className="invalid-feedback">Please provide a valid city name.</div>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor="validationCustom04">State</label>
                    <select className="form-select" id="validationCustom04" required defaultValue="">
                      <option disabled value="">Choose...</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="NY">New York</option>
                      <option value="FL">Florida</option>
                    </select>
                    <div className="invalid-feedback">Please select your state.</div>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor="validationCustom05">Zip Code</label>
                    <input className="form-control" id="validationCustom05" placeholder="94107" required type="text" />
                    <div className="invalid-feedback">Please enter a valid zip code.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" id="invalidCheck" required type="checkbox" />
                      <label className="form-check-label" htmlFor="invalidCheck">I agree to the terms and conditions</label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit Form</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Card 2: Tooltips */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Tooltips</h4>
              </div>
              <div className="card-body">
                <form className={`row g-3 needs-validation ${validated2 ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit2}>
                  <div className="col-md-4 position-relative">
                    <label className="form-label" htmlFor="studentFirstName">First Name</label>
                    <input className="form-control" id="studentFirstName" required type="text" defaultValue="Emily" />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="col-md-4 position-relative">
                    <label className="form-label" htmlFor="studentLastName">Last Name</label>
                    <input className="form-control" id="studentLastName" required type="text" defaultValue="Chen" />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="col-md-4 position-relative">
                    <label className="form-label" htmlFor="studentID">Stanford ID</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="studentIDPrepend">SU</span>
                      <input aria-describedby="studentIDPrepend" className="form-control" id="studentID" placeholder="SU1234567" required type="text" />
                      <div className="invalid-tooltip">Please enter a valid Stanford ID.</div>
                    </div>
                  </div>
                  <div className="col-md-6 position-relative">
                    <label className="form-label" htmlFor="studentCity">City</label>
                    <input className="form-control" id="studentCity" required type="text" defaultValue="Palo Alto" />
                    <div className="invalid-tooltip">Please provide a valid city.</div>
                  </div>
                  <div className="col-md-3 position-relative">
                    <label className="form-label" htmlFor="studentDepartment">Department</label>
                    <select className="form-select" id="studentDepartment" required defaultValue="">
                      <option disabled value="">Choose...</option>
                      <option value="CS">Computer Science</option>
                      <option value="Eng">Engineering</option>
                      <option value="Bio">Biology</option>
                      <option value="Econ">Economics</option>
                    </select>
                    <div className="invalid-tooltip">Please select your department.</div>
                  </div>
                  <div className="col-md-3 position-relative">
                    <label className="form-label" htmlFor="studentZip">ZIP Code</label>
                    <input className="form-control" id="studentZip" required type="text" defaultValue="94305" />
                    <div className="invalid-tooltip">Please provide a valid ZIP code.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" id="agreementCheck" required type="checkbox" />
                      <label className="form-check-label" htmlFor="agreementCheck">I confirm my enrollment at Stanford University.</label>
                      <div className="invalid-tooltip">You must confirm before submitting.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      <i className="ti ti-users-group me-2"></i> Submit Enrollment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Card 3: Server-side */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Server-side</h4>
              </div>
              <div className="card-body">
                <form className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">First name</label>
                    <input type="text" className="form-control is-valid" id="validationServer01" defaultValue="Mark" required />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Last name</label>
                    <input type="text" className="form-control is-valid" id="validationServer02" defaultValue="Otto" required />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationServerUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend3">@</span>
                      <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required defaultValue="invalid_username" />
                      <div id="validationServerUsernameFeedback" className="invalid-feedback">Please choose a unique username.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationServer03" className="form-label">City</label>
                    <input type="text" className="form-control is-invalid" id="validationServer03" required defaultValue="" />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="validationServer04" className="form-label">State</label>
                    <select className="form-select is-invalid" id="validationServer04" required defaultValue="">
                      <option disabled value="">Choose...</option>
                      <option value="CA">California</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid state.</div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">Zip</label>
                    <input type="text" className="form-control is-invalid" id="validationServer05" required defaultValue="" />
                    <div className="invalid-feedback">Please provide a valid zip.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" required />
                      <label className="form-check-label" htmlFor="invalidCheck3">Agree to terms and conditions</label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="button">Submit form</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Card 4: Supported Elements */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Supported Elements</h4>
              </div>
              <div className="card-body">
                <form className="was-validated">
                  <div className="mb-3">
                    <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                    <div className="invalid-feedback">Please enter a message in the textarea.</div>
                  </div>

                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                    <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
                    <div className="invalid-feedback">Example invalid feedback text</div>
                  </div>

                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                    <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
                  </div>
                  <div className="form-check mb-3">
                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                    <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
                    <div className="invalid-feedback">More example invalid feedback text</div>
                  </div>

                  <div className="mb-3">
                    <select className="form-select" required aria-label="select example" defaultValue="">
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="invalid-feedback">Example invalid select feedback</div>
                  </div>

                  <div className="mb-3">
                    <input type="file" className="form-control" aria-label="file example" required />
                    <div className="invalid-feedback">Example invalid form file feedback</div>
                  </div>

                  <div>
                    <button className="btn btn-primary" type="button">Submit form</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Card 5: Browser Defaults */}
          <div className="col-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <h4 className="card-title">Browser Defaults</h4>
              </div>
              <div className="card-body">
                <form className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend2">@</span>
                      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationDefault03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationDefault03" required />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="validationDefault04" className="form-label">State</label>
                    <select className="form-select" id="validationDefault04" required defaultValue="">
                      <option disabled value="">Choose...</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="validationDefault05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" required />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
                      <label className="form-check-label" htmlFor="invalidCheck2">Agree to terms and conditions</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="button">Submit form</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormValidationPage;
