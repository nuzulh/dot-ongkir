import { useState } from "react";

export function useToggle(defaultValue?: boolean) {
  const [value, setValue] = useState(defaultValue || false);
  const toggle = () => setValue((prev) => !prev);
  const on = () => setValue(true);
  const off = () => setValue(false);

  return { value, toggle, on, off };
}
