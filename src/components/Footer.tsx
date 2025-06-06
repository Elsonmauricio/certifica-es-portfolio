import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Elson Mauricio • Portfólio de Certificações</p>

        <div className="link-container">
          <div className="information">
            <h1>Skills</h1>
            <ul>
              <li><p>React.js</p></li>
              <li><p>Python</p></li>
              <li><p>Java</p></li>
              <li><p>C</p></li>
              <li><p>Typescript</p></li>
            </ul>
          </div>

          <div className="resource">
            <h1>Tecnologias</h1>
            <ul>
              <li><p>Git</p></li>
              <li><p>GitHub</p></li>
              <li><p>Figma</p></li>
              <li><p>VSCode</p></li>
            </ul>
          </div>

          <div className="navigation">
            <h1>Navegação</h1>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
