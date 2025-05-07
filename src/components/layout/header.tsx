import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLinks } from "./nav-links";
import { MobileSidebar } from "./mobile-sidebar";
import { siteConfig } from "@/lib/data";
import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Left part: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">{siteConfig.title}</span>
        </Link>

        {/* Spacer for Mobile to push toggles to the right. On Desktop, NavLinks takes over this role with flex-1. */}
        <div className="flex-1 md:hidden" />

        {/* Middle part (Desktop only): NavLinks. It takes available space and centers NavLinks. */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavLinks />
        </div>
        
        {/* Right part: Toggles */}
        <div className="flex items-center space-x-2 md:space-x-4"> {/* Adjusted spacing for consistency */}
          <ThemeToggle />
          {/* MobileSidebar trigger only on mobile, wrapped to be part of this right group */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>
    </header>
  );
}
