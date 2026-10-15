import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"
import type { LandingContent } from "@/types/landing"
import type { StudioProfile } from "@/types/studio"

type ClosingSectionProps = {
  profile: StudioProfile
  closing: LandingContent["closing"]
}

export function ClosingSection({ profile, closing }: ClosingSectionProps) {
  return (
    <section id="join" className="relative scroll-mt-28 overflow-hidden bg-[var(--color-navy)] py-24 text-white sm:py-32">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:items-end sm:px-10">
        <Reveal className="md:col-span-8">
          <p className="text-xs font-medium tracking-[0.22em] text-white/60 uppercase">
            {profile.tagline}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] font-medium tracking-tight text-balance">
            {closing.headline}
          </h2>
        </Reveal>
        <Reveal className="md:col-span-4" delay={100}>
          <p className="text-lg leading-relaxed text-white/80">{profile.concept}</p>
          <a
            href="#workspaces"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-8 min-h-11 bg-[var(--color-orange)] px-6 text-[var(--color-navy)] hover:bg-[var(--color-orange)]/90 focus-visible:ring-[var(--color-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]",
            )}
          >
            {closing.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
