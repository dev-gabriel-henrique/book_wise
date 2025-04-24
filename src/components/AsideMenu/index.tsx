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
import { useState } from "react";
import { Avatar } from "../Avatar";

export function AsideMenu() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

  return (
    <AsideContainer>
      <header>
        <Image src={logo} alt="logo" width={128} />
      </header>

      <MenuContainer>
        <MenuList>
          <li>
            <MenuButton
              selected={selectedButton === "home"}
              onClick={() => setSelectedButton("home")}
            >
              <ChartLine size={24} />
              Inicio
            </MenuButton>
          </li>

          <li>
            <MenuButton
              selected={selectedButton === "explore"}
              onClick={() => setSelectedButton("explore")}
            >
              <Binoculars size={24} />
              Explorar
            </MenuButton>
          </li>
        </MenuList>
      </MenuContainer>

      <footer>
        <AsideLogOut>
          <Avatar
            src="https://github.com/dev-gabriel-henrique.png"
          />
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
