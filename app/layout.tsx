import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import "./globals.css";
import Footer from '@/components/Footer/index';
import Header from '@/components/Header/index';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "MazeScope | your comfort zone...",
  description: "Developed and Designed by Mazegit...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
