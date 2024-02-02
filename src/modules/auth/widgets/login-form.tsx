import { Form, FormItem, FormMessage, Input } from "../../../components/forms";
import Button from "../../../components/button";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

type LoginFormProps = {
  onSubmit: (values: any) => Promise<any>;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

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
        />
        <FormMessage name="password" errors={errors} />
      </FormItem>
      <Button
        type="submit"
        isLoading={isSubmitting}
        label="Masuk"
        icon={<FiLogIn />}
      />
    </Form>
  );
}
