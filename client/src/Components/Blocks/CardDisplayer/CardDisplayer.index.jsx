import React from "react";
import axios from "axios";

import * as C from "../../Containers/Containers.styles";
import { HorizontalCard } from "../HorizontalCard/HorizontalCard.style";
import { EditCard } from "../EditCard/EditCard.style";

export const IndexCardDisplayer = ({
  className,
  title,
  children,
  ...props
}) => {
  const [products, setProducts] = React.useState([]);
  const [productTarget, setProductTarget] = React.useState(null);

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

  const mappingProducts = products.map(({ title, description, _id }, key) => {
    const handleProduct = () => {
      setProductTarget(_id);
    };
    return (
      <HorizontalCard
        title={title}
        description={description}
        id={_id}
        key={key}
        onClick={handleProduct}
      />
    );
  });

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
