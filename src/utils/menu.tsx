import { Binoculars, ChartLine } from "phosphor-react";

export type RouteOptions = "/" | "/discover";

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
];

export { menuItems };
