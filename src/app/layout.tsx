import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugenia | La app de condominios todo-en-uno",
  description: "Administra tu condominio sin complicaciones. Control de accesos QR, cuotas, áreas comunes, paquetería y comunicación — todo en una sola app para residentes y administradores.",
  keywords: "app condominios, administración condominio México, control accesos QR, software condominio, cuotas condominio, áreas comunes, app residencial, gestión condominio CDMX",
  authors: [{ name: "Eugenia", url: "https://eugenia.ai" }],
  metadataBase: new URL("https://eugenia.ai"),
  alternates: { canonical: "https://eugenia.ai" },
  openGraph: {
    title: "Eugenia | La app de condominios todo-en-uno",
    description: "Administra tu condominio sin complicaciones. Accesos QR, cuotas, áreas comunes y más — todo en una sola app.",
    url: "https://eugenia.ai",
    siteName: "Eugenia",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/eugenia_logo.png", width: 800, height: 400, alt: "Eugenia - App de condominios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugenia | La app de condominios todo-en-uno",
    description: "Administra tu condominio sin complicaciones. Accesos QR, cuotas, áreas comunes y más.",
    images: ["/eugenia_logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SXM8JT4FK" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0SXM8JT4FK');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Eugenia",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "iOS, Android, Web",
              "description": "La app de condominios todo-en-uno. Control de accesos, cuotas, áreas comunes y más.",
              "url": "https://eugenia.ai",
              "publisher": {
                "@type": "Organization",
                "name": "Nextia",
                "url": "https://nextia.mx"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. Montes Urales 424, Lomas - Virreyes",
                "addressLocality": "Miguel Hidalgo",
                "addressRegion": "Ciudad de México",
                "postalCode": "11000",
                "addressCountry": "MX"
              }
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}