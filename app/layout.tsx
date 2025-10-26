import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeerLearn - Bilimni Bo\'lishing, Birga O\'rganing',
  description: 'PeerLearn - o\'quvchilar uchun bilim almashinuvi platformasi. O\'z bilimlaringizni bo\'lishing, savollar bering va bir-biringizga yordam bering.',
  keywords: ['o\'qish', 'bilim', 'platforma', 'o\'quvchilar', 'forum', 'chat', 'testlar'],
  authors: [{ name: 'PeerLearn Team' }],
  creator: 'PeerLearn',
  publisher: 'PeerLearn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
