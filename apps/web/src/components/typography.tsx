import { archivo } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children?: React.ReactNode;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}
export function Heading({ children, size = "h1", className }: HeadingProps) {
  const textSize = {
    h1: "text-6xl font-black leading-14",
    h2: "text-4xl font-bold leading-11",
    h3: "text-3xl font-bold leading-10",
    h4: "text-2xl font-semibold leading-9",
    h5: "text-xl font-semibold leading-8",
    h6: "text-lg font-semibold leading-7",
  }[size];
  return (
    <div className={cn(`${textSize} ${className} ${archivo.className}`)}>
      {children}
    </div>
  );
}

interface TextProps {
  children?: React.ReactNode;
  size?:
    | "xs"
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
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "muted"
    | "white";
  weight?: "thin" | "light" | "normal" | "bold";
  align?: "left" | "center" | "right";
}
export function Text({
  children,
  size = "lg",
  color = "muted",
  weight = "light",
  align = "left",
  className,
}: TextProps) {
  const textSize = {
    xs: "text-xs leading-4",
    sm: "text-sm leading-5",
    md: "text-md leading-6",
    lg: "text-lg leading-7",
    xl: "text-xl leading-8",
    "2xl": "text-2xl leading-9",
    "3xl": "text-3xl leading-10",
    "4xl": "text-4xl leading-11",
    "5xl": "text-5xl leading-12",
    "6xl": "text-6xl leading-13",
    "7xl": "text-7xl leading-14",
  }[size];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    muted: "text-muted-foreground",
    white: "text-white",
    success: "text-green-400",
    danger: "text-red-400",
    warning: "text-yellow-400",
    info: "text-sky-400",
  }[color];

  const fontWeight = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  }[weight];

  const alignment = {
    left: "text-left justify-start",
    center: "text-center justify-center",
    right: "text-right justify-end",
  }[align];

  return (
    <div
      className={cn(
        `flex items-center gap-1 ${alignment} ${textSize} ${textColor} ${fontWeight} ${className}`,
      )}
    >
      {children}
    </div>
  );
}
