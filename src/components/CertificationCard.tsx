import React from 'react';
import './CertificationCard.css';

const CertificationCard = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="certification-image-container">
        <img 
          src={process.env.PUBLIC_URL + certification.image} 
          alt={certification.title}
          className="certification-image"
          onError={(e) => {
            e.target.src = process.env.PUBLIC_URL + '/cert-placeholder.png';
          }}
        />
      </div>
      <div className="certification-details">
        <h3>{certification.title}</h3>
        <p className="issuer">{certification.issuer}</p>
        <p className="date">Emitido em: {certification.date}</p>
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