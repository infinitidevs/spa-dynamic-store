import "./DoubleBanner.css";

export const template = () => {
  return `
    <section class="ah-section-double-banner ah-layout-flex">
        <article class="ah-section-double-banner-left">
            <img src="./assets/images/banner-sung.jpg" alt="Sunglasses Image">
            <a href="#" class="ah-section-double-banner-btn"><span>COMPRAR SOL</span></a>
        </article>
        <article class="ah-section-double-banner-right">
            <img src="./assets/images/banner-eyeg.jpg" alt="Eyewear Image">
            <a href="#" class="ah-section-double-banner-btn"><span>COMPRAR GRADUADAS</span></a>
        </article>
    </section>
    `;
};