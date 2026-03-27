import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+54 11 25047228";
const EMAIL = "xo.alt999@proton.me";

// ✅ NUEVO: Sección de contacto con cards premium en grid
const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Hablemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contacto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="flex flex-col items-start gap-4 border border-border/50 rounded-lg p-10 bg-card/50 hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Email</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors text-sm">
              {EMAIL}
            </p>
          </motion.a>

          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start gap-4 border border-border/50 rounded-lg p-10 bg-card/50 hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <Phone className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Teléfono</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors text-sm">
              {PHONE_NUMBER}
            </p>
          </motion.a>

          <motion.a
            href={`https://wa.me/541125047228?text=Hola! Me interesaba una página web`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start gap-4 border border-border/50 rounded-lg p-10 bg-card/50 hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <MessageCircle className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">WhatsApp</h3>
            <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors text-sm">
              Abrir chat directo
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
