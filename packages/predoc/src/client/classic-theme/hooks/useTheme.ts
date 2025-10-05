import { useState, useEffect } from 'react';

const THEME_KEY = 'predoc-theme';

export function useTheme() {
  const [light, setLight] = useState(true);

  function updateAppearance() {
    const userPreference = window.localStorage.getItem(THEME_KEY);
    setClassList(userPreference === 'dark');
    setLight(userPreference === 'light');
  }

  function setClassList(isDark = false) {
    const classList = document.documentElement.classList;
    if (isDark) {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      updateAppearance();
      window.addEventListener('storage', updateAppearance);
    }
  }, []);

  useEffect(() => {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)');

    // change(!preferDark.matches);

    const setDark = (e) => { 
      change(!e.matches);
    };
    preferDark.addEventListener('change', setDark);
    return () => {
      preferDark.removeEventListener('change', setDark);
    };
  }, []);

  function change(isLight) {
    if (isLight) {
      setClassList(false);
      setLight(true);
      window.localStorage.setItem(THEME_KEY, 'light');
    } else {
      setClassList(true);
      setLight(false);
      window.localStorage.setItem(THEME_KEY, 'dark');
    }
  }

  function toggle() {
    change(!light);
  }

  return {
    toggle,
    light
  };
}
