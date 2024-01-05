import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import vijoh from '@/imgs/vijoh-dark.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ogTitle: 'Portfolio - Viktor Johansson | Experienced Web & App Developer',
  ogDescription: 'Code and Design, I Make Ideas Real. Discover my expertise in React.js and web development through my latest projects',
  keywords: 'web development, React.js, portfolio, app development, code, design, viktor johansson, viktor johansson portfolio, viktor johansson developer, viktor johansson programmerare, UX developer',
  ogType: 'Portfolio',
  ogImage: 'https://media.licdn.com/dms/image/D4D03AQFYBuXXAxZP9Q/profile-displayphoto-shrink_800_800/0/1697198819673?e=2147483647&v=beta&t=qlJcMWmT8eI36OOGEJwI2BegNyw_nv_YJ2_Ve9NdnLs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <title>{metadata.ogTitle}</title>
        <meta name="description" content={metadata.ogDescription} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="TR0s54qrdcogQVIxo3iB9xzX8M5JFEKLH8geIaXANMY" />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:description" content={metadata.ogDescription} />
        
        {/*<meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="100" />*/}
        <link rel="icon" type="image/png" sizes="16x16" href="./src/imgs/me.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./src/imgs/me.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Viktor Johansson',
              jobTitle: 'Experienced Web & App Developer',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
