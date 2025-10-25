import { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import React from "react";
import './globals.css'
const robot = Roboto_Flex({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Personal blog website",
  description: "A personal blog website built with Next.js",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${robot.variable} relative h-full antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
