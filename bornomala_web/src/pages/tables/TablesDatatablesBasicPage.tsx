import React from 'react';
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

const mockCompanies: CompanyRecord[] = [
  { id: 1, company: 'Apple Inc.', symbol: 'AAPL', price: '$2109.53', change: '-0.42%', volume: '48,374,838', marketCap: '$53.59B', rating: '4.7 ★', status: 'Bearish' },
  { id: 2, company: 'Microsoft Corp.', symbol: 'MSFT', price: '$450.98', change: '-2.04%', volume: '26,604,335', marketCap: '$927.77B', rating: '3.8 ★', status: 'Bearish' },
  { id: 3, company: 'Alphabet Inc.', symbol: 'GOOGL', price: '$2803.77', change: '+0.68%', volume: '22,545,332', marketCap: '$1.88T', rating: '4.6 ★', status: 'Bullish' },
  { id: 4, company: 'Amazon.com Inc.', symbol: 'AMZN', price: '$3470.79', change: '+1.34%', volume: '32,548,923', marketCap: '$1.75T', rating: '4.3 ★', status: 'Bullish' },
  { id: 5, company: 'Meta Platforms', symbol: 'META', price: '$395.68', change: '-0.76%', volume: '21,134,438', marketCap: '$1.06T', rating: '4.2 ★', status: 'Bearish' },
  { id: 6, company: 'Tesla Inc.', symbol: 'TSLA', price: '$254.20', change: '+3.15%', volume: '65,231,100', marketCap: '$812.4B', rating: '4.5 ★', status: 'Bullish' },
  { id: 7, company: 'NVIDIA Corp.', symbol: 'NVDA', price: '$128.50', change: '+4.22%', volume: '88,940,210', marketCap: '$3.15T', rating: '4.9 ★', status: 'Bullish' },
  { id: 8, company: 'Berkshire Hathaway', symbol: 'BRK.B', price: '$442.10', change: '+0.12%', volume: '3,450,110', marketCap: '$970.2B', rating: '4.1 ★', status: 'Bullish' },
  { id: 9, company: 'JPMorgan Chase', symbol: 'JPM', price: '$215.30', change: '-1.10%', volume: '12,304,150', marketCap: '$615.8B', rating: '4.0 ★', status: 'Bearish' },
  { id: 10, company: 'Visa Inc.', symbol: 'V', price: '$275.40', change: '+0.45%', volume: '8,450,220', marketCap: '$560.1B', rating: '4.4 ★', status: 'Bullish' },
  { id: 11, company: 'Walmart Inc.', symbol: 'WMT', price: '$68.90', change: '+0.80%', volume: '18,220,400', marketCap: '$554.3B', rating: '4.3 ★', status: 'Bullish' },
  { id: 12, company: 'Mastercard Inc.', symbol: 'MA', price: '$458.20', change: '+0.25%', volume: '4,120,500', marketCap: '$428.6B', rating: '4.2 ★', status: 'Bullish' },
  { id: 13, company: 'Procter & Gamble', symbol: 'PG', price: '$168.40', change: '-0.30%', volume: '6,780,200', marketCap: '$395.2B', rating: '3.9 ★', status: 'Bearish' },
  { id: 14, company: 'Johnson & Johnson', symbol: 'JNJ', price: '$162.10', change: '+0.15%', volume: '7,450,100', marketCap: '$389.5B', rating: '3.8 ★', status: 'Bullish' },
  { id: 15, company: 'Home Depot', symbol: 'HD', price: '$365.80', change: '-0.95%', volume: '5,670,300', marketCap: '$362.4B', rating: '4.1 ★', status: 'Bearish' }
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

export const TablesDatatablesBasicPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Basic DataTables" category="Tables" />

      <div className="module-content-body">
        <div className="row g-4">
          {/* Card 1: Basic DataTable */}
          <div className="col-12">
            <Card 
              title="Basic DataTable" 
              headerAction={
                <a href="https://datatables.net/examples/basic_init/zero_configuration.html" target="_blank" rel="noreferrer" className="icon-link icon-link-hover link-primary fw-semibold fs-sm">
                  View Docs <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
                </a>
              }
            >
              <div className="alert alert-warning alert-dismissible fade show mb-4" role="alert">
                <strong>Note:</strong> Pure React DataTable engine matching original jQuery behavior with live search, pagination, and sorting.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <ReactDataTable
                columns={companyColumns}
                data={mockCompanies}
                showSearch={true}
                showPageLength={true}
                showPagination={true}
                showInfo={true}
                showExport={false}
                defaultPageSize={10}
              />
            </Card>
          </div>

          {/* Card 2: Complex Header */}
          <div className="col-12">
            <Card 
              title="Complex Header" 
              headerAction={
                <a href="https://datatables.net/examples/advanced_init/complex_header.html" target="_blank" rel="noreferrer" className="icon-link icon-link-hover link-primary fw-semibold fs-sm">
                  View Docs <i className="ti ti-arrow-right bi align-middle fs-lg"></i>
                </a>
              }
            >
              <div className="table-responsive">
                <table className="table table-bordered dt-responsive align-middle mb-0">
                  <thead className="thead-sm text-uppercase fs-xxs">
                    <tr className="bg-light">
                      <th colSpan={2} className="text-center border-bottom">Company Info</th>
                      <th colSpan={2} className="text-center border-bottom">Rate</th>
                      <th colSpan={2} className="text-center border-bottom">More</th>
                      <th colSpan={2} className="text-center border-bottom">Other</th>
                    </tr>
                    <tr>
                      <th>Company</th>
                      <th>Symbol</th>
                      <th>Price</th>
                      <th>Change</th>
                      <th>Volume</th>
                      <th>Market Cap</th>
                      <th>Rating</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCompanies.slice(0, 10).map((row) => (
                      <tr key={row.id}>
                        <td className="fw-medium">{row.company}</td>
                        <td><span className="badge bg-light text-dark">{row.symbol}</span></td>
                        <td>{row.price}</td>
                        <td>
                          <span className={row.change.startsWith('+') ? 'text-success fw-semibold' : 'text-danger fw-semibold'}>
                            {row.change}
                          </span>
                        </td>
                        <td>{row.volume}</td>
                        <td>{row.marketCap}</td>
                        <td>{row.rating}</td>
                        <td>
                          <span className={`badge badge-label badge-soft-${row.status === 'Bullish' ? 'success' : 'danger'}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TablesDatatablesBasicPage;
