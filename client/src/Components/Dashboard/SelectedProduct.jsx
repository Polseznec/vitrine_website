import React from "react";
import axios from "axios";

//components
import { EditProduct } from "./EditProduct";

export const SelectedProduct = ({ _id }) => {
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
          <EditProduct
            title={product.title}
            description={product.description}
            _id={product._id}
            main_picture={product.main_picture}
          />
        </div>
      ) : (
        <span>Select Product</span>
      )}
    </div>
  );
};
