import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ogTitle: 'Portfolio - Viktor Johansson | Experienced Web & App Developer',
  ogDescription: 'Code and Design, I Make Ideas Real. Discover my expertise in React.js and web development through my latest projects',
  keywords: 'web development, React.js, portfolio, app development, code, design, viktor johansson, viktor johansson portfolio, viktor johansson developer, viktor johansson programmerare, UX developer',
  ogType: 'Portfolio',
  ogUrl: 'https://www.vijoh.com/',
  ogImage: 'https://media.licdn.com/dms/image/D4D16AQHCtts7s2mJdA/profile-displaybackgroundimage-shrink_200_800/0/1703591115065?e=2147483647&v=beta&t=ZotIhEcv_K5-ehepZDMMh6MgZgAqXBoYCRUMnbP3efs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
       <head>
        <title>{metadata.ogTitle}</title>
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content="https://www.vijoh.com/#contact" />
        <meta property="og:image:width" content="400" />

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
