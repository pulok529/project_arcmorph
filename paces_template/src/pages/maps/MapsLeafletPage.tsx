import React, { useEffect, useRef } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';
import L from 'leaflet';

export const MapsLeafletPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([51.505, -0.09])
        .addTo(map)
        .bindPopup('<b>London Headquarters</b><br />Main Admin Hub.')
        .openPopup();

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <PageHeader title="Leaflet" category="Maps" />

      <div className="row">
        <div className="col-lg-8">
          <Card title="Interactive Leaflet World Map" badge={<span className="badge badge-soft-success fs-xs">Live Interactive</span>}>
            <div ref={mapRef} style={{ height: 420, width: '100%', borderRadius: 8, zIndex: 1 }} />
          </Card>
        </div>

        <div className="col-lg-4">
          <Card title="Map Controller & Pins">
            <h6 className="fw-semibold mb-3">Active Geo Markers</h6>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <h6 className="mb-0 fs-sm">London Hub</h6>
                  <small className="text-muted">51.505, -0.09</small>
                </div>
                <span className="badge bg-primary">Active</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <h6 className="mb-0 fs-sm">New York Office</h6>
                  <small className="text-muted">40.7128, -74.0060</small>
                </div>
                <span className="badge bg-success">Online</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <h6 className="mb-0 fs-sm">Tokyo Data Center</h6>
                  <small className="text-muted">35.6762, 139.6503</small>
                </div>
                <span className="badge bg-info">Connected</span>
              </li>
            </ul>
            <button className="btn btn-primary w-100" type="button" onClick={() => mapInstanceRef.current?.setView([40.7128, -74.0060], 12)}>
              <i className="ti ti-map-pin me-1"></i> Pan to New York
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};
