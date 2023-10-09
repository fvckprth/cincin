import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: '(Cin Cin) - NYC',
  description: 'Bringing Italian Aperitivo to New York City',
  themeColor: '#00375F',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
