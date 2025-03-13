import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { WhatsAppButton } from "../../components/WhatsAppButton/WhatsAppButton.";
import { SectionHome } from "../../features/nosotros/sectionHome/SectionHome";

export const Nosotros = () => {
  return (
    <>
      <NavBar />
      <SectionHome />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};
