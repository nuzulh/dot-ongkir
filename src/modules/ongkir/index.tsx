import "./ongkir.scss";
import { useEffect } from "react";
import { Content } from "../../typings";
import { MainContainer } from "./widgets/containers";

export default function Ongkir({
  content,
}: {
  content: Content;
}) {
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/province`,
      {
        headers: {
          authorization: import.meta.env.VITE_API_KEY,
        },
      },
    ).then(async (res) => {
      const result = await res.json();
      console.log(result);
    });
  }, []);

  return (
    <MainContainer>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
    </MainContainer>
  );
}
