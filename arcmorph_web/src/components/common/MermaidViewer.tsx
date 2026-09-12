import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { ZoomIn, ZoomOut, RotateCcw, Copy, Check, Sparkles } from 'lucide-react';

interface MermaidViewerProps {
  chart: string;
  title?: string;
  className?: string;
}

let mermaidInitialized = false;

export const MermaidViewer: React.FC<MermaidViewerProps> = ({ chart, title, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!mermaidInitialized) {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'neutral',
          securityLevel: 'loose',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          themeVariables: {
            primaryColor: '#4f46e5',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#3730a3',
            lineColor: '#6366f1',
            secondaryColor: '#f1f5f9',
            tertiaryColor: '#ffffff'
          }
        });
        mermaidInitialized = true;
      } catch (e) {
        console.error('Mermaid initialization error:', e);
      }
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const renderChart = async () => {
      if (!chart || !chart.trim()) {
        setSvgContent('');
        return;
      }

      const id = `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`;
      try {
        setError(null);
        // Clean markdown backticks if present
        let cleanChart = chart.trim();
        if (cleanChart.startsWith('```mermaid')) {
          cleanChart = cleanChart.replace(/^```mermaid\s*/i, '').replace(/```\s*$/, '');
        } else if (cleanChart.startsWith('```')) {
          cleanChart = cleanChart.replace(/^```\s*/, '').replace(/```\s*$/, '');
        }

        const { svg } = await mermaid.render(id, cleanChart);
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err: any) {
        console.warn('Mermaid render warning:', err);
        if (isMounted) {
          setError(err.message || 'Unable to render visual graph syntax');
        }
      }
    };

    renderChart();
    return () => {
      isMounted = false;
    };
  }, [chart]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`card border rounded-3 bg-white shadow-none overflow-hidden ${className}`}>
      {/* Visual Controls Toolbar */}
      <div className="card-header bg-light py-2 px-3 d-flex align-items-center justify-content-between border-bottom">
        <div className="d-flex align-items-center gap-2">
          <Sparkles size={14} className="text-primary" />
          <span className="fs-12 fw-bold text-dark font-monospace">
            {title || 'Visual Graph Diagram'}
          </span>
          <span className="badge bg-primary-subtle text-primary rounded-pill fs-10 font-monospace">
            Interactive SVG
          </span>
        </div>

        <div className="d-flex align-items-center gap-1">
          <button
            onClick={() => setZoom(z => Math.min(2.0, z + 0.15))}
            className="btn btn-xs btn-outline-secondary rounded-circle p-1"
            title="Zoom In"
          >
            <ZoomIn size={13} />
          </button>
          <button
            onClick={() => setZoom(z => Math.max(0.5, z - 0.15))}
            className="btn btn-xs btn-outline-secondary rounded-circle p-1"
            title="Zoom Out"
          >
            <ZoomOut size={13} />
          </button>
          <button
            onClick={() => setZoom(1)}
            className="btn btn-xs btn-outline-secondary rounded-circle p-1"
            title="Reset Zoom"
          >
            <RotateCcw size={13} />
          </button>
          <button
            onClick={handleCopyCode}
            className="btn btn-xs btn-light border rounded-pill px-2 py-0.5 fs-11 font-monospace ms-1 d-inline-flex align-items-center gap-1"
            title="Copy Mermaid Code"
          >
            {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Render Area */}
      <div className="card-body p-4 text-center overflow-auto bg-light-subtle" style={{ minHeight: '180px', maxHeight: '500px' }}>
        {error ? (
          <div className="p-3 text-start">
            <div className="alert alert-warning fs-12 mb-2">
              Visual diagram preview:
            </div>
            <pre className="font-monospace fs-11 bg-dark text-light p-3 rounded-3 text-start">
              {chart}
            </pre>
          </div>
        ) : svgContent ? (
          <div
            ref={containerRef}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease-out'
            }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="py-5 text-muted fs-12">
            <div className="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
            Generating visual architecture graph...
          </div>
        )}
      </div>
    </div>
  );
};
