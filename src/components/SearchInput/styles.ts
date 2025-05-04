import { styled } from "@/lib/stitches.config";

export const SearchInputContainer = styled("div", {
  maxWidth: '39rem',

  backgroundColor: "transparent",
  padding: "$3 $5",

  border: "2px solid $gray500",
  borderRadius: "$xs",

  display: "flex",
  alignItems: "center",
  justifyContent: 'space-between',

  "&:has(input:focus)": {
    borderColor: "$green200",

    svg: {
      color: "$green200",
    },
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  svg: {
    color: "$gray500",
  },

  button: {
    all: "unset",
    display: "flex",
    alignItems: "center",

    cursor: "pointer",

    svg: {
      color: "$gray500",
    },

    "&:hover": {
      svg: {
        color: "$green100",
      },
    },
  },
});

export const SearchInputRoot = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray200",
  fontWeight: "$regular",
  background: "transparent",
  border: "none",
  lineHeight: "$base",
  width: "27rem",
  caretColor: "$green100",

  "&:focus": {
    outline: 0,
    boxShadow: "none",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});