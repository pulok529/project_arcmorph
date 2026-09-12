import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, badge, actions, headerAction, children, className = '', bodyClassName = '' }) => {
  const finalAction = actions || headerAction;
  return (
    <div className={`card card-h-100 ${className}`}>
      {(title || finalAction || badge || subtitle) && (
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex align-items-center gap-2">
              {title && <h5 className="card-title mb-0">{title}</h5>}
              {badge}
            </div>
            {subtitle && <p className="text-muted mb-0 fs-xs mt-1">{subtitle}</p>}
          </div>
          {finalAction && <div className="card-actions">{finalAction}</div>}
        </div>
      )}
      <div className={`card-body ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};
