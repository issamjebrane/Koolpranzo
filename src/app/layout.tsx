import type { Metadata } from 'next'
import { Inter , Montserrat, Fraunces} from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets : ['latin'],
  weight: ['400', '600'],
})
const fraunces = Fraunces({
  subsets : ['latin'],
  weight: ['400', '600'],
})
export const metadata: Metadata = {
  title: 'Koolpranzo',
  description: 'home made brunch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

      {children}
      </body>
    </html>
  )
}
