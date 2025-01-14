import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Birthday",
  description:
    "Create personalized birthday cards with ease! Whether you're celebrating a special friend, family member, or colleague, our card creator lets you customize every detail. Choose from a wide variety of designs, add your heartfelt message, and make the occasion unforgettable. It's simple, fun, and the perfect way to show you care. Start creating your unique birthday card today!",
};

export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
