import { FiHome, FiLogIn, FiLogOut, FiMenu, FiTruck, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useToggle } from "../../hooks";
import Button from "../button";
import { GrContactInfo } from "react-icons/gr";
import { Menu } from "../../typings";
import createAuthService from "../../services/auth.service";

const menus: Menu[] = [
  {
    label: "Beranda",
    link: "/",
    icon: <FiHome />,
  },
  {
    label: "Cek Ongkir",
    link: "/cek-ongkir",
    icon: <FiTruck />,
  },
  {
    label: "Tentang Kami",
    link: "/tentang",
    icon: <GrContactInfo />,
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { value: isOpen, toggle } = useToggle();
  const authService = createAuthService();
  const loggedEmail = useAuth();

  const isMenuActive = (menu: string) => menu === pathname;

  return (
    <nav data-aos="fade-down">
      <button onClick={toggle} className="toggle-menu">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <ul className={isOpen ? "menu-open" : ""}>
        {menus.map((menu) => (
          <li
            key={menu.link}
            className={`menu-item ${isMenuActive(menu.link) ? "menu-active" : ""}`}
          >
            <Link to={menu.link} onClick={toggle}>
              {menu.icon}
              <p>{menu.label}</p>
            </Link>
          </li>
        ))}
        <li>
          {loggedEmail ? (
            <Button
              label="Keluar"
              onClick={() => authService.logout(navigate)}
              icon={<FiLogOut />}
            />
          ) : (
            <Button
              label="Masuk"
              onClick={() => navigate("/auth/login")}
              icon={<FiLogIn />}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}
