import { AddWebinar } from "./WebinarForm/AddWebinar"

export function Header() {
  return (
    <>
      <header className="flex h-[72px] w-full flex-row items-start justify-between">
        <span className="text-lg font-semibold text-light-text-0">
          Webinar App
        </span>
        <AddWebinar />
      </header>
      <div className="h-px w-full bg-light-border-0" />
    </>
  )
}
