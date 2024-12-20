"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}