import { styled } from "@/lib/stitches.config";


export const Container = styled("main", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
});

export const LoginHero = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$10",

  "& > div:first-child": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const LoginContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const LoginButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  width: "23rem",
  padding: "$5 $6",
  backgroundColor: "$gray600",

  fontFamily: "$default",
  fontSize: "$lg",
  fontWeight: "$bold",
  lineHeight: '$base',
  color: "$gray200",

  border: 0,
  borderRadius: "0.5rem",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray500",
  },

  "&:focus": {
    outline: "none",
    border: "none",
    boxShadow: "0 0 0 2px $colors$gray300",
  },
});
