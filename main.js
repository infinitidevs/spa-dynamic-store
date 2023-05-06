import "./index.css";

import { printTemplate as Header } from "./src/components/Header/Header";
import { printTemplate as Footer } from "./src/components/Footer/Footer";
import { printTemplate as Home } from "./src/pages/Home/Home";
import { printTemplate as Sunglasses } from "./src/pages/Sunglasses/Sunglasses";

import { linkPage } from "./src/utils/linkpage";

Header();
Footer();

Sunglasses();

linkPage("#home-link", Home);
linkPage("#sunglasses-link", Sunglasses);