import React from "react";

const StaticLoaders: React.FC = () => {
  const strokeWidth = 6;
  const radius = 40; // Adjust for size
  const circumference = 2 * Math.PI * radius;

  const createCircle = (percentage: number, color: string) => {
    const offset = circumference - (percentage / 100) * circumference;
    return (
      <svg
        width="100"
        height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#f3f3f3"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fontSize="16"
          fontWeight="bold"
          fill={color}>
          {percentage}
          {percentage >= 90 ? "%" : ""}
        </text>
      </svg>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {/* First Loader */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        {createCircle(95, "red")}
        <h4 style={{ margin: "10px 0", fontSize: "16px" }}>Clients Satisfactions</h4>
      </div>

      {/* Second Loader */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        {createCircle(22, "red")}
        <h4 style={{ margin: "10px 0", fontSize: "16px" }}>Softwares we are managing</h4>
      </div>
    </div>
  );
};

export default StaticLoaders;
