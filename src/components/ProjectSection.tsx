import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SlideDown from "react-slidedown";

const projects = [
  {
    id: 1,
    title: "E-Library App with AI Reading Assistant",
    date: "Mar 20, 2025 - Present",
    description:
      "An AI-powered e-library where readers can search, share, and enjoy e-books with built-in translation, summarization, and content analysis. Supports multiple book versions and in-app PDF reading for a seamless reading experience.",
    image: "/projects/ELibImg.JPG",
    details: [
      {
        label: "Frontend Notable Works",
        items: [
          "Enhanced dashboard responsiveness through UI state management optimization with Redux and React Redux Toolkit (RTK).",
          "Streamlined GET queries/APIs efficiency and caching by 66.7% using RTK Query from 3ms to 1ms.",
          "Streamlined important form submissions or UPDATE API calls using Redux Thunk functions to invalidate RTK's tags for refetch and toast messages.",
          "Reduced unnecessary API calls by 60% by implementing a debouncing mechanism on live search bar.",
          "Enhanced UI styling consistency and responsive design by streamlining color themes and typography with TailwindCSS and ShadCn, cutting boilerplate code by 18%.",
          "Reduced deployment time by 25% with Vercel's automated deployments and caching, utilizing CI/CD pipelines for faster and more reliable updates.",
        ],
      },
      {
        label: "Backend Notable Works",
        items: [
          "Implemented secure JWT authentication with short-lived access tokens and long-lived refresh tokens.",
          "Mitigated XSS attacks by securely setting and clearing refresh tokens server-side.",
          "Blacklisted refresh tokens in Redis on logout to block live but invalid tokens.",
          "Safely utilized Prisma raw query functions to perform CTE-based chained updates across multiple tables, improving latency by 75% from 200ms to 50ms",
          "Cached AWS S3 presigned URLs in Redis to optimize performance and reduce redundant URL generation for high-traffic scenarios.",
          "Reduced deployment time by 30% by containerizing the server with Docker and implementing CI/CD pipelines via GitHub Actions for automated Google Cloud Run deployments",
        ],
      },
    ],
    tags: [
      "React",
      "Redux",
      "RTK Query",
      "NodeJS",
      "Prisma",
      "PostgreSQL",
      "S3",
      "AWS",
      "Google Cloud Run",
      "Redis",
      "Docker",
      "Vercel",
    ],
    demoUrl: "https://e-library-dashboard-fe-deployed.vercel.app/",
    githubUrl: "https://github.com/FireFly0000/E-Library-Dashboard",
  },
  {
    id: 2,
    title: "GroupFlow, Task Management App",
    date: "Jan 2023 - March 2023",
    description:
      "Led the development of GroupFlow, a visually engaging task management application using React and Django. Implemented a user-friendly interface with real-time collaboration features such as task updates and group communication. Utilized Bootstrap for a responsive and maintainable frontend design. Contributed to unit and integration testing of Django APIs to ensure backend reliability and performance.",
    image: "/projects/GroupFlowImg.JPG",
    tags: [
      "React",
      "Django",
      "Python",
      "Bootstrap",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/FireFly0000/GroupFlow",
  },
  {
    id: 3,
    title: "Hometown, Business Promotion App",
    date: "Sept 2022 - March 2023 ",
    description:
      "Collaborated in a cross-functional team of 5 to develop Hometown, a mobile application that empowers local businesses to promote their services. Built robust, automated pre-scheduled email and SMS functionalities using Supabase and Express, seamlessly integrated with real-time data. Implemented a responsive, user-friendly interface with React Native and Expo Go, closely matching Figma designs to ensure a consistent experience across devices.",
    image: "/projects/HometownImg.JPG",
    tags: ["React Native", "NodeJS", "Express", "Supabase", "Expo Go"],
    demoUrl: "",
    githubUrl: "https://github.com/FireFly0000/Hometown",
  },
];

export const ProjectsSection = () => {
  const [currentId, setCurrentId] = useState(-1);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleProjectItemsDetailClick = (index: number) => {
    if (index === currentId) {
      setCurrentId(-1);
    } else {
      setCurrentId(index);
    }
  };

  // Close project detail when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 1. Ignore clicks on the scrollbar
      if (event.clientX >= document.documentElement.clientWidth) {
        return; // Click is on vertical scrollbar
      }

      if (currentId !== -1) {
        const clickedInside = refs.current[currentId]?.contains(
          event.target as Node
        );
        if (!clickedInside) {
          setCurrentId(-1);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [currentId]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/*General projects */}
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover w-full"
            >
              <div className="overflow-hidden max-h-[800px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-3 py-1 text-md font-medium border rounded-full bg-primary text-primary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-start text-2xl font-semibold mb-2">
                  {project.title}
                </h2>
                <h3 className="text-start text-xl font-semibold mb-2">
                  {project.date}
                </h3>
                <p className="text-muted-foreground text-lg text-start mb-4">
                  {project.description}
                </p>

                {/*For projects with more details*/}
                {project.details ? (
                  <div className="flex flex-col mt-4 mb-8 gap-4">
                    {project.details.map((item, index) => (
                      <div
                        key={index}
                        className="text-start"
                        ref={(el) => {
                          refs.current[index] = el;
                        }}
                      >
                        {/*section title (frontend works, backend works, etc) */}
                        <div
                          className="flex items-center gap-2 text-primary w-fit cursor-pointer"
                          onClick={() => handleProjectItemsDetailClick(index)}
                        >
                          <span className="text-xl text-start font-semibold underline">
                            {item.label}
                          </span>
                          <ArrowRight
                            className={`ml-2 transition-all duration-200 ${
                              currentId === index ? "rotate-90" : ""
                            }`}
                            size={25}
                          />
                        </div>

                        {/* details*/}
                        <SlideDown>
                          {currentId === index && (
                            <div className="mt-2 flex flex-col gap-2">
                              {item.items.map((content, index) => (
                                <span
                                  className="text-muted-foreground text-md text-lg hover:text-primary transition-colors duration-300 cursor-pointer"
                                  key={index}
                                >
                                  ● {content}
                                </span>
                              ))}
                            </div>
                          )}
                        </SlideDown>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={25} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/FireFly0000"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
