import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "600"],
});

export const metadata: Metadata = {
  title: "Check Cost DBG",
  description: "Website Check Cost coded by Carolo Lương Khoa",
  referrer: "origin-when-cross-origin",
  keywords: ["Lương Khoa", "Carolo Lương Khoa", "Day bygone","Check Cost", "Check Rewind","Code by Lương Khoa"],
  authors: [{ name: "Carolo Lương Khoa" }],
  creator: "Carolo Lương Khoa",
  publisher: "Carolo Lương Khoa",
  openGraph: {
    title: "Check Cost DBG",
    description: "Website Check Cost coded by Carolo Lương Khoa",
    url: "https://check-rewind.vercel.app",
    siteName: "Check rewind",
    images: [
      {
        url: "https://i.ibb.co/JsjvtJn/www-check-rewind-vercel-app.png", // Must be an absolute URL
      },
    ],
    locale: "vi",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={ "relative flex flex-col"}>
        <Header />
        <div className="container max-w-[1024px] pb-12">{children}<Analytics /></div>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
