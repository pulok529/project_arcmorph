import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'soft-primary' | 'soft-success' | 'soft-danger' | 'soft-warning';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const iconClass = icon ? 'btn-icon' : '';
  const variantClass = variant.startsWith('soft-') ? `btn-${variant}` : `btn-${variant}`;

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${iconClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>}
      {children}
    </button>
  );
};
