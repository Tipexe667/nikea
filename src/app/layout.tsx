import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NIKEA",
  description: "Découvrez notre collection de meubles design",
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        href: "/assets/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <Navbar />
            <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
