import { ArrowDown } from "lucide-react";
import MyPic from "/my-pic.jpg";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 mt-25">
          <div className="flex w-full items-center justify-center">
            <img
              src={MyPic}
              className="object-contain sm:max-w-[480px] h-fit  gradient-border card-hover cursor-pointer"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Bang
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Do
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a passionate software engineer with a knack for creating
            beautiful and efficient web applications. I have a professional
            background working as a full-stack developer, with a focus on
            front-end technologies. I am always eager to learn new skills and
            take on new challenges.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
