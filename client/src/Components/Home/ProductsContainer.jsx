import React from "react";
import axios from "axios";

//components
import ProductCard from "../Home/ProductCard";
import ProductModal from "./Product/ProductModal";
import { TextButton } from "../Buttons";
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

  const [filter, setFilter] = React.useState("all");

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

  let toFilterProduct = (products, filter) => {
    if (filter === "all") {
      let result = products;
      return result;
    } else {
      let result = products.filter((product) => product.type === filter);
      return result;
    }
  };

  const cardMappping = toFilterProduct(products, filter).map(
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
          <TextButton
            text={TC("tous les produits")}
            color={filter === "all" ? theme.color.secondary : theme.color.black}
            onClick={() => {
              setFilter("all");
            }}
            selecte={filter === "all" ? true : false}
          />
          {PRODUCTS_TYPES.map((type, key) => {
            return (
              <TextButton
                key={key}
                text={TC(type)}
                onClick={() => {
                  setFilter(type);
                }}
                selecte={filter === type ? true : false}
                color={
                  filter === type ? theme.color.secondary : theme.color.black
                }
              />
            );
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
