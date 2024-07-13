import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Petfinder App',
  description: 'Help them get home',
  icons: {
    icon: [
      {
        url: '/light-icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dark-icon.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
