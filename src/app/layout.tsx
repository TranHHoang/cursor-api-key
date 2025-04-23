import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Management",
  description: "Manage your API keys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased h-full bg-gray-50 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
