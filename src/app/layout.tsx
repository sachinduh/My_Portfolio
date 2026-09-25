import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachindu Himsara | UI/UX Designer Portfolio",
  description: "Portfolio of Sachindu Himsara - UI/UX Designer & Industrial Information Technology Undergraduate",
  icons: {
    icon: "/images/logo/logo.svg",
    shortcut: "/images/logo/logo.svg",
    apple: "/images/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/logo.svg" type="image/svg+xml" />
      </head>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
