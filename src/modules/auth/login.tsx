import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/card";
import LoginForm from "./widgets/login-form";
import { AuthProps } from ".";
import { toast } from "sonner";

export default function Login({ authService }: AuthProps) {
  const navigate = useNavigate();

  const onSubmit = async (val: any) => {
    const result = await authService.login(val);
    if (result.error) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message, {
      description: "Anda akan diarahkan menuju menu cek ongkir.",
    });
    navigate("/cek-ongkir");
  };

  return (
    <main data-aos="fade-right">
      <Card>
        <Card.Title>Masuk</Card.Title>
        <Card.Subtitle>Silahkan masuk menggunakan kredensial Anda.</Card.Subtitle>
        <Card.Content>
          <LoginForm onSubmit={onSubmit} />
        </Card.Content>
        <Card.Footer>
          Belum punya akun?{" "}
          <span>
            <Link to="/auth/register">
              Daftar
            </Link>
          </span>
        </Card.Footer>
      </Card>
    </main>
  );
}
