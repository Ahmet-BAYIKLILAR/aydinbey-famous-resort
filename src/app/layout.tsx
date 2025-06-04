import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aydınbey Famous Resort - Reviews',
  description: 'Share your experience at Aydınbey Famous Resort',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
} 