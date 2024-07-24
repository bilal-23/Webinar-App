/* eslint-disable @next/next/no-img-element */

export function WebinarCard() {
  return (
    <div className="flex h-[321px] w-full shrink-0 flex-col justify-between rounded-3xl border border-light-border-0 bg-light-background-1 p-5 pb-[17px] shadow-light">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex h-[125px] w-full items-center justify-between rounded-2xl bg-light-accent-teal p-6">
          {/* Name */}
          <div>
            <p className="text-lg font-semibold text-light-text-3">
              Matthew Martin
            </p>
            <p className="text-sm leading-6 text-light-text-3">
              Lead Front End Developer Google
            </p>
          </div>
          {/* Image */}
          <div className="size-[72px]">
            <img
              src="https://placehold.co/400"
              alt="Webinar Card"
              width={76}
              height={76}
              className="size-full"
            />
          </div>
        </div>
        {/* Webinar Info */}
        <div>
          <p className="text-sm font-semibold leading-6 text-light-accent-teal">
            Career
          </p>
          <p className="text-lg font-semibold text-light-text-0">
            Ask Me Anything
          </p>
          <p className="mt-1 text-sm font-normal leading-6 text-light-text-1">
            Tuesday • April 22, 4:00 - 5:00 PM
          </p>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex items-center justify-start gap-[15px]">
        <button className="h-9 w-[90px] rounded-3xl bg-light-accent-red-pastel px-[14px] py-1.5 text-sm font-semibold leading-6 text-light-accent-red">
          Delete
        </button>
        <button className="text-xs font-semibold leading-[normal] text-[#0E51F1]">
          Edit
        </button>
      </div>
    </div>
  )
}
