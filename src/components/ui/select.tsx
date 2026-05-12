import {
  createContext,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useState,
} from "react";

type SelectContextValue = {
  open: boolean;
  selectedLabel: string;
  setOpen: (open: boolean) => void;
  choose: (value: string, label: string) => void;
};

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelect() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("Select components must be used inside Select.");
  }

  return context;
}

export function Select({
  children,
  onValueChange,
}: {
  children: ReactNode;
  onValueChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const choose = (value: string, label: string) => {
    setSelectedLabel(label);
    setOpen(false);
    onValueChange?.(value);
  };

  return (
    <SelectContext.Provider value={{ open, selectedLabel, setOpen, choose }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSelect();

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between border px-4 py-3 text-left outline-none transition-colors ${className}`}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <span className="text-slate-400">v</span>
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const { selectedLabel } = useSelect();

  return (
    <span className={selectedLabel ? "text-slate-800" : "text-slate-400"}>
      {selectedLabel || placeholder}
    </span>
  );
}

export function SelectContent({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { open } = useSelect();

  if (!open) {
    return null;
  }

  return (
    <div
      className={`absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 shadow-lg ${className}`}
      {...props}
    />
  );
}

export function SelectItem({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const { choose } = useSelect();
  const label = typeof children === "string" ? children : value;

  return (
    <button
      type="button"
      className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-amber-50"
      onClick={() => choose(value, label)}
    >
      {children}
    </button>
  );
}
