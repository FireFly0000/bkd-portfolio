import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new
          opportunities.
        </p>

        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

          <div className="space-y-3 justify-center">
            {/* email section*/}
            <div className="flex items-start justify-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col items-start justify-start text-lg">
                <h4 className="font-medium"> Email</h4>
                <a
                  href="mailto:bangkimdo4.9@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  bangkimdo4.9@gmail.com
                </a>
              </div>
            </div>

            {/* phone section*/}
            <div className="flex items-start justify-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />{" "}
              </div>
              <div className="flex flex-col items-start justify-start text-lg">
                <h4 className="font-medium"> Phone</h4>
                <a
                  href="tel:+19095156534"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (909) 515-6534
                </a>
              </div>
            </div>

            {/* location section*/}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />{" "}
              </div>
              <div className="flex flex-col items-start justify-start text-lg">
                <h4 className="font-medium"> Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Pomona, CA, US
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4"> Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/bang-do010101/"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/bangkimdo/"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
