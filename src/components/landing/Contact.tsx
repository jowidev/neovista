import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+549 11 25047228";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="flex flex-col items-start gap-4 border border-primary/20 p-8 bg-card/50 hover:border-primary/60 transition-colors group"
          >
            <Mail className="text-primary" size={32} />
            <h3 className="font-display text-xl font-bold text-primary">Email</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors">{EMAIL}</p>
          </motion.a>

          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start gap-4 border border-secondary/20 p-8 bg-card/50 hover:border-secondary/60 transition-colors group"
          >
            <Phone className="text-secondary" size={32} />
            <h3 className="font-display text-xl font-bold text-secondary">Teléfono</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
              {PHONE_NUMBER}
            </p>
          </motion.a>

          <motion.a
            href={`https://web.whatsapp.com/send/?phone=+54&1125047228&text=MESSAGE`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start gap-4 border border-accent/20 p-8 bg-card/50 hover:border-accent/60 transition-colors group"
          >
            <MessageCircle className="text-accent" size={32} />
            <h3 className="font-display text-xl font-bold text-accent">WhatsApp</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
              Abrir chat directo
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
