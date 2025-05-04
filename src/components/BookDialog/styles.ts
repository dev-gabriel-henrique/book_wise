import { styled } from "@/lib/stitches.config";
import { Content, Overlay } from "@radix-ui/react-dialog";

export const BookDialogOverlay = styled(Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",

  zIndex: 9998,
});

export const BookDialogContainer = styled(Content, {
  padding: "4rem 3rem",

  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,

  backgroundColor: "$gray800",

  display: "flex",
  flexDirection: "column",

  zIndex: 9999,

  overflowY: "auto",

  "& > div": {
    button: {
      all: "unset",
      color: "$purple100",

      cursor: "pointer",

      fontSize: '$md',
      fontWeight: '$bold',
      "&:hover": {
        color: "$purple200",
      },
    },
  },
});

export const BookDetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  backgroundColor: "$gray700",
  padding: "$6 $8 $4",

  "& hr": {
    width: "100%",

    border: "1px solid $gray600",
  },
});

export const BookDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$8",
  height: "15.125rem",

  marginBottom: "$10",

  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export const BookCategoryAndPages = styled("div", {
  paddingBlock: "$6",

  display: "flex",
  gap: "3.5rem",
});

export const BookCategory = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  "& span": {
    fontSize: "$sm",
    color: "$gray300",
  },

  "& p": {
    fontSize: "$md",
    color: "$gray200",
  },

  "& svg": {
    color: "$green100",
  },
});

export const BookPages = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  "& span": {
    fontSize: "$sm",
    color: "$gray300",
  },

  "& p": {
    fontSize: "$md",
    color: "$gray200",
  },

  "& svg": {
    color: "$green100",
  },
});

export const BookRatingsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "$10",

  "& > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const BookRatingsCloseButton = styled("button", {
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