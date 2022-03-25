import React from "react";
import Log from "../Components/Log/Log.index";

import { UserIdContext } from "../Components/AppContext";
import { MainContainer } from "../Components/Dashboard/MainContainer";

function Dashboard() {
  const UserId = React.useContext(UserIdContext);

  return <div>{UserId ? <MainContainer /> : <Log />}</div>;
}

export default Dashboard;
