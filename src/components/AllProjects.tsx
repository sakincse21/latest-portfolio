import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { TiltEffect } from "./ui/tilt-effect";
import { Button } from "./ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Github,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Projects data without detailed descriptions
const projects = [
  {
    title: "PaisaHiPaisa",
    category: "Full Stack",
    description:
      "A comprehensive web-based Mobile Financial Service (MFS) application where users can send, withdraw and add money through agents. Admins can modify and manage users, agents and all transactions.",
    image: "https://i.ibb.co.com/WpMbCjBf/paisahipaisa.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "Redux Toolkit",
      "MongoDB (Mongoose)",
    ],
    links: {
      live: "https://paisa-hi-paisa-two.vercel.app/",
      frontend: "https://github.com/sakincse21/PaisaHiPaisa",
      backend: "https://github.com/sakincse21/Digital-Banking-System",
    },
    slug: "paisahipaisa-mfs-app",
    date: "2024-11-15",
    duration: "2 months",
    features: [
      "User registration and secure login system",
      "Wallet balance management",
      "Money transfer between users",
      "Agent cash-in/cash-out functionality",
      "Admin dashboard for user and transaction management",
      "Real-time transaction history",
      "Role-based access control (User, Agent, Admin)",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing secure JWT authentication",
      "Managing complex state with Redux Toolkit",
      "Designing scalable database schema",
      "Handling real-time transaction updates",
    ],
    learnings: [
      "Advanced React patterns and hooks",
      "State management with Redux Toolkit",
      "RESTful API design principles",
      "Database modeling with MongoDB",
    ],
  },
  {
    title: "Blood Lagbe",
    category: "Full Stack",
    description:
      "A comprehensive web application for voluntary blood donation management and finding nearby blood donors with real-time availability tracking.",
    image: "https://i.ibb.co.com/KxM3tFq5/blood-lagbe.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Next.js",
      "MongoDB (Mongoose)",
      "Tailwind CSS",
      "DaisyUI",
      "Clerk Authentication",
    ],
    links: {
      live: "https://blood-lagbe-nextjs.vercel.app/",
      frontend: "https://github.com/sakincse21/blood-lagbe",
      backend: "",
    },
    slug: "blood-lagbe-donation-app",
    date: "2024-10-20",
    duration: "1.5 months",
    features: [
      "User registration and authentication with Clerk",
      "Blood donor search by location and blood type",
      "Donor profile management",
      "Blood bank integration",
    ],
    challenges: [
      "Integrating third-party authentication",
      "Designing efficient search algorithms",
    ],
    learnings: [
      "Next.js 13+ app router and server components",
      "Clerk authentication integration",
      "Advanced MongoDB queries and indexing",
    ],
  },
  {
    title: "Library Management System",
    category: "Full Stack",
    description:
      "A comprehensive library management system where users can browse, borrow books, and manage their reading history. Administrators can manage the book inventory and user accounts.",
    image: "https://i.ibb.co.com/7tzfQ9Lb/library.gif",
    technologies: [
      "ReactJS",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "Redux Toolkit",
      "MongoDB (Mongoose)",
      "Tailwind CSS",
    ],
    links: {
      live: "https://library-management-system-frontend-beta.vercel.app/",
      frontend:
        "https://github.com/sakincse21/Library-Management-System-Frontend",
      backend: "https://github.com/sakincse21/L2B5-Assignment3",
    },
    slug: "library-management-system",
    date: "2024-09-10",
    duration: "3 weeks",
    features: [
      "Book catalog with search and filter functionality",
      "User authentication and profile management",
      "Book borrowing and returning system",
      "Due date tracking and overdue notifications",
      "Reading history and statistics",
      "Book availability tracking",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing complex book availability logic",
      "Creating efficient search and filter system",
    ],
    learnings: [
      "Advanced MongoDB aggregation pipelines",
      "Complex state management patterns",
      "Date handling and calculations in JavaScript",
      "Building scalable admin interfaces",
    ],
  },
];

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleViewProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <section className="py-20 px-6 bg-surface/30 backdrop-blur-sm min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={handleBackToList}
            variant="outline"
            className="mb-8 border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-text-light text-sm">
              <span className="bg-hero-accent/10 text-hero-accent px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedProject.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedProject.duration}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedProject.title}
            </h1>
            <p className="body-text text-lg mb-6">
              {selectedProject.description}
            </p>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {selectedProject.links.live && (
                <Button
                  asChild
                  className="bg-hero-accent text-surface hover:bg-hero-accent/90"
                >
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {selectedProject.links.frontend && (
                <Button
                  asChild
                  variant="outline"
                  className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
                >
                  <a
                    href={selectedProject.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Frontend Code
                  </a>
                </Button>
              )}
              {selectedProject.links.backend && (
                <Button
                  asChild
                  variant="outline"
                  className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
                >
                  <a
                    href={selectedProject.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Backend Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="cosmic-card mb-8">
                <div className="p-8">
                  {/* Project Image */}
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Overview */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Project Overview
                      </h2>
                      <p className="body-text leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Development Journey
                      </h3>
                      <p className="body-text leading-relaxed mb-4">
                        This project was developed over{" "}
                        {selectedProject.duration} and involved building a
                        complete full-stack application with modern web
                        technologies. The development process included planning
                        the architecture, designing the user interface,
                        implementing the backend API, and deploying to
                        production.
                      </p>
                      <p className="body-text leading-relaxed">
                        Throughout the development process, I focused on
                        creating a scalable and maintainable codebase while
                        ensuring an excellent user experience across all
                        devices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Technical Implementation
                      </h3>
                      <p className="body-text leading-relaxed">
                        The application follows modern web development best
                        practices with a React-based frontend and Node.js
                        backend. The architecture emphasizes separation of
                        concerns, reusable components, and efficient state
                        management to ensure optimal performance and
                        maintainability.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Technologies */}
              <Card className="cosmic-card mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-hero-accent/10 text-hero-accent rounded-full border border-hero-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Key Features */}
              <Card className="cosmic-card mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-text-light flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-hero-accent rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Challenges */}
              <Card className="cosmic-card mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Challenges Overcome
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-sm text-text-light flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-warm rounded-full mt-2 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Key Learnings */}
              <Card className="cosmic-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Key Learnings
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="text-sm text-text-light flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-surface/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-8 border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
        >
          ← Back to Portfolio
        </Button>
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <h2 className="section-heading">All Projects</h2>
          <p className="body-text max-w-2xl mx-auto">
            A comprehensive showcase of my development journey, featuring
            full-stack applications with detailed technical implementations and
            learnings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltEffect key={project.slug}>
              <Card className="cosmic-card group h-full">
                <div
                  className={`h-full flex flex-col fade-in ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-accent-soft relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/20 to-hero-accent/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-6 h-6 text-hero-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-4 text-text-light text-xs">
                      <span className="bg-hero-accent/10 text-hero-accent px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {project.duration}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-hero-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="body-text text-sm mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-background border rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-hero-accent/10 text-hero-accent rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button
                        onClick={() => handleViewProject(project)}
                        variant="outline"
                        className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface transition-all duration-300 flex-1"
                        size="sm"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      {project.links.live && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-hero-accent text-surface hover:bg-hero-accent/90"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </TiltEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
