import React from "react";
import axios from "axios";
import { Button } from "../../Inputs/Inputs.styles";

export const IndexNewProductForm = ({ className, backButton }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [picture, setPicture] = React.useState("");

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
    <div className={className}>
      <div>
        <span>Add a new product</span>
      </div>
      <div>
        <form action="" onSubmit={handelLogin} id="new-product-form">
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            name="Description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <input type="file" name="picture" />
          <br />
          <input type="submit" value="Submit ! "></input>
        </form>
      </div>
      <Button onClick={backButton} title={"Annuler"} />
    </div>
  );
};
