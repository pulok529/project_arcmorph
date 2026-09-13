import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ClipboardPage: React.FC = () => {
  const [promoText] = useState('Click the button to copy this promotional text.');
  const [cutText, setCutText] = useState('This content will be cut and removed from this textarea.');
  const [emailText] = useState('support@example.com');
  const [copyCodeText] = useState('npm install paces-theme-react');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch (e) {}
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCut = (key: string) => {
    handleCopy(cutText, key);
    setCutText('');
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Clipboard" breadcrumbs={[{ label: 'Plugins' }, { label: 'Clipboard', active: true }]} />

      <div className="row">
        <div className="col-12">
          <Card title="Examples">
            <div className="row g-3">
              {/* Copy from Element */}
              <div className="col-xl-6">
                <div className="border border-light rounded p-3 h-100 bg-light-subtle">
                  <h5 className="mb-1">Copy from Element</h5>
                  <p className="text-muted mb-2">Use click handler to copy text from a specific element.</p>
                  <p className="text-primary fw-bold">{promoText}</p>
                  <button className="btn btn-sm btn-primary" onClick={() => handleCopy(promoText, 'promo')}>
                    <i className="ti ti-copy me-1"></i> {copiedKey === 'promo' ? 'Copied!' : 'Copy Text'}
                  </button>
                </div>
              </div>

              {/* Cut from Textarea */}
              <div className="col-xl-6">
                <div className="border border-light rounded p-3 h-100 bg-light-subtle">
                  <h5 className="mb-1">Cut from Textarea</h5>
                  <p className="text-muted mb-2">Remove content from text area and copy to clipboard.</p>
                  <textarea className="form-control" rows={2} value={cutText} onChange={(e) => setCutText(e.target.value)} />
                  <button className="btn btn-sm btn-primary mt-3" onClick={() => handleCut('cut')}>
                    <i className="ti ti-cut me-1"></i> {copiedKey === 'cut' ? 'Cut Done!' : 'Cut Content'}
                  </button>
                </div>
              </div>

              {/* Copy Email Address */}
              <div className="col-xl-6">
                <div className="border border-light rounded p-3 h-100 bg-light-subtle">
                  <h5 className="mb-1">Copy Email Address</h5>
                  <p className="text-muted mb-2">Click the button to copy this contact email:</p>
                  <span className="d-block text-primary fw-bold mb-2">{emailText}</span>
                  <button className="btn btn-sm btn-primary" onClick={() => handleCopy(emailText, 'email')}>
                    <i className="ti ti-copy me-1"></i> {copiedKey === 'email' ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
              </div>

              {/* Copy Code Snippet */}
              <div className="col-xl-6">
                <div className="border border-light rounded p-3 h-100 bg-light-subtle">
                  <h5 className="mb-1">Copy Code Snippet</h5>
                  <p className="text-muted mb-2">Copy terminal commands and code:</p>
                  <code className="d-block text-danger fw-semibold mb-2 bg-light p-1 rounded">{copyCodeText}</code>
                  <button className="btn btn-sm btn-primary" onClick={() => handleCopy(copyCodeText, 'code')}>
                    <i className="ti ti-copy me-1"></i> {copiedKey === 'code' ? 'Copied!' : 'Copy Command'}
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ClipboardPage;
