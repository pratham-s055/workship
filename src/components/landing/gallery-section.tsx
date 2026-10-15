import { ImageFrame } from "@/components/landing/image-frame"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"
import type { ImageSlot } from "@/types/landing"

type GallerySectionProps = {
  frames: ImageSlot[]
}

const frameClass = [
  "md:col-span-7 aspect-[16/11]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-4 aspect-[5/4]",
  "md:col-span-3 aspect-square",
  "md:col-span-5 aspect-[16/9]",
]

export function GallerySection({ frames }: GallerySectionProps) {
  return (
    <section id="gallery" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
            The studio, in frames
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12">
          {frames.map((frame, index) => (
            <Reveal
              key={frame.caption}
              delay={index * 60}
              className={cn("min-h-0", frameClass[index] ?? "md:col-span-4 aspect-[4/3]")}
            >
              <ImageFrame slot={frame} className="size-full min-h-56 rounded-[1.5rem]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
