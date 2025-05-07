
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig, skills, socialLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Download } from "lucide-react";
import { TypingAnimation } from "@/components/typing-animation";

export default function HomePage() {
  const role = "DevOps Engineer";
  const resumeUrl = "https://drive.google.com/file/d/1C1vDC0jNKmCmHogiNlqdhBsw572Xpp2d/view?usp=sharing";
  const typingTexts = ['DevOps Engineer', 'Cloud Automation Specialist', 'CI/CD Enthusiast'];

  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <section className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-12">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 mb-6 md:mb-0 ring-4 ring-primary ring-offset-4 ring-offset-background">
            <Image 
              src="https://picsum.photos/seed/profile/200/200" 
              alt={siteConfig.name}
              width={200}
              height={200}
              className="object-cover"
              data-ai-hint="professional portrait"
            />
            <AvatarFallback>{siteConfig.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="text-lg text-muted-foreground">Hello!</span>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl mt-2">
              I&apos;m <span>{siteConfig.name}</span>
            </h1>
            
            <div className="mt-3 h-12 sm:h-10">
              <TypingAnimation texts={typingTexts} />
            </div>
            
            <p className="mt-4 text-lg text-foreground/80 sm:text-xl">
              A {role}
            </p>
            <p className="mt-2 text-md text-muted-foreground max-w-xl mx-auto md:mx-0 text-justify">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                   Check My Work <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <div className="mt-8 flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <Button key={link.label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-6 w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-foreground">Core Skills</h2>
          <div className="flex flex-wrap justify-center -m-2">
            <TooltipProvider>
              {skills.slice(0, 12).map((skill) => (
                <div key={skill.name} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-background shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:border-primary h-full cursor-default">
                        {skill.icon && (
                          <skill.icon className="h-10 w-10 mb-3 text-primary" />
                        )}
                        <p className="text-sm font-medium text-center text-foreground">{skill.name}</p>
                      </div>
                    </TooltipTrigger>
                    {skill.description && (
                      <TooltipContent className="bg-popover text-popover-foreground p-2 rounded-md shadow-md max-w-xs text-center">
                        <p>{skill.description}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </div>
              ))}
            </TooltipProvider>
          </div>
          <div className="text-center mt-10">
            <Button variant="link" asChild className="text-primary">
              <Link href="/skills">
                See all skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </EntryAnimationWrapper>
  );
}
