import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu"

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "George Lee",
  description: "portfolio inspire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
