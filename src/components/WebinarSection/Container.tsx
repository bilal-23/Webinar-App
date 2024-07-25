import { useWebinarStore } from "@/store/webinar-store"
import { multiMatchQuery } from "@/utils/multiMatchQuery"
import { AnimatePresence, motion } from "framer-motion"
import { useShallow } from "zustand/react/shallow"

import { WebinarCard } from "./WebinarCard"

export function Container() {
  const { webinars, searchInput, selectedTopic } = useWebinarStore(
    useShallow((state) => state)
  )

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid h-[calc(100vh-181px)] flex-1 place-items-start gap-7 overflow-y-scroll pt-7 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence>
        {webinars.map((webinar) => {
          // If no search input and no selected topic, show all webinars
          if (!searchInput && !selectedTopic)
            return <WebinarCard key={webinar.id} webinar={webinar} />
          // If search input and webinar does not match search input, do not show
          if (searchInput && !multiMatchQuery(searchInput, webinar)) return null
          // If selected topic and webinar does not match selected topic, do not show
          if (selectedTopic && webinar.topic !== selectedTopic) return null
          // If all conditions are met, show the webinar
          return <WebinarCard key={webinar.id} webinar={webinar} />
        })}
      </AnimatePresence>
    </motion.section>
  )
}
