import {Inter } from "next/font/google";
import "./globals.css";
// import { headers } from "next/headers";
// import { Footer } from "react-day-picker";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner'

const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "Welth",
  description: "One stop Finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/*header*/}
          <Header/>
         <main className="min-h-screen">{children}</main>
         <Toaster richColors />
        {/*Footer*/}
        <footer className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made by Sanjay Kumar</p>
        </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
