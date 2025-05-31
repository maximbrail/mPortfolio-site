import React, { useState, useEffect } from 'react';
import './styleCom.css';
import '../index.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';

export const NavCom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (lightTheme) {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [lightTheme]);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <Link to='/' className='nav-logo-title'>
          <img className='nav-logo-img' src={Logo} alt='msite' />
          mPortfolio
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to='/works' onClick={() => setMenuOpen(false)}>Works</Link>
        <Link to='/about' onClick={() => setMenuOpen(false)}>About</Link>
        <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
        <span className='nav-link-fake' onClick={() => { setLightTheme(!lightTheme); setMenuOpen(false); }}>
          {lightTheme ? '◐ Change Theme' : '◑ Change Theme'}
        </span>
      </div>

      <div className='burger' onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default NavCom;
