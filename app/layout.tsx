import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer"; // Import the Footer

export const metadata: Metadata = {
  title: "VIDA Foundation | Advancing Healthcare Excellence",
  description: "Professional certification in IPC, CSSD, and Advanced Clinical Care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-950 flex flex-col min-h-screen">
        <Navbar />
        {/* flex-grow ensures the footer stays at the bottom even on short pages */}
        <main className="flex-grow"> 
          {children}
        </main>
        <Footer /> {/* Inject Footer Here */}
      </body>
    </html>
  );
}