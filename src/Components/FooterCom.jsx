import React from 'react'
import { Link } from 'react-router-dom'

export const FooterCom = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className='footer-title'>Contact Me</h2>
          <p className='footer-link2'>Email: max@outlook.com</p>
          <p className='footer-link2'>Phone: +998 (90) 123-12-34</p>
          <a className='footer-link2' href="https://t.me/ChillitChel">Telegram: @ChillitChel</a>
        </div>

        <div className="footer-section right">
          <h2 className='footer-title'>Quick Links</h2>
          <ul>
            <Link to='/' className='footer-link'>Home Page</Link>
            <Link to='/about' className='footer-link'>About Me</Link>
            <Link to='/contact' className='footer-link'>Contact via Telegram</Link>
          </ul>
        </div>
      </div>
      
      <hr className="footer-divider" />
      <p className="footer-text" >&copy; 2025 mPortfolio. All rights reserved. Probably.</p>
    </footer>
  );

}

