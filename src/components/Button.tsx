
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'tony' | 'iron' | 'humanize'; 
  size?: 'default' | 'sm' | 'lg';
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'default',
  size = 'default',
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'tony':
        return "bg-humanize-gold hover:bg-humanize-gold-hover text-white shadow-lg hover:shadow-xl";
      case 'iron':
        return "bg-red-700 hover:bg-red-800 text-white shadow-lg hover:shadow-xl";
      case 'humanize':
        return "bg-humanize-lightgold hover:bg-humanize-gold text-white shadow-lg hover:shadow-xl";
      default:
        return "";
    }
  };

  return (
    <ShadcnButton
      className={cn(
        "font-medium transition-all duration-300 ease-in-out",
        "transform hover:-translate-y-0.5 active:translate-y-0",
        getVariantClasses(),
        loading ? "opacity-90 cursor-not-allowed" : "",
        className
      )}
      size={size}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {typeof children === 'string' ? 'Processing...' : children}
        </span>
      ) : (
        children
      )}
    </ShadcnButton>
  );
};

export default Button;
