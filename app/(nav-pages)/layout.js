import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers.jsx";
import Nav from "../components/nav-bar/Nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
export const revalidate = 3600 // revalidate at most every hour
