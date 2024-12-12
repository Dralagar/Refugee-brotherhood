import type { Metadata } from "next";
import NavBar from "./components/Navbar";
import Footer from "./Footer/page";
import Page from "./page";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Refugee Brotherhood",
  description: "Changing lives, one community at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
      
        <Navbar />
        <main>{children}</main>
      
        <Footer />
      </body>
    </html>
  );
}
