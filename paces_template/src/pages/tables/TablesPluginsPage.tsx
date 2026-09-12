import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface TableRow {
  id: string;
  name: string;
  email: string;
  role: string;
  spent: string;
  status: 'Verified' | 'Pending' | 'Blocked';
}

const INITIAL_ROWS: TableRow[] = [
  { id: '1', name: 'David Dev', email: 'david@example.com', role: 'Admin', spent: '$4,200.00', status: 'Verified' },
  { id: '2', name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Editor', spent: '$1,850.00', status: 'Verified' },
  { id: '3', name: 'Alex Morgan', email: 'alex@example.com', role: 'Viewer', spent: '$940.00', status: 'Pending' },
  { id: '4', name: 'Michael Scott', email: 'michael@dunder.com', role: 'Manager', spent: '$5,120.00', status: 'Verified' }
];

export const TablesPluginsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredRows = INITIAL_ROWS.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? filteredRows.map(r => r.id) : []);
  };

  const toggleRow = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="mb-0">Interactive Tables & Plugins</h4>
        </div>
      </div>

      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title>Data Table</Card.Title>
          <div className="d-flex gap-2">
            <input 
              type="text" 
              className="form-control form-control-sm" 
              placeholder="Search customers..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: 180 }} 
            />
            <Button variant="outline-secondary" size="sm"><i className="ti ti-download me-1"></i> Export</Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th style={{ width: 40 }}>
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      checked={filteredRows.length > 0 && selectedIds.length === filteredRows.length}
                      onChange={e => toggleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map(row => (
                  <tr key={row.id}>
                    <td>
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={selectedIds.includes(row.id)}
                        onChange={() => toggleRow(row.id)}
                      />
                    </td>
                    <td><strong>{row.name}</strong></td>
                    <td>{row.email}</td>
                    <td>{row.role}</td>
                    <td>{row.spent}</td>
                    <td>
                      <Badge variant={row.status === 'Verified' ? 'soft-success' : 'soft-warning'}>
                        {row.status}
                      </Badge>
                    </td>
                    <td className="text-end">
                      <Button variant="light" size="sm" icon><i className="ti ti-edit"></i></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <span className="text-muted fs-sm">Showing 1 to {filteredRows.length} of {filteredRows.length} entries</span>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled"><a className="page-link" href="#prev">Prev</a></li>
            <li className="page-item active"><a className="page-link" href="#1">1</a></li>
            <li className="page-item disabled"><a className="page-link" href="#next">Next</a></li>
          </ul>
        </Card.Footer>
      </Card>
    </>
  );
};
