import * as Avatar from "@radix-ui/react-avatar";

import { styled } from "@/lib/stitches.config";

export const AvatarWrapper = styled("div", {
  background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  borderRadius: "$full",
  padding: "1px",
  display: "inline-block",

  variants: {
    size: {
      md: {
        width: "2.65rem",
        height: "2.65rem",
      },
      lg: {
        width: "4.65rem",
        height: "4.65rem",
      },
    },
  },
});

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  overflow: "hidden",
  
  variants: {
    size: {
      md: {
        width: "2.5rem",
        height: "2.5rem",
      },
      lg: {
        width: "4.5rem",
        height: "4.5rem",
      },
    },
  },
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",

  svg: {
    width: "2.5rem",
    height: "2.5rem",
  },
});
