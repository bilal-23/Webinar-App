import { useState } from "react"
import * as React from "react"
import Dialog from "@mui/material/Dialog"

import { WebinarForm } from "./Form"

export function AddWebinar() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
        open={open}
      >
        <WebinarForm closeForm={handleClose} />
      </Dialog>
    </>
  )
}
