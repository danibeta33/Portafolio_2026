


import './Comentarios.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';


export default function Comentarios() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="coment-main-container container">
        {/* Menu */}
        <div className="coment-menu-bar">
          <button className="coment-header-menu-btn" onClick={() => navigate('/busqueda')}>
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="16" x2="17" y2="16"/></svg>
            <span>Menu</span>
          </button>
        </div>

        {/* Título */}
        <div className="coment-section-title">Comentarios</div>

        {/* Lista de comentarios */}
        <div className="coment-list-block">
          {/* Comentario 1 */}
          <div className="coment-user-block">
            <div className="coment-user">Laura Gómez</div>
            <div className="coment-user-desc">Estudiante de Arquitectura</div>
            <div className="coment-box">
              Estudiar en la Universidad Nacional ha sido una de las mejores decisiones de mi vida. Aquí no solo he encontrado una formación académica de alto nivel, sino también un espacio lleno de diversidad cultural y pensamiento crítico. La calidad de los profesores y la cantidad de recursos disponibles para la investigación son impresionantes. Además, el ambiente estudiantil es muy dinámico y siempre hay actividades que enriquecen la experiencia universitaria. Sin duda, la UNAL no es solo una universidad, es una comunidad que transforma vidas.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 2 */}
          <div className="coment-user-block">
            <div className="coment-user">Andrés Castillo</div>
            <div className="coment-user-desc">Estudiante de Ingeniería Civil</div>
            <div className="coment-box">
              Estudiar en la Universidad Nacional ha sido un reto y una experiencia gratificante. Desde el primer semestre me di cuenta de la exigencia académica, pero también del apoyo de los profesores y compañeros. Las instalaciones, como los laboratorios y bibliotecas, son de gran calidad y permiten aprender de forma práctica. La diversidad cultural del campus hace que cada día sea diferente y enriquecedor. Estoy convencido de que esta formación me está preparando para cualquier desafío profesional.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 3 */}
          <div className="coment-user-block">
            <div className="coment-user">Mariana Torres</div>
            <div className="coment-user-desc">Estudiante de Psicología</div>
            <div className="coment-box">
              La Universidad Nacional me ha enseñado que la educación va más allá de las aulas. Aquí he tenido la oportunidad de participar en proyectos sociales que impactan a comunidades reales, algo que me motiva a seguir creciendo. Los profesores son excelentes, siempre dispuestos a compartir su experiencia. Además, el ambiente es inclusivo y lleno de actividades culturales que complementan la formación académica. Estudiar aquí me ha hecho sentir orgullosa de la educación pública.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 4 */}
          <div className="coment-user-block">
            <div className="coment-user">Felipe Ramírez</div>
            <div className="coment-user-desc">Estudiante de Medicina</div>
            <div className="coment-box">
              Entrar a la Universidad Nacional fue todo un logro para mí. El nivel de exigencia es alto, pero eso me impulsa a dar lo mejor cada día. Los recursos que ofrece la universidad, como hospitales universitarios y laboratorios, son increíbles para nuestra formación. También valoro la diversidad de personas que encuentras en el campus, lo que amplía la forma en la que vemos el mundo. Estoy seguro de que esta experiencia marcará mi vida para siempre.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="coment-bottom-btn-row">
          <button className="coment-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          <button className="coment-bottom-btn coment-bottom-btn-rosado" onClick={() => navigate('/pagu')}>Pag Universidad</button>
        </div>
      </div>
    </Layout>
  );
}