import { ContactForm } from "@/components/contact-form";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";
import { Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  const phone = "(+91) 8619708469";
  const location = "Planet Earth";

  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          <div className="p-6 rounded-lg border bg-background shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Send a Message</h2>
            <p className="text-muted-foreground mb-6 text-justify">Fill out the form and I'll get back to you as soon as possible.</p>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-lg border bg-background shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground mb-6 text-justify">Other ways to connect with me.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-foreground">{phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-foreground">{location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg border bg-background shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Connect on Social Media</h2>
              <p className="text-muted-foreground mb-6 text-justify">Find me on these platforms.</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Button key={link.label} variant="outline" size="icon" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </EntryAnimationWrapper>
  );
}
