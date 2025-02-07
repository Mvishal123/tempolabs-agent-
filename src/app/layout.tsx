import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const sans = Inter({
  subsets: ["latin"],
  // this will be the css variable
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tempo labs Agent +",
  description: "Tempolabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} antialiased bg-background text-white`}
      >
        <Header />
        <main className="pt-[5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
