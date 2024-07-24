import { useState } from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const ImageInput = () => {
  const [image, setImage] = useState<string>("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
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
        className="bg-light-background-0 grid size-[135px] cursor-pointer place-items-center rounded-2xl"
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
        required
        onChange={handleImageChange}
      />
    </div>
  )
}
