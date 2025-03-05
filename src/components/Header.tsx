
import React from 'react';
import { cn } from "@/lib/utils";
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-8 bg-gradient-to-r from-humanize-gold/10 to-red-700/10 animate-fade-in", className)}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex justify-center items-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-humanize-gold animate-pulse-subtle" />
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              <span className="relative">
                <span className="absolute -top-1 -left-1 text-primary/10 select-none">Text to Humanify</span>
                <span className="relative bg-gradient-to-r from-humanize-gold to-red-700 bg-clip-text text-transparent">
                  Text to Humanify
                </span>
              </span>
            </h1>
            <Sparkles className="h-6 w-6 text-red-700 animate-pulse-subtle" />
          </div>
          <p className="mt-3 text-muted-foreground text-base max-w-2xl mx-auto">
            Transform AI-generated content into natural, human-sounding text with a single click
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-humanize-gold/20 text-xs font-medium rounded-full text-humanize-gold">
              Tony Stark Mode
            </span>
            <span className="px-3 py-1 bg-red-700/20 text-xs font-medium rounded-full text-red-700">
              Iron Man Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
