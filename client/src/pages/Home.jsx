import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../Components/AppContext";

import { ProductsContainer } from "../Components/Home/ProductsContainer";
import { Button } from "../Components/Buttons";

//styled
import { FullScreenContainer } from "../Components/styles/Container.styled";

function Home() {
  const UserId = React.useContext(UserIdContext);

  let navigate = useNavigate();

  const handleDashboard = () => {
    navigate("dashboard");
  };

  return (
    <FullScreenContainer>
      <h1>header</h1>
      <ProductsContainer />
      {UserId ? (
        <Button
          onClick={handleDashboard}
          style={style.btn_dashboard}
          title={"Dashboard"}
          bg={"white"}
        />
      ) : null}
      <h1>footer</h1>
    </FullScreenContainer>
  );
}

export default Home;

const style = {
  btn_dashboard: {
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: 10,
  },
  footer: { bottom: "0" },
};
