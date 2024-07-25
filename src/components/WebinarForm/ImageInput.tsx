import { useState } from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const ImageInput = ({ defaultValue }: { defaultValue?: string }) => {
  const [image, setImage] = useState<string>(defaultValue || "")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
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
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {!image && (
          <span className="text-4xl text-light-text-placeholder">+</span>
        )}
      </label>
      <Input
        id="instructor-image"
        type="file"
        className="hidden"
        accept="image/*"
        name="instructorImage"
        onChange={handleImageChange}
      />
    </div>
  )
}
