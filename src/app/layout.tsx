import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Routing Demo",
  description: "Routing Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "2rem" }}>
          <h1>Header</h1>
        </header>
        {children}{" "}
        <footer style={{ backgroundColor: "lightgreen", padding: "2rem" }}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}