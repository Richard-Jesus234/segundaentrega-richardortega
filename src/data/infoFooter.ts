export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FooterSections: FooterSection[] = [
  {
    title: "Explorar",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Reparación de Notebooks", href: "/repnote" },
      { label: "Reparación de Mac", href: "/repmac" },
      { label: "Servicio Técnico", href: "/servtec" },
      { label: "Contactenos!", href: "/contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Diagnóstico Gratuito", href: "/contacto" },
      { label: "Mantenimiento Preventivo", href: "/contacto" },
      { label: "Recuperación de Datos", href: "/contacto" },
      { label: "Instalación de Software", href: "/contacto" },
      { label: "Upgrade de Componentes", href: "/contacto" },
    ],
  },
  {
    title: "Contáctanos",
    links: [
      {
        label: "Ubaldo Mansilla 131, 5700328 Castro, Los Lagos",
        href: "https://www.google.com/maps/dir//Ubaldo+Mansilla+131,+5700328+Castro,+Los+Lagos",
      },
      { label: "+56 9 1234 5678", href: "/contacto" },
      { label: "contacto@ratafix.cl", href: "#" },
    ],
  },
];