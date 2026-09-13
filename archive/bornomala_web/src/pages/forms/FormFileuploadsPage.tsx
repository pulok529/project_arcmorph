import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const FormFileuploadsPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([
    { name: 'dashboard-preview.png', size: '1.2 MB' },
    { name: 'analytics-report.pdf', size: '340 KB' }
  ]);
  const [profileImg, setProfileImg] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles(prev => [...prev, { name: file.name, size: `${(file.size / 1024).toFixed(1)} KB` }]);
    }
  };

  const removeFile = (idx: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfileImg(url);
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="File Uploads" category="Forms" />

      <div className="module-content-body">
        <div className="row g-4">
          {/* Card 1: Dropzone */}
          <div className="col-12">
            <Card 
              title="Dropzone" 
              subtitle="DropzoneJS is an open source library that provides drag'n'drop file uploads with image previews."
            >
              <div 
                className="border-2 border-dashed rounded p-4 text-center bg-light cursor-pointer hover-bg-light-subtle transition-all"
                style={{ position: 'relative' }}
              >
                <input 
                  type="file" 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer" 
                  onChange={handleFileUpload} 
                />
                <div className="avatar-lg mx-auto mb-3">
                  <span className="avatar-title bg-info-subtle text-info rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <i className="ti ti-cloud-upload fs-24"></i>
                  </span>
                </div>
                <h5 className="mb-2">Drop files here or click to upload.</h5>
                <p className="text-muted fst-italic mb-3">You can drag images here, or browse files via the button below.</p>
                <button type="button" className="btn btn-sm shadow btn-primary">Browse Images</button>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="dropzone-previews mt-3">
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} className="card mt-2 mb-0 border-dashed border">
                      <div className="p-2">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="avatar-sm rounded bg-light d-flex align-items-center justify-content-center text-primary" style={{ width: '40px', height: '40px' }}>
                              <i className="ti ti-file fs-20"></i>
                            </span>
                          </div>
                          <div className="col ps-0">
                            <span className="fw-semibold text-body fs-sm">{file.name}</span>
                            <p className="mb-0 text-muted fs-xs">{file.size}</p>
                          </div>
                          <div className="col-auto">
                            <button type="button" className="btn btn-link btn-sm text-danger p-0" onClick={() => removeFile(idx)}>
                              <i className="ti ti-trash fs-18"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Card 2: Filepond */}
          <div className="col-12">
            <Card 
              title="Filepond" 
              subtitle="A JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great user experience."
            >
              <div className="mb-4">
                <h6 className="mb-3">Basic Example</h6>
                <div className="border rounded p-3 bg-light text-center">
                  <input type="file" className="form-control" multiple onChange={handleFileUpload} />
                </div>
              </div>

              <div className="mb-4">
                <h6 className="mb-3">Two Grid Example</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="border rounded p-3 bg-light text-center">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="border rounded p-3 bg-light text-center">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mb-3">Three Grid Example</h6>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="border rounded p-3 bg-light text-center">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="border rounded p-3 bg-light text-center">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="border rounded p-3 bg-light text-center">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 3: Profile Picture */}
          <div className="col-12">
            <Card 
              title="Profile Picture" 
              subtitle="FilePond is a JavaScript library with profile picture-shaped file upload variation."
            >
              <div className="row g-4 align-items-center">
                <div className="col-sm-6 text-center">
                  <div className="position-relative d-inline-block">
                    <div 
                      className="rounded-circle border border-2 border-primary overflow-hidden mx-auto d-flex align-items-center justify-content-center bg-light" 
                      style={{ width: '120px', height: '120px' }}
                    >
                      {profileImg ? (
                        <img src={profileImg} alt="avatar" className="w-100 h-100 object-fit-cover" />
                      ) : (
                        <i className="ti ti-user fs-48 text-muted"></i>
                      )}
                    </div>
                    <label className="btn btn-sm btn-primary mt-2 cursor-pointer">
                      <i className="ti ti-camera me-1"></i> Change Avatar
                      <input type="file" className="d-none" accept="image/*" onChange={handleProfileUpload} />
                    </label>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="position-relative d-inline-block">
                    <div 
                      className="rounded-4 border border-2 border-dashed border-primary overflow-hidden mx-auto d-flex align-items-center justify-content-center bg-light" 
                      style={{ width: '120px', height: '120px' }}
                    >
                      {profileImg ? (
                        <img src={profileImg} alt="avatar rounded" className="w-100 h-100 object-fit-cover" />
                      ) : (
                        <i className="ti ti-photo fs-48 text-muted"></i>
                      )}
                    </div>
                    <label className="btn btn-sm btn-outline-primary mt-2 cursor-pointer">
                      <i className="ti ti-upload me-1"></i> Upload Square
                      <input type="file" className="d-none" accept="image/*" onChange={handleProfileUpload} />
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormFileuploadsPage;
