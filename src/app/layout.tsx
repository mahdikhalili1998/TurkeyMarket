import type { Metadata } from "next";
import "./globals.css";
import "../font/fontiran.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "وبسایت بازار ترک",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="fa" dir="rtl">
      <body className="mx-auto min-w-[375px] max-w-[1800px] text-center font-fontiran">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
