import "./globals.css"
import { Providers } from "./providers"
import SidebarMenu from "@/components/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen">
        <SidebarMenu/>
        <Providers>
          <main className="flex-1 bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
