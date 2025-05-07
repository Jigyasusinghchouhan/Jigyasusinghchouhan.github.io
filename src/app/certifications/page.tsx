import { certifications } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";

export const metadata = {
  title: "Licenses & Certifications",
};

export default function CertificationsPage() {
  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Licenses & Certifications
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            My professional certifications and credentials.
          </p>
        </header>

        <div className="space-y-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="p-6 rounded-lg border bg-background shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary"
            >
              <div className="flex flex-row items-start gap-4 mb-4">
                 {cert.logoUrl ? (
                  <Image
                    src={cert.logoUrl}
                    alt={`${cert.issuingOrganization} logo`}
                    width={56}
                    height={56}
                    className="rounded-lg border"
                    data-ai-hint={cert.imageAiHint || "certification logo"}
                  />
                ) : (
                  <div className="p-3.5 bg-muted rounded-lg">
                     <Award className="h-7 w-7 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuingOrganization}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
              {cert.credentialUrl && (
                <div className="border-t border-border pt-4">
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                    <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      View Credential <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </EntryAnimationWrapper>
  );
}
