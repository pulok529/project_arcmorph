import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const MapsVectorPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('North America');

  return (
    <div>
      <PageHeader title="Vector Maps" category="Maps" />

      <div className="row">
        <div className="col-lg-8">
          <Card title="Interactive Vector Projection" badge={<span className="badge badge-soft-info fs-xs">Vector SVG</span>}>
            <div className="p-4 bg-light rounded text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 380 }}>
              <svg viewBox="0 0 1000 500" className="w-100 h-auto" style={{ maxHeight: 350 }}>
                <rect width="1000" height="500" fill="#f8fafc" rx="8" />
                <path d="M150,150 Q200,80 300,120 T450,180 T600,120 T750,160 T900,120" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6,6" />
                <circle cx="250" cy="180" r="18" fill="#4f46e5" opacity="0.8" className="cursor-pointer" onClick={() => setSelectedRegion('North America Hub (Active: 1,420 users)')} />
                <circle cx="500" cy="160" r="14" fill="#06b6d4" opacity="0.8" className="cursor-pointer" onClick={() => setSelectedRegion('European Data Gateway (Active: 980 users)')} />
                <circle cx="750" cy="220" r="16" fill="#10b981" opacity="0.8" className="cursor-pointer" onClick={() => setSelectedRegion('Asia-Pacific Cluster (Active: 2,130 users)')} />
                <text x="250" y="220" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="bold">USA</text>
                <text x="500" y="200" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="bold">Europe</text>
                <text x="750" y="260" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="bold">Asia</text>
              </svg>
            </div>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card title="Selected Vector Cluster">
            <div className="p-3 bg-primary-subtle rounded border border-primary-subtle mb-3">
              <h6 className="text-primary fw-bold mb-1">Region Status</h6>
              <p className="mb-0 fs-sm">{selectedRegion}</p>
            </div>
            <p className="text-muted fs-sm">Click on any region node on the map to inspect real-time user traffic and node health.</p>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary btn-sm" onClick={() => setSelectedRegion('Global Network: 4,530 Total Connections')}>
                <i className="ti ti-world me-1"></i> View All Clusters
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
