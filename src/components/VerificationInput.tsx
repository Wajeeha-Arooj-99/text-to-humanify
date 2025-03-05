
import React from 'react';
import { cn } from "@/lib/utils";
import { ShieldCheck } from 'lucide-react';

interface VerificationInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  placeholder?: string;
  displayCode?: string;
}

const VerificationInput = ({
  value,
  onChange,
  className,
  label = "Verification Code",
  placeholder = "Enter the number here..",
  displayCode
}: VerificationInputProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-foreground">{label}</label>
        {displayCode && (
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-humanize-gold" />
            <span className="text-xl font-bold bg-gradient-to-r from-humanize-gold to-red-700 bg-clip-text text-transparent">
              {displayCode}
            </span>
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full p-3 pl-4 rounded-lg border border-input",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "placeholder:text-muted-foreground/60",
            "bg-background text-foreground",
            "transition-all duration-200",
            "text-center font-medium text-lg"
          )}
        />
      </div>
    </div>
  );
};

export default VerificationInput;
