import Header from "@/components/Header";
import Providers from "./Providers";
import Head from "./head";
import "../styles/globals.css";


const Layout = ({ children }) => {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head />
      <body>
        <Providers>
          <Header />
          <content>{children}</content>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
