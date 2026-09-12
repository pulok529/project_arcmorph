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
    tags: ['BSc CSE', 'Academic Transcript', 'East West University'],
    actionLink: '/profile',
    actionText: 'View in Profile'
  }
];

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== query) {
      setQuery(q);
      setCurrentPage(1);
    }
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
    setCurrentPage(1);
  };

  const filteredItems = CORPUS_INDEX.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) {
      return false;
    }
    if (!query.trim()) return true;
    const cleanQ = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(cleanQ) ||
      item.snippet.toLowerCase().includes(cleanQ) ||
      item.filePath.toLowerCase().includes(cleanQ) ||
      item.tags.some(t => t.toLowerCase().includes(cleanQ))
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'Code AST': return 'badge bg-info-subtle text-info border border-info-subtle';
      case 'Database Schema': return 'badge bg-warning-subtle text-warning border border-warning-subtle';
      case 'Blueprint': return 'badge bg-cyan-subtle text-cyan border border-cyan-subtle';
      case 'OCR Vault': return 'badge bg-success-subtle text-success border border-success-subtle';
      default: return 'badge bg-secondary-subtle text-light border border-secondary';
    }
  };

  return (
    <div className="page-wrapper-module">
      <PageHeader title="Deep RAG Project Search" category="Search & Intelligence" />

      <div className="module-content-body">
        {/* Search Bar Card */}
        <div className="card mb-4 border-dark shadow-sm">
          <div className="card-body p-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-dark border-secondary text-cyan">
                  <i className="ti ti-search fs-18"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-dark border-secondary text-light fs-14"
                  placeholder="Search code AST, SQL tables, Roslyn symbols, OCR documents, or architectural blueprints..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <button className="btn btn-gradient-cyan fw-bold px-4 fs-14" type="submit">
                  Execute RAG Query
                </button>
              </div>
            </form>

            {/* Category Filter Tabs */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3 pt-2 border-top border-dark">
              <div className="btn-group" role="group">
                {['All', 'Code AST', 'Database Schema', 'Blueprint', 'OCR Vault'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`btn btn-sm ${activeCategory === cat ? 'btn-cyan text-dark fw-bold' : 'btn-outline-secondary text-light'} fs-12`}
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

        {/* Results List */}
        <div className="d-flex flex-column gap-3 mb-4">
          {paginatedItems.length === 0 ? (
            <div className="card p-5 text-center border-dark bg-dark">
              <i className="ti ti-search-off fs-40 text-muted mb-2"></i>
              <h5 className="text-light">No Matching Entities Found</h5>
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
              <div key={item.id} className="card border-dark shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-2">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className={getCategoryBadge(item.category)}>{item.category}</span>
                        <h6 className="mb-0 fw-bold text-white fs-15">{item.title}</h6>
                      </div>
                      <div className="text-muted font-monospace fs-11">
                        <i className="ti ti-file-code me-1 text-cyan"></i>
                        {item.filePath}
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <div className="text-end">
                        <span className="text-muted fs-10 d-block">Relevance</span>
                        <span className="fw-bold text-success font-monospace fs-12">{item.relevance}%</span>
                      </div>
                      {item.actionLink && (
                        <Link
                          to={item.actionLink}
                          className="btn btn-sm btn-outline-info d-flex align-items-center gap-1 fs-12"
                        >
                          <i className="ti ti-arrow-right"></i> {item.actionText || 'Inspect'}
                        </Link>
                      )}
                    </div>
                  </div>

                  <pre className="p-3 rounded bg-dark border border-secondary font-monospace fs-12 text-light mb-3" style={{ whiteSpace: 'pre-wrap' }}>
                    {item.snippet}
                  </pre>

                  <div className="d-flex flex-wrap gap-1 align-items-center">
                    <span className="text-muted fs-11 me-1"><i className="ti ti-tag me-1"></i> Tags:</span>
                    {item.tags.map(t => (
                      <span key={t} className="badge bg-dark border border-secondary text-info fs-10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Card */}
        {totalPages > 1 && (
          <div className="card border-dark">
            <div className="card-body p-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <span className="text-muted fs-12">
                Showing Page <strong className="text-light">{currentPage}</strong> of <strong className="text-light">{totalPages}</strong>
              </span>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-dark border-secondary text-light"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                  <i className="ti ti-chevron-left me-1"></i> Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    type="button"
                    className={`btn btn-sm ${p === currentPage ? 'btn-cyan text-dark fw-bold' : 'btn-dark border-secondary text-light'}`}
                    onClick={() => setCurrentPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  className="btn btn-sm btn-dark border-secondary text-light"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                >
                  Next <i className="ti ti-chevron-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
