import "./Featured.css";

export const template = () => {
  return `
    <section class="ah-section-featured ah-layout-flex">
        <h2 id="gafas-graduadas">GAFAS GRADUADAS</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                        alt="Favorite Icon"
                        class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/eyeg-1.webp"
                        alt="POLORP-PH4151">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>POLO RALPH LAUREN<span>PH4151</span></h1>
                        <h1 class="ah-card-min-details__price">120 €</h1>
                    </div>
                    <a href="https://www.sunglasshut.com/es/polo-ralph-lauren/ph4151-8056597676373"
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
                    <img src="./assets/products/eyeg-2.png"
                        alt="Ray-Ban-RB5228-Optics">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>RAY-BAN<span>RB5228 OPTICS</span></h1>
                        <h1 class="ah-card-min-details__price">155 €</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-visi%C3%B3n/RX5228%20UNISEX%20rb5228%20optics-negro/805289445906"
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
                    <img src="./assets/products/eyeg-3.png"
                        alt="Ray-Ban-Hexagonal-Optics">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>RAY-BAN<span>HEXAGONAL OPTICS</span></h1>
                        <h1 class="ah-card-min-details__price">116 €</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-visi%C3%B3n/RX6448%20UNISEX%20hexagonal%20optics-rojo/8056597446204"
                        class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
                </section>
            </article>
        </div>
    </section>
    `;
};