import { Mail, Linkedin } from "lucide-react";
import type { TeamMember } from "@/types/data";
import teamData from "@/data/team.json";

// ✅ NUEVO: Cast tipado del JSON importado
const team: TeamMember[] = teamData as TeamMember[];

const EMAIL = "xo.alt999@proton.me";

// ✅ NUEVO: Footer profesional con equipo desde team.json
const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marca */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Neovista<span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Tu presencia digital, al siguiente nivel.
            </p>
          </div>

          {/* ✅ NUEVO: Equipo obtenido desde team.json */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Equipo
            </h4>
            <ul className="space-y-3">
              {team.map((member) => (
                <li key={member.id} className="flex items-center gap-3">
                  {/* Avatar con iniciales */}
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm text-foreground">{member.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground font-body text-xs tracking-wide">
            © 2026 Neovista. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
