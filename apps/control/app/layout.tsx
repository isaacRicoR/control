import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@ui/context/ThemeProvider";
import { VisualPresetProvider } from "@core/visual/visualPresetStore";
import { GlobalPreferencesProvider } from "@core/preferences/globalPreferencesStore";
import { SessionProvider } from "@core/auth/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Control",
  description: "Control Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <VisualPresetProvider>
          <GlobalPreferencesProvider>
            <ThemeProvider>
              {/* SessionProvider: expone sesión activa a todo el árbol de la app.
                  Para cambiar la fuente de sesión (mock → real auth), modificar
                  únicamente src/core/auth/SessionProvider.tsx */}
              <SessionProvider>
                {children}
              </SessionProvider>
            </ThemeProvider>
          </GlobalPreferencesProvider>
        </VisualPresetProvider>
      </body>
    </html>
  );
}
