// import { Banner } from "../components/Banner";
import { Portfolio } from "../components/Portfolio";
import { Header } from "../components/Header";
import { SkillAb } from "../components/SkillAb";
import { Goals } from "../components/Goals";
import { Footer } from "../components/Footer";
import { BannerAb } from "../components/BannerAb";
import { Introduce } from "../components/Introduce";

export const AboutPage = () => {
  return `
        ${Header()}
        ${BannerAb()}
        ${Introduce()}
        ${SkillAb()}
        ${Portfolio()}
        ${Goals()}
        ${Footer()}

    `;
};
