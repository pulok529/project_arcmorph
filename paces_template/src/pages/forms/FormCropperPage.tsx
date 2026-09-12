import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const FormCropperPage: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  return (
    <div>
      <PageHeader title="Image Cropper" category="Forms" />

      <div className="row">
        <div className="col-lg-8">
          <Card title="Interactive Image Preview Canvas">
            <div className="bg-dark rounded p-4 text-center overflow-hidden position-relative" style={{ height: 360 }}>
              <div
                className="d-inline-block transition-all"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src="/assets/images/small/img-1.jpg"
                  alt="Crop preview"
                  className="rounded img-fluid"
                  style={{ maxHeight: 280 }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}>
                <i className="ti ti-zoom-in me-1"></i> Zoom In
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}>
                <i className="ti ti-zoom-out me-1"></i> Zoom Out
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setRotation((r) => r + 90)}>
                <i className="ti ti-rotate me-1"></i> Rotate
              </button>
              <button className="btn btn-primary btn-sm" onClick={() => { setZoom(1); setRotation(0); }}>
                <i className="ti ti-refresh me-1"></i> Reset
              </button>
            </div>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card title="Crop Controls & Metadata">
            <h6 className="fw-semibold mb-2">Transform Status:</h6>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <span>Zoom Factor</span>
                <span className="badge bg-primary">{(zoom * 100).toFixed(0)}%</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <span>Rotation</span>
                <span className="badge bg-info">{rotation}°</span>
              </li>
            </ul>
            <button className="btn btn-success w-100" type="button">
              <i className="ti ti-crop me-1"></i> Crop & Download
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};
