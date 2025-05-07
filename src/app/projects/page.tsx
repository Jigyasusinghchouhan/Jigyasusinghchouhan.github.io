
import { projects } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { EntryAnimationWrapper } from "@/components/entry-animation-wrapper";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <EntryAnimationWrapper>
      <div className="container py-12 md:py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A collection of projects I've worked on, showcasing my skills and passion.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }} // Changed from layout="fill" objectFit="cover" to style prop for Next 13+
                    data-ai-hint={project.imageAiHint || "technology project"}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button variant="default" size="sm" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </EntryAnimationWrapper>
  );
}

