import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";

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
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center text-gray-600">
              <p>Made by Aryan Sharma</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
