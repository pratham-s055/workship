import { useEffect, useState } from "react"
import { useOutletContext } from "react-router"
import { AmenitiesSection } from "@/components/landing/amenities-section"
import { ChapterSection } from "@/components/landing/chapter-section"
import { ClosingSection } from "@/components/landing/closing-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { HeroSection } from "@/components/landing/hero-section"
import { LocationSection } from "@/components/landing/location-section"
import { PlansSection } from "@/components/landing/plans-section"
import { WorkspaceSection } from "@/components/landing/workspace-section"
import { getLandingContent } from "@/services/landing"
import type { LandingContent } from "@/types/landing"
import type { StudioProfile } from "@/types/studio"

export function HomePage() {
  const profile = useOutletContext<StudioProfile | undefined>()
  const [content, setContent] = useState<LandingContent | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true

    getLandingContent()
      .then((value) => {
        if (active) {
          setContent(value)
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true)
        }
      })

    return () => {
      active = false
    }
  }, [])

  if (!profile) {
    return null
  }

  if (failed) {
    return (
      <p className="bg-background px-6 py-24 text-foreground">The page could not be loaded.</p>
    )
  }

  if (!content) {
    return (
      <p
        aria-live="polite"
        className="min-h-dvh bg-[var(--color-navy)] px-6 pt-36 text-white"
      >
        Loading
      </p>
    )
  }

  return (
    <div className="overflow-x-clip">
      <HeroSection profile={profile} hero={content.hero} image={content.hero.image} />
      {content.chapters.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}
      <WorkspaceSection types={content.workspaceTypes} />
      <PlansSection plans={content.plans} />
      <AmenitiesSection amenities={content.amenities} />
      <GallerySection frames={content.gallery} />
      <LocationSection location={content.location} />
      <ClosingSection profile={profile} closing={content.closing} />
    </div>
  )
}
