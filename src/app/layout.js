import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google'
import './globals.css'

import BootstrapClient from '@/components/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tu Rol Futbol',
  description: 'Create by Martin Contla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        {children}
        </body>
    </html>
  )
}
