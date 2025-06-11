import React from 'react'
import { Link } from 'react-router-dom'

export const FooterCom = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Me</h2>
          <p>Email: max@outlook.com</p>
          <p>Phone: +998 (90) 123-12-34</p>
          <a href="https://t.me/ChillitChel">Telegram: @ChillitChel</a>
        </div>

        <div className="footer-section right">
          <h2>Quick Links</h2>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/contact'>Contact</Link>
          </ul>
        </div>
      </div>
      
      <hr className="footer-divider" />
      <p className="footer-text rights" >&copy; 2025 mPortfolio. All rights reserved. Probably.</p>
    </footer>
  );

}

