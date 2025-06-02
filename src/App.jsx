import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CertificationCard from './components/CertificationCard';
import AboutSection from './sections/AboutSection';
import Home from './sections/Home.jsx'
import SkillsSection from './sections/SkillsSection.jsx';
import AnimationWrapper from './components/AnimationWrapper';
import { certifications } from './data/Certifications';
import AOS from 'aos';
import 'aos/dist/aos.css';// No topo do seu App.jsx ou index.jsx
import Contato from './sections/Contacto.jsx';

import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Header />
      
      <main className="portfolio-container">
        <AnimationWrapper delay={0.4}>
          <Home />
        </AnimationWrapper>

        <AnimationWrapper delay={0.4}>
          <AboutSection />
        </AnimationWrapper>

        <AnimationWrapper delay={0.3}>
          <SkillsSection />
        </AnimationWrapper>

        <AnimationWrapper delay={0.4}>
          <section id="certificacoes">
            <h2> Certificações</h2>
            <div className="certifications-grid">
              {certifications.map((certification) => (
                <CertificationCard 
                  key={certification.id}
                  certification={certification}
                />
              ))}
            </div>
          </section>
        </AnimationWrapper>

         <AnimationWrapper delay={0.3}>
          <Contato />
        </AnimationWrapper>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;