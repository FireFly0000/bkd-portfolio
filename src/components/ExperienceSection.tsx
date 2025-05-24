import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { Youtube } from "lucide-react";
import { cn } from "../lib/utils";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Horizon Labs AI",
    date: "Sept 4, 2024 - Dec 20, 2024",
    description: [
      "Engineered a Patient Dashboard on a tailwindCSS based web application with React and TypeScript, featuring user-friendly timelines and charts from Figma.",
      "Enhanced UI responsiveness with TailwindCSS, ensuring seamless performance across devices.",
      "Eliminated unnecessary re-renders of the expensive chart component by debugging with React DevTools. Optimized performance by 50%",
      "Improved data visualization by pre-processing patient test results data, maintaining the original ratio but with different scaling.",
      "Tested and debugged backend APIs with Azure's SQL database to ensure compatibility with the deployed version.",
      "Reduced unnecessary API calls by 60% by implementing a deboucing mechanism on the live search bar.",
      "Improved scalability by converting frontend filtering to backend filtering, reducing filtering time up to 62%.",
    ],
    tag: ["React", "TypeScript", "TailwindCSS", "Zustand", "Azure", "FastAPI"],
  },
];

function ExperienceSection() {
  const [currentId, setCurrentId] = useState(-1);
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Experience </span>
        </h2>

        <div className="flex flex-col justify-center items-center gap-10 w-full">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-lg hover:cursor-pointer card-hover w-full"
              onMouseEnter={() => setCurrentId(index)}
              onMouseLeave={() => setCurrentId(-1)}
            >
              {/*Title and Date*/}
              <div className="p-6 pb-4">
                <div className="flex flex-wrap gap-2 text-2xl md:text-3xl font-bold">
                  {item.title} - {item.company}
                </div>
                <p className=" flex flex-wrap text-xl text-muted-foreground">
                  {item.date}
                </p>
              </div>
              {/*Title and Date*/}
              <SlideDown>
                {currentId === index && (
                  <div className="flex-col text-start gap-4 p-4 pt-0">
                    {item.description.map((desc, key) => (
                      <p
                        key={key}
                        className="text-muted-foreground text-md text-lg hover:text-primary transition-colors duration-300"
                      >
                        ● {desc}
                      </p>
                    ))}
                  </div>
                )}
              </SlideDown>
              {/*Tags*/}
              <div className="flex flex-wrap gap-2 p-6 pt-0">
                {item.tag.map((tag, key) => (
                  <span
                    key={key}
                    className="px-4 py-1 text-md font-medium border rounded-full bg-primary text-primary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/*Tags*/}
              <a
                className={cn(
                  "flex flex-wrap gap-2 p-6 pt-0 text-md font-medium text-secondary-foreground",
                  "hover:text-primary transition-colors duration-300 hover:cursor-pointer hover:underline"
                )}
                href="https://www.youtube.com/watch?v=sjivfTCcpUw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
                <span>Works Demo</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
