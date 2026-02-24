import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-press-start',
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
      <body className={`${inter.className} ${jetbrainsMono.variable} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}
