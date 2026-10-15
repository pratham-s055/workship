import { landingContent } from "@/data/landing"
import type { LandingContent } from "@/types/landing"

// A future FastAPI call replaces the function body only; keep the function name and return type.
export function getLandingContent(): Promise<LandingContent> {
  return Promise.resolve(landingContent)
}
