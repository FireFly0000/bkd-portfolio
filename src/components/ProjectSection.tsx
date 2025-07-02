import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Blog",
    description:
      "Crafted a personal blog application using the Component-based Architecture to achieve modular and maintainable design. Integrated visually engaging designs and stylings with CSS. Utilizing Cloudinary and Vercel for streamlined, maintainable postgres database and file storage.",
    image: "/projects/BlogImg.JPG",
    tags: ["React", "NodeJS", "Express", "PostgreSQL", "Cloudinary", "Vercel"],
    demoUrl: "https://personal-blog-frontend-deploy.vercel.app/",
    githubUrl: "https://github.com/FireFly0000/Personal-Blog",
  },
  {
    id: 2,
    title: "E-Library Dashboard",
    description:
      "Designed an Interactive dashboard that helps share E-books with optimized pagination and filtering capabilities. Testing and using different techniques such as debouncing and rate limiting to improve performance of the live search feature. Fully utilizing AWS services such as EC2 and S3 for hosting and file storage. Significantly improved the performance of backend server by deploying on an EC2 instance with Ubuntu. (currently disabled due to charges)",
    image: "/projects/ELibImg.JPG",
    tags: ["React", "NodeJS", "Prisma", "PostgreSQL", "EC2", "S3", "AWS"],
    //demoUrl: "https://e-library-dashboard-fe-deployed.vercel.app/",
    githubUrl: "https://github.com/FireFly0000/E-Library-Dashboard",
  },
  {
    id: 3,
    title: "GroupFlow, Task Management App",
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
    description:
      "Collaborated in a cross-functional team of 5 to develop Hometown, a mobile application that empowers local businesses to promote their services. Built robust, automated pre-scheduled email and SMS functionalities using Supabase and Express, seamlessly integrated with real-time data. Implemented a responsive, user-friendly interface with React Native and Expo Go, closely matching Figma designs to ensure a consistent experience across devices.",
    image: "/projects/HometownImg.JPG",
    tags: ["React Native", "NodeJS", "Express", "Supabase", "Expo Go"],
    demoUrl: "",
    githubUrl: "https://github.com/FireFly0000/Hometown",
  },
];

export const ProjectsSection = () => {
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

                <h3 className="text-start text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg text-start mb-4">
                  {project.description}
                </p>
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
