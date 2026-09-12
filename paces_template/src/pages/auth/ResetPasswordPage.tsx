import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../../components/forms/FormInput';
import { Button } from '../../components/ui/Button';

export const ResetPasswordPage: React.FC = () => {
  return (
    <div className="auth-box d-flex align-items-center min-vh-100">
      <div className="container-xxl">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card shadow-lg">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <Link to="/">
                    <img src="/assets/images/logo-black.png" alt="logo" height="32" className="logo-dark" />
                    <img src="/assets/images/logo.png" alt="logo" height="32" className="logo-light" />
                  </Link>
                  <h4 className="fw-bold mt-3">Reset Password 🔒</h4>
                  <p className="text-muted">Enter your email and we'll send recovery instructions.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Password reset link sent to your email!'); }}>
                  <FormInput label="Email Address" type="email" placeholder="you@example.com" required />
                  <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold">
                    Send Reset Link
                  </Button>
                </form>

                <p className="text-center text-muted mt-4 mb-0">
                  Remember password? <Link to="/auth/login" className="fw-semibold text-primary">Back to Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
