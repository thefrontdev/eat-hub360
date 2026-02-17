import { LitElement, html, css } from '../assets/js/lit-core.min.js';
import '../components/nav-menu.js';
import '../components/image-carousel.js';
import '../components/countdown.js';
import '../components/footer.js';
import '../components/text-ticker.js';
import '../components/photo-carousel.js';

export class Hub360Home extends LitElement {
  static styles = css`
    :host {
      /* --- PALETA DE COLORES --- */
      --primary-deep: #000ffa; /* Color solicitado */
      --primary-light: #4d5bff; /* Variación para legibilidad sobre negro */
      --primary-light-60: #4d5bff99; /* Variación para legibilidad sobre negro */
      --primary-light-40: #4d5bff66; /* Variación para legibilidad sobre negro */
      --neon-cyan: #00f3ff;
      --bg-dark: #050505;
      --bg-dark-80: #050505cc;
      --bg-dark-40: #05050566;
      --bg-card: #0a0a12;
      --text-main: #fafafa;
      --text-muted: #a0a0a0;
      
      /* --- FUENTES --- */
      --font-display: 'Anton', sans-serif;
      --font-body: 'Nunito', sans-serif;

      display: block;
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-body);
      overflow-x: hidden;
    }

    h1 {
      font-family: var(--font-display);
      text-transform: uppercase;
      margin: 0;
      font-style: italic;
      font-size: clamp(2.5rem, 5vw, 5rem);
      text-shadow: 0 0 20px var(--primary-light-60), 0 0 10px var(--primary-light-40);
      & .highlight {
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(to bottom, #fafafa, #000ffa33);
      }
    }

    h2 {
      font-size: 2rem;
      font-style: italic;
      margin-bottom: 20px;
      font-family: var(--font-display);
      text-transform: uppercase;
    }

    .btn-group {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 30px;
    }

    .btn {
      padding: 14px 28px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: none;
      color: white;
      background: rgba(0, 15, 250, 0.1); /* Tinte del color principal */
      border: 1px solid var(--primary-deep);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      cursor: pointer;
    }

    .btn:hover {
      background: var(--primary-deep);
      box-shadow: 0 0 30px rgba(0, 15, 250, 0.4);
      border-color: var(--primary-light);
    }

    .btn-secondary {
      border-color: var(--text-muted);
      color: var(--text-muted);
      background: transparent;
    }
    
    .btn-secondary:hover {
      border-color: white;
      color: white;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
    }

    .btn-card {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      & span {
        margin-left: 0.5rem;
        transition: all 0.3s ease;
      }

      &:hover span {
        transform: translateX(0.5rem);
      }
    }

    .hero {
      padding-top: 5.5rem;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      min-height: 85vh;
      display: flex;
      position: relative;
    }

    .hero-image-overlay {
      z-index: 0;
      inset: 0px;
      position: absolute;
      & .gradient {
        position: absolute;
        inset: 0px;
        z-index: 10;
        background: linear-gradient(var(--bg-dark-40), var(--bg-dark-80), var(--bg-dark));
      }
      & .blend {
        position: absolute;
        inset: 0px;
        z-index: 10;
        background-color: #0000fa1a;
        mix-blend-mode: overlay;
      }
      & img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
      }
      & video {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100dvh;
        object-fit: cover;
        opacity: 0.6;
      }
    }

    .hero-grid-overlay {
      opacity: 0.2;
      background-image: linear-gradient(to right, #1f1f2e 1px, transparent 1px), linear-gradient(to bottom, #1f1f2e 1px, transparent 1px);
      z-index: 0;
      inset: 0px;
      position: absolute;
      pointer-events: none;
      background-size: 40px 40px;
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }

    .hero-content {
      position: relative;
      width: 100%;
      max-width: 64rem;
      text-align: center;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      z-index: 20;

      & .line-microcopy {
        opacity: 0.7;
        gap: 0.5rem;
        align-items: center;
        flex-direction: column;
        display: flex;
        margin-bottom: 2rem;
        & .line {
          background-image: linear-gradient(to bottom, transparent, var(--text-main));
          width: 1px;
          height: 2rem;
        }
        & span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          color: var(--text-main);
        }
      }

      & .subheadline, .credibility {
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
        padding-top: 1.5rem;
        border-style: solid;
        border-width: 2px 0 0 0;
        color: var(--text-muted);
        font-weight: 600;
        border-color: var(--primary-deep);
        max-width: 50rem;
        margin-bottom: 0;
      }

      & .credibility {
        border: none;
        padding: 0;
        margin-top: 0;
        margin-bottom: 2.5rem;
      }
    }

    .evolution {
      position: relative;
      padding: 80px 20px;
      background: linear-gradient(180deg, var(--bg-dark), #050510);
      text-align: center;
    }

    .evolution .container {
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 2.5rem;
    }

    .evolution-box {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      border-left: 4px solid var(--primary-deep);
      padding-left: 30px;
      text-align: left;
    }

    .evolution-image {
      padding: 0.5rem;
      border: 1px solid var(--primary-deep);
      position: relative;
      overflow: hidden;
      clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    }

    .evolution-image:hover img {
      transform: scale(1.05);
      filter: drop-shadow( 0 0 10px #4d5bff80);
      transition: all 0.3s ease;
    }

    .evolution h2 {
      font-size: 2rem;
      color: var(--primary-light);
      margin-bottom: 20px;
      font-family: var(--font-display);
      text-transform: uppercase;
    }

    .bento-section {
      padding: 60px 20px;
      & .container {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
      }
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .section-header h2 { 
      font-size: 2.5rem; margin-bottom: 10px; 
      font-family: var(--font-display);
      text-transform: uppercase;
    }

    .bento-grid {
      gap: 1.5rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      display: grid;
    }

    .card {
      transition-duration: 500ms;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      overflow: hidden;
      height: 500px;
      position: relative;
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      background: #05050599;
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-sizing: border-box;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary-deep);
        & .card-image img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
      }

      &.span-2 {
        grid-column: span 2 / span 2;
      }

      & .card-image {
        z-index: 0;
        inset: 0px;
        position: absolute;
        & div {
          background-image: linear-gradient(transparent, #050505d9 50%);
          z-index: 10;
          inset: 0px;
          position: absolute;
        }
        & img {
          transition-duration: 700ms;
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
          filter: grayscale(100%);
          opacity: 0.6;
          object-fit: cover;
          width: 100%;
          height: 100%;
          max-width: 100%;
          height: auto;
          display: block;
        }
      }

      & .card-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        height: 90%;
        z-index: 20;
        position: relative;

        & .items-start {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          & .icon {
            display: flex;
            padding: 0.5rem;
            background: #000ffa80;
          }
          & .role-tag {
            padding: 0.5rem;
            border: 1px solid var(--primary-deep);
          }
        }
      }
    }

    .timeline {
      padding: 80px 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
    }

    .timeline-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      margin-top: 50px;
      position: relative;
    }

    /* Línea conectora */
    .timeline-grid::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary-deep), transparent);
    }

    .time-step {
      padding-top: 30px;
      position: relative;
    }
    
    .time-step::before {
      content: '';
      position: absolute;
      top: -6px; left: 0; width: 14px; height: 14px;
      background: var(--primary-deep);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--primary-deep);
    }

    .time-step h4 { 
      font-size: 1.2rem; 
      margin-bottom: 10px; 
      color: var(--neon-cyan); 
    }

    .dates-section {
      padding: 80px 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;

      & .date-place {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;
        & .map {
          order: 0;
          width: auto;
          height: 100%;
          max-width: 32.5rem;
          background: radial-gradient(transparent, #050505cc);
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          border: 1px solid #a0a0a040;
          padding: 1rem;
          position: relative;
          display: grid;
          place-items: center;

          &::after {
            content: '';
            position: absolute;
            width: 1rem;
            height: 1rem;
            background: url('assets/images/explore.svg') no-repeat;
            top: 1.5rem; right: 1.5rem;
            background-size: contain;
            animation: flash 1.5s linear infinite;
          }

          &::before {
            content: '19.305283239157465, -99.5615017067456';
            position: absolute;
            bottom: 1.5rem; 
            left: 1.5rem;
            font-size: 0.7rem;
            color: var(--primary-deep);
            background: var(--bg-dark);
            padding: 0.3rem 0.5rem;
            border: 1px solid var(--primary-deep);
            z-index: 1;
          }

          &:hover img {
            filter: grayscale(0%);
          }

          img {
            width: 100%;
            filter: grayscale(100%);
            transition: all 0.5s ease;
            border-radius: 1rem 0;
          }
        }
        & .info {
          order: 1;
          text-align: center;
          max-width: 33rem;
          & a {
            color: var(--primary-deep);
            text-decoration: none;
            &.btn {
              color: #fafafa;
            }
            & span {
              vertical-align: middle;
            }
          }
          & h2 {
            margin: 1rem 0;
          }
          & .date-display {
            font-size: 2rem;
          }
        }
      }

      & .final-cta {
        text-align: center;
        & h2 {
          margin-top: 4rem;
        }
      }
    }

    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    @media (width <= 480px) {
      .hero-image-overlay video {
        max-height: 130dvh;
      }
      .evolution .container {
        flex-direction: column;
        & .evolution-box {
          border-left: none;
          padding-left: 0;
          text-align: center;
        }
      }

      .sponsors-section .section-header {
        padding: 0 1rem;
      }

      .bento-grid {
        display: flex;
        flex-direction: column;
      }

      .timeline {
        max-width: 21rem;
      }
      .timeline-grid { grid-template-columns: 1fr; }
      .span-2, .span-3 { grid-column: span 1; }
      .evolution-box { border-left: none; border-top: 4px solid var(--primary-deep); padding: 30px 0 0; }
      .timeline-grid::before { width: 2px; height: 100%; background: linear-gradient(180deg, transparent, var(--primary-deep), transparent); }
      .time-step::before { top: 0; left: -5px; }
      .timeline-grid { padding-left: 20px; border-left: 2px solid rgba(255,255,255,0.05); }
      .timeline-grid::before { display: none; }

      .dates-section {
        max-width: 21rem;
        & .date-place {
          flex-direction: column;
          & .map {
            order: 1;
          } 
          & .info {
            order: 0;
            & .btn {
              display: block;
            }
          }
        }
      }
    }
  `;

  static get properties() {
    return {
      texts: { type: Array },
    }
  };

  constructor() {
    super();
    this.texts = [
      { number: "5000+", text: "Visitantes" },
      { number: "300+", text: "Expositores" },
      { number: "10+", text: "Ponentes especializados" }
    ];
  }

  render() {
    return html`
      <nav-menu></nav-menu>
      <section class="hero">
        <div class="hero-image-overlay">
          <div class="gradient"></div>
          <div class="blend"></div>
          <!--img src="assets/images/hero.png" alt="Expo Autotransporte Toluca"-->
          <video autoplay muted loop playsinline>
            <source src="assets/videos/hero-video.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-grid-overlay"></div>
        <div class="hero-content">
        <div class="line-microcopy">
          <div class="line"></div>
          <span>Encuentra tu lugar dentro del Hub 360.</span>
        </div>
          <h1 class="gradient-text">El Hub que conecta a toda la industria del <span class="highlight">autotransporte</span></h1>
          <p class="subheadline">Antes, durante y después de Expo Autotransporte Toluca 2026, un solo centro articula <strong>decisiones, soluciones, negocio y comunidad</strong>.</p>
          <p class="credibility">Más que una expo. Un ecosistema activo que impulsa a quienes mueven la industria.</p>
          <div class="btn-group">
            <a href="#/visitantes" class="btn">Soy Visitante</a>
            <a href="#/expositores" class="btn">Soy Expositor</a>
            <a href="#/sponsors" class="btn btn-secondary">Soy Sponsor / Partner</a>
          </div>
        </div>
      </section>
      <text-ticker texts="${JSON.stringify(this.texts)}"></text-ticker>
      <section class="evolution">
        <div class="container">
          <div class="evolution-box">
            <h2>LA INDUSTRIA YA NO SE CONECTA EN UN SOLO PUNTO.</h2>
            <p>
              Durante años, las expos funcionaron como eventos aislados. Hoy, el autotransporte necesita continuidad, contexto y conexiones reales.<br><br>
              <strong>Hub 360 nace como la evolución natural de Expo Autotransporte Toluca:</strong> un punto de encuentro permanente donde la industria se informa, se conecta y toma decisiones antes, durante y después del evento.
            </p>
            <p style="margin-top: 20px; font-style: italic; color: var(--primary-light);">
              Miles de profesionales, marcas líderes y tomadores de decisión ya forman parte del ecosistema.
            </p>
            <div style="margin-top: 30px;">
                <a href="https://wa.link/9nxgeo" class="btn btn-secondary" style="font-size: 0.8rem;" target="_blank" rel="noopener">Conoce qué es Hub 360</a>
            </div>
          </div>
          <div class="evolution-image">
            <img src="assets/images/21-1.png" alt="Expo Autotransporte Toluca 2026" style="width: 100%; max-width: 600px; margin-top: 30px;">
          </div>
        </div>
      </section>

      <section class="sponsors-section">
        <div class="container">
          <div class="section-header">
            <h2 style="text-align:center;">Liderazgo que impulsa el ecosistema</h2>
            <p style="text-align:center;">
              Marcas que marcan la agenda del autotransporte en Hub 360.
            </p>
          </div>
          <image-carousel type="sponsors"></image-carousel>
        </div>
      </section>

      <section class="bento-section">
        <div class="container">
          <div class="section-header">
            <h2>¿PARA QUIÉN ES HUB 360?</h2>
            <p>Un mismo Hub. Distintas formas de vivirlo.</p>
          </div>

          <div class="bento-grid">
            
            <div class="card">
              <div class="card-image">
                <div></div>
                <img src="assets/images/directivos.png" alt="Directivos" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <div class="items-start">
                  <span class="icon">
                    <img src="assets/images/icons/work.svg" alt="Icono Directivos">
                  </span>
                  <span class="role-tag">Directivos</span>
                </div>
                <div class="items-end">
                  <h3>Visión estratégica y decisiones de alto impacto</h3>
                  <p>Accede a líderes, alianzas y tendencias que definen el rumbo del sector.</p>
                  <a href="https://wa.link/9nxgeo" class="btn btn-secondary btn-card" target="_blank" rel="noopener">Explora la experiencia <span>→</span></a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <div></div>
                <img src="assets/images/operativos.png" alt="Operativos" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <div class="items-start">
                  <span class="icon">
                    <img src="assets/images/icons/engineering.svg" alt="Icono Operativos">
                  </span>
                  <span class="role-tag">Operativos</span>
                </div>
                <div class="items-end">
                  <h3>Soluciones reales</h3>
                  <p>Encuentra proveedores, tecnología y conocimiento aplicable a tu operación diaria.</p>
                  <a href="https://wa.link/9nxgeo" class="btn btn-secondary btn-card" target="_blank" rel="noopener">Planea tu visita <span>→</span></a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <div></div>
                <img src="assets/images/stand.png" alt="Visitantes" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <div class="items-start">
                  <span class="icon">
                    <img src="assets/images/icons/store.svg" alt="Icono Expositores">
                  </span>
                  <span class="role-tag">Expositores</span>
                </div>
                <div class="items-end">
                  <h3>Negocio, leads y visibilidad calificada</h3>
                  <p>Conecta con compradores reales dentro de un Hub diseñado para generar ROI. No es solo tráfico, es negocio.</p>
                  <a href="https://wa.link/9nxgeo" class="btn btn-secondary btn-card" target="_blank" rel="noopener">Descubre cómo exponer <span>→</span></a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <div></div>
                <img src="assets/images/Sponsors.webp" alt="Sponsors" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <div class="items-start">
                  <span class="icon">
                    <img src="assets/images/icons/handshake.svg" alt="Icono Sponsors">
                  </span>
                  <span class="role-tag">Sponsors</span>
                </div>
                <div class="items-end">
                  <h3>Posicionamiento</h3>
                  <p>Asocia tu marca al centro de influencia del autotransporte donde la industria decide.</p>
                  <a href="https://wa.link/9nxgeo" class="btn btn-secondary btn-card" target="_blank" rel="noopener">Ver Oportunidades <span>→</span></a>
                </div>
              </div>
            </div>

            <div class="card span-2">
              <div class="card-image">
                <div></div>
                <img src="assets/images/Institutional.webp" alt="Institucional" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <div class="items-start">
                  <span class="icon">
                    <img src="assets/images/icons/factory.svg" alt="Icono Institucional">
                  </span>
                  <span class="role-tag">Institucional</span>
                </div>
                <div class="items-end">
                  <h3>Impacto, representación y colaboración sectorial</h3>
                  <p>Participa activamente en el desarrollo del ecosistema.</p>
                  <a href="https://wa.link/9nxgeo" class="btn btn-card" target="_blank" rel="noopener">Conoce cómo integrarte</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="partners-section">
        <div class="container">
          <div class="section-header">
            <h2 style="text-align:center;">Respaldo y Colaboración del Sector</h2>
            <p style="text-align:center;">
              Las instituciones y organismos que fortalecen la industria.
            </p>
          </div>
          <image-carousel type="partners"></image-carousel>
        </div>
      </section>

      <section class="timeline">
        <div class="container">
          <h2 style="text-align:center;">QUÉ SUCEDE EN HUB 360</h2>
          <p style="text-align:center;">Hub 360 no ocurre solo en tres días.</p>
          
          <div class="timeline-grid">
            <div class="time-step">
              <h4>ANTES</h4>
              <p>Contenido estratégico, agenda, comunidad y preparación para una experiencia relevante.</p>
            </div>
            <div class="time-step">
              <h4 style="color: var(--primary-light);">DURANTE (4-6 MARZO)</h4>
              <p style="color: white;">Networking, negocio, soluciones, aprendizaje y conexiones que importan.</p>
            </div>
            <div class="time-step">
              <h4>DESPUÉS</h4>
              <p>Relaciones activas, seguimiento, insights y una comunidad que permanece conectada.</p>
            </div>
          </div>
          <p style="text-align:center; margin-top: 40px; font-size: 0.9rem; opacity: 0.8;">El valor no termina cuando se apagan las luces del recinto.</p>
        </div>
      </section>

      <section class="expo2025">
        <photo-carousel></photo-carousel>
      </section>

      <section class="dates-section">
        <div class="container">
          <div class="date-place">
            <div class="map">
              <img src="assets/images/map.svg" alt="Mapa de la Expo Autotransporte Toluca">
            </div>
            <div class="info">
              <p>
                <a href="https://maps.app.goo.gl/mZyKYYby8h1VrvNf9" target="_blank" rel="noopener   noreferrer">
                  <span><img src="assets/images/location.svg"></span>
                  Centro de Convenciones del Estado de México, Toluca, Estado de México
                </a>
              </p>
              <h2>Expo Autotransporte Toluca</h2>
              <div class="date-display">4 - 6 MARZO 2026</div>
              <div class="countdown-container">
                <countdown-timer targetDate="2026/03/04 09:00:00"></countdown-timer>
              </div>
              <p style="margin-bottom: 2rem;">
                Tres días donde la industria se encuentra.<br>
                Un Hub que permanece activo todo el año.
              </p>
              <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener">Consulta la agenda y planifica tu experiencia</a>
            </div>
          </div>

          <div class="final-cta">
            <h2>Tu lugar dentro del Hub define tu experiencia</h2>
            <p style="margin: 20px 0;">Participa como visitante, expositor o partner estratégico y forma parte del centro que conecta a toda la industria.</p>
            <div class="btn-group" style="gap: 10px; justify-content: space-evenly; flex-wrap: wrap;">
              <a href="https://forms.gle/oXoKGdyvTL7rowvU6" class="btn" target="_blank" rel="noopener">Regístrate como visitante</a>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Participa como expositor</a>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Explora sponsorships</a>
            </div>
            <p style="font-size: 0.7rem; margin-top: 15px;">Cupos y espacios sujetos a disponibilidad.</p>
          </div>
        </div>
      </section>

      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-home-copy', Hub360Home);