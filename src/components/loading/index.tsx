import { FiLoader } from "react-icons/fi";
import "./loading.scss";

export function Spinner() {
  return (
    <FiLoader className="spinner" />
  );
}

export function Loading() {
  return (
    <div className="loading-container">
      <Spinner />
    </div>
  );
}
