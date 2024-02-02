import { Content } from "../../typings";
import { MainContainer, SectionContainer } from "./widgets/containers";
import WelcomeVisual from "./widgets/welcome";
import "./home.scss";
import Button from "../../components/button";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Home({
  content,
}: {
  content: Content;
}) {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <SectionContainer>
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <p>{content.description}</p>
        <Button
          label="Cek ongkir sekarang"
          icon={<FiArrowUpRight />}
          onClick={() => navigate("/cek-ongkir")}
        />
      </SectionContainer>
      <SectionContainer>
        <WelcomeVisual />
      </SectionContainer>
    </MainContainer>
  );
}
