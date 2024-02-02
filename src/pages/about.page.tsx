import { CONTENTS } from "../helpers/consts";
import About from "../modules/about";

export default function AboutPage() {
  const content = CONTENTS.TENTANG_KAMI;

  return <About content={content} />;
}
