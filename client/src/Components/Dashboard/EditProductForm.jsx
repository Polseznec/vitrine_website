import React from "react";
import axios from "axios";

//components
import { TextInput, NumberInput, SubmitInput, CheckboxeInput } from "../Inputs";

//styled
import { EditProductFormContainer } from "../styles/Dashboard/EditProductFormContainer.styled";

export const EditProductForm = ({
  title,
  price,
  description_part_one,
  description_part_two,
  width,
  height,
  depth,
  type,
  fabric_description,
  available,
  main_picture,
  pattern_picture,
  carrousel_one_picture,
  carrousel_two_picture,
  mood,
  _id,
}) => {
  const [editTitle, setEditTitle] = React.useState(title);
  const [editPrice, setEditPrice] = React.useState(price);
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
  const [editMood, setEditMood] = React.useState(mood);
  //photos
  const [editMain, setEditMain] = React.useState(main_picture);
  const [editPattern, setEditPattern] = React.useState(pattern_picture);
  const [editCarrouselOne, setEditCarrouselOne] = React.useState(
    carrousel_one_picture
  );
  const [editCarrouselTwo, setEditCarrouslTwo] = React.useState(
    carrousel_two_picture
  );

  const postEdit = (e) => {
    e.preventDefault();
    const data = {
      title: editTitle,
      price: editPrice,
      description_part_one: editDescriptionPartOne,
      description_part_two: editDescriptionPartTwo,
      height: editHeight,
      width: editWidth,
      depth: editDepth,
      type: editType,
      fabric_description: editFabricDescription,
      available: editAvailable,
      mood: editMood,

      main_picture: editMain,
      pattern_picture: editPattern,
      carrousel_one_picture: editCarrouselOne,
      carrousel_two_picture: editCarrouselTwo,
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
          label={"Nom du produit"}
          name="title"
          placeholder="Nom du produit"
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
          value={editTitle}
        />
        <br />
        <TextInput
          label="Prix"
          name="price"
          placeholder="Prix"
          onChange={(e) => {
            setEditPrice(e.target.value);
          }}
          value={editPrice}
        />
        <br />
        <TextInput
          label={"Description du produit (partie 1)"}
          name="description_part_one"
          placeholder="Description du produit part 1"
          onChange={(e) => {
            setEditDescriptionPartOne(e.target.value);
          }}
          value={editDescriptionPartOne}
        />
        <br />
        <TextInput
          label={"Description du produit (partie 2)"}
          name="description_part_two"
          placeholder="Description du produit part 2"
          onChange={(e) => {
            setEditDescriptionPartTwo(e.target.value);
          }}
          value={editDescriptionPartTwo}
        />
        <br />
        <NumberInput
          label={"Largeur"}
          name="width"
          placeholder="Largeur"
          onChange={(e) => {
            setEditWidth(e.target.value);
          }}
          value={editWidth}
          unit={"cm"}
        />
        <br />
        <NumberInput
          label={"Hauteur"}
          name="height"
          placeholder="Hauteur"
          onChange={(e) => {
            setEditHeight(e.target.value);
          }}
          value={editHeight}
          unit={"cm"}
        />
        <br />
        <NumberInput
          label={"Profondeur"}
          name="depth"
          placeholder="Pronfondeur"
          onChange={(e) => {
            setEditDepth(e.target.value);
          }}
          value={editDepth}
          unit={"cm"}
        />
        <br />
        <select
          value={editType}
          onChange={(e) => {
            setEditType(e.target.value);
          }}
        >
          <option value="sac de ville">Sac de ville</option>
          <option value="sac de shopping">Sac de shopping</option>
          <option value="tote bag">Tote bag</option>
          <option value="pochette">Pochette</option>
          <option value="trousse">Trousse</option>
          <option value="accessoire">Accessoire</option>
        </select>
        <br />
        <TextInput
          label={"Tissu utilisé"}
          name="fabric_description"
          placeholder="Type ded tissu"
          onChange={(e) => {
            setEditFabricDescription(e.target.value);
          }}
          value={editFabricDescription}
        />
        <br />
        <CheckboxeInput
          label={"Disponible :"}
          name={"available"}
          onChange={() => {
            setEditAvailable(!available);
          }}
          checked={editAvailable}
        />
        <br />
        <div>
          <span>Photos</span>
          <br />
          <TextInput
            name={"main_picture"}
            placeholder="Photo Principale"
            value={editMain}
            onChange={(e) => {
              setEditMain(e.target.value);
            }}
          />
          <TextInput
            name={"pattern_picture"}
            placeholder="Photo du tissu"
            value={editPattern}
            onChange={(e) => {
              setEditPattern(e.target.value);
            }}
          />
          <TextInput
            name={"carrousel_one_picture"}
            placeholder="Photo secondaire 1"
            value={editCarrouselOne}
            onChange={(e) => {
              setEditCarrouselOne(e.target.value);
            }}
          />
          <TextInput
            name={"carrousel_two_picture"}
            placeholder="Photo secondaire 2"
            value={editCarrouselTwo}
            onChange={(e) => {
              setEditCarrouslTwo(e.target.value);
            }}
          />
        </div>
        <select
          value={editMood}
          onChange={(e) => {
            setEditMood(e.target.value);
          }}
        >
          <option value="rien">rien</option>
          <option value="été">été</option>
          <option value="autonne">autonne</option>
          <option value="hiver">hiver</option>
          <option value="printemps">printemps</option>
        </select>
        <br />
        <SubmitInput type="submit" value="Submit !" />
      </form>
    </EditProductFormContainer>
  );
};
