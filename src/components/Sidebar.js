import React from "react";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  Receipt,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      {/* LOGO */}

      <div className="logo">
        <div className="logo-icon">
          BA
        </div>

        <span>
          Business<span>Pro</span>
        </span>
      </div>


      {/* MAIN MENU */}

      <div className="menu-title">
        MAIN MENU
      </div>


      <nav className="sidebar-menu">

        {/* DASHBOARD */}

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <LayoutDashboard size={20} />

          <span>
            Dashboard
          </span>
        </NavLink>


        {/* SALES ANALYTICS */}

        <NavLink
          to="/sales-analytics"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <BarChart3 size={20} />

          <span>
            Sales Analytics
          </span>
        </NavLink>


        {/* CUSTOMERS */}

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <Users size={20} />

          <span>
            Customers
          </span>
        </NavLink>


        {/* PRODUCTS */}

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <Package size={20} />

          <span>
            Products
          </span>
        </NavLink>


        {/* TRANSACTIONS */}

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <Receipt size={20} />

          <span>
            Transactions
          </span>
        </NavLink>


        {/* REPORTS */}

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <FileText size={20} />

          <span>
            Reports
          </span>
        </NavLink>

      </nav>


      {/* SYSTEM */}

      <div className="menu-title settings-title">
        SYSTEM
      </div>


      <nav className="sidebar-menu">

        {/* SETTINGS */}

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <Settings size={20} />

          <span>
            Settings
          </span>
        </NavLink>


        {/* LOGOUT */}

        <button className="menu-item logout">

          <LogOut size={20} />

          <span>
            Logout
          </span>

        </button>

      </nav>

    </aside>
  );
};

export default Sidebar;