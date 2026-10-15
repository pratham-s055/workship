import { Reveal } from "@/components/landing/reveal"
import type { LandingContent } from "@/types/landing"

type PlansSectionProps = {
  plans: LandingContent["plans"]
}

export function PlansSection({ plans }: PlansSectionProps) {
  return (
    <section id="plans" className="scroll-mt-28 bg-[var(--color-navy)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
            {plans.pendingLabel}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/75">{plans.note}</p>
        </Reveal>
        <div className="mt-14 grid gap-y-10 md:grid-cols-3 md:gap-x-12">
          {plans.slots.map((slot, index) => (
            <Reveal key={slot.name} delay={index * 80}>
              <article className="border-t border-white/20 pt-6">
                <h3 className="font-display text-3xl leading-tight font-medium">{slot.name}</h3>
                <p className="mt-4 leading-relaxed text-white/75">{slot.summary}</p>
                {slot.price ? (
                  <p className="mt-6 font-display text-2xl">{slot.price}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
