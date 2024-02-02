import { Login } from "../../modules/auth";
import createAuthService from "../../services/auth.service";

export default function LoginPage() {
  const authService = createAuthService();

  return <Login authService={authService} />;
}
