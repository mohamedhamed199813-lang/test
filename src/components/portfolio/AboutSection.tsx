import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "flex flex-col md:flex-row items-center justify-center gap-12 transition-all duration-700 max-w-4xl mx-auto text-center md:text-left",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Photo */}
          <div className="relative w-56 flex-shrink-0 mx-auto">
            <img
              src={profilePhoto}
              alt="Abdelrahman Balbaa"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              About Me
            </h2>

            <div className="w-12 h-1 bg-primary rounded mb-6 mx-auto md:mx-0" />

            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated AI and Data Science student at Alexandria University with a strong foundation in machine learning, data analysis, and software development.
              I've completed internships at WE Telecom and CIB, and I'm currently enrolled in the Digital Egypt Pioneers Initiative (DEPI) for Data Science.
              I thrive on solving complex problems, leading teams, and creating impactful solutions that leverage the power of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
