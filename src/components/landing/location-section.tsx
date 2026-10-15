import { Reveal } from "@/components/landing/reveal"
import type { StudioLocation } from "@/types/landing"

type LocationSectionProps = {
  location: StudioLocation
}

export function LocationSection({ location }: LocationSectionProps) {
  return (
    <section id="location" className="scroll-mt-28 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 sm:px-10">
        <Reveal className="md:col-span-5">
          <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-orange-ink)] uppercase">
            Visit
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none font-medium tracking-tight sm:text-7xl">
            {location.heading}
          </h2>
        </Reveal>
        <Reveal className="md:col-span-7" delay={80}>
          <div className="relative min-h-64 overflow-hidden rounded-[2rem] bg-[var(--color-navy)] px-8 py-10 text-white sm:px-12">
            {location.address ? (
              <p className="relative max-w-md font-display text-4xl leading-tight font-medium">
                {location.address}
              </p>
            ) : (
              <p className="relative max-w-md font-display text-4xl leading-tight font-medium text-balance">
                {location.pendingLabel}
              </p>
            )}
            {location.access ? (
              <p className="relative mt-6 max-w-md text-lg text-white/75">{location.access}</p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
