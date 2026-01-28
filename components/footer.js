import { LitElement, html, css } from './../assets/js/lit-core.min.js';
export class Footer extends LitElement {
  static styles = css`
    :host {
      --primary-deep: #000ffa; /* Color solicitado */
      --primary-light: #4d5bff; /* Variación para legibilidad sobre negro */
      --neon-cyan: #00f3ff;
      --bg-dark: #020205;
      --bg-card: #0a0a12;
      --text-main: #ffffff;
      --text-muted: #a0a0a0;
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
    @media (width <= 480px) {
      footer {
        flex-direction: column;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="logo">
          <img src="assets/images/21.png" alt="Expo Autotransporte Toluca">
        </div>
        <div class="text">
          <h3>EXPO AUTOTRANSPORTE TOLUCA 2026</h3>
          <p>El Hub donde la industria se encuentra, se conecta y evoluciona.</p>
        </div>
        <div class="social">
          <h3 style="font-size: 1rem;">Mantenga la conversación activa</h3><br>
          <a href="#" aria-label="TikTok">
            <img src="assets/images/social/tiktok.png" alt="TikTok" style="height: 2rem;">
          </a>
          <a href="#" aria-label="Facebook">
            <img src="assets/images/social/facebook.png" alt="Facebook" style="height: 2rem;">
          </a>
          <a href="#" aria-label="Instagram">
            <img src="assets/images/social/instagram.png" alt="Instagram" style="height: 2rem;">
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="assets/images/social/linkedin.png" alt="LinkedIn" style="height: 2rem;">
          </a>
          <br>
          <a href="https://wa.link/9nxgeo">+52 55 3276 6894 <img src="assets/images/social/whatsapp.png" alt="WhatsApp" style="height: 20px;"></a><br>
          <a href="mailto:toluca2026@expoautotransporte.com.mx">toluca2026@expoautotransporte.com.mx <img src="assets/images/social/email.png" alt="Email" style="height: 20px;"></a>
        </div>
      </footer>
    `;
  }
}

customElements.define('hub-360-footer', Footer);