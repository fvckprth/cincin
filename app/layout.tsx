import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Cin Cin - NYC Aperitivo',  // Shortened to fit within 44 characters
  description: 'Bringing Italian Aperitivo to New York City',
  themeColor: '#00375F',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'  // Specified as fallback for og:image
  },
  openGraph: {
    images: [
      {
        url: '/cincin-og.png',
        width: 900,
        height: 450,
        alt: 'Final Guest List',
      },
    ],
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>{(metadata.title as React.ReactNode) || 'Fallback Title'}</title>
        <meta name="description" content={metadata.description as string} />  // Type assertion to string
        <meta name="apple-mobile-web-app-title" content="Cin Cin" />
        <meta property="og:site_name" content="Cin Cin" />
        <meta property="og:url" content="https://cincin.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title as string} />  // Type assertion to string
        <meta property="og:description" content={metadata.description as string} />  // Type assertion to string
        <meta property="og:image" content="https://cincin-jvwqbqab2-fvckprth.vercel.app/cincin-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cincin.vercel.app" />
        <meta property="twitter:url" content="https://cincin.vercel.app" />
        <meta name="twitter:title" content={metadata.title as string} />  // Type assertion to string
        <meta name="twitter:description" content={metadata.description as string} />  // Type assertion to string
        <meta name="twitter:image" content="https://cincin-jvwqbqab2-fvckprth.vercel.app/cincin-og.png" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
