import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


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
      <head>
        {/* Meta Pixel Script */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if (f.fbq) return; n = f.fbq = function() {
                  n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
              }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1713854706197297');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Noscript Pixel Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:"none"}}
            src="https://www.facebook.com/tr?id=1713854706197297&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
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
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
