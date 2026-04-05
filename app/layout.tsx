import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Pastor S.A Abiodun",
  description: "Pastor S.A. Abiodun is a Christian minister, author, and leader of Phos Global (We Are Phos Global) based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
