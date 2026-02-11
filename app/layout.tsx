import type { Metadata } from "next";
import "./globals.css";
import { ConditionalHeader } from "./ConditionalHeader";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility design elements and documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
