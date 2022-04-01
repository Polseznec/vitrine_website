import React from "react";
import axios from "axios";

//components
import { EditProduct } from "./EditProduct";

export const SelectedProduct = ({ _id }) => {
  const [product, setProduct] = React.useState("");
  console.log(product);

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
            price={product.price}
            description_part_one={product.description_part_one}
            description_part_two={product.description_part_two}
            width={product.width}
            height={product.height}
            depth={product.depth}
            type={product.type}
            mood={product.mood}
            fabric_description={product.fabric_description}
            available={product.available}
            _id={product._id}
            main_picture={product.main_picture}
            pattern_picture={product.pattern_picture}
            carrousel_one_picture={product.carrousel_one_picture}
            carrousel_two_picture={product.carrousel_two_picture}
          />
        </div>
      ) : (
        <span>Select Product</span>
      )}
    </div>
  );
};
