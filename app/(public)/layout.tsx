import type { Metadata } from "next";
import Header from '@/include/Header'
import Footer from '@/include/Footer'

export const metadata: Metadata = {
  title: "My Events ",
  description: "Site de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Header/>
    {children}
    <Footer/>
   </>
  );
}


