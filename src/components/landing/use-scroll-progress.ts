import { useEffect, type RefObject } from "react"

export function useScrollProgress(
  ref: RefObject<HTMLElement | SVGElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) {
      return
    }

    let frame = 0

    const update = () => {
      const rect = element.getBoundingClientRect()
      const view = window.innerHeight
      const progress = (view - rect.top) / (view + rect.height)
      const clamped = Math.min(1, Math.max(0, progress))
      element.style.setProperty("--progress", clamped.toFixed(3))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [enabled, ref])
}
