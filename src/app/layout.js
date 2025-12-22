import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/UI/NavBar";
import Footer from "@/Components/UI/Footer";
import CtaForm from "@/Components/UI/CtaForm";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import CtaWrapper from "@/Components/UI/CtaWrapper";

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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased`}
      >
        <NextTopLoader
          color="#CFA77F"
          initialPosition={0.08}
          crawlSpeed={600}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #CFA77F,0 0 5px #CFA77F"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <NavBar />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Global styles
            style: {
              background: "#fff",
              color: "#11161F",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            },
            // Success toast
            success: {
              style: {
                background: "#CFA77F",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#356DA4",
              },
            },
            // Error toast
            error: {
              style: {
                background: "#FF6900",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#FF6900",
              },
            },
          }}
        />
        {children}
        {/* <CtaForm /> */}
        <CtaWrapper/>
        <Footer />
      </body>
    </html>
  );
}
