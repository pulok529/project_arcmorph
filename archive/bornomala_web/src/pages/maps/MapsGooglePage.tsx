import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const MapsGooglePage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Google" category="Maps" />

      <div className="row">
        <div className="col-12">
          <Card title="Google Maps Container Embed" badge={<span className="badge badge-soft-danger fs-xs">Google API</span>}>
            <div className="ratio ratio-21x9 rounded overflow-hidden shadow-sm" style={{ minHeight: 400 }}>
              <iframe
                title="Google Map Demo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656500000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
