import React from "react";

//styled
import { StyledProductCard } from "../styles/Dashboard/StyledProductCard.style";
import { MediaRow, Column } from "../styles/Flexbox.styled";
import { Padding } from "../styles/Container.styled";

function ProductCard({ title, description, main_picture, id, onClick }) {
  return (
    <StyledProductCard onClick={onClick}>
      <MediaRow>
        <Padding padding={"10px"}>
          <Column>
            <span>{title}</span>
            <span>{description}</span>
          </Column>
        </Padding>

        <img src={main_picture} alt={title} />
      </MediaRow>
    </StyledProductCard>
  );
}

export default ProductCard;
