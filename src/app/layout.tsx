import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: any = {
  ogTitle: 'Portfolio - Viktor Johansson | Experienced Web & App Developer',
  ogDescription: 'Welcome to Vijoh, created by Viktor Johansson, your Lund-based Swedish programmer and web & app developer, turns concepts into reality. Immerse yourself in the craftsmanship of Code and Design. Explore the mastery of React.js and web development showcased through my latest projects. Enhance your digital presence with the expertise of a Lund programmer at Vijoh, where innovation meets precision in the heart of Sweden.',
  keywords: 'viktor johansson, web development, React.js, portfolio, app development, code, design, viktor johansson, viktor johansson portfolio, viktor johansson developer, viktor johansson programmerare, UX developer, vijoh, webutvecklare lund, webdeveloper portfolio, viktor johansson lund, viktor johansson developer, viktor johansson programmer, programmer, developer, programmerare',
  ogType: 'website',
  ogImage: 'https://i.postimg.cc/qvTpkh9r/1.png',
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
        <meta name="author" content="Viktor Johansson" />
        <meta name="date" content="2024-01-04" />
        <meta name="description" content={metadata.ogDescription} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="TR0s54qrdcogQVIxo3iB9xzX8M5JFEKLH8geIaXANMY" />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="twitter:title" content={metadata.ogTitle}></meta>
        <meta property="twitter:card" content={metadata.ogImage}></meta>
        <meta property="twitter:image" content={metadata.ogImage}></meta>
        <meta property="twitter:domain" content="vijoh.com"></meta>
        <meta property="twitter:description" content={metadata.ogDescription}></meta>
        <meta property="og:image" content={metadata.ogImage}/>
        <meta property="og:image:width" content="300" />
        <meta property="og:url" content="https://www.vijoh.com/"/>
      </head>
      <body className={inter.className}>{children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  )
}
