import React from "react";
import axios from "axios";

import { EmailInput, PasswordInput, SubmitInput } from "../Inputs.jsx";
import { BlocTitle } from "../Texts";

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
    <div>
      <BlocTitle title={"Ce connecter"} />
      <form action="" onSubmit={handelLogin} id="log-in-form">
        <label htmlFor="email">Email</label>
        <EmailInput
          name="Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password">Mot de passe</label>
        <PasswordInput
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <SubmitInput value="Se connecter" />
      </form>
    </div>
  );
}

export default LogInForm;
