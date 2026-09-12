import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useOcrSession, OcrDocument } from '../context/OcrSessionContext';
import Swal from 'sweetalert2';

export const OcrStudioPage: React.FC = () => {
  const {
    activeSession,
    hasUnsavedWork,
    addDocumentToSession,
    saveCurrentProject,
    discardCurrentProject,
    createNewProject,
    savedVaultProjects,
    watchdogTriggered,
    dismissWatchdog
  } = useOcrSession();

  const [isExtracting, setIsExtracting] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  // SweetAlert watchdog listener
  useEffect(() => {
    if (watchdogTriggered && hasUnsavedWork) {
      Swal.fire({
        title: 'Inactivity Alert (3 Minutes Elapsed)',
        html: `You have uncommitted OCR work in session <b>${activeSession.id}</b>.<br/><br/>Would you like to continue working, save project, or discard work?`,
        icon: 'warning',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: '💾 Save Project',
        denyButtonText: '🗑️ Discard Work',
        cancelButtonText: '✏️ Keep Working',
        confirmButtonColor: '#00f2fe',
        denyButtonColor: '#ef4444',
        cancelButtonColor: '#64748b',
        background: '#0b0f19',
        color: '#f8fafc'
      }).then((res) => {
        if (res.isConfirmed) {
          saveCurrentProject();
          Swal.fire({ title: 'Project Saved!', text: 'Stored inside OCR Vault.', icon: 'success', background: '#0b0f19', color: '#f8fafc' });
        } else if (res.isDenied) {
          discardCurrentProject();
          Swal.fire({ title: 'Work Discarded', text: 'Temporary files cleaned up.', icon: 'info', background: '#0b0f19', color: '#f8fafc' });
        } else {
          dismissWatchdog();
        }
      });
    }
  }, [watchdogTriggered, hasUnsavedWork, activeSession.id, saveCurrentProject, discardCurrentProject, dismissWatchdog]);

  const handleSimulatedUpload = (docType: 'passport' | 'cv' | 'generic') => {
    setIsExtracting(true);
    setTimeout(() => {
      let newDoc: OcrDocument;
      if (docType === 'passport') {
        newDoc = {
          id: `doc_${Date.now()}`,
          name: 'Bangladesh_Passport_A02828950.jpg',
          size: '1.24 MB',
          type: 'Passport Identity Scan',
          uploadedAt: new Date().toLocaleTimeString(),
          status: 'completed',
          extractedMarkdown: `# Passport OCR Extraction Result\n\n- **Full Name**: NAIMUL ISLAM\n- **Passport Number**: A02828950\n- **Personal No**: 1511446872\n- **Date of Birth**: 29 MAY 1998\n- **Place of Birth**: NOAKHALI\n- **Father's Name**: MD NAZRUL ISLAM\n- **Mother's Name**: NASIMA BEGUM\n- **Issue Date**: 28 FEB 2022\n- **Expiry Date**: 27 FEB 2032\n- **MRZ String**: P<BGDISLAM<<NAIMUL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`,
          extractedJson: {
            name: 'NAIMUL ISLAM',
            passportNo: 'A02828950',
            personalNo: '1511446872',
            dob: '1998-05-29',
            expiry: '2032-02-27',
            mrz: 'P<BGDISLAM<<NAIMUL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'
          }
        };
      } else if (docType === 'cv') {
        newDoc = {
          id: `doc_${Date.now()}`,
          name: 'Naimul_Islam_Europass_CV.pdf',
          size: '840 KB',
          type: 'Curriculum Vitae',
          uploadedAt: new Date().toLocaleTimeString(),
          status: 'completed',
          extractedMarkdown: `# Europass CV Extraction Result\n\n- **Candidate**: Naimul Islam\n- **Experience**: 5+ Years (Proshika, LEADS Corp, Creatrix)\n- **Degree**: BSc in Computer Science & Engineering (East West University)\n- **Research**: 3 Peer-Reviewed Publications (Elsevier, MDPI, ICDSNS)\n- **Technical Skills**: Python, C#, Java, ASP.NET Core, Docker, Kubernetes, AWS, Terraform`,
          extractedJson: {
            name: 'Naimul Islam',
            experienceYears: 5,
            companies: ['Proshika', 'LEADS Corporation Ltd', 'Creatrix Soft Tech Ltd'],
            education: 'East West University (BSc CSE)',
            publicationsCount: 3
          }
        };
      } else {
        newDoc = {
          id: `doc_${Date.now()}`,
          name: 'Architecture_Decomposition_Diagram.png',
          size: '2.1 MB',
          type: 'Technical Diagram',
          uploadedAt: new Date().toLocaleTimeString(),
          status: 'completed',
          extractedMarkdown: `# Technical Architecture Diagram OCR\n\n- Detected 6 Bounded Contexts\n- Primary Node: Legacy Monolithic ERP Core\n- External Gateways: bKash Payment Service, ZKTeco Biometrics`,
          extractedJson: {
            diagramType: 'Architecture Topology',
            nodesDetected: 6,
            gateways: ['bKash', 'ZKTeco']
          }
        };
      }

      addDocumentToSession(newDoc);
      setSelectedDocId(newDoc.id);
      setIsExtracting(false);
    }, 800);
  };

  const handleConfirmSave = () => {
    Swal.fire({
      title: 'Finalize & Save OCR Project',
      input: 'text',
      inputLabel: 'Project Notes & Description',
      inputPlaceholder: 'e.g. Identity Verification & Academic Credential Ingestion',
      inputValue: activeSession.notes || '',
      showCancelButton: true,
      confirmButtonText: 'Save to Vault',
      confirmButtonColor: '#00f2fe',
      background: '#0b0f19',
      color: '#f8fafc'
    }).then((res) => {
      if (res.isConfirmed) {
        saveCurrentProject(res.value);
        Swal.fire({
          icon: 'success',
          title: 'Project Saved in OCR Vault',
          text: 'Artifacts organized in ocr_vault/Stored/{index}/uploaded & created.',
          background: '#0b0f19',
          color: '#f8fafc'
        });
      }
    });
  };

  const handleConfirmDiscard = () => {
    Swal.fire({
      title: 'Discard Project?',
      text: 'Are you sure you want to discard this uncommitted OCR work? Temporary files will be purged.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Discard',
      confirmButtonColor: '#ef4444',
      cancelButtonText: 'Cancel',
      background: '#0b0f19',
      color: '#f8fafc'
    }).then((res) => {
      if (res.isConfirmed) {
        discardCurrentProject();
        setSelectedDocId(null);
        Swal.fire({
          icon: 'info',
          title: 'Workspace Reset',
          text: 'Ready for a new OCR session.',
          background: '#0b0f19',
          color: '#f8fafc'
        });
      }
    });
  };

  const selectedDoc = activeSession.documents.find(d => d.id === selectedDocId) || activeSession.documents[0];

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Universal Document & Passport OCR Studio" category="AI Ingestion Tools" />

      <div className="module-content-body">
        {/* Session Header Card */}
        <div className="card mb-4 border-dark">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-cyan-subtle text-cyan border border-cyan-subtle p-2">
                <i className="ti ti-scan fs-16"></i>
              </span>
              <div>
                <h6 className="mb-0 fw-bold font-monospace text-light">{activeSession.id}</h6>
                <small className="text-muted">
                  {activeSession.documents.length} Files Staged • Created: {new Date(activeSession.createdAt).toLocaleTimeString()}
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-dark border border-secondary text-light">
                <i className="ti ti-clock me-1 text-cyan"></i> 3-Min Auto Inactivity Watchdog Active
              </span>
              <button
                type="button"
                className="btn btn-sm btn-outline-info"
                onClick={createNewProject}
              >
                <i className="ti ti-plus me-1"></i> New Project Session
              </button>
            </div>
          </div>
        </div>

        {/* Dropzone & Quick Document Triggers */}
        <div className="card mb-4 border-2 border-dashed border-dark text-center p-4 bg-black-subtle">
          <div className="py-3">
            <i className="ti ti-cloud-upload fs-48 text-cyan mb-2 d-block opacity-75"></i>
            <h5 className="fw-bold text-white mb-1">Drag & Drop Documents for Intelligent OCR Extraction</h5>
            <p className="text-muted fs-13 mb-3">
              Supports Passports, National IDs, Academic CVs, Architecture Specs, and Scanned Reports.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                disabled={isExtracting}
                onClick={() => handleSimulatedUpload('passport')}
              >
                <i className="ti ti-id text-cyan"></i> Ingest Bangladesh Passport Scan
              </button>
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                disabled={isExtracting}
                onClick={() => handleSimulatedUpload('cv')}
              >
                <i className="ti ti-file-text text-success"></i> Ingest Naimul Islam Europass CV
              </button>
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                disabled={isExtracting}
                onClick={() => handleSimulatedUpload('generic')}
              >
                <i className="ti ti-chart-dots-3 text-warning"></i> Ingest Architecture Diagram
              </button>
            </div>

            {isExtracting && (
              <div className="mt-3">
                <span className="spinner-border spinner-border-sm text-cyan me-2"></span>
                <span className="text-cyan fs-13 font-monospace">Executing Qwen2.5-VL / GOT-OCR2.0 Pipeline...</span>
              </div>
            )}
          </div>
        </div>

        {/* Results Workspace: Documents List + Inspection Window */}
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="card-title mb-0">Session Documents</h6>
                <span className="badge rounded-pill bg-dark text-cyan">{activeSession.documents.length}</span>
              </div>
              <div className="card-body p-2 d-flex flex-column gap-2 overflow-y-auto" style={{ maxHeight: '420px' }}>
                {activeSession.documents.length === 0 ? (
                  <div className="p-4 text-center text-muted fs-13">
                    No documents uploaded in this project yet.
                  </div>
                ) : (
                  activeSession.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className={`p-3 rounded border cursor-pointer ${selectedDoc?.id === doc.id ? 'border-cyan bg-cyan-subtle' : 'border-dark bg-dark'}`}
                      onClick={() => setSelectedDocId(doc.id)}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold fs-12 text-truncate text-light font-monospace">{doc.name}</span>
                        <span className="badge bg-success-subtle text-success fs-10">Done</span>
                      </div>
                      <div className="d-flex justify-content-between text-muted fs-11">
                        <span>{doc.type}</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="card-title mb-0">Extraction Inspector & Markdown Entity Viewer</h6>
                {selectedDoc && (
                  <span className="badge bg-dark border border-secondary text-cyan font-monospace fs-11">
                    {selectedDoc.name}
                  </span>
                )}
              </div>
              <div className="card-body p-3 overflow-y-auto" style={{ maxHeight: '420px' }}>
                {selectedDoc ? (
                  <div>
                    <pre className="p-3 rounded bg-dark border border-secondary font-monospace fs-12 text-light mb-3" style={{ whiteSpace: 'pre-wrap' }}>
                      {selectedDoc.extractedMarkdown}
                    </pre>

                    {selectedDoc.extractedJson && (
                      <div>
                        <h6 className="fw-bold fs-12 text-uppercase text-muted mb-2">Structured Entity JSON</h6>
                        <pre className="p-3 rounded bg-dark border border-secondary font-monospace fs-11 text-cyan mb-0">
                          {JSON.stringify(selectedDoc.extractedJson, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-5 text-center text-muted fs-13">
                    Select a document from the left list to view extracted markdown and structured entities.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR: SAVE vs DISCARD */}
        <div className="card border-dark bg-dark">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <span className="text-light fw-bold fs-13 d-block">Project Session Management</span>
              <small className="text-muted">
                Finalizing will move files into <span className="text-cyan font-monospace">ocr_vault/ocrproject_{'{id}'}/Stored/</span>
              </small>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1 px-3"
                disabled={activeSession.documents.length === 0}
                onClick={handleConfirmDiscard}
              >
                <i className="ti ti-trash"></i> Discard & Delete Work
              </button>

              <button
                type="button"
                className="btn btn-gradient-cyan btn-sm fw-bold d-flex align-items-center gap-1.5 px-4 shadow"
                disabled={activeSession.documents.length === 0}
                onClick={handleConfirmSave}
              >
                <i className="ti ti-device-floppy"></i> Save & Finalize Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
