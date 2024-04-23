import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import db from "@/lib/supabase/db";
import { SupabaseUserProvider } from "@/lib/providers/supabase-user-provider";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Packed2You",
  description: "Grocery Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SupabaseUserProvider>
          <main>{children}</main>
          <Toaster />
        </SupabaseUserProvider>
      </body>
    </html>
  );
}
