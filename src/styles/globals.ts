import { globalCss } from "../lib/stitches.config";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$default",
  },

  "button, input, textarea": {
    transition: 'box-shadow 0.2s ease',

    "&:focus": {
      outline: 'none',
      border: 'none',
      boxShadow: "0 0 0 2px $colors$gray200",
    },
  },
});
