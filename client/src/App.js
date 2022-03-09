import React from "react";
import Routes from "./components/Routes";

import { UserIdContext } from "./components/AppContext";
import axios from "axios";

import { GlobalStyles } from "./styles/GlobalStyles.style";
import * as C from "./components/Containers/Containers.styles";

function App() {
  const [userId, setUserId] = React.useState(null);
  //console.log(userId, "Token From App comp");

  React.useEffect(() => {
    const fechToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUserId(res.data);
        })
        .catch((err) => {
          console.log("No Token");
        });
    };
    fechToken();
  }, [userId]);

  return (
    <UserIdContext.Provider value={userId}>
      <C.App className="App">
        <GlobalStyles />
        <Routes />
      </C.App>
    </UserIdContext.Provider>
  );
}

export default App;
