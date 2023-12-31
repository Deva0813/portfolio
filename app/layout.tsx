import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight:["100","200","300","400","500","600","700","800","900"],
  style:["normal","italic"],
  subsets:["latin","latin-ext"],
 })

export const metadata: Metadata = {
  title: 'Deva Portfolio',
  description: 'Deva Portfolio web site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/app/favicon.ico'/>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
