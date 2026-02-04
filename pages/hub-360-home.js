import { LitElement, html, css } from './../assets/js/lit-core.min.js';
import './../components/nav-menu.js';
import './../components/image-carousel.js';
import './../components/countdown.js';
import './../components/footer.js';

export class Hub360Home extends LitElement {
  static styles = css`
    :host {
      /* --- PALETA DE COLORES --- */
      --primary-deep: #000ffa; /* Color solicitado */
      --primary-light: #4d5bff; /* Variación para legibilidad sobre negro */
      --neon-cyan: #00f3ff;
      --bg-dark: #020205;
      --bg-card: #0a0a12;
      --text-main: #ffffff;
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

    /* --- UTILIDADES --- */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h1, h2, h3, h4 {
      font-family: var(--font-display);
      text-transform: uppercase;
      margin: 0;
      line-height: 1.2;
      font-style: italic;
    }

    p {
      line-height: 1.6;
      color: var(--text-muted);
    }

    .gradient-text {
      background: linear-gradient(180deg, #fff, var(--primary-light));
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* --- BOTONES --- */
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

    .hero {
      padding: 100px 20px 60px;
      text-align: center;
      position: relative;;
      background: radial-gradient(circle at 50% 0, #000ffa40 0%, transparent 45%);
    }

    /*.hero::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%; 
      height: 100%;
      background: url('./../assets/images/6.png') no-repeat center center/cover;
      opacity: 0.5;
    }*/

    .hero .container {
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      margin-bottom: 20px;
      text-shadow: 0 0 20px rgba(0, 15, 250, 0.3);
    }

    .hero .subheadline {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 10px;
      color: white;
    }
    
    .hero .credibility {
      font-size: 0.9rem;
      color: var(--primary-light);
      margin-bottom: 40px;
    }

    .hero .microcopy {
      font-size: 0.8rem;
      margin-top: 15px;
      opacity: 0.7;
    }

    .evolution {
      padding: 80px 20px;
      background: linear-gradient(180deg, var(--bg-dark), #050510);
      text-align: center;
    }

    .evolution .container {
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
    }

    .evolution .highlight {
      color: white;
      font-weight: bold;
    }

    .bento-section {
      padding: 60px 20px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .section-header h2 { font-size: 2.5rem; margin-bottom: 10px; }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 20px;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 30px;
      border-radius: 12px;
      transition: transform 0.3s ease, border-color 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-deep);
      box-shadow: 0 10px 40px rgba(0, 15, 250, 0.1);
    }

    .card h3 { font-size: 1.5rem; margin: 15px 0; color: white; }
    
    .card .role-tag {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-light);
      border: 1px solid var(--primary-deep);
      padding: 5px 10px;
      align-self: flex-start;
      border-radius: 4px;
    }

    .card-link {
      margin-top: 20px;
      color: var(--primary-light);
      font-size: 0.9rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    /* Grid Spans */
    .span-2 { grid-column: span 2; }
    .span-3 { grid-column: span 3; }

    .timeline {
      padding: 80px 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
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

    .time-step h4 { font-size: 1.2rem; margin-bottom: 10px; color: var(--neon-cyan); }

    /* --- DATES & FOOTER --- */
    .dates-section {
      text-align: center;
      padding: 80px 20px;
      background: radial-gradient(circle at center, rgba(0, 15, 250, 0.1), transparent 60%);
    }

    .date-display {
      font-size: 4rem;
      font-family: var(--font-display);
      color: var(--primary-light);
      text-shadow: 0 0 20px var(--primary-deep);
      line-height: 1;
      margin: 20px 0;
    }

    .countdown-container {
      display: grid;
      place-items: center;
    }

    .final-cta {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px;
      background: var(--bg-card);
      border: 1px solid var(--primary-deep);
      text-align: center;
      margin: 64px auto 80px;
      border-radius: 12px;
    }

    footer {
      text-align: center;
      padding: 1rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.9rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      & .logo {
        & img {
          height: 6rem;
          width: auto;
        }
      }
      & a {
        text-decoration: none;
        color: var(--text-muted);
        transition: all 0.3s ease;
        &:hover {
          color: var(--primary-light);
          & img {
            transform: scale(1.1);
            filter: drop-shadow(0 0 12px var(--primary-deep));
            transition: all 0.3s ease;
          }
        }
      }
    }

    /* --- RESPONSIVE --- */
    @media (max-width: 900px) {
      .bento-grid, .timeline-grid { grid-template-columns: 1fr; }
      .span-2, .span-3 { grid-column: span 1; }
      .evolution-box { border-left: none; border-top: 4px solid var(--primary-deep); padding: 30px 0 0; }
      .timeline-grid::before { width: 2px; height: 100%; background: linear-gradient(180deg, transparent, var(--primary-deep), transparent); }
      .time-step::before { top: 0; left: -5px; }
      .timeline-grid { padding-left: 20px; border-left: 2px solid rgba(255,255,255,0.05); }
      .timeline-grid::before { display: none; } /* Simplificar en móvil */
    }

    @media (width <= 480px) {
      .evolution .container {
        flex-direction: column;
      }
    }
  `;

  render() {
    return html`
      <nav-menu></nav-menu>
      <section class="hero">
        <div class="container">
          <h1 class="gradient-text">El Hub que conecta a toda<br>la industria del autotransporte</h1>
          <p class="subheadline">Antes, durante y después de Expo Autotransporte Toluca 2026, un solo centro articula <strong>decisiones, soluciones, negocio y comunidad</strong>.</p>
          <p class="credibility">Más que una expo. Un ecosistema activo que impulsa a quienes mueven la industria.</p>
          <div class="btn-group">
            <a href="#/visitantes" class="btn">Soy Visitante</a>
            <a href="#/expositores" class="btn">Soy Expositor</a>
            <a href="#/sponsors" class="btn btn-secondary">Soy Sponsor / Partner</a>
          </div>
          <p class="microcopy">Encuentra tu lugar dentro del Hub 360.</p>
        </div>
      </section>

      <section class="evolution">
        <div class="container">
          <div class="evolution-box">
            <h2>LA INDUSTRIA YA NO SE CONECTA EN UN SOLO PUNTO.</h2>
            <p>
              Durante años, las expos funcionaron como eventos aislados. Hoy, el autotransporte necesita continuidad, contexto y conexiones reales.<br><br>
              <span class="highlight">Hub 360 nace como la evolución natural de Expo Autotransporte Toluca:</span> un punto de encuentro permanente donde la industria se informa, se conecta y toma decisiones antes, durante y después del evento.
            </p>
            <p style="margin-top: 20px; font-style: italic; color: var(--primary-light);">
              Miles de profesionales, marcas líderes y tomadores de decisión ya forman parte del ecosistema.
            </p>
            <div style="margin-top: 30px;">
                <a href="#" class="btn btn-secondary" style="font-size: 0.8rem;" target="_blank" rel="noopener">Conoce qué es Hub 360</a>
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
            
            <div class="card span-2" style="background: linear-gradient(135deg, rgba(0, 15, 250, 0.15), var(--bg-card));">
              <span class="role-tag">Directivos</span>
              <h3>Visión estratégica y decisiones de alto impacto</h3>
              <p>Accede a líderes, alianzas y tendencias que definen el rumbo del sector.</p>
              <a href="#" class="card-link" target="_blank" rel="noopener">Explora la experiencia para directivos →</a>
            </div>

            <div class="card">
              <span class="role-tag" style="border-color: var(--neon-cyan); color: var(--neon-cyan);">Operativos</span>
              <h3>Soluciones reales</h3>
              <p>Encuentra proveedores, tecnología y conocimiento aplicable a tu operación diaria.</p>
              <a href="#" class="card-link" style="color: var(--neon-cyan);" target="_blank" rel="noopener">Planea tu visita →</a>
            </div>

            <div class="card span-2" style="border-color: rgba(0, 15, 250, 0.5);">
              <span class="role-tag">Expositores</span>
              <h3>Negocio, leads y visibilidad calificada</h3>
              <p>Conecta con compradores reales dentro de un Hub diseñado para generar ROI. No es solo tráfico, es negocio.</p>
              <a href="#" class="card-link" target="_blank" rel="noopener">Descubre cómo exponer →</a>
            </div>

            <div class="card">
              <span class="role-tag" style="border-color: #fff; color: #fff;">Sponsors</span>
              <h3>Posicionamiento</h3>
              <p>Asocia tu marca al centro de influencia del autotransporte donde la industria decide.</p>
              <a href="#" class="card-link" style="color: #fff;" target="_blank" rel="noopener">Ver Oportunidades →</a>
            </div>

            <div class="card span-3" style="height: max-content; background: linear-gradient(336deg, #00f3ff1a, var(--bg-card) 60%);">
              <div style="display:flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <div>
                  <span class="role-tag">Institucional</span>
                  <h3>Impacto, representación y colaboración sectorial</h3>
                  <p>Participa activamente en el desarrollo del ecosistema.</p>
                </div>
                <a href="#" class="btn btn-secondary" target="_blank" rel="noopener">Conoce cómo integrarte</a>
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

      <section class="dates-section">
        <div class="container">
          <p style="text-transform:uppercase; letter-spacing:3px;">Expo Autotransporte Toluca</p>
          <div class="date-display">4 - 6 MARZO 2026</div>
          <p><a href="https://maps.app.goo.gl/mZyKYYby8h1VrvNf9" target="_blank" rel="noopener noreferrer">Centro de Convenciones del Estado de México, Toluca, Estado de México</a></p>
          <div class="countdown-container">
            <countdown-timer targetDate="2026/03/04 09:00:00"></countdown-timer>
          </div>
          <p style="margin-bottom: 2rem;">
            Tres días donde la industria se encuentra.<br>
            Un Hub que permanece activo todo el año.
          </p>
          <a href="#" class="btn">Consulta la agenda y planifica tu experiencia</a>

          <div class="final-cta">
            <h3>Tu lugar dentro del Hub define tu experiencia</h3>
            <p style="margin: 20px 0;">Participa como visitante, expositor o partner estratégico y forma parte del centro que conecta a toda la industria.</p>
            <div class="btn-group" style="flex-direction: column; gap: 10px;">
              <a href="#" class="btn">Regístrate como visitante</a>
              <a href="#" class="btn btn-secondary">Participa como expositor</a>
              <a href="#" class="btn btn-secondary">Explora sponsorships</a>
            </div>
            <p style="font-size: 0.7rem; margin-top: 15px;">Cupos y espacios sujetos a disponibilidad.</p>
          </div>
        </div>
      </section>

      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-home', Hub360Home);