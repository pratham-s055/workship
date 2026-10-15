import { studioProfile } from "@/data/studio"
import type { StudioProfile } from "@/types/studio"

// A future FastAPI call replaces the function body only; keep the function name and return type. Callers must not change.
export function getStudioProfile(): Promise<StudioProfile> {
  return Promise.resolve(studioProfile)
}
