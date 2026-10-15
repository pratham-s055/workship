import { ImageFrame } from "@/components/landing/image-frame"
import { Reveal } from "@/components/landing/reveal"
import type { LandingContent } from "@/types/landing"

type AmenitiesSectionProps = {
  amenities: LandingContent["amenities"]
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <section id="amenities" className="scroll-mt-28 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 sm:px-10">
        <Reveal className="md:col-span-6">
          <ImageFrame slot={amenities.image} className="aspect-[5/6] rounded-[2rem]" />
        </Reveal>
        <div className="md:col-span-6">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
              {amenities.heading}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">{amenities.summary}</p>
          </Reveal>
          <div className="mt-10 space-y-8">
            {amenities.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 70}>
                <div className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-border pt-5">
                  <span className="font-display text-sm text-[var(--color-orange-ink)]">
                    {group.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{group.title}</h3>
                    <p className="mt-2 text-muted-foreground">{group.items.join(" · ")}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
