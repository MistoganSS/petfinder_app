import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { ClerkProvider } from '@clerk/nextjs'
import { AuthProvider } from './context/AuthWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Petfinder App',
  description: 'Help them get home',
  icons: {
    icon: [
      {
        url: '/light-icon.svg',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/dark-icon.svg',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
}

export default function RootLayout ({ children }) {
  return (
    <ClerkProvider>
      <AuthProvider>
        <html lang='en'>
          <body className={inter.className}>{children}</body>
        </html>
      </AuthProvider>
    </ClerkProvider>
  )
}
