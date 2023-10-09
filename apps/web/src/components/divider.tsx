import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <div className={cn(" w-full border-t border-gray-100", className)} />;
}
