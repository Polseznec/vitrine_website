import React from "react";
import axios from "axios";

//components
import ProductCard from "./ProductCard";
import { SelectedProduct } from "./SelectedProduct";
import { Button } from "../Buttons";
import { NewProduct } from "./NewProduct";

//styled
import { StyleDashboardContainer } from "../styles/Dashboard/DashboardContainer.style";
import { StyledProductsListContainer } from "../styles/Dashboard/StyledProductsList.styled";
import { StyledSelectedProductContainer } from "../styles/Dashboard/StyledSelectedProductContainer.styled";
import { MediaRow } from "../styles/Flexbox.styled";

export const MainContainer = ({ children, ...props }) => {
  const [products, setProducts] = React.useState([]);
  const [productTarget, setProductTarget] = React.useState("");
  const [handleNewProduct, setHandleNewProduct] = React.useState(false);

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

  const mappingProducts = products.map(
    ({ title, description, main_picture, _id }, key) => {
      const handleProduct = () => {
        setProductTarget(_id);
      };
      return (
        <ProductCard
          title={title}
          description={description}
          main_picture={main_picture}
          id={_id}
          key={key}
          onClick={handleProduct}
        />
      );
    }
  );
  const toHandleNewProduct = () => {
    setHandleNewProduct(!handleNewProduct);
  };

  return (
    <StyleDashboardContainer {...props}>
      <h1
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Dashboard
      </h1>
      <Button title={"New Item"} onClick={toHandleNewProduct} />
      {handleNewProduct ? (
        <NewProduct
          backButton={() => {
            setHandleNewProduct(false);
          }}
        />
      ) : null}

      <MediaRow>
        <StyledProductsListContainer>
          {mappingProducts}
        </StyledProductsListContainer>

        <StyledSelectedProductContainer>
          <SelectedProduct _id={productTarget} />
        </StyledSelectedProductContainer>
      </MediaRow>
      {children}
    </StyleDashboardContainer>
  );
};
