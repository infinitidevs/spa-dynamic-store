import "./Claim.css";

export const template = () => {
  return `
    <section class="ah-claim">
        <article class="ah-claim-list">
            <div class="ah-claim-item">
                <img src="./assets/icons/safety-purchase.png" 
                class="ah-claim-icon"
                alt="Safe Purchase">
                <p class="ah-claim-p">Finalizar la compra de forma segura</p>
            </div>
            <div class="ah-claim-item">
                <img src="./assets/icons/safe-payment.png" 
                class="ah-claim-icon"
                alt="Secure Payment">
                <p class="ah-claim-p">Pago seguro</p>
            </div>
            <div class="ah-claim-item">
                <img src="./assets/icons/free-shipping.png" 
                class="ah-claim-icon"
                alt="Free Shipping">
                <p class="ah-claim-p">Envío gratis</p>
                </div>
        </article>
        <article class="ah-newsletter">
            <div class="ah-newsletter-content">
                <h3>Newsletter</h3>
                <p>Conoce las novedades sobre las nuevas tendencias.</p>             
            </div>
            <div class="ah-newsletter-btn-wrapper">
                <a href="#" class="ah-newsletter-btn">SUSCRÍBETE</a>
            </div>
        </article>
    </section>
    `;
};