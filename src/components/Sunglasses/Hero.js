import "./Hero.css";

export const template = () => {
    return `
    <section class="ah-section-hero-sun">
        <article class="ah-section-hero-container-sun ">
            <picture>
                <source media="(max-width: 769px)" srcset="./assets/images/hero-mobile-sung.jpg"
                    alt="Hero Image Mobile" loading="lazy" class="ah-section-hero--banner-sun" >
                <img media="(min-width: 1920px)" src="./assets/images/hero-desk-sung.jpg"
                    alt="Hero Image" loading="lazy" class="ah-section-hero--banner-sun" >
            </picture>
        </article>
        <article>
            <h2 class="ah-hero-sung-title">GAFAS DE SOL</h2>
        </article>
    </section>
    `
};