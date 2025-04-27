import { styled } from "@/lib/stitches.config";

export const TagButton = styled("button", {
  all: "unset",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$1 $4",

  background: "transparent",
  boxShadow: "0 0 0 1px $colors$purple100",
  borderRadius: "$full",

  fontFamily: "$default",
  fontSize: "$md",
  lineHeight: "$base",
  color: "$purple100",
  whiteSpace: 'nowrap',

  cursor: "pointer",

  variants: {
    selected: {
      true: {
        color: "$gray100",
        backgroundColor: "$purple200",
        border: 'none'
      },
      false: {
        color: "$purple100",
      },
    },
  },
});
