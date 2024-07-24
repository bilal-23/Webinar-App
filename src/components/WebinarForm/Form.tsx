import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"

import { InstructorDetailsFormSection } from "./InstructorDetailsFormSection"
import { WebinarDetailFormSection } from "./WebinarDetailFormSection"

interface Props {
  closeForm: () => void
}

interface Webinar {
  instructorName: string
  instructorRole: string
  instructorCompany: string
  topic: string
  webinarTitle: string
  startDate: Date
  startTime: string
  endTime: string
}

export function WebinarForm({ closeForm }: Props) {
  const [webinar, setWebinar] = useState<Webinar>({
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    topic: "",
    webinarTitle: "",
    startDate: new Date(),
    startTime: "",
    endTime: "",
  })
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as any

    setWebinar(data)
  }

  return (
    <div className="scrollbar-none flex h-[839px] w-[910px] flex-col overflow-y-scroll">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-start justify-between border-b border-[#E3E7EC] bg-white px-[31.5px] pb-[30px] pt-5">
        <p className="text-lg font-semibold text-light-text-0">
          Create Webinar
        </p>
        <button onClick={closeForm}>
          <CloseIcon classes="size-6" />
        </button>
      </div>
      <form className="flex-1 pt-[43px]" onSubmit={handleFormSubmit}>
        {/* Form Area */}
        <div className="flex w-full flex-col gap-8 px-8">
          {/* First Form Section */}
          <InstructorDetailsFormSection />

          {/* Second Form Section  */}
          <WebinarDetailFormSection />
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-start border-t border-[#E3E7EC] px-8 py-5">
          <button className="mr-6 cursor-pointer rounded-[10px] bg-light-accent-blue px-6 py-3 text-base font-semibold leading-5 text-light-text-3 shadow-blue-btn">
            Create Webinar
          </button>
          <button
            onClick={closeForm}
            className="text-base font-semibold leading-[normal] text-light-accent-blue"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
