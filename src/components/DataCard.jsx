
import React from 'react';
import './DataCard.css';

const DataCard = ({ title, icon, children }) => {
  return (
    <div className="data-card">
      <div className="data-card-header">
        <div className="data-card-title-wrapper">
          {icon && <div className="data-card-icon">{icon}</div>}
          <h2 className="data-card-title">{title}</h2>
        </div>
      </div>
      <div className="data-card-content">
        {children}
      </div>
    </div>
  );
};

export default DataCard;
