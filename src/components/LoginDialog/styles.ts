import { styled } from "@/lib/stitches.config";
import { Content, Description, Overlay } from "@radix-ui/react-dialog";

export const LoginDialogContainer = styled(Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "32.25rem",
  padding: "4.5rem 3.5rem",
  borderRadius: "$lg",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$10",

  backgroundColor: "$gray700",

  zIndex: 9999,

  "& > div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "$3",

    p: {
      fontSize: "$lg",
      color: "$gray200",
      fontWeight: "normal",
    },
  },
});

export const LoginDialogOverlay = styled(Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",

  zIndex: 9998,
});

export const LoginDialogDescription = styled(Description, {
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray200",
  lineHeight: "$short",
});

export const LoginCloseButton = styled("button", {
  all: "unset",

  position: "absolute",
  top: "$4",
  right: "$4",

  cursor: "pointer",

  svg: {
    color: "$gray400",
  },

  "&:hover": {
    svg: {
      color: "$white",
    },
  },
});

export const LoginButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  width: "23rem",
  padding: "$5 $6",
  backgroundColor: "$gray600",

  fontFamily: "$default",
  fontSize: "$lg",
  fontWeight: "$bold",
  lineHeight: "$base",
  color: "$gray200",

  border: 0,
  borderRadius: "0.5rem",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray500",
  },

  "&:focus": {
    outline: "none",
    border: "none",
    boxShadow: "0 0 0 2px $colors$gray300",
  },
});