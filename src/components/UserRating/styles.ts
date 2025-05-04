import { styled } from "@/lib/stitches.config";

export const UserRatingContainer = styled("div", {
  width: "38rem",
  padding: "$6",
  borderRadius: "$md",
  maxHeight: "17.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "$5",

  backgroundColor: "$gray700",

  "& > p": {
    fontSize: "$sm",
    color: "$gray300",
  },
});

export const UserRatingHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  span: {
    fontSize: "$sm",
    lineHeight: "$base",
    fontWeight: "$regular",
    color: "$gray300",
  },
});

export const UserDetails = styled("div", {
  display: "flex",
  gap: "1rem",

  div: {
    display: "flex",
    flexDirection: "column",
    p: {
      color: "$gray100",
      fontFamily: "$default",
      fontSize: "$md",
    },

    span: {
      fontSize: "$sm",
      color: "$gray400",
    },
  },
});
