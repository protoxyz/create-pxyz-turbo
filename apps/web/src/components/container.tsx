import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}
export function Container({
  children,
  className,
  size = "5xl",
}: ContainerProps) {
  const sizeClass = {
    sm: "lg:max-w-sm",
    md: "lg:max-w-md",
    lg: "lg:max-w-lg",
    xl: "lg:max-w-xl",
    "2xl": "lg:max-w-2xl",
    "3xl": "lg:max-w-3xl",
    "4xl": "lg:max-w-4xl",
    "5xl": "lg:max-w-5xl",
    "6xl": "lg:max-w-6xl",
    "7xl": "lg:max-w-7xl",
  }[size];
  return (
    <div
      className={cn("mx-auto flex w-full flex-col gap-5", sizeClass, className)}
    >
      {children}
    </div>
  );
}
