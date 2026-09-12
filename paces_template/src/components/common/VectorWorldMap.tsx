import React, { useEffect, useRef } from 'react';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.css';

interface VectorWorldMapProps {
  height?: string | number;
  selectedRegions?: string[];
}

export const VectorWorldMap: React.FC<VectorWorldMapProps> = ({
  height = 300,
  selectedRegions = ['CA', 'US', 'RU', 'IN']
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const initMap = () => {
      if (!isMounted || !mapRef.current) return;
      mapRef.current.innerHTML = '';

      try {
        mapInstance.current = new (jsVectorMap as any)({
          selector: mapRef.current,
          map: 'world',
          zoomOnScroll: false,
          zoomButtons: true,
          regionStyle: {
            initial: {
              stroke: '#aab9d14d',
              strokeWidth: 0.25,
              fill: '#aab9d14d',
              fillOpacity: 1
            },
            selected: {
              fill: '#236dc9'
            }
          },
          selectedRegions: selectedRegions
        });
      } catch (e) {
        console.warn('VectorMap init error:', e);
      }
    };

    if (!(window as any).jsVectorMap) {
      (window as any).jsVectorMap = jsVectorMap;
    }

    if (!(jsVectorMap as any).maps?.world) {
      const script = document.createElement('script');
      script.src = '/assets/js/maps/world.js';
      script.async = true;
      script.onload = () => {
        if (isMounted) initMap();
      };
      document.body.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      isMounted = false;
      if (mapInstance.current && typeof mapInstance.current.destroy === 'function') {
        mapInstance.current.destroy();
      }
    };
  }, [selectedRegions]);

  return <div ref={mapRef} id="session-by-countries" style={{ height }} />;
};
