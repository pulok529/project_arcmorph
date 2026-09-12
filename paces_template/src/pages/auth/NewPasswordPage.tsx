import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NewPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light-subtle py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <Link to="/" className="d-inline-block">
                    <img src="/assets/images/logo-black.png" alt="logo" height="28" />
                  </Link>
                  <h4 className="fw-bold mt-3 mb-1">Set New Password</h4>
                  <p className="text-muted fs-xs">Please create a strong password for your account.</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label fs-xs fw-semibold">New Password</label>
                    <div className="position-relative">
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        className="form-control" 
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button 
                        type="button" 
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted text-decoration-none p-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`ti ti-eye${showPassword ? '-off' : ''}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fs-xs fw-semibold">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Reset Password</button>
                </form>

                <div className="text-center mt-4 pt-2">
                  <p className="text-muted fs-xs mb-0">
                    Remember your password? <Link to="/auth/login" className="text-primary fw-bold">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
