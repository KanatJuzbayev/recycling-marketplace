import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { AuthProvider } from "@/context/auth-context";
import { NotificationsProvider } from "@/context/notifications-context";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";
import { FavoritesProvider } from "@/context/favorites-context";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <title>Биржа вторсырья - платформа для переработки вторсырья</title>
        <meta
          name="description"
          content="Платформа для сдачи и приема вторсырья"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <NotificationsProvider>
              <FavoritesProvider>
                <div className="flex min-h-screen flex-col w-full max-w-7xl mx-auto">
                  <header className="border-b">
                    <div className="container flex h-16 items-center px-4">
                      <MainNav />
                      <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                      </div>
                    </div>
                  </header>
                  {children}
                  <footer className="border-t py-6 md:py-0">
                    <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                      <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Биржа вторсырья. Все
                        права защищены.
                      </p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <Link href="/terms">Условия использования</Link>
                        <Link href="/privacy">Политика конфиденциальности</Link>
                      </div>
                    </div>
                  </footer>
                  <Toaster />
                </div>
              </FavoritesProvider>
            </NotificationsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
