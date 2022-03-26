import React from "react";
import { Button } from "./Buttons";

//styled
import { StyledModal } from "./styles/Modal.styled";

export const Modal = ({
  className,
  title,
  btnValidateAction,
  btnCancelAction,
  onClickValidateAction,
  onClickCancelAction,
  ...props
}) => {
  return (
    <StyledModal>
      <div>{title}</div>
      <br />
      <div>
        <Button onClick={onClickValidateAction} title={btnValidateAction} />
        <Button onClick={onClickCancelAction} title={btnCancelAction} />
      </div>
    </StyledModal>
  );
};
