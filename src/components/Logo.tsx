import logo from '../assets/logo.png';

const Logo = () => {
  const getCurrentTheme = () => {
    if (localStorage.theme === 'dark' || localStorage.theme === 'light') {
      return localStorage.theme;
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  const setLightTheme = () => {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  };

  const setDarkTheme = () => {
    localStorage.theme = 'dark';
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  };

  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    if (currentTheme === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <div className='w-full h-full flex items-center font-semibold text-4xl cursor-pointer' onClick={toggleTheme}>
      <img src={logo} alt='logo' className='object-cover' />
      <span className='ml-2'>uhammed</span>
    </div>
  );
};

export default Logo;
