import { Outlet } from "react-router-dom";
import Header from "../header";
import "./layout.scss";
import AuthImg from "../../assets/auth.svg";

export function IndexLayout() {
  return (
    <>
      <Header />
      <div className="layout-index">
        <Outlet />
      </div>
    </>
  );
}

export function AuthLayout() {
  return (
    <div className="layout-auth">
      <img src={AuthImg} alt="auth" data-aos="zoom-in" />
      <div className="form-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
