import React from "react";

export default function StatCard({ label, value, caption, icon: Icon, tone }) {
  return (
    <div className={`stat-card ${tone || ""}`}>
      <div className="stat-card-top">
        <span>{label}</span>
        {Icon && <Icon size={22} />}
      </div>
      <h2>{value}</h2>
      <p>{caption}</p>
    </div>
  );
}