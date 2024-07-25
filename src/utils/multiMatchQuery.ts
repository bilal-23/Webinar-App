import { Webinar } from "@/types/webinar"

export const multiMatchQuery = (searchInput: string, webinar: Webinar) => {
  // Return True if the searchInput is in the webinar title, description, or topics
  return (
    webinar.instructorName.toLowerCase().includes(searchInput.toLowerCase()) ||
    webinar.instructorRole.toLowerCase().includes(searchInput.toLowerCase()) ||
    webinar.instructorCompany
      .toLowerCase()
      .includes(searchInput.toLowerCase()) ||
    webinar.topic.toLowerCase().includes(searchInput.toLowerCase()) ||
    webinar.webinarTitle.toLowerCase().includes(searchInput.toLowerCase())
  )
}
