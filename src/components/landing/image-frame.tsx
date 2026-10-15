import { cn } from "@/lib/utils"
import type { ImageSlot } from "@/types/landing"

type ImageFrameProps = {
  slot: ImageSlot
  className?: string
}

const toneClass = {
  navy: "bg-[var(--color-navy)] text-white",
  paper: "bg-background text-primary",
  warm: "bg-[color-mix(in_oklch,var(--color-navy),white_16%)] text-white",
} as const

export function ImageFrame({ slot, className }: ImageFrameProps) {
  return (
    <figure
      className={cn(
        "group relative isolate min-h-48 overflow-hidden",
        toneClass[slot.tone],
        className,
      )}
    >
      {slot.src ? (
        <img
          src={slot.src}
          alt={slot.alt}
          className="frame-media absolute inset-0 size-full object-cover"
        />
      ) : null}
      <figcaption
        className={cn(
          "absolute inset-x-0 bottom-0 px-5 py-4 text-sm tracking-wide",
          slot.src
            ? "bg-gradient-to-t from-[var(--color-navy)]/80 to-transparent text-white"
            : slot.tone === "paper"
              ? "text-primary"
              : "text-white",
        )}
      >
        <span className="sr-only">{slot.src ? "" : `${slot.alt}. `}</span>
        {slot.caption}
      </figcaption>
    </figure>
  )
}
