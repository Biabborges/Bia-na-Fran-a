import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bia na França - Vaquinha de Intercâmbio',
  description: 'Ajude a transformar meu sonho de estudar na França em realidade. Estudante de Engenharia de Software selecionada para intercâmbio em janeiro de 2026.',
  keywords: 'intercâmbio, França, vaquinha, engenharia de software, crowdfunding',
  openGraph: {
    title: 'Bia na França - Vaquinha de Intercâmbio',
    description: 'Ajude a transformar meu sonho de estudar na França em realidade.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
