const APPEARANCE_KEY = 'appearance';

const setClassList = (isDark = false) => {
   const classList = document.documentElement.classList;
  if (isDark) {
    classList.add('dark');
  } else {
    classList.remove('dark');
  }
};

const updateAppearance = () => {
  const userPreference = window.localStorage.getItem(APPEARANCE_KEY);
  setClassList(userPreference === 'dark');
};

if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  updateAppearance();
  window.addEventListener('storage', updateAppearance);
}

export function toggle() {
   const classList = document.documentElement.classList;
   
  if (classList.contains('dark')) {
    setClassList(false);
    // 本地状态存储
    window.localStorage.setItem(APPEARANCE_KEY, 'light');
  } else {
    setClassList(true);
    // 本地状态存储
    window.localStorage.setItem(APPEARANCE_KEY, 'dark');
  }
}
