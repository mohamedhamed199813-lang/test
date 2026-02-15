import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

const certifications = [
  { name: "AWS Machine Learning Foundations", issuer: "Amazon Web Services", year: "2025" },
  { name: "Oracle AI Foundations", issuer: "Oracle", year: "2025" },
  { name: "Applications of Artificial Intelligence", issuer: "The British University in Egypt ", year: "2025" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", year: "2025" },

];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">

        {/* Education */}
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700 mb-16",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-6">

              {/* BIG University Image */}
              <img
                src="/alexu.png"
                alt="Alexandria University"
                className="w-28 h-28 rounded-2xl object-cover border border-border shadow-md"
              />

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Alexandria University
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Faculty of Computer and Data Science — AI Department
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  2024 – 2028 (Expected)
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Certifications */}
        <div
          ref={ref2}
          className={cn(
            "transition-all duration-700",
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((c, i) => (
              <div
                key={c.name}
                className={cn(
                  "bg-card border border-border rounded-xl p-5 transition-all duration-500 hover:scale-105 hover:shadow-md",
                  isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: isVisible2 ? `${i * 100}ms` : "0ms" }}
              >
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {c.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {c.issuer} · {c.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
