import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tengku Faris | Engineering • Consulting • Software',
  description: 'Portfolio of Tengku Faris - Engineer, Consultant, and Software Builder navigating the trails of innovation',
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

