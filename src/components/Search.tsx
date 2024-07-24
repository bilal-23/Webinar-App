import SearchIcon from "@mui/icons-material/Search"

export function Search() {
  return (
    <div className="border-light-border-0 bg-light-background-1 flex h-[44px] w-[380px] shrink-0 items-center justify-start gap-2 rounded-[10px] border px-[16px]">
      <SearchIcon className="text-light-text-placeholder" />
      <input
        className="text-light-text-placeholder font-regular w-full bg-transparent text-sm focus:outline-none"
        placeholder="Search for webinar"
      />
    </div>
  )
}
