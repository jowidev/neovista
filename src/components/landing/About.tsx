import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-2">// Quiénes somos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sobre <span className="text-primary text-glow">Neovista</span>
          </h2>

          <div className="border border-primary/20 p-8 md:p-12 bg-card/50 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-6">
              En <span className="text-primary font-semibold">Neovista</span> transformamos ideas en experiencias digitales que impactan.
              Desde Buenos Aires para el mundo, creamos landing pages con un enfoque obsesivo en el detalle,
              la conversión y el diseño que rompe esquemas. No hacemos sitios genéricos — hacemos presencias digitales
              que dejan huella.
            </p>
            <div className="w-16 h-[2px] bg-accent mx-auto mb-4" />
            <p className="text-secondary font-display text-sm tracking-widest uppercase text-glow-cyan">
              Hecho por Jowi, técnico informático
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
