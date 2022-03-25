import React from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import { SelectedProduct } from "./SelectedProduct";
import { Button } from "../Buttons";
import { NewProduct } from "./NewProduct";

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
    <div {...props}>
      <h1
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
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
      <div>
        <div
          style={{
            backgroundColor: "red",
            width: "50%",
            flexDirection: "column",
            overflow: "scroll",

            height: "80vh",
          }}
        >
          {mappingProducts}
        </div>
        <div style={{ backgroundColor: "blue", width: "50%" }}>
          <SelectedProduct _id={productTarget} />
        </div>
      </div>
      {children}
    </div>
  );
};
