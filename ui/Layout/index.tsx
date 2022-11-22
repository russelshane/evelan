// ui/Layout/index.tsx

import React from "react";
import type { FC } from "react";
import { LayoutContainer } from "./style";
import type { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
