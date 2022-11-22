// pages/_app.tsx
import React from "react";
import type { FC } from "react";
import type { AppProps } from "next/app";
import globalStyles from "../ui/globalStyles";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Load global styles
  globalStyles();

  return <Component {...pageProps} />;
};

export default App;
