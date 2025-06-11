import React, { useState, useEffect } from 'react';
import './styleCom.css';
import '../index.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';


import userLight from '../Assets/user.svg';
import userDark from '../Assets/user-dark.svg';
import openLight from '../Assets/open.svg';
import openDark from '../Assets/open-dark.svg';

export const NavCom = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightTheme, setLightTheme] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    useEffect(() => {
        const root = document.documentElement;
        lightTheme ? root.classList.add('light-theme') : root.classList.remove('light-theme');
    }, [lightTheme]);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);


    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to='/' className='nav-logo-title'>
                    <img 
                      className='nav-logo-img' 
                      src={Logo} 
                      alt='msite' 
                    />
                    mPortfolio
                </Link>
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to='/works' onClick={() => setMenuOpen(false)}>Works</Link>
                <Link to='/about' onClick={() => setMenuOpen(false)}>About</Link>
                <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>

                <span
                    className='nav-link-fake'
                    onClick={() => { setLightTheme(!lightTheme); setMenuOpen(false); }}
                >
                    {lightTheme ? '◐ Change Theme' : '◑ Change Theme'}
                </span>

                {isLoggedIn ? (
                    <>
                        <Link to='/dashboard' onClick={() => setMenuOpen(false)}>
                       <img src={ lightTheme ? userDark : userLight } alt='user' className='nav-user-icon' />
                        Profile</Link>
                    </>
                ) : (
                    <Link to='/login' onClick={() => setMenuOpen(false)}>
                        <img src={ lightTheme ? openDark : openLight } alt='login' className='nav-user-icon' />
                        Login</Link>
                )}
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
