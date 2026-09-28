import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="logo-link">
        <span className="logo-text">Regina Cupa<span>.</span></span>
      </a>
      <nav>
        <ul className="menu-list">
          <li className="menu-item"><a href="#sobre">Sobre</a></li>
          <li className="menu-item"><a href="#projetos">Projetos</a></li>
          <li className="menu-item"><a href="#skills">Skills</a></li>
          <li className="menu-item"><a href="#formacao">Formação</a></li>
          <li className="menu-item"><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
