export interface ItemMenu {
  name: string;
  href?: string;
  children?: ItemMenu[];
}

export const ItemMenuComponents: ItemMenu[] = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/about" },
  {
    name: "Servicios",
    children: [
      { name: "Servicio Técnico", href: "/servtec" },
      { name: "Reparación de Notebooks", href: "/repnote" },
      { name: "Reparación de Mac", href: "/repmac" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];