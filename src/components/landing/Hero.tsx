import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ NUEVO: Hero premium con tipografía serif de alto contraste y CTA definido
const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ NUEVO: Gradiente sutil de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* ✅ NUEVO: Subtítulo con tracking amplio — transmite profesionalismo */}
          <p className="font-body text-sm md:text-base tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Agencia de Desarrollo Web — Buenos Aires
          </p>

          {/* ✅ NUEVO: Título con serif de alto contraste */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1]">
            Creamos experiencias
            <br />
            <span className="text-gradient">digitales que venden</span>
          </h1>

          {/* ✅ NUEVO: Línea separadora — acento visual */}
          <div className="w-16 h-[1px] bg-accent mx-auto mb-8" />

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Diseñamos landing pages de alto rendimiento que convierten visitantes en clientes.
            Tecnología, estrategia y diseño al servicio de tu negocio.
          </p>

          {/* ✅ NUEVO: Dos CTAs — primario (sólido) y secundario (outline) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" className="text-base px-10" onClick={() => scrollTo("contacto")}>
              Empezar un proyecto
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10" onClick={() => scrollTo("servicios")}>
              Ver servicios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
