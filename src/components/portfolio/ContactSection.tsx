import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "balbaa09@gmail.com", href: "mailto:balbaa09@gmail.com" },
  { icon: Phone, label: "+20 111 728 0068", href: "tel:+201117280068" },
  { icon: Linkedin, label: "linkedin.com/in/balb3z", href: "https://www.linkedin.com/in/balb3z/" },
  { icon: MapPin, label: "Alexandria, Egypt", href: null },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:balbaa09@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <c.icon className="text-primary" size={18} />
                    </div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">{c.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
              <Textarea name="message" placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
