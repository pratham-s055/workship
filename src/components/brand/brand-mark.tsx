import { cn } from "@/lib/utils"

type BrandMarkProps = {
  name: string
  tone?: "ink" | "light"
  className?: string
}

export function BrandMark({ name, tone = "ink", className }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2", className)}>
      <span
        className={cn(
          "truncate font-display text-lg",
          tone === "light" ? "text-white" : "text-primary",
        )}
      >
        {name}
      </span>
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-[var(--color-orange)]"
      />
    </span>
  )
}
