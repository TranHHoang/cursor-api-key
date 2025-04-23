import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "link";
  href?: string;
}

export function Button({
  className,
  variant = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    link: "text-primary underline-offset-4 hover:underline p-0",
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
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
