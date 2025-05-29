import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CertificationCard from './components/CertificationCard';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection.jsx';
import AnimationWrapper from './components/AnimationWrapper';
import { certifications } from './data/Certifications';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="portfolio-container">
        <AnimationWrapper>
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
      </main>
      
      <Footer />
    </div>
  );
}

export default App;