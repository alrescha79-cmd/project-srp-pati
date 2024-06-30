import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Samudra Samudra Rahayu Perkasa',
  description: 'CV. Samudra Samudra Rahayu Perkasa, Perusahaan yang bergerak di bidang perikanan dan pengembangan peralatan perikanan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
