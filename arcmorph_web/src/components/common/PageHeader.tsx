import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  category?: string;
  breadcrumbs?: { label: string; active?: boolean; path?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, category = 'Pages', breadcrumbs }) => {
  return (
    <div className="page-title-head d-flex align-items-center mb-3">
      <div className="flex-grow-1">
        <h4 className="page-main-title m-0">{title}</h4>
      </div>
      <div className="text-end">
        <ol className="breadcrumb m-0 py-0">
          <li className="breadcrumb-item"><Link to="/">ArchMorph</Link></li>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            breadcrumbs.map((b, i) => (
              <li key={i} className={`breadcrumb-item ${b.active ? 'active' : ''}`}>
                {b.active ? (
                  b.label
                ) : b.path ? (
                  <Link to={b.path}>{b.label}</Link>
                ) : (
                  <span className="text-muted">{b.label}</span>
                )}
              </li>
            ))
          ) : (
            <>
              {category && <li className="breadcrumb-item"><span className="text-muted">{category}</span></li>}
              <li className="breadcrumb-item active">{title}</li>
            </>
          )}
        </ol>
      </div>
    </div>
  );
};
