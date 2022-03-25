import React from "react";
import axios from "axios";
import ProductCard from "../Dashboard/ProductCard";

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

  return <div>{cardMappping}</div>;
};
