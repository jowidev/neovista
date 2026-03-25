import { motion } from "framer-motion";
import { Globe, Server, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Diseñamos páginas de aterrizaje optimizadas para captar contactos y generar conversiones reales para tu negocio.",
    color: "primary" as const,
  },
  {
    icon: Server,
    title: "Hosting Web",
    description: "Alojamos tu landing page en servidores rápidos y seguros para que esté siempre disponible, sin complicaciones técnicas.",
    color: "secondary" as const,
  },
  {
    icon: Sparkles,
    title: "Próximamente",
    description: "Estamos preparando nuevos servicios para potenciar tu presencia digital. Mantenete atento a las novedades.",
    color: "accent" as const,
  },
];

const colorClasses = {
  primary: { border: "border-primary/30 hover:border-primary", text: "text-primary", glow: "text-glow" },
  secondary: { border: "border-secondary/30 hover:border-secondary", text: "text-secondary", glow: "text-glow-cyan" },
  accent: { border: "border-accent/30 hover:border-accent", text: "text-accent", glow: "text-glow-pink" },
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-2">// Qué hacemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nuestros <span className="text-primary text-glow">Servicios</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const colors = colorClasses[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-card border ${colors.border} p-8 transition-all duration-300 group`}
              >
                <service.icon className={`${colors.text} ${colors.glow} mb-5`} size={40} />
                <h3 className={`font-display text-xl font-bold ${colors.text} mb-3`}>{service.title}</h3>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
