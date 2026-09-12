import React, { useState, useMemo } from 'react';

export interface Column<T = any> {
  header: string;
  accessor: string | ((row: T) => any);
  sortable?: boolean;
  className?: string;
  hidden?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface ReactDataTableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  showSearch?: boolean;
  showPageLength?: boolean;
  showPagination?: boolean;
  showInfo?: boolean;
  showExport?: boolean;
  exportFormat?: 'buttons' | 'dropdown';
  showColumnVisibility?: boolean;
  selectable?: boolean;
  selectMode?: 'checkbox' | 'rowClick' | 'both';
  expandable?: boolean;
  renderExpandedRow?: (row: T) => React.ReactNode;
  onSelectionChange?: (selectedRows: T[]) => void;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  tableClassName?: string;
}

export const ReactDataTable = <T extends Record<string, any>>({
  columns: initialColumns,
  data,
  showSearch = true,
  showPageLength = true,
  showPagination = true,
  showInfo = true,
  showExport = false,
  exportFormat = 'buttons',
  showColumnVisibility = false,
  selectable = false,
  selectMode = 'both',
  expandable = false,
  renderExpandedRow,
  onSelectionChange,
  defaultPageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  tableClassName = 'table table-striped dt-responsive align-middle mb-0'
}: ReactDataTableProps<T>) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState<Record<string, boolean>>({});
  const [selectedRowIds, setSelectedRowIds] = useState<Set<number>>(new Set());
  const [expandedRowIds, setExpandedRowIds] = useState<Set<number>>(new Set());

  // Visible columns
  const activeColumns = useMemo(() => {
    return initialColumns.filter(c => !hiddenColumns[c.header]);
  }, [initialColumns, hiddenColumns]);

  const toggleColumnVisibility = (header: string) => {
    setHiddenColumns(prev => ({
      ...prev,
      [header]: !prev[header]
    }));
  };

  // 1. Filter
  const filteredData = useMemo(() => {
    let res = data;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      res = res.filter((row) => {
        return Object.values(row).some((val) => {
          if (val == null) return false;
          return String(val).toLowerCase().includes(term);
        });
      });
    }

    return res;
  }, [data, searchTerm]);

  // 2. Sort
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      let valA = typeof a[sortKey] === 'function' ? a[sortKey]() : a[sortKey];
      let valB = typeof b[sortKey] === 'function' ? b[sortKey]() : b[sortKey];

      if (valA == null) valA = '';
      if (valB == null) valB = '';

      const numA = Number(String(valA).replace(/[^0-9.-]+/g, ''));
      const numB = Number(String(valB).replace(/[^0-9.-]+/g, ''));
      if (!isNaN(numA) && !isNaN(numB) && String(valA).match(/[0-9]/)) {
        return sortDirection === 'asc' ? numA - numB : numB - numA;
      }

      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();
      if (strA < strB) return sortDirection === 'asc' ? -1 : 1;
      if (strA > strB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortDirection]);

  // 3. Paginate
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (colAccessor: string | ((row: T) => any)) => {
    const key = typeof colAccessor === 'string' ? colAccessor : null;
    if (!key) return;
    if (sortKey === key) {
      if (sortDirection === 'asc') setSortDirection('desc');
      else {
        setSortKey(null);
        setSortDirection('asc');
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  // Row selection
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = new Set<number>(paginatedData.map((_, i) => i));
      setSelectedRowIds(allIds);
      if (onSelectionChange) onSelectionChange(paginatedData);
    } else {
      setSelectedRowIds(new Set());
      if (onSelectionChange) onSelectionChange([]);
    }
  };

  const handleSelectRow = (index: number) => {
    if (!selectable) return;
    const next = new Set(selectedRowIds);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setSelectedRowIds(next);
    if (onSelectionChange) {
      const selected = paginatedData.filter((_, i) => next.has(i));
      onSelectionChange(selected);
    }
  };

  // Child row expansion
  const toggleRowExpansion = (index: number) => {
    const next = new Set(expandedRowIds);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setExpandedRowIds(next);
  };

  // Export handlers
  const handleCopy = () => {
    const headers = activeColumns.map(c => c.header).join('\t');
    const rows = sortedData.map(row => {
      return activeColumns.map(c => {
        const val = typeof c.accessor === 'function' ? c.accessor(row) : row[c.accessor];
        return val != null ? String(val) : '';
      }).join('\t');
    }).join('\n');

    navigator.clipboard.writeText(`${headers}\n${rows}`);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleExportCSV = () => {
    const headers = activeColumns.map(c => `"${c.header}"`).join(',');
    const rows = sortedData.map(row => {
      return activeColumns.map(c => {
        const val = typeof c.accessor === 'function' ? c.accessor(row) : row[c.accessor];
        return `"${String(val || '').replace(/"/g, '""')}"`;
      }).join(',');
    }).join('\n');

    const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `table_export_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const startEntry = sortedData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, sortedData.length);

  const showCheckboxCol = selectable && (selectMode === 'checkbox' || selectMode === 'both');

  return (
    <div className="dataTables_wrapper dt-bootstrap5 no-footer">
      {/* Column Visibility Bar */}
      {showColumnVisibility && (
        <div className="mb-3 d-flex align-items-center flex-wrap gap-1">
          <span className="fs-xs fw-semibold text-muted me-2">Toggle Columns:</span>
          {initialColumns.map((col, idx) => (
            <button
              key={idx}
              type="button"
              className={`btn btn-xs ${hiddenColumns[col.header] ? 'btn-outline-secondary opacity-50' : 'btn-primary'}`}
              onClick={() => toggleColumnVisibility(col.header)}
            >
              <i className={`ti ${hiddenColumns[col.header] ? 'ti-eye-off' : 'ti-eye'} me-1`}></i>
              {col.header}
            </button>
          ))}
        </div>
      )}

      {/* Top Controls Bar */}
      <div className="row align-items-center mb-3">
        {showExport && (
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            {exportFormat === 'dropdown' ? (
              <div className="dropdown position-relative d-inline-block">
                <button 
                  className={`btn btn-sm btn-secondary dropdown-toggle d-flex align-items-center gap-1 ${exportDropdownOpen ? 'show' : ''}`}
                  type="button" 
                  id="exportDropdownBtn"
                  aria-expanded={exportDropdownOpen ? 'true' : 'false'}
                  onClick={() => setExportDropdownOpen(prev => !prev)}
                >
                  <i className="ti ti-download me-1 align-baseline"></i> Export <i className="ti ti-chevron-down fs-xs ms-1"></i>
                </button>
                <div 
                  className={`dropdown-menu ${exportDropdownOpen ? 'show' : ''} shadow`} 
                  style={{ 
                    display: exportDropdownOpen ? 'block' : 'none',
                    position: 'absolute', 
                    top: '100%', 
                    left: 0, 
                    zIndex: 1050, 
                    minWidth: '150px' 
                  }}
                >
                  <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={() => { handleCopy(); setExportDropdownOpen(false); }}>
                    <i className="ti ti-copy text-muted"></i> Copy
                  </button>
                  <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={() => { handleExportCSV(); setExportDropdownOpen(false); }}>
                    <i className="ti ti-file-type-csv text-success"></i> CSV
                  </button>
                  <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={() => { handleExportCSV(); setExportDropdownOpen(false); }}>
                    <i className="ti ti-file-spreadsheet text-primary"></i> Excel
                  </button>
                  <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={() => { handlePrint(); setExportDropdownOpen(false); }}>
                    <i className="ti ti-file-type-pdf text-danger"></i> PDF
                  </button>
                  <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={() => { handlePrint(); setExportDropdownOpen(false); }}>
                    <i className="ti ti-printer text-muted"></i> Print
                  </button>
                </div>
              </div>
            ) : (
              <div className="dt-buttons btn-group flex-wrap gap-1">
                <button className="btn btn-sm btn-light border" type="button" onClick={handleCopy}>
                  <i className="ti ti-copy me-1"></i> Copy
                </button>
                <button className="btn btn-sm btn-light border" type="button" onClick={handleExportCSV}>
                  <i className="ti ti-file-type-csv me-1"></i> CSV
                </button>
                <button className="btn btn-sm btn-light border" type="button" onClick={handleExportCSV}>
                  <i className="ti ti-file-spreadsheet me-1"></i> Excel
                </button>
                <button className="btn btn-sm btn-light border" type="button" onClick={handlePrint}>
                  <i className="ti ti-file-type-pdf me-1"></i> PDF
                </button>
                <button className="btn btn-sm btn-light border" type="button" onClick={handlePrint}>
                  <i className="ti ti-printer me-1"></i> Print
                </button>
              </div>
            )}
            {copiedNotification && (
              <span className="badge badge-soft-success ms-2 py-1 px-2">Copied to clipboard!</span>
            )}
          </div>
        )}

        <div className={`col-12 ${showExport ? 'col-md-6' : 'col-md-6'} d-flex align-items-center gap-2 mb-2 mb-md-0`}>
          {showPageLength && (
            <div className="dataTables_length d-flex align-items-center gap-2">
              <label className="text-muted fs-sm d-flex align-items-center gap-2 mb-0">
                Show
                <select
                  className="form-select form-select-sm"
                  style={{ width: 'auto', minWidth: '70px' }}
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  {pageSizeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                entries
              </label>
            </div>
          )}
        </div>

        {showSearch && (
          <div className={`col-12 ${showExport ? 'col-md-12 mt-md-2' : 'col-md-6'} d-flex justify-content-md-end`}>
            <div className="dataTables_filter d-flex align-items-center gap-2">
              <label className="text-muted fs-sm d-flex align-items-center gap-2 mb-0">
                Search:
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Search table..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Table Body */}
      <div className="table-responsive">
        <table className={tableClassName}>
          <thead className="thead-sm text-uppercase fs-xxs">
            <tr>
              {expandable && <th style={{ width: '35px' }}></th>}
              {showCheckboxCol && (
                <th style={{ width: '35px' }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleSelectAll}
                    checked={paginatedData.length > 0 && selectedRowIds.size === paginatedData.length}
                  />
                </th>
              )}
              {activeColumns.map((col, idx) => {
                const isSortable = col.sortable !== false && typeof col.accessor === 'string';
                const isCurrentSort = typeof col.accessor === 'string' && sortKey === col.accessor;
                return (
                  <th
                    key={idx}
                    className={`${col.className || ''} ${isSortable ? 'cursor-pointer user-select-none' : ''}`}
                    onClick={() => isSortable && handleSort(col.accessor)}
                    style={{ cursor: isSortable ? 'pointer' : 'default' }}
                  >
                    <div className="d-flex align-items-center justify-content-between gap-1">
                      <span>{col.header}</span>
                      {isSortable && (
                        <span className="text-muted opacity-75 ms-1">
                          {isCurrentSort ? (
                            sortDirection === 'asc' ? (
                              <i className="ti ti-chevron-up text-primary fw-bold"></i>
                            ) : (
                              <i className="ti ti-chevron-down text-primary fw-bold"></i>
                            )
                          ) : (
                            <i className="ti ti-arrows-sort text-muted opacity-50"></i>
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rIdx) => {
              const isSelected = selectedRowIds.has(rIdx);
              const isExpanded = expandedRowIds.has(rIdx);

              return (
                <React.Fragment key={rIdx}>
                  <tr
                    className={`${isSelected ? 'table-primary bg-primary-subtle fw-semibold' : ''} ${selectable ? 'cursor-pointer' : ''}`}
                    onClick={() => selectable && (selectMode === 'rowClick' || selectMode === 'both') && handleSelectRow(rIdx)}
                    style={{ cursor: selectable ? 'pointer' : 'default' }}
                  >
                    {expandable && (
                      <td className="text-center" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="btn btn-xs btn-light border p-1"
                          onClick={() => toggleRowExpansion(rIdx)}
                        >
                          <i className={`ti ${isExpanded ? 'ti-minus' : 'ti-plus'}`}></i>
                        </button>
                      </td>
                    )}
                    {showCheckboxCol && (
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={isSelected}
                          onChange={() => handleSelectRow(rIdx)}
                        />
                      </td>
                    )}
                    {activeColumns.map((col, cIdx) => {
                      const val = typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor];
                      return (
                        <td key={cIdx} className={col.className || ''}>
                          {col.render ? col.render(val, row) : (val != null ? String(val) : '')}
                        </td>
                      );
                    })}
                  </tr>
                  {expandable && isExpanded && (
                    <tr className="bg-light">
                      <td colSpan={activeColumns.length + (showCheckboxCol ? 1 : 0) + (expandable ? 1 : 0)} className="p-3">
                        {renderExpandedRow ? renderExpandedRow(row) : (
                          <div className="p-2 border rounded bg-white">
                            <h6 className="fs-sm fw-bold mb-2">Extended Details:</h6>
                            <pre className="fs-xs mb-0">{JSON.stringify(row, null, 2)}</pre>
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={activeColumns.length + (showCheckboxCol ? 1 : 0) + (expandable ? 1 : 0)} className="text-center py-4 text-muted">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Summary & Pagination Bar */}
      <div className="row align-items-center mt-3">
        {showInfo && (
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <div className="dataTables_info text-muted fs-sm">
              Showing {startEntry} to {endEntry} of {sortedData.length} entries
              {searchTerm && ` (filtered from ${data.length} total entries)`}
              {selectable && selectedRowIds.size > 0 && (
                <span className="badge bg-primary ms-2">{selectedRowIds.size} row(s) selected</span>
              )}
            </div>
          </div>
        )}

        {showPagination && totalPages > 1 && (
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <div className="dataTables_paginate paging_simple_numbers">
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    type="button"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, pIdx) => {
                  const pageNum = pIdx + 1;
                  if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)) {
                    return (
                      <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                        <button
                          className="page-link"
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      </li>
                    );
                  }
                  if (pageNum === currentPage - 3 || pageNum === currentPage + 3) {
                    return <li key={pageNum} className="page-item disabled"><span className="page-link">...</span></li>;
                  }
                  return null;
                })}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    type="button"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactDataTable;
