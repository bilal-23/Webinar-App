import * as React from "react"
import { useWebinarStore } from "@/store/webinar-store"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useShallow } from "zustand/react/shallow"

export function FilterDropdown() {
  const { topics, setTopics, webinars, selectedTopic, setSelectedTopic } =
    useWebinarStore(useShallow((state) => state))

  React.useEffect(() => {
    const topics = webinars.map((webinar) => webinar.topic)
    setTopics(topics)
  }, [setTopics, webinars])

  const handleChange = (event: any) => {
    setSelectedTopic(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, borderRadius: 10, height: 44 }}>
      <InputLabel id="demo-simple-select-helper-label">Topics</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selectedTopic}
        sx={{ height: 44 }}
        label="Age"
        onChange={handleChange}
        className="w-[320px] rounded-[10px] sm:w-[220px]"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {topics.map((topic) => (
          <MenuItem key={topic} value={topic}>
            {topic}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
