import { educations } from "@/lib/data";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";

export const metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Education
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            My academic background and qualifications.
          </p>
        </header>

        <div className="space-y-10">
          {educations.map((edu) => (
            <div 
              key={edu.id} 
              className="p-6 rounded-lg border bg-background shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary"
            >
              <div className="flex flex-row items-start gap-4">
                {edu.logoUrl ? (
                  <Image
                    src={edu.logoUrl}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg border"
                    data-ai-hint={edu.imageAiHint || "university logo"}
                  />
                ) : (
                  <div className="p-4 bg-muted rounded-lg">
                     <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-md text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
              </div>
              {edu.description && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/80 text-justify">{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </EntryAnimationWrapper>
  );
}
