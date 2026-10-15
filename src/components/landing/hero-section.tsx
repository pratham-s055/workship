import { useRef } from "react"
import { buttonVariants } from "@/components/ui/button"
import { ImageFrame } from "@/components/landing/image-frame"
import { useReducedMotion } from "@/components/landing/use-reduced-motion"
import { useScrollProgress } from "@/components/landing/use-scroll-progress"
import { cn } from "@/lib/utils"
import type { LandingContent } from "@/types/landing"
import type { StudioProfile } from "@/types/studio"

type HeroSectionProps = {
  profile: StudioProfile
  hero: LandingContent["hero"]
  image: LandingContent["chapters"][number]["image"]
}

export function HeroSection({ profile, hero, image }: HeroSectionProps) {
  const mediaRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useScrollProgress(mediaRef, !reduced)

  return (
    <section className="relative min-h-dvh overflow-hidden bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid min-h-dvh max-w-6xl items-end gap-12 px-6 pt-36 pb-16 sm:pt-32 md:grid-cols-12 md:items-center md:px-10 md:pt-28">
        <div className="min-w-0 md:col-span-7">
          <p className="rise text-xs font-medium tracking-[0.22em] text-white/70 uppercase">
            {profile.tagline}
          </p>
          <h1 className="rise mt-6 max-w-full font-display text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[0.92] font-medium tracking-tight text-balance [animation-delay:120ms]">
            {hero.headline[0]}
            <span className="mt-2 block">{hero.headline[1]}</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-white/80 [animation-delay:220ms] sm:text-xl">
            {profile.concept}
          </p>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:320ms]">
            <a
              href="#workspaces"
              className={cn(
                buttonVariants({ variant: "default" }),
                "min-h-11 bg-white px-6 text-[var(--color-navy)] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]",
              )}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#join"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "min-h-11 border-white/45 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]",
              )}
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div ref={mediaRef} className="hero-media min-w-0 md:col-span-5">
          <ImageFrame
            slot={image}
            className="aspect-[4/5] min-h-[22rem] rounded-[2rem] shadow-[0_30px_80px_rgb(0_0_0/0.28)]"
          />
        </div>
      </div>
    </section>
  )
}
