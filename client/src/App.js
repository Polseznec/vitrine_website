import React from "react";
import Routes from "./Components/Routes/Routes.index";
import axios from "axios";

import { UserIdContext } from "./Components/AppContext";

import { ThemeProvider } from "styled-components";
import { theme } from "./Components/styles/_Theme.styled";
import { GlobalStyles } from "./Components/styles/_GlobalStyles.styled";

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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </UserIdContext.Provider>
  );
}

export default App;
