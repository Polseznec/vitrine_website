import React from "react";
import axios from "axios";

export const IndexEditCard = ({ _id }) => {
  const [product, setProduct] = React.useState(_id);
  console.log(product);

  React.useEffect(() => {
    const fetshProduct = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/product/${_id}`,
        withCredentials: true,
      })
        .then((res) => {
          // console.log("data", res);
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetshProduct();
  }, [_id]);

  console.log("___");
  console.log("selected : ", product);

  return (
    <div>
      {/* {_id ? (
        <div>
          <span>{product.title}</span>
          <span>{product.description}</span>
        </div>
      ) : (
        <span>Select Product</span>
      )} */}
    </div>
  );
};
