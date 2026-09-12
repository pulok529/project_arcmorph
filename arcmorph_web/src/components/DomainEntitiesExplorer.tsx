import React, { useState } from 'react';
import { Database, Search, Key, Link as LinkIcon, Filter, Layers, CheckCircle2, ChevronDown, ChevronRight, Hash } from 'lucide-react';

interface ColumnModel {
  name: string;
  csharpType: string;
  dataType: string;
  isNullable: boolean;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
  foreignKeyTarget?: string;
}

interface DomainEntity {
  entityName: string;
  tableName: string;
  subsystem: string;
  schemaName: string;
  columnsCount: number;
  columns: ColumnModel[];
  primaryKeys: string[];
  foreignKeys: { column: string; target: string }[];
  filePath: string;
}

interface DomainEntitiesExplorerProps {
  entities: DomainEntity[];
  projectName: string;
}

export const DomainEntitiesExplorer: React.FC<DomainEntitiesExplorerProps> = ({ entities = [], projectName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubsystem, setSelectedSubsystem] = useState<string>('ALL');
  const [expandedEntity, setExpandedEntity] = useState<string | null>(null);

  const subsystems = ['ALL', ...Array.from(new Set(entities.map(e => e.subsystem || 'Academic')))];

  const filteredEntities = entities.filter(e => {
    const matchesSearch = e.entityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.tableName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.columns.some(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubsystem = selectedSubsystem === 'ALL' || e.subsystem === selectedSubsystem;
    return matchesSearch && matchesSubsystem;
  });

  const getBadgeColor = (subsystem: string) => {
    switch (subsystem?.toLowerCase()) {
      case 'academic': return 'bg-primary-subtle text-primary border border-primary-subtle';
      case 'accounts': return 'bg-success-subtle text-success border border-success-subtle';
      case 'hrm': return 'bg-warning-subtle text-warning border border-warning-subtle';
      case 'panel': return 'bg-danger-subtle text-danger border border-danger-subtle';
      default: return 'bg-info-subtle text-info border border-info-subtle';
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      {/* Header */}
      <div className="card-header bg-transparent border-bottom p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar-md bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
            <Database size={24} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <h5 className="fw-bold mb-0 text-dark">Database Domain Entities & Schema Explorer</h5>
              <span className="badge bg-primary text-white rounded-pill font-monospace fs-11">
                {entities.length} Typed Entities
              </span>
            </div>
            <p className="text-muted fs-13 mb-0">
              Deconstructed from <code className="text-primary font-monospace">Library.DAO</code> with typed SQL mappings, primary keys, and foreign relationships.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="d-flex align-items-center gap-2">
          <div className="input-group input-group-sm" style={{ width: '240px' }}>
            <span className="input-group-text bg-light border-end-0"><Search size={14} className="text-muted" /></span>
            <input
              type="text"
              className="form-control bg-light border-start-0 fs-12"
              placeholder="Search table or column..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Subsystem Filter Pills */}
      <div className="card-body border-bottom p-3 bg-light-subtle">
        <div className="d-flex align-items-center gap-2 overflow-x-auto pb-1">
          <span className="text-muted fs-12 fw-semibold d-flex align-items-center gap-1 me-2">
            <Filter size={14} /> Subsystem:
          </span>
          {subsystems.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubsystem(sub)}
              className={`btn btn-sm rounded-pill px-3 py-1 fs-12 transition ${
                selectedSubsystem === sub ? 'btn-primary fw-bold shadow-sm' : 'btn-outline-secondary bg-white'
              }`}
            >
              {sub} {sub !== 'ALL' && `(${entities.filter(e => e.subsystem === sub).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Entities Table Grid */}
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 fs-13">
            <thead className="table-light">
              <tr>
                <th style={{ width: '40px' }}></th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Domain Entity</th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Table Name</th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Subsystem</th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Columns</th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Primary Key</th>
                <th className="fw-semibold text-muted text-uppercase fs-11">Foreign Keys</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.length > 0 ? (
                filteredEntities.map((entity, idx) => {
                  const isExpanded = expandedEntity === entity.entityName;
                  return (
                    <React.Fragment key={idx}>
                      <tr
                        onClick={() => setExpandedEntity(isExpanded ? null : entity.entityName)}
                        className="cursor-pointer"
                        style={{ cursor: 'pointer' }}
                      >
                        <td className="text-center text-muted">
                          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </td>
                        <td>
                          <div className="fw-bold text-dark font-monospace d-flex align-items-center gap-1.5">
                            <Layers size={14} className="text-primary" />
                            {entity.entityName}
                          </div>
                          <small className="text-muted fs-11 font-monospace">{entity.filePath}</small>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark font-monospace border">
                            [dbo].[{entity.tableName}]
                          </span>
                        </td>
                        <td>
                          <span className={`badge rounded-pill px-2.5 py-1 fs-11 ${getBadgeColor(entity.subsystem)}`}>
                            {entity.subsystem}
                          </span>
                        </td>
                        <td>
                          <span className="fw-bold font-monospace text-dark">
                            {entity.columnsCount || entity.columns.length} columns
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark font-monospace d-inline-flex align-items-center gap-1">
                            <Key size={11} /> {entity.primaryKeys.join(', ') || `${entity.entityName}Id`}
                          </span>
                        </td>
                        <td>
                          {entity.foreignKeys.length > 0 ? (
                            <span className="badge bg-info-subtle text-info border border-info-subtle font-monospace d-inline-flex align-items-center gap-1">
                              <LinkIcon size={11} /> {entity.foreignKeys.length} FK relations
                            </span>
                          ) : (
                            <span className="text-muted fs-11">-</span>
                          )}
                        </td>
                      </tr>

                      {/* Expandable Column Details */}
                      {isExpanded && (
                        <tr>
                          <td colSpan={7} className="p-3 bg-light">
                            <div className="card shadow-none border rounded-3 p-3 bg-white">
                              <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                                <Database size={16} className="text-primary" />
                                Column & Field Schema for <code className="text-primary font-monospace">{entity.tableName}</code>
                              </h6>
                              <div className="table-responsive">
                                <table className="table table-sm table-bordered align-middle mb-0 fs-12 font-monospace">
                                  <thead className="table-light">
                                    <tr>
                                      <th>Column Name</th>
                                      <th>SQL Data Type</th>
                                      <th>C# Property Type</th>
                                      <th>Nullability</th>
                                      <th>Key Constraint</th>
                                      <th>Foreign Key Target</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {entity.columns.map((col, cIdx) => (
                                      <tr key={cIdx}>
                                        <td className="fw-bold text-dark">{col.name}</td>
                                        <td><span className="badge bg-secondary-subtle text-secondary">{col.dataType}</span></td>
                                        <td><span className="text-primary">{col.csharpType}</span></td>
                                        <td>{col.isNullable ? <span className="text-muted">NULL</span> : <span className="text-danger fw-bold">NOT NULL</span>}</td>
                                        <td>
                                          {col.isPrimaryKey ? (
                                            <span className="badge bg-warning text-dark"><Key size={10} className="me-1" />PK</span>
                                          ) : col.isForeignKey ? (
                                            <span className="badge bg-info text-white"><LinkIcon size={10} className="me-1" />FK</span>
                                          ) : (
                                            <span className="text-muted">-</span>
                                          )}
                                        </td>
                                        <td className="text-muted">{col.foreignKeyTarget || '-'}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-5 text-muted">
                    <Database size={36} className="text-muted mb-2" />
                    <h6>No domain entities matched your search query.</h6>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
