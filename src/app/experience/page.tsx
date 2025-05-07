import { experiences } from "@/lib/data";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";

export const metadata = {
  title: "Work Experience",
};

export default function ExperiencePage() {
  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            My professional journey and contributions in various roles.
          </p>
        </header>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="p-6 rounded-lg border bg-background shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary"
            >
              <div className="flex flex-row items-start gap-4">
                {exp.logoUrl ? (
                  <Image
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg border"
                    data-ai-hint={exp.imageAiHint || "company logo"}
                  />
                ) : (
                  <div className="p-4 bg-muted rounded-lg">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-md text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-justify">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EntryAnimationWrapper>
  );
}
