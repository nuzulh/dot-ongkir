import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import Ongkir from "../modules/ongkir";
import { CONTENTS } from "../helpers/consts";

export default function OngkirPage() {
  const loggedEmail = useAuth();

  if (!loggedEmail) return <Navigate to="/auth" />;

  const content = CONTENTS.CEK_ONGKIR;

  return <Ongkir content={content} />;
}
