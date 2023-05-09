import "./DoubleBanner.css";

export const template = () => {
  return `
    <section class="ah-section-double-banner ah-layout-flex">
        <article class="ah-section-double-banner-left">
            <img src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw3d6df32d/images/new-home/banners/BANNER_SOL_D.jpg" alt="Sunglasses Image">
            <a href="#" class="ah-section-double-banner-btn"><span>COMPRAR SOL</span></a>
        </article>
        <article class="ah-section-double-banner-right">
            <img src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw841b0917/images/new-home/banners/BANNER_VISTA_D.jpg" alt="Eyewear Image">
            <a href="#" class="ah-section-double-banner-btn"><span>COMPRAR GRADUADAS</span></a>
        </article>
    </section>
    `;
};