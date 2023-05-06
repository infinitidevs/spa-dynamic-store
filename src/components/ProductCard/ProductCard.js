import "./ProductCard.css";

export const ProductCard = (product) => {
    return `
    <article class="ah-card">
        <div>
            <img src="/assets/favicon.png" 
            alt="Favorite Icon"
            loading="lazy"
            class="ah-card-fav-icon">
        </div>
        <figure>
            <img src=${product.image}
                alt="Ray-ban-Clubmaster-Classic">
        </figure>
        <section class="ah-card-details">
            <div class="ah-card-min-details">
                <h1>${product.brand}<span>${product.model}</span></h1>
                <h1 class="ah-card-min-details__price">${product.price} €</h1>
            </div>
            <a href=${product.link}
                class="ah-card-details-btn" target="_blank" rel="noopener">AGREGAR A LA CESTA</a>
        </section>
    </article>
    `;
};

