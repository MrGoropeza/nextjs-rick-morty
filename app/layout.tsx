import { Inter } from "next/font/google";
import Image from "next/image";
import wallpaper from "../public/images/rick-morty-wallpaper.jpg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "optional" });

export const metadata = {
  title: "Rick & Morty App",
  description: "Rick & Morty App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800/40`}>
        {children}
        <Image
          className="fixed top-0 -z-10 h-full w-full object-cover blur-[3px] brightness-50"
          src={wallpaper}
          alt="Rick & Morty Wallpaper"
          placeholder="blur"
        />
      </body>
    </html>
  );
}
