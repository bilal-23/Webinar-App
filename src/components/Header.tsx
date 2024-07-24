export function Header() {
  return (
    <>
      <header className="flex h-[72px] w-full flex-row items-start justify-between">
        <span className="text-light-text-0 text-lg font-semibold">
          Webinar App
        </span>
        <button className="text-light-text-3 bg-light-accent-blue shadow-blue-btn mr-6 cursor-pointer rounded-[10px] px-6 py-3 text-base font-semibold leading-5">
          Add Webinar
        </button>
      </header>
      <div className="bg-light-border-0 h-px w-full" />
    </>
  )
}
