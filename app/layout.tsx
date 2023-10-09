import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: '(Cin Cin) - NYC',
  description: 'Bringing Italian Aperitivo to New York City',
  themeColor: '#00375F',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    url: 'https://ciccin.nyc',
    images: [
      {
        url: '/cincin-og.png',
        width: 800,
        height: 450,
        alt: 'Final Guest List',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
      <title>(Cin Cin) - NYC</title>
        <meta name="description" content="Bringing Italian Aperitivo to New York City" />
        <meta property="og:url" content="https://cincin.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="(Cin Cin) - NYC" />
        <meta property="og:description" content="Bringing Italian Aperitivo to New York City" />
        <meta property="og:image" content="https://cincin-jvwqbqab2-fvckprth.vercel.app/cincin-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cincin.vercel.app" />
        <meta property="twitter:url" content="https://cincin.vercel.app" />
        <meta name="twitter:title" content="(Cin Cin) - NYC" />
        <meta name="twitter:description" content="Bringing Italian Aperitivo to New York City" />
        <meta name="twitter:image" content="https://cincin-jvwqbqab2-fvckprth.vercel.app/cincin-og.png" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
  </>
  )
}
