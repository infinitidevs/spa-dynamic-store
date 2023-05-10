import "./Header.css";

const template = () => {
  return `
  <div class="ah-layout-container">
      <div class="ah-section-header-layout ah-layout-flex">
          <a href="#home" role="link" class="ah-section-header--title" id="home-link">
              <h1 class="ah-logo">VISIONARY</h1>
          </a> 
          <label class="ah-hamburger-label" for="hamburger">&#9776;</label>
          <input type="checkbox" class="ah-hamburger" id="hamburger" />
          <nav role="navigation" class="ah-section-nav ah-section-nav-left">
              <ul class="ah-layout-flex ah-section-header-nav">
                  <li>
                      <a href="#sunglasses" role="link" aria-label="#"
                          class="ah-section-header--nav-link" 
                          id="sunglasses-link">GAFAS DE SOL</a>
                  </li>
                  <li>
                      <a href="#gafas-graduadas" role="link" aria-label="#"
                          class="ah-section-header--nav-link">GAFAS GRADUADAS</a>
                  </li>
                  <li>
                      <a href="#new-in" role="link" aria-label="#"
                          class="ah-section-header--nav-link">NEW IN</a>
                  </li>
                  <li>
                      <a href="#find-your-style" role="link" aria-label="#"
                          class="ah-section-header--nav-link">FIND YOUR STYLE</a>
                  </li>
              </ul>
          </nav>
          <nav role="navigation" class="ah-section-nav ah-section-nav-right">
              <ul class="ah-layout-flex ah-section-header-nav ah-section-header-nav-right">
                <li>
                    <img src="./assets/icons/es-flag.svg"
                        alt="Flag Icon" class="ah-icons" />
                </li>
                <li>
                    <img src="./assets/icons/location.svg"
                        alt="Location Icon" class="ah-icons" />
                </li>
                <li>
                    <img src="./assets/icons/search.svg"
                        alt="Search Icon" class="ah-icons" />
                </li>
                <li>
                    <img src="./assets/icons/user.svg"
                        alt="User icon" class="ah-icons" />
                </li>
                <li>
                    <img src="./assets/icons/shopping-cart.svg"
                        alt="Shopping Cart Icon" class="ah-icons" />
                </li> 
              </ul>
          </nav>
      </div>
  </div>
    `;
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
