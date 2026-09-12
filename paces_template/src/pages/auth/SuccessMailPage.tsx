import React from 'react';
import { Link } from 'react-router-dom';

export const SuccessMailPage: React.FC = () => {
  return (
    <div className="auth-page-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light-subtle py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5 text-center">
                <Link to="/" className="d-inline-block mb-3">
                  <img src="/assets/images/logo-black.png" alt="logo" height="28" />
                </Link>
                <div className="avatar-lg bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                  <i className="ti ti-mail-check fs-36"></i>
                </div>
                <h4 className="fw-bold mb-1">Check Your Email</h4>
                <p className="text-muted fs-xs mb-4">
                  We've sent a password reset link to <strong>sophia.carter@paces.dev</strong>. Please follow the instructions in the email.
                </p>

                <Link to="/auth/login" className="btn btn-primary w-100 py-2 fw-semibold">Return to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
