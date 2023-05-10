import "./Footer.css";

const template = () => {
  return `
        <section class="ah-main-content">
            <div class="ah-brand-logo">
                <h1 class="ah-logo--footer">VISIONARY</h1>
            </div>
            <div class="ah-row">
                <div class="ah-links-list">
                    <h4 class="ah-title">Visionary Eyewear Store</h4>
                    <ul class="ah-list">
                        <li class="ah-list-item"><a href="#">About Us</a></li>
                        <li class="ah-list-item"><a href="#">Política de Privacidad</a></li>
                        <li class="ah-list-item"><a href="#">Cookie Policy</a></li>
                        <li class="ah-list-item"><a href="#">Condiciones de venta</a></li>
                    </ul>
                </div>
                <div class="ah-links-list">
                    <h4 class="ah-title">Quick Links</h4>
                    <ul class="ah-list">
                        <li class="ah-list-item"><a href="#">Derecho de desistimiento Garantías legales</a></li>
                        <li class="ah-list-item"><a href="#">Transporte y entrega</a></li>
                        <li class="ah-list-item"><a href="#">Preferencias de consentimiento</a></li>
                    </ul>
                </div>
                <div class="ah-row-icons">
                    <div class="ah-row-icons-container">
                        <div class="ah-row-icons-social-links">
                            <h4 class="ah-title">Síguenos</h4>
                            <ul class="ah-icons-list">
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="./assets/icons/facebook.svg"
                                        alt="Facebook">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="./assets/icons/instagram.svg"
                                        alt="Instagram">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="./assets/icons/youtube.svg"
                                        alt="Youtube">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="./assets/icons/twitter.svg"
                                        alt="Twitter">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ah-row-payment-methods">
                            <h4 class="ah-title">Métodos de pago</h4>
                            <ul class="ah-icons-list-lower">
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/mastercard.png"
                                    alt="Mastercard">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/visa.png"
                                    alt="VISA">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/amex.png"
                                    alt="AmericanExpress">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/klarna.svg" 
                                    alt="Klarna">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/paypal.svg" 
                                    alt="PayPal">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/apple-pay.svg" 
                                    alt="Apple Pay">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="./assets/icons/ssl-encrypt.png" 
                                    alt="SSL Secured">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ah-strip">
            <div class="ah-strip-wrapper">
                <h4 class="ah-strip-text">VISIONARY EYEWEAR STORE © 2023</h4>
                <img src="./assets/icons/logo-strip.svg" 
                alt="Logo Strip" 
                class="ah-strip-image">
            </div>
        </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
