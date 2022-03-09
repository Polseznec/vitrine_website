import React from "react";
import Log from "../components/Log";

import { UserIdContext } from "../components/AppContext";

import * as C from "../components/Containers/Containers.styles";

function Dashboard() {
  const UserId = React.useContext(UserIdContext);
  console.log(UserId);

  return (
    <C.FlexCenter>{UserId ? <div>Dashbord CRUD</div> : <Log />}</C.FlexCenter>
  );
}

export default Dashboard;
