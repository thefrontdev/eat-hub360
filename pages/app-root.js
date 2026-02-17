// Importamos Lit desde tu archivo local
import { LitElement, html, css } from './../assets/js/lit-core.min.js';

export class AppRoot extends LitElement {
  static properties = {
    _route: { state: true },
    _isChanging: { state: true }
  };

  static styles = css`
    :host {
      display: block;
      background-color: #020205;
      min-height: 100dvh;
      max-width: 100vw;
    }
    main {
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .fade-out { opacity: 0; transform: translateY(10px); }
    .fade-in { opacity: 1; transform: translateY(0); }
  `;

  constructor() {
    super();
    // Leemos el hash inicial: #/visitantes -> /visitantes
    this._route = window.location.hash.slice(1) || '/';
    this._isChanging = false;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('hashchange', () => this._handleRouteChange());
  }

  async _handleRouteChange() {
    this._isChanging = true;
    await new Promise(r => setTimeout(r, 400));
    const hash = window.location.hash.slice(1);
    this._route = hash.includes('platinum') ? '/sponsors' : hash  || '/';
    window.scrollTo(0, 0);
    
    this._isChanging = false;
  }

  _renderPage() {
    switch (this._route) {
      case '/': return html`<hub-360-home-copy></hub-360-home-copy>`;
      case '/visitantes': return html`<hub-360-visitantes></hub-360-visitantes>`;
      case '/expositores': return html`<hub-360-expositores></hub-360-expositores>`;
      case '/sponsors': return html`<hub-360-sponsors></hub-360-sponsors>`;
      case '/institucional': return html`<hub-360-institucional></hub-360-institucional>`;
      default: return html`<hub-360-home-copy></hub-360-home-copy>`;
    }
  }

  render() {
    return html`
      <nav-menu></nav-menu>
      <main class="${this._isChanging ? 'fade-out' : 'fade-in'}">
        ${this._renderPage()}
      </main>
    `;
  }
}
customElements.define('app-root', AppRoot);