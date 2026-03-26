import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+5491100000000";
const EMAIL = "xo.alt999@proton.me";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-2">// Hablemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            <span className="text-primary text-glow">Contacto</span>
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 border border-primary/20 p-6 bg-card/50 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-body text-lg text-foreground group-hover:text-primary transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-4 border border-secondary/20 p-6 bg-card/50 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <Phone className="text-secondary shrink-0" size={24} />
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Teléfono</p>
                  <p className="font-body text-lg text-foreground group-hover:text-secondary transition-colors">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-accent/20 p-6 bg-card/50 text-muted-foreground hover:text-accent transition-colors group"
              >
                <MessageCircle className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                  <p className="font-body text-lg text-foreground group-hover:text-accent transition-colors">
                    Abrir chat directo
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
