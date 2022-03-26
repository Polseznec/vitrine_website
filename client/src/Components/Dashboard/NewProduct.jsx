import React from "react";
import axios from "axios";
import { Button } from "../Buttons";
import { TextInput, FileInput, SubmitInput } from "../Inputs";

//styled
import { NewProductContainer } from "../styles/Dashboard/NewProductContainer.styled";
import { Center } from "../styles/Flexbox.styled";
import { BlocTitle } from "../Texts";

export const NewProduct = ({ backButton }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  //const [picture, setPicture] = React.useState("");

  const handelLogin = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/product/new`,
      withCredentials: true,
      data: {
        title,
        description,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log("Post new product falde", res.data.errors);
        } else {
          window.location = "/dashboard";
          //   backButton();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NewProductContainer>
      <Center>
        <BlocTitle title={"Add a new product"} />
        <form action="" onSubmit={handelLogin} id="new-product-form">
          <TextInput
            name="Nom"
            placeholder="Nom"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <TextInput
            name="Description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <FileInput name="picture" />
          <br />
          <SubmitInput value="Submit !" />
          <Button onClick={backButton} title={"Annuler"} />
        </form>
      </Center>
    </NewProductContainer>
  );
};
