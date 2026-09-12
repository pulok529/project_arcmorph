import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { PageHeader } from '../components/common/PageHeader';
import { ProjectSummary } from '../types';

export const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [projectName, setProjectName] = useState('');
  const [domainDescription, setDomainDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/zip': ['.zip'],
      'application/x-rar-compressed': ['.rar'],
      'application/x-7z-compressed': ['.7z'],
      'application/octet-stream': ['.bak']
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(prev => [...prev, ...acceptedFiles]);
      if (acceptedFiles.length > 0 && !projectName) {
        const baseName = acceptedFiles[0].name.replace(/\.[^/.]+$/, '');
        setProjectName(baseName.replace(/[_-]/g, ' '));
      }
    }
  });

  const removeFile = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleProcess = (decision: 'later' | 'now') => {
    if (!projectName.trim()) {
      alert('Please specify a project name');
      return;
    }
    if (uploadedFiles.length === 0) {
      alert('Please upload at least one archive or database backup (.zip/.rar/.bak)');
      return;
    }

    setIsUploading(true);
    const bigId = `proj_${Date.now()}`;
    const targetFolder = `Project_${Date.now()}`;

    // Simulate progress
    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      setUploadProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        const newProject: ProjectSummary = {
          id: bigId,
          name: projectName,
          archive_name: uploadedFiles[0].name,
          created_at: new Date().toISOString(),
          status: decision === 'now' ? 'PROCESSING' : 'PENDING',
          tech_stack: ['.NET Framework 4.5', 'ASP.NET', 'MS SQL Server', 'Crystal Reports'],
          stats: {
            total_files: Math.floor(Math.random() * 800 + 400),
            aspx_pages: Math.floor(Math.random() * 150 + 50),
            csharp_classes: Math.floor(Math.random() * 400 + 200),
            reports: Math.floor(Math.random() * 40 + 10),
            tables: Math.floor(Math.random() * 30 + 15)
          },
          domain_summary: domainDescription || `Allocated workspace ${targetFolder} for legacy code reverse-engineering.`
        };

        // Save to local storage registry
        try {
          const current = JSON.parse(localStorage.getItem('ARCMORPH_PROJECTS') || '[]');
          current.unshift(newProject);
          localStorage.setItem('ARCMORPH_PROJECTS', JSON.stringify(current));
        } catch {
          // fallback
        }

        setIsUploading(false);
        if (decision === 'now') {
          navigate(`/terminal?project=${bigId}&auto=true`);
        } else {
          navigate('/morph-hub');
        }
      }
    }, 200);
  };

  return (
    <div className="container-fluid pb-5">
      <PageHeader
        title="Project Ingestion & Workspace Allocator"
        category="Intake Engine"
        breadcrumbs={[{ label: 'Home' }, { label: 'MorphHub', path: '/morph-hub' }, { label: 'Intake Engine', active: true }]}
      />

      <div className="row justify-content-center">
        <div className="col-xl-9 col-xxl-8">
          <div className="card border-0 shadow-lg" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '16px' }}>
            <div className="card-header bg-transparent border-bottom border-dark py-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span className="avatar-xs rounded-circle d-flex align-items-center justify-content-center" style={{ background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', width: 32, height: 32 }}>
                  <i className="ti ti-upload fs-16"></i>
                </span>
                <h5 className="card-title text-light mb-0">Legacy System Ingestion</h5>
              </div>
              <span className="badge bg-dark border border-secondary text-info fs-12">
                <i className="ti ti-folder-check me-1"></i> Auto Workspace Allocation
              </span>
            </div>

            <div className="card-body p-4 p-md-5">
              {/* Project Meta Inputs */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fs-13 text-light fw-medium">Project Name</label>
                  <input
                    type="text"
                    className="form-control bg-dark border-secondary text-light"
                    placeholder="e.g. Enterprise Accounting Monolith"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-13 text-light fw-medium">Target Allocation</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-muted fs-12">Directory:</span>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-muted fs-12"
                      value={`Project_${Date.now()}`}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label fs-13 text-light fw-medium">System / Domain Summary (Optional)</label>
                  <textarea
                    rows={2}
                    className="form-control bg-dark border-secondary text-light fs-13"
                    placeholder="Brief description of the legacy software domain, business rules, or key workflows..."
                    value={domainDescription}
                    onChange={(e) => setDomainDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* Drag-and-Drop Ingestion Zone */}
              <div
                {...getRootProps()}
                className={`p-5 text-center border-2 border-dashed rounded-3 cursor-pointer transition-all mb-4 ${
                  isDragActive ? 'border-cyan bg-dark' : 'border-secondary bg-dark'
                }`}
                style={{
                  borderColor: isDragActive ? '#00f2fe' : 'rgba(255, 255, 255, 0.2)',
                  background: isDragActive ? 'rgba(0, 242, 254, 0.05)' : 'rgba(11, 15, 25, 0.7)',
                  cursor: 'pointer'
                }}
              >
                <input {...getInputProps()} />
                <div className="avatar-md mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', width: 64, height: 64 }}>
                  <i className="ti ti-cloud-upload fs-32"></i>
                </div>
                <h5 className="text-light fw-bold mb-1">
                  {isDragActive ? 'Drop archives here...' : 'Drag & Drop Legacy Archives or Database Backups'}
                </h5>
                <p className="text-muted fs-13 mb-3">
                  Accepts <span className="text-info fw-bold">.zip, .rar, .7z</span> source archives and <span className="text-success fw-bold">.bak</span> MSSQL backups (up to 4 GB)
                </p>
                <span className="btn btn-sm btn-outline-secondary px-3">
                  <i className="ti ti-search me-1"></i> Browse Files on Computer
                </span>
              </div>

              {/* Uploaded Files Queue */}
              {uploadedFiles.length > 0 && (
                <div className="mb-4">
                  <h6 className="text-light fw-bold fs-13 mb-2 d-flex align-items-center gap-1">
                    <i className="ti ti-files text-info"></i> Ingestion Queue ({uploadedFiles.length} files)
                  </h6>
                  <div className="list-group">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="list-group-item bg-dark border-secondary text-light d-flex align-items-center justify-content-between p-2 mb-1 rounded">
                        <div className="d-flex align-items-center gap-2 text-truncate">
                          <i className="ti ti-file-zip text-info fs-18"></i>
                          <div>
                            <span className="fs-13 fw-semibold text-light d-block text-truncate" style={{ maxWidth: '350px' }}>{file.name}</span>
                            <span className="fs-11 text-muted">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                          </div>
                        </div>
                        <button type="button" className="btn btn-sm btn-link text-danger p-0" onClick={(e) => removeFile(idx, e)}>
                          <i className="ti ti-x fs-16"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload Progress Bar */}
              {isUploading && (
                <div className="mb-4">
                  <div className="d-flex justify-content-between fs-12 mb-1 text-light">
                    <span>Allocating workspace & extracting manifest...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px', background: 'rgba(255,255,255,0.1)' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="d-flex align-items-center justify-content-between pt-3 border-top border-dark flex-wrap gap-2">
                <Link to="/morph-hub" className="btn btn-outline-secondary fs-13 px-3">
                  <i className="ti ti-arrow-left me-1"></i> Back to MorphHub
                </Link>

                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    disabled={isUploading}
                    className="btn btn-outline-light fs-13 px-3"
                    onClick={() => handleProcess('later')}
                  >
                    <i className="ti ti-clock me-1"></i> Save & Analyze Later
                  </button>

                  <button
                    type="button"
                    disabled={isUploading}
                    className="btn fw-bold fs-13 px-4 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)', color: '#0b0f19', border: 'none' }}
                    onClick={() => handleProcess('now')}
                  >
                    <i className="ti ti-bolt me-1"></i> Ingest & Analyze Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadPage;
