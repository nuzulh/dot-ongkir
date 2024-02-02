import { NavigateFunction } from "react-router-dom";
import { AuthApiResponse } from "../typings";

export type AuthService = {
  login: (
    data: {
      email: string;
      password: string;
    },
  ) => Promise<AuthApiResponse>;
  register: (
    data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
  ) => Promise<AuthApiResponse>;
  logout: (navigate: NavigateFunction) => void;
};

export default function createAuthService(): AuthService {
  return {
    async login(data) {
      const result: AuthApiResponse = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            error: false,
            message: "Masuk berhasil!",
            data: {
              name: data.email.split("@")[0],
              email: data.email,
            },
          });
        }, 1500);
      });

      localStorage.setItem("dummy_user", data.email);

      return result;
    },

    async register(data) {
      const result: AuthApiResponse = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            error: false,
            message: "Daftar berhasil!",
            data: {
              name: data.name,
              email: data.email,
            },
          });
        }, 1500);
      });

      return result;
    },

    logout(navigate) {
      localStorage.removeItem("dummy_user");
      navigate("/");
    },
  };
}
