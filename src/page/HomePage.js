import { Banner } from "../components/Banner";
import { Portfolio } from "../components/Portfolio";
import { Header } from "../components/header";
import { Skills } from "../components/Skills";
import { Goals } from "../components/Goals";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

export const HomePage = () => {
  return `
        ${Header()}
        ${Banner()}
        ${About()}
        ${Skills()}
        ${Portfolio()}
        ${Goals()}
        ${Footer()}

    `;
};
