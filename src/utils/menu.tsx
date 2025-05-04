import { Binoculars, ChartLine, User } from "phosphor-react";

export type RouteOptions = "/" | "/discover" | "/profile";

interface MenuItemsProps {
  label: string;
  icon: React.JSX.Element;
  path: RouteOptions;
}

const menuItems: MenuItemsProps[] = [
  {
    label: "Início",
    icon: <ChartLine size={24} />,
    path: "/",
  },
  {
    label: "Explorar",
    icon: <Binoculars size={24} />,
    path: "/discover",
  },
  {
    label: "Perfil",
    icon: <User size={24} />,
    path: "/profile",
  },
];

export { menuItems };
