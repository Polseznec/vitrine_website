import React from "react";
import axios from "axios";

import * as C from "../../Containers/Containers.styles";
import { HorizontalCard } from "../HorizontalCard/HorizontalCard.style";
import { EditCard } from "../EditCard/EditCard.style";
import { Button } from "../../Inputs/Inputs.styles";
import { NewProductForm } from "../NewProductForm/NewProductForm.style";

export const IndexCardDisplayer = ({
  className,
  title,
  children,
  ...props
}) => {
  const [products, setProducts] = React.useState([]);
  const [productTarget, setProductTarget] = React.useState("");
  const [handleNewProduct, setHandleNewProduct] = React.useState(false);

  //   console.log("targeted produit", productTarget);
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
        <HorizontalCard
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
    <div className={className} {...props}>
      <h1
        style={{
          backgroundColor: "red",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </h1>
      <br />
      <Button title={"New Item"} onClick={toHandleNewProduct} />
      {handleNewProduct ? (
        <NewProductForm
          backButton={() => {
            setHandleNewProduct(false);
          }}
        />
      ) : null}
      <C.Container>
        <C.Container
          column={toString()}
          style={{ backgroundColor: "red", width: "50%" }}
        >
          {mappingProducts}
        </C.Container>
        <C.Container
          center={toString()}
          style={{ backgroundColor: "blue", width: "50%" }}
        >
          <EditCard _id={productTarget} />
        </C.Container>
      </C.Container>
      {children}
    </div>
  );
};
