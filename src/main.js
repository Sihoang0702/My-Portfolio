import Navigo from "navigo"; // When using ES modules.
import { HomePage } from "./page/Homepage";
import { AboutPage } from "./page/AboutPage";

const router = new Navigo();

const render = (page) => {
  document.getElementById("app").innerHTML = page();
};

router.on("/", () => render(HomePage));
router.on("/about", () => render(AboutPage));

router.resolve();
