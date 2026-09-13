import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useRbac } from '../../context/RbacContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, activeBranch, setActiveBranch } = useAuth();
  const { roles } = useRbac();
  
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('Admin@123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(username, password);
      setIsLoading(false);
      if (success) {
        navigate('/users');
      } else {
        setError('Invalid staff credentials. Please check your username or select a quick-demo account below.');
      }
    } catch (err: any) {
      setIsLoading(false);
      setError(err?.message || 'Authentication error.');
    }
  };

  const handleQuickLogin = async (uname: string, pwd: string = 'Admin@123') => {
    setUsername(uname);
    setPassword(pwd);
    setIsLoading(true);
    try {
      const success = await login(uname, pwd);
      setIsLoading(false);
      if (success) {
        navigate('/users');
      }
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center bg-body-tertiary p-3">
      <div className="position-absolute top-0 end-0 opacity-25 d-none d-md-block">
        <img src="/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" style={{ width: '380px' }} />
      </div>
      <div className="position-absolute bottom-0 start-0 opacity-25 d-none d-md-block" style={{ transform: 'rotate(180deg)' }}>
        <img src="/assets/images/auth-card-bg.svg" className="auth-card-bg-img" alt="auth-card-bg" style={{ width: '380px' }} />
      </div>

      <div className="container py-4" style={{ maxWidth: '980px', zIndex: 10 }}>
        <div className="card shadow-lg border-secondary-subtle overflow-hidden">
          <div className="row g-0">
            {/* Left Column: Academic Branding & Quick Access */}
            <div className="col-lg-5 bg-primary p-4 p-md-5 text-white d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-4">
                  <div className="bg-white rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                    <i className="ti ti-school fs-24 text-primary"></i>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold text-white">BORNOMALA</h5>
                    <span className="fs-xs text-white-50 text-uppercase">Academic EMS Monolith</span>
                  </div>
                </div>

                <div className="badge bg-white text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
                  <i className="ti ti-shield-lock me-1"></i> C# ASP.NET .NET 9 & MSSQL Backend
                </div>

                <h4 className="fw-bold text-white mb-2">Institutional Identity & Access Control</h4>
                <p className="text-white-50 fs-sm mb-4">
                  Live connection to Microsoft SQL Server 2022 restored database (<code>EducationDB_Legacy</code>) & .NET 9 Web API.
                </p>

                <div className="border-top border-white-50 pt-3 mb-3">
                  <h6 className="text-white fw-semibold fs-xs text-uppercase mb-2">
                    <i className="ti ti-database me-1"></i> MSSQL 2022 Database Audit
                  </h6>
                  <div className="d-flex flex-column gap-2 fs-xs text-white-50">
                    <div className="d-flex justify-content-between">
                      <span>Restored Table: <code>tblUser</code></span>
                      <span className="text-white fw-bold">254 Live Users</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Restored Table: <code>tblRole</code></span>
                      <span className="text-white fw-bold">{roles.length} Roles</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Restored Table: <code>tblActionPermission</code></span>
                      <span className="text-white fw-bold">36 Actions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Persona Switcher */}
              <div className="bg-white bg-opacity-10 p-3 rounded mt-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fs-xs fw-bold text-uppercase text-white-50">Quick Persona Switch</span>
                  <span className="badge bg-warning text-dark fs-xxs">1-Click</span>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-light text-primary py-1 px-2 fs-xxs fw-semibold"
                    onClick={() => handleQuickLogin('superadmin', 'Admin@123')}
                  >
                    Super Admin
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-light py-1 px-2 fs-xxs"
                    onClick={() => handleQuickLogin('admin', 'bhsc@2019')}
                  >
                    Legacy Admin
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-light py-1 px-2 fs-xxs"
                    onClick={() => handleQuickLogin('principal', 'password123')}
                  >
                    Principal
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-light py-1 px-2 fs-xxs"
                    onClick={() => handleQuickLogin('teacher.farhana', 'password123')}
                  >
                    Teacher
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-light py-1 px-2 fs-xxs"
                    onClick={() => handleQuickLogin('accounts.head', 'password123')}
                  >
                    Accountant
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Login Form */}
            <div className="col-lg-7 p-4 p-md-5 bg-body">
              <div className="mb-4">
                <h4 className="fw-bold text-body mb-1">Academic Staff Gateway 👋</h4>
                <p className="text-body-secondary fs-sm">Sign in with institutional credentials to access the RBAC administration console.</p>
              </div>

              {error && (
                <div className="alert alert-danger d-flex align-items-center py-2 px-3 fs-sm mb-3" role="alert">
                  <i className="ti ti-alert-circle fs-18 me-2"></i>
                  <div>{error}</div>
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-body fs-sm">
                    <i className="ti ti-building me-1 text-primary"></i> Campus / Branch
                  </label>
                  <select 
                    className="form-select"
                    value={activeBranch}
                    onChange={(e) => setActiveBranch(e.target.value)}
                  >
                    <option value="Main Campus (Dania)">Main Campus (Dania, Dhaka)</option>
                    <option value="Dhanmondi Campus">Dhanmondi Campus</option>
                    <option value="Uttara Campus">Uttara Model Campus</option>
                    <option value="Noakhali Regional Branch">Noakhali Regional Branch</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-body fs-sm">
                    <i className="ti ti-user me-1 text-primary"></i> Username or Staff Email <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="e.g. admin or superadmin" 
                      required 
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label fw-semibold text-body fs-sm mb-0">
                      <i className="ti ti-lock me-1 text-primary"></i> Password <span className="text-danger">*</span>
                    </label>
                    <span className="fs-xs text-body-secondary">Default: <code>Admin@123</code> / <code>bhsc@2019</code></span>
                  </div>
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
                      className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-body-secondary p-0 me-3 text-decoration-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'} fs-16`}></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                    <label className="form-check-label fs-sm text-body-secondary" htmlFor="rememberMe">
                      Keep session active
                    </label>
                  </div>
                  <span className="fs-xs text-body-secondary">
                    <i className="ti ti-shield-check text-success me-1"></i> JWT Bearer Token
                  </span>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Verifying with ASP.NET Core API...</span>
                    </>
                  ) : (
                    <>
                      <span>Enter Academic Console</span>
                      <i className="ti ti-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-4 pt-2 border-top border-secondary-subtle">
                <p className="fs-xs text-body-secondary mb-0">
                  Bornomala Education Management System &bull; C# ASP.NET Core &bull; Microsoft SQL Server 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
