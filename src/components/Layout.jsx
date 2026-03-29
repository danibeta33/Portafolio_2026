import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import hoverSoundSrc from '../imgs/hoverSound.wav';
import clickSoundSrc from '../imgs/clicSound.wav';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const hoverAudio = useRef(null);
  const clickAudio = useRef(null);

  useEffect(() => {
    // Crear elementos Audio y preparar para reproducción
    hoverAudio.current = new Audio(hoverSoundSrc);
    clickAudio.current = new Audio(clickSoundSrc);

    // Permitir que se reproduzca rápidamente sin retrasos
    hoverAudio.current.preload = 'auto';
    clickAudio.current.preload = 'auto';

    // Handlers por delegación de eventos
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, .btn-principal, .btn-secundario, .favoritos-bottom-btn, .pagu-bottom-btn');
      if (target) {
        try {
          // Reiniciar y reproducir
          hoverAudio.current.currentTime = 0;
          hoverAudio.current.play();
        } catch (err) {
          // Ignorar errores de autoplay/interrupt
        }
      }
    };

    const handleClick = (e) => {
      const targetBtn = e.target.closest('button, a, img');
      if (targetBtn) {
        try {
          clickAudio.current.currentTime = 0;
          clickAudio.current.play();
        } catch (err) {
          // Ignorar errores
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
      // Liberar referencias
      hoverAudio.current = null;
      clickAudio.current = null;
    };
  }, []);
  return (
    <div>
      <header className="pagu-header" style={{position: 'sticky', top: 0, zIndex: 50}}>
        <div className="pagu-header-col pagu-header-col-left">
          <div className="pagu-logo-box" style={{cursor:'pointer'}} onClick={() => navigate('/perfil')}>Logo</div>
        </div>
        <div className="pagu-header-center-col">
          <div className="pagu-header-center"></div>
        </div>
        <div className="pagu-header-col pagu-header-col-right">
          <button className="pagu-header-menu-btn" aria-label="Menú lateral" onClick={() => navigate('/busqueda')}>
            <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
    </div>
  );
}
