import { Control, Controller } from "react-hook-form";

type FormProps = {
  name: string;
  control: Control;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  minLength?: number;
  maxLength?: number;
};

export function Input({
  name,
  control,
  placeholder,
  defaultValue = "",
  required = false,
  type = "text",
  minLength,
  maxLength,
}: FormProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: required ? "Isian ini harus diisi!" : undefined,
        minLength: minLength ? {
          value: minLength,
          message: `Harus lebih dari ${minLength} karakter!`,
        } : undefined,
        maxLength: maxLength ? {
          value: maxLength,
          message: `Harus kurang dari ${maxLength} karakter!`,
        } : undefined,
      }}
      render={({ field }) => (
        <input {...field} type={type} placeholder={placeholder} />
      )}
    />
  );
}
