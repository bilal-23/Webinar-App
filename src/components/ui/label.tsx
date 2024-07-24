import React from "react"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={`relative text-[13px] font-semibold leading-[normal] text-light-text-1 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = "label"

export { Label }
