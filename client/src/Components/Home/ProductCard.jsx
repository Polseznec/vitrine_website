import React from "react";

//styled
import {
  Card,
  Img,
  InfoContainer,
} from "../styles/Home/ProductsContainer.styled";

//assets
import { HorizontalLine } from "../styles/Assets.styled";

export default function ProductCard({
  title,
  price,
  description_part_one,
  carrousel_two_picture,
  main_picture,
  available,
  id,
  onClick,
  ...props
}) {
  return (
    <Card onClick={onClick}>
      <Img src={main_picture} alt={"photo de " + title} />
      <InfoContainer>
        <span>{title}</span>
        {available ? <span>{price}€</span> : <span>Plus disponible 😢</span>}
      </InfoContainer>
      <HorizontalLine />
    </Card>
  );
}
