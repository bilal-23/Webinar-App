import { z } from "zod"

// Helper function to convert time string to minutes
const timeStringToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

export const webinarSchema = z
  .object({
    instructorName: z
      .string()
      .min(1, { message: "Instructor name is required" }),
    instructorRole: z
      .string()
      .min(1, { message: "Instructor role is required" }),
    instructorCompany: z
      .string()
      .min(1, { message: "Instructor company is required" }),
    topic: z.string().min(1, { message: "Topic is required" }),
    webinarTitle: z.string().min(1, { message: "Webinar title is required" }),
    startDate: z.preprocess(
      (arg) => {
        if (typeof arg === "string") {
          return new Date(arg)
        }
        return arg
      },
      z.date({ invalid_type_error: "Start date must be a valid date" })
    ),
    startTime: z.string().regex(/^\d{2}:\d{2}$/, {
      message: "Start time must be in HH:MM format",
    }),
    endTime: z
      .string()
      .regex(/^\d{2}:\d{2}$/, { message: "End time must be in HH:MM format" }),
  })
  .refine(
    (data) =>
      timeStringToMinutes(data.endTime) > timeStringToMinutes(data.startTime),
    {
      message: "End time must be greater than start time",
      path: ["endTime"],
    }
  )
