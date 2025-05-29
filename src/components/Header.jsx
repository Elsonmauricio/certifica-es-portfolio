import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <h1>Meu Portfólio de Certificações</h1>
      <p>Uma coleção das minhas conquistas e aprendizados</p>
      <nav className="main-nav">
  <a href="#sobre">Sobre</a>
  <a href="#habilidades">Habilidades</a>
  <a href="#certificacoes">Certificações</a>
</nav>
    </header>
  );
};

export default Header;