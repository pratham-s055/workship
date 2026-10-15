import { ImageFrame } from "@/components/landing/image-frame"
import { Reveal } from "@/components/landing/reveal"
import type { WorkspaceType } from "@/types/landing"

type WorkspaceSectionProps = {
  types: WorkspaceType[]
}

export function WorkspaceSection({ types }: WorkspaceSectionProps) {
  const [lead, ...rest] = types
  const band = rest.slice(0, 3)
  const closing = rest.slice(3)

  if (!lead) {
    return null
  }

  return (
    <section id="workspaces" className="scroll-mt-28 bg-white py-20 text-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-orange-ink)] uppercase">
            The rooms
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
            Ways to be in the studio
          </h2>
        </Reveal>

        <div className="mt-14 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <ImageFrame slot={lead.image} className="aspect-[16/10] rounded-[1.75rem]" />
          </Reveal>
          <Reveal className="md:col-span-4" delay={80}>
            <h3 className="font-display text-4xl leading-none font-medium">{lead.name}</h3>
            <p className="mt-4 text-lg leading-relaxed">{lead.summary}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {band.map((type, index) => (
            <Reveal key={type.name} delay={index * 70}>
              <ImageFrame
                slot={type.image}
                className={index === 1 ? "aspect-square rounded-[1.5rem]" : "aspect-[3/4] rounded-[1.5rem]"}
              />
              <h3 className="mt-5 font-display text-3xl leading-none font-medium">{type.name}</h3>
              <p className="mt-3 leading-relaxed">{type.summary}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8">
          {closing.map((type) => (
            <Reveal key={type.name}>
              <article className="grid items-center gap-6 border-t border-border pt-8 md:grid-cols-12">
                <div className="md:col-span-5">
                  <h3 className="font-display text-4xl leading-none font-medium">{type.name}</h3>
                  <p className="mt-4 max-w-sm text-lg leading-relaxed">{type.summary}</p>
                </div>
                <ImageFrame
                  slot={type.image}
                  className="aspect-[16/8] rounded-[1.5rem] md:col-span-7"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
