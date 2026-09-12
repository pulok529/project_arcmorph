import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const DeleteAccountPage: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="auth-page-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light-subtle py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card border-0 shadow-sm border-top border-danger border-3">
              <div className="card-body p-4 p-md-5 text-center">
                <Link to="/" className="d-inline-block mb-3">
                  <img src="/assets/images/logo-black.png" alt="logo" height="28" />
                </Link>
                <div className="avatar-lg bg-danger-subtle text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                  <i className="ti ti-trash-x fs-36"></i>
                </div>
                <h4 className="fw-bold mb-1 text-danger">Delete Account</h4>
                <p className="text-muted fs-xs mb-4">
                  Are you sure you want to delete your account? This action is permanent and cannot be undone. All your project data and settings will be permanently wiped.
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-check text-start mb-4">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="confirmDelete" 
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                    />
                    <label className="form-check-label fs-xs text-muted" htmlFor="confirmDelete">
                      I understand and confirm that I wish to permanently delete my account.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold mb-2" disabled={!confirmed}>
                    Permanently Delete My Account
                  </button>
                  <Link to="/" className="btn btn-light w-100 py-2 fw-semibold">Cancel and Return</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
