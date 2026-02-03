import { LitElement, html, css } from './../assets/js/lit-core.min.js';

class TextTicker extends LitElement {
  static properties = {
    texts: { type: Array },
    speed: { type: Number } // Segundos que tarda una vuelta completa
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      overflow: hidden;
      background: #0f0f1399;
      border: solid #fafafa1a;
      border-width: 1px 0;
      color: white;
      font-family: sans-serif;
      padding: 10px 0;
      box-sizing: border-box;
      margin: 3rem 0;
    }

    .ticker-wrap {
      display: flex;
      width: 100%;
    }

    .ticker-content {
      display: flex;
      white-space: nowrap;
      animation: marquee var(--duration, 20s) linear infinite;
    }

    .item {
      padding: 0 2rem;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
      & span {
        color: #000ffa;
        margin-right: 0.5rem;
      }
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-20%); }
    }
  `;

  constructor() {
    super();
    this.texts = [];
    this.speed = 5;
  }

  render() {
    console.log(this.texts);
    // Duplicamos el contenido para que el loop sea infinito y fluido
    const content = [...this.texts, ...this.texts];

    return html`
      <div class="ticker-wrap" style="--duration: ${this.speed}s">
        <div class="ticker-content">
          ${content.map(item => html`<p class="item"><span>${item.number}</span>${item.text}</p>`)}
        </div>
      </div>
    `;
  }
}

customElements.define('text-ticker', TextTicker);