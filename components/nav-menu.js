import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class NavMenu extends LitElement {
  static styles = css`
    :host {
      --primary: #000ffa;
      display: block;
    }
    nav {
      position: fixed;
      top: 0; left: 10%; width: 80%;
      height: 70px;
      background: #0a0a1240;
      backdrop-filter: blur(15px);
      border: 1px solid var(--primary);
      display: flex;
      align-items: center;
      z-index: 2000;
      box-sizing: border-box;
      transition: 0.3s;
      box-shadow: 0 0 1rem #000ffa;
      border-radius: 8rem;
    }
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-family: 'Orbitron', sans-serif;
      color: var(--primary);
      text-decoration: none;
      font-weight: 900;
      font-size: 1.2rem;
      text-shadow: 0 0 10px rgba(0, 15, 250, 0.5);
      box-sizing: border-box;
    }

    .logo img {
      height: 4rem;
      vertical-align: middle;
    }

    /* Menú Desktop */
    .menu-desktop {
      display: flex;
      gap: 25px;
    }
    .menu-desktop a {
      color: white;
      text-decoration: none;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.3s;
    }
    .menu-desktop a:hover { color: var(--primary); }

    /* Botón Hamburguesa */
    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      background: none;
      border: none;
      z-index: 2100;
    }
    .burger span {
      width: 25px;
      height: 2px;
      background: white;
      transition: 0.3s;
    }

    /* Menú Lateral Móvil */
    .mobile-overlay {
      position: fixed;
      top: 0; right: -100%;
      width: 80%;
      height: 100vh;
      background: #0a0a12;
      display: flex;
      flex-direction: column;
      padding: 100px 40px;
      gap: 30px;
      transition: 0.4s ease-in-out;
      border-left: 1px solid var(--primary);
    }
    .mobile-overlay.open { right: 0; }
    .mobile-overlay a {
      color: white;
      font-family: 'Orbitron';
      font-size: 1.5rem;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .menu-desktop { display: none; }
      .burger { display: flex; }
      /* Animación Burger a X */
      .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .burger.open span:nth-child(2) { opacity: 0; }
      .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
  `;

  static properties = {
    isOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <nav>
        <div class="container">
          <a href="#/" class="logo">
            <img src="assets/images/21-1.png" alt="Hub 360 Logo">
          </a>
          
          <div class="menu-desktop">
            <a href="#/">Inicio</a>
            <a href="#/visitantes">Visitantes</a>
            <a href="#/expositores">Expositores</a>
            <a href="#/sponsors">Sponsors</a>
            <a href="#/institucional">Institucional</a>
          </div>

          <button class="burger ${this.isOpen ? 'open' : ''}" @click=${this.toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div class="mobile-overlay ${this.isOpen ? 'open' : ''}">
        <a href="#/" @click=${this.toggleMenu}>Inicio</a>
        <a href="#/visitantes" @click=${this.toggleMenu}>Visitantes</a>
        <a href="#/expositores" @click=${this.toggleMenu}>Expositores</a>
        <a href="#/sponsors" @click=${this.toggleMenu}>Sponsors</a>
      </div>
    `;
  }
}
customElements.define('nav-menu', NavMenu);