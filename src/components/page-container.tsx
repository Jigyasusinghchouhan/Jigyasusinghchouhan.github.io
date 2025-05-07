import { cn } from "@/lib/utils";
import type React from "react";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 py-8 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </div>
  );
}
