import { UserIcon } from "../ui/icons"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { ImageInput } from "./ImageInput"

export function InstructorDetailsFormSection() {
  return (
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
                required
                id="instructor-name"
                type="text"
                minLength={3}
                name="instructorName"
                placeholder="Type the instructor name"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="instructor-role">
                Instructor Role
                <span className="text-[#BE1818]">*</span>
              </Label>
              <Input
                required
                minLength={3}
                id="instructor-role"
                type="text"
                name="instructorRole"
                placeholder="Type the instructor role"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="instructor-company">
                Instructor Company
                <span className="text-[#BE1818]">*</span>
              </Label>
              <Input
                required
                id="instructor-company"
                type="text"
                minLength={3}
                name="instructorCompany"
                placeholder="Type the instructor company"
              />
            </div>
          </div>
          <div className="space-y-[19px]">
            {/* Image upload */}
            <ImageInput />
            <div className="flex w-full flex-col items-start gap-3">
              <Label htmlFor="topic">
                Topic
                <span className="text-[#BE1818]">*</span>
              </Label>
              <Input
                required
                minLength={3}
                id="topic"
                type="text"
                placeholder="Type the topic"
                name="topic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
