import React from 'react';
import { Badge } from '../ui/Badge';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconBg?: 'primary' | 'success' | 'warning' | 'info' | 'danger';
  trend?: {
    value: string;
    isPositive: boolean;
    label?: string;
  };
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBg = 'primary',
  trend
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h6 className="text-muted fw-semibold mb-1">{title}</h6>
            <h3 className="mb-0 fw-bold">{value}</h3>
          </div>
          <div className={`avatar-md bg-${iconBg}-subtle text-${iconBg} rounded-circle d-flex align-items-center justify-content-center`}>
            <i className={`${icon} fs-24`}></i>
          </div>
        </div>
        {trend && (
          <div className="mt-3">
            <Badge variant={trend.isPositive ? 'soft-success' : 'soft-danger'} className="me-1">
              <i className={trend.isPositive ? 'ti ti-trending-up' : 'ti ti-trending-down'}></i> {trend.value}
            </Badge>
            <span className="text-muted fs-xs">{trend.label || 'vs last month'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
