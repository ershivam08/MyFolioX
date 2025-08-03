import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollX > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className={`container ${scrolled ? 'scrolled' : ''}`}>
        <h2 className={scrolled ? 'fadeInDown' : ''}>MyFolio<span>X</span></h2>
        
        <div 
          className={`hamburger ${mobileMenuToggle ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={mobileMenuToggle ? 'active' : ''}>
          <li><a href="/" onClick={() => setMobileMenuToggle(false)}>Home</a></li>
          <li><a href="/About" onClick={() => setMobileMenuToggle(false)}>About</a></li>
          <li><a href="/Generator" onClick={() => setMobileMenuToggle(false)}>Gen Portfolio</a></li>
          <li><a href="/Template" onClick={() => setMobileMenuToggle(false)}>Template</a></li>
          <li><a href="/Contact" onClick={() => setMobileMenuToggle(false)}>Contact</a></li>
          <li><a href="/Login" onClick={() => setMobileMenuToggle(false)}><button>Login</button></a></li>
        </ul>
      </div>
    </nav>
  )
}