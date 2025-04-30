import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Layouts Demo",
  description: "Layouts Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       
        {children}
       
      </body>
    </html>
  );
}
