import React from "react";

function ProductCard({
  className,
  title,
  description,
  main_picture,
  id,
  onClick,
}) {
  return (
    <div className={className} onClick={onClick}>
      <span>{title}</span>
      <span>{description}</span>
      <img src={main_picture} alt={title} style={{ height: "200px" }} />
      <span>{id}</span>
    </div>
  );
}

export default ProductCard;
