"use client"
import Header from "@/components/Header";
import Providers from "./Providers";
import Head from "./head";
import "../styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const rb_mono = Roboto_Mono({
  style: "normal",
  preload: false,
  weight: ["300", "400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className={rb_mono.className}>
        <Providers>
          <Header />
          <content>{children}</content>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
