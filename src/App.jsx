import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CertificationCard from './components/CertificationCard';
import { certifications } from './data/certifications';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="portfolio-container">
        <h2>Minhas Certificações</h2>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard 
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;