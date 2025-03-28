import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import PropTypes from "prop-types";
const spinnerVariants = cva("flex-col items-center justify-center", {
  variants: {
    show: {
      true: "flex",
      false: "hidden",
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "w-6 h-6", // 1.5rem, default small size
      medium: "w-8 h-8", // 2rem
      large: "w-12 h-12", // 3rem
      custom: "w-[14px] h-[14px]", // Adds custom 14px size
    },
  },
  defaultVariants: {
    size: "custom",
  },
});

export function Spinner({
  size = "custom",
  show = true,
  children,
  className,
  color = "var(--color-white)",
}) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2
        className={cn(loaderVariants({ size }), className)}
        style={{ color }}
      />
      {children}
    </span>
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
  show: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
};
