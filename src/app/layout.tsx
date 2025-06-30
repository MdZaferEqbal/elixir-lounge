import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";

export const metadata: Metadata = {
  title: "Elixir Lounge",
  description:
    "Experience seamless, high-performance animations with our GSAP-powered website. Designed for smooth transitions, engaging interactions, and a modern, intuitive user journey that captivates at every scroll.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    url: "https://elixir-lounge.vercel.app/",
    title: "Elixir Lounge",
    description:
      "Experience seamless, high-performance animations with our GSAP-powered website. Designed for smooth transitions, engaging interactions, and a modern, intuitive user journey that captivates at every scroll.",
    images: [
      {
        url: "https://elixir-lounge.vercel.app/images/fav.png",
        alt: "Elixir Lounge - Seamless GSAP Animations",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
