import React from "react";
import axios from "axios";
import { Button } from "../Buttons";
import { TextInput, NumberInput, SubmitInput } from "../Inputs";

//styled
import { NewProductContainer } from "../styles/Dashboard/NewProductContainer.styled";
import { Center } from "../styles/Flexbox.styled";
import { BlocTitle } from "../Texts";

export const NewProduct = ({ backButton }) => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [descriptionPartOne, setDescriptionPartOne] = React.useState("");
  const [descriptionPartTwo, setDescriptionPartTwo] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [depth, setDepth] = React.useState("");
  const [type, setType] = React.useState("");
  const [mood, setMood] = React.useState("");
  const [fabricDescription, setFabricDescription] = React.useState("");
  //photos
  const [mainPhoto, setMainPhoto] = React.useState("");
  const [patternPhoto, setPatternPhoto] = React.useState("");
  const [carrouselOnePhoto, setCarrouselOnePhoto] = React.useState("");
  const [carrouselTwoPhoto, setCarrouselTwoPhoto] = React.useState("");

  const handelLogin = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      price: price,
      description_part_one: descriptionPartOne,
      description_part_two: descriptionPartTwo,
      height: height,
      width: width,
      depth: depth,
      type: type,
      mood: mood,
      fabric_description: fabricDescription,

      main_picture: mainPhoto,
      pattern_picture: patternPhoto,
      carrousel_one_picture: carrouselOnePhoto,
      carrousel_two_picture: carrouselTwoPhoto,
    };
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/product/new`,
      withCredentials: true,
      data: data,
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
          <NumberInput
            name="Prix"
            placeholder="Prix"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <TextInput
            name="DescriptionPartOne"
            placeholder="DescriptionPartOne"
            onChange={(e) => {
              setDescriptionPartOne(e.target.value);
            }}
          />
          <br />
          <TextInput
            name="DescriptionPartTwo"
            placeholder="DescriptionPartTwo"
            onChange={(e) => {
              setDescriptionPartTwo(e.target.value);
            }}
          />
          <br />
          <NumberInput
            name="height"
            placeholder="height"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <br />
          <NumberInput
            name="width"
            placeholder="width"
            onChange={(e) => {
              setWidth(e.target.value);
            }}
          />
          <br />
          <NumberInput
            name="depth"
            placeholder="depth"
            onChange={(e) => {
              setDepth(e.target.value);
            }}
          />
          <br />
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Sac de ville">Sac de ville</option>
            <option value="Sac de shopping">Sac de shopping</option>
            <option value="Tote bag">Tote bag</option>
            <option value="Pochette">Pochette</option>
            <option value="Trousse">Trousse</option>
            <option value="Accessoire">Accessoire</option>
          </select>
          <br />
          <select
            name="mood"
            onChange={(e) => {
              setMood(e.target.value);
            }}
          >
            <option value="rien">rien</option>
            <option value="été">été</option>
            <option value="autonne">autonne</option>
            <option value="hiver">hiver</option>
            <option value="printemps">printemps</option>
          </select>
          <br />
          <TextInput
            name="fabricdescription"
            placeholder="fabricdescription"
            onChange={(e) => {
              setFabricDescription(e.target.value);
            }}
          />
          <br />
          <span>Photos</span>
          <TextInput
            name="main_picture"
            placeholder="Photo Principale"
            onChange={(e) => {
              setMainPhoto(e.target.value);
            }}
          />
          <TextInput
            name="pattern_picture"
            placeholder="Photo du tissu"
            onChange={(e) => {
              setPatternPhoto(e.target.value);
            }}
          />
          <TextInput
            name="carrousel_one_picture"
            placeholder="Photo secondaire 1"
            onChange={(e) => {
              setCarrouselOnePhoto(e.target.value);
            }}
          />
          <TextInput
            name="carrousel_two_picture"
            placeholder="Photo secondaire 2"
            onChange={(e) => {
              setCarrouselTwoPhoto(e.target.value);
            }}
          />

          <br />
          <SubmitInput value="Submit !" />
          <Button onClick={backButton} title={"Annuler"} />
        </form>
      </Center>
    </NewProductContainer>
  );
};
