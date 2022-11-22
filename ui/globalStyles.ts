import { globalCss } from "../config/stitches.config";

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },
});

export default globalStyles;
