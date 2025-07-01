import type { Metadata } from "next";
import "../globals.css";
import Header from '@/include/Header'
import Footer from '@/include/Footer'

export const metadata: Metadata = {
  title: "My Events",
  description: "Site de eventos",
    icons: {
    icon: "./logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}


