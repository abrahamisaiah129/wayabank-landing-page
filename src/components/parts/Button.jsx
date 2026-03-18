import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  role,
  onClick,
  disabled,
  className,
  children,
  content,
  size, // sm, md, lg, navbar
  loading,
  variant, // primary, outline
  style,
  type = "button"
}) => {
  // Determine classes to apply
  const btnVariant = variant || 'primary';
  const btnSize = size || 'md';
  const baseClass = className === 'btn btn-primary' ? 'waya-button' : `waya-button ${className || ''}`;
  const finalClass = `${baseClass} variant-${btnVariant} size-${btnSize} ${loading ? 'is-loading' : ''}`;

  return (
    <button
      type={type}
      role={role}
      disabled={disabled || loading}
      onClick={onClick}
      className={finalClass}
      style={style}
    >
      {loading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        content || children
      )}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  className: '',
  content: null,
  role: 'button',
  variant: 'primary',
  size: 'md',
  loading: false,
};

Button.propTypes = {
  role: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default Button;
