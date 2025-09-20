import { ReactNode, MouseEvent, HTMLButtonElement, useRef } from 'react';

import './index.scss';

type ButtonType = 'default' | 'dashed' | 'fill' | 'text' | 'link';
type ButtonTheme = 'default' | 'primary' | 'dark' | 'danger' | 'success' | 'warning' | 'info';

interface ButtonProps {
  type?: ButtonType;
  theme?: ButtonTheme;
  size?: 'normal' | 'small' | 'large' | 'mini';
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button(props: ButtonProps) {
  const {
    type = 'default',
    theme = 'primary',
    size = 'normal',
    children,
    onClick
  } = props;

  const btnRef = useRef<HTMLButtonElement>(null);

  const btnOnclick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);

    if (type == 'link') {
      return;
    }

    const btn = btnRef.current as HTMLButtonElement;
    if (!btn) return;

    // 滚动的距离 + 距离视口边界的距离 = 按钮左上角距离父标签左上角的坐标
    const rect = btn.getBoundingClientRect();
    const left = rect.left + window.pageXOffset;
    const top = rect.top + window.pageYOffset;

    const width = btn.clientWidth;
    const height = btn.clientHeight;
    const max = Math.max(width, height);

    // 点击位置的坐标 - 钮左上角距离父标签左上角的距离 - ripple自身宽高的一半 = 合适的偏移坐标
    let ripple_x = e.pageX - left - max / 2;  
    let ripple_y = e.pageY - top - max / 2;

    const rippleDiv = document.createElement('div');
    rippleDiv.className = 'btn-ripple';
    rippleDiv.style.width = max + 'px';
    rippleDiv.style.height = max + 'px';
    rippleDiv.style.left = ripple_x + 'px';
    rippleDiv.style.top = ripple_y + 'px';
    btn.appendChild(rippleDiv);

    let timer = window.setTimeout(() => {
      rippleDiv.remove();
      window.clearTimeout(timer);
    }, 3000);
  };

  return (
    <button 
      className={`predoc-button${
      type == 'default' ? '' : (' predoc-button-type-' + type)
      }${
        theme == 'default' ? '' : (' predoc-button-theme-' + theme)
        }${
          size == 'normal' ? '' : (' predoc-button-size-' + size)
          }`}
      onClick={btnOnclick}
      ref={btnRef}
    >
      <span>{ children }</span>
    </button>
  );
}
