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

export const InputContainer = styled('aside', {
  position: "absolute",
  top: "4.5rem",
  right: "7rem",
})

export const BookButton = styled('div', {
  cursor: 'pointer',
})