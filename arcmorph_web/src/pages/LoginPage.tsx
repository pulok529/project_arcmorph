import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSessionLock } from '../context/SessionLockContext';

export const LoginPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<'password' | 'pin'>('password');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [pinDigits, setPinDigits] = useState(['', '', '', '']);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const { unlockSession, lockPin, clientIp, isOnline } = useSessionLock();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = login(username, password);
      setLoading(false);
      if (res.success) {
        unlockSession(lockPin);
        navigate(from, { replace: true });
      } else {
        setError(res.message || 'Authentication failed. Please verify credentials.');
      }
    }, 250);
  };

  const handlePinChange = (idx: number, val: string) => {
    if (val.length <= 1) {
      const next = [...pinDigits];
      next[idx] = val;
      setPinDigits(next);
      if (val && idx < 3) {
        const el = document.getElementById(`login-pin-${idx + 1}`);
        if (el) el.focus();
      }
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = pinDigits.join('');
    if (unlockSession(entered)) {
      login('admin', 'password123');
      navigate(from, { replace: true });
    } else {
      setError('Invalid 4-digit security PIN.');
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-3 position-relative overflow-hidden"
      style={{
        backgroundColor: '#050811',
        backgroundImage: 'radial-gradient(ellipse at 50% 10%, rgba(0, 242, 254, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
        color: '#f8fafc'
      }}
    >
      {/* Background Cyber Grid */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 242, 254, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.8
        }}
      ></div>

      <div
        className="card border shadow-2xl position-relative"
        style={{
          maxWidth: '460px',
          width: '100%',
          backgroundColor: 'rgba(11, 15, 25, 0.95)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(0, 242, 254, 0.35)',
          borderRadius: '16px',
          boxShadow: '0 0 35px rgba(0, 242, 254, 0.15)'
        }}
      >
        {/* Glowing Top Accent Line */}
        <div
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #00f2fe 0%, #3b82f6 50%, #10b981 100%)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}
        ></div>

        <div className="card-body p-4 p-md-5">
          {/* Brand Header */}
          <div className="text-center mb-4">
            <img
              src="/assets/images/logo.svg"
              alt="ArcMorph"
              style={{ height: '46px', width: 'auto' }}
              className="mb-2"
            />
            <h5 className="fw-bold mb-1 text-white tracking-wide">Cybernetic Auth Gateway</h5>
            <small className="text-muted fs-12">
              Architecture Evolution & Monolith Modernization Studio
            </small>
          </div>

          {/* Mode Switcher */}
          <div className="btn-group w-100 mb-4" role="group">
            <button
              type="button"
              className={`btn btn-sm ${authMode === 'password' ? 'btn-info fw-bold text-dark' : 'btn-dark text-muted border-dark'}`}
              onClick={() => setAuthMode('password')}
            >
              <i className="ti ti-key me-1"></i> Password Mode
            </button>
            <button
              type="button"
              className={`btn btn-sm ${authMode === 'pin' ? 'btn-info fw-bold text-dark' : 'btn-dark text-muted border-dark'}`}
              onClick={() => setAuthMode('pin')}
            >
              <i className="ti ti-dialpad me-1"></i> Quick PIN Mode
            </button>
          </div>

          {error && (
            <div className="alert alert-danger py-2 px-3 fs-13 mb-3 d-flex align-items-center gap-2 border-danger bg-danger-subtle text-danger" role="alert">
              <i className="ti ti-alert-triangle fs-16"></i>
              <span>{error}</span>
            </div>
          )}

          {authMode === 'password' ? (
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-3">
                <label className="form-label fs-12 text-light text-uppercase fw-semibold">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-cyan">
                    <i className="ti ti-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-dark border-secondary text-light fs-13"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fs-12 text-light text-uppercase fw-semibold m-0">Password</label>
                  <span className="fs-11 text-muted">Default: password123</span>
                </div>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-cyan">
                    <i className="ti ti-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control bg-dark border-secondary text-light fs-13"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Quick Fill Helpers */}
              <div className="d-flex gap-2 mb-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary flex-grow-1 fs-11"
                  onClick={() => { setUsername('admin'); setPassword('password123'); setError(null); }}
                >
                  <i className="ti ti-code me-1"></i> Fill Admin
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-info flex-grow-1 fs-11"
                  onClick={() => { setUsername('superadmin'); setPassword('SuperAdmin@ArcMorph2026!'); setError(null); }}
                >
                  <i className="ti ti-shield-lock me-1"></i> Fill SuperUser
                </button>
              </div>

              <button
                type="submit"
                className="btn w-100 py-2.5 fw-bold d-flex align-items-center justify-content-center gap-2 shadow"
                disabled={loading}
                style={{
                  background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
                  color: '#050811',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
                }}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  <>
                    <i className="ti ti-login fs-16"></i> Authenticate Session
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handlePinSubmit} className="text-center">
              <p className="text-muted fs-12 mb-3">Enter your 4-digit security PIN (Default: 1234)</p>
              <div className="d-flex justify-content-center gap-2 mb-4">
                {pinDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`login-pin-${idx}`}
                    type="password"
                    maxLength={1}
                    className="form-control text-center fs-20 fw-bold bg-dark border-secondary text-cyan"
                    style={{ width: 48, height: 52 }}
                    value={digit}
                    onChange={(e) => handlePinChange(idx, e.target.value)}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="btn w-100 py-2 fw-bold text-dark"
                style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' }}
              >
                Unlock with PIN
              </button>
            </form>
          )}

          {/* Telemetry Footer */}
          <div className="mt-4 pt-3 border-top border-dark d-flex align-items-center justify-content-between text-muted fs-11">
            <span className="d-flex align-items-center gap-1">
              <span className="rounded-circle" style={{ width: 7, height: 7, backgroundColor: '#10b981', boxShadow: '0 0 6px #10b981' }}></span>
              Client: <span className="text-light font-monospace">{clientIp.split(' ')[0]}</span>
            </span>
            <span className="text-cyan font-monospace">TLS Encrypted • ArcMorph Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
};
