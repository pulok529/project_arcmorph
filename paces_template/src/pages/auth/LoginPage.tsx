import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('david@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#f8fafc' }}>
      <div className="position-absolute top-0 end-0">
        <img src="/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>
      <div className="position-absolute bottom-0 start-0" style={{ transform: 'rotate(180deg)' }}>
        <img src="/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" />
      </div>

      <div className="auth-box d-flex align-items-center w-100 py-4" style={{ zIndex: 10 }}>
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10">
              <div className="card shadow-lg border-0 overflow-hidden">
                <div className="row justify-content-between g-0">
                  {/* Left Column: Form */}
                  <div className="col-lg-6">
                    <div className="card-body p-4 p-lg-5">
                      <div className="auth-brand text-center mb-4">
                        <Link to="/" className="d-inline-block mb-3">
                          <img src="/assets/images/logo-black.png" alt="logo" height="28" />
                        </Link>
                        <h4 className="fw-bold text-dark mb-1">Great to see you here 👋</h4>
                        <p className="text-muted fs-sm">Let’s get you signed in. Enter your email and password to continue.</p>
                      </div>

                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <button type="button" className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-1 fs-xs">
                            <i className="ti ti-brand-google fs-16 text-danger"></i> Google
                          </button>
                        </div>
                        <div className="col-6">
                          <button type="button" className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-1 fs-xs">
                            <i className="ti ti-brand-github fs-16 text-dark"></i> Github
                          </button>
                        </div>
                      </div>

                      <div className="position-relative text-center my-3">
                        <hr className="text-muted" />
                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted fs-xs">
                          Continue with Email
                        </span>
                      </div>

                      <form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">Email address <span className="text-danger">*</span></label>
                          <div className="position-relative">
                            <input 
                              type="email" 
                              className="form-control" 
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              placeholder="you@example.com" 
                              required 
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-semibold">Password <span className="text-danger">*</span></label>
                          <div className="position-relative">
                            <input 
                              type={showPassword ? 'text' : 'password'} 
                              className="form-control" 
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              placeholder="••••••••" 
                              required 
                            />
                            <button 
                              type="button" 
                              className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted p-0 me-2"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`}></i>
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                            <label className="form-check-label fs-sm" htmlFor="rememberMe">Keep me signed in</label>
                          </div>
                          <Link to="/auth/reset-password" className="text-decoration-underline text-muted fs-xs">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 fw-semibold py-2">
                          Sign In
                        </button>
                      </form>

                      <p className="text-muted text-center mt-4 mb-0 fs-sm">
                        New here? <Link to="/auth/register" className="fw-semibold text-primary text-decoration-underline ms-1">Create an account</Link>
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Split Image */}
                  <div className="col-lg-6 d-none d-lg-block">
                    <div 
                      className="h-100 position-relative rounded-end" 
                      style={{ 
                        backgroundImage: 'url(/assets/images/auth.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: 480
                      }}
                    >
                      <div className="p-4 card-img-overlay rounded-end bg-dark bg-opacity-25 d-flex align-items-end justify-content-center text-center text-white">
                        <div>
                          <h5 className="text-white fw-bold mb-1">Fast & Scalable WebApp Template</h5>
                          <p className="text-white-50 fs-sm mb-0">Production-ready UI architecture with modern developer tooling.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
