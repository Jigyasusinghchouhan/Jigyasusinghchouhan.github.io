"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
  linkClassName?: string;
}

export function NavLinks({ onLinkClick, className, linkClassName }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {navLinks.map((link: NavItem) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href
              ? "text-primary"
              : "text-foreground/80",
            linkClassName
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
