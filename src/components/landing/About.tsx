import { motion } from "framer-motion";

// ✅ NUEVO: Sección "Sobre Nosotros" con estilo editorial premium
const About = () => {
  return (
    <section id="nosotros" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Quiénes somos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            Sobre Neovista
          </h2>

          <div className="border border-border/50 rounded-lg p-10 md:p-14 bg-card/50">
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 font-light">
              En <span className="text-foreground font-medium">Neovista</span> transformamos ideas en experiencias
              digitales que impactan. Desde Buenos Aires para el mundo, creamos landing pages con un enfoque obsesivo en
              el detalle, la conversión y el diseño que rompe esquemas.
            </p>
            <div className="w-12 h-[1px] bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground font-body text-sm tracking-wide">
              Fundado por <span className="text-foreground">Jowidev</span>, técnico informático
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
