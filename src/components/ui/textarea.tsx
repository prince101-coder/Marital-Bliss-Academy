import type { TextareaHTMLAttributes } from "react";

export function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full border px-4 py-3 outline-none transition-colors ${className}`}
      {...props}
    />
  );
}
