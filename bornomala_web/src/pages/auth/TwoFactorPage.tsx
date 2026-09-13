import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TwoFactorPage: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, val: string) => {
    if (val.length <= 1) {
      const next = [...code];
      next[index] = val;
      setCode(next);
      if (val && index < 5) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
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
                <div className="avatar-lg bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                  <i className="ti ti-shield-check fs-36"></i>
                </div>
                <h4 className="fw-bold mb-1">Two-Factor Verification</h4>
                <p className="text-muted fs-xs mb-4">Please enter the 6-digit code sent to your registered authenticator device.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="d-flex justify-content-center gap-2 mb-4">
                    {code.map((digit, idx) => (
                      <input 
                        key={idx}
                        id={`digit-${idx}`}
                        type="text" 
                        maxLength={1}
                        className="form-control text-center fs-18 fw-bold" 
                        style={{ width: 44, height: 50 }}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                      />
                    ))}
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Verify Code</button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted fs-xs mb-0">
                    Didn't receive a code? <a href="#resend" className="text-primary fw-bold">Resend Code</a>
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
