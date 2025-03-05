
import React from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-6 animate-fade-in", className)}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            <span className="relative">
              <span className="absolute -top-1 -left-1 text-primary/10 select-none">Text to Humanify</span>
              <span className="relative">Text to Humanify</span>
            </span>
          </h1>
          <p className="mt-3 text-muted-foreground text-base max-w-2xl mx-auto">
            Transform AI-generated content into natural, human-sounding text with a single click
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
