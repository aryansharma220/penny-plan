import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Penny Plan",
  description: "A user-friendly finance tracker that helps you manage your expenses, set budgets, and save smarter with personalized insights",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body
          className={inter.className}
        >

          {/* Header */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-black/80 border-t border-gray-600 text-white/70 tracking-wider text-sm py-4">
            <div className="container mx-auto text-center flex items-center justify-center">
              <p>&copy; 2024 Penny Plan</p>
              <Separator orientation="vertical" className="mx-2 h-6 w-px" />
              <p>Made by Aryan Sharma</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
