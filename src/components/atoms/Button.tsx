import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { theme } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  style,
  disabled,
  ...props
}: ButtonProps) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.alias.color.action.primary,
          color: theme.alias.color.text.inverse,
          border: 'none',
        };
      case 'secondary':
        return {
          backgroundColor: theme.alias.color.action.secondaryGhost,
          color: theme.alias.color.action.secondary,
          border: `1px solid ${theme.alias.color.action.secondaryGhost}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.alias.color.text.main,
          border: `1px solid ${theme.alias.color.border.regular}`,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: theme.alias.color.text.muted,
          border: 'none',
        };
      case 'danger':
        return {
          backgroundColor: theme.alias.color.status.error,
          color: theme.alias.color.text.inverse,
          border: 'none',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: `${theme.global.spacing.xs} ${theme.global.spacing.sm}`,
          fontSize: theme.global.font.size.xs,
          height: '32px',
        };
      case 'lg':
        return {
          padding: `${theme.global.spacing.md} ${theme.global.spacing.lg}`,
          fontSize: theme.global.font.size.base,
          height: '48px',
        };
      case 'md':
      default:
        return {
          padding: `${theme.global.spacing.sm} ${theme.global.spacing.md}`,
          fontSize: theme.global.font.size.sm,
          height: '40px',
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.global.spacing.xs,
    borderRadius: theme.global.radius.md,
    fontWeight: theme.global.font.weight.bold,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: theme.global.font.family.sans,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
    outline: 'none',
    ...getSizeStyles(),
    ...getVariantStyles(),
    ...style,
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.02, filter: 'brightness(1.1)' } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      style={baseStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg className="animate-spin" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="31.4" strokeDashoffset="0" style={{ opacity: 0.25 }} />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }} />
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
          {children}
          {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default Button;
