import React from "react";
import { Button } from "../../Inputs/Inputs.styles";

export const IndexModal = ({
  className,
  title,
  btnValidateAction,
  btnCancelAction,
  onClickValidateAction,
  onClickCancelAction,
  ...props
}) => {
  return (
    <div className={className}>
      <div>
        <div>{title}</div>
        <br />
        <div>
          <Button onClick={onClickValidateAction} title={btnValidateAction} />
          <Button onClick={onClickCancelAction} title={btnCancelAction} />
        </div>
      </div>
    </div>
  );
};
