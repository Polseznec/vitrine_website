import React from "react";
import axios from "axios";

import { Button } from "../Buttons";
import { EditProductForm } from "./EditProductForm";
import { Modal } from "../Modals";

export const EditProduct = ({
  title,
  price,
  description_part_one,
  description_part_two,
  width,
  height,
  depth,
  type,
  mood,
  fabric_description,
  available,
  main_picture,
  pattern_picture,
  carrousel_one_picture,
  carrousel_two_picture,
  _id,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [delect, setDelect] = React.useState(false);
  const openEdit = () => {
    setEdit(!edit);
    setDelect(false);
  };
  const handleModal = () => {
    setDelect(!delect);
    setEdit(false);
  };
  const delectProduct = () => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/product/${_id}`,
      withCredentials: true,
    })
      .then(console.log("DELECTED"), (window.location = "/dashboard"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {edit ? (
        <EditProductForm
          title={title}
          price={price}
          description_part_one={description_part_one}
          description_part_two={description_part_two}
          width={width}
          height={height}
          depth={depth}
          type={type}
          fabric_description={fabric_description}
          available={available}
          mood={mood}
          _id={_id}
          main_picture={main_picture}
          pattern_picture={pattern_picture}
          carrousel_one_picture={carrousel_one_picture}
          carrousel_two_picture={carrousel_two_picture}
        />
      ) : (
        <div>
          <span>Nom du produit : {title}</span>
          <br />
          <span>Prix : {price}€ </span>
          <br />
          <span>Description part 1 : {description_part_one}</span>
          <br />
          <span>Description part 2 : {description_part_two}</span>
          <br />
          <span>largeur : {width} cm</span>
          <br />
          <span>hauter : {height} cm</span>
          <br />
          <span>profondeur ; {depth} cm</span>
          <br />
          <span>Type de Produit : {type}</span>
          <br />
          <span>Type de Tissu : {fabric_description}</span>
          <br />
          <span>Saison : {mood}</span>
          <br />

          <span>Disponible ? : {available ? "Oui" : "non"}</span>
          <br />
          <img src={main_picture} alt={title} style={{ maxHeight: "300px" }} />
          <br />
          <span>{_id}</span>
        </div>
      )}

      <div>
        <Button onClick={openEdit} title={edit ? "Annuler" : "Editer"} />
        <Button onClick={handleModal} title={"Suprimer"} />
      </div>
      {delect ? (
        <Modal
          title={"Etes vous sûr ?"}
          btnValidateAction={"Oui !"}
          btnCancelAction={"annuler"}
          onClickValidateAction={delectProduct}
          onClickCancelAction={handleModal}
        />
      ) : null}
    </div>
  );
};
