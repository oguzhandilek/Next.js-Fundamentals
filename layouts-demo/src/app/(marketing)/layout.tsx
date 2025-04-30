export default function RootLayout({children}:{
    children:React.ReactNode;
}) {
    return <>
     <html lang="en">
        <body>
          <header style={{ backgroundColor: "green", padding: "2rem" }}>
            This Layout is for Marketing
          </header>
          {children}
          <footer style={{ backgroundColor: "green", padding: "2rem" }}>
            This Layout for Marketing
          </footer>
        </body>
      </html>
    </>
}