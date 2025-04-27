import Image from "next/image";
import {
  AsideContainer,
  AsideLogOut,
  LoginButton,
  MenuButton,
  MenuContainer,
  MenuList,
} from "./styles";

import logo from "@/assets/logo.png";
import { Binoculars, ChartLine, SignIn, SignOut } from "phosphor-react";
import { Avatar } from "../Avatar";
import { useRouter } from "next/router";
import { menuItems, RouteOptions } from "@/utils/menu";

export function AsideMenu() {
  const router = useRouter();

  const handleSelectPage = (route: RouteOptions) => {
    router.push(route);
  };

  return (
    <AsideContainer>
      <header>
        <Image src={logo} alt="logo" width={128} />
      </header>

      <MenuContainer>
        <MenuList>
          {menuItems.map((item) => (
            <li key={item.path}>
              <MenuButton
                selected={router.route === item.path}
                onClick={() => handleSelectPage(item.path)}
              >
                {item.icon}
                {item.label}
              </MenuButton>
            </li>
          ))}
        </MenuList>
      </MenuContainer>

      <footer>
        <AsideLogOut>
          <Avatar src="https://github.com/dev-gabriel-henrique.png" />
          <p>Cristofer</p>
          <button>
            <SignOut size={20} />
          </button>
        </AsideLogOut>
        {/* <LoginButton>
          Fazer login
          <SignIn size={20} />
        </LoginButton> */}
      </footer>
    </AsideContainer>
  );
}
