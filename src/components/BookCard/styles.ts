import { styled } from "@/lib/stitches.config";

export const BookCardContainer = styled("div", {
  position: "relative",
  display: "flex",
  gap: "$5",
  borderRadius: "$md",
  padding: "$5",
  backgroundColor: "$gray700",

  "#read": {
    position: "absolute",
    top: 0,
    right: 0,

    padding: "$1 $2",
    backgroundColor: "$green300",
    color: "$green100",

    fontSize: "$xs",
    lineHeight: "$shorter",
    textAlign: "center",
    textTransform: "uppercase",

    borderBottomLeftRadius: "$sm",
    borderTopRightRadius: "$sm",
  },

  variants: {
    sizes: {
      sm: {
        width: "20.25rem",
        height: "8.125rem",
      },
      md: {
        width: "20rem",
        height: "11.5rem",
      },
    },
  },
});

export const BookDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",

  h3: {
    fontSize: "$md",
    lineHeight: "$short",
    color: "$gray100",
  },

  span: {
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray400",
  },
});
