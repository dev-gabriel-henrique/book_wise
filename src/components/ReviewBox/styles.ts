import { styled } from "@/lib/stitches.config";

export const ReviewContainer = styled("div", {
  borderRadius: "$md",
  maxHeight: "17.5rem",
  width: "608px",

  display: "flex",
  flexDirection: "column",
  gap: "$8",

  variants: {
    sizes: {
      sm: {
        padding: "$5 $6",
        backgroundColor: "$gray600",

        "&:hover": {
          boxShadow: "0 0 0 2px $colors$gray500",
        },
      },
      md: {
        padding: "$6",
        backgroundColor: "$gray700",
      },
    },
  },

  defaultVariants: {
    sizes: "md",
  },
});

export const ReviewHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

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

export const BookDetailsContainer = styled("div", {
  display: "flex",
  gap: "$5",
  alignItems: "center",
});

export const BookDetailsInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const BookBio = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "$3",

  p: {
    color: "$gray100",
    fontFamily: "$default",
    fontSize: "$md",
    textAlign: "justify",
  },

  span: {
    fontSize: "$sm",
    color: "$gray400",
  },
});

export const TextContent = styled("div", {
  color: "$gray300",
  fontSize: "$sm",
  lineHeight: "$base",
  textAlign: "justify",
  height: "6rem",

  "&::-webkit-scrollbar": {
    width: "4px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$gray600",
    borderRadius: "4px",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },

  variants: {
    isExpanded: {
      true: {
        overflowY: "auto",
      },
      false: {
        overflow: "hidden",
      },
    },
  },

  button: {
    all: "unset",
    color: "$purple200",
    fontWeight: "$bold",
    fontSize: "$sm",
    cursor: "pointer",
    marginLeft: "$2",

    "&:hover": {
      color: "$purple100",
    },
  },
});
