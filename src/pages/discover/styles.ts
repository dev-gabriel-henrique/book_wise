import { styled } from "@/lib/stitches.config";

export const DiscoverContainer = styled("div", {
  position: "relative",
  marginLeft: "calc(14.5rem + 1.25rem + 6rem)",
  marginTop: "4.5rem",

  display: "flex",
  flexDirection: "column",

  h5: {
    marginBottom: "$4",
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray100",
  },

  "& > div:first-child": {
    marginBottom: "$10",

    display: "flex",
    alignItems: "center",
    gap: "$3",

    h1: {
      fontFamily: "$default",
      fontSize: "$xl",
      lineHeight: "$short",
      color: "$gray100",
    },

    svg: {
      color: "$green100",
    },
  },
});

export const SearchInputContainer = styled("aside", {
  position: "absolute",
  top: "4.5rem",
  right: "7rem",

  backgroundColor: "transparent",
  padding: "$3 $5",

  border: "2px solid $gray500",
  borderRadius: "$xs",

  display: "flex",
  alignItems: "center",

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

export const SearchInput = styled("input", {
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

export const TagContainer = styled('ul', {
  display: 'flex',
  alignItems: "center",
  listStyle: 'none',
  gap: '$3',

  marginBottom: '3rem'
})

export const DiscoverBookContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$5',
  width: '100%'
})