import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <span className="header-logo">ThemeProvider</span>
      <button className="button header__theme-button" onClick={changeTheme}>
        Theme
      </button>
    </header>
  );
};

export default Header;
