import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-left">
        <h1>Portfólio</h1>
        <p>Uma coleção das minhas conquistas e aprendizados</p>
      </div>
      {/* <div className="header-center">
        {/* Substitua pelo seu logotipo */}
        {/* <img src="/logo.png" alt="Meu Logotipo" className="logo" />
      </div> */} 
      <nav className="header-right main-nav">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#certificacoes">Certificações</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;