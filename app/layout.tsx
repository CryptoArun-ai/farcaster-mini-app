import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Farcaster Mini App",
  openGraph: {
    title: "Hello Farcaster",
    images: [
      {
        url: "https://placehold.co/600x400?text=Hello+Farcaster",
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image":
      "https://placehold.co/600x400?text=Hello+Farcaster",
    "fc:frame:button:1": "👋 Click Me",
    "fc:frame:post_url": "/api/frame",
  },
} as any;


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
