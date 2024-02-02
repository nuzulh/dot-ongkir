import { Form, FormItem, FormMessage, Input } from "../../../components/forms";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { FiUserCheck } from "react-icons/fi";
import { useEffect } from "react";

type RegisterFormProps = {
  onSubmit: (values: any) => Promise<any>;
};

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const { password, confirmPassword } = watch();

  useEffect(() => {
    if ((password !== confirmPassword) && !!confirmPassword) setError(
      "confirmPassword",
      { message: "Password tidak cocok!" },
    );
    else clearErrors("confirmPassword");
  }, [clearErrors, confirmPassword, password, setError]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Email" isInvalid={!!errors?.email}>
        <Input
          required
          control={control}
          name="email"
          type="email"
          placeholder="contoh@mail.com"
        />
        <FormMessage name="email" errors={errors} />
      </FormItem>
      <FormItem label="Password" isInvalid={!!errors?.password}>
        <Input
          required
          control={control}
          name="password"
          type="password"
          placeholder="*****"
          minLength={6}
        />
        <FormMessage name="password" errors={errors} />
      </FormItem>
      <FormItem label="Konfirmasi Password" isInvalid={!!errors?.confirmPassword}>
        <Input
          required
          control={control}
          name="confirmPassword"
          type="password"
          placeholder="*****"
          minLength={6}
        />
        <FormMessage name="confirmPassword" errors={errors} />
      </FormItem>
      <Button
        type="submit"
        isLoading={isSubmitting}
        label="Daftar"
        icon={<FiUserCheck />}
      />
    </Form>
  );
}
