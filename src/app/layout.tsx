import Navigation from '@/ui/Navigation/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/base.scss"
import Footer from '@/ui/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ketone',
  description: 'Ketone web studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
