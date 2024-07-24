import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`bg-light-bg-0 h-11 w-full rounded-[10px] border border-light-border-0 px-4 py-[10px] focus-visible:border-[#0E51F1] focus-visible:outline-none ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
