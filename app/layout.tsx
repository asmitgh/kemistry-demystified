import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from 'geist/font/sans'
import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <body className={`${inter.className} antialiased`}>
        
        </body>       <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
