import React from "react";
import Log from "../Components/Log/Log.index";

import { UserIdContext } from "../Components/AppContext";
import { CardDisplayer } from "../Components/Blocks/CardDisplayer/CardDisplayer.style";

import * as C from "../Components/Containers/Containers.styles";

function Dashboard() {
  const UserId = React.useContext(UserIdContext);
  return (
    <C.Container fullScreen={toString()}>
      {UserId ? (
        <C.Container center={toString()} style={{ width: styles.size.size100 }}>
          <C.Container center={toString()} fullScreen={toString()}>
            <CardDisplayer title={"Dashboard"} />
          </C.Container>
        </C.Container>
      ) : (
        <Log />
      )}
    </C.Container>
  );
}

export default Dashboard;

const styles = { size: { size100: "100%", size50: "50%", size25: "25%" } };
