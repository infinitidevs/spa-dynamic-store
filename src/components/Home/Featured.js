import "./Featured.css";
import { template as SunglassesSection} from "./FeaturedSunglasses";
import { template as EyeglassesSection} from "./FeaturedEyeglasses";
import { template as NewSection} from "./FeaturedNew";
import { template as FindSection} from "./FeaturedFind";


export const template = () => {
  return `
    ${SunglassesSection()}    
    ${EyeglassesSection()}    
    ${NewSection()}    
    ${FindSection()}    
    `;
};