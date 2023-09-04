import Header from "@/components/Header";
import Providers from "./Providers";
import Head from "./head";
import "../styles/globals.css";
import { Teko } from "next/font/google";

const teko = Teko({
  style: "normal",
  preload: false,
  weight: ["300", "400", "500", "600", "700"], // Kullanmak istediğiniz kalınlıkları belirtin
});

const Layout = ({ children }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className={teko.className}>
        <Providers>
          <Header />
          <content>{children}</content>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
