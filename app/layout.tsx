import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Return Rate Predictor — Reduce E-commerce Returns',
  description: 'Predict which products will have high return rates before they cost you money. AI-powered insights for e-commerce store owners.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ced60641-4ce7-4620-9d00-b79fde7eef92"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
