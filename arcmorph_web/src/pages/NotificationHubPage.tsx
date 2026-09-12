import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';
import { useNotifications, AppNotification } from '../context/NotificationContext';
import Swal from 'sweetalert2';

export const NotificationHubPage: React.FC = () => {
  const { notifications, markAsRead, markAllAsRead, deleteNotification, triggerSampleNotification } = useNotifications();
  const [selectedId, setSelectedId] = useState<string>('');

  // Date Filter Modal State
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const navigate = useNavigate();

  const filteredNotifications = notifications.filter(n => {
    if (fromDate && n.dateStr < fromDate) return false;
    if (toDate && n.dateStr > toDate) return false;
    return true;
  });

  const activeId = selectedId || (filteredNotifications[0]?.id ?? '');
  const selectedNotif = filteredNotifications.find(n => n.id === activeId) || filteredNotifications[0];

  const handleSelectNotif = (notif: AppNotification) => {
    setSelectedId(notif.id);
    if (notif.isUnread) {
      markAsRead(notif.id);
    }
  };

  const handleResetFilter = () => {
    setFromDate('');
    setToDate('');
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

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'AI Feedback': return 'badge bg-cyan-subtle text-cyan border border-cyan-subtle';
      case 'Audit Blueprint': return 'badge bg-info-subtle text-info border border-info-subtle';
      case 'Process Alert': return 'badge bg-warning-subtle text-warning border border-warning-subtle';
      default: return 'badge bg-secondary-subtle text-body border border-secondary';
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Notification & Operational Feedback Hub" category="Operations" />

      <div className="module-content-body">
        {/* Top Filter Bar */}
        <div className="card mb-4 border-secondary-subtle">
          <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <h6 className="mb-0 fw-bold text-body">Operational Notifications Feed</h6>
              <small className="text-muted">
                Showing {filteredNotifications.length} alerts serially (Latest to Earliest)
                {(fromDate || toDate) && ` • Filtered: ${fromDate || 'Any'} to ${toDate || 'Any'}`}
              </small>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-sm btn-outline-cyan d-flex align-items-center gap-1.5"
                onClick={triggerSampleNotification}
                title="Dispatches an audible system alert with soundwave pulse"
              >
                <i className="ti ti-volume text-cyan"></i> Test Audible Alert
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1.5"
                onClick={() => setShowFilterModal(true)}
              >
                <i className="ti ti-calendar-event text-cyan"></i> Filter by Date Range
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary text-body"
                onClick={markAllAsRead}
                title="Mark all as read"
              >
                <i className="ti ti-checks me-1"></i> Mark All Read
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

        {/* Master-Detail Split Pane */}
        <div className="row g-4">
          {/* LEFT: Notification List */}
          <div className="col-lg-5">
            <div className="card border-secondary-subtle overflow-hidden">
              <div className="card-header border-bottom border-secondary-subtle d-flex justify-content-between align-items-center py-2.5">
                <span className="fw-semibold fs-13 text-body">Incoming Stream</span>
                <span className="badge bg-secondary-subtle text-body fs-11">{filteredNotifications.length} Messages</span>
              </div>
              <div className="list-group list-group-flush" style={{ maxHeight: '640px', overflowY: 'auto' }}>
                {filteredNotifications.length === 0 ? (
                  <div className="p-4 text-center text-muted fs-13">
                    No notifications match your current date filter.
                  </div>
                ) : (
                  filteredNotifications.map((notif) => {
                    const isSelected = notif.id === activeId;
                    return (
                      <button
                        key={notif.id}
                        type="button"
                        className={`list-group-item list-group-item-action text-start p-3 border-bottom border-secondary-subtle transition-all ${
                          isSelected
                            ? 'bg-body-secondary border-start border-cyan border-3'
                            : 'bg-transparent'
                        }`}
                        onClick={() => handleSelectNotif(notif)}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className={getCategoryBadge(notif.category)} style={{ fontSize: '10px' }}>
                            {notif.category}
                          </span>
                          <span className="text-muted fs-11">{notif.createdAt}</span>
                        </div>
                        <h6 className={`mb-1 fs-13 ${isSelected ? 'fw-bold text-cyan' : 'text-body fw-semibold'}`}>
                          {notif.isUnread && <span className="p-1 me-1.5 bg-danger rounded-circle d-inline-block" style={{ width: 6, height: 6 }}></span>}
                          {notif.title}
                        </h6>
                        <p className="mb-0 text-muted fs-12 text-truncate" style={{ maxWidth: '380px' }}>
                          {notif.message}
                        </p>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Detail View */}
          <div className="col-lg-7">
            {selectedNotif ? (
              <div className="card border-secondary-subtle">
                <div className="card-header border-bottom border-secondary-subtle d-flex justify-content-between align-items-center py-3">
                  <div>
                    <span className={getCategoryBadge(selectedNotif.category)}>
                      {selectedNotif.category}
                    </span>
                    <span className="text-muted fs-12 ms-2">{selectedNotif.dateStr} • {selectedNotif.createdAt}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-outline-danger"
                      onClick={() => deleteNotification(selectedNotif.id)}
                      title="Delete Notification"
                    >
                      <i className="ti ti-trash"></i>
                    </button>
                    {selectedNotif.score !== undefined && (
                      <span className="badge bg-success-subtle text-success border border-success fs-12 px-2 py-1">
                        Feasibility: {selectedNotif.score} / 10
                      </span>
                    )}
                  </div>
                </div>

                <div className="card-body p-4">
                  <h4 className="fw-bold text-body mb-3">{selectedNotif.title}</h4>
                  <div className="p-3 rounded bg-body-tertiary border border-secondary-subtle mb-4">
                    <p className="mb-0 fs-13 text-body lh-base">{selectedNotif.message}</p>
                  </div>

                  {selectedNotif.critiqueDetails && (
                    <div className="mb-4">
                      <h6 className="fw-bold text-cyan fs-13 text-uppercase mb-2">
                        <i className="ti ti-report-analytics me-1"></i> Technical Critique & Blueprint Details
                      </h6>
                      <pre
                        className="p-3 rounded border border-secondary-subtle fs-12 text-body"
                        style={{
                          backgroundColor: 'var(--bs-tertiary-bg, #0b0f19)',
                          whiteSpace: 'pre-wrap',
                          lineHeight: '1.6',
                          fontFamily: 'Consolas, Monaco, "Courier New", monospace'
                        }}
                      >
                        {selectedNotif.critiqueDetails}
                      </pre>
                    </div>
                  )}

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary-subtle">
                    <span className="text-muted fs-11 font-monospace">UUID: {selectedNotif.id}</span>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-cyan"
                        onClick={() => handleRunAnalysis(selectedNotif)}
                      >
                        <i className="ti ti-terminal me-1"></i> Send to Master Terminal
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-gradient-cyan"
                        onClick={() => navigate('/morph-hub')}
                      >
                        <i className="ti ti-arrow-right me-1"></i> Open in MorphHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card border-secondary-subtle p-5 text-center text-muted">
                <i className="ti ti-bell-off fs-40 mb-2"></i>
                <h6>No notification selected</h6>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Date Range Modal */}
      {showFilterModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(5, 8, 17, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border border-cyan bg-body text-body shadow-2xl">
              <div className="modal-header border-bottom border-secondary-subtle px-4 py-3">
                <h5 className="modal-title fw-bold text-body fs-14">Filter Notifications by Date Range</h5>
                <button type="button" className="btn-close" onClick={() => setShowFilterModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="mb-3">
                  <label className="form-label fs-12 text-muted fw-semibold">From Date</label>
                  <input
                    type="date"
                    className="form-control bg-body border-secondary-subtle text-body"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-12 text-muted fw-semibold">To Date</label>
                  <input
                    type="date"
                    className="form-control bg-body border-secondary-subtle text-body"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer border-top border-secondary-subtle px-4 py-3 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning"
                  onClick={handleResetFilter}
                >
                  Reset
                </button>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() => setShowFilterModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-gradient-cyan fw-bold"
                    onClick={() => setShowFilterModal(false)}
                  >
                    Apply Filter
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

export default NotificationHubPage;
