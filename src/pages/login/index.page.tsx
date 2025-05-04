import Image from "next/image";
import { Icon } from "@iconify/react";

import {
  Container,
  LoginHero,
  LoginButton,
  LoginContainer,
} from "./styles";

import background from "@/assets/background.svg";

export default function Login() {
  return (
    <Container>
      <Image
        src={background}
        alt=""
        style={{
          borderRadius: "8px",
          height: "calc(100vh - 20px)",
        }}
      />

      <LoginHero>
        <div>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>

        <LoginContainer>
          <LoginButton>
            <Icon icon="devicon:google" fontSize={32} />
            Entrar com Google
          </LoginButton>

          <LoginButton>
            <Icon icon="akar-icons:github-fill" color="#FFF" fontSize={32} />
            Entrar com GitHub
          </LoginButton>

          <LoginButton>
            <Icon icon="line-md:account" fontSize={32} />
            Acessar como visitante
          </LoginButton>
        </LoginContainer>
      </LoginHero>
    </Container>
  );
}
