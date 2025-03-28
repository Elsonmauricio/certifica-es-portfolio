import React from 'react';
import './CertificationCard.css';

const CertificationCard = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="certification-image">
        <img 
          src={certification.image} 
          alt={certification.title} 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Certificado';
          }}
        />
      </div>
      <div className="certification-details">
        <h3>{certification.title}</h3>
        <p className="issuer">{certification.issuer}</p>
        <p className="date">{certification.date}</p>
        {certification.link && (
          <a 
            href={certification.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-btn"
          >
            Ver Certificado
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;