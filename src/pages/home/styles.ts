import { styled } from "@/lib/stitches.config";

export const MainContainer = styled("div", {
  maxWidth: "38rem",

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

export const ReviewContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const PopularBooksContainer = styled("aside", {
  position: "absolute",
  top: "9.125rem",
  right: "7rem",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "$4",

    h5: {
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$gray100",
    },

    button: {
      all: "unset",
      display: "flex",
      alignItems: "center",
      gap: "$2",
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$purple100",

      cursor: "pointer",

      svg: {
        color: "$purple100",
      },

      "&:hover": {
        color: "$purple200",
        svg: {
          color: "$purple200",
        },
      },
    },
  },
});

export const PopularBooksCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const LastReadContainer = styled("div", {
  marginBottom: "$10",

  "& > div:first-child": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "$4",

    h5: {
      marginBottom: "0",
    },

    button: {
      all: "unset",
      display: "flex",
      alignItems: "center",
      gap: "$2",
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$purple100",

      cursor: "pointer",

      svg: {
        color: "$purple100",
      },

      "&:hover": {
        color: "$purple200",
        svg: {
          color: "$purple200",
        },
      },
    },
  },
});
