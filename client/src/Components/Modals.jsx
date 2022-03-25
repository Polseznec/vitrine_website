import React from "react";
import { Button } from "./Buttons";

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
    <div style={style}>
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

const style = {
  width: "50vw",
  height: "50vh",
  marginLeft: "calc(50vw / 2)",
  marginTop: "calc(50vh / 2)",
  position: "fixed",
  left: 0,
  top: 0,
  overflow: "auto",
  zIndex: 1000,
  backgroundColor: "lightgray",
};
