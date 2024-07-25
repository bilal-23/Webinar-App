export function timeFormat(
  webinarDate: Date,
  startTime: string,
  endTime: string
): string {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dateObj = new Date(webinarDate)
  const day = dateObj.getDay()
  const month = dateObj.getMonth()
  const date = dateObj.getDate()

  //function to convert 24-hour time to 12-hour time
  const convertTo12HourFormat = (
    time: string
  ): { hour: number; minute: string; period: string } => {
    let [hour, minute] = time.split(":").map(Number)
    const period = hour >= 12 ? "PM" : "AM"
    hour = hour % 12 || 12 // Convert hour to 12-hour format, keeping 12 as is
    return { hour, minute: minute.toString().padStart(2, "0"), period }
  }

  const start = convertTo12HourFormat(startTime)
  const end = convertTo12HourFormat(endTime)

  //formatted time string
  const formattedTime = `${weekdays[day]}, ${months[month]} ${date} • ${start.hour}:${start.minute} ${start.period} - ${end.hour}:${end.minute} ${end.period}`

  return formattedTime
}
