import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-center md:gap-x-8 md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
