import "./Featured.css";

export const template = () => {
  return `
    <section class="ah-section-featured ah-layout-flex">
        <h2 id="new-in">NEW IN</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/new-1.webp"
                        alt="Burberry-Jarvis">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>BURBERRY<span>BE4376U Jarvis</span></h1>
                        <h1 class="ah-card-min-details__price">210 €</h1>
                    </div>
                    <a href="https://www.sunglasshut.com/es/burberry/be4376u-8056597705349"
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
                    <img src="./assets/products/new-2.png"
                        alt="Ray-Ban-Kiliane-Bio-Based">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>RAY-BAN<span>KILIANE BIO-BASED</span></h1>
                        <h1 class="ah-card-min-details__price">145 €</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-sol/RB4395kiliane%20bio-based-amarillo%20transparente/8056597829328"
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
                    <img src="./assets/products/new-3.webp"
                        alt="Arnette-Woland">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>ARNETTE<span>AN4307 WOLAND</span></h1>
                        <h1 class="ah-card-min-details__price">89 €</h1>
                    </div>
                    <a href="https://www.sunglasshut.com/es/arnette/an4307-7895653246942"
                        class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
                </section>
            </article>
        </div>        
    </section>
    `;
};