import { useEffect, useState } from "react";

export function Back2top() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      const height = document.documentElement.clientHeight + 100;
      const top = document.documentElement.scrollTop;
      if (top > height) {
        setScale(1)
      } else {
        setScale(0);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div
      className='predoc-back2top'
      onClick={() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        });
      }}
      role='button'
      aria-label='back to top'
      style={{
        transform: `scale(${scale})`
      }}
    >
      <svg height="26" viewBox="0 0 48 48" width="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" fill='currentColor'></path>
      </svg>
    </div>
  )
}