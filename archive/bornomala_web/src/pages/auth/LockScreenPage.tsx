import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const LockScreenPage: React.FC = () => {
  const [password, setPassword] = useState('');

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
                <div className="mb-3">
                  <img 
                    src="/assets/images/users/user-1.jpg" 
                    alt="Sophia Carter" 
                    className="rounded-circle avatar-lg img-thumbnail"
                    style={{ width: 80, height: 80, objectFit: 'cover' }}
                  />
                </div>
                <h4 className="fw-bold mb-1">Hi ! Sophia Carter</h4>
                <p className="text-muted fs-xs mb-4">Enter your password to unlock the screen.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3 text-start">
                    <label className="form-label fs-xs fw-semibold">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Unlock Screen</button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted fs-xs mb-0">
                    Not you? Return <Link to="/auth/login" className="text-primary fw-bold">Sign In</Link>
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
