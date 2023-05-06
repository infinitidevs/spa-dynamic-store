import "./Featured.css";

export const template = () => {
  return `
    <section class="ah-section-featured ah-layout-flex">
        <h2 id="gafas-de-sol">GAFAS DE SOL</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://images.ray-ban.com/is/image/RayBan/8056597755276__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://assets.sunglasshut.com/is/image/LuxotticaRetail/8056597394727__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://assets.sunglasshut.com/is/image/LuxotticaRetail/8056597546003__STD__shad__cfr.png"
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
        <section class="ah-section-featured ah-layout-flex">
        <h2 id="gafas-graduadas">GAFAS GRADUADAS</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://assets.sunglasshut.com/is/image/LuxotticaRetail/8056597676373__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://images.ray-ban.com/is/image/RayBan/805289445906__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://images.ray-ban.com/is/image/RayBan/8056597446204__STD__shad__cfr.png"
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
        <section class="ah-section-featured ah-layout-flex">
        <h2 id="new-in">NEW IN</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://assets.sunglasshut.com/is/image/LuxotticaRetail/8056597705349__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://images.ray-ban.com/is/image/RayBan/8056597829328__STD__shad__cfr.png"
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://assets.sunglasshut.com/is/image/LuxotticaRetail/7895653246942__STD__shad__cfr.png?impolicy=SGH_bgtransparent"
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
        <section class="ah-section-featured ah-layout-flex">
        <h2 id="find-your-style">FIND YOUR STYLE</h2>
        <div class="ah-section-featured__gallery ah-layout-flex__gallery">
            <article class="ah-card">
                <div>
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://media.ray-ban.com/cms/resource/image/511944/landscape_ratio144x65/400/180/5b54e76caae6208506738e2be8024d08/39C131BB7AF17A7105333FC52DF3D7A0/ww-rb-aviator-menu-eyeglasses-new.png"
                        alt="zapatillas-London-edition">
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://media.ray-ban.com/cms/resource/image/659690/landscape_ratio144x65/400/180/e2aaff81dc74f3ae235510db67635972/FE4C67D8B2ACA8A6C53CC99F5059B544/8056597891097-1-.png"
                        alt="zapatillas-London-edition">
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
                    <img src="./assets/favicon.png" 
                    alt="Favorite Icon"
                    class="ah-card-fav-icon">
                </div>
                <figure>
                    <img src="https://media.ray-ban.com/cms/resource/image/511862/landscape_ratio144x65/400/180/44450fd4a4f9101608a4dfded6650293/7646DE0873BBE0D43AF07D0608353FAE/ww-rb-clubmaster-menu-eyeglasses-new.png"
                        alt="zapatilla-brooks-edicion especial">
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