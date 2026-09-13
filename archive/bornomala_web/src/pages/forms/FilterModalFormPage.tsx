import { PageHeader } from '../../components/common/PageHeader';
import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';

export const FilterModalFormPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <PageHeader title="Filter & Modal Forms" category="Forms" />
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Filters, Modals & Side Drawers</h4>
            <div className="d-flex gap-2">
              <Button variant="outline-primary" size="sm" onClick={() => setIsDrawerOpen(true)}>
                <i className="ti ti-adjustments-horizontal me-1"></i> Filter Drawer
              </Button>
              <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
                <i className="ti ti-plus me-1"></i> Create Item (Modal)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <Card className="mb-3">
        <Card.Body>
          <div className="row g-2 align-items-center">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text"><i className="ti ti-search"></i></span>
                <input type="text" className="form-control" placeholder="Search by name, email..." />
              </div>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design & UI</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="col-md-2 d-flex gap-1">
              <Button variant="primary" className="w-100"><i className="ti ti-filter me-1"></i> Filter</Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Records Table */}
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>Team Members</Card.Title>
          <Badge variant="soft-primary">Showing 2 Members</Badge>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Member</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img src="/assets/images/users/user-1.jpg" className="avatar-xs rounded-circle" alt="user" />
                      <span className="fw-semibold">David Dev</span>
                    </div>
                  </td>
                  <td>Lead Architect</td>
                  <td>Engineering</td>
                  <td><Badge variant="soft-success">Active</Badge></td>
                  <td className="text-end">
                    <Button variant="light" size="sm" icon onClick={() => setIsModalOpen(true)}><i className="ti ti-edit"></i></Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img src="/assets/images/users/user-2.jpg" className="avatar-xs rounded-circle" alt="user" />
                      <span className="fw-semibold">Sarah Jenkins</span>
                    </div>
                  </td>
                  <td>Product Manager</td>
                  <td>Product</td>
                  <td><Badge variant="soft-success">Active</Badge></td>
                  <td className="text-end">
                    <Button variant="light" size="sm" icon onClick={() => setIsModalOpen(true)}><i className="ti ti-edit"></i></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>

      {/* Modal Popup */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create / Edit Team Member"
        footer={(
          <>
            <Button variant="light" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => { alert('Saved!'); setIsModalOpen(false); }}>Save Member</Button>
          </>
        )}
      >
        <FormInput label="Full Name" placeholder="e.g. Jonathan Smith" required />
        <FormInput label="Email Address" type="email" placeholder="jonathan@company.com" required />
        <FormSelect
          label="Department"
          options={[
            { label: 'Engineering', value: 'engineering' },
            { label: 'Design & Creative', value: 'design' },
            { label: 'Marketing', value: 'marketing' }
          ]}
        />
      </Modal>

      {/* Side Drawer Offcanvas */}
      {isDrawerOpen && (
        <>
          <div className="offcanvas offcanvas-end show d-block" tabIndex={-1} style={{ visibility: 'visible', zIndex: 1055 }}>
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title"><i className="ti ti-adjustments-horizontal me-1"></i> Advanced Filters</h5>
              <button type="button" className="btn-close" onClick={() => setIsDrawerOpen(false)}></button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-3">
                <label className="form-label fw-bold">Salary Range ($)</label>
                <div className="d-flex gap-2">
                  <input type="number" className="form-control" placeholder="Min" />
                  <input type="number" className="form-control" placeholder="Max" />
                </div>
              </div>
              <Button variant="primary" className="w-100 mt-3" onClick={() => setIsDrawerOpen(false)}>Apply Filter</Button>
            </div>
          </div>
          <div className="offcanvas-backdrop fade show" onClick={() => setIsDrawerOpen(false)} style={{ zIndex: 1050 }}></div>
        </>
      )}
    </>
  );
};
