import { useWebinarStore } from "@/store/webinar-store"
import SearchIcon from "@mui/icons-material/Search"
import { useShallow } from "zustand/react/shallow"

export function Search() {
  const { searchInput, setSearchInput } = useWebinarStore(
    useShallow((state) => state)
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className="flex h-[44px] w-[380px] shrink-0 items-center justify-start gap-2 rounded-[10px] border border-light-border-0 bg-light-background-1 px-[16px]">
      <SearchIcon className="text-light-text-placeholder" />
      <input
        className="font-regular w-full bg-transparent text-sm text-light-text-placeholder focus:outline-none"
        placeholder="Search for webinar"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  )
}
