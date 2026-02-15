import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Data Science Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2026 – Present",
    logo: "/depi.png",
    points: [
      "Enrolled in an intensive data science program covering ML, deep learning, and big data.",
      "Working on real-world projects with industry mentors.",
      "Leading a team of peers on collaborative data science tasks.",
    ],
  },
  {
    role: "Summer Intern",
    company: "WE Telecom",
    period: "Summer 2025",
    logo: "/we.png",
    points: [
      "Gained hands-on experience in data analysis and telecom operations.",
      "Worked with network performance data to identify optimization opportunities.",
      "Collaborated with cross-functional teams on technical projects.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Commercial International Bank (CIB)",
    period: "Summer 2025",
    logo: "/cib.png",
    points: [
      "Explored banking operations and financial data processes.",
      "Assisted in data entry, analysis, and reporting tasks.",
      "Developed understanding of financial technology systems.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-2">
          Experience
        </h2>
        <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex mb-12 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "md:flex-row flex-col pl-12 md:pl-0"
      )}
    >
      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 z-10" />

      {/* Card */}
      <div className={cn("md:w-1/2", isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto")}>
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">

          {/* Header row */}
          <div className="flex items-center gap-3 mb-2 justify-start md:justify-inherit">

            {/* Company Logo */}
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-8 h-8 rounded-md object-contain border border-border bg-white p-1"
            />

            <span className="text-sm text-muted-foreground">
              {exp.period}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground">
            {exp.role}
          </h3>

          <p className="text-primary font-medium text-sm mb-3">
            {exp.company}
          </p>

          <ul className={cn("space-y-1 text-sm text-muted-foreground", isLeft ? "md:text-right" : "")}>
            {exp.points.map((p, j) => (
              <li key={j}>• {p}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
