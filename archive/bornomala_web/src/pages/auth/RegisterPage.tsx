import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '../../components/forms/FormInput';
import { Button } from '../../components/ui/Button';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

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
                  <h4 className="fw-bold mt-3">Create Free Account</h4>
                  <p className="text-muted">Start your 14-day free trial today.</p>
                </div>

                <form onSubmit={handleRegister}>
                  <FormInput label="Full Name" placeholder="John Doe" required />
                  <FormInput label="Email Address" type="email" placeholder="you@example.com" required />
                  <FormInput label="Password" type="password" placeholder="••••••••" required />

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="terms" defaultChecked required />
                    <label className="form-check-label" htmlFor="terms">I accept Terms & Conditions</label>
                  </div>

                  <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold">
                    Sign Up
                  </Button>
                </form>

                <p className="text-center text-muted mt-4 mb-0">
                  Already have an account? <Link to="/auth/login" className="fw-semibold text-primary">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
