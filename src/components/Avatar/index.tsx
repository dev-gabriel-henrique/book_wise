import { User } from "phosphor-react";
import { ComponentProps } from "react";
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  AvatarWrapper,
} from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarWrapper>
      <AvatarContainer>
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarWrapper>
  );
}

Avatar.displayName = "Avatar";
