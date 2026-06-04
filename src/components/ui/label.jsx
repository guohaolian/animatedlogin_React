import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

const Label = React.forwardRef(({ className = "", ...props }, ref) => {
  const classes = ["label", className].filter(Boolean).join(" ")

  return <LabelPrimitive.Root ref={ref} className={classes} {...props} />
})
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
