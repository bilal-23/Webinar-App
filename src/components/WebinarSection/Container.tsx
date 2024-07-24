import { WebinarCard } from "./WebinarCard"

export function Container() {
  return (
    <section className="grid h-[calc(100vh-181px)] flex-1 grid-cols-3 place-items-center gap-7 overflow-y-scroll pt-7">
      <WebinarCard />
      <WebinarCard />
      <WebinarCard />
      <WebinarCard />
      <WebinarCard />
      <WebinarCard />
    </section>
  )
}
