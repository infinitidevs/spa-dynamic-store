import "./Featured.css";

export const template = () => {
  return `
    <section class="ah-section-featured ah-layout-flex">
        <h2 id="find-your-style">FIND YOUR STYLE</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/find-1.webp"
                        alt="Aviator Classic">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>AVIATOR CLASSIC<span>Modelo Atemporal</span></h1>
                        <h1 class="ah-card-min-details__price">Destacado</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-sol/aviator"
                        class="ah-card-details-btn" target="_blank" rel="noopener">ELEGIR ESTILO</a>
                </section>
            </article>
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/find-2.png"
                        alt="Wayfarer">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>WAYFARER<span>Estilo Emblemático</span></h1>
                        <h1 class="ah-card-min-details__price">Destacado</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-sol/wayfarer"
                        class="ah-card-details-btn" target="_blank" rel="noopener">ELEGIR ESTILO</a>
                </section>
            </article>
            <article class="ah-card">
                <div>
                    <img src="./assets/icons/fav-icon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="./assets/products/find-3.webp"
                        alt="clubmaster">
                </figure>
                <section class="ah-card-details">
                    <div class="ah-card-min-details">
                        <h1>CLUBMASTER<span>Icono Retro De Visionarios</span></h1>
                        <h1 class="ah-card-min-details__price">Destacado</h1>
                    </div>
                    <a href="https://www.ray-ban.com/spain/gafas-de-sol/clubmaster"
                        class="ah-card-details-btn" target="_blank" rel="noopener">ELEGIR ESTILO</a>
                </section>
            </article>
        </div>
    </section>
    `;
};