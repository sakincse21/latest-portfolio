import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { StarsBackground } from "@/components/ui/stars";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/ui/shadcn-io/animated-cursor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground className="fixed inset-0 w-full h-full -z-10" />
      
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>


      <ScrollProgressBar
        type="bar"
        color="white"
        strokeSize={4}
        position="top-right"
      />
      
      <CursorProvider>
        <Cursor>
          <svg
            className="size-6 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
          >
            <path
              fill="currentColor"
              d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
            />
          </svg>
        </Cursor>
        <CursorFollow>
          <div className="bg-destructive text-white px-2 py-1 rounded-lg text-sm shadow-lg">
            Hire Me
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  );
};

export default Index;
