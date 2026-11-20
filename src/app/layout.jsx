import Providers from "./Providers";
import "../styles/globals.css";
import { Inter, Fraunces, Alex_Brush } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const script = Alex_Brush({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-script" });

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "Ayberk Tığlı - Full-Stack Developer",
  description: "Full-Stack Developer Portfolio - Laravel, Next.js, TypeScript, Prisma",
  keywords: "Laravel, PHP, Next.js, React, TypeScript, Prisma, Tailwind, Full-Stack Developer",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${fraunces.variable} ${script.variable}`} suppressHydrationWarning>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
