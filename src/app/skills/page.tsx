
import { skills } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";

export const metadata = {
  title: "Technical Skills",
};

export default function SkillsPage() {
  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Technical Skills
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A showcase of my expertise in various DevOps tools and technologies.
          </p>
        </header>

        <TooltipProvider>
          <div className="flex flex-wrap justify-center -m-2">
            {skills.map((skill) => (
              <div key={skill.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center p-6 text-center rounded-lg border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:border-primary h-full cursor-default">
                      {skill.icon && (
                        <skill.icon className="h-12 w-12 mb-4 text-primary" />
                      )}
                      <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
                      {skill.level && (
                         <p className="text-sm text-muted-foreground">{skill.level}</p>
                      )}
                    </div>
                  </TooltipTrigger>
                  {skill.description && (
                    <TooltipContent side="bottom" className="max-w-xs text-center bg-popover text-popover-foreground p-2 rounded-md shadow-md">
                      <p>{skill.description}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </EntryAnimationWrapper>
  );
}
