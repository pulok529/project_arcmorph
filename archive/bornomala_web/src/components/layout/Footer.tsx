import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            2026 © Paces - By <a href="https://coderthemes.com/" target="_blank" rel="noreferrer" className="fw-bold text-decoration-none">CODERTHEMES</a>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="text-md-end footer-links">
              <a href="#about" className="text-muted me-3">About</a>
              <a href="#support" className="text-muted me-3">Support</a>
              <a href="#contact" className="text-muted">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
