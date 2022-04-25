import React from "react";
import axios from "axios";

import { Form, TextInput, EmailInput, SubmitInput } from "../Inputs";
import { Button } from "../Buttons";

export const MailForm = ({ product, closeModal }) => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handelMail = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/mail/send`,
      withCredentials: true,
      data: { firstname, lastname, email, message, product },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log("Connection false", res.data.errors);
        } else return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form action={""} onSubmit={handelMail} id={"post-mail-form"}>
      <TextInput
        label={"Nom"}
        name="firstname"
        placeholder="Nom"
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <TextInput
        label={"Prénon"}
        name="lastname"
        placeholder="Prénon"
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        br
      />
      <EmailInput
        label={"Votre Email"}
        name="email"
        placeholder="Votre Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        br
      />
      <TextInput
        label={"Votre message "}
        name="message"
        placeholder="Votre message ..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        br
      />
      <SubmitInput value="envoyé" />
      <Button onClick={closeModal} title={"annuler"} color={"black"} />
    </Form>
  );
};
