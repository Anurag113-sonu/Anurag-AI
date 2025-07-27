import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anurag AI',
  description:
    'Anurag AI is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
  generator: 'Anurag',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Anurag AI',
    siteName: 'Anurag-ai',
    url: 'https://anurag-ai-git-main-anurag113-sonus-projects.vercel.app/',
    description:
      'Anurag is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anurag AI Chatbot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurag AI ',
    description:
      'Anurag AI  is a versatile AI chatbot designed to assist with a wide range of tasks, from answering questions to providing recommendations and engaging in casual conversation.',
    images: ['/og-image.jpg'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
