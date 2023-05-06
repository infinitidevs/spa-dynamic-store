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
                                        <img src="https://images.ctfassets.net/64sxq3fgbwhi/6bmvJ2TZXo0LhH2I0n5uHM/011c3e32f29fdffaabfda6a29f9a02ff/Facebook.svg"
                                        alt="Facebook">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="https://images.ctfassets.net/64sxq3fgbwhi/2GFeFLSn25QGZHbEarXPLP/f5b1b291c1dbda15facad89e6247b50e/Instagram.svg"
                                        alt="Instagram">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="https://images.ctfassets.net/64sxq3fgbwhi/6eJE57D8jlgeaUGSykXZKP/ca83fa90270caeacea07586cc74a87b5/Youtube.svg"
                                        alt="Youtube">
                                    </a>
                                </li>
                                <li class="ah-icons-list-item">
                                    <a href="#">
                                        <img src="https://images.ctfassets.net/64sxq3fgbwhi/2rg8SuyooT125iw7mpTzwv/04080ca2e9faa8b489206357e9667b78/Twitter.svg"
                                        alt="Twitter">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ah-row-payment-methods">
                            <h4 class="ah-title">Métodos de pago</h4>
                            <ul class="ah-icons-list-lower">
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://images.ctfassets.net/64sxq3fgbwhi/4pf0h3WBWpiznO5umauc6L/474804736b966a846da5f154e635904d/Mastercard.png"
                                    alt="Mastercard">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://images.ctfassets.net/64sxq3fgbwhi/69dhHWMyhuWiw0uRGN4NLg/6b97b7ca83b871fd974215807b6cae1a/VISA.png"
                                    alt="VISA">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://images.ctfassets.net/64sxq3fgbwhi/3an0bKJUx8GyjKsit13o1q/1beaa0f13d77d1e9b5e40fa062578d80/AmericanExpress.png"
                                    alt="AmericanExpress">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dwb910c52a/images/icons/klarna.svg" 
                                    alt="Klarna">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://www.ray-ban.com/rbstatichtml/assets/images/paypal-dark.svg" 
                                    alt="PayPal">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://www.ray-ban.com/rbstatichtml/assets/images/apple-pay-light.svg" 
                                    alt="Apple Pay">
                                </li>
                                <li class="ah-icons-list-item-lower">
                                    <img src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw029f5071/images/icons/ssl.png" 
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
                <img src="https://www.carreraworld.com/_nuxt/33cae93821652388535bf6e01162b11a.svg" 
                alt="Logo Strip" 
                class="ah-strip-image">
            </div>
        </section>
    `;
};

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
