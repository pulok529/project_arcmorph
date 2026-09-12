import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionLock } from '../context/SessionLockContext';
import { useTask } from '../context/TaskContext';

export const LockScreenPage: React.FC = () => {
  const { unlockSession, lockPin } = useSessionLock();
  const { activeTasks } = useTask();
  const navigate = useNavigate();

  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState<string | null>(null);

  const handleDigitChange = (idx: number, val: string) => {
    if (val.length <= 1) {
      const next = [...pin];
      next[idx] = val;
      setPin(next);
      if (val && idx < 3) {
        const nextInput = document.getElementById(`lock-pin-${idx + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleDialClick = (digit: string) => {
    const firstEmpty = pin.findIndex(d => d === '');
    if (firstEmpty !== -1) {
      const next = [...pin];
      next[firstEmpty] = digit;
      setPin(next);
      if (firstEmpty < 3) {
        const nextInput = document.getElementById(`lock-pin-${firstEmpty + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleBackspace = () => {
    const lastFilled = [...pin].reverse().findIndex(d => d !== '');
    if (lastFilled !== -1) {
      const actualIndex = 3 - lastFilled;
      const next = [...pin];
      next[actualIndex] = '';
      setPin(next);
      const prevInput = document.getElementById(`lock-pin-${actualIndex}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = pin.join('');
    if (unlockSession(entered)) {
      navigate(-1);
    } else {
      setError('Incorrect security PIN. (Default: 1234)');
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-3 position-relative overflow-hidden"
      style={{
        backgroundColor: 'rgba(5, 8, 17, 0.96)',
        backdropFilter: 'blur(25px)',
        color: '#e2e8f0'
      }}
    >
      {/* Background Cyber Glow */}
      <div
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
          top: '20%',
          left: '30%'
        }}
      ></div>

      <div
        className="card border shadow-2xl position-relative"
        style={{
          maxWidth: '420px',
          width: '100%',
          backgroundColor: '#0b0f19',
          borderColor: 'rgba(0, 242, 254, 0.35)',
          borderRadius: '16px',
          boxShadow: '0 0 35px rgba(0, 242, 254, 0.2)'
        }}
      >
        <div className="card-body p-4 p-md-5 text-center">
          {/* Logo Header */}
          <div className="mb-3">
            <img src="/assets/images/logo.svg" alt="ArcMorph" style={{ height: '36px' }} />
          </div>

          {/* User Avatar */}
          <div className="position-relative d-inline-block mb-3">
            <img
              src="/assets/images/users/naimul_islam.jpg"
              alt="Naimul Islam"
              className="rounded-circle border border-2 border-cyan shadow"
              style={{ width: 80, height: 80, objectFit: 'cover' }}
              onError={(e) => {
                // Fallback to vector AM emblem
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span
              className="position-absolute bottom-0 end-0 p-1.5 bg-success border border-dark rounded-circle"
              title="Online Session"
              style={{ width: 14, height: 14 }}
            ></span>
          </div>

          <h5 className="fw-bold mb-1 text-white">Naimul Islam</h5>
          <div className="mb-3">
            <span className="badge bg-dark text-cyan border border-cyan-subtle font-monospace fs-11">
              <i className="ti ti-lock me-1"></i> Protected Session Active
            </span>
          </div>

          {/* Background Tasks Running Telemetry */}
          {activeTasks.length > 0 && (
            <div className="p-2 mb-3 rounded bg-black-subtle border border-dark text-start fs-11">
              <span className="text-emerald d-flex align-items-center gap-1 mb-1 fw-bold">
                <span className="spinner-grow spinner-grow-sm text-emerald" style={{ width: 8, height: 8 }}></span>
                {activeTasks.length} background process executing
              </span>
              <span className="text-muted d-block text-truncate">
                {activeTasks[0].title} ({activeTasks[0].progress}%)
              </span>
            </div>
          )}

          {error && (
            <div className="alert alert-danger py-2 px-3 fs-12 mb-3 border-danger bg-danger-subtle text-danger">
              {error}
            </div>
          )}

          {/* 4-Digit PIN Form */}
          <form onSubmit={handleUnlock}>
            <div className="d-flex justify-content-center gap-2 mb-3">
              {pin.map((digit, idx) => (
                <input
                  key={idx}
                  id={`lock-pin-${idx}`}
                  type="password"
                  maxLength={1}
                  className="form-control text-center fs-20 fw-bold bg-dark border-secondary text-cyan"
                  style={{ width: 48, height: 54 }}
                  value={digit}
                  onChange={(e) => handleDigitChange(idx, e.target.value)}
                  autoFocus={idx === 0}
                />
              ))}
            </div>

            {/* Dialpad Matrix */}
            <div className="row g-2 mb-3" style={{ maxWidth: '240px', margin: '0 auto' }}>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(n => (
                <div key={n} className="col-4">
                  <button
                    type="button"
                    className="btn btn-sm btn-dark w-100 py-2 fs-14 fw-bold border-secondary text-light hover-border-cyan"
                    onClick={() => handleDialClick(n)}
                  >
                    {n}
                  </button>
                </div>
              ))}
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-sm btn-dark w-100 py-2 fs-12 text-muted border-secondary"
                  onClick={() => setPin(['', '', '', ''])}
                >
                  CLR
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-sm btn-dark w-100 py-2 fs-14 fw-bold border-secondary text-light hover-border-cyan"
                  onClick={() => handleDialClick('0')}
                >
                  0
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-sm btn-dark w-100 py-2 fs-12 text-warning border-secondary"
                  onClick={handleBackspace}
                >
                  <i className="ti ti-backspace"></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 py-2 fw-bold text-dark shadow"
              style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)', border: 'none' }}
            >
              <i className="ti ti-lock-open me-1"></i> Unlock Session
            </button>
          </form>

          <div className="mt-3 text-center">
            <Link to="/login" className="text-muted fs-12 text-decoration-none hover-light">
              <i className="ti ti-switch-horizontal me-1"></i> Switch account or sign in with password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
