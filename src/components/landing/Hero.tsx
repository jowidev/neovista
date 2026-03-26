import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid scanline">
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/40 m-6" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-secondary/40 m-6" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-secondary mb-4 text-glow-cyan">
            // Buenos Aires, Argentina
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow mb-6 leading-tight">
            N<span className="text-secondary text-glow-cyan">V</span>
          </h1>

          <div className="w-24 h-[2px] bg-accent mx-auto mb-6" />

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseñamos landing pages que <span className="text-primary text-glow">convierten visitantes</span> en
            clientes.
            <br />
            Tu presencia digital, al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="text-lg px-8 py-6" onClick={() => scrollTo("contacto")}>
              Contactanos
            </Button>
            <Button size="lg" variant="cyber-cyan" className="text-lg px-8 py-6" onClick={() => scrollTo("servicios")}>
              Ver Servicios
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
