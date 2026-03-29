


import './PagU.css';
import UNacionalImg from '../imgs/UNacional.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToastFavoritos from '../components/ToastFavoritos';
import Layout from '../components/Layout';



export default function PagU() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [animateBtn, setAnimateBtn] = useState(false);

  // Handler for animated button click
  const handleAddFavClick = () => {
    setAnimateBtn(true);
    setShowToast(true);
    setTimeout(() => setAnimateBtn(false), 350); // Animation duration
  };

  const handleCloseToast = () => setShowToast(false);
  const handleGoFavoritos = () => {
    setShowToast(false);
    navigate('/favoritos');
  };

  return (
    <Layout>
      <div className="pagu-main-container container">
        {/* Menu */}
        <div className="pagu-menu-bar">
          <button className="pagu-header-menu-btn" onClick={() => navigate('/busqueda')}>
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="16" x2="17" y2="16"/></svg>
            <span>Menu</span>
          </button>
        </div>

        {/* Chips de filtros */}
        <div className="pagu-chips-row flex flex-wrap gap-2">
          <span className="pagu-chip">Pública</span>
          <span className="pagu-chip">Bogotá</span>
          <span className="pagu-chip">Medellín</span>
        </div>

        {/* Info principal */}
        <div className="pagu-info-row">
          <div className="pagu-img-block">
            <img src={UNacionalImg} alt="Universidad Nacional" className="pagu-img" />
          </div>
          <div className="pagu-desc-block">
            <h1 className="pagu-title">🎓 Universidad Nacional</h1>
            <p className="pagu-desc">
              La Universidad Nacional de Colombia (UNAL) es la institución pública de educación superior más importante del país, reconocida por su excelencia académica y su liderazgo en investigación. Fundada en 1867, tiene presencia en varias ciudades del país, incluyendo Bogotá, Medellín, Manizales y Palmira, lo que le permite garantizar acceso a educación de calidad en diferentes regiones. Su oferta académica abarca todas las áreas del conocimiento, desde ciencias básicas y sociales hasta ingeniería, artes y salud, formando profesionales comprometidos con el desarrollo del país.<br /><br />
              Además de su papel educativo, la UNAL es un referente en investigación científica, innovación y proyección social, contribuyendo de manera significativa al avance del conocimiento y a la solución de problemáticas nacionales. Es reconocida por su diversidad cultural, su autonomía y su compromiso con la equidad, ofreciendo programas y beneficios que facilitan el acceso a estudiantes de distintos contextos socioeconómicos.
            </p>
          </div>
        </div>

        {/* Noticias */}
  <div className="pagu-section-title">📰 Últimas Noticias</div>
        <div className="pagu-news-row">
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder"></div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">Colombia le apuesta al hidrógeno con…</h3>
              <p className="pagu-news-desc">Con una inversión histórica de $36.500 millones del Sistema General de Regalías (SGR), la Universidad Nacional de Colombia (UNAL) lidera uno de los proyectos de investigación más grandes en ciencia</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder"></div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">Almacenamiento de energía en Colo…</h3>
              <p className="pagu-news-desc">En 2025, Colombia está impulsando el almacenamiento de energía, especialmente a través de baterías, para apoyar el crecimiento de las energías renovables y mejorar la eficiencia del sistema eléctrico.</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder"></div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">De la Cumbre de Alaska, algo más …</h3>
              <p className="pagu-news-desc">La cumbre del 14 de agosto entre Donald Trump, presidente de Estados Unidos, y Vladimir Putin, presidente de la Federación de Rusia y gobernante directo e indirecto desde 1999, tenía por objeto —por lo menos— definir una ruta…</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
        </div>
        <div className="pagu-news-btn-row">
          <button className="pagu-news-btn pagu-news-btn-main">Noticias</button>
        </div>

        {/* Comentarios */}
  <div className="pagu-section-title pagu-section-title-coment">💬 Comentarios</div>
        <div className="pagu-coment-block">
          <div className="pagu-coment-user">Laura Gómez</div>
          <div className="pagu-coment-user-desc">Estudiante de Arquitectura</div>
          <div className="pagu-coment-box">
            Estudiar en la Universidad Nacional ha sido una de las mejores decisiones de mi vida. Aquí no solo he encontrado una formación académica de alto nivel, sino también un espacio lleno de diversidad cultural y pensamiento crítico. La calidad de los profesores y la cantidad de recursos disponibles para la investigación son impresionantes. Además, el ambiente estudiantil es muy dinámico y siempre hay actividades que enriquecen la experiencia universitaria. Sin duda, la UNAL no es solo una universidad, es una comunidad que transforma vidas.
            <span className="pagu-coment-icons">
              <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
              <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
            </span>
          </div>
          <div className="pagu-coment-btn-row">
            <button className="pagu-news-btn pagu-news-btn-main" onClick={() => navigate('/comentarios')}>Comentarios</button>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="pagu-bottom-btn-row">
          <button className="pagu-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          <button
            className={`pagu-bottom-btn pagu-bottom-btn-rosado${animateBtn ? ' pagu-bottom-btn-anim' : ''}`}
            onClick={handleAddFavClick}
          >
            Añadir a Fav
          </button>
        </div>

        {/* Toast Favoritos */}
        <ToastFavoritos
          visible={showToast}
          onClose={handleCloseToast}
          onFavoritos={handleGoFavoritos}
        />
      </div>
    </Layout>
  );
}