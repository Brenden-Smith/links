import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Brenden Smith",
    default: "Brenden Smith",
  },
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className} min-h-screen pb-20`}>
        {children}
        <footer className="absolute inset-x-0 bottom-0 text-center text-white p-4">
          Brenden Smith &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
