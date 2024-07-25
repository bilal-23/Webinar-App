/* eslint-disable @next/next/no-img-element */

import { useWebinarStore } from "@/store/webinar-store"
import { timeFormat } from "@/utils/timeFormat"
import { motion } from "framer-motion"
import { useShallow } from "zustand/react/shallow"

import { Webinar } from "@/types/webinar"

interface Props {
  webinar: Webinar
}

export function WebinarCard(this: any, { webinar }: Props) {
  const { deleteWebinar, setActiveWebinar, setWebinarFormState } =
    useWebinarStore(useShallow((state) => state))
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
      layout
      className="flex h-[321px] w-full shrink-0 flex-col justify-between rounded-3xl border border-light-border-0 bg-light-background-1 p-5 pb-[17px] shadow-light"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex h-[125px] w-full items-center justify-between rounded-2xl bg-light-accent-teal p-6">
          {/* Name */}
          <div>
            <p className="text-lg font-semibold text-light-text-3">
              {webinar.instructorName}
            </p>
            <p className="text-sm leading-6 text-light-text-3">
              {webinar.instructorRole}
            </p>
          </div>
          {/* Image */}
          <div className="size-[72px]">
            <img
              src={webinar.image as string}
              alt="Webinar Card"
              width={76}
              height={76}
              className="size-full rounded-2xl"
            />
          </div>
        </div>
        {/* Webinar Info */}
        <div>
          <p className="text-sm font-semibold leading-6 text-light-accent-teal">
            {webinar.topic}
          </p>
          <p className="text-lg font-semibold text-light-text-0">
            {webinar.webinarTitle}
          </p>
          <p className="mt-1 text-sm font-normal leading-6 text-light-text-1">
            {timeFormat(webinar.startDate, webinar.startTime, webinar.endTime)}
          </p>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex items-center justify-start gap-[15px]">
        <button
          className="h-9 w-[90px] rounded-3xl bg-light-accent-red-pastel px-[14px] py-1.5 text-sm font-semibold leading-6 text-light-accent-red"
          onClick={deleteWebinar.bind(this, webinar.id)}
        >
          Delete
        </button>
        <button
          className="text-xs font-semibold leading-[normal] text-[#0E51F1]"
          onClick={() => {
            setActiveWebinar(webinar)
            setWebinarFormState("open")
          }}
        >
          Edit
        </button>
      </div>
    </motion.div>
  )
}
