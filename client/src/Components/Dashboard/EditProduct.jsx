import React from "react";
import axios from "axios";

import { Button } from "../Buttons";
import { EditProductForm } from "./EditProductForm";
import { Modal } from "../Modals";

export const EditProduct = ({ title, description, main_picture, _id }) => {
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
        <EditProductForm title={title} description={description} _id={_id} />
      ) : (
        <div>
          <span>{title}</span>
          <br />
          <span>{description}</span>
          <br />
          <img src={main_picture} alt={title} />
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
