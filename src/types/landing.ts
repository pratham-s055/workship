export type ImageSlot = {
  alt: string
  caption: string
  src: string | null
  tone: "navy" | "paper" | "warm"
}

export type Chapter = {
  id: "work" | "create" | "connect"
  word: string
  kicker: string
  summary: string
  points: string[]
  image: ImageSlot
}

export type WorkspaceType = {
  name: string
  summary: string
  image: ImageSlot
}

export type PlanSlot = {
  name: string
  summary: string
  price: string | null
}

export type AmenityGroup = {
  index: string
  title: string
  items: string[]
}

export type StudioLocation = {
  heading: string
  address: string | null
  access: string | null
  pendingLabel: string
}

export type LandingContent = {
  hero: {
    headline: [string, string]
    primaryCta: string
    secondaryCta: string
    image: ImageSlot
  }
  chapters: Chapter[]
  workspaceTypes: WorkspaceType[]
  plans: {
    pendingLabel: string
    note: string
    slots: PlanSlot[]
  }
  amenities: {
    heading: string
    summary: string
    groups: AmenityGroup[]
    image: ImageSlot
  }
  gallery: ImageSlot[]
  location: StudioLocation
  closing: {
    headline: string
    cta: string
  }
}
