import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = login(username, password);
      setLoading(false);
      if (res.success) {
        navigate(from, { replace: true });
      } else {
        setError(res.message || 'Login failed');
      }
    }, 300);
  };

  const handleFillDemo = () => {
    setUsername('admin');
    setPassword('password123');
    setError(null);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3" style={{ background: '#0b0f19', color: '#f8fafc' }}>
      <div className="card border-0 shadow-lg" style={{ maxWidth: '440px', width: '100%', background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '16px' }}>
        <div className="card-body p-4 p-md-5">
          {/* Logo Header */}
          <div className="text-center mb-4">
            <img src="/assets/images/logo.svg" alt="ArcMorph" style={{ height: '42px', width: 'auto' }} className="mb-3" />
            <h4 className="fw-bold mb-1 text-light">Authentication Gateway</h4>
            <p className="fs-13 text-muted">Sign in to ArcMorph Software Modernization Platform</p>
          </div>

          {error && (
            <div className="alert alert-danger py-2 px-3 fs-13 mb-3 d-flex align-items-center gap-2" role="alert">
              <i className="ti ti-alert-triangle fs-16"></i>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fs-13 text-light fw-medium">Username</label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-secondary text-muted">
                  <i className="ti ti-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-dark border-secondary text-light"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label fs-13 text-light fw-medium m-0">Password</label>
                <span className="fs-12 text-muted">Default: password123</span>
              </div>
              <div className="input-group">
                <span className="input-group-text bg-dark border-secondary text-muted">
                  <i className="ti ti-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control bg-dark border-secondary text-light"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input className="form-check-input bg-dark border-secondary" type="checkbox" id="rememberMe" defaultChecked />
                <label className="form-check-label fs-12 text-muted" htmlFor="rememberMe">
                  Remember session
                </label>
              </div>
              <button type="button" onClick={handleFillDemo} className="btn btn-link text-info p-0 fs-12 text-decoration-none">
                <i className="ti ti-key me-1"></i> Auto-fill Demo
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100 fw-bold py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
              style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)', color: '#0b0f19', border: 'none' }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <i className="ti ti-login fs-16"></i>
                  <span>Sign In to Workstation</span>
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-4 pt-3 border-top border-dark">
            <span className="badge px-3 py-1 text-info fs-11" style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
              <i className="ti ti-shield-check me-1"></i> End-to-End AST & Modernization Security
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
