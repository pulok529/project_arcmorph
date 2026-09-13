import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';
import { ReactDataTable } from '../../components/common/ReactDataTable';

interface CompanyRecord {
  id: number;
  company: string;
  symbol: string;
  price: string;
  change: string;
  volume: string;
  marketCap: string;
  rating: string;
  status: string;
}

const initialCompanies: CompanyRecord[] = [
  { id: 1, company: 'Apple Inc.', symbol: 'AAPL', price: '$2109.53', change: '-0.42%', volume: '48,374,838', marketCap: '$53.59B', rating: '4.7 ★', status: 'Bearish' },
  { id: 2, company: 'Microsoft Corp.', symbol: 'MSFT', price: '$450.98', change: '-2.04%', volume: '26,604,335', marketCap: '$927.77B', rating: '3.8 ★', status: 'Bearish' },
  { id: 3, company: 'Alphabet Inc.', symbol: 'GOOGL', price: '$2803.77', change: '+0.68%', volume: '22,545,332', marketCap: '$1.88T', rating: '4.6 ★', status: 'Bullish' },
  { id: 4, company: 'Amazon.com Inc.', symbol: 'AMZN', price: '$3470.79', change: '+1.34%', volume: '32,548,923', marketCap: '$1.75T', rating: '4.3 ★', status: 'Bullish' },
  { id: 5, company: 'Meta Platforms', symbol: 'META', price: '$395.68', change: '-0.76%', volume: '21,134,438', marketCap: '$1.06T', rating: '4.2 ★', status: 'Bearish' }
];

const companyColumns = [
  { header: 'Company', accessor: 'company', sortable: true },
  { header: 'Symbol', accessor: 'symbol', sortable: true },
  { header: 'Price', accessor: 'price', sortable: true },
  {
    header: 'Change',
    accessor: 'change',
    sortable: true,
    render: (val: string) => (
      <span className={val.startsWith('+') ? 'text-success fw-semibold' : 'text-danger fw-semibold'}>
        {val}
      </span>
    )
  },
  { header: 'Volume', accessor: 'volume', sortable: true },
  { header: 'Market Cap', accessor: 'marketCap', sortable: true },
  { header: 'Rating', accessor: 'rating', sortable: true },
  {
    header: 'Status',
    accessor: 'status',
    sortable: true,
    render: (val: string) => (
      <span className={`badge badge-label badge-soft-${val === 'Bullish' ? 'success' : 'danger'}`}>
        {val}
      </span>
    )
  }
];

export const TablesDatatablesRowsAddPage: React.FC = () => {
  const [data, setData] = useState<CompanyRecord[]>(initialCompanies);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCompany, setNewCompany] = useState({
    company: '',
    symbol: '',
    price: '$100.00',
    change: '+1.50%',
    volume: '5,000,000',
    marketCap: '$50.0B',
    rating: '4.5 ★',
    status: 'Bullish'
  });

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.company.trim() || !newCompany.symbol.trim()) return;

    const newRecord: CompanyRecord = {
      id: Date.now(),
      ...newCompany
    };

    setData([newRecord, ...data]);
    setNewCompany({
      company: '',
      symbol: '',
      price: '$100.00',
      change: '+1.50%',
      volume: '5,000,000',
      marketCap: '$50.0B',
      rating: '4.5 ★',
      status: 'Bullish'
    });
    setShowAddForm(false);
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Add Rows DataTables" category="Tables" />

      <div className="module-content-body">
        <div className="row">
          <div className="col-12">
            <Card
              title="Add Rows Dynamically"
              badge={
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  <i className={`ti ${showAddForm ? 'ti-x' : 'ti-plus'} me-1`}></i>
                  {showAddForm ? 'Cancel' : 'Add New Row'}
                </button>
              }
            >
              {showAddForm && (
                <div className="p-3 mb-4 bg-light border rounded">
                  <h6 className="fw-bold mb-3 text-primary">Add New Stock / Company Record</h6>
                  <form onSubmit={handleAddRow} className="row g-2">
                    <div className="col-md-3">
                      <label className="form-label fs-xs">Company Name</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="e.g. Netflix Inc."
                        value={newCompany.company}
                        onChange={(e) => setNewCompany({ ...newCompany, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label fs-xs">Symbol</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="e.g. NFLX"
                        value={newCompany.symbol}
                        onChange={(e) => setNewCompany({ ...newCompany, symbol: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label fs-xs">Price</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={newCompany.price}
                        onChange={(e) => setNewCompany({ ...newCompany, price: e.target.value })}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label fs-xs">Change</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={newCompany.change}
                        onChange={(e) => setNewCompany({ ...newCompany, change: e.target.value })}
                      />
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                      <button type="submit" className="btn btn-sm btn-success w-100">
                        <i className="ti ti-check me-1"></i> Save to Table
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <ReactDataTable
                columns={companyColumns}
                data={data}
                showSearch={true}
                showPageLength={true}
                showPagination={true}
                showInfo={true}
                showExport={false}
                defaultPageSize={10}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablesDatatablesRowsAddPage;
