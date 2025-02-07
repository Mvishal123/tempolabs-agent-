import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

const buttonVariants = cva("disabled:opacity-50 shadow-sm rounded-lg", {
  variants: {
    variant: {
      primary: "bg-brand text-white hover:bg-brand/90",
    },
    size: {
      small: "py-[9px] px-[20px] text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
