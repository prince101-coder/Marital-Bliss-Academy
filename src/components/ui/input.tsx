import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border px-4 py-3 outline-none transition-colors ${className}`}
      {...props}
    />
  );
}
