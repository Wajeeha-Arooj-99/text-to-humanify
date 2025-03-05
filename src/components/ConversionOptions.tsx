
import React from 'react';
import Button from './Button';
import { cn } from "@/lib/utils";

interface ConversionOptionsProps {
  onSelectMode: (mode: 'tony' | 'iron') => void;
  isProcessing: boolean;
  displayCode: string;
  className?: string;
}

const ConversionOptions = ({
  onSelectMode,
  isProcessing,
  displayCode,
  className
}: ConversionOptionsProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
        <Button
          variant="tony"
          disabled={isProcessing}
          onClick={() => onSelectMode('tony')}
          className="px-6 py-2 rounded-md min-w-[200px] animate-fade-in"
        >
          TRY TONY STARK MODE
        </Button>
        
        <Button
          variant="iron"
          disabled={isProcessing}
          onClick={() => onSelectMode('iron')}
          className="px-6 py-2 rounded-md min-w-[200px] animate-fade-in delay-75"
        >
          TRY IRON MAN MODE
        </Button>
      </div>
      
      <div className="text-center py-2 font-medium text-2xl animate-fade-in">
        {displayCode}
      </div>
    </div>
  );
};

export default ConversionOptions;
