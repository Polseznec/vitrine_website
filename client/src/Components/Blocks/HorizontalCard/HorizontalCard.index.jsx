import React from "react";
import * as C from "../../Containers/Containers.styles";

function IndexHorizontalCard({ className, title, description, id, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <span>{title}</span>
      <span>{description}</span>
      <span>{id}</span>
    </div>
  );
}

export default IndexHorizontalCard;
