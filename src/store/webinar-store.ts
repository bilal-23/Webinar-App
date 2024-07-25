import { webinars } from "@/data/webinar-data"
import { create } from "zustand"

import { Webinar } from "@/types/webinar"

interface WebinarStoreInitialState {
  webinars: Webinar[]
  activeWebinar: Webinar | null
  webinarFormState: "open" | "closed"
}

interface WebinarStore extends WebinarStoreInitialState {
  deleteWebinar: (webinarId: string) => void
  setActiveWebinar: (webinar: Webinar | null) => void
  setWebinarFormState: (state: "open" | "closed") => void

  addWebinar: (webinar: Webinar) => void
  updateWebinar: (webinar: Webinar) => void
}

export const useWebinarStore = create<WebinarStore>((set) => ({
  webinars: webinars,
  activeWebinar: null,
  webinarFormState: "closed",

  setActiveWebinar: (webinar: Webinar | null) => {
    set((state) => ({
      activeWebinar: webinar,
    }))
  },
  setWebinarFormState: (formState: "open" | "closed") => {
    set(() => ({
      webinarFormState: formState,
    }))
  },
  deleteWebinar: (webinarId: string) => {
    set((state) => ({
      webinars: state.webinars.filter((webinar) => webinar.id !== webinarId),
    }))
  },
  addWebinar: (webinar: Webinar) => {
    set((state) => ({
      webinars: [webinar, ...state.webinars],
    }))
  },
  updateWebinar: (webinar: Webinar) => {
    set((state) => ({
      webinars: state.webinars.map((w) => (w.id === webinar.id ? webinar : w)),
    }))
  },
}))
