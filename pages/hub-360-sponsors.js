import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Sponsors extends LitElement {
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
      display: inline-block;
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

    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    h1, h2, h3, h4 { font-family: 'Anton', sans-serif; text-transform: uppercase; font-style: italic; }

    /* --- BENTO GRID: BENEFICIOS [cite: 372-377] --- */
    .bento-benefits {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 80px;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 25px;
      border-radius: 4px;
      position: relative;
      transition: 0.4s ease;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .card:hover {
      border-color: var(--primary-deep);
      & .title {
        color: var(--primary-deep);
      }
    }

    .card .title {
      transition: 0.4s ease; 
      font-size: 1.125rem; 
      color: var(--text-muted); 
      margin-bottom: 10px; 
      font-weight: 600;
    }
    .card p { font-size: 1rem; line-height: 1.4; }

    /* --- PLATINUM SECTION [cite: 404-421] --- */
    .platinum-tier {
      background: linear-gradient(90deg, #050510 0%, #0a0a20 100%);
      border: 1px solid var(--primary-deep);
      padding: 32px;
      margin: 100px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      position: relative;
      overflow: hidden;
      clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    }

    .platinum-tier::before {
      content: 'PLATINUM';
      position: absolute;
      top: -20px;
      right: -20px;
      font-family: var(--font-display);
      font-size: 8rem;
      opacity: 0.03;
      font-weight: 900;
    }

    .platinum-list { list-style: none; padding: 0; }
    .platinum-list li {
      margin-bottom: 15px;
      padding-left: 25px;
      position: relative;
    }
    .platinum-list li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: var(--primary-deep);
      font-size: 0.8rem;
    }

    .modalidades-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      text-align: center;
      margin-top: 40px;
    }

    .tier-box {
      border: 1px solid rgba(255,255,255,0.1);
      padding: 20px;
      background: rgba(255,255,255,0.02);
      transition: 0.4s ease;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);

      & h4 {
        font-size: 1.5rem;
      }

      & .btn {
        display: inline-block;
        padding: 0.5rem;
      }

      &.gold {
        color: #ffd700;
        border-color: #ffd700;
      }

      &.silver {
        color: #c0c0c0;
        border-color: #c0c0c0;
      }

      &.impact {
        color: var(--text-muted);
        font-size: 1.125rem;
        font-weight: 600;
        border-color: var(--text-muted);
        &:hover {
          border-color: var(--primary-deep);
          color: var(--primary-deep);
        }
      }
    }

    @media (max-width: 900px) {
      .platinum-tier, .bento-benefits { grid-template-columns: 1fr; }
      .platinum-tier { padding: 30px; }
    }
  `;

  firstUpdated() {
  const hash = window.location.hash;

  const [route, queryString] = hash.split('?');
  console.log(route, queryString);
  const section = queryString.split('=')[1];

  if (section) {
    const el = this.shadowRoot.getElementById(section);

    if (el) {
      el.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.scrollBy({
        top: -112,
        behavior: 'smooth'
      });
    }
  }
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
          <span>Sponsors & Partners Ecosystem</span>
        </div>
          <h1 class="gradient-text">Impulse su liderazgo dentro del ecosistema del <span class="highlight">autotransporte</span></h1>
          <p class="subheadline">Expo Autotransporte Toluca – Hub 360° es más que una expo: es una plataforma de posicionamiento estratégico, generación de negocio y liderazgo sectorial.<br>
          Convertirse en Sponsor o Partner significa integrarse activamente al ecosistema que define el futuro del autotransporte, la logística y la movilidad.</p>
        </div>
      </section>
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 40px;">¿Por qué ser Sponsor o Partner?</h2>
        <p style="text-align: center;">
          Las marcas líderes no solo participan, influyen.
        </p>
        <p style="text-align: center;">
          Nuestros esquemas de patrocinio están diseñados para empresas que buscan visibilidad calificada, relacionamiento de alto nivel y retorno estratégico, alineados a objetivos comerciales, institucionales y de marca.
        </p>
        <div class="bento-benefits">
          <div class="card">
            <p class="title">Exposición</p>
            <p>Ante decisores, directivos y compradores calificados de la industria.</p>
          </div>
          <div class="card">
            <p class="title">Posicionamiento</p>
            <p>Referente de innovación y liderazgo en el sector.</p>
          </div>
          <div class="card">
            <p class="title">Leads B2B</p>
            <p>Generación de oportunidades de negocio de alto valor estratégico.</p>
          </div>
          <div class="card">
            <p class="title">Presencia 360°</p>
            <p>Omnicanalidad antes, durante y después del evento presencial.</p>
          </div>
        </div>


        <h2 style="text-align: center; margin-bottom: 40px;">Un ecosistema que potencia su inversión</h2>
        <p style="text-align: center;">
          Expo Autotransporte Toluca – Hub 360° conecta a:
        </p>
        <div class="bento-benefits">
          <div class="card">
            <p class="title">Fabricantes y distribuidores</p>
          </div>
          <div class="card">
            <p class="title">Empresas de transporte y flotillas</p>
          </div>
          <div class="card">
            <p class="title">Proveedores de tecnología, energía y servicios</p>
          </div>
          <div class="card">
            <p class="title">Instituciones, asociaciones y organismos clave</p>
          </div>
        </div>
        <p style="text-align: center;">Como Sponsor o Partner, su marca se posiciona en los puntos de mayor influencia del recorrido del asistente, maximizando recordación, interacción y conversión.</p>

        <section class="platinum-tier" id="platinum">
          <div>
            <span style="color: var(--primary-deep); font-weight: bold; letter-spacing: 3px; border: 1px solid var(--primary-deep); padding: 0.5rem;">NIVEL EXCLUSIVO</span>
            <h2>Platinum Sponsor</h2>
            <p style="margin: 20px 0;">El patrocinio Platinum no es publicidad. Es posicionamiento, influencia y generación de oportunidades de alto nivel.</p>
            <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener" style="display: inline-block;">Solicitar Información</a>
          </div>
          <div>
            <p>¿Qué representa ser Platinum Sponsor?</p>
            <ul class="platinum-list">
              <li>Liderazgo de pensamiento y posicionamiento premium</li>
              <li>Presencia dominante antes, durante y después del evento</li>
              <li>Asociación directa con la narrativa Hub 360°</li>
              <li>Acceso prioritario a tomadores de decisión del sector</li>
            </ul>
            <p>Este nivel está pensado para organizaciones que influyen, marcan agenda y construyen industria.</p>
          </div>
          <div>
            <p>Beneficios Estratégicos:</p>
            <ul class="platinum-list">
              <li>Naming rights en espacios clave del evento.</li>
              <li>Máxima exposición en comunicación digital y onsite.</li>
              <li>Participación activa en foros y contenidos.</li>
              <li>Acceso prioritario a tomadores de decisión.</li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 100px;">
          <h2 style="text-align: center;">Esquemas de Partnership</h2>
          <p style="text-align: center; color: var(--text-dim);">Cada nivel está diseñado bajo un enfoque 360°, combinando branding, experiencias, contenido, data y relaciones estratégicas.</p>
          
          <div class="modalidades-grid">
            <div class="tier-box gold">
              <h4>Gold</h4>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Solicitar Información</a>
            </div>
            <div class="tier-box silver">
              <h4>Silver</h4>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Solicitar Información</a>
            </div>
            <div class="tier-box">
              <h4>Strategic</h4>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Solicitar Información</a>
            </div>
            <div class="tier-box">
              <h4>Institutional</h4>
              <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Solicitar Información</a>
            </div>
          </div>

          <div style="margin-top: 60px; background: #000ffa10; padding: 40px; text-align: center; background: rgba(255,255,255,0.02); transition: 0.4s ease; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);">
            <h3>Más que visibilidad: impacto medible</h3>
            <p>Nuestro modelo integra Marketing Intelligence y Performance, permitiendo:</p>
            <div class="modalidades-grid">
            <div class="tier-box impact"><p>Medición de alcance y engagement</p></div>
            <div class="tier-box impact"><p>Captura y calificación de leads</p></div>
            <div class="tier-box impact"><p>Reportes post-evento con KPIs claros</p></div>
            <div class="tier-box impact"><p>Continuidad comercial posterior al evento</p></div>
          </div>
          </div>
        </section>

        <h2 style="text-align: center; margin-bottom: 40px;">Sea parte de quienes lideran el cambio</h2>
        <p style="text-align: center;">Las marcas que participan como Sponsors y Partners no solo están presentes:<br>
        marcan agenda, construyen relaciones y generan impacto en la industria.
        </p>
        <image-carousel type="partners"></image-carousel>

        <section style="text-align: center; padding-bottom: 100px; padding-top: 100px;">
          <h2>Convierta su marca en un actor estratégico del ecosistema.</h2>
          <p style="margin-bottom: 30px;">
            Solicite el Media Kit de Sponsorship & Partnerships y descubra el esquema ideal para sus objetivos.
          </p>
          <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener">Quiero ser Sponsor / Partner</a>
        </section>
      </div>
      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-sponsors', Hub360Sponsors);