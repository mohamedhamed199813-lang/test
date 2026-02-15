import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { BarChart3, Brain, LineChart, Code, Lightbulb } from "lucide-react";

const services = [
  { title: "Data Analysis", desc: "Exploring and interpreting complex datasets to uncover trends and actionable insights.", icon: BarChart3 },
  { title: "ML Models", desc: "Building and deploying machine learning models for prediction, classification, and clustering.", icon: Brain },
  { title: "Data Visualization", desc: "Creating interactive dashboards and compelling visual stories from raw data.", icon: LineChart }
  
  
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Services</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={cn(
                  "bg-card border border-border rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
