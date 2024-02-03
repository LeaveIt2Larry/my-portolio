import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'

import clsx from 'clsx'

import { Footer } from '@/components/footer'
import MobileNav from '@/components/mobile-navigation'
import { Navigation } from '@/components/navigation'

import './globals.css'
import { Providers } from '@/providers'

const epilogue = localFont({
  src: [
    {
      path: '../public/assets/Epilogue-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/Epilogue-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Larry Ly - Frontend developer',
  description: `I'm Larry.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50 min-h-screen',
          epilogue.className
        )}
      >
        <Providers>
          <div className='mb-28'>
            <Navigation />
            <MobileNav />
          </div>
          {children}
          <Analytics />
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
