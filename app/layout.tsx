import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhinav | Portfolio",
  description: "Tries Hard, Succeed in nothing!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#F5B4B4] text-[#D4B4F5] h-[1500px]`}
      >
          <div className="bg-[#B4F5F5] absolute top-[-10rem] -z-10 right-[25rem] h-[20rem] w-[40rem] rounded-full blur-[10rem]" />
          <div className="bg-[#D5F5B4] absolute top-[7rem] -z-10 right-[6rem] h-[38rem] w-[30rem] rounded-full blur-[8rem]" />
          <div className="bg-[#D4B4F5] absolute top-[5rem] -z-10 left-[-12rem] h-[35rem] w-[35rem] rounded-full blur-[10rem]" />

          <Header />
          {children}
      </body>
    </html>
  );
}
