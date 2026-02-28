import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoBite — Selamatkan Makanan, Kurangi Limbah",
  description:
    "EcoBite menghubungkan restoran dengan pembeli untuk makanan sisa layak dengan harga terjangkau, sekaligus menyalurkan limbah organik ke peternak dan petani.",
  keywords: ["food waste", "ecobite", "restoran", "makanan sisa", "peternak", "organik"],
  authors: [{ name: "EcoBite" }],
  openGraph: {
    title: "EcoBite — Selamatkan Makanan, Kurangi Limbah",
    description: "Platform perantara makanan sisa restoran & limbah organik untuk peternak.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
