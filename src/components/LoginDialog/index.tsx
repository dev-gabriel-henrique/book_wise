import { DialogClose, Root } from "@radix-ui/react-dialog";
import {
  LoginButton,
  LoginCloseButton,
  LoginDialogContainer,
  LoginDialogDescription,
  LoginDialogOverlay,
} from "./styles";
import { X } from "phosphor-react";
import { Icon } from "@iconify/react";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  return (
    <Root open={isOpen} modal={true} onOpenChange={onClose}>
      <LoginDialogOverlay />

      <LoginDialogContainer>
        <LoginDialogDescription>
          Faça login para deixar sua avaliação
        </LoginDialogDescription>

        <div>
          <LoginButton>
            <Icon icon="devicon:google" fontSize={32} />
            <p>Entrar com Google</p>
          </LoginButton>

          <LoginButton>
            <Icon icon="akar-icons:github-fill" color="#FFF" fontSize={32} />
            <p>Entrar com Github</p>
          </LoginButton>
        </div>

        <DialogClose asChild>
          <LoginCloseButton onClick={onClose}>
            <X size={24} />
          </LoginCloseButton>
        </DialogClose>
      </LoginDialogContainer>
    </Root>
  );
}
