import Providers from "./Providers";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ayberk Tığlı - Frontend Developer",
  description: "Frontend Developer Portfolio - React, Next.js, Tailwind CSS",
  keywords: "React, HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, Tailwind, Next.js",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
