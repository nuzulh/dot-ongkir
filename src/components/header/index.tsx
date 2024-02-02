import Navbar from "./navbar";
import "./header.scss";

export function AppLogo() {
  return (
    <h3 className="app-logo" data-aos="zoom-out">
      DOT Ongkir
    </h3>
  );
}

export default function Header() {
  return (
    <header>
      <AppLogo />
      <Navbar />
    </header>
  );
}
