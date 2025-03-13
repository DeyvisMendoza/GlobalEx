import { Footer} from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { WhatsAppButton } from "../../components/WhatsAppButton/WhatsAppButton.";
import { SectionBancos } from "../../features/home/sectionBancos/SectionBancos";
import { SectionHero } from "../../features/home/sectionHero/SectionHero";
import { SectionPasos } from "../../features/home/sectionPasos/SectionPasos";
import { SectionPregunta } from "../../features/home/sectionPregunta/SectionPregunta";
import { SectionServicios } from "../../features/home/sectionServicios/SectionServicios";

export const Home = () => {

  return (
    <>
      <NavBar />
      <SectionHero />
      <SectionBancos />
      <SectionPasos />
      <SectionServicios />
      <SectionPregunta />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};
