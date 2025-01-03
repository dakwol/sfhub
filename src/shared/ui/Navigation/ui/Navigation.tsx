// Navigation.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { routesConfig } from "@shared/config/routesConfig";

const Navigation: React.FC = () => {
  return (
    <nav className="navigationContainer">
      <div className="nav">
        {routesConfig.map(({ path, icon }) => (
          <div key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
            >
              {icon}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
