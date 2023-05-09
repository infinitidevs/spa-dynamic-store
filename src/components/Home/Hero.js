import "./Hero.css";

export const template = () => {
  return `
    <section class="ah-section-hero">
      <article class="ah-section-hero-container ah-layout-flex">
        <div>
        <picture>
          <source media="(max-width: 768px)" srcset="./assets/hero-mobile.jpg"
            alt="Hero Image Mobile" loading="lazy" class="ah-section-hero--banner">
          <img media="(min-width: 1920px)" src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw5a61edd2/images/new-home/banners/BANNER_DOGMA_D.jpg"
            alt="Hero Image" loading="lazy" class="ah-section-hero--banner" />
        </picture>
        </div>
        <div class=" ah-section-hero-h2">
          <h2> Hasta 50€ de descuento en gafas de sol polarizadas</h2>
        </div>
        <div class=" ah-section-hero-p">
          <p>Elige un modelo Polarizado, Fotocromático o Chromance.</p>
        </div>
        <a href="#" class="ah-section-hero-btn"><span>COMPRAR AHORA</span></a>
      </article>
    </section>
    `;
};