import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../Components/AppContext";

import { ClientCardDisplayer } from "../Components/Blocks/ClientCardDisplayer/ClientCardDisplayer.style";
import { Button } from "../Components/Inputs/Inputs.styles";

function Home() {
  const UserId = React.useContext(UserIdContext);

  let navigate = useNavigate();

  const handleDashboard = () => {
    navigate("dashboard");
  };

  return (
    <div style={style.main_container}>
      <div>head</div>
      <ClientCardDisplayer />
      {UserId ? (
        <Button
          onClick={handleDashboard}
          style={style.btn_dashboard}
          title={"Dashboard"}
        />
      ) : null}
      <footer>footer</footer>
    </div>
  );
}

export default Home;

const style = {
  main_container: {
    width: "100vw",
    height: "100vh",
  },
  btn_dashboard: {
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: 10,
  },
  footer: { bottom: "0" },
};
