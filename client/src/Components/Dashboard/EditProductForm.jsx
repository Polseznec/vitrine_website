import React from "react";
import axios from "axios";

import { TextInput, SubmitInput } from "../Inputs";

//styled
import { EditProductFormContainer } from "../styles/Dashboard/EditProductFormContainer.styled";

export const EditProductForm = ({ title, description, _id }) => {
  const [editTitle, setEditTitle] = React.useState(title);
  const [editDescription, setEditDescription] = React.useState(description);

  const postEdit = (e) => {
    e.preventDefault();

    const data = { title: editTitle, description: editDescription };

    axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/product/${_id}`,
      withCredentials: true,
      data: data,
    })
      .then((res) => {
        if (res.data.errors) {
          console.log("Put from EditCardForm false", res.data.errors);
        } else {
          console.log(res);
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EditProductFormContainer>
      <form action="" onSubmit={postEdit} id="edit-product-form">
        <TextInput
          name="title"
          placeholder="Nom du produit"
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
          value={editTitle}
        />
        <br />
        <TextInput
          name="description"
          placeholder="Description du produit"
          onChange={(e) => {
            setEditDescription(e.target.value);
          }}
          value={editDescription}
        />
        <br />
        <SubmitInput type="submit" value="Submit !" />
      </form>
    </EditProductFormContainer>
  );
};
