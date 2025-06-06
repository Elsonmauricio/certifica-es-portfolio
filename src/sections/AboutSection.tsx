import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="sobre">
      <div data-aos="zoom-out-right" data-aos-delay={300} className="profile">
        <div className="image-box">
          <img src="./Imagem WhatsApp 2025-04-23 às 01.47.21_3dddefc0.jpg" alt="profile" />
        </div>
      </div>

      <div className="about-content">
        <h2>Sobre Mim</h2>
        <p>
          Sou um profissional apaixonado por tecnologia e aprendizado contínuo.
          Este portfólio mostra minhas certificações e habilidades adquiridas
          através de muito estudo e dedicação.<br></br>
          Sou um desenvolvedor apaixonado por tecnologia e resolução de
          problemas desenvolvo soluções eficientes e escaláveis para desafios
          reais. Busco sempre inovar e aprimorar minhas habilidades, criando
          projetos que impactam positivamente usuários e negócios.
        </p>
        <div className="personal-info">
          <p>
            <strong>Nome:</strong> Elson Domingos Leitão Mauricio
          </p>
          <p>
            <strong>Localização:</strong> Castelo branco, Fundão
          </p>
          <p>
            <strong>Interesses:</strong> Tecnologia, Desenvolvimento,
            Aprendizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
