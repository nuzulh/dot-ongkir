import { FieldErrors } from "react-hook-form";

export function FormMessage({
  name,
  errors,
}: {
  name: string,
  errors: FieldErrors;
}) {
  if (!errors[name]) return null;

  return <p>{errors[name]?.message as string}</p>;
}
