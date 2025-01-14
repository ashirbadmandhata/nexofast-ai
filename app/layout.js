import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexoFast | Build Faster with AI",
  description:
    "AI-powered development platform for building and deploying seamless web applications",
  openGraph: {
    title: "NexoFast | Build Faster with AI",
    description:
      "AI-powered development platform for building and deploying seamless web applications",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "NexoFast | Build Faster with AI",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
