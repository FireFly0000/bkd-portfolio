import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Them toggle*/}
      <ThemeToggle />

      {/* Background Effects*/}
      <StarBackground />

      {/*Navbar */}
      <NavBar />

      {/*Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/*Footer */}
    </div>
  );
}

export default Home;
