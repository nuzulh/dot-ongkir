import { Content } from "../../typings";
import "./about.scss";
import { MainContainer } from "./widgets/containers";

export default function About({
  content,
}: {
  content: Content;
}) {
  return (
    <MainContainer>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <p>{content.description}</p>
    </MainContainer>
  );
}
