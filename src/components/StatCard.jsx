import React from "react";

const StatCard = ({
  title,
  value,
  change,
  icon,
  positive = true,
}) => {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div>
          <p>{title}</p>
          <h3>{value}</h3>
        </div>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-bottom">
        <span className={positive ? "positive" : "negative"}>
          {positive ? "↑" : "↓"} {change}
        </span>

        <span>vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;