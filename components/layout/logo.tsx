import { cn } from "@/lib/utils";

/**
 * ELVTERA wordmark.
 *
 * A typographic mark: heavy Manrope wordmark with an orange accent square - * deliberate, minimal, and legible at every size. Works on light and dark
 * surfaces via the `inverse` prop.
 */
export function Logo({ 
  className, 
  height = 40 
}: { 
  inverse?: boolean;
  className?: string; 
  height?: number; 
}) {
  return (
    <img 
      src="/elvtera-logo.png" 
      alt="Elvtera Logo" 
      style={{ height: `${height}px` }}
      className={cn("w-auto object-contain", className)}
    />
  );
}
