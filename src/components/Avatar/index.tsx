import { User } from "phosphor-react";
import { ComponentProps } from "react";
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  AvatarWrapper,
} from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: "md" | "lg"
}

export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarWrapper size={size}>
      <AvatarContainer size={size}>
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarWrapper>
  );
}

Avatar.displayName = "Avatar";
