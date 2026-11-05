import React from "react";
import { Menu, Bell } from "lucide-react";

const titles = {
  dashboard: "Dashboard",
  tasks: "My Tasks",
  roadmap: "Learning Roadmap",
  interview: "Interview Preparation",
  quiz: "Practice Quiz",
  progress: "My Progress"
};

export default function Header({ page, onMenu }) {
  return (
    <header className="top-header">
      <button className="menu-button" onClick={onMenu}>
        <Menu size={22} />
      </button>

      <div>
        <h2>{titles[page] || "SmartTodo"}</h2>
        <p>Plan your work. Track your growth.</p>
      </div>

      <div className="header-right">
        <Bell size={20} />
        <span className="user-avatar">A</span>
      </div>
    </header>
  );
}