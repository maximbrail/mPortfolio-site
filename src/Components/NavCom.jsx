import React, { useState } from 'react'
import './styleCom.css'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.png'

export const NavCom = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='nav'>
      <div className='nav-logo'>
        
        <Link to='/' className='nav-logo-title'>
        <img className='nav-logo-img' src={Logo} alt='msite' />
        mPortfolio
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/works" onClick={() => setMenuOpen(false)}>Works</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div className='burger' onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  )
}

export default NavCom
