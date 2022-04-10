import React from "react";
import { Children } from "react/cjs/react.production.min";
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
  children,
  ...props
}) => {
  return (
    <StyledModal {...props}>
      {title ? <div>{title}</div> : null}
      <br />
      {children}
      <div>
        {onClickValidateAction ? (
          <Button onClick={onClickValidateAction} title={btnValidateAction} />
        ) : null}
        {onClickCancelAction ? (
          <Button onClick={onClickCancelAction} title={btnCancelAction} />
        ) : null}
      </div>
    </StyledModal>
  );
};
