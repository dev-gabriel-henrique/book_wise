import { styled } from "@/lib/stitches.config";

import asideBackground from "@/assets/asideBackground.svg";

export const AsideContainer = styled("aside", {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "14.5rem",
  height: "calc(100vh - 36px)",
  borderRadius: "12px",

  margin: "$5",

  backgroundImage: `url(${asideBackground.src})`,

  header: {
    marginTop: "$10",
  },
});

export const MenuContainer = styled("div", {
  flex: 1,
});

export const MenuList = styled("ul", {
  marginTop: "4rem",
  listStyle: "none",

  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const MenuButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  backgroundColor: "transparent",
  border: 0,
  borderRadius: "$xs",

  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray400",

  cursor: "pointer",

  transition: "border padding ease .1s",

  "&:hover": {
    color: "$gray100",
  },

  variants: {
    selected: {
      true: {
        color: "$gray100",
        borderLeft: "4px solid $white",
        paddingLeft: "$2",

        "&:focus": {
          color: "$gray100",
          borderLeft: "4px solid $white",
          paddingLeft: "$2",
        },
      },
      false: {
        color: "$gray400",
      },
    },
  },
});

export const LoginButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  marginBottom: "$6",

  backgroundColor: "transparent",
  border: 0,
  borderRadius: "$sm",

  cursor: "pointer",

  fontSize: "$md",
  color: "$gray200",

  svg: {
    color: "$green200",
  },

  "&:hover": {
    color: "$gray100",

    svg: {
      color: "$green100",
    },
  },
});
