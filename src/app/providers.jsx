"use client";

import { AuthProvider } from "@/context/AuthContext";
import { TeamProvider } from "@/context/TeamContext";

export function Providers({ children }) {
  return (
    // <ThemeProvider>
    <TeamProvider>
      <AuthProvider>{children}</AuthProvider>
    </TeamProvider>
    // </ThemeProvider>
  );
}
