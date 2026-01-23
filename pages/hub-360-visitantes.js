import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Visitantes extends LitElement {
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
    h1, h2, h3, h4 { font-family: 'Orbitron', sans-serif; text-transform: uppercase; margin: 0; }

    /* --- HERO VISITANTES [cite: 425-428] --- */
    .hero-visitantes {
      padding: 100px 0 60px;
      text-align: center;
      background: radial-gradient(circle at center, rgba(0, 15, 250, 0.15) 0%, transparent 70%);
    }

    .hero-visitantes h1 {
      font-size: clamp(2rem, 4.5vw, 3.5rem);
      margin-bottom: 20px;
      background: linear-gradient(180deg, #fff, var(--primary-glow));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-visitantes p {
      font-size: 1.2rem;
      max-width: 850px;
      margin: 0 auto 30px;
      color: var(--text-dim);
      line-height: 1.6;
    }

    /* --- BENTO: POR QUÉ VISITAR [cite: 429-435] --- */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 40px 0;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 12px;
      transition: 0.3s;
    }

    .card:hover { border-color: var(--primary-blue); transform: translateY(-5px); }
    .card h3 { color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 15px; }

    /* --- SEGMENTACIÓN DE PERFILES [cite: 436-439] --- */
    .profiles-section {
      padding: 60px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .profile-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 25px;
      justify-content: center;
    }

    .tag {
      padding: 8px 16px;
      border: 1px solid var(--primary-blue);
      font-size: 0.8rem;
      text-transform: uppercase;
      background: rgba(0, 15, 250, 0.1);
    }

    /* --- RECORRIDO 360 (TIMELINE) [cite: 440-447] --- */
    .journey-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin: 50px 0;
    }

    .journey-item {
      text-align: center;
      padding: 20px;
      border-bottom: 3px solid var(--primary-blue);
      background: linear-gradient(to bottom, transparent, rgba(0, 243, 255, 0.05));
    }

    .journey-item h4 { font-size: 0.9rem; margin-bottom: 10px; }
    .journey-item p { font-size: 0.8rem; color: var(--text-dim); }

    /* --- BENEFICIOS [cite: 448-452] --- */
    .benefits-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 60px 0;
    }

    .benefit {
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }

    .benefit-icon {
      color: var(--accent-cyan);
      font-weight: bold;
    }

    /* --- CTA TECH --- */
    .cta-container {
      text-align: center;
      padding: 80px 0;
      background: rgba(0, 15, 250, 0.05);
      border-radius: 20px;
      margin-bottom: 80px;
    }

    .btn-visitante {
      display: inline-block;
      padding: 20px 50px;
      background: var(--primary-blue);
      color: white;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
      clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%);
      transition: 0.3s;
      box-shadow: 0 0 20px var(--primary-blue);
    }

    .btn-visitante:hover { transform: scale(1.05); box-shadow: 0 0 40px var(--primary-glow); }

    @media (max-width: 768px) {
      .bento-grid, .journey-grid, .benefits-list { grid-template-columns: 1fr; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="hero-visitantes">
          <h1>Donde los líderes del autotransporte toman decisiones</h1>
          <p>Expo Autotransporte Toluca – Hub 360° es el punto de encuentro para <strong>profesionales, directivos y tomadores de decisión</strong> que buscan soluciones reales, innovación aplicada y relaciones de alto valor dentro del ecosistema del autotransporte, la logística y la movilidad en México.</p>
          <p>Aquí no solo se asiste a una expo: <strong>se accede a un ecosistema diseñado para generar conocimiento, oportunidades y crecimiento.</strong></p>
        </section>

        <section>
          <h2 style="text-align: center;">¿Por qué visitar Expo Hub 360°?</h2>
          <div class="bento-grid">
            <div class="card">
              <h3>Marcas Líderes</h3>
              <p>Concentramos a los actores más influyentes del sector en un solo espacio.</p>
            </div>
            <div class="card">
              <h3>Innovación Aplicada</h3>
              <p>Tecnologías y soluciones reales para retos operativos inmediatos.</p>
            </div>
            <div class="card">
              <h3>Contenido de Valor</h3>
              <p>Visión de futuro y formación especializada para profesionales.</p>
            </div>
            <div class="card">
              <h3>Networking de Nivel</h3>
              <p>Conexiones estratégicas con quienes realmente mueven la industria.</p>
            </div>
          </div>
        </section>

        <section class="profiles-section">
          <h2 style="text-align: center;">¿A quién está dirigido?</h2>
          <p style="text-align: center; color: var(--text-dim);">Si participa en el ecosistema del autotransporte, este es su espacio.</p>
          <div class="profile-tags">
            <span class="tag">Directores de Logística</span>
            <span class="tag">Dueños de Flotillas</span>
            <span class="tag">Gerentes de Compras</span>
            <span class="tag">Mantenimiento y Operaciones</span>
            <span class="tag">Instituciones y Organismos</span>
          </div>
        </section>

        <section>
          <h2 style="text-align: center; margin-top: 40px;">Una experiencia 360° diseñada para ti</h2>
          <div class="journey-grid">
            <div class="journey-item">
              <h4>Zona de Exposición</h4>
              <p>Contacto directo con fabricantes.</p>
            </div>
            <div class="journey-item">
              <h4>Pabellones Temáticos</h4>
              <p>Sustentabilidad y tecnología.</p>
            </div>
            <div class="journey-item">
              <h4>Foros y Conferencias</h4>
              <p>Conocimiento práctico y tendencias.</p>
            </div>
            <div class="journey-item">
              <h4>Networking</h4>
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

        <section class="cta-container" id="registro">
          <h2>Más que información: decisiones estratégicas</h2>
          <p style="margin-bottom: 40px; color: var(--text-dim); max-width: 600px; margin-left: auto; margin-right: auto;">
            Expo Hub 360° no es un evento informativo, es una plataforma de toma de decisiones.<br>
            Aquí se generan conversaciones, acuerdos y relaciones que trascienden el evento.
          </p>
          <a href="#" class="btn-visitante">Regístrese y forme parte del ecosistema <br> que está transformando el autotransporte.</a>
          <p>Asegure su acceso como visitante y viva la experiencia Expo Autotransporte Toluca – Hub 360°</p>
        </section>
      </div>
    `;
  }
}

customElements.define('hub-360-visitantes', Hub360Visitantes);