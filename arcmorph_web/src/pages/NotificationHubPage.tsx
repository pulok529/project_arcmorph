import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export interface AppNotification {
  id: string;
  title: string;
  category: 'AI Feedback' | 'Audit Blueprint' | 'Process Alert' | 'System';
  message: string;
  createdAt: string;
  dateStr: string;
  isUnread: boolean;
  score?: number;
  critiqueDetails?: string;
  actionPayload?: string;
}

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif_1',
    title: 'External AI Architectural Feedback Ingested',
    category: 'AI Feedback',
    message: 'Claude 3.7 Sonnet completed deep evaluation of Bornomala Monolith ERP.',
    createdAt: '10 mins ago',
    dateStr: '2026-09-12',
    isUnread: true,
    score: 9.2,
    critiqueDetails: `### Claude 3.7 Sonnet Architectural Assessment Report
- **Overall Modernization Feasibility**: 9.2 / 10
- **Identified Monolith Anti-Patterns**:
  1. Direct database queries inside ASPX code-behind without repository abstraction.
  2. Heavy coupling between AttendanceWorker and StudentAdmission database tables.
- **Recommended Strangler Pattern Strategy**:
  1. Extract AcademicService as independent Go/ASP.NET Core microservice.
  2. Migrate SQL Server identity columns to PostgreSQL BigSerial.
  3. Deploy Outbox Pattern for payment event publishing.`,
    actionPayload: 'academic-service-strangler'
  },
  {
    id: 'notif_2',
    title: 'Tool Audit Blueprint Generated',
    category: 'Audit Blueprint',
    message: 'Architecture Topology Graph generated decoupling plan for StudentAdmission.aspx',
    createdAt: '1 hour ago',
    dateStr: '2026-09-12',
    isUnread: true,
    critiqueDetails: `### Evolutionary Blueprint Log #BP-17890
- **Action**: Microservice Decoupling Generation
- **Target Entity**: StudentAdmission.aspx
- **Fan-Out Dependencies**: tblStudentInfo, tblStudentSubjectMapping, StudentService
- **Target Container**: academic-service (:8081)`
  },
  {
    id: 'notif_3',
    title: 'Unsaved OCR Session Confirmation Pending',
    category: 'Process Alert',
    message: 'Work session in ocrproject_1789214690 requires saving or discarding.',
    createdAt: '2 hours ago',
    dateStr: '2026-09-12',
    isUnread: false,
    critiqueDetails: `### Unsaved OCR Work Diagnostic
- **Session ID**: ocrproject_1789214690
- **Files Staged**: Bangladesh_Passport_A02828950.jpg (Extracted: Name, Number, MRZ)
- **Status**: Temporary staged in temp_uploads/`
  },
  {
    id: 'notif_4',
    title: 'Docker Image arcmorph:web Compiled Successfully',
    category: 'System',
    message: 'Production multi-stage build completed in 25.1s on port 3005.',
    createdAt: 'Yesterday',
    dateStr: '2026-09-11',
    isUnread: false,
    critiqueDetails: `### System Compilation Log
- **Container**: project_arcmorph
- **Status**: Healthy (Port 3005:80)
- **Nginx Engine**: Version 1.31.4 Alpine`
  }
];

export const NotificationHubPage: React.FC = () => {
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);
  const [selectedId, setSelectedId] = useState<string>(INITIAL_NOTIFICATIONS[0].id);

  // Date Filter Modal State
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const navigate = useNavigate();

  const handleFilterApply = () => {
    if (!fromDate && !toDate) {
      setNotifications(INITIAL_NOTIFICATIONS);
      setShowFilterModal(false);
      return;
    }
    const filtered = INITIAL_NOTIFICATIONS.filter(n => {
      if (fromDate && n.dateStr < fromDate) return false;
      if (toDate && n.dateStr > toDate) return false;
      return true;
    });
    setNotifications(filtered);
    if (filtered.length > 0) setSelectedId(filtered[0].id);
    setShowFilterModal(false);
  };

  const handleResetFilter = () => {
    setFromDate('');
    setToDate('');
    setNotifications(INITIAL_NOTIFICATIONS);
    setSelectedId(INITIAL_NOTIFICATIONS[0].id);
    setShowFilterModal(false);
  };

  const handleRunAnalysis = (notif: AppNotification) => {
    Swal.fire({
      title: 'Dispatch Tool Analysis?',
      text: `Initiate multi-agent refactoring based on critique: "${notif.title}"`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Run in Terminal',
      confirmButtonColor: '#00f2fe',
      background: '#0b0f19',
      color: '#f8fafc'
    }).then((res) => {
      if (res.isConfirmed) {
        navigate('/terminal');
      }
    });
  };

  const selectedNotif = notifications.find(n => n.id === selectedId) || notifications[0];

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'AI Feedback': return 'badge bg-cyan-subtle text-cyan border border-cyan-subtle';
      case 'Audit Blueprint': return 'badge bg-info-subtle text-info border border-info-subtle';
      case 'Process Alert': return 'badge bg-warning-subtle text-warning border border-warning-subtle';
      default: return 'badge bg-secondary-subtle text-light border border-secondary';
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Notification & Operational Feedback Hub" category="Operations" />

      <div className="module-content-body">
        {/* Top Filter Bar */}
        <div className="card mb-4 border-dark">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <h6 className="mb-0 fw-bold text-light">Operational Notifications Feed</h6>
              <small className="text-muted">
                Showing {notifications.length} alerts serially (Latest to Earliest)
                {(fromDate || toDate) && ` • Filtered: ${fromDate || 'Any'} to ${toDate || 'Any'}`}
              </small>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-sm btn-dark border-secondary text-light d-flex align-items-center gap-1.5"
                onClick={() => setShowFilterModal(true)}
              >
                <i className="ti ti-calendar-event text-cyan"></i> Filter by Date Range
              </button>

              {(fromDate || toDate) && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning"
                  onClick={handleResetFilter}
                >
                  <i className="ti ti-x"></i> Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Two-Column Split Layout */}
        <div className="row g-4">
          {/* Left Notification List */}
          <div className="col-lg-5">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="card-title mb-0">Chronological Alerts</h6>
                <span className="badge rounded-pill bg-dark text-cyan">{notifications.length}</span>
              </div>
              <div className="card-body p-2 d-flex flex-column gap-2 overflow-y-auto" style={{ maxHeight: '600px' }}>
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-muted fs-13">
                    No notifications match the selected date range.
                  </div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 rounded border cursor-pointer ${selectedId === n.id ? 'border-cyan bg-cyan-subtle' : 'border-dark bg-dark'}`}
                      onClick={() => setSelectedId(n.id)}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-1 gap-2">
                        <span className={`fw-bold fs-13 text-truncate ${selectedId === n.id ? 'text-white' : 'text-light'}`}>
                          {n.title}
                        </span>
                        {n.isUnread && (
                          <span className="badge rounded-pill bg-danger" style={{ fontSize: '9px' }}>New</span>
                        )}
                      </div>
                      <p className="fs-12 text-muted mb-2 text-truncate">{n.message}</p>
                      <div className="d-flex justify-content-between align-items-center fs-11">
                        <span className={getCategoryBadge(n.category)}>{n.category}</span>
                        <span className="text-muted"><i className="ti ti-clock me-1"></i>{n.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Detailed Inspection Window */}
          <div className="col-lg-7">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="card-title mb-0">Alert & Feedback Deep Inspector</h6>
                {selectedNotif && (
                  <span className={getCategoryBadge(selectedNotif.category)}>
                    {selectedNotif.category}
                  </span>
                )}
              </div>
              <div className="card-body p-4 d-flex flex-column justify-content-between overflow-y-auto" style={{ maxHeight: '600px' }}>
                {selectedNotif ? (
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                      <div>
                        <h5 className="fw-bold text-white mb-1">{selectedNotif.title}</h5>
                        <small className="text-muted">
                          Dispatched {selectedNotif.createdAt} • Date: {selectedNotif.dateStr}
                        </small>
                      </div>
                      {selectedNotif.score && (
                        <div className="p-2 rounded bg-black-subtle border border-dark text-center">
                          <span className="text-muted fs-10 d-block text-uppercase">AI Rating</span>
                          <span className="fw-bold fs-16 text-cyan font-monospace">{selectedNotif.score} / 10</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 mb-4 rounded border border-dark bg-black-subtle fs-13 text-light">
                      <i className="ti ti-quote text-cyan me-1"></i>
                      {selectedNotif.message}
                    </div>

                    {selectedNotif.critiqueDetails && (
                      <div className="mb-4">
                        <label className="form-label fs-12 fw-bold text-uppercase text-muted">
                          Structured Report & Operational Audit
                        </label>
                        <pre className="p-3 rounded bg-dark border border-secondary font-monospace fs-12 text-light" style={{ whiteSpace: 'pre-wrap', maxHeight: '280px', overflowY: 'auto' }}>
                          {selectedNotif.critiqueDetails}
                        </pre>
                      </div>
                    )}

                    <div className="pt-3 border-top border-dark d-flex justify-content-between align-items-center">
                      <small className="text-muted">ID: {selectedNotif.id}</small>
                      <button
                        type="button"
                        className="btn btn-gradient-cyan btn-sm fw-bold d-flex align-items-center gap-1.5 shadow"
                        onClick={() => handleRunAnalysis(selectedNotif)}
                      >
                        <i className="ti ti-player-play"></i> Run Tool Analysis from this Feedback
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 text-center text-muted">Select an alert to inspect.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date Range Filter Modal */}
      {showFilterModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border border-cyan bg-dark text-light shadow-lg">
              <div className="modal-header border-bottom border-secondary px-4 py-3">
                <h5 className="modal-title fw-bold text-white d-flex align-items-center gap-2">
                  <i className="ti ti-calendar text-cyan"></i> Filter Notifications by Date Range
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowFilterModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="mb-3">
                  <label className="form-label fs-12 text-light text-uppercase fw-semibold">From Date</label>
                  <input
                    type="date"
                    className="form-control bg-dark border-secondary text-light fs-13"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-12 text-light text-uppercase fw-semibold">To Date</label>
                  <input
                    type="date"
                    className="form-control bg-dark border-secondary text-light fs-13"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer border-top border-secondary px-4 py-3 d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleResetFilter}>
                  Reset All
                </button>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowFilterModal(false)}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-gradient-cyan btn-sm fw-bold" onClick={handleFilterApply}>
                    Apply Date Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
