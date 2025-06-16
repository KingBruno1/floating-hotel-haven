
import React from 'react';
import './MetricCard.css';

const MetricCard = ({ title, value, icon, trend, trendDirection }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-info">
          <p className="metric-title">{title}</p>
          <p className="metric-value">{value}</p>
        </div>
        <div className="metric-icon">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="metric-trend">
          <span className={`trend ${trendDirection || 'neutral'}`}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
