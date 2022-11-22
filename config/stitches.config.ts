// styles/stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      green400: "#75CAAA",
      muted: "#474d66",
      overlay: "rgba(67, 90, 111, 0.7)",
    },
  },
  media: {
    bp1: "(max-width: 980px)",
  },
  utils: {},
});
