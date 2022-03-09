import React from "react";
import axios from "axios";

import * as C from "../Containers/Containers.styles";

function LogInForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handelLogin = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log("Connection false", res.data.errors);
        } else {
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <C.Column>
      <span>Ce connecter</span>
      <form action="" onSubmit={handelLogin} id="log-in-form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input type="submit" value="Se connecter"></input>
      </form>
    </C.Column>
  );
}

export default LogInForm;
