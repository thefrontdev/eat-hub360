import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Institucional extends LitElement {
  static styles = css`
    :host {
      /* --- MISMAS VARIABLES PARA CONSISTENCIA --- */
      --primary-deep: #000ffa;
      --primary-light: #4d5bff;
      --neon-cyan: #00f3ff;
      --bg-dark: #020205;
      --bg-card: #0a0a12;
      --text-main: #ffffff;
      --text-muted: #a0a0a0;
      
      --font-display: 'Anton', sans-serif;
      --font-body: 'Nunito', sans-serif;

      display: block;
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-body);
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
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: 20px;
      text-shadow: 0 0 20px rgba(0, 15, 250, 0.4);
    }

    .hero-inst p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
      color: white;
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
      border-radius: 12px;
      padding: 40px 30px;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .partner-card:hover {
      border-color: var(--primary-deep);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 15, 250, 0.1);
    }

    /* Efecto de borde superior neón */
    .partner-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 4px;
      background: var(--primary-deep);
      opacity: 0.5;
    }

    .partner-logo-area img {
      max-width: auto;
      max-height: 10rem;
      transition: 0.3s;
      border-radius: 8px;
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
      border: 1px solid var(--neon-cyan);
      color: var(--neon-cyan);
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
      <div class="container">
        <section class="hero-inst">
          <h1>Ecosistema Institucional</h1>
          <p>El autotransporte no se construye en solitario. Hub 360 integra a los organismos y comunidades que defienden, impulsan y dan vida al sector.</p>
        </section>

        <section style="padding: 40px 0;">
          <h2 style="text-align: center; font-size: 1.5rem; margin-bottom: 10px;">Aliados Estratégicos Confirmados</h2>
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
          <a href="mailto:alianzas@hub360.com" class="btn">Colabora con el Hub</a>
        </div>
      </div>
      <hub-360-footer></hub-360-footer>
    `;
  }
}

customElements.define('hub-360-institucional', Hub360Institucional);