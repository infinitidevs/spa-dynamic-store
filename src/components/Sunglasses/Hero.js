import "./Hero.css";

export const template = () => {
    return `
    <section class="ah-section-hero-sun">
        <article class="ah-section-hero-container-sun ">
        <picture>
            <source media="(max-width: 769px)" srcset="https://images.ctfassets.net/64sxq3fgbwhi/39U2enF9qminMqAuEr0WG0/c22829d3a0d586caf7a11cc1f654e5b1/HEADER_MOBILE_420x750__1_.jpg"
            alt="Hero Image Mobile" loading="lazy" class="ah-section-hero--banner-sun" >
            <img media="(min-width: 1920px)" src="https://images.ctfassets.net/64sxq3fgbwhi/5u0gigo81Do6HZfF5KUnjw/1e515481cb63f5bf0eb9ab5cd5965888/HERO_SLIDER_DESKTOP_REGULAR__1_.jpg"
            alt="Hero Image" loading="lazy" class="ah-section-hero--banner-sun" >
        </picture>
        </article>
        <article>
        <h2 class="ah-hero-sung-title">GAFAS DE SOL</h2>
        </article>
    </section>
    `
};