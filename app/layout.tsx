"use client"

import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Archivo } from "next/font/google"
import Header from "@/components/Header"

const archivo = Archivo({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
