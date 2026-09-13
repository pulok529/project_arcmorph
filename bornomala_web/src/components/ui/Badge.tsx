import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'soft-primary' | 'soft-success' | 'soft-danger' | 'soft-warning' | 'soft-info';
  pill?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  pill = false,
  className = ''
}) => {
  const isSoft = variant.startsWith('soft-');
  const badgeClass = isSoft ? `badge badge-${variant}` : `badge text-bg-${variant}`;
  const pillClass = pill ? 'rounded-pill' : '';

  return (
    <span className={`${badgeClass} ${pillClass} ${className}`}>
      {children}
    </span>
  );
};
