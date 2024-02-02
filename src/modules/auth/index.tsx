
import { AuthService } from "../../services/auth.service";
import Login from "./login";
import Register from "./register";
import "./auth.scss";

export type AuthProps = {
  authService: AuthService;
};

export { Login, Register };
