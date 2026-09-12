import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  icon,
  required,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={inputId} className="form-label fw-semibold">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      {icon ? (
        <div className="input-group">
          <span className="input-group-text"><i className={icon}></i></span>
          <input
            id={inputId}
            className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
            required={required}
            {...props}
          />
        </div>
      ) : (
        <input
          id={inputId}
          className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
          required={required}
          {...props}
        />
      )}
      {error && <div className="invalid-feedback d-block">{error}</div>}
      {helperText && !error && <div className="form-text text-muted">{helperText}</div>}
    </div>
  );
};
