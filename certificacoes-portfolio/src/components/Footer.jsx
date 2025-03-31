import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <p>&copy; {new Date().getFullYear()} Meu Portfólio de Certificações</p>
    </footer>
  );
};

export default Footer;