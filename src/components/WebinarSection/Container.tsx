import { useWebinarStore } from "@/store/webinar-store"
import { useShallow } from "zustand/react/shallow"

import { WebinarCard } from "./WebinarCard"

export function Container() {
  const { webinars } = useWebinarStore(useShallow((state) => state))
  return (
    <section className="grid h-[calc(100vh-181px)] flex-1 grid-cols-3 place-items-start gap-7 overflow-y-scroll pt-7">
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} webinar={webinar} />
      ))}
    </section>
  )
}
