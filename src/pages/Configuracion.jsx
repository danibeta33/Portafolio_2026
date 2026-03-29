import React from "react";
import useDarkModeStore from "../store/darkModeStore";
import "./Configuracion.css";

const Configuracion = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2>⚙️ Configuración</h2>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      </button>
    </div>
  );
};

export default Configuracion;
