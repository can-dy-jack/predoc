import { ReactNode } from 'react';

import './index.scss';

type ButtonType = 'default' | 'dashed' | 'text' | 'link';
type ButtonTheme = 'default' | 'primary' | 'danger' | 'success' | 'warning' | 'info';

interface ButtonProps {
  type?: ButtonType;
  theme?: ButtonTheme;
  size?: 'normal' | 'small' | 'large' | 'mini';
  children?: ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    type = 'default',
    theme = 'primary',
    size = 'normal',
    children,
    onClick
  } = props;

  return (
    <button 
      className={`predoc-button ${
      type == 'default' ? '' : ('predoc-button-type-' + type)
      } ${
        theme == 'default' ? '' : ('predoc-button-theme-' + theme)
        } ${
          size == 'normal' ? '' : ('predoc-button-size-' + size)
          }`}
      onClick={onClick}
    >
      <span>{ children }</span>
    </button>
  );
}
