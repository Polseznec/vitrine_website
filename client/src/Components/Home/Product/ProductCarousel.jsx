import React from "react";
import { CircleButton } from "../../Buttons";
import {
  CarousellContainer,
  Displayer,
  Image,
  Selector,
  SelectorContainer,
} from "../../styles/Home/Product.styled";

function ProductCarousel({ product }) {
  const [current, setCurrent] = React.useState(0);

  const IMAGES = [
    product.main_picture,
    product.carrousel_one_picture,
    product.carrousel_two_picture,
  ];

  const imagesMapping = IMAGES.map((image, index) => {
    return (
      <Displayer key={index}>
        {current === index ? <Image src={image} alt={product.title} /> : null}
      </Displayer>
    );
  });

  const btnMapping = IMAGES.map((image, index) => {
    return (
      <CircleButton
        onClick={() => {
          setCurrent(index);
        }}
        size={"20px"}
        active={current === index ? true : false}
      />
    );
  });

  return (
    <CarousellContainer>
      {imagesMapping}
      <SelectorContainer>
        <Selector>{btnMapping}</Selector>
      </SelectorContainer>
    </CarousellContainer>
  );
}

export default ProductCarousel;
