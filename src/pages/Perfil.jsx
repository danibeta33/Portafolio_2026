
import './Perfil.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';


export default function Perfil() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="perfil-main-container container">
        <div className="perfil-content-wrapper">
          {/* Menu */}
          <div className="perfil-menu-bar">
            <button className="perfil-header-menu-btn" onClick={() => navigate('/busqueda')}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="16" x2="17" y2="16"/></svg>
              <span>Menu</span>
            </button>
          </div>

          {/* Fondo gris claro */}
          <div className="perfil-content-bg">
            {/* Imagen de perfil */}
            <div className="perfil-img-container">
              <div className="perfil-img-placeholder">
                <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="14" width="28" height="20" rx="3"/><circle cx="24" cy="24" r="5"/></svg>
              </div>
            </div>

            {/* Inputs de datos */}
            <div className="perfil-inputs-row flex flex-col sm:flex-row gap-2">
              <input className="perfil-input" value="Medellín, Antioquia" readOnly />
              <input className="perfil-input" value="Comunicación Social" readOnly />
            </div>
            <div className="perfil-inputs-row">
              <input className="perfil-input" value="18" readOnly />
              <input className="perfil-input" value="Femenino" readOnly />
            </div>

            {/* Descripción */}
            <div className="perfil-desc-block">
              <label className="perfil-desc-label">Descripción</label>
              <textarea className="perfil-desc-textarea" value={"Sofía tiene 18 años, vive en Medellín y está interesada en estudiar carreras relacionadas con la comunicación y las artes. Se describe como una persona creativa, apasionada por la escritura y con interés en explorar nuevas culturas. Busca programas universitarios que le permitan combinar la teoría con la práctica."} readOnly />
            </div>

            {/* Carrusel de favoritos */}
            <div className="perfil-carousel-row">
              <button className="perfil-carousel-arrow">&#60;</button>
              <div className="perfil-carousel-card" style={{cursor:'pointer'}} onClick={() => navigate('/favoritos')}>
                <div className="perfil-carousel-img-placeholder"></div>
                <div className="perfil-carousel-label">Universidades</div>
              </div>
              <div className="perfil-carousel-card">
                <div className="perfil-carousel-img-placeholder"></div>
                <div className="perfil-carousel-label">Carreras</div>
              </div>
              <button className="perfil-carousel-arrow">&#62;</button>
            </div>

            {/* Botones inferiores */}
            <div className="perfil-bottom-btn-row">
              <button className="perfil-bottom-btn perfil-bottom-btn-rosado">Editar</button>
              <button className="perfil-bottom-btn perfil-bottom-btn-rosado" onClick={() => navigate(-1)}>Atras</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}