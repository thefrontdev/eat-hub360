import { LitElement, html, css } from '../assets/js/lit-core.min.js';

export class PhotoCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 60px 0;
      background: radial-gradient(circle at center, rgba(0, 15, 250, 0.05) 0%, transparent 70%);
    }

    .header-group {
      text-align: center;
      margin-bottom: 50px;
      padding: 0 20px;
    }

    .header-group h2 {
      font-family: 'Anton', sans-serif;
      font-style: italic;
      font-size: clamp(2rem, 5vw, 3.5rem);
      color: #ffffff;
      text-transform: uppercase;
      margin: 0;
      line-height: 1;
      letter-spacing: 1px;
      /* Efecto neón sutil */
      text-shadow: 0 0 10px rgba(0, 15, 250, 0.5), 0 0 20px rgba(0, 15, 250, 0.2);
    }

    .header-group p {
      font-family: 'Nunito', sans-serif;
      color: #a0a0a0;
      max-width: 700px;
      margin: 15px auto 0;
      font-size: 1.1rem;
      line-height: 1.4;
    }

    .header-group strong {
      color: #000ffa;
      font-weight: 700;
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    /* Gradientes de ocultación laterales */
    .carousel-wrapper::before, .carousel-wrapper::after {
      content: "";
      position: absolute;
      top: 0; width: 15%; height: 100%;
      z-index: 2; pointer-events: none;
    }
    .carousel-wrapper::before { left: 0; background: linear-gradient(to right, #020205, transparent); }
    .carousel-wrapper::after { right: 0; background: linear-gradient(to left, #020205, transparent); }

    .track {
      display: flex;
      gap: 30px;
      width: max-content;
      animation: infiniteScroll 300s linear infinite;
      padding: 0.5rem 0;

      &:hover {
        animation-play-state: paused;
      }
    }


    .slide {
      width: 240px;
      height: 110px;
      background: rgba(10, 10, 18, 0.6);
      border: 1px solid rgba(0, 15, 250, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      transition: all 0.3s ease;
    }

    .slide:hover {
      border-color: #000ffa;
      box-shadow: 0 0 25px rgba(0, 15, 250, 0.4);
      background: rgba(0, 15, 250, 0.1);
      transform: translateY(-5px);
      animation-play-state: paused;
    }

    img {
      max-width: 80%;
      height: 8.5rem;
      max-height: 100%;
      filter: grayscale(1);
      transition: 0.3s;
    }

    .slide:hover img {
      filter: grayscale(0);
    }

    .video-wrapper {
      width: 100%;
      max-width: 20rem;
      margin: 0 auto 1.5rem;
      padding: 0.5rem;
      border: 1px solid #000ffa;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      box-sizing: border-box;
      & video {
        width: 100%; 
        height: auto;
        display: block;
        object-fit: cover;
        border-radius: 1rem 0;
      }
    }

    @keyframes infiniteScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    @media (max-width: 768px) {
      .header-group h2 { font-size: 2rem; }
      .slide { width: 13rem; height: 100%; }
    }
  `;

  render() {
    const logos = [
      { src: 'assets/images/expo2025/1.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/2.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/3.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/4.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/5.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/6.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/7.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/8.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/9.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/10.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/11.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/12.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/13.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/14.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/visitantes.webp', alt: 'expo2025', type: 'image' },
      { src: 'assets/images/expo2025/expositores.webp', alt: 'expo2025', type: 'image' },
    ];

    return html`
      <div class="header-group">
        <h2>LA TRACCIÓN DE UN ECOSISTEMA EN EVOLUCIÓN</h2>
        <p>
          Dejamos atrás el concepto de evento estático para convertirnos en el 
          <strong>motor digital</strong> que conecta a las marcas líderes del autotransporte.
        </p>
      </div>
      <div class="video-wrapper">
        <video autoplay muted loop playsinline>
          <source src="assets/videos/evoluciona.mp4" type="video/mp4">
        </video>
      </div>
      <div class="carousel-wrapper">
        <div class="track">
          ${[...logos, ...logos, ...logos].map(logo => html`
            <div class="slide">
                <img src="${logo.src}" alt="${logo.alt}">
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
customElements.define('photo-carousel', PhotoCarousel);