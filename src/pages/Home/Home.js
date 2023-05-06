import "./Home.css";
import { template as Hero } from "./Hero";
import { template as Promo } from "./Promo";
import { template as DoubleBanner } from "./DoubleBanner";
import { template as Featured } from "./Featured";
import { template as Claim } from "./Claim";

const template = () => {
  return `
    ${Hero()}
    ${Promo()}
    ${DoubleBanner()}
    ${Featured()}
    ${Claim()}
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
