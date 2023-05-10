import "./Featured.css";

export const template = () => {
  return `
    <section class="ah-section-featured ah-layout-flex">
        <h2 id="gafas-de-sol">GAFAS DE SOL</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                        alt="Favorite Icon"
                        class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/sung-1.png"
                        alt="Ray-ban-Clubmaster-Classic">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>RAY-BAN<span>CLUBMASTER CLASSIC</span></h1>
                        <h1 class="ah-card-min-details__price">190 €</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-sol/RB3016clubmaster%20classic-gris%20sobre%20negro/8056597755276"
                        class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
                </section>
            </article>
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                        alt="Favorite Icon"
                        class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/sung-2.webp"
                        alt="Persol-PO3264S">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>PERSOL<span>PO3264S</span></h1>
                        <h1 class="ah-card-min-details__price">130 €</h1>
                    </div>
                    <a href="https://www.sunglasshut.com/es/persol/po3264s-8056597394727"
                        class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
                </section>
            </article>
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                        alt="Favorite Icon"
                        class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/sung-3.png"
                        alt="Emporio-Armani-EA2123">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>EMPORIO ARMANI<span>EA2123</span></h1>
                        <h1 class="ah-card-min-details__price">128 €</h1>
                    </div>
                    <a href="https://www.sunglasshut.com/es/emporio-armani/ea2123-8056597546003"
                        class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
                </section>
            </article>
        </div>
    </section>
    `;
};