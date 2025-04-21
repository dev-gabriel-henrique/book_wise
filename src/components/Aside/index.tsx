import Image from "next/image";
import {
  AsideContainer,
  LoginButton,
  MenuButton,
  MenuContainer,
  MenuList,
} from "./styles";

import logo from "@/assets/logo.png";
import { Binoculars, ChartLine, SignIn } from "phosphor-react";
import { useState } from "react";

export function Aside() {
  const [selectedButton, setSelectedButton] = useState<string>("");

  const handleSelectButton = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

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
        <LoginButton>
          Fazer login
          <SignIn size={20} />
        </LoginButton>
      </footer>
    </AsideContainer>
  );
}
