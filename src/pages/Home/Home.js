import "./Home.css";
import { template as Hero } from "../../components/Home/Hero";
import { template as Promo } from "../../components/Home/Promo";
import { template as DoubleBanner } from "../../components/Home/DoubleBanner";
import { template as Featured } from "../../components/Home/Featured";
import { template as Claim } from "../../components/Home/Claim";

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
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").innerHTML = template();
};
