import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  BookOpen,
  Brain,
  BarChart3,
  X
} from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "tasks", label: "My Tasks", icon: CheckSquare },
  { id: "roadmap", label: "Learning Roadmap", icon: CalendarDays },
  { id: "interview", label: "Interview Preparation", icon: BookOpen },
  { id: "quiz", label: "Practice Quiz", icon: Brain },
  { id: "progress", label: "My Progress", icon: BarChart3 }
];

export default function Sidebar({ page, setPage, open, close }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={close} />}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">S</div>
          <div>
            <h2>SmartTodo</h2>
            <small>Placement Planner</small>
          </div>
          <button className="sidebar-close" onClick={close}>
            <X size={20} />
          </button>
        </div>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`nav-item ${page === item.id ? "active" : ""}`}
                onClick={() => {
                  setPage(item.id);
                  close();
                }}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <span>Stay consistent.</span>
          <small>Build your future one task at a time.</small>
        </div>
      </aside>
    </>
  );
}