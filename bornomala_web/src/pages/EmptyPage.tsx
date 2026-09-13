import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

export const EmptyPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Empty Page" category="Pages" />

      <div className="row">
        <div className="col-12">
          <Card title="Starter Container">
            <div className="text-center py-5">
              <span className="avatar-lg bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                <i className="ti ti-file-plus fs-36"></i>
              </span>
              <h4 className="fw-bold mb-2">Build Your Next WebApp Feature Here</h4>
              <p className="text-muted max-w-md mx-auto mb-4" style={{ maxWidth: 520 }}>
                This canonical empty starter page is pre-configured with complete layout offsets, dark mode state, and responsive behavior. Drop your custom UI components directly into this container.
              </p>
              <Link to="/" className="btn btn-primary fw-semibold">
                <i className="ti ti-arrow-left me-1"></i> Back to Dashboard
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
