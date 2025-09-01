import { useEffect, useRef, useState } from "react";
import { ExternalLink, GithubIcon, Link } from "lucide-react";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";
import { TiltEffect } from "./ui/tilt-effect";
import { Card } from "./ui/card";
import designerPortrait from "@/assets/designer-portrait.jpg";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    title: "PaisaHiPaisa",
    slug: "paisahipaisa",
    category: "Full Stack",
    description:
      "A web based mfs like app where users can send, withdraw and add money through agents. Admins can modify and manager users, agents and all transacti",
    image: "https://i.ibb.co.com/WpMbCjBf/paisahipaisa.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "ExperssJS",
      "NodeJS",
      "Redux ToolKit",
      "MongoDB(Mongoose)",
    ],
    links: {
      live: "https://paisa-hi-paisa-two.vercel.app/",
      gitf: "https://github.com/sakincse21/PaisaHiPaisa",
      gitb: "https://github.com/sakincse21/Digital-Banking-System",
    },
  },
  {
    title: "Blood Lagbe",
    slug: "blood-lagbe",
    category: "Full Stack",
    description:
      "A web app for voluntary blood donation management and finding nearby donors.",
    image: "https://i.ibb.co.com/KxM3tFq5/blood-lagbe.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NextJS",
      "MongoDB(Mongoose)",
      "Tailwind CSS",
      "DaisyUI",
      "Clerk",
    ],
    links: {
      live: "https://blood-lagbe-nextjs.vercel.app/",
      gitf: "https://github.com/sakincse21/blood-lagbe",
      gitb: "",
    },
  },
  {
    title: "Library Management System",
    slug: "library-management-system",
    category: "Full Stack",
    description:
      "A library management system where anyone can borrow books and update or remove from the list.",
    image: "https://i.ibb.co.com/7tzfQ9Lb/library.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "ExperssJS",
      "NodeJS",
      "Redux ToolKit",
      "MongoDB(Mongoose)",
      "Tailwind CSS",
    ],
    links: {
      live: "https://library-management-system-frontend-beta.vercel.app/",
      gitf: "https://github.com/sakincse21/Library-Management-System-Frontend",
      gitb: "https://github.com/sakincse21/L2B5-Assignment3",
    },
  },
];

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-heading">Projects</h2>
          <p className="body-text max-w-2xl mx-auto">
            A selection of recent projects that showcase my approach to develop
            web apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={project.title} className="w-full max-w-sm">
              <TiltEffect>
                <Card className="overflow-hidden pt-0 w-full h-full hover-lift">
                  <div
                    className={`group bg-background rounded-xl h-full overflow-hidden hover-lift fade-in flex flex-col ${
                      isVisible ? "visible" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-accent-soft relative overflow-hidden flex-shrink-0">
                      {/* Project Image */}
                      <img
                        src={project.image as string}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/20 to-hero-accent/20"></div>
                      {/* Hover Icon */}
                      <a
                        href={project?.links?.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-6 h-6 text-hero-accent" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase tracking-wide text-text-light font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="body-text text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="body-text flex flex-wrap gap-2 mb-4">
                        {project.technologies?.map((each, techIndex) => (
                          <span
                            key={techIndex}
                            className="border-2 bg-background px-2 py-1 rounded-md text-xs"
                          >
                            {each}
                          </span>
                        ))}
                      </div>
                      <div className="body-text flex flex-wrap gap-2">
                        {project?.links?.live && (
                          <a
                            href={project?.links?.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              size="sm"
                              className="text-xs"
                              variant="default"
                            >
                              <Link />
                              Live
                            </Button>
                          </a>
                        )}
                        {project?.links?.gitf && (
                          <a
                            href={project?.links?.gitf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="text-xs" variant="outline">
                              <GithubIcon />
                              Frontend
                            </Button>
                          </a>
                        )}
                        {project?.links?.gitb && (
                          <a
                            href={project?.links?.gitb}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="text-xs" variant="outline">
                              <GithubIcon />
                              Backend
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </TiltEffect>
            </div>
          ))}
        </div>
        <p className="w-full flex flex-row justify-center md:justify-end mt-8">
          <Button
            onClick={() => navigate("/projects")}
            variant="outline"
            className="mb-8 border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
          >
            See All Projects
          </Button>
        </p>
      </div>
    </section>
  );
};

export default Project;
