import { CONTENTS } from "../helpers/consts";
import Home from "../modules/home";

export default function HomePage() {
  const content = CONTENTS.HOME;

  return <Home content={content} />;
}
