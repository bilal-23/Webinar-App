import { useWebinarStore } from "@/store/webinar-store"
import { formatDate } from "@/utils/formatDate"
import { useShallow } from "zustand/react/shallow"

import { CircleIcon, VideoCamIcon } from "../ui/icons"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function WebinarDetailFormSection() {
  const { activeWebinar } = useWebinarStore(useShallow((state) => state))

  return (
    <div className="flex items-start gap-8">
      {/* Icon */}
      <VideoCamIcon />
      <div className="flex flex-1 flex-col gap-8">
        <p className="text-base font-semibold leading-6 text-light-text-1">
          Webinar Detail
        </p>
        <div>
          <div className="flex w-full flex-col items-start gap-3">
            <Label htmlFor="instructor-name">
              Webinar Title
              <span className="text-[#BE1818]">*</span>
            </Label>
            <Input
              defaultValue={activeWebinar?.webinarTitle}
              required
              id="instructor-name"
              minLength={3}
              className="w-full"
              placeholder="Type the webinar title"
              name="webinarTitle"
            />
          </div>
          <div className="mt-[13px] flex flex-wrap items-center justify-start gap-6">
            {/* Start date */}
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="start_date" className="flex">
                Start Date
                <CircleIcon />
              </Label>
              <Input
                required
                defaultValue={
                  formatDate(activeWebinar?.startDate as Date) || ""
                }
                id="start_date"
                type="text"
                onFocus={(e) => {
                  e.target.type = "date"
                }}
                name="startDate"
                placeholder="Type Start Date"
                min={new Date().toISOString().split("T")[0]}
                max={
                  new Date(new Date().setDate(new Date().getDate() + 30))
                    .toISOString()
                    .split("T")[0]
                }
              />
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="start_time" className="flex">
                Start Time
                <CircleIcon />
              </Label>
              <Input
                required
                id="start_time"
                type="text"
                defaultValue={activeWebinar?.startTime}
                onFocus={(e) => {
                  e.target.type = "time"
                }}
                placeholder="Type Start Time"
                name="startTime"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="end_time" className="flex">
                End Time
                <CircleIcon />
              </Label>
              <Input
                required
                id="end_time"
                type="text"
                defaultValue={activeWebinar?.endTime}
                onFocus={(e) => {
                  e.target.type = "time"
                }}
                placeholder="Type End Time"
                name="endTime"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
