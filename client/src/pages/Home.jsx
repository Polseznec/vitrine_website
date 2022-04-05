import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../Components/AppContext";

//components
import { ProductsContainer } from "../Components/Home/ProductsContainer";
import HeaderContainer from "../Components/Home/HeaderContainer";
import FooterContainer from "../Components/Home/FooterContainer";
import { Button } from "../Components/Buttons";
import Marquee from "../Components/Home/Marquee";

//styled
import { FullScreenContainer } from "../Components/styles/Container.styled";

function Home() {
  const UserId = React.useContext(UserIdContext);

  let navigate = useNavigate();

  const AdminBtn = () => {
    const style = {
      btn_dashboard: {
        position: "fixed",
        right: 0,
        bottom: 0,
        margin: 10,
      },
      footer: { bottom: "0" },
    };
    return (
      <Button
        onClick={handleDashboard}
        style={style.btn_dashboard}
        title={"Dashboard"}
        bg={"#fff"}
      />
    );
  };

  const handleDashboard = () => {
    navigate("dashboard");
  };

  return (
    <FullScreenContainer>
      <HeaderContainer />
      <Marquee />
      <ProductsContainer />
      <FooterContainer />
      {UserId ? <AdminBtn /> : null}
    </FullScreenContainer>
  );
}

export default Home;
