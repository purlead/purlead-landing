import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purlead — Des leads qualifiés pour les pros locaux",
  description:
    "Purlead génère des leads qualifiés en automatique pour les entreprises locales grâce aux Facebook Ads et à un système de qualification IA — chatbot, SMS/WhatsApp, prise de RDV automatique.",
  keywords: [
    "génération de leads",
    "Facebook Ads",
    "entreprises locales",
    "automatisation IA",
    "chatbot",
    "prise de rendez-vous",
  ],
  openGraph: {
    title: "Purlead — Des leads qualifiés pour les pros locaux",
    description:
      "On remplit votre agenda de clients qualifiés grâce aux Facebook Ads et à l'IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager — remplacer METTRE_TON_GTM_ID */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','METTRE_TON_GTM_ID');`,
          }}
        />
        */}
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F0F0F5]">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
