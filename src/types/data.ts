// ✅ NUEVO: Interfaces tipadas para los datos JSON del proyecto

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}
