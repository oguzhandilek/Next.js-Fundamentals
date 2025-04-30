import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>      
      <html lang="en">
        <body>
          <header style={{ backgroundColor: "grey", padding: "2rem" }}>
            {" "}
            This Layout is for Authentication
          </header>
          {children}
          <footer style={{ backgroundColor: "grey", padding: "2rem" }}>
            This Layout for Authentication
          </footer>
        </body>
      </html>
    </>
  );
}
