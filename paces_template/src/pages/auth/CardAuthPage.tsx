import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  mode?: 'sign-in' | 'sign-up' | 'reset-pass' | 'new-pass' | 'two-factor' | 'lock-screen' | 'success-mail' | 'login-pin' | 'delete-account';
}

export const CardAuthPage: React.FC<Props> = ({ mode = 'sign-in' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth-page-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-primary bg-gradient py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-dark text-center py-4">
                <Link to="/">
                  <img src="/assets/images/logo.png" alt="logo" height="28" />
                </Link>
                <h5 className="text-white mt-2 mb-0">Card Authentication</h5>
              </div>
              <div className="card-body p-4 p-md-5">
                <h4 className="fw-bold mb-1 text-capitalize">{mode.replace('-', ' ')}</h4>
                <p className="text-muted fs-xs mb-4">Please authenticate using your credentials.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label fs-xs fw-semibold">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-xs fw-semibold">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Continue</button>
                </form>

                <div className="text-center mt-4">
                  <Link to="/" className="text-primary fs-xs fw-bold">Back to Dashboard</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
