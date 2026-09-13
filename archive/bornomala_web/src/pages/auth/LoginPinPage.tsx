import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPinPage: React.FC = () => {
  const [pin, setPin] = useState(['', '', '', '']);

  const handleChange = (index: number, val: string) => {
    if (val.length <= 1) {
      const next = [...pin];
      next[index] = val;
      setPin(next);
      if (val && index < 3) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

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
                <div className="avatar-lg bg-info-subtle text-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                  <i className="ti ti-dialpad fs-36"></i>
                </div>
                <h4 className="fw-bold mb-1">Login with PIN</h4>
                <p className="text-muted fs-xs mb-4">Enter your 4-digit security PIN to quickly access your account.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="d-flex justify-content-center gap-3 mb-4">
                    {pin.map((digit, idx) => (
                      <input 
                        key={idx}
                        id={`pin-${idx}`}
                        type="password" 
                        maxLength={1}
                        className="form-control text-center fs-20 fw-bold" 
                        style={{ width: 50, height: 56 }}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                      />
                    ))}
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Submit PIN</button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted fs-xs mb-0">
                    Forgot PIN? <Link to="/auth/login" className="text-primary fw-bold">Sign in with password</Link>
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
