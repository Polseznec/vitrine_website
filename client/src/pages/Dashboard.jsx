import React from "react";
import Log from "../Components/Log/Log.index";

import { UserIdContext } from "../Components/AppContext";

import * as C from "../Components/Containers/Containers.styles";

function Dashboard() {
  const UserId = React.useContext(UserIdContext);
  console.log(UserId);

  return (
    <C.FlexCenter>{UserId ? <div>Dashbord CRUD</div> : <Log />}</C.FlexCenter>
  );
}

export default Dashboard;
