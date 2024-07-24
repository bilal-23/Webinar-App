import * as React from "react"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

export function FilterDropdown() {
  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, borderRadius: 10, height: 44 }}>
      <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        sx={{ height: 44 }}
        label="Age"
        onChange={handleChange}
        className="w-[220px] rounded-[10px]"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}
