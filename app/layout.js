import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import  { SessionProvider } from "next-auth/react"
import { AppProvider } from "@/config/context.config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bills | An instant loan app",
  description: "Personal financing at your convinence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <SessionProvider>
            {children}
          </SessionProvider> 
        </AppProvider>      
          <Footer/>
      </body>
    </html>
  );
}
