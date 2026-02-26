import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificatesSection from "./components/CertificatesSection";
import DataVizSection from "./components/DataVizSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>

      <ScrollReveal>
        <EducationSection />
      </ScrollReveal>

      <ScrollReveal>
        <CertificatesSection />
      </ScrollReveal>

      <ScrollReveal>
        <DataVizSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
