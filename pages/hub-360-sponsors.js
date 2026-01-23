import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Sponsors extends LitElement {
  static styles = css`
    :host {
      --primary-blue: #000ffa;
      --primary-glow: #4d5bff;
      --accent-cyan: #00f3ff;
      --bg-dark: #020205;
      --bg-card: #0a0a12;
      --text-main: #ffffff;
      --text-dim: #a0a0a0;
      
      display: block;
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: 'Roboto', sans-serif;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    h1, h2, h3, h4 { font-family: 'Orbitron', sans-serif; text-transform: uppercase; }

    /* --- HERO SPONSORS [cite: 368-371] --- */
    .hero-sponsors {
      padding: 120px 0 80px;
      text-align: center;
      background: linear-gradient(180deg, rgba(0, 15, 250, 0.15) 0%, transparent 100%);
    }

    .hero-sponsors h1 {
      font-size: clamp(2rem, 5vw, 3.8rem);
      margin-bottom: 25px;
      line-height: 1.1;
    }

    .hero-sponsors p {
      font-size: 1.2rem;
      max-width: 900px;
      margin: 0 auto;
      color: var(--text-dim);
    }

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
    }

    .card:hover {
      border-color: var(--primary-glow);
      box-shadow: 0 0 30px rgba(0, 15, 250, 0.2);
    }

    .card h3 { font-size: 1rem; color: var(--accent-cyan); margin-bottom: 10px; }
    .card p { font-size: 0.9rem; line-height: 1.4; }

    /* --- PLATINUM SECTION [cite: 404-421] --- */
    .platinum-tier {
      background: linear-gradient(90deg, #050510 0%, #0a0a20 100%);
      border: 1px solid var(--primary-blue);
      padding: 32px;
      margin: 100px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      position: relative;
      overflow: hidden;
    }

    .platinum-tier::before {
      content: 'PLATINUM';
      position: absolute;
      top: -20px;
      right: -20px;
      font-family: 'Orbitron';
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
      color: var(--primary-glow);
      font-size: 0.8rem;
    }

    /* --- CTA TECH BUTTON --- */
    .btn-media-kit {
      display: inline-block;
      padding: 18px 40px;
      background: var(--primary-blue);
      color: white;
      text-decoration: none;
      font-weight: 900;
      letter-spacing: 2px;
      border: none;
      clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%);
      transition: 0.3s;
      margin-top: 20px;
    }

    .btn-media-kit:hover {
      box-shadow: 0 0 40px var(--primary-blue);
      transform: translateY(-3px);
    }

    /* --- MODALIDADES [cite: 383-390] --- */
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
    }

    @media (max-width: 900px) {
      .platinum-tier, .bento-benefits { grid-template-columns: 1fr; }
      .platinum-tier { padding: 30px; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="hero-sponsors">
          <h1 class="gradient-text">Impulse su liderazgo dentro del ecosistema del autotransporte</h1>
          <p>Expo Autotransporte Toluca – Hub 360° es más que una expo: es una plataforma de posicionamiento estratégico, generación de negocio y liderazgo sectorial.<br>
          Convertirse en Sponsor o Partner significa integrarse activamente al ecosistema que define el futuro del autotransporte, la logística y la movilidad.</p>
        </section>

        <h2 style="text-align: center; margin-bottom: 40px;">¿Por qué ser Sponsor o Partner?</h2>
        <p style="text-align: center;">
          Las marcas líderes no solo participan, influyen.
        </p>
        <p style="text-align: center;">
          Nuestros esquemas de patrocinio están diseñados para empresas que buscan visibilidad calificada, relacionamiento de alto nivel y retorno estratégico, alineados a objetivos comerciales, institucionales y de marca.
        </p>
        <div class="bento-benefits">
          <div class="card">
            <h3>Exposición</h3>
            <p>Ante decisores, directivos y compradores calificados de la industria.</p>
          </div>
          <div class="card">
            <h3>Posicionamiento</h3>
            <p>Referente de innovación y liderazgo en el sector.</p>
          </div>
          <div class="card">
            <h3>Leads B2B</h3>
            <p>Generación de oportunidades de negocio de alto valor estratégico.</p>
          </div>
          <div class="card">
            <h3>Presencia 360°</h3>
            <p>Omnicanalidad antes, durante y después del evento presencial.</p>
          </div>
        </div>


        <h2 style="text-align: center; margin-bottom: 40px;">Un ecosistema que potencia su inversión</h2>
        <p style="text-align: center;">
          Expo Autotransporte Toluca – Hub 360° conecta a:
        </p>
        <div class="bento-benefits">
          <div class="card">
            <h3>Fabricantes y distribuidores</h3>
          </div>
          <div class="card">
            <h3>Empresas de transporte y flotillas</h3>
          </div>
          <div class="card">
            <h3>Proveedores de tecnología, energía y servicios</h3>
          </div>
          <div class="card">
            <h3>Instituciones, asociaciones y organismos clave</h3>
          </div>
        </div>
        <p style="text-align: center;">Como Sponsor o Partner, su marca se posiciona en los puntos de mayor influencia del recorrido del asistente, maximizando recordación, interacción y conversión.</p>

        <section class="platinum-tier">
          <div>
            <span style="color: var(--primary-glow); font-weight: bold; letter-spacing: 3px;">NIVEL EXCLUSIVO</span>
            <h2>Platinum Sponsor</h2>
            <p style="margin: 20px 0;">El patrocinio Platinum no es publicidad. Es posicionamiento, influencia y generación de oportunidades de alto nivel.</p>
            <a href="#" class="btn-media-kit">Solicitar Información Platinum</a>
          </div>
          <div>
            <h4>¿Qué representa ser Platinum Sponsor?</h4>
            <ul class="platinum-list">
              <li>Liderazgo de pensamiento y posicionamiento premium</li>
              <li>Presencia dominante antes, durante y después del evento</li>
              <li>Asociación directa con la narrativa Hub 360°</li>
              <li>Acceso prioritario a tomadores de decisión del sector</li>
            </ul>
            <p>Este nivel está pensado para organizaciones que influyen, marcan agenda y construyen industria.</p>
          </div>
          <div>
            <h4>Beneficios Estratégicos:</h4>
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
            <div class="tier-box"><h4>Gold</h4></div>
            <div class="tier-box"><h4>Silver</h4></div>
            <div class="tier-box"><h4>Strategic</h4></div>
            <div class="tier-box"><h4>Institutional</h4></div>
          </div>

          <div style="margin-top: 60px; background: #000ffa10; padding: 40px; border-radius: 8px; text-align: center;">
            <h3>Más que visibilidad: impacto medible</h3>
            <p>Nuestro modelo integra Marketing Intelligence y Performance, permitiendo:</p>
            <div class="modalidades-grid">
            <div class="tier-box"><h4>Medición de alcance y engagement</h4></div>
            <div class="tier-box"><h4>Captura y calificación de leads</h4></div>
            <div class="tier-box"><h4>Reportes post-evento con KPIs claros</h4></div>
            <div class="tier-box"><h4>Continuidad comercial posterior al evento</h4></div>
          </div>
          </div>
        </section>

        <h2 style="text-align: center; margin-bottom: 40px;">Sea parte de quienes lideran el cambio</h2>
        <p style="text-align: center;">Las marcas que participan como Sponsors y Partners no solo están presentes:<br>
        marcan agenda, construyen relaciones y generan impacto en la industria.
        </p>

        <section style="text-align: center; padding-bottom: 100px; padding-top: 100px;">
          <h2>Convierta su marca en un actor estratégico del ecosistema.</h2>
          <p style="margin-bottom: 30px;">
            Solicite el Media Kit de Sponsorship & Partnerships y descubra el esquema ideal para sus objetivos.
          </p>
          <a href="#" class="btn-media-kit" style="background: transparent; border: 1px solid var(--primary-blue);">Quiero ser Sponsor / Partner</a>
        </section>
      </div>
    `;
  }
}

customElements.define('hub-360-sponsors', Hub360Sponsors);