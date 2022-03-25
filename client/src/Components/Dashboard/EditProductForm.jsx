import React from "react";
import axios from "axios";

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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="" onSubmit={postEdit} id="edit-product-form">
        <input
          type="text"
          name="title"
          placeholder="Nom du produit"
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
          value={editTitle}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description du produit"
          onChange={(e) => {
            setEditDescription(e.target.value);
          }}
          value={editDescription}
        />
        <br />
        <input type="submit" value="Submit ! "></input>
      </form>
    </div>
  );
};
