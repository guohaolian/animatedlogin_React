import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

function getButtonClassName({ variant = "default", size = "default", className = "" }) {
  const classes = ["btn"]

  if (variant === "default") classes.push("btn--default")
  else if (variant === "outline") classes.push("btn--outline")

  if (size === "default") classes.push("btn--md")
  else if (size === "lg") classes.push("btn--lg")

  if (className) classes.push(className)

  return classes.join(" ")
}

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={getButtonClassName({ variant, size, className })}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button }
