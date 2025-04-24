import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "link" | "ghost" | "outline" | "secondary";
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "default",
  href,
  children,
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    link: "text-primary underline-offset-4 hover:underline p-0",
    ghost: "bg-transparent hover:bg-gray-100",
    outline: "border border-input bg-background hover:bg-accent",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className, sizeStyles[size])}
      {...props}
    >
      {children}
    </button>
  );
}
