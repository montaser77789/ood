import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "swiper/css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "2031 للتطوير المهني والمؤسسي",
    template: "%s | 2031",
  },

  description:
    "نقدم حلولًا متكاملة في التدريب والاستشارات لدعم التحول المؤسسي والتميز المستدام باستخدام أحدث المنهجيات.",

  keywords: [
    "التطوير المؤسسي",
    "التحول الرقمي",
    "القيادة",
    "التدريب",
    "الاستشارات",
    "2031",
  ],

  authors: [{ name: "2031 Team" }],
  creator: "2031",
  publisher: "2031",

  openGraph: {
    title: "2031 للتطوير المهني والمؤسسي",
    description:
      "حلول متكاملة لدعم الابتكار وتعزيز كفاءة الأداء المؤسسي وتحقيق نتائج ملموسة.",
    url: "https://ood.ae",
    siteName: "2031",
    images: [
      {
        url: "/favicon.ico", // حط صورة مناسبة
        width: 1200,
        height: 630,
        alt: "2031",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "2031 للتطوير المهني والمؤسسي",
    description: "برامج تدريبية واستشارية تدعم التحول المؤسسي وتحقيق التميز.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://ood.ae",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/neo-sans-arabic"
          rel="stylesheet"
        />

        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#008798" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://ood.ae" />
      </head>

      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
