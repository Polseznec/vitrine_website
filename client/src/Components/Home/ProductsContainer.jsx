import React from "react";
import axios from "axios";

//components
import ProductCard from "../Home/ProductCard";

//styled
import { GridProductsContainer } from "../styles/Home/ProductsContainer.styled";
import {
  StyledProductsContainer,
  HeaderContainer,
  TitleSection,
} from "../styles/Home/StyledProductsContainer";

export const ProductsContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [productTarget, setProductTarget] = React.useState("");

  console.log(productTarget);

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/product`,
      withCredentials: true,
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardMappping = products.map(
    ({ title, price, main_picture, _id, ...props }, key) => {
      const handleProduct = () => {
        setProductTarget(_id);
      };

      return (
        <ProductCard
          title={title}
          main_picture={main_picture}
          id={_id}
          key={key}
          price={price}
          onClick={handleProduct}
          {...props}
        />
      );
    }
  );

  return (
    <StyledProductsContainer>
      <HeaderContainer>
        <TitleSection>Articles</TitleSection>
      </HeaderContainer>
      <GridProductsContainer>{cardMappping}</GridProductsContainer>
    </StyledProductsContainer>
  );
};
