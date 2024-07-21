import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import providers from './providers';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dramaia",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <providers>
          <Header />
          <Navbar />
          {children}
        </providers>
      </body>
    </html>
  );
}
