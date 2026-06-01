import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Golden Deli & Groceries | Premium Gourmet Food & Online Ordering',
  description: 'Experience luxurious gourmet food and seamless online ordering from Golden Deli & Groceries. Discover fresh ingredients, artisan products, and a full kitchen menu.',
  keywords: ["golden deli, groceries, gourmet food, online ordering, deli menu, fresh ingredients, artisan products, luxury food, fine dining, catering"],
  openGraph: {
    "title": "Golden Deli & Groceries | Premium Gourmet Food & Online Ordering",
    "description": "Experience luxurious gourmet food and seamless online ordering from Golden Deli & Groceries. Discover fresh ingredients, artisan products, and a full kitchen menu.",
    "url": "https://www.goldendeligroceries.com",
    "siteName": "Golden Deli & Groceries",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/chef-is-working-nicely-decorated-kitchen-preparing-pastry-pizza_613910-3408.jpg",
        "alt": "Luxurious deli interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Golden Deli & Groceries | Premium Gourmet Food & Online Ordering",
    "description": "Experience luxurious gourmet food and seamless online ordering from Golden Deli & Groceries. Discover fresh ingredients, artisan products, and a full kitchen menu.",
    "images": [
      "http://img.b2bpic.net/free-photo/chef-is-working-nicely-decorated-kitchen-preparing-pastry-pizza_613910-3408.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
