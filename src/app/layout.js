import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import { AppProvider } from "@/components/AppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Ordering App Demo by Future Digital 360",
  description: "Food Ordering App Demo by Future Digital 360",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl p-4 mx-auto">
          <AppProvider>
            <Header />
            {children}
            <footer className="p-8 mt-16 text-center text-gray-500 border-t">
              Future Digital 360 <br />
              &copy; 2023 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
