import "./Sunglasses.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { productsData } from "../../utils/productsData";
import { template as Hero } from "./Hero";
import { template as FiltersForm } from "./FiltersForm";
import { template as Claim } from "./Claim";

const template = () => {
  return `
      ${Hero()}
      <section class="ah-layout-flex">
        <h3>Explora Nuestro Catalogo</h3>
      </section>
      <section class="ah-featured ah-layout-flex">
        ${FiltersForm()}
        <section class="ah-featured__gallery ah-layout-flex__gallery"
        id="cards-container"></section>
      </section>
      ${Claim()}
    `;
};

const printProducts = () => {
  const container = document.querySelector("#cards-container");
  container.innerHTML = ""
  productsData.forEach((product) => {
    container.innerHTML += ProductCard(product);
  })
};

const searchByBrand = (event) => {
  const container = document.querySelector("#cards-container");
  container.innerHTML = "";
  if (event.target.value === "ALL") {
    printProducts();
  } else {
    const container = document.querySelector("#cards-container");
    for (let i = 0; i < productsData.length; i++) {
      const elementProduct = productsData[i];
      if (elementProduct.brand === event.target.value) {
        container.innerHTML += ProductCard(elementProduct);
      }
    }
  }
};

const searchByPrice = (price, brand) => {
  const container = document.querySelector("#cards-container");
  container.innerHTML = "";
  for (let i = 0; i < productsData.length; i++) {
    const elementProduct = productsData[i];
    if (brand === "ALL" && (elementProduct.price < price || price === "")) {
      container.innerHTML += ProductCard(elementProduct);
    } else {
      if ((elementProduct.price < price || price === "") && elementProduct.brand === brand) {
        container.innerHTML += ProductCard(elementProduct);
      }
    }
  }
};

const handleFormSearch = (event) => {
  event.preventDefault();
  const formElements = event.target;
  searchByPrice(formElements["2"].value, formElements["1"].value);
}

const handleFormClean = (event) => {
  const resetPrice = document.querySelector("#search-input");
  resetPrice.value = "";
  const resetSearch = document.querySelector("#select-options");
  resetSearch.value = "ALL";
};

const listeners = () => {
  const selectBrands = document.querySelector("#select-options");
  const form = document.querySelector('#search-form');
  const buttonClean = document.querySelector('#btn-clean');
  selectBrands.addEventListener("change", searchByBrand);
  form.addEventListener("submit", handleFormSearch);
  printProducts();
  buttonClean.addEventListener("click", handleFormClean);
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  listeners();
};
