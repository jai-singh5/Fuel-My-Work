import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fuel My Work",
  description: "This website is a crowdfunding platform for creator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 bg-[radial-gradient(#172554_0.5px,transparent_1px)] [background-size:16px_16px] text-white">
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen bg-slate-950 bg-[radial-gradient(#172554_0.5px,transparent_1px)] [background-size:16px_16px] text-white">
        {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
