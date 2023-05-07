import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  [
    "font-montserrat",
    "inline-flex",
    "h-10",
    "items-center",
    "justify-center",
    "whitespace-pre-wrap",
    "rounded",
    "px-8",
    "text-center",
    "text-sm",
    "font-bold",
    "leading-xs",
    "transition-all",
    "md:h-12",
    "md:text-base",
    "md:leading-sm",
    "lg:h-14",
  ],
  {
    variants: {
      color: {
        blue: [
          "bg-blue",
          "text-white",
          "border-transparent",
          "hover:bg-blue/90",
        ],
        red: ["bg-red", "text-white", "border-transparent", "hover:bg-red/90"],
        white: [
          "bg-white",
          "text-blue",
          "border-transparent",
          "hover:bg-white/90",
        ],
        transparent: [
          "bg-transparent",
          "text-white",
          "border-transparent",
          "hover:bg-white/10",
        ],
      },
      fullWidth: {
        true: ["w-full"],
      },
    },
    defaultVariants: {
      color: "blue",
    },
  }
);

export default function Button({ children, color, className, link, ...rest }) {
  return (
    <a
      className={twMerge(buttonStyles({ color, className }))}
      href={link}
      {...rest}
    >
      {children}
    </a>
  );
}

export { Button, buttonStyles };
