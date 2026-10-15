import { ImageFrame } from "@/components/landing/image-frame"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"
import type { Chapter } from "@/types/landing"

type ChapterSectionProps = {
  chapter: Chapter
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const navy = chapter.id === "create"

  return (
    <section
      id={chapter.id}
      className={cn(
        "relative scroll-mt-28 overflow-hidden",
        navy ? "bg-[var(--color-navy)] text-white" : "bg-background text-foreground",
        chapter.id === "work" && "pb-8",
        chapter.id === "create" && "py-24 sm:py-32",
        chapter.id === "connect" && "py-20 sm:py-28",
      )}
    >
      <p
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -left-2 font-display leading-none font-medium tracking-tight select-none",
          chapter.id === "connect"
            ? "top-6 text-[clamp(4.5rem,18vw,11rem)]"
            : "-top-4 text-[clamp(5rem,20vw,13rem)]",
          navy ? "text-white opacity-[0.08]" : "text-[var(--color-navy)] opacity-[0.08]",
        )}
      >
        {chapter.word}
      </p>

      <div
        className={cn(
          "relative mx-auto grid max-w-6xl items-end gap-10 px-6 sm:px-10",
          chapter.id === "work" && "pt-28 md:grid-cols-12 md:pt-36",
          chapter.id === "create" && "md:grid-cols-12",
          chapter.id === "connect" && "md:grid-cols-12",
        )}
      >
        <div
          className={cn(
            chapter.id === "create" ? "md:order-2 md:col-span-6" : "md:col-span-6",
            chapter.id === "connect" && "md:col-span-5",
          )}
        >
          <Reveal>
            <p
              className={cn(
                "text-xs font-medium tracking-[0.2em] uppercase",
                navy ? "text-[var(--color-orange)]" : "text-[var(--color-orange-ink)]",
              )}
            >
              {chapter.kicker}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none font-medium tracking-tight sm:text-7xl">
              {chapter.word}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed sm:text-xl">{chapter.summary}</p>
          </Reveal>
          <ul className="mt-8 max-w-md space-y-3">
            {chapter.points.map((point, index) => (
              <Reveal key={point} delay={index * 80}>
                <li className="flex gap-4 text-base sm:text-lg">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-orange)]"
                  />
                  <span>{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal
          className={cn(
            chapter.id === "create" ? "md:order-1 md:col-span-6" : "md:col-span-6",
            chapter.id === "work" && "md:translate-y-16",
            chapter.id === "connect" && "md:col-span-7",
          )}
        >
          <ImageFrame
            slot={chapter.image}
            className={cn(
              "rounded-[1.75rem]",
              chapter.id === "connect" ? "aspect-[16/10]" : "aspect-[4/5] min-h-[24rem]",
            )}
          />
        </Reveal>
      </div>
    </section>
  )
}
