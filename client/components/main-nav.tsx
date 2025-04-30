"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Recycle } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Главная",
      active: pathname === "/",
    },
    {
      href: "/marketplace",
      label: "Витрина",
      active: pathname === "/marketplace",
    },
    {
      href: "/about",
      label: "О нас",
      active: pathname === "/about",
    },
  ];

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Recycle className="h-6 w-6" />
        <span className="font-bold inline-block">Биржа вторсырья</span>
      </Link>
      <nav className="flex gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
