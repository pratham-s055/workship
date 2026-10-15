import { BrowserRouter, Route, Routes } from "react-router"
import { AppShell } from "@/components/layout/app-shell"
import { NotFoundPage } from "@/pages/not-found-page"
import { HomePage } from "@/pages/home-page"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          {/* Later public pages are sibling routes of the index route. A later signed-in area would be a parent route at /app. */}
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
