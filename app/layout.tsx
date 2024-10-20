import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Grad Map",
  description: "A 4-year planner for undergraduate students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
        <html lang="en">
          <body
            className={`inter-font-200 antialiased`}
          >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="gradmap-theme"
          >
            {children}

          </ThemeProvider>  
          </body>
        </html>
    </ClerkProvider>
  );
}
