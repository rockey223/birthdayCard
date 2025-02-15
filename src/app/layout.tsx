import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";


export const metadata: Metadata = {
  title: "Create a Birthday Card",
  description:
    "Create personalized birthday cards with ease! Whether you're celebrating a special friend, family member, or colleague, our card creator lets you customize every detail. Choose from a wide variety of designs, add your heartfelt message, and make the occasion unforgettable. It's simple, fun, and the perfect way to show you care. Start creating your unique birthday card today!",
    metadataBase: new URL("https://birthday.maharjanp.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      {/* <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head> */}
      <GoogleTagManager gtmId="GTM-57ZL72TK"/>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
