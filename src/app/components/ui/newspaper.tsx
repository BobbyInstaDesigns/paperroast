import React from "react";
import { cn } from "./utils";

export function NewsContainer({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", className)} {...props}>
      {children}
    </div>
  );
}
