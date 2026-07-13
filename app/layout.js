import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Martha Taylor — Senior Full-Stack Engineer',
  description:
    'Portfolio of Martha Taylor. Senior full-stack engineer specialising in React, Next.js and TypeScript with deep platform-engineering and security foundations.',
  applicationName: 'Martha Taylor Portfolio',
  authors: [{ name: 'Martha Taylor' }],
  keywords: [
    'Senior Full-Stack Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Platform engineering',
    'Security',
    'Genkit',
    'Portfolio',
  ],
  openGraph: {
    type: 'website',
    title: 'Martha Taylor — Senior Full-Stack Engineer',
    description:
      'React, Next.js, TypeScript. Platform-engineering and security foundations underneath.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martha Taylor — Senior Full-Stack Engineer',
    description:
      'React, Next.js, TypeScript. Platform-engineering and security foundations underneath.',
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0f12' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
