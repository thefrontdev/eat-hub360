import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Expositores extends LitElement {
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

    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    h1, h2, h3 { font-family: 'Anton', sans-serif; text-transform: uppercase; font-style: italic; }

    /* --- BENTO GRID: SOLUCIÓN Y AUDIENCIA [cite: 290-310] --- */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin: 60px 0;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px;
      transition: 0.3s;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .card:hover { 
      border-color: var(--primary-deep);
    }

    .card-full { grid-column: span 3; display: flex; align-items: center; gap: 40px; }

    .card h3 { 
      padding: 1rem;
      width: max-content;
      border: 1px solid var(--primary-deep);
      margin-bottom: 15px;
    }

    .card-image {
      min-width: 200px; 
      width: 800px; 
      text-align: center; 
      border: 1px solid var(--primary-blue); 
      padding: 20px;
    }
    .text {
      grid-column: span 3;
      text-align: center;
      margin-top: 40px;
    }
    .audence-content {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: space-between;

      & .image-wapper {
        clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        border: 1px solid #1f1f2e;
        padding: 20px;
        width: 45rem;
        max-width: 50rem;
        height: 45rem;
        max-height: 50rem;
        box-sizing: border-box;

        & .image {
          width: 100%;
          height: 100%;
          background: url('assets/images/19.png') no-repeat center center/cover;
        }
      }

      & .card {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        justify-content: space-between;
        gap: 1.5rem;
        &:not(:last-child) { 
          margin-bottom: 1rem;
        }
        & .title {
          padding: 1rem;
          width: max-content;
          color: var(--primary-deep);
          border: 1px solid var(--primary-deep);
          margin-bottom: 15px;
        }
      }
    }

    .card .title {
      padding: 1rem;
      width: max-content;
      color: var(--primary-deep);
      border: 1px solid var(--primary-deep);
    }

    /* --- TIMELINE DE VALOR --- */
    .value-timeline {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      padding: 60px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .step { 
      position: relative; 
      padding-top: 0.5rem; 
      & .title {
        padding: 1rem;
        width: max-content;
        border: 1px solid var(--primary-deep);
        margin-bottom: 15px;
        clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        background: #0a0a12;
      }
    }
    .step::before { content: ''; position: absolute; top: 0; left: 0; width: 40px; height: 2px; background: var(--neon-cyan); }

    /* --- SECCIÓN FAQ / BARRERAS [cite: 344-353] --- */
    .faq-section { 
      background: rgba(255,255,255,0.02);
      padding: 60px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }
    .faq-item { 
      margin-bottom: 30px;
      border-left: 2px solid var(--primary-deep);
      padding-left: 20px;
    }
    .faq-item strong { 
      display: block;
      margin-bottom: 10px;
      color: var(--primary-light);
    }

    @media (max-width: 768px) {
      .bento-grid, .value-timeline, .card-full { grid-template-columns: 1fr; flex-direction: column; }
      .card-full { grid-column: span 1; }
    }
    @media (width <= 480px) {
      .text {
        grid-column: span 1;
        max-width: 21rem;
        box-sizing: border-box;
      }
      .text-section {
        width: 100%;
      }
      .audence-content { 
        flex-direction: column; 
        & .image-wapper {
          width: 100%;
          height: 20rem;
          max-width: 21rem;
          max-height: 21rem;
          box-sizing: border-box;
        }
      }

      .bento-grid {
        display: flex;
        flex-direction: column;
      }

      .card-full {
        grid-column: span 1;
        box-sizing: border-box;
        max-width: 21rem;
        & h3 {
          width: auto;
        }
        & div {
          width: 100%;
        }
        & .card-image {
          width: 100%;
        }
      }

      .card-image {
        width: 100%;
      }
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
            <source src="assets/videos/expositores.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-grid-overlay"></div>
        <div class="hero-content">
          <h1 class="gradient-text">Exponer en Hub 360 es participar donde la industria toma <span class="highlight">decisiones</span></h1>
          <p class="subheadline">
            Expo Autotransporte Toluca 2026 evoluciona a Hub 360: una plataforma diseñada para conectar marcas con compradores reales.
          </p>
          <p class="credibility">
            No es visibilidad masiva. Es exposición estratégica ante tomadores de decisión y responsables operativos del sector.
          </p>
          <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener">Explorar opciones para expositores</a>
          <p style="font-size: 0.8rem; margin-top: 15px; opacity: 0.6;">Información clara, sin compromiso.</p>
        </div>
      </section>
      <div class="container">
        <section class="bento-grid">
          <div class="card card-full">
            <div>
              <h3>Exponer no debería ser una apuesta</h3>
              <p>Muchas expos generan tráfico, pero no necesariamente oportunidades reales de negocio.<br>
              Leads poco calificados, seguimiento complejo y resultados difíciles de medir son retos comunes para las marcas del sector.</p>
              <p><strong>Hub 360 nace para resolver ese problema.</strong></p>
              <p>Aquí, cada interacción está pensada para conectar a tu marca con el perfil correcto, en el momento adecuado.</p>
            </div>
            <div class="card-image">
                <img src="assets/images/20.png" alt="Expositores" style="width: 100%; height: auto;">
            </div>
          </div>

          <div class="text">
            <div class="audence-content">
              <div class="image-wapper">
                <div class="image"></div>
              </div>
              <div class="text-section">
                <h2>Un Hub diseñado para generar ROI, no solo presencia.</h2>
                <p>Expo Autotransporte Toluca – Hub 360 integra experiencia presencial, comunidad y data para maximizar el valor de tu participación como expositor.<br>
                No se trata solo de estar.<br>
                Se trata de conectar, conversar y convertir</p>
                <div class="card">
                  <p class="title">Audiencia Segmentada</p>
                  <p>Decisores, gerentes y responsables operativos con intención real de compra.</p>
                </div>
                <div class="card">
                  <p class="title">Ecosistema Activo</p>
                  <p>Presencia y visibilidad estratégica antes, durante y después del evento presencial.</p>
                </div>
                <div class="card">
                  <p class="title">Data & Leads</p>
                  <p>Herramientas para capturar y medir interacciones con valor comercial real.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Conecta con quienes realmente influyen en la compra</h2>
          <p>En Hub 360, tu stand se posiciona frente a:</p>
          <div class="bento-grid" style="margin-top: 40px;">
            <div class="card">
              <p class="title">Tomadores de decisión</p>
              <p>CEOs y dueños de flota en búsqueda de soluciones estratégicas.</p>
            </div>
            <div class="card">
              <p class="title">Responsables operativos</p>
              <p>Logística, mantenimiento y compras con necesidades concretas.</p>
            </div>
            <div class="card">
              <p class="title">Aliados Potenciales</p>
              <p>Marcas complementarias y actores clave del ecosistema sectorial.</p>
            </div>
          </div>
          <p style="font-style: italic; color: var(--accent-cyan);">"Menos volumen. Mayor relevancia."</p>
        </section>

        <h2>Más que un stand: una experiencia de negocio.</h2>
        <p>Tu participación como expositor se integra a una experiencia completa:</p>
        <section class="value-timeline">
          <div class="step">
            <p class="title">Antes</p>
            <p>Visibilidad previa y generación de expectativa sobre tu marca.</p>
          </div>
          <div class="step" style="border-color: var(--primary-blue);">
            <p class="title" style="color: var(--primary-deep);">Durante</p>
            <p>Interacciones cara a cara y generación activa de leads calificados.</p>
          </div>
          <div class="step">
            <p class="title">Después</p>
            <p>Seguimiento y continuidad dentro del ecosistema Hub 360.</p>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Resultados que respaldan la experiencia.</h2>
          <p>Marcas líderes del sector ya han utilizado Expo Autotransporte Toluca como plataforma para:</p>
          <div class="bento-grid" style="margin-top: 40px;">
            <div class="card">
              <img src="assets/images/icons/valuable.svg" alt="Valuable">
              <p>Generar oportunidades comerciales reales</p>
            </div>
            <div class="card">
              <img src="assets/images/icons/leader.svg" alt="Leader">
              <p>Posicionarse frente a decisores clave</p>
            </div>
            <div class="card">
              <img src="assets/images/icons/handshake.svg" alt="Handshake">
              <p>Fortalecer relaciones estratégicas</p>
            </div>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Opciones de participación adaptadas a tus objetivos.</h2>
          <p>
            Hub 360 ofrece distintos formatos de exposición, diseñados para alinearse a tus metas comerciales y de posicionamiento.<br>
            Desde espacios de exhibición hasta integraciones estratégicas dentro del ecosistema.
          </p>
          <p style="font-style: italic; margin-bottom: 3rem;">Nuestro equipo te orienta para elegir la mejor opción.</p>
          <a href="https://wa.link/9nxgeo" class="btn btn-secondary" target="_blank" rel="noopener">Solicitar información de stands</a>
        </section>

        <section class="faq-section" id="contacto">
          <div class="container">
            <h2 style="margin-bottom: 40px;">¿Es Hub 360 adecuado para tu marca?</h2>
            <div class="faq-item">
              <strong>¿Qué diferencia a Hub 360 de otras expos?</strong>
              <p>La continuidad del ecosistema, la segmentación de audiencia y el enfoque en negocio real.</p>
            </div>
            <div class="faq-item">
              <strong>¿Cómo se mide el valor de participar?</strong>
              <p>A través de interacciones, leads y visibilidad estratégica cuantificable.</p>
            </div>

            <div style="text-align: center; margin-top: 60px; padding: 40px; border: 1px solid var(--primary-deep);">
              <h3>Hablemos sobre cómo exponer estratégicamente</h3>
              <p>Cada marca tiene objetivos distintos.<br>
              Nuestro equipo te ayudará a definir la forma de participación que genere mayor valor para tu negocio.</p>
              <br>
              <a href="https://wa.link/9nxgeo" class="btn" target="_blank" rel="noopener">Hablar con un asesor</a>
            </div>
          </div>
        </section>

        <footer style="padding: 60px 0; text-align: center; opacity: 0.5; font-size: 0.8rem;">
          <p>Exponer en Expo Autotransporte Toluca 2026 no es ocupar un espacio.<br>
          Es formar parte del Hub que conecta a toda la industria.</p>
        </footer>
        <hub-360-footer></hub-360-footer>
      </div>
    `;
  }
}

customElements.define('hub-360-expositores', Hub360Expositores);