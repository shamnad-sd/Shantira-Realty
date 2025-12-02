import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/UI/NavBar";
import Footer from "@/Components/UI/Footer";
import CtaForm from "@/Components/UI/CtaForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shantira Realty - Building Trust",
  description: "Your trusted real estate partner for meaningful living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/apollo"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased`}>
        <NavBar/>
        {children}
        <CtaForm/>
        <Footer/>
      </body>
    </html>
  );
}
