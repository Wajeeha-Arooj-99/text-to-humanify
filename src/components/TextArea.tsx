
import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  label?: string;
  maxLength?: number;
  showWordCount?: boolean;
}

const TextArea = ({
  value,
  onChange,
  placeholder = "Enter your text here...",
  className,
  readOnly = false,
  label,
  maxLength,
  showWordCount = false,
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  
  useEffect(() => {
    if (showWordCount) {
      const words = value.trim() ? value.trim().split(/\s+/).length : 0;
      setWordCount(words);
      setCharCount(value.length);
    }
  }, [value, showWordCount]);

  // Automatically resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="w-full rounded-lg overflow-hidden flex flex-col h-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-foreground">{label}</label>
      )}
      <div className="relative w-full h-full flex flex-col">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          maxLength={maxLength}
          className={cn(
            "w-full min-h-[220px] p-4 rounded-lg border border-input",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "placeholder:text-muted-foreground/60",
            "bg-background text-foreground",
            "transition-all duration-200",
            readOnly ? "bg-muted/30" : "",
            className
          )}
        />
        
        {showWordCount && (
          <div className="flex justify-end mt-1.5 text-xs text-muted-foreground">
            <span>{wordCount} words</span>
            <span className="mx-1.5">•</span>
            <span>{charCount} characters</span>
            {maxLength && (
              <>
                <span className="mx-1.5">•</span>
                <span>{Math.round((charCount / maxLength) * 100)}% of limit</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextArea;
