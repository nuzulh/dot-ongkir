import "./button.scss";
import { Spinner } from "../loading";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  icon?: JSX.Element;
  type?: "submit" | "button" | "reset";
};

export default function Button({
  label,
  onClick,
  isLoading = false,
  icon,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : icon ? icon : null}
      <p>{label}</p>
    </button>
  );
}
