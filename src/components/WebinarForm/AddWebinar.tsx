import * as React from "react"
import { useWebinarStore } from "@/store/webinar-store"
import Dialog from "@mui/material/Dialog"
import { useShallow } from "zustand/react/shallow"

import { WebinarForm } from "./Form"

export function AddWebinar() {
  const { webinarFormState, setWebinarFormState, setActiveWebinar } =
    useWebinarStore(useShallow((state) => state))

  const handleClickOpen = () => {
    setWebinarFormState("open")
  }

  const handleClose = () => {
    setWebinarFormState("closed")
    setActiveWebinar(null)
  }

  return (
    <>
      <button
        className="mr-6 cursor-pointer rounded-[10px] bg-light-accent-blue px-6 py-3 text-base font-semibold leading-5 text-light-text-3 shadow-blue-btn"
        onClick={handleClickOpen}
      >
        Add Webinar
      </button>

      <Dialog
        maxWidth="xl"
        classes={{
          paper: "rounded-2xl border border-light-border-0 shadow-light",
        }}
        onClose={handleClose}
        open={webinarFormState === "open"}
      >
        <WebinarForm closeForm={handleClose} />
      </Dialog>
    </>
  )
}
