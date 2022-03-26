import React from "react";
import axios from "axios";

//components
import { TextInput, NumberInput, SubmitInput } from "../Inputs";

//styled
import { EditProductFormContainer } from "../styles/Dashboard/EditProductFormContainer.styled";

export const EditProductForm = ({
  title,
  description_part_one,
  description_part_two,
  width,
  height,
  depth,
  type,
  fabric_description,
  available,
  main_picture,
  _id,
}) => {
  const [editTitle, setEditTitle] = React.useState(title);
  const [editDescriptionPartOne, setEditDescriptionPartOne] =
    React.useState(description_part_one);
  const [editDescriptionPartTwo, setEditDescriptionPartTwo] =
    React.useState(description_part_two);
  const [editWidth, setEditWidth] = React.useState(width);
  const [editHeight, setEditHeight] = React.useState(height);
  const [editDepth, setEditDepth] = React.useState(depth);
  const [editType, setEditType] = React.useState(type);
  const [editFabricDescription, setEditFabricDescription] =
    React.useState(fabric_description);
  const [editAvailable, setEditAvailable] = React.useState(available);

  const postEdit = (e) => {
    e.preventDefault();

    const data = {
      title: editTitle,
      description_part_one: editDescriptionPartOne,
      description_part_two: editDescriptionPartTwo,
      height: editHeight,
      width: editWidth,
      depth: editDepth,
      type: editType,
      fabric_description: editFabricDescription,
      available: editAvailable,
    };

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
          name="description_part_one"
          placeholder="Description du produit part 1"
          onChange={(e) => {
            setEditDescriptionPartOne(e.target.value);
          }}
          value={editDescriptionPartOne}
        />
        <br />
        <TextInput
          name="description_part_two"
          placeholder="Description du produit part 2"
          onChange={(e) => {
            setEditDescriptionPartTwo(e.target.value);
          }}
          value={editDescriptionPartTwo}
        />
        <br />
        <NumberInput
          name="width"
          placeholder="Largeur"
          onChange={(e) => {
            setEditWidth(e.target.value);
          }}
          value={editWidth}
        />
        <br />
        <NumberInput
          name="height"
          placeholder="Hauteur"
          onChange={(e) => {
            setEditHeight(e.target.value);
          }}
          value={editHeight}
        />
        <br />
        <NumberInput
          name="depth"
          placeholder="Pronfondeur"
          onChange={(e) => {
            setEditDepth(e.target.value);
          }}
          value={editDepth}
        />
        <br />
        <TextInput
          name="type"
          placeholder="Type de produit"
          onChange={(e) => {
            setEditType(e.target.value);
          }}
          value={editType}
        />
        <br />
        <TextInput
          name="fabric_description"
          placeholder="Type ded tissu"
          onChange={(e) => {
            setEditFabricDescription(e.target.value);
          }}
          value={editFabricDescription}
        />
        <br />
        <label>Disponible </label>
        <input type="checkbox" id="scales" name="scales" />
        <br />
        <SubmitInput type="submit" value="Submit !" />
      </form>
    </EditProductFormContainer>
  );
};
