import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Institucional extends LitElement {
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

    h1, h2, h3 { font-family: var(--font-display); text-transform: uppercase; margin: 0; font-style: italic; }
    p { line-height: 1.6; color: var(--text-muted); }

    /* --- HERO INSTITUCIONAL --- */
    .hero-inst {
      padding: 120px 20px 80px;
      text-align: center;
      background: radial-gradient(circle at top, rgba(0, 15, 250, 0.15), transparent 70%);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .hero-inst h1 {
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

    .hero-inst p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
      color: white;
    }

    .section-header {
      & .line {
        width: 80px;
        height: 4px;
        background: var(--primary-deep);
        clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        margin: 0 auto 2rem;
      }
    }

    /* --- GRID DE ALIANZAS --- */
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 60px;
    }

    .partner-card {
      background: var(--bg-card);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 40px 30px;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      border: 1px solid var(--text-muted);
    }

    .partner-card:hover {
      border-color: var(--primary-deep);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 15, 250, 0.1);
    }



    .partner-logo-area img {
      max-width: auto;
      max-height: 10rem;
      transition: 0.3s;
      border: 1px solid var(--primary-deep);
      margin-bottom: 1rem;
    }
    
    .partner-card:hover .partner-logo-area img {
      transform: scale(1.1);
      box-shadow: 0 0 20px var(--primary-deep);
    }

    .partner-card h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: white;
    }

    .segment-tag {
      display: inline-block;
      padding: 5px 12px;
      border: 1px solid var(--primary-deep);
      color: var(--primary-deep);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 20px;
      margin-bottom: 15px;
    }

    /* --- POR QUÉ UNIRSE --- */
    .join-section {
      padding: 80px 20px;
      text-align: center;
    }

    .benefits-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
      margin-top: 40px;
    }

    .benefit-item {
      max-width: 300px;
      text-align: left;
      padding: 1rem;
      border-left: 2px solid var(--primary-deep);
    }

    .benefit-item h4 { color: var(--primary-light); margin-bottom: 10px; }

    /* --- CTA --- */
    .cta-box {
      margin: 60px auto;
      padding: 40px;
      background: linear-gradient(90deg, var(--bg-card) 0%, rgba(0, 15, 250, 0.1) 100%);
      border-left: 4px solid var(--primary-deep);
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .btn {
      padding: 12px 30px;
      background: var(--primary-deep);
      color: white;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      clip-path: polygon(10px 0, 100% 0, 100% 70%, calc(100% - 10px) 100%, 0 100%, 0 30%);
      transition: 0.3s;
    }
    .btn:hover { background: var(--primary-light); }

    @media (max-width: 768px) {
      .cta-box { flex-direction: column; text-align: center; }
      .partner-logo-area img { filter: none; } /* En móvil mostrar color siempre */
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
          <h1 class="gradient-text">Ecosistema <span class="highlight">Institucional</span></h1>
          <p class="subheadline">
            El autotransporte no se construye en solitario. Hub 360 integra a los organismos y comunidades que defienden, impulsan y dan vida al sector.
          </p>
        </div>
      </section>
      <div class="container">
        <section style="padding: 40px 0;">
          <div class="section-header">
            <h2 style="text-align: center; font-size: 1.5rem; margin-bottom: 10px;">Aliados Estratégicos Confirmados</h2>
            <div class="line"></div>
            </div>
          <div class="partners-grid">
            
            <div class="partner-card">
              <span class="segment-tag">Representación Gremial y Normativa</span>
              <div class="partner-logo-area">
                <img src="assets/images/Canacar.jpeg" alt="Logo CANACAR"> 
              </div>
              <h3>CANACAR</h3>
              <p>
                La Cámara Nacional del Autotransporte de Carga es el organismo rector que representa los intereses generales de la industria del transporte de carga en México. Su participación en Hub 360 garantiza un vínculo directo con la agenda normativa, la profesionalización y la defensa del transportista.
              </p>
            </div>

            <div class="partner-card">
              <span class="segment-tag">Cultura y Comunidad Operativa</span>
              <div class="partner-logo-area">
                <img src="assets/images/FiestaTrokera.jpeg" alt="Logo Fiesta Trokera">
              </div>
              <h3>Fiesta Trokera</h3>
              <p>
                Más que un medio, es el corazón de la comunidad. Fiesta Trokera conecta con el lado humano y apasionado del sector, representando la voz de los operadores y la cultura del camión. Su alianza aporta el pulso real de la carretera al ecosistema Hub 360.
              </p>
            </div>

          </div>
        </section>

        <section class="join-section">
          <h2>Impacto Sectorial</h2>
          <p>La colaboración institucional fortalece la cadena de valor.</p>
          
          <div class="benefits-list">
            <div class="benefit-item">
              <h4>01. Representación</h4>
              <p>Un espacio donde las asociaciones dialogan directamente con la industria y el gobierno.</p>
            </div>
            <div class="benefit-item">
              <h4>02. Profesionalización</h4>
              <p>Impulso conjunto a la capacitación y mejora de condiciones para el operador.</p>
            </div>
            <div class="benefit-item">
              <h4>03. Visibilidad</h4>
              <p>Posicionamiento de agendas clave ante tomadores de decisión y medios.</p>
            </div>
          </div>
        </section>

        <div class="cta-box">
          <div>
            <h3>¿Representas a una Institución u Organismo?</h3>
            <p style="margin: 0;">Súmate a la mesa donde se decide el futuro del autotransporte.</p>
          </div>
          <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener">Colabora con el Hub</a>
        </div>
      </div>
      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-institucional', Hub360Institucional);