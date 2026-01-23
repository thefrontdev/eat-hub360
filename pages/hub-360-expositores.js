import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class Hub360Expositores extends LitElement {
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
    h1, h2, h3 { font-family: 'Orbitron', sans-serif; text-transform: uppercase; }

    /* --- HERO SECTION [cite: 270-281] --- */
    .hero-expositor {
      padding: 100px 0 60px;
      text-align: center;
      background: radial-gradient(circle at top, rgba(0, 15, 250, 0.2), transparent 70%);
    }

    .hero-expositor h1 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      background: linear-gradient(180deg, #fff, var(--primary-glow));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }

    .hero-expositor p { font-size: 1.2rem; max-width: 800px; margin: 0 auto 30px; color: var(--text-dim); }

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
      border-radius: 15px;
      transition: 0.3s;
    }

    .card:hover { border-color: var(--primary-blue); box-shadow: 0 0 20px rgba(0, 15, 250, 0.2); }

    .card-full { grid-column: span 3; display: flex; align-items: center; gap: 40px; }

    .card h3 { color: var(--accent-cyan); margin-bottom: 15px; font-size: 1.2rem; }

    /* --- BOTONES ESTILO TECH --- */
    .btn-neon {
      display: inline-block;
      padding: 15px 35px;
      background: var(--primary-blue);
      color: white;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%);
      box-shadow: 0 0 15px var(--primary-blue);
      transition: 0.3s;
    }

    .btn-neon:hover { transform: scale(1.05); box-shadow: 0 0 25px var(--primary-glow); }

    /* --- TIMELINE DE VALOR [cite: 311-322] --- */
    .value-timeline {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      padding: 60px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .step { position: relative; padding-top: 20px; }
    .step::before { content: ''; position: absolute; top: 0; left: 0; width: 40px; height: 2px; background: var(--accent-cyan); }

    /* --- SECCIÓN FAQ / BARRERAS [cite: 344-353] --- */
    .faq-section { background: rgba(255,255,255,0.02); padding: 60px 0; border-radius: 20px; }
    .faq-item { margin-bottom: 30px; border-left: 2px solid var(--primary-blue); padding-left: 20px; }
    .faq-item strong { display: block; margin-bottom: 10px; color: var(--primary-light); }

    @media (max-width: 768px) {
      .bento-grid, .value-timeline, .card-full { grid-template-columns: 1fr; flex-direction: column; }
      .card-full { grid-column: span 1; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="hero-expositor">
          <h1>Exponer en Hub 360 es participar donde la industria toma decisiones</h1>
          <p>Expo Autotransporte Toluca 2026 evoluciona a Hub 360: una plataforma diseñada para conectar marcas con compradores reales.</p>
          <p>No es visibilidad masiva. Es exposición estratégica ante tomadores de decisión y responsables operativos del sector.</p>
          <a href="#contacto" class="btn-neon">Explorar opciones para expositores</a>
          <p style="font-size: 0.8rem; margin-top: 15px; opacity: 0.6;">Información clara, sin compromiso.</p>
        </section>

        <section class="bento-grid">
          <div class="card card-full">
            <div>
              <h3>Exponer no debería ser una apuesta</h3>
              <p>Muchas expos generan tráfico, pero no necesariamente oportunidades reales de negocio.<br>
              Leads poco calificados, seguimiento complejo y resultados difíciles de medir son retos comunes para las marcas del sector.</p>
              <p><strong>Hub 360 nace para resolver ese problema.</strong></p>
              <p>Aquí, cada interacción está pensada para conectar a tu marca con el perfil correcto, en el momento adecuado.</p>
            </div>
            <div style="min-width: 200px; width: 800px; text-align: center; border: 1px solid var(--primary-blue); padding: 20px;">
                <img src="./../assets/images/20.png" alt="Expositores" style="width: 100%; height: auto;">
            </div>
          </div>

          <div class="text" style="grid-column: span 3; text-align: center; margin-top: 40px;">
            <h2>Un Hub diseñado para generar ROI, no solo presencia.</h2>
            <p>Expo Autotransporte Toluca – Hub 360 integra experiencia presencial, comunidad y data para maximizar el valor de tu participación como expositor.<br>
            No se trata solo de estar.<br>
            Se trata de conectar, conversar y convertir</p>
          </div>
          <div class="card">
            <h3>Audiencia Segmentada</h3>
            <p>Decisores, gerentes y responsables operativos con intención real de compra.</p>
          </div>
          <div class="card">
            <h3>Ecosistema Activo</h3>
            <p>Presencia y visibilidad estratégica antes, durante y después del evento presencial.</p>
          </div>
          <div class="card">
            <h3>Data & Leads</h3>
            <p>Herramientas para capturar y medir interacciones con valor comercial real.</p>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Conecta con quienes realmente influyen en la compra</h2>
          <p>En Hub 360, tu stand se posiciona frente a:</p>
          <div class="bento-grid" style="margin-top: 40px;">
            <div class="card">
              <span style="color: var(--primary-glow)">01.</span>
              <h3>Tomadores de decisión</h3>
              <p>CEOs y dueños de flota en búsqueda de soluciones estratégicas.</p>
            </div>
            <div class="card">
              <span style="color: var(--primary-glow)">02.</span>
              <h3>Responsables operativos</h3>
              <p>Logística, mantenimiento y compras con necesidades concretas.</p>
            </div>
            <div class="card">
              <span style="color: var(--primary-glow)">03.</span>
              <h3>Aliados Potenciales</h3>
              <p>Marcas complementarias y actores clave del ecosistema sectorial.</p>
            </div>
          </div>
          <p style="font-style: italic; color: var(--accent-cyan);">"Menos volumen. Mayor relevancia."</p>
        </section>

        <h2>Más que un stand: una experiencia de negocio.</h2>
        <p>Tu participación como expositor se integra a una experiencia completa:</p>
        <section class="value-timeline">
          <div class="step">
            <h4>Antes</h4>
            <p>Visibilidad previa y generación de expectativa sobre tu marca.</p>
          </div>
          <div class="step" style="border-color: var(--primary-blue);">
            <h4 style="color: var(--primary-glow);">Durante</h4>
            <p>Interacciones cara a cara y generación activa de leads calificados.</p>
          </div>
          <div class="step">
            <h4>Después</h4>
            <p>Seguimiento y continuidad dentro del ecosistema Hub 360.</p>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Resultados que respaldan la experiencia.</h2>
          <p>Marcas líderes del sector ya han utilizado Expo Autotransporte Toluca como plataforma para:</p>
          <div class="bento-grid" style="margin-top: 40px;">
            <div class="card">
              <span style="color: var(--primary-glow)">01.</span>
              <h3>Generar oportunidades comerciales reales</h3>
            </div>
            <div class="card">
              <span style="color: var(--primary-glow)">02.</span>
              <h3>Posicionarse frente a decisores clave</h3>
            </div>
            <div class="card">
              <span style="color: var(--primary-glow)">03.</span>
              <h3>Fortalecer relaciones estratégicas</h3>
            </div>
          </div>
        </section>

        <section style="margin: 80px 0; text-align: center;">
          <h2>Opciones de participación adaptadas a tus objetivos.</h2>
          <p>
            Hub 360 ofrece distintos formatos de exposición, diseñados para alinearse a tus metas comerciales y de posicionamiento.<br>
            Desde espacios de exhibición hasta integraciones estratégicas dentro del ecosistema.
          </p>
          <p style="font-style: italic; color: var(--accent-cyan);">Nuestro equipo te orienta para elegir la mejor opción.</p>
          <a href="#" class="btn-neon">Solicitar información de stands</a>
        </section>

        <section class="faq-section" id="contacto">
          <div class="container">
            <h2 style="margin-bottom: 40px;">¿Es Hub 360 adecuado para tu marca?</h2>
            <div class="faq-item">
              <strong>¿Qué diferencia a Hub 360 de otras expos?</strong>
              <p>La continuidad del ecosistema, la segmentación de audiencia y el enfoque en negocio real[cite: 351].</p>
            </div>
            <div class="faq-item">
              <strong>¿Cómo se mide el valor de participar?</strong>
              <p>A través de interacciones, leads y visibilidad estratégica cuantificable.</p>
            </div>

            <div style="text-align: center; margin-top: 60px; padding: 40px; border: 1px solid var(--primary-blue);">
              <h3>Hablemos sobre cómo exponer estratégicamente</h3>
              <p>Cada marca tiene objetivos distintos.<br>
              Nuestro equipo te ayudará a definir la forma de participación que genere mayor valor para tu negocio.</p>
              <br>
              <a href="#" class="btn-neon">Hablar con un asesor</a>
            </div>
          </div>
        </section>

        <footer style="padding: 60px 0; text-align: center; opacity: 0.5; font-size: 0.8rem;">
          <p>Exponer en Expo Autotransporte Toluca 2026 no es ocupar un espacio.<br>
          Es formar parte del Hub que conecta a toda la industria.</p>
        </footer>
      </div>
    `;
  }
}

customElements.define('hub-360-expositores', Hub360Expositores);