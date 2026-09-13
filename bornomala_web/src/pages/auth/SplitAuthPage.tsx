import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  mode?: 'sign-in' | 'sign-up' | 'reset-pass' | 'new-pass' | 'two-factor' | 'lock-screen' | 'success-mail' | 'login-pin' | 'delete-account';
}

export const SplitAuthPage: React.FC<Props> = ({ mode = 'sign-in' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-fluid p-0 min-vh-100 d-flex">
      <div className="row g-0 flex-grow-1">
        {/* Left Side: Split Promo Cover */}
        <div className="col-lg-6 d-none d-lg-flex bg-primary bg-gradient flex-column justify-content-between p-5 text-white">
          <div>
            <Link to="/">
              <img src="/assets/images/logo.png" alt="logo" height="32" />
            </Link>
          </div>
          <div className="my-auto py-5">
            <h1 className="display-5 fw-bold mb-3">Welcome to Paces Studio</h1>
            <p className="fs-16 opacity-75 max-w-lg mb-4">
              The modern, modular, customizable enterprise dashboard design system built for speed, performance, and scale.
            </p>
            <div className="d-flex gap-3">
              <div className="p-3 bg-white bg-opacity-10 rounded border border-white border-opacity-25 text-center" style={{ minWidth: 110 }}>
                <h4 className="text-white mb-0 fw-bold">25+</h4>
                <span className="fs-xs opacity-75">Theme Skins</span>
              </div>
              <div className="p-3 bg-white bg-opacity-10 rounded border border-white border-opacity-25 text-center" style={{ minWidth: 110 }}>
                <h4 className="text-white mb-0 fw-bold">100%</h4>
                <span className="fs-xs opacity-75">Pixel Parity</span>
              </div>
            </div>
          </div>
          <div className="fs-xs opacity-50">
            2026 © Paces - By CODERTHEMES
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5 bg-light-subtle">
          <div className="w-100" style={{ maxWidth: 460 }}>
            <h3 className="fw-bold mb-1 text-capitalize">Split {mode.replace('-', ' ')}</h3>
            <p className="text-muted fs-xs mb-4">Enter your workspace details to proceed.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label fs-xs fw-semibold">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="name@company.com"
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

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Proceed to Workspace</button>
            </form>

            <div className="text-center mt-4">
              <Link to="/" className="text-primary fs-xs fw-bold">Back to Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
