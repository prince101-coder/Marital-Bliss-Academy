import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  className = "",
  type = "button",
  variant = "default",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "outline"
      ? "border bg-transparent"
      : "border border-transparent";

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${className}`}
      {...props}
    />
  );
}
