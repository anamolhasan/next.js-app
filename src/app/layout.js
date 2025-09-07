import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        <main className="min-h-screen container mx-auto">
            {children}
        </main>
         <Footer />
      </body>
    </html>
  );
}
