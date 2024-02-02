export function Form({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: React.ReactNode;
}) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export function FormItem({
  label,
  isInvalid = false,
  children,
}: {
  label?: string;
  isInvalid?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`form-item ${isInvalid ? "form-error" : ""}`}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
}
