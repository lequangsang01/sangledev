import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Lê Quang Sang | Kĩ sư lập trình Full Stack SangLe";
const description =
  "Trang giới thiệu chính thức của Lê Quang Sang (SangLeDEV / SangLeeDEV) - Kĩ sư lập trình Full Stack & AI tại Hà Nội, sẵn sàng hợp tác các dự án Web, Mobile và AI.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "SangLeDEV",
    "SangLeeDEV",
    "sangledev",
    "Lê Quang Sang",
    "Le Quang Sang",
    "SangLe",
    "SangLee",
    "LE QUANG SANG",
    "full stack developer",
    "full stack developer hà nội",
    "ai engineer vietnam",
    "sangle.dev portfolio",
    "kĩ sư lập trình",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title,
    description,
    url: "https://sangle.dev",
    siteName: "Hồ sơ Lê Quang Sang",
    images: [
      {
        url: "/window.svg",
        width: 1200,
        height: 630,
        alt: "Lê Quang Sang - Kĩ sư lập trình Full Stack",
      },
    ],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@SangLe",
    images: ["/window.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
