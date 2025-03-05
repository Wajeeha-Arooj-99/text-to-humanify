
import React from 'react';
import Button from './Button';
import { cn } from "@/lib/utils";
import { Cpu, Zap } from 'lucide-react';

interface ConversionOptionsProps {
  onSelectMode: (mode: 'tony' | 'iron') => void;
  isProcessing: boolean;
  displayCode: string;
  className?: string;
}

const ConversionOptions = ({
  onSelectMode,
  isProcessing,
  className
}: ConversionOptionsProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
        <Button
          variant="tony"
          disabled={isProcessing}
          onClick={() => onSelectMode('tony')}
          className="px-6 py-2.5 rounded-md min-w-[200px] animate-fade-in"
        >
          <Cpu className="w-4 h-4 mr-2" />
          TONY STARK MODE
        </Button>
        
        <Button
          variant="iron"
          disabled={isProcessing}
          onClick={() => onSelectMode('iron')}
          className="px-6 py-2.5 rounded-md min-w-[200px] animate-fade-in delay-75"
        >
          <Zap className="w-4 h-4 mr-2" />
          IRON MAN MODE
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground italic">
        Choose your preferred personality style for humanizing the text
      </p>
    </div>
  );
};

export default ConversionOptions;
