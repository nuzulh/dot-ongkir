import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/card";
import RegisterForm from "./widgets/register-form";
import { AuthProps } from ".";
import { toast } from "sonner";

export default function Register({ authService }: AuthProps) {
  const navigate = useNavigate();

  const onSubmit = async (val: any) => {
    const result = await authService.register(val);
    if (result.error) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message, {
      description: "Silahkan masuk menggunakan akun yang telah Anda daftarkan.",
    });
    navigate("/auth/login");
  };

  return (
    <main data-aos="fade-right">
      <Card>
        <Card.Title>Daftar</Card.Title>
        <Card.Subtitle>Silahkan isi formulir berikut untuk melakukan registrasi akun.</Card.Subtitle>
        <Card.Content>
          <RegisterForm onSubmit={onSubmit} />
        </Card.Content>
        <Card.Footer>
          Sudah punya akun?{" "}
          <span>
            <Link to="/auth/login">
              Masuk
            </Link>
          </span>
        </Card.Footer>
      </Card>
    </main>
  );
}
