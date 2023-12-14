import { BannerSection } from "./BannerSection";
import { Header } from "./header/Header";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Works } from "./Works";

export const Home = () => {
  return (
    <>
      {/* BANNER SECTION */}
      <BannerSection />
      {/* HEADER */}
      <Header />
      {/* ABOUT ME */}
      <AboutMe />
      {/* PROJECTS */}
      <Projects />
      {/* WORKS */}
      <Works />

      <section id="skills" className="opacity-0 transition-all duration-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ipsum quaerat sunt, voluptate rem earum tempore
        eaque illo ut sed fugiat voluptatum exercitationem placeat ex facilis, iusto odit, qui quia.
      </section>
    </>
  );
};
