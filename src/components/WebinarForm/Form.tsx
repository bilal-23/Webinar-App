import { useWebinarStore } from "@/store/webinar-store"
import { webinarSchema } from "@/utils/formValidation"
import CloseIcon from "@mui/icons-material/Close"
import { toast } from "sonner"
import { useShallow } from "zustand/react/shallow"

import { InstructorDetailsFormSection } from "./InstructorDetailsFormSection"
import { WebinarDetailFormSection } from "./WebinarDetailFormSection"

interface Props {
  closeForm: () => void
}

export function WebinarForm({ closeForm }: Props) {
  const { addWebinar, updateWebinar, activeWebinar } = useWebinarStore(
    useShallow((state) => state)
  )

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries()) as any

    const isValid = webinarSchema.safeParse(data)
    const errors = isValid.error?.flatten().fieldErrors

    if (errors) {
      const errorMessage = Object.values(errors).join(", ")
      toast.error(errorMessage)
      return
    }

    // Convert image to base64, it takes time so converted to a promise
    const image = await new Promise<string | null>((res) => {
      const reader = new FileReader()
      let image: null | string = ""
      reader.readAsDataURL(data.instructorImage)
      reader.onloadend = () => {
        image = reader.result as string
        if (image === `data:application/octet-stream;base64,`) {
          image = null
        }
        res(image)
      }
    })

    if (activeWebinar) {
      // Update webinar to the store
      updateWebinar({
        id: activeWebinar.id,
        instructorName: data.instructorName,
        instructorRole: data.instructorRole,
        instructorCompany: data.instructorCompany,
        topic: data.topic,
        image: image || activeWebinar.image,
        webinarTitle: data.webinarTitle,
        startDate: data.startDate,
        startTime: data.startTime,
        endTime: data.endTime,
      })
      closeForm()
      return
    }

    // if no image return
    if (!image) {
      toast.error("Please select an image")
      return
    }
    // Add webinar to the store
    addWebinar({
      id: Math.random() + "",
      instructorName: data.instructorName,
      instructorRole: data.instructorRole,
      instructorCompany: data.instructorCompany,
      topic: data.topic,
      image: image,
      webinarTitle: data.webinarTitle,
      startDate: data.startDate,
      startTime: data.startTime,
      endTime: data.endTime,
    })
    closeForm()
  }

  return (
    <div className="scrollbar-none flex h-[839px] flex-col overflow-y-scroll lg:w-[910px]">
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
        <div className="flex w-full flex-col gap-8 px-1 sm:px-8">
          {/* First Form Section */}
          <InstructorDetailsFormSection />

          {/* Second Form Section  */}
          <WebinarDetailFormSection />
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-start border-t border-[#E3E7EC] px-8 py-5">
          {!activeWebinar && (
            <button className="mr-6 cursor-pointer rounded-[10px] bg-light-accent-blue px-6 py-3 text-base font-semibold leading-5 text-light-text-3 shadow-blue-btn">
              Create Webinar
            </button>
          )}
          {activeWebinar && (
            <button className="mr-6 cursor-pointer rounded-[10px] bg-light-accent-blue px-6 py-3 text-base font-semibold leading-5 text-light-text-3 shadow-blue-btn">
              Update Webinar
            </button>
          )}

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
