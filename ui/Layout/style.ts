// ui/Layout/style.ts

import { styled } from "../../config/stitches.config";

export const LayoutContainer = styled("div", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  flexDirection: "column",
  gridGap: "20px",
});
