import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Loan Prediction System",
    desc: "ML model to predict loan approval status based on applicant data using classification algorithms.",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    link: "https://github.com/balb3z/Loan-Approval-Prediction",
  },
  {
    title: "Customer Segmentation",
    desc: "Unsupervised learning project using K-Means clustering to segment customers for targeted marketing.",
    tags: ["Python", "K-Means", "Data Analysis"],
    link: "https://github.com/balb3z/Customer-Segmentation",
  },
  {
    title: "Student Performance Prediction",
    desc: "Predictive model analyzing factors affecting student academic performance using regression techniques.",
    tags: ["Python", "Regression", "EDA"],
    link: "https://github.com/balb3z/Student-score-prediction",
  },
  {
    title: "University Management System",
    desc: "Full OOP-based system for managing students, courses, and grades with a structured database design.",
    tags: ["C++", "OOP", "Data Structures"],
    link: "",
  },
  {
    title: "Sparse Table Implementation",
    desc: "Efficient data structure implementation for range minimum queries with O(1) query time.",
    tags: ["C++", "Algorithms", "Competitive Programming"],
    link: "",
  },
  {
    title: "Maze Solver",
    desc: "Pathfinding algorithm visualizer using BFS/DFS to solve mazes and display optimal routes.",
    tags: ["Python", "Algorithms", "Visualization"],
    link: "",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-2">
          Projects
        </h2>
        <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={p.link ? "cursor-pointer" : "cursor-default"}
            >
              <div
                className={cn(
                  "group bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{
                  transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {p.title}
                  </h3>

                  {p.link && (
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                    />
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
