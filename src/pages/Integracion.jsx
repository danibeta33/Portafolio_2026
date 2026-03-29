import React from "react";
import useDarkModeStore from "../store/darkModeStore";
import "./Integracion.css";

const Integracion = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
  <h2>🔗 Integración</h2>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      </button>
    </div>
  );
};

export default Integracion;
