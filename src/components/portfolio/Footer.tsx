import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2025 Abdelrahman Balbaa. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="mailto:abdelrahmanbalbaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
        <a href="tel:+201033378927" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
        <a href="https://linkedin.com/in/abdelrahman-balbaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
