import { Link } from "react-router"

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-display text-4xl font-medium tracking-tight text-balance">
        This page is not available.
      </h1>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center text-primary underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Back to The Workship Studio
      </Link>
    </div>
  )
}
