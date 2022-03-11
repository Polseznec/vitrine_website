import React from "react";
import axios from "axios";

import { EditCardDisplayer } from "../EditCardDisplayer/EditCardDisplayer.style.js";

export const IndexEditCard = ({ _id }) => {
  const [product, setProduct] = React.useState("");

  React.useEffect(() => {
    const fetshProduct = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/product/${_id}`,
        withCredentials: true,
      })
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetshProduct();
  }, [_id]);

  return (
    <div>
      {_id ? (
        <div>
          <EditCardDisplayer
            title={product.title}
            description={product.description}
            _id={product._id}
          />
        </div>
      ) : (
        <span>Select Product</span>
      )}
    </div>
  );
};
