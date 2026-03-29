
import './Busqueda.css';
import UEafitImg from '../imgs/UEafit.jpg';
import UNacionalImg from '../imgs/UNacional.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastFavoritos from '../components/ToastFavoritos';
import Layout from '../components/Layout';



export default function Busqueda() {
  const [filtros, setFiltros] = useState({ ciudad: false, pais: false, comunicacion: true });
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleFiltroChange = (e) => {
    const { name, checked } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFavoritosClick = () => {
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleToastFavoritos = () => {
    setShowToast(false);
    navigate('/favoritos');
  };

  return (
    <Layout>
      <div className="busqueda-main-container container">
        {/* Menu */}
        <div className="busqueda-menu-bar">
          <button className="busqueda-header-menu-btn">
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="16" x2="17" y2="16"/></svg>
            <span>Menu</span>
          </button>
        </div>

        {/* Search bar y filtros */}
        <div className="busqueda-bar-section">
          <label htmlFor="search" className="busqueda-label">🔎 Búsqueda</label>
          <div className="busqueda-bar-row">
            <input id="search" type="text" className="favoritos-search-input" />
            <span className="favoritos-search-icon">
              <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><line x1="14" y1="14" x2="11.5" y2="11.5"/></svg>
            </span>
          </div>
          <div className="busqueda-filtros-row flex flex-wrap gap-2">
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="ciudad"
                checked={filtros.ciudad}
                onChange={handleFiltroChange}
              /> Mi ciudad
            </label>
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="pais"
                checked={filtros.pais}
                onChange={handleFiltroChange}
              /> Mi país
            </label>
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="comunicacion"
                checked={filtros.comunicacion}
                onChange={handleFiltroChange}
              /> Comunicación
            </label>
          </div>
        </div>

        {/* Resultados */}
        <div className="busqueda-resultados-list">
          {/* Card 1 */}
          <div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc] mb-6">
            <div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md busqueda-img-placeholder overflow-hidden">
              <img src={UNacionalImg} alt="Universidad Nacional de Colombia" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad Nacional de Colombia</h2>
                <p className="text-sm text-[#23263a] mt-1">Forma parte de una de las universidades más reconocidas del país. El programa de Psicología de la UNAL te brinda una sólida formación teórica y práctica, con enfoque en investigación y compromiso social.</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
                <button className="btn-secundario" onClick={handleFavoritosClick}>Favoritos</button>
                <button className="btn-secundario">Guardar</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc] mb-6">
            <div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md busqueda-img-placeholder overflow-hidden">
              <img src={UEafitImg} alt="Universidad EAFIT" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad EAFIT</h2>
                <p className="text-sm text-[#23263a] mt-1">Desarrolla tu creatividad en el mundo digital aprendiendo diseño interactivo, animación y programación. Con docentes expertos y acceso a laboratorios de innovación, podrás trabajar en videojuegos, aplicaciones y experiencias inmersivas</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
                <button className="btn-secundario" onClick={handleFavoritosClick}>Favoritos</button>
                <button className="btn-secundario">Guardar</button>
              </div>
            </div>
          </div>

          {/* Mensaje de no resultados */}
          <div className="busqueda-no-resultados text-center">
            <span>No hay más resultados</span>
            <div className="busqueda-no-resultados-bar"></div>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="busqueda-bottom-btn-row">
          <button className="favoritos-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          <button className="favoritos-bottom-btn">Restablecer</button>
        </div>
        <ToastFavoritos
          visible={showToast}
          onClose={handleToastClose}
          onFavoritos={handleToastFavoritos}
        />
      </div>
    </Layout>
  );
}