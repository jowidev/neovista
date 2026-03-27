import { motion } from "framer-motion";
import { Globe, Server, Sparkles } from "lucide-react";
import type { Service } from "@/types/data";
import servicesData from "@/data/services.json";

// ✅ NUEVO: Mapa de iconos para resolver el string del JSON a un componente React
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Server,
  Sparkles,
};

// ✅ NUEVO: Cast tipado del JSON importado
const services: Service[] = servicesData as Service[];

const Services = () => {
  return (
    <section id="servicios" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nuestros Servicios
          </h2>
        </motion.div>

        {/* ✅ NUEVO: Grid de servicios desde services.json */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card border border-border/50 rounded-lg p-10 hover:border-accent/40 transition-all duration-300 group"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body text-base leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
