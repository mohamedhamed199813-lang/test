import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Users, Star } from "lucide-react";

const activities = [
  {
    title: "Media Head",
    org: "Safwa FCDS",
    desc: "Led the media committee, managing content creation, social media strategy, and team coordination for faculty events.",
    icon: Star,
  },
  {
    title: "Team Leader",
    org: "DEPI Data Science Cohort",
    desc: "Leading a team of data science trainees, coordinating project timelines, and facilitating collaboration on ML projects.",
    icon: Users,
  },
];

const ActivitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Activities & Leadership</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {activities.map((a, i) => (
              <div
                key={a.title}
                className={cn(
                  "bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-md hover:-translate-y-1",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <a.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{a.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{a.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
