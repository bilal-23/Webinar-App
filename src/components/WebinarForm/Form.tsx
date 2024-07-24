import CloseIcon from "@mui/icons-material/Close"

import { CircleIcon, UserIcon, VideoCamIcon } from "../ui/icons"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface Props {
  closeForm: () => void
}

export function WebinarForm({ closeForm }: Props) {
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
      <form className="flex-1 pt-[43px]">
        {/* Form Area */}
        <div className="flex w-full flex-col gap-8 px-8">
          {/* First Form Section */}
          <div className="flex items-start gap-8">
            {/* Icon */}
            <UserIcon />
            <div className="flex flex-1 flex-col gap-[30px]">
              <p className="text-base font-semibold leading-6 text-light-text-1">
                Instructor Detail
              </p>
              {/* Input Fields */}
              <div className="grid w-full grid-cols-2 gap-10">
                {/* Input group */}
                <div className="space-y-[19px]">
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="instructor-name">
                      Instructor Name
                      <span className="text-[#BE1818]">*</span>
                    </Label>
                    <Input
                      id="instructor-name"
                      type="text"
                      placeholder="Type the instructor name"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="instructor-role">
                      Instructor Role
                      <span className="text-[#BE1818]">*</span>
                    </Label>
                    <Input
                      id="instructor-role"
                      type="text"
                      placeholder="Type the instructor role"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="instructor-company">
                      Instructor Company
                      <span className="text-[#BE1818]">*</span>
                    </Label>
                    <Input
                      id="instructor-company"
                      type="text"
                      placeholder="Type the instructor company"
                    />
                  </div>
                </div>
                <div className="space-y-[19px]">
                  {/* Image upload */}
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="instructor-image" className="input">
                      Upload Image
                      <span className="text-[#BE1818]">*</span>
                    </Label>
                    <label
                      htmlFor="instructor-image"
                      className="grid size-[135px] cursor-pointer place-items-center rounded-2xl bg-light-background-0"
                      style={{
                        border: "1px dashed #D9DBDC",
                      }}
                    >
                      <span className="text-4xl text-light-text-placeholder">
                        +
                      </span>
                    </label>
                    <Input
                      id="instructor-image"
                      type="file"
                      className="hidden"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="topic">
                      Topic
                      <span className="text-[#BE1818]">*</span>
                    </Label>
                    <Input
                      id="topic"
                      type="text"
                      placeholder="Type the topic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Form Section  */}
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
                    id="instructor-name"
                    className="w-full"
                    placeholder="Type the webinar title"
                  />
                </div>
                <div className="mt-[13px] flex items-center justify-start gap-6">
                  {/* Start date */}
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="start_date" className="flex">
                      Start Date
                      <CircleIcon />
                    </Label>
                    <Input
                      id="start_date"
                      type="text"
                      onFocus={(e) => {
                        e.target.type = "date"
                      }}
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
                      id="start_time"
                      type="text"
                      onFocus={(e) => {
                        e.target.type = "time"
                      }}
                      placeholder="Type Start Time"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <Label htmlFor="end_time" className="flex">
                      End Time
                      <CircleIcon />
                    </Label>
                    <Input
                      id="end_time"
                      type="text"
                      onFocus={(e) => {
                        e.target.type = "time"
                      }}
                      placeholder="Type End Time"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
