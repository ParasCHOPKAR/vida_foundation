import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Import your Navbar and Footer
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIDA Foundation",
  description: "Pioneering Healthcare Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div id="google_translate_element" className="hidden"></div>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        
        {/* --- GOOGLE TRANSLATE INIT SCRIPT --- */}
        <Script id="google-translate-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                // Notice the new codes added here: gu, bn, es
                includedLanguages: 'en,hi,mr,ta,te,kn,ml,gu,bn,es', 
                autoDisplay: false
              }, 'google_translate_element');
            }
          `
        }} />

        {/* TOP: Navbar */}
        <Navbar />
        
        {/* MIDDLE: Page Content */}
        {children}

        {/* BOTTOM: Footer */}
        <Footer />
        
      </body>
    </html>
  );
}