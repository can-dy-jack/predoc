import React from 'react';
import './index.scss';

export interface LinkProps {
  href?: string;
  isMenu?: boolean;
  isCurrent?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Link(props: LinkProps) {
  const { href = '/', children, isMenu = false, isCurrent = false, disabled = false } = props;

  const isExternal = href.startsWith('http');

  const target = isExternal ? '_blank' : '';
  const rel = isExternal ? 'noopener noreferrer' : undefined;
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-disabled={disabled}
      className={`predoc-link${isMenu ? ' predoc-link-menu' : ''}${isCurrent ? ' current' : ''}`}
    >
      {children}
    </a>
  );
}
