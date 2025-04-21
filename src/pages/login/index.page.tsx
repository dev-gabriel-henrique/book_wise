import Image from "next/image";
import { Icon } from "@iconify/react";

import {
  Container,
  Hero,
  SocialLinkButton,
  SocialLinkContainer,
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

      <Hero>
        <div>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>

        <SocialLinkContainer>
          <SocialLinkButton>
            <Icon icon="devicon:google" fontSize={32} />
            Entrar com Google
          </SocialLinkButton>

          <SocialLinkButton>
            <Icon icon="akar-icons:github-fill" color="#FFF" fontSize={32} />
            Entrar com GitHub
          </SocialLinkButton>

          <SocialLinkButton>
            <Icon icon="line-md:account" fontSize={32} />
            Acessar como visitante
          </SocialLinkButton>
        </SocialLinkContainer>
      </Hero>
    </Container>
  );
}
