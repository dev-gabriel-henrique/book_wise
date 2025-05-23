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
  position: "relative",

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

  transition: "color padding-left ease .5s",

  "&:hover": {
    color: "$gray100",
  },

  variants: {
    selected: {
      true: {
        color: "$gray100",
        paddingLeft: "$3",

        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          borderRadius: "$xs 0 0 $xs",
          background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
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

export const AsideLogOut = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  padding: "$1",

  button: {
    all: "unset",
    cursor: "pointer",

    "&:hover": {
      color: "$gray100",

      svg: {
        color: "$danger",
      },
    },

    "&:focus": {
      outline: "none",
      border: "none",
      boxShadow: "0 0 0 2px $colors$gray200",
    },
  },

  p: {
    fontSize: "$sm",
    flexWrap: "wrap",
    color: "$gray200",
    lineHeight: "$base",
    width: "3.375rem",
    wordWrap: "break-word",
    textAlign: "justify",
  },
});
