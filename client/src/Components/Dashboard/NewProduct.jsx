import React from "react";
import axios from "axios";
import { Button } from "../Buttons";
import { TextInput, NumberInput, FileInput, SubmitInput } from "../Inputs";

//styled
import { NewProductContainer } from "../styles/Dashboard/NewProductContainer.styled";
import { Center } from "../styles/Flexbox.styled";
import { BlocTitle } from "../Texts";

export const NewProduct = ({ backButton }) => {
  const [title, setTitle] = React.useState("");
  const [descriptionPartOne, setDescriptionPartOne] = React.useState("");
  const [descriptionPartTwo, setDescriptionPartTwo] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [depth, setDepth] = React.useState("");
  const [type, setType] = React.useState("");
  const [fabricDescription, setFabricDescription] = React.useState("");

  const handelLogin = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description_part_one: descriptionPartOne,
      description_part_two: descriptionPartTwo,
      height: height,
      width: width,
      depth: depth,
      type: type,
      fabric_description: fabricDescription,
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
          <TextInput
            name="type"
            placeholder="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <br />
          <TextInput
            name="fabricdescription"
            placeholder="fabricdescription"
            onChange={(e) => {
              setFabricDescription(e.target.value);
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
