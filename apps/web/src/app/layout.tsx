import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blogs",
  description: "Created by Ashmeet Singh Monga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen overflow-x-hidden ${poppins.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
