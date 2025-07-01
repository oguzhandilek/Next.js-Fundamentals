import React from "react";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 style={{ backgroundColor: "grey", padding: "2rem" }}>
        Nested layouts
      </h2>
    </>
  );
}
