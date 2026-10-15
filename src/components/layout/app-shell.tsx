import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router"
import { BrandMark } from "@/components/brand/brand-mark"
import { getStudioProfile } from "@/services/studio"
import type { StudioProfile } from "@/types/studio"
import { cn } from "@/lib/utils"

const chapterLinks = [
  { href: "#work", label: "Work" },
  { href: "#create", label: "Create" },
  { href: "#connect", label: "Connect" },
]

type ShellState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; profile: StudioProfile }

export function AppShell() {
  const location = useLocation()
  const home = location.pathname === "/"
  const [elevated, setElevated] = useState(false)
  const [state, setState] = useState<ShellState>({ status: "loading" })

  useEffect(() => {
    let active = true

    getStudioProfile()
      .then((profile) => {
        if (active) {
          setState({ status: "success", profile })
        }
      })
      .catch(() => {
        if (active) {
          setState({ status: "error" })
        }
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const wordmark = state.status === "success" ? state.profile.name : "The Workship Studio"
  const tagline = state.status === "success" ? state.profile.tagline : null
  const light = home && state.status !== "error" && !elevated

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-md focus:bg-background focus:px-4 focus:text-primary focus:underline focus:underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 motion-safe:transition-colors motion-safe:duration-300",
          light
            ? "bg-transparent text-white"
            : "border-b border-border bg-background text-foreground",
        )}
      >
        <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <Link
            to="/"
            className="inline-flex min-h-11 min-w-0 items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <BrandMark name={wordmark} tone={light ? "light" : "ink"} />
          </Link>
          {home ? (
            <nav aria-label="Chapters" className="flex items-center gap-1 sm:gap-3">
              {chapterLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "inline-flex min-h-11 items-center px-2 text-xs font-medium tracking-[0.18em] uppercase",
                    light ? "text-white/80 hover:text-white" : "text-primary",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : tagline ? (
            <p className="min-w-0 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase sm:max-w-xs sm:text-right">
              {tagline}
            </p>
          ) : null}
        </div>
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className={cn(
          "w-full min-w-0 outline-none",
          home
            ? "min-h-dvh"
            : "mx-auto max-w-5xl px-6 pt-32 pb-16 sm:px-10 sm:pt-36 sm:pb-24",
        )}
      >
        {state.status === "loading" ? (
          <p
            aria-live="polite"
            className={cn(home && "min-h-dvh bg-[var(--color-navy)] px-6 pt-36 text-white")}
          >
            Loading
          </p>
        ) : null}
        {state.status === "error" ? <p>The studio profile could not be loaded.</p> : null}
        {state.status === "success" ? <Outlet context={state.profile} /> : null}
      </main>
    </div>
  )
}
