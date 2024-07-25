export function formatDate(date: Date) {
  // return date in format DD-MM-YYYY
  return new Date(date)
    .toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
    .replace(/\//g, "-")
}
