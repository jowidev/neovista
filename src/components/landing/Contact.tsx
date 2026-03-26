import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PHONE_NUMBER = "+5491100000000";
const EMAIL = "xo.alt999@proton.me";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible.",
    });
    setForm({ name: "", email: "", message: "" });
  };

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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border border-primary/20 p-8 bg-card/50 space-y-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-body text-lg text-foreground group-hover:text-primary transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="h-px bg-border" />

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <Phone className="text-secondary shrink-0" size={24} />
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Teléfono</p>
                  <p className="font-body text-lg text-foreground group-hover:text-secondary transition-colors">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </a>

              <div className="h-px bg-border" />

              <a
                href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
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
          /* {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="border border-secondary/20 p-8 bg-card/50 space-y-5">
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Nombre
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-muted border-border font-body text-lg focus:border-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-muted border-border font-body text-lg focus:border-primary"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-muted border-border font-body text-lg focus:border-primary min-h-[120px]"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6 gap-2">
                <Send size={18} />
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
          */
        </div>
      </div>
    </section>
  );
};

export default Contact;
