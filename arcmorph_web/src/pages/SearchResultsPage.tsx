import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';

interface SearchResultItem {
  id: string;
  title: string;
  category: 'Code AST' | 'Database Schema' | 'Blueprint' | 'OCR Vault';
  filePath: string;
  snippet: string;
  relevance: number;
  tags: string[];
  actionLink?: string;
  actionText?: string;
}

interface UIDestination {
  name: string;
  path: string;
  icon: string;
  desc: string;
  category: string;
}

const UI_DESTINATIONS: UIDestination[] = [
  { name: 'Dashboard Overview', path: '/', icon: 'ti-layout-dashboard', desc: 'System modernization overview, health metrics, and active pipelines.', category: 'Core Platform' },
  { name: 'Architecture Graph (2D/3D)', path: '/graph', icon: 'ti-chart-dots-3', desc: 'Interactive 2D/3D visualization of monolith dependencies, database ERD, and state machines.', category: 'Visualization' },
  { name: 'Universal OCR Studio & Vault', path: '/ocr-studio', icon: 'ti-scan', desc: 'Universal document OCR extractor for CVs, Passports, and technical blueprints.', category: 'Intelligence' },
  { name: 'Master Terminal & Subagents', path: '/terminal', icon: 'ti-terminal-2', desc: 'Interactive multi-agent command console with parallel telemetry streams.', category: 'Command Console' },
  { name: 'MorphHub Pipeline Projects', path: '/morph-hub', icon: 'ti-folder-check', desc: 'Repository management, modernization checkpoints, and task history.', category: 'Core Platform' },
  { name: 'Notification Hub & Audit Feed', path: '/notifications', icon: 'ti-bell', desc: 'Real-time operational alerts, Claude 3.7 critiques, and task completion notices.', category: 'Intelligence & Audit' },
  { name: 'Engineer Profile & CV Generator', path: '/profile', icon: 'ti-id-badge-2', desc: 'Engineer portfolio, verified credentials, publication records, and print-ready CV export.', category: 'Identity & CV' },
  { name: 'SuperUser Control Hub', path: '/users', icon: 'ti-shield-lock', desc: 'Role-based access control, user creation, and granular page permissions.', category: 'Administration' },
  { name: 'System, Models & Security Settings', path: '/settings', icon: 'ti-settings', desc: 'AI inference registry, Paces visual style customizer, and inactivity timeouts.', category: 'Administration' },
  { name: 'Cybernetic Lock Screen', path: '/lockscreen', icon: 'ti-lock', desc: 'Session security lock with PIN protection preserving active background tasks.', category: 'Security' }
];

const CORPUS_INDEX: SearchResultItem[] = [
  {
    id: 'res_1',
    title: 'StudentAdmission.aspx.cs (Code-Behind Monolith Hotspot)',
    category: 'Code AST',
    filePath: 'Bornomala.Web/Academic/StudentAdmission.aspx.cs:L142-L188',
    snippet: 'SqlCommand cmd = new SqlCommand("SELECT * FROM tblStudentInfo WHERE RegNo = @RegNo AND IsActive = 1", conn);\ncmd.Parameters.AddWithValue("@RegNo", txtRegNo.Text);\nSqlDataReader rdr = cmd.ExecuteReader();',
    relevance: 98,
    tags: ['ADO.NET', 'SQL Injection Risk', 'Direct DB Query', 'Coupling Hotspot'],
    actionLink: '/graph',
    actionText: 'Inspect in 3D Graph'
  },
  {
    id: 'res_2',
    title: 'tblStudentInfo (MSSQL Table Schema)',
    category: 'Database Schema',
    filePath: 'Database/Schema/dbo.tblStudentInfo.sql:L1-L45',
    snippet: 'CREATE TABLE [dbo].[tblStudentInfo] (\n    [StudentID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,\n    [RegNo] VARCHAR(50) NOT NULL UNIQUE,\n    [StudentName] NVARCHAR(150) NOT NULL,\n    [SectionID] INT FOREIGN KEY REFERENCES tblSection(SectionID)\n);',
    relevance: 94,
    tags: ['MSSQL', 'Identity Primary Key', 'Foreign Key', 'PostgreSQL Candidate'],
    actionLink: '/terminal',
    actionText: 'Morph to EF Core 9'
  },
  {
    id: 'res_3',
    title: 'AcademicService.cs (Strangler Pattern Microservice)',
    category: 'Code AST',
    filePath: 'CleanArchitecture.Core/Services/AcademicService.cs:L34-L78',
    snippet: 'public async Task<StudentDto> GetStudentByRegNoAsync(string regNo, CancellationToken ct) {\n    return await _context.Students.AsNoTracking()\n        .Where(s => s.RegNo == regNo)\n        .Select(s => new StudentDto(s.Id, s.Name, s.SectionId))\n        .FirstOrDefaultAsync(ct);\n}',
    relevance: 91,
    tags: ['Clean Architecture', 'CQRS', 'EF Core 9', 'AsNoTracking'],
    actionLink: '/graph',
    actionText: 'View Topology'
  },
  {
    id: 'res_4',
    title: 'FeesCollection.aspx (Financial Voucher Gateway)',
    category: 'Code AST',
    filePath: 'Bornomala.Web/Accounts/FeesCollection.aspx.cs:L88-L130',
    snippet: 'decimal totalDue = 0;\nforeach (GridViewRow row in gvFees.Rows) {\n    CheckBox chk = (CheckBox)row.FindControl("chkSelect");\n    if (chk.Checked) totalDue += Convert.ToDecimal(row.Cells[3].Text);\n}',
    relevance: 88,
    tags: ['ASPX WebForms', 'GridView Event', 'Financial Ledger'],
    actionLink: '/terminal',
    actionText: 'Spawn Morph Subagent'
  },
  {
    id: 'res_5',
    title: 'tblFeesCollection (MSSQL Ledger Table)',
    category: 'Database Schema',
    filePath: 'Database/Schema/dbo.tblFeesCollection.sql:L12-L38',
    snippet: 'CREATE TABLE [dbo].[tblFeesCollection] (\n    [CollectionID] BIGINT IDENTITY(1,1) PRIMARY KEY,\n    [StudentID] INT NOT NULL,\n    [AmountPaid] DECIMAL(18,2) NOT NULL,\n    [PaymentDate] DATETIME DEFAULT GETDATE()\n);',
    relevance: 86,
    tags: ['MSSQL', 'Money Precision', 'Outbox Event Candidate'],
    actionLink: '/terminal',
    actionText: 'Generate DDL Migration'
  },
  {
    id: 'res_6',
    title: 'Claude 3.7 Monolith Decoupling Architectural Blueprint',
    category: 'Blueprint',
    filePath: 'Blueprints/Strangler_AcademicService_2026.md:L1-L60',
    snippet: 'Strategy: Isolate StudentAdmission from AttendanceWorker via asynchronous RabbitMQ domain events.\n1. Extract StudentAdmission.aspx logic to Minimal API.\n2. Replace direct stored procedures with MediatR queries.',
    relevance: 85,
    tags: ['Strangler Pattern', 'RabbitMQ', 'MediatR', 'Claude 3.7'],
    actionLink: '/notifications',
    actionText: 'Read Blueprint'
  },
  {
    id: 'res_7',
    title: 'Bangladesh Passport OCR Record: A02828950',
    category: 'OCR Vault',
    filePath: 'ocr_vault/ocrproject_1789214690/detail.md',
    snippet: 'Type: P | Country: BGD | Passport No: A02828950 | Name: MD NAIMUL ISLAM\nNationality: BANGLADESHI | DOB: 18 JUN 1999 | Place of Birth: DHAKA',
    relevance: 82,
    tags: ['Passport OCR', 'MRZ TD3', 'Verified Identity'],
    actionLink: '/ocr-studio',
    actionText: 'Open OCR Vault'
  },
  {
    id: 'res_8',
    title: 'AcademicTranscript_Naimul_Islam.pdf Record',
    category: 'OCR Vault',
    filePath: 'ocr_vault/ocrproject_1789216758/detail.md',
    snippet: 'East West University | Bachelor of Science in Computer Science and Engineering\nGraduated: May 2023 | Thesis: Microservice Fault-Tolerance and Resiliency',
    relevance: 79,
    tags: ['Academic Transcript', 'B.Sc. CSE', 'East West University'],
    actionLink: '/profile',
    actionText: 'Inspect Credentials'
  }
];

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setQuery(initialQuery);
    setCurrentPage(1);
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  // Find matching UI Destinations
  const matchedUIDestinations = UI_DESTINATIONS.filter(d => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.desc.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      (q === 'ocr' && d.path === '/ocr-studio') ||
      (q === 'cv' && d.path === '/profile') ||
      (q === 'terminal' && d.path === '/terminal') ||
      (q === 'graph' && d.path === '/graph') ||
      (q === 'settings' && d.path === '/settings') ||
      (q === 'users' && d.path === '/users') ||
      (q === 'lock' && d.path === '/lockscreen')
    );
  });

  // Filter items
  const filteredItems = CORPUS_INDEX.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    if (!matchesCategory) return false;

    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.filePath.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'Code AST': return 'badge bg-info-subtle text-info border border-info-subtle';
      case 'Database Schema': return 'badge bg-warning-subtle text-warning border border-warning-subtle';
      case 'Blueprint': return 'badge bg-cyan-subtle text-cyan border border-cyan-subtle';
      case 'OCR Vault': return 'badge bg-success-subtle text-success border border-success-subtle';
      default: return 'badge bg-secondary-subtle text-body border border-secondary-subtle';
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Deep RAG Project Search" category="Search & Intelligence" />

      <div className="module-content-body">
        {/* Search Bar Card */}
        <div className="card mb-4 border-secondary-subtle shadow-sm">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-body-tertiary border-secondary-subtle text-cyan">
                  <i className="ti ti-search fs-18"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-body border-secondary-subtle text-body fs-14"
                  placeholder="Search code AST, SQL tables, UI features, OCR documents, or architectural blueprints..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <button className="btn btn-gradient-cyan fw-bold px-4 fs-14" type="submit">
                  Execute RAG Query
                </button>
              </div>
            </form>

            {/* Category Filter Tabs */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3 pt-2 border-top border-secondary-subtle">
              <div className="btn-group" role="group">
                {['All', 'Code AST', 'Database Schema', 'Blueprint', 'OCR Vault'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`btn btn-sm ${activeCategory === cat ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-body'} fs-12`}
                    onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <small className="text-muted">
                Found <strong className="text-cyan">{filteredItems.length}</strong> matching indexed entities
              </small>
            </div>
          </div>
        </div>

        {/* Direct UI Destination Banner if Query Matches Platform Feature */}
        {matchedUIDestinations.length > 0 && (
          <div className="card mb-4 border-cyan glow-cyan bg-body-tertiary">
            <div className="card-header border-bottom border-secondary-subtle d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <i className="ti ti-compass text-cyan fs-18"></i>
                <h6 className="card-title mb-0 fw-bold text-body">Direct Platform UI Destination Found</h6>
              </div>
              <span className="badge bg-cyan text-dark fw-bold fs-10">Direct Navigation</span>
            </div>
            <div className="card-body p-3">
              <div className="row g-3">
                {matchedUIDestinations.map((dest, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4">
                    <div className="p-3 border border-secondary-subtle rounded bg-body h-100 d-flex flex-column justify-content-between shadow-sm hover-border-cyan">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="rounded p-1.5 bg-primary-subtle text-primary">
                            <i className={`ti ${dest.icon} fs-18`}></i>
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold text-body fs-13">{dest.name}</h6>
                            <span className="badge bg-secondary-subtle text-muted fs-10">{dest.category}</span>
                          </div>
                        </div>
                        <p className="fs-12 text-muted mb-3">{dest.desc}</p>
                      </div>
                      <Link to={dest.path} className="btn btn-sm btn-outline-cyan fw-bold w-100 d-flex align-items-center justify-content-center gap-1">
                        <span>Open Feature UI</span> <i className="ti ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="d-flex flex-column gap-3 mb-4">
          {paginatedItems.length === 0 ? (
            <div className="card p-5 text-center border-secondary-subtle bg-body">
              <i className="ti ti-search-off fs-40 text-muted mb-2"></i>
              <h5 className="text-body">No Matching Entities Found</h5>
              <p className="text-muted fs-13 mb-3">
                Try searching for terms like <code className="text-cyan">StudentAdmission</code>, <code className="text-cyan">tblFeesCollection</code>, <code className="text-cyan">Passport</code>, or <code className="text-cyan">Clean Architecture</code>.
              </p>
              <div>
                <button className="btn btn-sm btn-outline-cyan" onClick={() => { setQuery(''); setActiveCategory('All'); }}>
                  Clear Query & Filters
                </button>
              </div>
            </div>
          ) : (
            paginatedItems.map((item) => (
              <div key={item.id} className="card border-secondary-subtle shadow-sm hover-border-cyan">
                <div className="card-header py-2.5 px-3 border-bottom border-secondary-subtle bg-body-tertiary d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className={getCategoryBadgeClass(item.category)}>{item.category}</span>
                    <h6 className="card-title mb-0 fw-bold text-body fs-14">{item.title}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-body border border-secondary-subtle text-cyan fs-11 font-monospace">
                      {item.relevance}% Match
                    </span>
                  </div>
                </div>

                <div className="card-body p-3">
                  <div className="d-flex align-items-center gap-1 text-muted fs-11 mb-2 font-monospace">
                    <i className="ti ti-file-code text-cyan"></i>
                    <span>{item.filePath}</span>
                  </div>

                  <pre className="p-2.5 rounded bg-body-secondary border border-secondary-subtle text-body font-monospace fs-12 mb-3 overflow-x-auto" style={{ maxHeight: '160px' }}>
                    <code>{item.snippet}</code>
                  </pre>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-1 flex-wrap">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="badge bg-body-tertiary text-muted border border-secondary-subtle fs-10 font-monospace">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {item.actionLink && (
                      <Link
                        to={item.actionLink}
                        className="btn btn-sm btn-outline-cyan fs-11 fw-bold d-flex align-items-center gap-1"
                      >
                        <span>{item.actionText || 'Inspect Entity'}</span>
                        <i className="ti ti-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center border-top border-secondary-subtle pt-3">
            <small className="text-muted fs-12">
              Showing page <strong className="text-body">{currentPage}</strong> of <strong className="text-body">{totalPages}</strong>
            </small>

            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              >
                &larr; Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`btn btn-sm ${currentPage === i + 1 ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-body'}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
