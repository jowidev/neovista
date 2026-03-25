import { Mail, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+5491100000000";
const EMAIL = "xo.alt999@proton.me";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-primary text-glow">
              NEO<span className="text-secondary text-glow-cyan">VISTA</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Tu presencia digital, al siguiente nivel.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="text-muted-foreground hover:text-secondary transition-colors">
              <Phone size={20} />
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2026 Neovista. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
