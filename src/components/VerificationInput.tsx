
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface VerificationInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  placeholder?: string;
}

const VerificationInput = ({
  value,
  onChange,
  className,
  label = "Verification Code",
  placeholder = "Enter the number here.."
}: VerificationInputProps) => {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
      )}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full p-2 pl-3 rounded-lg border border-input",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "placeholder:text-muted-foreground/60",
            "bg-background text-foreground",
            "transition-all duration-200"
          )}
        />
      </div>
    </div>
  );
};

export default VerificationInput;
