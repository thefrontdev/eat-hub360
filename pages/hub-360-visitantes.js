import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Visitantes extends LitElement {
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
          background-image: linear-gradient(to bottom, transparent, var(--primary-deep));
          width: 1px;
          height: 2rem;
        }
        & span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          color: var(--primary-deep);
        }
      }

      & .subheadline, .credibility {
        font-size: 1rem;
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
        & strong {
          color: var(--primary-light);
        }
      }

      & .credibility {
        border: none;
        padding: 0;
        margin-top: 0;
        margin-bottom: 2.5rem;
      }
    }

    .container { 
      max-width: 1200px; 
      margin: 0 auto; 
      padding: 0 20px; 
    }
    h1, h2, h3, h4 { 
      font-family: 'Anton', sans-serif; 
      text-transform: uppercase; 
      margin: 0; 
      font-style: italic; 
    }
    


    .hero-visitantes {
      padding: 100px 0 60px;
      text-align: center;
      background: radial-gradient(circle at center, rgba(0, 15, 250, 0.15) 0%, transparent 70%);
    }

    /* --- BENTO: POR QUÉ VISITAR [cite: 429-435] --- */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin: 40px 0;
    }

    .card {
      background: linear-gradient(142deg, var(--primary-light-40), var(--bg-dark-40), var(--primary-light-40));
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px;
      transition: 0.3s;
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .card:hover { border-color: var(--primary-deep); transform: translateY(-5px); }
    .card .title { 
      color: var(--primary-deep); 
      font-size: 1.1rem; margin-bottom: 15px;
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--primary-deep);
      max-width: fit-content; 
    }

    /* --- SEGMENTACIÓN DE PERFILES [cite: 436-439] --- */
    .profiles-section {
      padding: 60px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      gap: 2rem;
      align-items: stretch;
      justify-content: space-between;
    }

    .info {
      width: 100%;
    }

    .profile-tags {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 25px;
      justify-content: center;
    }

    .tag {
      padding: 1rem 2rem;
      border: 1px solid var(--primary-blue);
      font-size: 1.125rem;
      text-transform: uppercase;
      background: #0a0a0f;
      border: 1px solid #000ffa40;
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: var(--primary-deep);
        background: #000ffa40;
      }
    }

    .profile-image {
      width: max-content;
      height: max-content;
      padding: 1rem;
      border: 1px solid #000ffa40;
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: var(--primary-deep);
        background: #000ffa40;

        & img {
          filter: grayscale(0);
        }
      }

      & img {
        height: 100%;
        object-fit: cover;
        margin: auto;
        clip-path: 
          polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        filter: grayscale(1);
        transition: all 0.3s ease-in-out;
      }
    }

    /* --- RECORRIDO 360 (TIMELINE) [cite: 440-447] --- */
    .journey-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin: 50px 0;
    }

    .journey-item {
      padding: 20px;
      border: 1px solid #000ffa33;
      background: linear-gradient(to bottom, transparent, #0a0a0f);
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);

      & .image-wrapper {
        width: 100%;
        max-width: 1.5rem;
        height: 100%;
        max-height: 1.5rem;
        padding: 0.5rem;
        background: #000ffa33;
        margin-left: auto;
        & img {
          opacity: 0.5;
        }
      }

      &:hover {
        border-color: var(--primary-deep);
        & .image-wrapper {
          background: #000ffa80;
          & img {
            opacity: 1;
          }
        }
      }
      
      & .title { 
        font-size: 1.1rem; 
        color: var(--primary-deep);
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--primary-deep);
      }
    }

    .journey-item p { font-size: 1rem; color: var(--text-muted); }

    /* --- BENEFICIOS [cite: 448-452] --- */
    .benefits-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      margin: 60px 0;
    }

    .benefit {
      display: flex;
      align-items: baseline;
      gap: 15px;
      background: #0a0a0f;
      border: 1px solid #000ffa33;
      padding: 1rem;
      clip-path: 
        polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      transition: all 0.3s ease-in-out;
    }

    .benefit-icon {
      color: var(--primary-deep);
      font-weight: bold;
    }

    /* --- CTA TECH --- */
    .cta-container {
      text-align: center;
      padding: 80px 0;
      background: rgba(0, 15, 250, 0.05);
    }

    .btn-visitante {
      display: inline-block;
      padding: 20px 50px;
      background: var(--primary-deep);
      color: white;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
      clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%);
      transition: 0.3s;
      box-shadow: 0 0 20px var(--primary-deep);
    }

    .btn-visitante:hover { transform: scale(1.05); box-shadow: 0 0 40px var(--primary-glow); }

    @media (max-width: 768px) {
      .bento-grid, .journey-grid, .benefits-list { grid-template-columns: 1fr; }
    }
  `;

  render() {
    return html`
      <nav-menu></nav-menu>
      <section class="hero">
        <div class="hero-image-overlay">
          <div class="gradient"></div>
          <div class="blend"></div>
          <video autoplay muted loop playsinline>
            <source src="assets/videos/visitantes.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-grid-overlay"></div>
        <div class="hero-content">
          <h1 class="gradient-text">Donde los líderes del autotransporte toman <span class="highlight">decisiones</span></h1>
          <p class="subheadline">
            Expo Autotransporte Toluca – Hub 360° es el punto de encuentro para <strong>profesionales, directivos y tomadores de decisión</strong> que buscan soluciones reales, innovación aplicada y relaciones de alto valor dentro del ecosistema del autotransporte, la logística y la movilidad en México.
          </p>
          <p class="credibility">
            Aquí no solo se asiste a una expo: <strong>se accede a un ecosistema diseñado para generar conocimiento, oportunidades y crecimiento.</strong>
          </p>
        </div>
      </section>
      <div class="container">
        <section>
          <h2 style="text-align: center;">¿Por qué visitar Expo Hub 360°?</h2>
          <div class="bento-grid">
            <div class="card">
              <p class="title">Marcas Líderes</p>
              <p>Concentramos a los actores más influyentes del sector en un solo espacio.</p>
            </div>
            <div class="card">
              <p class="title">Innovación Aplicada</p>
              <p>Tecnologías y soluciones reales para retos operativos inmediatos.</p>
            </div>
            <div class="card">
              <p class="title">Contenido de Valor</p>
              <p>Visión de futuro y formación especializada para profesionales.</p>
            </div>
            <div class="card">
              <p class="title">Networking de Nivel</p>
              <p>Conexiones estratégicas con quienes realmente mueven la industria.</p>
            </div>
          </div>
        </section>

        <section class="profiles-section">
          <div class="info">
            <h2>¿A quién está dirigido?</h2>
            <p>Si participa en el ecosistema del autotransporte, este es su espacio.</p>
            <div class="profile-tags">
              <span class="tag">Directores de Logística</span>
              <span class="tag">Dueños de Flotillas</span>
              <span class="tag">Gerentes de Compras</span>
              <span class="tag">Mantenimiento y Operaciones</span>
              <span class="tag">Instituciones y Organismos</span>
            </div>
          </div>
          <div class="profile-image">
            <img src="assets/images/operativos.png" alt="Perfiles de Visitantes Expo Hub 360">
          </div>
        </section>

        <section>
          <h2 style="text-align: center; margin-top: 40px;">Una experiencia 360° diseñada para ti</h2>
          <div class="journey-grid">
            <div class="journey-item">
              <div class="image-wrapper">
                <img src="assets/images/icons/hub.svg">
              </div>
              <p class="title">Zona de Exposición</p>
              <p>Contacto directo con fabricantes.</p>
            </div>
            <div class="journey-item">
              <div class="image-wrapper">
                <img src="assets/images/icons/innovation.svg">
              </div>
              <p class="title">Pabellones Temáticos</p>
              <p>Sustentabilidad y tecnología.</p>
            </div>
            <div class="journey-item">
              <div class="image-wrapper">
                <img src="assets/images/icons/forum.svg">
              </div>
              <p class="title">Foros y Conferencias</p>
              <p>Conocimiento práctico y tendencias.</p>
            </div>
            <div class="journey-item">
              <div class="image-wrapper">
                <img src="assets/images/icons/component_exchange.svg">
              </div>
              <p class="title">Networking</p>
              <p>Alianzas que trascienden el evento.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style="text-align: center;">Beneficios Clave</h2>
          <div class="benefits-list">
            <div class="benefit">
              <span class="benefit-icon">✔</span>
              <p>Acceso a soluciones para retos operativos y estratégicos.</p>
            </div>
            <div class="benefit">
              <span class="benefit-icon">✔</span>
              <p>Comparación directa entre proveedores líderes.</p>
            </div>
            <div class="benefit">
              <span class="benefit-icon">✔</span>
              <p>Actualización sobre normativas e innovación.</p>
            </div>
            <div class="benefit">
              <span class="benefit-icon">✔</span>
              <p>Relacionamiento con decisores del sector.</p>
            </div>
            <div class="benefit">
              <span class="benefit-icon">✔</span>
              <p>Visión integral del presente y futuro del autotransporte en México.</p>
            </div>
          </div>
        </section>
      </div>
      <section class="cta-container" id="registro">
        <h2>Más que información: decisiones estratégicas</h2>
        <p style="margin-bottom: 40px; color: var(--text-dim); max-width: 600px; margin-left: auto; margin-right: auto;">
          Expo Hub 360° no es un evento informativo, es una plataforma de toma de decisiones.<br>
          Aquí se generan conversaciones, acuerdos y relaciones que trascienden el evento.
        </p>
        <a href="https://forms.gle/oXoKGdyvTL7rowvU6" class="btn-visitante" target="_blank" rel="noopener">Regístrese y forme parte del ecosistema <br> que está transformando el autotransporte.</a>
        <p>Asegure su acceso como visitante y viva la experiencia Expo Autotransporte Toluca – Hub 360°</p>
      </section>
      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-visitantes', Hub360Visitantes);