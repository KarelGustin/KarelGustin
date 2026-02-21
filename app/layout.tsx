import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karel Gustin - Agentic Engineer',
  description: 'Karel Gustin - Agentic Engineer | Full Stack Developer specializing in Architecture & UI Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
