import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Provider";

export const metadata: Metadata = {
  title: "Agent Skills Manager",
  description:
    "Create, manage, and share AI agent skills. A Next.js demo showcasing SSG, SSR, ISR, and CSR patterns with Prisma and DaisyUI.",
  openGraph: {
    title: "Agent Skills Manager",
    description: "Create, manage, and share AI agent skills publicly",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
