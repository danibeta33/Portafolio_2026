import React from "react";
import useDarkModeStore from "../store/darkModeStore";
import "./DarkModeButton.css";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <button
      className="darkmode-toggle"
      onClick={toggleDarkMode}
      aria-label="Cambiar modo oscuro/claro"
    >
      <span className="darkmode-icon">
        {darkMode ? (
          // Ícono modo oscuro → línea
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="14"
              y1="28"
              x2="42"
              y2="28"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Ícono modo claro → círculo con contorno
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="28"
              cy="28"
              r="22"
              stroke="#FFD600"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default DarkModeButton;
