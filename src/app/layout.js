import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContext from "./Context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template:"%s | NAVEED LATIF",
    default:"NAVEED LATIF"
  },
  description: "App Made By Naveed LAtif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-white text-black dark:bg-black dark:text-white`
        }
      >
        <ThemeContext>
        {children}
        </ThemeContext>
      </body>
    </html>
  );
}
