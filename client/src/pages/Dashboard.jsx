import React from "react";
import Log from "../Components/Log/Log.index";

import { UserIdContext } from "../Components/AppContext";
import { MainContainer } from "../Components/Dashboard/MainContainer";

//styled

import { FullScreenContainer } from "../Components/styles/Container.styled";

function Dashboard() {
  const UserId = React.useContext(UserIdContext);

  return (
    <FullScreenContainer>
      {UserId ? <MainContainer /> : <Log />}
    </FullScreenContainer>
  );
}

export default Dashboard;
