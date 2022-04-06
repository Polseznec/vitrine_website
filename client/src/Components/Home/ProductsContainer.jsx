import React from "react";
import axios from "axios";

//components
import ProductCard from "../Home/ProductCard";
import ProductModal from "./Product/ProductModal";

//styled
import { GridProductsContainer } from "../styles/Home/ProductsContainer.styled";
import {
  StyledProductsContainer,
  HeaderContainer,
  TitleSection,
  FilterContainer,
} from "../styles/Home/StyledProductsContainer";
import { theme } from "../styles/_Theme.styled";

//constant
import { PRODUCTS_TYPES } from "../CONSTANT";

//function
import { toCapitalize as TC } from "../fonctions";
import { VerticalLine } from "../styles/Assets.styled";

export const ProductsContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [productTarget, setProductTarget] = React.useState(null);

  console.log(productTarget);

  const hiddenModal = () => {
    setProductTarget(null);
  };

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

  // console.log(PRODUCTS_TYPES);

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
      <TitleSection>Mes créations</TitleSection>
      <HeaderContainer>
        <FilterContainer>
          <div>
            <VerticalLine color={theme.color.secondary} />
            <span style={{ color: theme.color.secondary }} width={"100%"}>
              {TC("tous les produits")}
            </span>
          </div>
          {PRODUCTS_TYPES.map((type, key) => {
            return <span key={key}>{TC(type)}</span>;
          })}
        </FilterContainer>
      </HeaderContainer>
      <GridProductsContainer>{cardMappping}</GridProductsContainer>
      {productTarget ? (
        <ProductModal _id={productTarget} onClose={hiddenModal} />
      ) : null}
    </StyledProductsContainer>
  );
};
