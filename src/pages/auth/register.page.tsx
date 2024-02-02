import { Register } from "../../modules/auth";
import createAuthService from "../../services/auth.service";

export default function RegisterPage() {
  const authService = createAuthService();

  return <Register authService={authService} />;
}
