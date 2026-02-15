import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillGroups = [
  { title: "Languages", skills: ["Python", "C++", "SQL", "Java", "HTML/CSS"] },
  { title: "Tools & Libraries", skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn", "Power BI", "Excel", "Git"] },
  { title: "Concepts", skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization", "Statistical Modeling" ] },
  { title: "Soft Skills", skills: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management", "Presentation"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Skills</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillGroups.map((group, gi) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={cn(
                        "text-sm py-1.5 px-3 cursor-default transition-all duration-300 hover:scale-110 hover:shadow-md",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: isVisible ? `${(gi * 6 + si) * 50}ms` : "0ms" }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
