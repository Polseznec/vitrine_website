import React from "react";

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
