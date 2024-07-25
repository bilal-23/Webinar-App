import { webinars } from "@/data/webinar-data"
import { create } from "zustand"

import { Webinar } from "@/types/webinar"

interface WebinarStoreInitialState {
  webinars: Webinar[]
  activeWebinar: Webinar | null
  webinarFormState: "open" | "closed"
  topics: string[]
  selectedTopic: string
  searchInput: string
}

interface WebinarStore extends WebinarStoreInitialState {
  deleteWebinar: (_webinarId: string) => void
  setActiveWebinar: (_webinar: Webinar | null) => void
  setWebinarFormState: (_state: "open" | "closed") => void

  addWebinar: (_webinar: Webinar) => void
  updateWebinar: (_webinar: Webinar) => void

  setTopics: (_topics: string[]) => void
  setSelectedTopic: (_selectedTopic: string) => void
  setSearchInput: (_searchInput: string) => void
}

export const useWebinarStore = create<WebinarStore>((set) => ({
  webinars: webinars,
  activeWebinar: null,
  webinarFormState: "closed",
  topics: [],
  selectedTopic: "",
  searchInput: "",

  setActiveWebinar: (webinar: Webinar | null) => {
    set(() => ({
      activeWebinar: webinar,
    }))
  },
  //   Controls the state of the webinar form
  setWebinarFormState: (formState: "open" | "closed") => {
    set((state) => {
      const topics = state.webinars.map((webinar) => webinar.topic)
      return {
        webinarFormState: formState,
        topics: topics,
      }
    })
  },

  //   Deletes a webinar from the store, and also from the topics array
  deleteWebinar: (webinarId: string) => {
    set((state) => {
      const topics = state.webinars.map((webinar) => webinar.topic)
      return {
        webinars: state.webinars.filter((webinar) => webinar.id !== webinarId),
        topics: topics,
      }
    })
  },
  //   Adds a webinar to the store, and also to the topics array
  addWebinar: (webinar: Webinar) => {
    set((state) => {
      const topics = state.webinars.map((webinar) => webinar.topic)
      return {
        webinars: [webinar, ...state.webinars],
        topics: [...topics, webinar.topic],
      }
    })
  },
  //   Updates a webinar in the store, and also in the topics array
  updateWebinar: (webinar: Webinar) => {
    set((state) => {
      const topics = state.webinars.map((webinar) => webinar.topic)
      return {
        webinars: state.webinars.map((w) =>
          w.id === webinar.id ? webinar : w
        ),
        topics: topics,
      }
    })
  },

  setTopics: (topics: string[]) => {
    set(() => ({
      topics: topics,
    }))
  },

  setSearchInput: (searchInput: string) => {
    set(() => ({
      searchInput: searchInput,
    }))
  },
  setSelectedTopic: (selectedTopic: string) => {
    set(() => ({
      selectedTopic: selectedTopic,
    }))
  },
}))
